// https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/elastigroup_azure_v3
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ElastigroupAzureV3Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/elastigroup_azure_v3#availability_vs_cost ElastigroupAzureV3#availability_vs_cost}
  */
  readonly availabilityVsCost?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/elastigroup_azure_v3#custom_data ElastigroupAzureV3#custom_data}
  */
  readonly customData?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/elastigroup_azure_v3#description ElastigroupAzureV3#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/elastigroup_azure_v3#desired_capacity ElastigroupAzureV3#desired_capacity}
  */
  readonly desiredCapacity?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/elastigroup_azure_v3#draining_timeout ElastigroupAzureV3#draining_timeout}
  */
  readonly drainingTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/elastigroup_azure_v3#fallback_to_on_demand ElastigroupAzureV3#fallback_to_on_demand}
  */
  readonly fallbackToOnDemand: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/elastigroup_azure_v3#id ElastigroupAzureV3#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/elastigroup_azure_v3#max_size ElastigroupAzureV3#max_size}
  */
  readonly maxSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/elastigroup_azure_v3#min_size ElastigroupAzureV3#min_size}
  */
  readonly minSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/elastigroup_azure_v3#name ElastigroupAzureV3#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/elastigroup_azure_v3#on_demand_count ElastigroupAzureV3#on_demand_count}
  */
  readonly onDemandCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/elastigroup_azure_v3#optimization_windows ElastigroupAzureV3#optimization_windows}
  */
  readonly optimizationWindows?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/elastigroup_azure_v3#os ElastigroupAzureV3#os}
  */
  readonly os: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/elastigroup_azure_v3#preferred_zones ElastigroupAzureV3#preferred_zones}
  */
  readonly preferredZones?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/elastigroup_azure_v3#region ElastigroupAzureV3#region}
  */
  readonly region: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/elastigroup_azure_v3#resource_group_name ElastigroupAzureV3#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/elastigroup_azure_v3#shutdown_script ElastigroupAzureV3#shutdown_script}
  */
  readonly shutdownScript?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/elastigroup_azure_v3#spot_percentage ElastigroupAzureV3#spot_percentage}
  */
  readonly spotPercentage?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/elastigroup_azure_v3#user_data ElastigroupAzureV3#user_data}
  */
  readonly userData?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/elastigroup_azure_v3#vm_name_prefix ElastigroupAzureV3#vm_name_prefix}
  */
  readonly vmNamePrefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/elastigroup_azure_v3#zones ElastigroupAzureV3#zones}
  */
  readonly zones?: string[];
  /**
  * boot_diagnostics block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/elastigroup_azure_v3#boot_diagnostics ElastigroupAzureV3#boot_diagnostics}
  */
  readonly bootDiagnostics?: ElastigroupAzureV3BootDiagnostics[] | cdktf.IResolvable;
  /**
  * capacity_reservation block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/elastigroup_azure_v3#capacity_reservation ElastigroupAzureV3#capacity_reservation}
  */
  readonly capacityReservation?: ElastigroupAzureV3CapacityReservation;
  /**
  * data_disk block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/elastigroup_azure_v3#data_disk ElastigroupAzureV3#data_disk}
  */
  readonly dataDisk?: ElastigroupAzureV3DataDisk[] | cdktf.IResolvable;
  /**
  * extensions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/elastigroup_azure_v3#extensions ElastigroupAzureV3#extensions}
  */
  readonly extensions?: ElastigroupAzureV3Extensions[] | cdktf.IResolvable;
  /**
  * health block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/elastigroup_azure_v3#health ElastigroupAzureV3#health}
  */
  readonly health?: ElastigroupAzureV3Health;
  /**
  * image block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/elastigroup_azure_v3#image ElastigroupAzureV3#image}
  */
  readonly image?: ElastigroupAzureV3Image[] | cdktf.IResolvable;
  /**
  * load_balancer block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/elastigroup_azure_v3#load_balancer ElastigroupAzureV3#load_balancer}
  */
  readonly loadBalancer?: ElastigroupAzureV3LoadBalancer[] | cdktf.IResolvable;
  /**
  * login block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/elastigroup_azure_v3#login ElastigroupAzureV3#login}
  */
  readonly login?: ElastigroupAzureV3Login;
  /**
  * managed_service_identity block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/elastigroup_azure_v3#managed_service_identity ElastigroupAzureV3#managed_service_identity}
  */
  readonly managedServiceIdentity?: ElastigroupAzureV3ManagedServiceIdentity[] | cdktf.IResolvable;
  /**
  * network block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/elastigroup_azure_v3#network ElastigroupAzureV3#network}
  */
  readonly network: ElastigroupAzureV3Network;
  /**
  * os_disk block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/elastigroup_azure_v3#os_disk ElastigroupAzureV3#os_disk}
  */
  readonly osDisk?: ElastigroupAzureV3OsDisk;
  /**
  * proximity_placement_groups block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/elastigroup_azure_v3#proximity_placement_groups ElastigroupAzureV3#proximity_placement_groups}
  */
  readonly proximityPlacementGroups?: ElastigroupAzureV3ProximityPlacementGroups[] | cdktf.IResolvable;
  /**
  * revert_to_spot block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/elastigroup_azure_v3#revert_to_spot ElastigroupAzureV3#revert_to_spot}
  */
  readonly revertToSpot?: ElastigroupAzureV3RevertToSpot;
  /**
  * scaling_down_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/elastigroup_azure_v3#scaling_down_policy ElastigroupAzureV3#scaling_down_policy}
  */
  readonly scalingDownPolicy?: ElastigroupAzureV3ScalingDownPolicy[] | cdktf.IResolvable;
  /**
  * scaling_up_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/elastigroup_azure_v3#scaling_up_policy ElastigroupAzureV3#scaling_up_policy}
  */
  readonly scalingUpPolicy?: ElastigroupAzureV3ScalingUpPolicy[] | cdktf.IResolvable;
  /**
  * scheduling_task block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/elastigroup_azure_v3#scheduling_task ElastigroupAzureV3#scheduling_task}
  */
  readonly schedulingTask?: ElastigroupAzureV3SchedulingTask[] | cdktf.IResolvable;
  /**
  * secret block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/elastigroup_azure_v3#secret ElastigroupAzureV3#secret}
  */
  readonly secret?: ElastigroupAzureV3Secret[] | cdktf.IResolvable;
  /**
  * security block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/elastigroup_azure_v3#security ElastigroupAzureV3#security}
  */
  readonly security?: ElastigroupAzureV3Security;
  /**
  * signal block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/elastigroup_azure_v3#signal ElastigroupAzureV3#signal}
  */
  readonly signal?: ElastigroupAzureV3Signal[] | cdktf.IResolvable;
  /**
  * tags block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/elastigroup_azure_v3#tags ElastigroupAzureV3#tags}
  */
  readonly tags?: ElastigroupAzureV3Tags[] | cdktf.IResolvable;
  /**
  * vm_sizes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/elastigroup_azure_v3#vm_sizes ElastigroupAzureV3#vm_sizes}
  */
  readonly vmSizes: ElastigroupAzureV3VmSizes;
}
export interface ElastigroupAzureV3BootDiagnostics {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/elastigroup_azure_v3#is_enabled ElastigroupAzureV3#is_enabled}
  */
  readonly isEnabled: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/elastigroup_azure_v3#storage_url ElastigroupAzureV3#storage_url}
  */
  readonly storageUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/elastigroup_azure_v3#type ElastigroupAzureV3#type}
  */
  readonly type: string;
}

export function elastigroupAzureV3BootDiagnosticsToTerraform(struct?: ElastigroupAzureV3BootDiagnostics | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    is_enabled: cdktf.booleanToTerraform(struct!.isEnabled),
    storage_url: cdktf.stringToTerraform(struct!.storageUrl),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function elastigroupAzureV3BootDiagnosticsToHclTerraform(struct?: ElastigroupAzureV3BootDiagnostics | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    is_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.isEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    storage_url: {
      value: cdktf.stringToHclTerraform(struct!.storageUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ElastigroupAzureV3BootDiagnosticsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ElastigroupAzureV3BootDiagnostics | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._isEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.isEnabled = this._isEnabled;
    }
    if (this._storageUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageUrl = this._storageUrl;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ElastigroupAzureV3BootDiagnostics | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._isEnabled = undefined;
      this._storageUrl = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._isEnabled = value.isEnabled;
      this._storageUrl = value.storageUrl;
      this._type = value.type;
    }
  }

  // is_enabled - computed: false, optional: false, required: true
  private _isEnabled?: boolean | cdktf.IResolvable; 
  public get isEnabled() {
    return this.getBooleanAttribute('is_enabled');
  }
  public set isEnabled(value: boolean | cdktf.IResolvable) {
    this._isEnabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get isEnabledInput() {
    return this._isEnabled;
  }

  // storage_url - computed: true, optional: true, required: false
  private _storageUrl?: string; 
  public get storageUrl() {
    return this.getStringAttribute('storage_url');
  }
  public set storageUrl(value: string) {
    this._storageUrl = value;
  }
  public resetStorageUrl() {
    this._storageUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageUrlInput() {
    return this._storageUrl;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

export class ElastigroupAzureV3BootDiagnosticsList extends cdktf.ComplexList {
  public internalValue? : ElastigroupAzureV3BootDiagnostics[] | cdktf.IResolvable

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
  public get(index: number): ElastigroupAzureV3BootDiagnosticsOutputReference {
    return new ElastigroupAzureV3BootDiagnosticsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ElastigroupAzureV3CapacityReservationCapacityReservationGroups {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/elastigroup_azure_v3#crg_name ElastigroupAzureV3#crg_name}
  */
  readonly crgName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/elastigroup_azure_v3#crg_resource_group_name ElastigroupAzureV3#crg_resource_group_name}
  */
  readonly crgResourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/elastigroup_azure_v3#crg_should_prioritize ElastigroupAzureV3#crg_should_prioritize}
  */
  readonly crgShouldPrioritize?: boolean | cdktf.IResolvable;
}

export function elastigroupAzureV3CapacityReservationCapacityReservationGroupsToTerraform(struct?: ElastigroupAzureV3CapacityReservationCapacityReservationGroupsOutputReference | ElastigroupAzureV3CapacityReservationCapacityReservationGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    crg_name: cdktf.stringToTerraform(struct!.crgName),
    crg_resource_group_name: cdktf.stringToTerraform(struct!.crgResourceGroupName),
    crg_should_prioritize: cdktf.booleanToTerraform(struct!.crgShouldPrioritize),
  }
}


export function elastigroupAzureV3CapacityReservationCapacityReservationGroupsToHclTerraform(struct?: ElastigroupAzureV3CapacityReservationCapacityReservationGroupsOutputReference | ElastigroupAzureV3CapacityReservationCapacityReservationGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    crg_name: {
      value: cdktf.stringToHclTerraform(struct!.crgName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    crg_resource_group_name: {
      value: cdktf.stringToHclTerraform(struct!.crgResourceGroupName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    crg_should_prioritize: {
      value: cdktf.booleanToHclTerraform(struct!.crgShouldPrioritize),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ElastigroupAzureV3CapacityReservationCapacityReservationGroupsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ElastigroupAzureV3CapacityReservationCapacityReservationGroups | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._crgName !== undefined) {
      hasAnyValues = true;
      internalValueResult.crgName = this._crgName;
    }
    if (this._crgResourceGroupName !== undefined) {
      hasAnyValues = true;
      internalValueResult.crgResourceGroupName = this._crgResourceGroupName;
    }
    if (this._crgShouldPrioritize !== undefined) {
      hasAnyValues = true;
      internalValueResult.crgShouldPrioritize = this._crgShouldPrioritize;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ElastigroupAzureV3CapacityReservationCapacityReservationGroups | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._crgName = undefined;
      this._crgResourceGroupName = undefined;
      this._crgShouldPrioritize = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._crgName = value.crgName;
      this._crgResourceGroupName = value.crgResourceGroupName;
      this._crgShouldPrioritize = value.crgShouldPrioritize;
    }
  }

  // crg_name - computed: false, optional: false, required: true
  private _crgName?: string; 
  public get crgName() {
    return this.getStringAttribute('crg_name');
  }
  public set crgName(value: string) {
    this._crgName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get crgNameInput() {
    return this._crgName;
  }

  // crg_resource_group_name - computed: false, optional: false, required: true
  private _crgResourceGroupName?: string; 
  public get crgResourceGroupName() {
    return this.getStringAttribute('crg_resource_group_name');
  }
  public set crgResourceGroupName(value: string) {
    this._crgResourceGroupName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get crgResourceGroupNameInput() {
    return this._crgResourceGroupName;
  }

  // crg_should_prioritize - computed: false, optional: true, required: false
  private _crgShouldPrioritize?: boolean | cdktf.IResolvable; 
  public get crgShouldPrioritize() {
    return this.getBooleanAttribute('crg_should_prioritize');
  }
  public set crgShouldPrioritize(value: boolean | cdktf.IResolvable) {
    this._crgShouldPrioritize = value;
  }
  public resetCrgShouldPrioritize() {
    this._crgShouldPrioritize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get crgShouldPrioritizeInput() {
    return this._crgShouldPrioritize;
  }
}
export interface ElastigroupAzureV3CapacityReservation {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/elastigroup_azure_v3#should_utilize ElastigroupAzureV3#should_utilize}
  */
  readonly shouldUtilize: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/elastigroup_azure_v3#utilization_strategy ElastigroupAzureV3#utilization_strategy}
  */
  readonly utilizationStrategy: string;
  /**
  * capacity_reservation_groups block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/elastigroup_azure_v3#capacity_reservation_groups ElastigroupAzureV3#capacity_reservation_groups}
  */
  readonly capacityReservationGroups?: ElastigroupAzureV3CapacityReservationCapacityReservationGroups;
}

export function elastigroupAzureV3CapacityReservationToTerraform(struct?: ElastigroupAzureV3CapacityReservationOutputReference | ElastigroupAzureV3CapacityReservation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    should_utilize: cdktf.booleanToTerraform(struct!.shouldUtilize),
    utilization_strategy: cdktf.stringToTerraform(struct!.utilizationStrategy),
    capacity_reservation_groups: elastigroupAzureV3CapacityReservationCapacityReservationGroupsToTerraform(struct!.capacityReservationGroups),
  }
}


export function elastigroupAzureV3CapacityReservationToHclTerraform(struct?: ElastigroupAzureV3CapacityReservationOutputReference | ElastigroupAzureV3CapacityReservation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    should_utilize: {
      value: cdktf.booleanToHclTerraform(struct!.shouldUtilize),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    utilization_strategy: {
      value: cdktf.stringToHclTerraform(struct!.utilizationStrategy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    capacity_reservation_groups: {
      value: elastigroupAzureV3CapacityReservationCapacityReservationGroupsToHclTerraform(struct!.capacityReservationGroups),
      isBlock: true,
      type: "set",
      storageClassType: "ElastigroupAzureV3CapacityReservationCapacityReservationGroupsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ElastigroupAzureV3CapacityReservationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ElastigroupAzureV3CapacityReservation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._shouldUtilize !== undefined) {
      hasAnyValues = true;
      internalValueResult.shouldUtilize = this._shouldUtilize;
    }
    if (this._utilizationStrategy !== undefined) {
      hasAnyValues = true;
      internalValueResult.utilizationStrategy = this._utilizationStrategy;
    }
    if (this._capacityReservationGroups?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.capacityReservationGroups = this._capacityReservationGroups?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ElastigroupAzureV3CapacityReservation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._shouldUtilize = undefined;
      this._utilizationStrategy = undefined;
      this._capacityReservationGroups.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._shouldUtilize = value.shouldUtilize;
      this._utilizationStrategy = value.utilizationStrategy;
      this._capacityReservationGroups.internalValue = value.capacityReservationGroups;
    }
  }

  // should_utilize - computed: false, optional: false, required: true
  private _shouldUtilize?: boolean | cdktf.IResolvable; 
  public get shouldUtilize() {
    return this.getBooleanAttribute('should_utilize');
  }
  public set shouldUtilize(value: boolean | cdktf.IResolvable) {
    this._shouldUtilize = value;
  }
  // Temporarily expose input value. Use with caution.
  public get shouldUtilizeInput() {
    return this._shouldUtilize;
  }

  // utilization_strategy - computed: false, optional: false, required: true
  private _utilizationStrategy?: string; 
  public get utilizationStrategy() {
    return this.getStringAttribute('utilization_strategy');
  }
  public set utilizationStrategy(value: string) {
    this._utilizationStrategy = value;
  }
  // Temporarily expose input value. Use with caution.
  public get utilizationStrategyInput() {
    return this._utilizationStrategy;
  }

  // capacity_reservation_groups - computed: false, optional: true, required: false
  private _capacityReservationGroups = new ElastigroupAzureV3CapacityReservationCapacityReservationGroupsOutputReference(this, "capacity_reservation_groups");
  public get capacityReservationGroups() {
    return this._capacityReservationGroups;
  }
  public putCapacityReservationGroups(value: ElastigroupAzureV3CapacityReservationCapacityReservationGroups) {
    this._capacityReservationGroups.internalValue = value;
  }
  public resetCapacityReservationGroups() {
    this._capacityReservationGroups.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get capacityReservationGroupsInput() {
    return this._capacityReservationGroups.internalValue;
  }
}
export interface ElastigroupAzureV3DataDisk {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/elastigroup_azure_v3#lun ElastigroupAzureV3#lun}
  */
  readonly lun: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/elastigroup_azure_v3#size_gb ElastigroupAzureV3#size_gb}
  */
  readonly sizeGb: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/elastigroup_azure_v3#type ElastigroupAzureV3#type}
  */
  readonly type: string;
}

export function elastigroupAzureV3DataDiskToTerraform(struct?: ElastigroupAzureV3DataDisk | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    lun: cdktf.numberToTerraform(struct!.lun),
    size_gb: cdktf.numberToTerraform(struct!.sizeGb),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function elastigroupAzureV3DataDiskToHclTerraform(struct?: ElastigroupAzureV3DataDisk | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    lun: {
      value: cdktf.numberToHclTerraform(struct!.lun),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    size_gb: {
      value: cdktf.numberToHclTerraform(struct!.sizeGb),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ElastigroupAzureV3DataDiskOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ElastigroupAzureV3DataDisk | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._lun !== undefined) {
      hasAnyValues = true;
      internalValueResult.lun = this._lun;
    }
    if (this._sizeGb !== undefined) {
      hasAnyValues = true;
      internalValueResult.sizeGb = this._sizeGb;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ElastigroupAzureV3DataDisk | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._lun = undefined;
      this._sizeGb = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._lun = value.lun;
      this._sizeGb = value.sizeGb;
      this._type = value.type;
    }
  }

  // lun - computed: false, optional: false, required: true
  private _lun?: number; 
  public get lun() {
    return this.getNumberAttribute('lun');
  }
  public set lun(value: number) {
    this._lun = value;
  }
  // Temporarily expose input value. Use with caution.
  public get lunInput() {
    return this._lun;
  }

  // size_gb - computed: false, optional: false, required: true
  private _sizeGb?: number; 
  public get sizeGb() {
    return this.getNumberAttribute('size_gb');
  }
  public set sizeGb(value: number) {
    this._sizeGb = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeGbInput() {
    return this._sizeGb;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

export class ElastigroupAzureV3DataDiskList extends cdktf.ComplexList {
  public internalValue? : ElastigroupAzureV3DataDisk[] | cdktf.IResolvable

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
  public get(index: number): ElastigroupAzureV3DataDiskOutputReference {
    return new ElastigroupAzureV3DataDiskOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ElastigroupAzureV3ExtensionsProtectedSettingsFromKeyVault {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/elastigroup_azure_v3#secret_url ElastigroupAzureV3#secret_url}
  */
  readonly secretUrl: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/elastigroup_azure_v3#source_vault ElastigroupAzureV3#source_vault}
  */
  readonly sourceVault: string;
}

export function elastigroupAzureV3ExtensionsProtectedSettingsFromKeyVaultToTerraform(struct?: ElastigroupAzureV3ExtensionsProtectedSettingsFromKeyVaultOutputReference | ElastigroupAzureV3ExtensionsProtectedSettingsFromKeyVault): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    secret_url: cdktf.stringToTerraform(struct!.secretUrl),
    source_vault: cdktf.stringToTerraform(struct!.sourceVault),
  }
}


export function elastigroupAzureV3ExtensionsProtectedSettingsFromKeyVaultToHclTerraform(struct?: ElastigroupAzureV3ExtensionsProtectedSettingsFromKeyVaultOutputReference | ElastigroupAzureV3ExtensionsProtectedSettingsFromKeyVault): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    secret_url: {
      value: cdktf.stringToHclTerraform(struct!.secretUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_vault: {
      value: cdktf.stringToHclTerraform(struct!.sourceVault),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ElastigroupAzureV3ExtensionsProtectedSettingsFromKeyVaultOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ElastigroupAzureV3ExtensionsProtectedSettingsFromKeyVault | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._secretUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretUrl = this._secretUrl;
    }
    if (this._sourceVault !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceVault = this._sourceVault;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ElastigroupAzureV3ExtensionsProtectedSettingsFromKeyVault | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._secretUrl = undefined;
      this._sourceVault = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._secretUrl = value.secretUrl;
      this._sourceVault = value.sourceVault;
    }
  }

  // secret_url - computed: false, optional: false, required: true
  private _secretUrl?: string; 
  public get secretUrl() {
    return this.getStringAttribute('secret_url');
  }
  public set secretUrl(value: string) {
    this._secretUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretUrlInput() {
    return this._secretUrl;
  }

  // source_vault - computed: false, optional: false, required: true
  private _sourceVault?: string; 
  public get sourceVault() {
    return this.getStringAttribute('source_vault');
  }
  public set sourceVault(value: string) {
    this._sourceVault = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceVaultInput() {
    return this._sourceVault;
  }
}
export interface ElastigroupAzureV3Extensions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/elastigroup_azure_v3#api_version ElastigroupAzureV3#api_version}
  */
  readonly apiVersion: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/elastigroup_azure_v3#enable_automatic_upgrade ElastigroupAzureV3#enable_automatic_upgrade}
  */
  readonly enableAutomaticUpgrade?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/elastigroup_azure_v3#minor_version_auto_upgrade ElastigroupAzureV3#minor_version_auto_upgrade}
  */
  readonly minorVersionAutoUpgrade: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/elastigroup_azure_v3#name ElastigroupAzureV3#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/elastigroup_azure_v3#protected_settings ElastigroupAzureV3#protected_settings}
  */
  readonly protectedSettings?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/elastigroup_azure_v3#public_settings ElastigroupAzureV3#public_settings}
  */
  readonly publicSettings?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/elastigroup_azure_v3#publisher ElastigroupAzureV3#publisher}
  */
  readonly publisher: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/elastigroup_azure_v3#type ElastigroupAzureV3#type}
  */
  readonly type: string;
  /**
  * protected_settings_from_key_vault block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/elastigroup_azure_v3#protected_settings_from_key_vault ElastigroupAzureV3#protected_settings_from_key_vault}
  */
  readonly protectedSettingsFromKeyVault?: ElastigroupAzureV3ExtensionsProtectedSettingsFromKeyVault;
}

export function elastigroupAzureV3ExtensionsToTerraform(struct?: ElastigroupAzureV3Extensions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_version: cdktf.stringToTerraform(struct!.apiVersion),
    enable_automatic_upgrade: cdktf.booleanToTerraform(struct!.enableAutomaticUpgrade),
    minor_version_auto_upgrade: cdktf.booleanToTerraform(struct!.minorVersionAutoUpgrade),
    name: cdktf.stringToTerraform(struct!.name),
    protected_settings: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.protectedSettings),
    public_settings: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.publicSettings),
    publisher: cdktf.stringToTerraform(struct!.publisher),
    type: cdktf.stringToTerraform(struct!.type),
    protected_settings_from_key_vault: elastigroupAzureV3ExtensionsProtectedSettingsFromKeyVaultToTerraform(struct!.protectedSettingsFromKeyVault),
  }
}


export function elastigroupAzureV3ExtensionsToHclTerraform(struct?: ElastigroupAzureV3Extensions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    api_version: {
      value: cdktf.stringToHclTerraform(struct!.apiVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enable_automatic_upgrade: {
      value: cdktf.booleanToHclTerraform(struct!.enableAutomaticUpgrade),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    minor_version_auto_upgrade: {
      value: cdktf.booleanToHclTerraform(struct!.minorVersionAutoUpgrade),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    protected_settings: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.protectedSettings),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    public_settings: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.publicSettings),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    publisher: {
      value: cdktf.stringToHclTerraform(struct!.publisher),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    protected_settings_from_key_vault: {
      value: elastigroupAzureV3ExtensionsProtectedSettingsFromKeyVaultToHclTerraform(struct!.protectedSettingsFromKeyVault),
      isBlock: true,
      type: "list",
      storageClassType: "ElastigroupAzureV3ExtensionsProtectedSettingsFromKeyVaultList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ElastigroupAzureV3ExtensionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ElastigroupAzureV3Extensions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiVersion = this._apiVersion;
    }
    if (this._enableAutomaticUpgrade !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableAutomaticUpgrade = this._enableAutomaticUpgrade;
    }
    if (this._minorVersionAutoUpgrade !== undefined) {
      hasAnyValues = true;
      internalValueResult.minorVersionAutoUpgrade = this._minorVersionAutoUpgrade;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._protectedSettings !== undefined) {
      hasAnyValues = true;
      internalValueResult.protectedSettings = this._protectedSettings;
    }
    if (this._publicSettings !== undefined) {
      hasAnyValues = true;
      internalValueResult.publicSettings = this._publicSettings;
    }
    if (this._publisher !== undefined) {
      hasAnyValues = true;
      internalValueResult.publisher = this._publisher;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._protectedSettingsFromKeyVault?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.protectedSettingsFromKeyVault = this._protectedSettingsFromKeyVault?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ElastigroupAzureV3Extensions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apiVersion = undefined;
      this._enableAutomaticUpgrade = undefined;
      this._minorVersionAutoUpgrade = undefined;
      this._name = undefined;
      this._protectedSettings = undefined;
      this._publicSettings = undefined;
      this._publisher = undefined;
      this._type = undefined;
      this._protectedSettingsFromKeyVault.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._apiVersion = value.apiVersion;
      this._enableAutomaticUpgrade = value.enableAutomaticUpgrade;
      this._minorVersionAutoUpgrade = value.minorVersionAutoUpgrade;
      this._name = value.name;
      this._protectedSettings = value.protectedSettings;
      this._publicSettings = value.publicSettings;
      this._publisher = value.publisher;
      this._type = value.type;
      this._protectedSettingsFromKeyVault.internalValue = value.protectedSettingsFromKeyVault;
    }
  }

  // api_version - computed: false, optional: false, required: true
  private _apiVersion?: string; 
  public get apiVersion() {
    return this.getStringAttribute('api_version');
  }
  public set apiVersion(value: string) {
    this._apiVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get apiVersionInput() {
    return this._apiVersion;
  }

  // enable_automatic_upgrade - computed: false, optional: true, required: false
  private _enableAutomaticUpgrade?: boolean | cdktf.IResolvable; 
  public get enableAutomaticUpgrade() {
    return this.getBooleanAttribute('enable_automatic_upgrade');
  }
  public set enableAutomaticUpgrade(value: boolean | cdktf.IResolvable) {
    this._enableAutomaticUpgrade = value;
  }
  public resetEnableAutomaticUpgrade() {
    this._enableAutomaticUpgrade = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableAutomaticUpgradeInput() {
    return this._enableAutomaticUpgrade;
  }

  // minor_version_auto_upgrade - computed: false, optional: false, required: true
  private _minorVersionAutoUpgrade?: boolean | cdktf.IResolvable; 
  public get minorVersionAutoUpgrade() {
    return this.getBooleanAttribute('minor_version_auto_upgrade');
  }
  public set minorVersionAutoUpgrade(value: boolean | cdktf.IResolvable) {
    this._minorVersionAutoUpgrade = value;
  }
  // Temporarily expose input value. Use with caution.
  public get minorVersionAutoUpgradeInput() {
    return this._minorVersionAutoUpgrade;
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

  // protected_settings - computed: true, optional: true, required: false
  private _protectedSettings?: { [key: string]: string }; 
  public get protectedSettings() {
    return this.getStringMapAttribute('protected_settings');
  }
  public set protectedSettings(value: { [key: string]: string }) {
    this._protectedSettings = value;
  }
  public resetProtectedSettings() {
    this._protectedSettings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protectedSettingsInput() {
    return this._protectedSettings;
  }

  // public_settings - computed: true, optional: true, required: false
  private _publicSettings?: { [key: string]: string }; 
  public get publicSettings() {
    return this.getStringMapAttribute('public_settings');
  }
  public set publicSettings(value: { [key: string]: string }) {
    this._publicSettings = value;
  }
  public resetPublicSettings() {
    this._publicSettings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicSettingsInput() {
    return this._publicSettings;
  }

  // publisher - computed: false, optional: false, required: true
  private _publisher?: string; 
  public get publisher() {
    return this.getStringAttribute('publisher');
  }
  public set publisher(value: string) {
    this._publisher = value;
  }
  // Temporarily expose input value. Use with caution.
  public get publisherInput() {
    return this._publisher;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // protected_settings_from_key_vault - computed: false, optional: true, required: false
  private _protectedSettingsFromKeyVault = new ElastigroupAzureV3ExtensionsProtectedSettingsFromKeyVaultOutputReference(this, "protected_settings_from_key_vault");
  public get protectedSettingsFromKeyVault() {
    return this._protectedSettingsFromKeyVault;
  }
  public putProtectedSettingsFromKeyVault(value: ElastigroupAzureV3ExtensionsProtectedSettingsFromKeyVault) {
    this._protectedSettingsFromKeyVault.internalValue = value;
  }
  public resetProtectedSettingsFromKeyVault() {
    this._protectedSettingsFromKeyVault.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protectedSettingsFromKeyVaultInput() {
    return this._protectedSettingsFromKeyVault.internalValue;
  }
}

export class ElastigroupAzureV3ExtensionsList extends cdktf.ComplexList {
  public internalValue? : ElastigroupAzureV3Extensions[] | cdktf.IResolvable

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
  public get(index: number): ElastigroupAzureV3ExtensionsOutputReference {
    return new ElastigroupAzureV3ExtensionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ElastigroupAzureV3Health {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/elastigroup_azure_v3#auto_healing ElastigroupAzureV3#auto_healing}
  */
  readonly autoHealing?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/elastigroup_azure_v3#grace_period ElastigroupAzureV3#grace_period}
  */
  readonly gracePeriod?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/elastigroup_azure_v3#health_check_types ElastigroupAzureV3#health_check_types}
  */
  readonly healthCheckTypes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/elastigroup_azure_v3#unhealthy_duration ElastigroupAzureV3#unhealthy_duration}
  */
  readonly unhealthyDuration?: number;
}

export function elastigroupAzureV3HealthToTerraform(struct?: ElastigroupAzureV3HealthOutputReference | ElastigroupAzureV3Health): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auto_healing: cdktf.booleanToTerraform(struct!.autoHealing),
    grace_period: cdktf.numberToTerraform(struct!.gracePeriod),
    health_check_types: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.healthCheckTypes),
    unhealthy_duration: cdktf.numberToTerraform(struct!.unhealthyDuration),
  }
}


export function elastigroupAzureV3HealthToHclTerraform(struct?: ElastigroupAzureV3HealthOutputReference | ElastigroupAzureV3Health): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auto_healing: {
      value: cdktf.booleanToHclTerraform(struct!.autoHealing),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    grace_period: {
      value: cdktf.numberToHclTerraform(struct!.gracePeriod),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    health_check_types: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.healthCheckTypes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    unhealthy_duration: {
      value: cdktf.numberToHclTerraform(struct!.unhealthyDuration),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ElastigroupAzureV3HealthOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ElastigroupAzureV3Health | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autoHealing !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoHealing = this._autoHealing;
    }
    if (this._gracePeriod !== undefined) {
      hasAnyValues = true;
      internalValueResult.gracePeriod = this._gracePeriod;
    }
    if (this._healthCheckTypes !== undefined) {
      hasAnyValues = true;
      internalValueResult.healthCheckTypes = this._healthCheckTypes;
    }
    if (this._unhealthyDuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.unhealthyDuration = this._unhealthyDuration;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ElastigroupAzureV3Health | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._autoHealing = undefined;
      this._gracePeriod = undefined;
      this._healthCheckTypes = undefined;
      this._unhealthyDuration = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._autoHealing = value.autoHealing;
      this._gracePeriod = value.gracePeriod;
      this._healthCheckTypes = value.healthCheckTypes;
      this._unhealthyDuration = value.unhealthyDuration;
    }
  }

  // auto_healing - computed: false, optional: true, required: false
  private _autoHealing?: boolean | cdktf.IResolvable; 
  public get autoHealing() {
    return this.getBooleanAttribute('auto_healing');
  }
  public set autoHealing(value: boolean | cdktf.IResolvable) {
    this._autoHealing = value;
  }
  public resetAutoHealing() {
    this._autoHealing = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoHealingInput() {
    return this._autoHealing;
  }

  // grace_period - computed: false, optional: true, required: false
  private _gracePeriod?: number; 
  public get gracePeriod() {
    return this.getNumberAttribute('grace_period');
  }
  public set gracePeriod(value: number) {
    this._gracePeriod = value;
  }
  public resetGracePeriod() {
    this._gracePeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gracePeriodInput() {
    return this._gracePeriod;
  }

  // health_check_types - computed: false, optional: true, required: false
  private _healthCheckTypes?: string[]; 
  public get healthCheckTypes() {
    return this.getListAttribute('health_check_types');
  }
  public set healthCheckTypes(value: string[]) {
    this._healthCheckTypes = value;
  }
  public resetHealthCheckTypes() {
    this._healthCheckTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthCheckTypesInput() {
    return this._healthCheckTypes;
  }

  // unhealthy_duration - computed: false, optional: true, required: false
  private _unhealthyDuration?: number; 
  public get unhealthyDuration() {
    return this.getNumberAttribute('unhealthy_duration');
  }
  public set unhealthyDuration(value: number) {
    this._unhealthyDuration = value;
  }
  public resetUnhealthyDuration() {
    this._unhealthyDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unhealthyDurationInput() {
    return this._unhealthyDuration;
  }
}
export interface ElastigroupAzureV3ImageCustom {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/elastigroup_azure_v3#image_name ElastigroupAzureV3#image_name}
  */
  readonly imageName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/elastigroup_azure_v3#resource_group_name ElastigroupAzureV3#resource_group_name}
  */
  readonly resourceGroupName: string;
}

export function elastigroupAzureV3ImageCustomToTerraform(struct?: ElastigroupAzureV3ImageCustom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    image_name: cdktf.stringToTerraform(struct!.imageName),
    resource_group_name: cdktf.stringToTerraform(struct!.resourceGroupName),
  }
}


export function elastigroupAzureV3ImageCustomToHclTerraform(struct?: ElastigroupAzureV3ImageCustom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    image_name: {
      value: cdktf.stringToHclTerraform(struct!.imageName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource_group_name: {
      value: cdktf.stringToHclTerraform(struct!.resourceGroupName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ElastigroupAzureV3ImageCustomOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ElastigroupAzureV3ImageCustom | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._imageName !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageName = this._imageName;
    }
    if (this._resourceGroupName !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceGroupName = this._resourceGroupName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ElastigroupAzureV3ImageCustom | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._imageName = undefined;
      this._resourceGroupName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._imageName = value.imageName;
      this._resourceGroupName = value.resourceGroupName;
    }
  }

  // image_name - computed: false, optional: false, required: true
  private _imageName?: string; 
  public get imageName() {
    return this.getStringAttribute('image_name');
  }
  public set imageName(value: string) {
    this._imageName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get imageNameInput() {
    return this._imageName;
  }

  // resource_group_name - computed: false, optional: false, required: true
  private _resourceGroupName?: string; 
  public get resourceGroupName() {
    return this.getStringAttribute('resource_group_name');
  }
  public set resourceGroupName(value: string) {
    this._resourceGroupName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceGroupNameInput() {
    return this._resourceGroupName;
  }
}

export class ElastigroupAzureV3ImageCustomList extends cdktf.ComplexList {
  public internalValue? : ElastigroupAzureV3ImageCustom[] | cdktf.IResolvable

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
  public get(index: number): ElastigroupAzureV3ImageCustomOutputReference {
    return new ElastigroupAzureV3ImageCustomOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ElastigroupAzureV3ImageGalleryImage {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/elastigroup_azure_v3#gallery_name ElastigroupAzureV3#gallery_name}
  */
  readonly galleryName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/elastigroup_azure_v3#image_name ElastigroupAzureV3#image_name}
  */
  readonly imageName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/elastigroup_azure_v3#resource_group_name ElastigroupAzureV3#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/elastigroup_azure_v3#spot_account_id ElastigroupAzureV3#spot_account_id}
  */
  readonly spotAccountId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/elastigroup_azure_v3#version ElastigroupAzureV3#version}
  */
  readonly version: string;
}

export function elastigroupAzureV3ImageGalleryImageToTerraform(struct?: ElastigroupAzureV3ImageGalleryImage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    gallery_name: cdktf.stringToTerraform(struct!.galleryName),
    image_name: cdktf.stringToTerraform(struct!.imageName),
    resource_group_name: cdktf.stringToTerraform(struct!.resourceGroupName),
    spot_account_id: cdktf.stringToTerraform(struct!.spotAccountId),
    version: cdktf.stringToTerraform(struct!.version),
  }
}


export function elastigroupAzureV3ImageGalleryImageToHclTerraform(struct?: ElastigroupAzureV3ImageGalleryImage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    gallery_name: {
      value: cdktf.stringToHclTerraform(struct!.galleryName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    image_name: {
      value: cdktf.stringToHclTerraform(struct!.imageName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource_group_name: {
      value: cdktf.stringToHclTerraform(struct!.resourceGroupName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    spot_account_id: {
      value: cdktf.stringToHclTerraform(struct!.spotAccountId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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

export class ElastigroupAzureV3ImageGalleryImageOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ElastigroupAzureV3ImageGalleryImage | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._galleryName !== undefined) {
      hasAnyValues = true;
      internalValueResult.galleryName = this._galleryName;
    }
    if (this._imageName !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageName = this._imageName;
    }
    if (this._resourceGroupName !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceGroupName = this._resourceGroupName;
    }
    if (this._spotAccountId !== undefined) {
      hasAnyValues = true;
      internalValueResult.spotAccountId = this._spotAccountId;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ElastigroupAzureV3ImageGalleryImage | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._galleryName = undefined;
      this._imageName = undefined;
      this._resourceGroupName = undefined;
      this._spotAccountId = undefined;
      this._version = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._galleryName = value.galleryName;
      this._imageName = value.imageName;
      this._resourceGroupName = value.resourceGroupName;
      this._spotAccountId = value.spotAccountId;
      this._version = value.version;
    }
  }

  // gallery_name - computed: false, optional: false, required: true
  private _galleryName?: string; 
  public get galleryName() {
    return this.getStringAttribute('gallery_name');
  }
  public set galleryName(value: string) {
    this._galleryName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get galleryNameInput() {
    return this._galleryName;
  }

  // image_name - computed: false, optional: false, required: true
  private _imageName?: string; 
  public get imageName() {
    return this.getStringAttribute('image_name');
  }
  public set imageName(value: string) {
    this._imageName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get imageNameInput() {
    return this._imageName;
  }

  // resource_group_name - computed: false, optional: false, required: true
  private _resourceGroupName?: string; 
  public get resourceGroupName() {
    return this.getStringAttribute('resource_group_name');
  }
  public set resourceGroupName(value: string) {
    this._resourceGroupName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceGroupNameInput() {
    return this._resourceGroupName;
  }

  // spot_account_id - computed: false, optional: true, required: false
  private _spotAccountId?: string; 
  public get spotAccountId() {
    return this.getStringAttribute('spot_account_id');
  }
  public set spotAccountId(value: string) {
    this._spotAccountId = value;
  }
  public resetSpotAccountId() {
    this._spotAccountId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spotAccountIdInput() {
    return this._spotAccountId;
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

export class ElastigroupAzureV3ImageGalleryImageList extends cdktf.ComplexList {
  public internalValue? : ElastigroupAzureV3ImageGalleryImage[] | cdktf.IResolvable

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
  public get(index: number): ElastigroupAzureV3ImageGalleryImageOutputReference {
    return new ElastigroupAzureV3ImageGalleryImageOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ElastigroupAzureV3ImageMarketplace {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/elastigroup_azure_v3#offer ElastigroupAzureV3#offer}
  */
  readonly offer: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/elastigroup_azure_v3#publisher ElastigroupAzureV3#publisher}
  */
  readonly publisher: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/elastigroup_azure_v3#sku ElastigroupAzureV3#sku}
  */
  readonly sku: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/elastigroup_azure_v3#version ElastigroupAzureV3#version}
  */
  readonly version: string;
}

export function elastigroupAzureV3ImageMarketplaceToTerraform(struct?: ElastigroupAzureV3ImageMarketplace | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    offer: cdktf.stringToTerraform(struct!.offer),
    publisher: cdktf.stringToTerraform(struct!.publisher),
    sku: cdktf.stringToTerraform(struct!.sku),
    version: cdktf.stringToTerraform(struct!.version),
  }
}


export function elastigroupAzureV3ImageMarketplaceToHclTerraform(struct?: ElastigroupAzureV3ImageMarketplace | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    offer: {
      value: cdktf.stringToHclTerraform(struct!.offer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    publisher: {
      value: cdktf.stringToHclTerraform(struct!.publisher),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sku: {
      value: cdktf.stringToHclTerraform(struct!.sku),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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

export class ElastigroupAzureV3ImageMarketplaceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ElastigroupAzureV3ImageMarketplace | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._offer !== undefined) {
      hasAnyValues = true;
      internalValueResult.offer = this._offer;
    }
    if (this._publisher !== undefined) {
      hasAnyValues = true;
      internalValueResult.publisher = this._publisher;
    }
    if (this._sku !== undefined) {
      hasAnyValues = true;
      internalValueResult.sku = this._sku;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ElastigroupAzureV3ImageMarketplace | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._offer = undefined;
      this._publisher = undefined;
      this._sku = undefined;
      this._version = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._offer = value.offer;
      this._publisher = value.publisher;
      this._sku = value.sku;
      this._version = value.version;
    }
  }

  // offer - computed: false, optional: false, required: true
  private _offer?: string; 
  public get offer() {
    return this.getStringAttribute('offer');
  }
  public set offer(value: string) {
    this._offer = value;
  }
  // Temporarily expose input value. Use with caution.
  public get offerInput() {
    return this._offer;
  }

  // publisher - computed: false, optional: false, required: true
  private _publisher?: string; 
  public get publisher() {
    return this.getStringAttribute('publisher');
  }
  public set publisher(value: string) {
    this._publisher = value;
  }
  // Temporarily expose input value. Use with caution.
  public get publisherInput() {
    return this._publisher;
  }

  // sku - computed: false, optional: false, required: true
  private _sku?: string; 
  public get sku() {
    return this.getStringAttribute('sku');
  }
  public set sku(value: string) {
    this._sku = value;
  }
  // Temporarily expose input value. Use with caution.
  public get skuInput() {
    return this._sku;
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

export class ElastigroupAzureV3ImageMarketplaceList extends cdktf.ComplexList {
  public internalValue? : ElastigroupAzureV3ImageMarketplace[] | cdktf.IResolvable

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
  public get(index: number): ElastigroupAzureV3ImageMarketplaceOutputReference {
    return new ElastigroupAzureV3ImageMarketplaceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ElastigroupAzureV3Image {
  /**
  * custom block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/elastigroup_azure_v3#custom ElastigroupAzureV3#custom}
  */
  readonly custom?: ElastigroupAzureV3ImageCustom[] | cdktf.IResolvable;
  /**
  * gallery_image block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/elastigroup_azure_v3#gallery_image ElastigroupAzureV3#gallery_image}
  */
  readonly galleryImage?: ElastigroupAzureV3ImageGalleryImage[] | cdktf.IResolvable;
  /**
  * marketplace block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/elastigroup_azure_v3#marketplace ElastigroupAzureV3#marketplace}
  */
  readonly marketplace?: ElastigroupAzureV3ImageMarketplace[] | cdktf.IResolvable;
}

export function elastigroupAzureV3ImageToTerraform(struct?: ElastigroupAzureV3Image | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    custom: cdktf.listMapper(elastigroupAzureV3ImageCustomToTerraform, true)(struct!.custom),
    gallery_image: cdktf.listMapper(elastigroupAzureV3ImageGalleryImageToTerraform, true)(struct!.galleryImage),
    marketplace: cdktf.listMapper(elastigroupAzureV3ImageMarketplaceToTerraform, true)(struct!.marketplace),
  }
}


export function elastigroupAzureV3ImageToHclTerraform(struct?: ElastigroupAzureV3Image | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    custom: {
      value: cdktf.listMapperHcl(elastigroupAzureV3ImageCustomToHclTerraform, true)(struct!.custom),
      isBlock: true,
      type: "list",
      storageClassType: "ElastigroupAzureV3ImageCustomList",
    },
    gallery_image: {
      value: cdktf.listMapperHcl(elastigroupAzureV3ImageGalleryImageToHclTerraform, true)(struct!.galleryImage),
      isBlock: true,
      type: "list",
      storageClassType: "ElastigroupAzureV3ImageGalleryImageList",
    },
    marketplace: {
      value: cdktf.listMapperHcl(elastigroupAzureV3ImageMarketplaceToHclTerraform, true)(struct!.marketplace),
      isBlock: true,
      type: "list",
      storageClassType: "ElastigroupAzureV3ImageMarketplaceList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ElastigroupAzureV3ImageOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ElastigroupAzureV3Image | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._custom?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.custom = this._custom?.internalValue;
    }
    if (this._galleryImage?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.galleryImage = this._galleryImage?.internalValue;
    }
    if (this._marketplace?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.marketplace = this._marketplace?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ElastigroupAzureV3Image | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._custom.internalValue = undefined;
      this._galleryImage.internalValue = undefined;
      this._marketplace.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._custom.internalValue = value.custom;
      this._galleryImage.internalValue = value.galleryImage;
      this._marketplace.internalValue = value.marketplace;
    }
  }

  // custom - computed: false, optional: true, required: false
  private _custom = new ElastigroupAzureV3ImageCustomList(this, "custom", false);
  public get custom() {
    return this._custom;
  }
  public putCustom(value: ElastigroupAzureV3ImageCustom[] | cdktf.IResolvable) {
    this._custom.internalValue = value;
  }
  public resetCustom() {
    this._custom.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customInput() {
    return this._custom.internalValue;
  }

  // gallery_image - computed: false, optional: true, required: false
  private _galleryImage = new ElastigroupAzureV3ImageGalleryImageList(this, "gallery_image", false);
  public get galleryImage() {
    return this._galleryImage;
  }
  public putGalleryImage(value: ElastigroupAzureV3ImageGalleryImage[] | cdktf.IResolvable) {
    this._galleryImage.internalValue = value;
  }
  public resetGalleryImage() {
    this._galleryImage.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get galleryImageInput() {
    return this._galleryImage.internalValue;
  }

  // marketplace - computed: false, optional: true, required: false
  private _marketplace = new ElastigroupAzureV3ImageMarketplaceList(this, "marketplace", false);
  public get marketplace() {
    return this._marketplace;
  }
  public putMarketplace(value: ElastigroupAzureV3ImageMarketplace[] | cdktf.IResolvable) {
    this._marketplace.internalValue = value;
  }
  public resetMarketplace() {
    this._marketplace.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get marketplaceInput() {
    return this._marketplace.internalValue;
  }
}

export class ElastigroupAzureV3ImageList extends cdktf.ComplexList {
  public internalValue? : ElastigroupAzureV3Image[] | cdktf.IResolvable

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
  public get(index: number): ElastigroupAzureV3ImageOutputReference {
    return new ElastigroupAzureV3ImageOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ElastigroupAzureV3LoadBalancer {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/elastigroup_azure_v3#backend_pool_names ElastigroupAzureV3#backend_pool_names}
  */
  readonly backendPoolNames?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/elastigroup_azure_v3#name ElastigroupAzureV3#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/elastigroup_azure_v3#resource_group_name ElastigroupAzureV3#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/elastigroup_azure_v3#sku ElastigroupAzureV3#sku}
  */
  readonly sku?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/elastigroup_azure_v3#type ElastigroupAzureV3#type}
  */
  readonly type: string;
}

export function elastigroupAzureV3LoadBalancerToTerraform(struct?: ElastigroupAzureV3LoadBalancer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    backend_pool_names: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.backendPoolNames),
    name: cdktf.stringToTerraform(struct!.name),
    resource_group_name: cdktf.stringToTerraform(struct!.resourceGroupName),
    sku: cdktf.stringToTerraform(struct!.sku),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function elastigroupAzureV3LoadBalancerToHclTerraform(struct?: ElastigroupAzureV3LoadBalancer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    backend_pool_names: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.backendPoolNames),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource_group_name: {
      value: cdktf.stringToHclTerraform(struct!.resourceGroupName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sku: {
      value: cdktf.stringToHclTerraform(struct!.sku),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ElastigroupAzureV3LoadBalancerOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ElastigroupAzureV3LoadBalancer | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._backendPoolNames !== undefined) {
      hasAnyValues = true;
      internalValueResult.backendPoolNames = this._backendPoolNames;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._resourceGroupName !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceGroupName = this._resourceGroupName;
    }
    if (this._sku !== undefined) {
      hasAnyValues = true;
      internalValueResult.sku = this._sku;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ElastigroupAzureV3LoadBalancer | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._backendPoolNames = undefined;
      this._name = undefined;
      this._resourceGroupName = undefined;
      this._sku = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._backendPoolNames = value.backendPoolNames;
      this._name = value.name;
      this._resourceGroupName = value.resourceGroupName;
      this._sku = value.sku;
      this._type = value.type;
    }
  }

  // backend_pool_names - computed: false, optional: true, required: false
  private _backendPoolNames?: string[]; 
  public get backendPoolNames() {
    return this.getListAttribute('backend_pool_names');
  }
  public set backendPoolNames(value: string[]) {
    this._backendPoolNames = value;
  }
  public resetBackendPoolNames() {
    this._backendPoolNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backendPoolNamesInput() {
    return this._backendPoolNames;
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

  // resource_group_name - computed: false, optional: false, required: true
  private _resourceGroupName?: string; 
  public get resourceGroupName() {
    return this.getStringAttribute('resource_group_name');
  }
  public set resourceGroupName(value: string) {
    this._resourceGroupName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceGroupNameInput() {
    return this._resourceGroupName;
  }

  // sku - computed: false, optional: true, required: false
  private _sku?: string; 
  public get sku() {
    return this.getStringAttribute('sku');
  }
  public set sku(value: string) {
    this._sku = value;
  }
  public resetSku() {
    this._sku = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skuInput() {
    return this._sku;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

export class ElastigroupAzureV3LoadBalancerList extends cdktf.ComplexList {
  public internalValue? : ElastigroupAzureV3LoadBalancer[] | cdktf.IResolvable

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
  public get(index: number): ElastigroupAzureV3LoadBalancerOutputReference {
    return new ElastigroupAzureV3LoadBalancerOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ElastigroupAzureV3Login {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/elastigroup_azure_v3#password ElastigroupAzureV3#password}
  */
  readonly password?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/elastigroup_azure_v3#ssh_public_key ElastigroupAzureV3#ssh_public_key}
  */
  readonly sshPublicKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/elastigroup_azure_v3#user_name ElastigroupAzureV3#user_name}
  */
  readonly userName: string;
}

export function elastigroupAzureV3LoginToTerraform(struct?: ElastigroupAzureV3LoginOutputReference | ElastigroupAzureV3Login): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    password: cdktf.stringToTerraform(struct!.password),
    ssh_public_key: cdktf.stringToTerraform(struct!.sshPublicKey),
    user_name: cdktf.stringToTerraform(struct!.userName),
  }
}


export function elastigroupAzureV3LoginToHclTerraform(struct?: ElastigroupAzureV3LoginOutputReference | ElastigroupAzureV3Login): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssh_public_key: {
      value: cdktf.stringToHclTerraform(struct!.sshPublicKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_name: {
      value: cdktf.stringToHclTerraform(struct!.userName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ElastigroupAzureV3LoginOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ElastigroupAzureV3Login | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._sshPublicKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.sshPublicKey = this._sshPublicKey;
    }
    if (this._userName !== undefined) {
      hasAnyValues = true;
      internalValueResult.userName = this._userName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ElastigroupAzureV3Login | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._password = undefined;
      this._sshPublicKey = undefined;
      this._userName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._password = value.password;
      this._sshPublicKey = value.sshPublicKey;
      this._userName = value.userName;
    }
  }

  // password - computed: false, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // ssh_public_key - computed: false, optional: true, required: false
  private _sshPublicKey?: string; 
  public get sshPublicKey() {
    return this.getStringAttribute('ssh_public_key');
  }
  public set sshPublicKey(value: string) {
    this._sshPublicKey = value;
  }
  public resetSshPublicKey() {
    this._sshPublicKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sshPublicKeyInput() {
    return this._sshPublicKey;
  }

  // user_name - computed: false, optional: false, required: true
  private _userName?: string; 
  public get userName() {
    return this.getStringAttribute('user_name');
  }
  public set userName(value: string) {
    this._userName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userNameInput() {
    return this._userName;
  }
}
export interface ElastigroupAzureV3ManagedServiceIdentity {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/elastigroup_azure_v3#name ElastigroupAzureV3#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/elastigroup_azure_v3#resource_group_name ElastigroupAzureV3#resource_group_name}
  */
  readonly resourceGroupName: string;
}

export function elastigroupAzureV3ManagedServiceIdentityToTerraform(struct?: ElastigroupAzureV3ManagedServiceIdentity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    resource_group_name: cdktf.stringToTerraform(struct!.resourceGroupName),
  }
}


export function elastigroupAzureV3ManagedServiceIdentityToHclTerraform(struct?: ElastigroupAzureV3ManagedServiceIdentity | cdktf.IResolvable): any {
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
    resource_group_name: {
      value: cdktf.stringToHclTerraform(struct!.resourceGroupName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ElastigroupAzureV3ManagedServiceIdentityOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ElastigroupAzureV3ManagedServiceIdentity | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._resourceGroupName !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceGroupName = this._resourceGroupName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ElastigroupAzureV3ManagedServiceIdentity | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._resourceGroupName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._resourceGroupName = value.resourceGroupName;
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

  // resource_group_name - computed: false, optional: false, required: true
  private _resourceGroupName?: string; 
  public get resourceGroupName() {
    return this.getStringAttribute('resource_group_name');
  }
  public set resourceGroupName(value: string) {
    this._resourceGroupName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceGroupNameInput() {
    return this._resourceGroupName;
  }
}

export class ElastigroupAzureV3ManagedServiceIdentityList extends cdktf.ComplexList {
  public internalValue? : ElastigroupAzureV3ManagedServiceIdentity[] | cdktf.IResolvable

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
  public get(index: number): ElastigroupAzureV3ManagedServiceIdentityOutputReference {
    return new ElastigroupAzureV3ManagedServiceIdentityOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigs {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/elastigroup_azure_v3#name ElastigroupAzureV3#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/elastigroup_azure_v3#private_ip_version ElastigroupAzureV3#private_ip_version}
  */
  readonly privateIpVersion?: string;
}

export function elastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigsToTerraform(struct?: ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    private_ip_version: cdktf.stringToTerraform(struct!.privateIpVersion),
  }
}


export function elastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigsToHclTerraform(struct?: ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigs | cdktf.IResolvable): any {
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
    private_ip_version: {
      value: cdktf.stringToHclTerraform(struct!.privateIpVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._privateIpVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateIpVersion = this._privateIpVersion;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._privateIpVersion = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._privateIpVersion = value.privateIpVersion;
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

  // private_ip_version - computed: false, optional: true, required: false
  private _privateIpVersion?: string; 
  public get privateIpVersion() {
    return this.getStringAttribute('private_ip_version');
  }
  public set privateIpVersion(value: string) {
    this._privateIpVersion = value;
  }
  public resetPrivateIpVersion() {
    this._privateIpVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateIpVersionInput() {
    return this._privateIpVersion;
  }
}

export class ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigsList extends cdktf.ComplexList {
  public internalValue? : ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigs[] | cdktf.IResolvable

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
  public get(index: number): ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigsOutputReference {
    return new ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroup {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/elastigroup_azure_v3#name ElastigroupAzureV3#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/elastigroup_azure_v3#resource_group_name ElastigroupAzureV3#resource_group_name}
  */
  readonly resourceGroupName: string;
}

export function elastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroupToTerraform(struct?: ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    resource_group_name: cdktf.stringToTerraform(struct!.resourceGroupName),
  }
}


export function elastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroupToHclTerraform(struct?: ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroup | cdktf.IResolvable): any {
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
    resource_group_name: {
      value: cdktf.stringToHclTerraform(struct!.resourceGroupName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroupOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroup | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._resourceGroupName !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceGroupName = this._resourceGroupName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroup | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._resourceGroupName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._resourceGroupName = value.resourceGroupName;
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

  // resource_group_name - computed: false, optional: false, required: true
  private _resourceGroupName?: string; 
  public get resourceGroupName() {
    return this.getStringAttribute('resource_group_name');
  }
  public set resourceGroupName(value: string) {
    this._resourceGroupName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceGroupNameInput() {
    return this._resourceGroupName;
  }
}

export class ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroupList extends cdktf.ComplexList {
  public internalValue? : ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroup[] | cdktf.IResolvable

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
  public get(index: number): ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroupOutputReference {
    return new ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroupOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ElastigroupAzureV3NetworkNetworkInterfacesSecurityGroup {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/elastigroup_azure_v3#name ElastigroupAzureV3#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/elastigroup_azure_v3#resource_group_name ElastigroupAzureV3#resource_group_name}
  */
  readonly resourceGroupName?: string;
}

export function elastigroupAzureV3NetworkNetworkInterfacesSecurityGroupToTerraform(struct?: ElastigroupAzureV3NetworkNetworkInterfacesSecurityGroup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    resource_group_name: cdktf.stringToTerraform(struct!.resourceGroupName),
  }
}


export function elastigroupAzureV3NetworkNetworkInterfacesSecurityGroupToHclTerraform(struct?: ElastigroupAzureV3NetworkNetworkInterfacesSecurityGroup | cdktf.IResolvable): any {
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
    resource_group_name: {
      value: cdktf.stringToHclTerraform(struct!.resourceGroupName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ElastigroupAzureV3NetworkNetworkInterfacesSecurityGroupOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ElastigroupAzureV3NetworkNetworkInterfacesSecurityGroup | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._resourceGroupName !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceGroupName = this._resourceGroupName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ElastigroupAzureV3NetworkNetworkInterfacesSecurityGroup | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._resourceGroupName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._resourceGroupName = value.resourceGroupName;
    }
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

  // resource_group_name - computed: false, optional: true, required: false
  private _resourceGroupName?: string; 
  public get resourceGroupName() {
    return this.getStringAttribute('resource_group_name');
  }
  public set resourceGroupName(value: string) {
    this._resourceGroupName = value;
  }
  public resetResourceGroupName() {
    this._resourceGroupName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceGroupNameInput() {
    return this._resourceGroupName;
  }
}

export class ElastigroupAzureV3NetworkNetworkInterfacesSecurityGroupList extends cdktf.ComplexList {
  public internalValue? : ElastigroupAzureV3NetworkNetworkInterfacesSecurityGroup[] | cdktf.IResolvable

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
  public get(index: number): ElastigroupAzureV3NetworkNetworkInterfacesSecurityGroupOutputReference {
    return new ElastigroupAzureV3NetworkNetworkInterfacesSecurityGroupOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ElastigroupAzureV3NetworkNetworkInterfaces {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/elastigroup_azure_v3#assign_public_ip ElastigroupAzureV3#assign_public_ip}
  */
  readonly assignPublicIp: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/elastigroup_azure_v3#enable_ip_forwarding ElastigroupAzureV3#enable_ip_forwarding}
  */
  readonly enableIpForwarding?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/elastigroup_azure_v3#is_primary ElastigroupAzureV3#is_primary}
  */
  readonly isPrimary: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/elastigroup_azure_v3#private_ip_addresses ElastigroupAzureV3#private_ip_addresses}
  */
  readonly privateIpAddresses?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/elastigroup_azure_v3#public_ip_sku ElastigroupAzureV3#public_ip_sku}
  */
  readonly publicIpSku?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/elastigroup_azure_v3#subnet_name ElastigroupAzureV3#subnet_name}
  */
  readonly subnetName: string;
  /**
  * additional_ip_configs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/elastigroup_azure_v3#additional_ip_configs ElastigroupAzureV3#additional_ip_configs}
  */
  readonly additionalIpConfigs?: ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigs[] | cdktf.IResolvable;
  /**
  * application_security_group block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/elastigroup_azure_v3#application_security_group ElastigroupAzureV3#application_security_group}
  */
  readonly applicationSecurityGroup?: ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroup[] | cdktf.IResolvable;
  /**
  * security_group block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/elastigroup_azure_v3#security_group ElastigroupAzureV3#security_group}
  */
  readonly securityGroup?: ElastigroupAzureV3NetworkNetworkInterfacesSecurityGroup[] | cdktf.IResolvable;
}

export function elastigroupAzureV3NetworkNetworkInterfacesToTerraform(struct?: ElastigroupAzureV3NetworkNetworkInterfaces | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    assign_public_ip: cdktf.booleanToTerraform(struct!.assignPublicIp),
    enable_ip_forwarding: cdktf.booleanToTerraform(struct!.enableIpForwarding),
    is_primary: cdktf.booleanToTerraform(struct!.isPrimary),
    private_ip_addresses: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.privateIpAddresses),
    public_ip_sku: cdktf.stringToTerraform(struct!.publicIpSku),
    subnet_name: cdktf.stringToTerraform(struct!.subnetName),
    additional_ip_configs: cdktf.listMapper(elastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigsToTerraform, true)(struct!.additionalIpConfigs),
    application_security_group: cdktf.listMapper(elastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroupToTerraform, true)(struct!.applicationSecurityGroup),
    security_group: cdktf.listMapper(elastigroupAzureV3NetworkNetworkInterfacesSecurityGroupToTerraform, true)(struct!.securityGroup),
  }
}


export function elastigroupAzureV3NetworkNetworkInterfacesToHclTerraform(struct?: ElastigroupAzureV3NetworkNetworkInterfaces | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    assign_public_ip: {
      value: cdktf.booleanToHclTerraform(struct!.assignPublicIp),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_ip_forwarding: {
      value: cdktf.booleanToHclTerraform(struct!.enableIpForwarding),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    is_primary: {
      value: cdktf.booleanToHclTerraform(struct!.isPrimary),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    private_ip_addresses: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.privateIpAddresses),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    public_ip_sku: {
      value: cdktf.stringToHclTerraform(struct!.publicIpSku),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subnet_name: {
      value: cdktf.stringToHclTerraform(struct!.subnetName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    additional_ip_configs: {
      value: cdktf.listMapperHcl(elastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigsToHclTerraform, true)(struct!.additionalIpConfigs),
      isBlock: true,
      type: "list",
      storageClassType: "ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigsList",
    },
    application_security_group: {
      value: cdktf.listMapperHcl(elastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroupToHclTerraform, true)(struct!.applicationSecurityGroup),
      isBlock: true,
      type: "set",
      storageClassType: "ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroupList",
    },
    security_group: {
      value: cdktf.listMapperHcl(elastigroupAzureV3NetworkNetworkInterfacesSecurityGroupToHclTerraform, true)(struct!.securityGroup),
      isBlock: true,
      type: "list",
      storageClassType: "ElastigroupAzureV3NetworkNetworkInterfacesSecurityGroupList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ElastigroupAzureV3NetworkNetworkInterfacesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ElastigroupAzureV3NetworkNetworkInterfaces | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._assignPublicIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.assignPublicIp = this._assignPublicIp;
    }
    if (this._enableIpForwarding !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableIpForwarding = this._enableIpForwarding;
    }
    if (this._isPrimary !== undefined) {
      hasAnyValues = true;
      internalValueResult.isPrimary = this._isPrimary;
    }
    if (this._privateIpAddresses !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateIpAddresses = this._privateIpAddresses;
    }
    if (this._publicIpSku !== undefined) {
      hasAnyValues = true;
      internalValueResult.publicIpSku = this._publicIpSku;
    }
    if (this._subnetName !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetName = this._subnetName;
    }
    if (this._additionalIpConfigs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalIpConfigs = this._additionalIpConfigs?.internalValue;
    }
    if (this._applicationSecurityGroup?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.applicationSecurityGroup = this._applicationSecurityGroup?.internalValue;
    }
    if (this._securityGroup?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityGroup = this._securityGroup?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ElastigroupAzureV3NetworkNetworkInterfaces | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._assignPublicIp = undefined;
      this._enableIpForwarding = undefined;
      this._isPrimary = undefined;
      this._privateIpAddresses = undefined;
      this._publicIpSku = undefined;
      this._subnetName = undefined;
      this._additionalIpConfigs.internalValue = undefined;
      this._applicationSecurityGroup.internalValue = undefined;
      this._securityGroup.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._assignPublicIp = value.assignPublicIp;
      this._enableIpForwarding = value.enableIpForwarding;
      this._isPrimary = value.isPrimary;
      this._privateIpAddresses = value.privateIpAddresses;
      this._publicIpSku = value.publicIpSku;
      this._subnetName = value.subnetName;
      this._additionalIpConfigs.internalValue = value.additionalIpConfigs;
      this._applicationSecurityGroup.internalValue = value.applicationSecurityGroup;
      this._securityGroup.internalValue = value.securityGroup;
    }
  }

  // assign_public_ip - computed: false, optional: false, required: true
  private _assignPublicIp?: boolean | cdktf.IResolvable; 
  public get assignPublicIp() {
    return this.getBooleanAttribute('assign_public_ip');
  }
  public set assignPublicIp(value: boolean | cdktf.IResolvable) {
    this._assignPublicIp = value;
  }
  // Temporarily expose input value. Use with caution.
  public get assignPublicIpInput() {
    return this._assignPublicIp;
  }

  // enable_ip_forwarding - computed: false, optional: true, required: false
  private _enableIpForwarding?: boolean | cdktf.IResolvable; 
  public get enableIpForwarding() {
    return this.getBooleanAttribute('enable_ip_forwarding');
  }
  public set enableIpForwarding(value: boolean | cdktf.IResolvable) {
    this._enableIpForwarding = value;
  }
  public resetEnableIpForwarding() {
    this._enableIpForwarding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableIpForwardingInput() {
    return this._enableIpForwarding;
  }

  // is_primary - computed: false, optional: false, required: true
  private _isPrimary?: boolean | cdktf.IResolvable; 
  public get isPrimary() {
    return this.getBooleanAttribute('is_primary');
  }
  public set isPrimary(value: boolean | cdktf.IResolvable) {
    this._isPrimary = value;
  }
  // Temporarily expose input value. Use with caution.
  public get isPrimaryInput() {
    return this._isPrimary;
  }

  // private_ip_addresses - computed: false, optional: true, required: false
  private _privateIpAddresses?: string[]; 
  public get privateIpAddresses() {
    return this.getListAttribute('private_ip_addresses');
  }
  public set privateIpAddresses(value: string[]) {
    this._privateIpAddresses = value;
  }
  public resetPrivateIpAddresses() {
    this._privateIpAddresses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateIpAddressesInput() {
    return this._privateIpAddresses;
  }

  // public_ip_sku - computed: false, optional: true, required: false
  private _publicIpSku?: string; 
  public get publicIpSku() {
    return this.getStringAttribute('public_ip_sku');
  }
  public set publicIpSku(value: string) {
    this._publicIpSku = value;
  }
  public resetPublicIpSku() {
    this._publicIpSku = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicIpSkuInput() {
    return this._publicIpSku;
  }

  // subnet_name - computed: false, optional: false, required: true
  private _subnetName?: string; 
  public get subnetName() {
    return this.getStringAttribute('subnet_name');
  }
  public set subnetName(value: string) {
    this._subnetName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetNameInput() {
    return this._subnetName;
  }

  // additional_ip_configs - computed: false, optional: true, required: false
  private _additionalIpConfigs = new ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigsList(this, "additional_ip_configs", false);
  public get additionalIpConfigs() {
    return this._additionalIpConfigs;
  }
  public putAdditionalIpConfigs(value: ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigs[] | cdktf.IResolvable) {
    this._additionalIpConfigs.internalValue = value;
  }
  public resetAdditionalIpConfigs() {
    this._additionalIpConfigs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalIpConfigsInput() {
    return this._additionalIpConfigs.internalValue;
  }

  // application_security_group - computed: false, optional: true, required: false
  private _applicationSecurityGroup = new ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroupList(this, "application_security_group", true);
  public get applicationSecurityGroup() {
    return this._applicationSecurityGroup;
  }
  public putApplicationSecurityGroup(value: ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroup[] | cdktf.IResolvable) {
    this._applicationSecurityGroup.internalValue = value;
  }
  public resetApplicationSecurityGroup() {
    this._applicationSecurityGroup.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationSecurityGroupInput() {
    return this._applicationSecurityGroup.internalValue;
  }

  // security_group - computed: false, optional: true, required: false
  private _securityGroup = new ElastigroupAzureV3NetworkNetworkInterfacesSecurityGroupList(this, "security_group", false);
  public get securityGroup() {
    return this._securityGroup;
  }
  public putSecurityGroup(value: ElastigroupAzureV3NetworkNetworkInterfacesSecurityGroup[] | cdktf.IResolvable) {
    this._securityGroup.internalValue = value;
  }
  public resetSecurityGroup() {
    this._securityGroup.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupInput() {
    return this._securityGroup.internalValue;
  }
}

export class ElastigroupAzureV3NetworkNetworkInterfacesList extends cdktf.ComplexList {
  public internalValue? : ElastigroupAzureV3NetworkNetworkInterfaces[] | cdktf.IResolvable

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
  public get(index: number): ElastigroupAzureV3NetworkNetworkInterfacesOutputReference {
    return new ElastigroupAzureV3NetworkNetworkInterfacesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ElastigroupAzureV3Network {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/elastigroup_azure_v3#resource_group_name ElastigroupAzureV3#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/elastigroup_azure_v3#virtual_network_name ElastigroupAzureV3#virtual_network_name}
  */
  readonly virtualNetworkName: string;
  /**
  * network_interfaces block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/elastigroup_azure_v3#network_interfaces ElastigroupAzureV3#network_interfaces}
  */
  readonly networkInterfaces: ElastigroupAzureV3NetworkNetworkInterfaces[] | cdktf.IResolvable;
}

export function elastigroupAzureV3NetworkToTerraform(struct?: ElastigroupAzureV3NetworkOutputReference | ElastigroupAzureV3Network): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    resource_group_name: cdktf.stringToTerraform(struct!.resourceGroupName),
    virtual_network_name: cdktf.stringToTerraform(struct!.virtualNetworkName),
    network_interfaces: cdktf.listMapper(elastigroupAzureV3NetworkNetworkInterfacesToTerraform, true)(struct!.networkInterfaces),
  }
}


export function elastigroupAzureV3NetworkToHclTerraform(struct?: ElastigroupAzureV3NetworkOutputReference | ElastigroupAzureV3Network): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    resource_group_name: {
      value: cdktf.stringToHclTerraform(struct!.resourceGroupName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    virtual_network_name: {
      value: cdktf.stringToHclTerraform(struct!.virtualNetworkName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    network_interfaces: {
      value: cdktf.listMapperHcl(elastigroupAzureV3NetworkNetworkInterfacesToHclTerraform, true)(struct!.networkInterfaces),
      isBlock: true,
      type: "list",
      storageClassType: "ElastigroupAzureV3NetworkNetworkInterfacesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ElastigroupAzureV3NetworkOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ElastigroupAzureV3Network | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._resourceGroupName !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceGroupName = this._resourceGroupName;
    }
    if (this._virtualNetworkName !== undefined) {
      hasAnyValues = true;
      internalValueResult.virtualNetworkName = this._virtualNetworkName;
    }
    if (this._networkInterfaces?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkInterfaces = this._networkInterfaces?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ElastigroupAzureV3Network | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._resourceGroupName = undefined;
      this._virtualNetworkName = undefined;
      this._networkInterfaces.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._resourceGroupName = value.resourceGroupName;
      this._virtualNetworkName = value.virtualNetworkName;
      this._networkInterfaces.internalValue = value.networkInterfaces;
    }
  }

  // resource_group_name - computed: false, optional: false, required: true
  private _resourceGroupName?: string; 
  public get resourceGroupName() {
    return this.getStringAttribute('resource_group_name');
  }
  public set resourceGroupName(value: string) {
    this._resourceGroupName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceGroupNameInput() {
    return this._resourceGroupName;
  }

  // virtual_network_name - computed: false, optional: false, required: true
  private _virtualNetworkName?: string; 
  public get virtualNetworkName() {
    return this.getStringAttribute('virtual_network_name');
  }
  public set virtualNetworkName(value: string) {
    this._virtualNetworkName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualNetworkNameInput() {
    return this._virtualNetworkName;
  }

  // network_interfaces - computed: false, optional: false, required: true
  private _networkInterfaces = new ElastigroupAzureV3NetworkNetworkInterfacesList(this, "network_interfaces", false);
  public get networkInterfaces() {
    return this._networkInterfaces;
  }
  public putNetworkInterfaces(value: ElastigroupAzureV3NetworkNetworkInterfaces[] | cdktf.IResolvable) {
    this._networkInterfaces.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInterfacesInput() {
    return this._networkInterfaces.internalValue;
  }
}
export interface ElastigroupAzureV3OsDisk {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/elastigroup_azure_v3#size_gb ElastigroupAzureV3#size_gb}
  */
  readonly sizeGb?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/elastigroup_azure_v3#type ElastigroupAzureV3#type}
  */
  readonly type: string;
}

export function elastigroupAzureV3OsDiskToTerraform(struct?: ElastigroupAzureV3OsDiskOutputReference | ElastigroupAzureV3OsDisk): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    size_gb: cdktf.numberToTerraform(struct!.sizeGb),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function elastigroupAzureV3OsDiskToHclTerraform(struct?: ElastigroupAzureV3OsDiskOutputReference | ElastigroupAzureV3OsDisk): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    size_gb: {
      value: cdktf.numberToHclTerraform(struct!.sizeGb),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ElastigroupAzureV3OsDiskOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ElastigroupAzureV3OsDisk | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._sizeGb !== undefined) {
      hasAnyValues = true;
      internalValueResult.sizeGb = this._sizeGb;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ElastigroupAzureV3OsDisk | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._sizeGb = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._sizeGb = value.sizeGb;
      this._type = value.type;
    }
  }

  // size_gb - computed: false, optional: true, required: false
  private _sizeGb?: number; 
  public get sizeGb() {
    return this.getNumberAttribute('size_gb');
  }
  public set sizeGb(value: number) {
    this._sizeGb = value;
  }
  public resetSizeGb() {
    this._sizeGb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeGbInput() {
    return this._sizeGb;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}
export interface ElastigroupAzureV3ProximityPlacementGroups {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/elastigroup_azure_v3#name ElastigroupAzureV3#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/elastigroup_azure_v3#resource_group_name ElastigroupAzureV3#resource_group_name}
  */
  readonly resourceGroupName: string;
}

export function elastigroupAzureV3ProximityPlacementGroupsToTerraform(struct?: ElastigroupAzureV3ProximityPlacementGroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    resource_group_name: cdktf.stringToTerraform(struct!.resourceGroupName),
  }
}


export function elastigroupAzureV3ProximityPlacementGroupsToHclTerraform(struct?: ElastigroupAzureV3ProximityPlacementGroups | cdktf.IResolvable): any {
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
    resource_group_name: {
      value: cdktf.stringToHclTerraform(struct!.resourceGroupName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ElastigroupAzureV3ProximityPlacementGroupsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ElastigroupAzureV3ProximityPlacementGroups | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._resourceGroupName !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceGroupName = this._resourceGroupName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ElastigroupAzureV3ProximityPlacementGroups | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._resourceGroupName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._resourceGroupName = value.resourceGroupName;
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

  // resource_group_name - computed: false, optional: false, required: true
  private _resourceGroupName?: string; 
  public get resourceGroupName() {
    return this.getStringAttribute('resource_group_name');
  }
  public set resourceGroupName(value: string) {
    this._resourceGroupName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceGroupNameInput() {
    return this._resourceGroupName;
  }
}

export class ElastigroupAzureV3ProximityPlacementGroupsList extends cdktf.ComplexList {
  public internalValue? : ElastigroupAzureV3ProximityPlacementGroups[] | cdktf.IResolvable

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
  public get(index: number): ElastigroupAzureV3ProximityPlacementGroupsOutputReference {
    return new ElastigroupAzureV3ProximityPlacementGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ElastigroupAzureV3RevertToSpot {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/elastigroup_azure_v3#perform_at ElastigroupAzureV3#perform_at}
  */
  readonly performAt: string;
}

export function elastigroupAzureV3RevertToSpotToTerraform(struct?: ElastigroupAzureV3RevertToSpotOutputReference | ElastigroupAzureV3RevertToSpot): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    perform_at: cdktf.stringToTerraform(struct!.performAt),
  }
}


export function elastigroupAzureV3RevertToSpotToHclTerraform(struct?: ElastigroupAzureV3RevertToSpotOutputReference | ElastigroupAzureV3RevertToSpot): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    perform_at: {
      value: cdktf.stringToHclTerraform(struct!.performAt),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ElastigroupAzureV3RevertToSpotOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ElastigroupAzureV3RevertToSpot | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._performAt !== undefined) {
      hasAnyValues = true;
      internalValueResult.performAt = this._performAt;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ElastigroupAzureV3RevertToSpot | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._performAt = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._performAt = value.performAt;
    }
  }

  // perform_at - computed: false, optional: false, required: true
  private _performAt?: string; 
  public get performAt() {
    return this.getStringAttribute('perform_at');
  }
  public set performAt(value: string) {
    this._performAt = value;
  }
  // Temporarily expose input value. Use with caution.
  public get performAtInput() {
    return this._performAt;
  }
}
export interface ElastigroupAzureV3ScalingDownPolicyAction {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/elastigroup_azure_v3#adjustment ElastigroupAzureV3#adjustment}
  */
  readonly adjustment?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/elastigroup_azure_v3#maximum ElastigroupAzureV3#maximum}
  */
  readonly maximum?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/elastigroup_azure_v3#minimum ElastigroupAzureV3#minimum}
  */
  readonly minimum?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/elastigroup_azure_v3#target ElastigroupAzureV3#target}
  */
  readonly target?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/elastigroup_azure_v3#type ElastigroupAzureV3#type}
  */
  readonly type?: string;
}

export function elastigroupAzureV3ScalingDownPolicyActionToTerraform(struct?: ElastigroupAzureV3ScalingDownPolicyActionOutputReference | ElastigroupAzureV3ScalingDownPolicyAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    adjustment: cdktf.stringToTerraform(struct!.adjustment),
    maximum: cdktf.stringToTerraform(struct!.maximum),
    minimum: cdktf.stringToTerraform(struct!.minimum),
    target: cdktf.stringToTerraform(struct!.target),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function elastigroupAzureV3ScalingDownPolicyActionToHclTerraform(struct?: ElastigroupAzureV3ScalingDownPolicyActionOutputReference | ElastigroupAzureV3ScalingDownPolicyAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    adjustment: {
      value: cdktf.stringToHclTerraform(struct!.adjustment),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    maximum: {
      value: cdktf.stringToHclTerraform(struct!.maximum),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    minimum: {
      value: cdktf.stringToHclTerraform(struct!.minimum),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target: {
      value: cdktf.stringToHclTerraform(struct!.target),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ElastigroupAzureV3ScalingDownPolicyActionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ElastigroupAzureV3ScalingDownPolicyAction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._adjustment !== undefined) {
      hasAnyValues = true;
      internalValueResult.adjustment = this._adjustment;
    }
    if (this._maximum !== undefined) {
      hasAnyValues = true;
      internalValueResult.maximum = this._maximum;
    }
    if (this._minimum !== undefined) {
      hasAnyValues = true;
      internalValueResult.minimum = this._minimum;
    }
    if (this._target !== undefined) {
      hasAnyValues = true;
      internalValueResult.target = this._target;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ElastigroupAzureV3ScalingDownPolicyAction | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._adjustment = undefined;
      this._maximum = undefined;
      this._minimum = undefined;
      this._target = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._adjustment = value.adjustment;
      this._maximum = value.maximum;
      this._minimum = value.minimum;
      this._target = value.target;
      this._type = value.type;
    }
  }

  // adjustment - computed: false, optional: true, required: false
  private _adjustment?: string; 
  public get adjustment() {
    return this.getStringAttribute('adjustment');
  }
  public set adjustment(value: string) {
    this._adjustment = value;
  }
  public resetAdjustment() {
    this._adjustment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adjustmentInput() {
    return this._adjustment;
  }

  // maximum - computed: false, optional: true, required: false
  private _maximum?: string; 
  public get maximum() {
    return this.getStringAttribute('maximum');
  }
  public set maximum(value: string) {
    this._maximum = value;
  }
  public resetMaximum() {
    this._maximum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumInput() {
    return this._maximum;
  }

  // minimum - computed: false, optional: true, required: false
  private _minimum?: string; 
  public get minimum() {
    return this.getStringAttribute('minimum');
  }
  public set minimum(value: string) {
    this._minimum = value;
  }
  public resetMinimum() {
    this._minimum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minimumInput() {
    return this._minimum;
  }

  // target - computed: false, optional: true, required: false
  private _target?: string; 
  public get target() {
    return this.getStringAttribute('target');
  }
  public set target(value: string) {
    this._target = value;
  }
  public resetTarget() {
    this._target = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}
export interface ElastigroupAzureV3ScalingDownPolicyDimensions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/elastigroup_azure_v3#name ElastigroupAzureV3#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/elastigroup_azure_v3#value ElastigroupAzureV3#value}
  */
  readonly value?: string;
}

export function elastigroupAzureV3ScalingDownPolicyDimensionsToTerraform(struct?: ElastigroupAzureV3ScalingDownPolicyDimensions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function elastigroupAzureV3ScalingDownPolicyDimensionsToHclTerraform(struct?: ElastigroupAzureV3ScalingDownPolicyDimensions | cdktf.IResolvable): any {
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
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ElastigroupAzureV3ScalingDownPolicyDimensionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ElastigroupAzureV3ScalingDownPolicyDimensions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ElastigroupAzureV3ScalingDownPolicyDimensions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._value = value.value;
    }
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

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class ElastigroupAzureV3ScalingDownPolicyDimensionsList extends cdktf.ComplexList {
  public internalValue? : ElastigroupAzureV3ScalingDownPolicyDimensions[] | cdktf.IResolvable

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
  public get(index: number): ElastigroupAzureV3ScalingDownPolicyDimensionsOutputReference {
    return new ElastigroupAzureV3ScalingDownPolicyDimensionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ElastigroupAzureV3ScalingDownPolicy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/elastigroup_azure_v3#cooldown ElastigroupAzureV3#cooldown}
  */
  readonly cooldown: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/elastigroup_azure_v3#evaluation_periods ElastigroupAzureV3#evaluation_periods}
  */
  readonly evaluationPeriods: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/elastigroup_azure_v3#is_enabled ElastigroupAzureV3#is_enabled}
  */
  readonly isEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/elastigroup_azure_v3#metric_name ElastigroupAzureV3#metric_name}
  */
  readonly metricName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/elastigroup_azure_v3#namespace ElastigroupAzureV3#namespace}
  */
  readonly namespace: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/elastigroup_azure_v3#operator ElastigroupAzureV3#operator}
  */
  readonly operator: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/elastigroup_azure_v3#period ElastigroupAzureV3#period}
  */
  readonly period: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/elastigroup_azure_v3#policy_name ElastigroupAzureV3#policy_name}
  */
  readonly policyName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/elastigroup_azure_v3#source ElastigroupAzureV3#source}
  */
  readonly source?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/elastigroup_azure_v3#statistic ElastigroupAzureV3#statistic}
  */
  readonly statistic: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/elastigroup_azure_v3#threshold ElastigroupAzureV3#threshold}
  */
  readonly threshold: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/elastigroup_azure_v3#unit ElastigroupAzureV3#unit}
  */
  readonly unit?: string;
  /**
  * action block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/elastigroup_azure_v3#action ElastigroupAzureV3#action}
  */
  readonly action: ElastigroupAzureV3ScalingDownPolicyAction;
  /**
  * dimensions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/elastigroup_azure_v3#dimensions ElastigroupAzureV3#dimensions}
  */
  readonly dimensions?: ElastigroupAzureV3ScalingDownPolicyDimensions[] | cdktf.IResolvable;
}

export function elastigroupAzureV3ScalingDownPolicyToTerraform(struct?: ElastigroupAzureV3ScalingDownPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cooldown: cdktf.numberToTerraform(struct!.cooldown),
    evaluation_periods: cdktf.numberToTerraform(struct!.evaluationPeriods),
    is_enabled: cdktf.booleanToTerraform(struct!.isEnabled),
    metric_name: cdktf.stringToTerraform(struct!.metricName),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    operator: cdktf.stringToTerraform(struct!.operator),
    period: cdktf.numberToTerraform(struct!.period),
    policy_name: cdktf.stringToTerraform(struct!.policyName),
    source: cdktf.stringToTerraform(struct!.source),
    statistic: cdktf.stringToTerraform(struct!.statistic),
    threshold: cdktf.numberToTerraform(struct!.threshold),
    unit: cdktf.stringToTerraform(struct!.unit),
    action: elastigroupAzureV3ScalingDownPolicyActionToTerraform(struct!.action),
    dimensions: cdktf.listMapper(elastigroupAzureV3ScalingDownPolicyDimensionsToTerraform, true)(struct!.dimensions),
  }
}


export function elastigroupAzureV3ScalingDownPolicyToHclTerraform(struct?: ElastigroupAzureV3ScalingDownPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cooldown: {
      value: cdktf.numberToHclTerraform(struct!.cooldown),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    evaluation_periods: {
      value: cdktf.numberToHclTerraform(struct!.evaluationPeriods),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    is_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.isEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    metric_name: {
      value: cdktf.stringToHclTerraform(struct!.metricName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    period: {
      value: cdktf.numberToHclTerraform(struct!.period),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    policy_name: {
      value: cdktf.stringToHclTerraform(struct!.policyName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source: {
      value: cdktf.stringToHclTerraform(struct!.source),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    statistic: {
      value: cdktf.stringToHclTerraform(struct!.statistic),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    threshold: {
      value: cdktf.numberToHclTerraform(struct!.threshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    unit: {
      value: cdktf.stringToHclTerraform(struct!.unit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    action: {
      value: elastigroupAzureV3ScalingDownPolicyActionToHclTerraform(struct!.action),
      isBlock: true,
      type: "list",
      storageClassType: "ElastigroupAzureV3ScalingDownPolicyActionList",
    },
    dimensions: {
      value: cdktf.listMapperHcl(elastigroupAzureV3ScalingDownPolicyDimensionsToHclTerraform, true)(struct!.dimensions),
      isBlock: true,
      type: "list",
      storageClassType: "ElastigroupAzureV3ScalingDownPolicyDimensionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ElastigroupAzureV3ScalingDownPolicyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ElastigroupAzureV3ScalingDownPolicy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cooldown !== undefined) {
      hasAnyValues = true;
      internalValueResult.cooldown = this._cooldown;
    }
    if (this._evaluationPeriods !== undefined) {
      hasAnyValues = true;
      internalValueResult.evaluationPeriods = this._evaluationPeriods;
    }
    if (this._isEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.isEnabled = this._isEnabled;
    }
    if (this._metricName !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricName = this._metricName;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._period !== undefined) {
      hasAnyValues = true;
      internalValueResult.period = this._period;
    }
    if (this._policyName !== undefined) {
      hasAnyValues = true;
      internalValueResult.policyName = this._policyName;
    }
    if (this._source !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source;
    }
    if (this._statistic !== undefined) {
      hasAnyValues = true;
      internalValueResult.statistic = this._statistic;
    }
    if (this._threshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.threshold = this._threshold;
    }
    if (this._unit !== undefined) {
      hasAnyValues = true;
      internalValueResult.unit = this._unit;
    }
    if (this._action?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action?.internalValue;
    }
    if (this._dimensions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dimensions = this._dimensions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ElastigroupAzureV3ScalingDownPolicy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cooldown = undefined;
      this._evaluationPeriods = undefined;
      this._isEnabled = undefined;
      this._metricName = undefined;
      this._namespace = undefined;
      this._operator = undefined;
      this._period = undefined;
      this._policyName = undefined;
      this._source = undefined;
      this._statistic = undefined;
      this._threshold = undefined;
      this._unit = undefined;
      this._action.internalValue = undefined;
      this._dimensions.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cooldown = value.cooldown;
      this._evaluationPeriods = value.evaluationPeriods;
      this._isEnabled = value.isEnabled;
      this._metricName = value.metricName;
      this._namespace = value.namespace;
      this._operator = value.operator;
      this._period = value.period;
      this._policyName = value.policyName;
      this._source = value.source;
      this._statistic = value.statistic;
      this._threshold = value.threshold;
      this._unit = value.unit;
      this._action.internalValue = value.action;
      this._dimensions.internalValue = value.dimensions;
    }
  }

  // cooldown - computed: false, optional: false, required: true
  private _cooldown?: number; 
  public get cooldown() {
    return this.getNumberAttribute('cooldown');
  }
  public set cooldown(value: number) {
    this._cooldown = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cooldownInput() {
    return this._cooldown;
  }

  // evaluation_periods - computed: false, optional: false, required: true
  private _evaluationPeriods?: number; 
  public get evaluationPeriods() {
    return this.getNumberAttribute('evaluation_periods');
  }
  public set evaluationPeriods(value: number) {
    this._evaluationPeriods = value;
  }
  // Temporarily expose input value. Use with caution.
  public get evaluationPeriodsInput() {
    return this._evaluationPeriods;
  }

  // is_enabled - computed: false, optional: true, required: false
  private _isEnabled?: boolean | cdktf.IResolvable; 
  public get isEnabled() {
    return this.getBooleanAttribute('is_enabled');
  }
  public set isEnabled(value: boolean | cdktf.IResolvable) {
    this._isEnabled = value;
  }
  public resetIsEnabled() {
    this._isEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isEnabledInput() {
    return this._isEnabled;
  }

  // metric_name - computed: false, optional: false, required: true
  private _metricName?: string; 
  public get metricName() {
    return this.getStringAttribute('metric_name');
  }
  public set metricName(value: string) {
    this._metricName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metricNameInput() {
    return this._metricName;
  }

  // namespace - computed: false, optional: false, required: true
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // period - computed: false, optional: false, required: true
  private _period?: number; 
  public get period() {
    return this.getNumberAttribute('period');
  }
  public set period(value: number) {
    this._period = value;
  }
  // Temporarily expose input value. Use with caution.
  public get periodInput() {
    return this._period;
  }

  // policy_name - computed: false, optional: false, required: true
  private _policyName?: string; 
  public get policyName() {
    return this.getStringAttribute('policy_name');
  }
  public set policyName(value: string) {
    this._policyName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get policyNameInput() {
    return this._policyName;
  }

  // source - computed: true, optional: true, required: false
  private _source?: string; 
  public get source() {
    return this.getStringAttribute('source');
  }
  public set source(value: string) {
    this._source = value;
  }
  public resetSource() {
    this._source = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source;
  }

  // statistic - computed: false, optional: false, required: true
  private _statistic?: string; 
  public get statistic() {
    return this.getStringAttribute('statistic');
  }
  public set statistic(value: string) {
    this._statistic = value;
  }
  // Temporarily expose input value. Use with caution.
  public get statisticInput() {
    return this._statistic;
  }

  // threshold - computed: false, optional: false, required: true
  private _threshold?: number; 
  public get threshold() {
    return this.getNumberAttribute('threshold');
  }
  public set threshold(value: number) {
    this._threshold = value;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdInput() {
    return this._threshold;
  }

  // unit - computed: false, optional: true, required: false
  private _unit?: string; 
  public get unit() {
    return this.getStringAttribute('unit');
  }
  public set unit(value: string) {
    this._unit = value;
  }
  public resetUnit() {
    this._unit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unitInput() {
    return this._unit;
  }

  // action - computed: false, optional: false, required: true
  private _action = new ElastigroupAzureV3ScalingDownPolicyActionOutputReference(this, "action");
  public get action() {
    return this._action;
  }
  public putAction(value: ElastigroupAzureV3ScalingDownPolicyAction) {
    this._action.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action.internalValue;
  }

  // dimensions - computed: false, optional: true, required: false
  private _dimensions = new ElastigroupAzureV3ScalingDownPolicyDimensionsList(this, "dimensions", false);
  public get dimensions() {
    return this._dimensions;
  }
  public putDimensions(value: ElastigroupAzureV3ScalingDownPolicyDimensions[] | cdktf.IResolvable) {
    this._dimensions.internalValue = value;
  }
  public resetDimensions() {
    this._dimensions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dimensionsInput() {
    return this._dimensions.internalValue;
  }
}

export class ElastigroupAzureV3ScalingDownPolicyList extends cdktf.ComplexList {
  public internalValue? : ElastigroupAzureV3ScalingDownPolicy[] | cdktf.IResolvable

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
  public get(index: number): ElastigroupAzureV3ScalingDownPolicyOutputReference {
    return new ElastigroupAzureV3ScalingDownPolicyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ElastigroupAzureV3ScalingUpPolicyAction {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/elastigroup_azure_v3#adjustment ElastigroupAzureV3#adjustment}
  */
  readonly adjustment?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/elastigroup_azure_v3#maximum ElastigroupAzureV3#maximum}
  */
  readonly maximum?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/elastigroup_azure_v3#minimum ElastigroupAzureV3#minimum}
  */
  readonly minimum?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/elastigroup_azure_v3#target ElastigroupAzureV3#target}
  */
  readonly target?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/elastigroup_azure_v3#type ElastigroupAzureV3#type}
  */
  readonly type?: string;
}

export function elastigroupAzureV3ScalingUpPolicyActionToTerraform(struct?: ElastigroupAzureV3ScalingUpPolicyActionOutputReference | ElastigroupAzureV3ScalingUpPolicyAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    adjustment: cdktf.stringToTerraform(struct!.adjustment),
    maximum: cdktf.stringToTerraform(struct!.maximum),
    minimum: cdktf.stringToTerraform(struct!.minimum),
    target: cdktf.stringToTerraform(struct!.target),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function elastigroupAzureV3ScalingUpPolicyActionToHclTerraform(struct?: ElastigroupAzureV3ScalingUpPolicyActionOutputReference | ElastigroupAzureV3ScalingUpPolicyAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    adjustment: {
      value: cdktf.stringToHclTerraform(struct!.adjustment),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    maximum: {
      value: cdktf.stringToHclTerraform(struct!.maximum),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    minimum: {
      value: cdktf.stringToHclTerraform(struct!.minimum),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target: {
      value: cdktf.stringToHclTerraform(struct!.target),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ElastigroupAzureV3ScalingUpPolicyActionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ElastigroupAzureV3ScalingUpPolicyAction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._adjustment !== undefined) {
      hasAnyValues = true;
      internalValueResult.adjustment = this._adjustment;
    }
    if (this._maximum !== undefined) {
      hasAnyValues = true;
      internalValueResult.maximum = this._maximum;
    }
    if (this._minimum !== undefined) {
      hasAnyValues = true;
      internalValueResult.minimum = this._minimum;
    }
    if (this._target !== undefined) {
      hasAnyValues = true;
      internalValueResult.target = this._target;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ElastigroupAzureV3ScalingUpPolicyAction | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._adjustment = undefined;
      this._maximum = undefined;
      this._minimum = undefined;
      this._target = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._adjustment = value.adjustment;
      this._maximum = value.maximum;
      this._minimum = value.minimum;
      this._target = value.target;
      this._type = value.type;
    }
  }

  // adjustment - computed: false, optional: true, required: false
  private _adjustment?: string; 
  public get adjustment() {
    return this.getStringAttribute('adjustment');
  }
  public set adjustment(value: string) {
    this._adjustment = value;
  }
  public resetAdjustment() {
    this._adjustment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adjustmentInput() {
    return this._adjustment;
  }

  // maximum - computed: false, optional: true, required: false
  private _maximum?: string; 
  public get maximum() {
    return this.getStringAttribute('maximum');
  }
  public set maximum(value: string) {
    this._maximum = value;
  }
  public resetMaximum() {
    this._maximum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumInput() {
    return this._maximum;
  }

  // minimum - computed: false, optional: true, required: false
  private _minimum?: string; 
  public get minimum() {
    return this.getStringAttribute('minimum');
  }
  public set minimum(value: string) {
    this._minimum = value;
  }
  public resetMinimum() {
    this._minimum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minimumInput() {
    return this._minimum;
  }

  // target - computed: false, optional: true, required: false
  private _target?: string; 
  public get target() {
    return this.getStringAttribute('target');
  }
  public set target(value: string) {
    this._target = value;
  }
  public resetTarget() {
    this._target = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}
export interface ElastigroupAzureV3ScalingUpPolicyDimensions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/elastigroup_azure_v3#name ElastigroupAzureV3#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/elastigroup_azure_v3#value ElastigroupAzureV3#value}
  */
  readonly value?: string;
}

export function elastigroupAzureV3ScalingUpPolicyDimensionsToTerraform(struct?: ElastigroupAzureV3ScalingUpPolicyDimensions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function elastigroupAzureV3ScalingUpPolicyDimensionsToHclTerraform(struct?: ElastigroupAzureV3ScalingUpPolicyDimensions | cdktf.IResolvable): any {
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
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ElastigroupAzureV3ScalingUpPolicyDimensionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ElastigroupAzureV3ScalingUpPolicyDimensions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ElastigroupAzureV3ScalingUpPolicyDimensions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._value = value.value;
    }
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

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class ElastigroupAzureV3ScalingUpPolicyDimensionsList extends cdktf.ComplexList {
  public internalValue? : ElastigroupAzureV3ScalingUpPolicyDimensions[] | cdktf.IResolvable

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
  public get(index: number): ElastigroupAzureV3ScalingUpPolicyDimensionsOutputReference {
    return new ElastigroupAzureV3ScalingUpPolicyDimensionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ElastigroupAzureV3ScalingUpPolicy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/elastigroup_azure_v3#cooldown ElastigroupAzureV3#cooldown}
  */
  readonly cooldown: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/elastigroup_azure_v3#evaluation_periods ElastigroupAzureV3#evaluation_periods}
  */
  readonly evaluationPeriods: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/elastigroup_azure_v3#is_enabled ElastigroupAzureV3#is_enabled}
  */
  readonly isEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/elastigroup_azure_v3#metric_name ElastigroupAzureV3#metric_name}
  */
  readonly metricName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/elastigroup_azure_v3#namespace ElastigroupAzureV3#namespace}
  */
  readonly namespace: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/elastigroup_azure_v3#operator ElastigroupAzureV3#operator}
  */
  readonly operator: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/elastigroup_azure_v3#period ElastigroupAzureV3#period}
  */
  readonly period: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/elastigroup_azure_v3#policy_name ElastigroupAzureV3#policy_name}
  */
  readonly policyName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/elastigroup_azure_v3#source ElastigroupAzureV3#source}
  */
  readonly source?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/elastigroup_azure_v3#statistic ElastigroupAzureV3#statistic}
  */
  readonly statistic: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/elastigroup_azure_v3#threshold ElastigroupAzureV3#threshold}
  */
  readonly threshold: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/elastigroup_azure_v3#unit ElastigroupAzureV3#unit}
  */
  readonly unit?: string;
  /**
  * action block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/elastigroup_azure_v3#action ElastigroupAzureV3#action}
  */
  readonly action: ElastigroupAzureV3ScalingUpPolicyAction;
  /**
  * dimensions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/elastigroup_azure_v3#dimensions ElastigroupAzureV3#dimensions}
  */
  readonly dimensions?: ElastigroupAzureV3ScalingUpPolicyDimensions[] | cdktf.IResolvable;
}

export function elastigroupAzureV3ScalingUpPolicyToTerraform(struct?: ElastigroupAzureV3ScalingUpPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cooldown: cdktf.numberToTerraform(struct!.cooldown),
    evaluation_periods: cdktf.numberToTerraform(struct!.evaluationPeriods),
    is_enabled: cdktf.booleanToTerraform(struct!.isEnabled),
    metric_name: cdktf.stringToTerraform(struct!.metricName),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    operator: cdktf.stringToTerraform(struct!.operator),
    period: cdktf.numberToTerraform(struct!.period),
    policy_name: cdktf.stringToTerraform(struct!.policyName),
    source: cdktf.stringToTerraform(struct!.source),
    statistic: cdktf.stringToTerraform(struct!.statistic),
    threshold: cdktf.numberToTerraform(struct!.threshold),
    unit: cdktf.stringToTerraform(struct!.unit),
    action: elastigroupAzureV3ScalingUpPolicyActionToTerraform(struct!.action),
    dimensions: cdktf.listMapper(elastigroupAzureV3ScalingUpPolicyDimensionsToTerraform, true)(struct!.dimensions),
  }
}


export function elastigroupAzureV3ScalingUpPolicyToHclTerraform(struct?: ElastigroupAzureV3ScalingUpPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cooldown: {
      value: cdktf.numberToHclTerraform(struct!.cooldown),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    evaluation_periods: {
      value: cdktf.numberToHclTerraform(struct!.evaluationPeriods),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    is_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.isEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    metric_name: {
      value: cdktf.stringToHclTerraform(struct!.metricName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    period: {
      value: cdktf.numberToHclTerraform(struct!.period),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    policy_name: {
      value: cdktf.stringToHclTerraform(struct!.policyName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source: {
      value: cdktf.stringToHclTerraform(struct!.source),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    statistic: {
      value: cdktf.stringToHclTerraform(struct!.statistic),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    threshold: {
      value: cdktf.numberToHclTerraform(struct!.threshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    unit: {
      value: cdktf.stringToHclTerraform(struct!.unit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    action: {
      value: elastigroupAzureV3ScalingUpPolicyActionToHclTerraform(struct!.action),
      isBlock: true,
      type: "list",
      storageClassType: "ElastigroupAzureV3ScalingUpPolicyActionList",
    },
    dimensions: {
      value: cdktf.listMapperHcl(elastigroupAzureV3ScalingUpPolicyDimensionsToHclTerraform, true)(struct!.dimensions),
      isBlock: true,
      type: "list",
      storageClassType: "ElastigroupAzureV3ScalingUpPolicyDimensionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ElastigroupAzureV3ScalingUpPolicyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ElastigroupAzureV3ScalingUpPolicy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cooldown !== undefined) {
      hasAnyValues = true;
      internalValueResult.cooldown = this._cooldown;
    }
    if (this._evaluationPeriods !== undefined) {
      hasAnyValues = true;
      internalValueResult.evaluationPeriods = this._evaluationPeriods;
    }
    if (this._isEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.isEnabled = this._isEnabled;
    }
    if (this._metricName !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricName = this._metricName;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._period !== undefined) {
      hasAnyValues = true;
      internalValueResult.period = this._period;
    }
    if (this._policyName !== undefined) {
      hasAnyValues = true;
      internalValueResult.policyName = this._policyName;
    }
    if (this._source !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source;
    }
    if (this._statistic !== undefined) {
      hasAnyValues = true;
      internalValueResult.statistic = this._statistic;
    }
    if (this._threshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.threshold = this._threshold;
    }
    if (this._unit !== undefined) {
      hasAnyValues = true;
      internalValueResult.unit = this._unit;
    }
    if (this._action?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action?.internalValue;
    }
    if (this._dimensions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dimensions = this._dimensions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ElastigroupAzureV3ScalingUpPolicy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cooldown = undefined;
      this._evaluationPeriods = undefined;
      this._isEnabled = undefined;
      this._metricName = undefined;
      this._namespace = undefined;
      this._operator = undefined;
      this._period = undefined;
      this._policyName = undefined;
      this._source = undefined;
      this._statistic = undefined;
      this._threshold = undefined;
      this._unit = undefined;
      this._action.internalValue = undefined;
      this._dimensions.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cooldown = value.cooldown;
      this._evaluationPeriods = value.evaluationPeriods;
      this._isEnabled = value.isEnabled;
      this._metricName = value.metricName;
      this._namespace = value.namespace;
      this._operator = value.operator;
      this._period = value.period;
      this._policyName = value.policyName;
      this._source = value.source;
      this._statistic = value.statistic;
      this._threshold = value.threshold;
      this._unit = value.unit;
      this._action.internalValue = value.action;
      this._dimensions.internalValue = value.dimensions;
    }
  }

  // cooldown - computed: false, optional: false, required: true
  private _cooldown?: number; 
  public get cooldown() {
    return this.getNumberAttribute('cooldown');
  }
  public set cooldown(value: number) {
    this._cooldown = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cooldownInput() {
    return this._cooldown;
  }

  // evaluation_periods - computed: false, optional: false, required: true
  private _evaluationPeriods?: number; 
  public get evaluationPeriods() {
    return this.getNumberAttribute('evaluation_periods');
  }
  public set evaluationPeriods(value: number) {
    this._evaluationPeriods = value;
  }
  // Temporarily expose input value. Use with caution.
  public get evaluationPeriodsInput() {
    return this._evaluationPeriods;
  }

  // is_enabled - computed: false, optional: true, required: false
  private _isEnabled?: boolean | cdktf.IResolvable; 
  public get isEnabled() {
    return this.getBooleanAttribute('is_enabled');
  }
  public set isEnabled(value: boolean | cdktf.IResolvable) {
    this._isEnabled = value;
  }
  public resetIsEnabled() {
    this._isEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isEnabledInput() {
    return this._isEnabled;
  }

  // metric_name - computed: false, optional: false, required: true
  private _metricName?: string; 
  public get metricName() {
    return this.getStringAttribute('metric_name');
  }
  public set metricName(value: string) {
    this._metricName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metricNameInput() {
    return this._metricName;
  }

  // namespace - computed: false, optional: false, required: true
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // period - computed: false, optional: false, required: true
  private _period?: number; 
  public get period() {
    return this.getNumberAttribute('period');
  }
  public set period(value: number) {
    this._period = value;
  }
  // Temporarily expose input value. Use with caution.
  public get periodInput() {
    return this._period;
  }

  // policy_name - computed: false, optional: false, required: true
  private _policyName?: string; 
  public get policyName() {
    return this.getStringAttribute('policy_name');
  }
  public set policyName(value: string) {
    this._policyName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get policyNameInput() {
    return this._policyName;
  }

  // source - computed: true, optional: true, required: false
  private _source?: string; 
  public get source() {
    return this.getStringAttribute('source');
  }
  public set source(value: string) {
    this._source = value;
  }
  public resetSource() {
    this._source = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source;
  }

  // statistic - computed: false, optional: false, required: true
  private _statistic?: string; 
  public get statistic() {
    return this.getStringAttribute('statistic');
  }
  public set statistic(value: string) {
    this._statistic = value;
  }
  // Temporarily expose input value. Use with caution.
  public get statisticInput() {
    return this._statistic;
  }

  // threshold - computed: false, optional: false, required: true
  private _threshold?: number; 
  public get threshold() {
    return this.getNumberAttribute('threshold');
  }
  public set threshold(value: number) {
    this._threshold = value;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdInput() {
    return this._threshold;
  }

  // unit - computed: false, optional: true, required: false
  private _unit?: string; 
  public get unit() {
    return this.getStringAttribute('unit');
  }
  public set unit(value: string) {
    this._unit = value;
  }
  public resetUnit() {
    this._unit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unitInput() {
    return this._unit;
  }

  // action - computed: false, optional: false, required: true
  private _action = new ElastigroupAzureV3ScalingUpPolicyActionOutputReference(this, "action");
  public get action() {
    return this._action;
  }
  public putAction(value: ElastigroupAzureV3ScalingUpPolicyAction) {
    this._action.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action.internalValue;
  }

  // dimensions - computed: false, optional: true, required: false
  private _dimensions = new ElastigroupAzureV3ScalingUpPolicyDimensionsList(this, "dimensions", false);
  public get dimensions() {
    return this._dimensions;
  }
  public putDimensions(value: ElastigroupAzureV3ScalingUpPolicyDimensions[] | cdktf.IResolvable) {
    this._dimensions.internalValue = value;
  }
  public resetDimensions() {
    this._dimensions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dimensionsInput() {
    return this._dimensions.internalValue;
  }
}

export class ElastigroupAzureV3ScalingUpPolicyList extends cdktf.ComplexList {
  public internalValue? : ElastigroupAzureV3ScalingUpPolicy[] | cdktf.IResolvable

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
  public get(index: number): ElastigroupAzureV3ScalingUpPolicyOutputReference {
    return new ElastigroupAzureV3ScalingUpPolicyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ElastigroupAzureV3SchedulingTask {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/elastigroup_azure_v3#adjustment ElastigroupAzureV3#adjustment}
  */
  readonly adjustment?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/elastigroup_azure_v3#adjustment_percentage ElastigroupAzureV3#adjustment_percentage}
  */
  readonly adjustmentPercentage?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/elastigroup_azure_v3#batch_size_percentage ElastigroupAzureV3#batch_size_percentage}
  */
  readonly batchSizePercentage?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/elastigroup_azure_v3#cron_expression ElastigroupAzureV3#cron_expression}
  */
  readonly cronExpression: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/elastigroup_azure_v3#grace_period ElastigroupAzureV3#grace_period}
  */
  readonly gracePeriod?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/elastigroup_azure_v3#is_enabled ElastigroupAzureV3#is_enabled}
  */
  readonly isEnabled: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/elastigroup_azure_v3#scale_max_capacity ElastigroupAzureV3#scale_max_capacity}
  */
  readonly scaleMaxCapacity?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/elastigroup_azure_v3#scale_min_capacity ElastigroupAzureV3#scale_min_capacity}
  */
  readonly scaleMinCapacity?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/elastigroup_azure_v3#scale_target_capacity ElastigroupAzureV3#scale_target_capacity}
  */
  readonly scaleTargetCapacity?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/elastigroup_azure_v3#type ElastigroupAzureV3#type}
  */
  readonly type: string;
}

export function elastigroupAzureV3SchedulingTaskToTerraform(struct?: ElastigroupAzureV3SchedulingTask | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    adjustment: cdktf.stringToTerraform(struct!.adjustment),
    adjustment_percentage: cdktf.stringToTerraform(struct!.adjustmentPercentage),
    batch_size_percentage: cdktf.stringToTerraform(struct!.batchSizePercentage),
    cron_expression: cdktf.stringToTerraform(struct!.cronExpression),
    grace_period: cdktf.stringToTerraform(struct!.gracePeriod),
    is_enabled: cdktf.booleanToTerraform(struct!.isEnabled),
    scale_max_capacity: cdktf.stringToTerraform(struct!.scaleMaxCapacity),
    scale_min_capacity: cdktf.stringToTerraform(struct!.scaleMinCapacity),
    scale_target_capacity: cdktf.stringToTerraform(struct!.scaleTargetCapacity),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function elastigroupAzureV3SchedulingTaskToHclTerraform(struct?: ElastigroupAzureV3SchedulingTask | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    adjustment: {
      value: cdktf.stringToHclTerraform(struct!.adjustment),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    adjustment_percentage: {
      value: cdktf.stringToHclTerraform(struct!.adjustmentPercentage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    batch_size_percentage: {
      value: cdktf.stringToHclTerraform(struct!.batchSizePercentage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cron_expression: {
      value: cdktf.stringToHclTerraform(struct!.cronExpression),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    grace_period: {
      value: cdktf.stringToHclTerraform(struct!.gracePeriod),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    is_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.isEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    scale_max_capacity: {
      value: cdktf.stringToHclTerraform(struct!.scaleMaxCapacity),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    scale_min_capacity: {
      value: cdktf.stringToHclTerraform(struct!.scaleMinCapacity),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    scale_target_capacity: {
      value: cdktf.stringToHclTerraform(struct!.scaleTargetCapacity),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ElastigroupAzureV3SchedulingTaskOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ElastigroupAzureV3SchedulingTask | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._adjustment !== undefined) {
      hasAnyValues = true;
      internalValueResult.adjustment = this._adjustment;
    }
    if (this._adjustmentPercentage !== undefined) {
      hasAnyValues = true;
      internalValueResult.adjustmentPercentage = this._adjustmentPercentage;
    }
    if (this._batchSizePercentage !== undefined) {
      hasAnyValues = true;
      internalValueResult.batchSizePercentage = this._batchSizePercentage;
    }
    if (this._cronExpression !== undefined) {
      hasAnyValues = true;
      internalValueResult.cronExpression = this._cronExpression;
    }
    if (this._gracePeriod !== undefined) {
      hasAnyValues = true;
      internalValueResult.gracePeriod = this._gracePeriod;
    }
    if (this._isEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.isEnabled = this._isEnabled;
    }
    if (this._scaleMaxCapacity !== undefined) {
      hasAnyValues = true;
      internalValueResult.scaleMaxCapacity = this._scaleMaxCapacity;
    }
    if (this._scaleMinCapacity !== undefined) {
      hasAnyValues = true;
      internalValueResult.scaleMinCapacity = this._scaleMinCapacity;
    }
    if (this._scaleTargetCapacity !== undefined) {
      hasAnyValues = true;
      internalValueResult.scaleTargetCapacity = this._scaleTargetCapacity;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ElastigroupAzureV3SchedulingTask | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._adjustment = undefined;
      this._adjustmentPercentage = undefined;
      this._batchSizePercentage = undefined;
      this._cronExpression = undefined;
      this._gracePeriod = undefined;
      this._isEnabled = undefined;
      this._scaleMaxCapacity = undefined;
      this._scaleMinCapacity = undefined;
      this._scaleTargetCapacity = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._adjustment = value.adjustment;
      this._adjustmentPercentage = value.adjustmentPercentage;
      this._batchSizePercentage = value.batchSizePercentage;
      this._cronExpression = value.cronExpression;
      this._gracePeriod = value.gracePeriod;
      this._isEnabled = value.isEnabled;
      this._scaleMaxCapacity = value.scaleMaxCapacity;
      this._scaleMinCapacity = value.scaleMinCapacity;
      this._scaleTargetCapacity = value.scaleTargetCapacity;
      this._type = value.type;
    }
  }

  // adjustment - computed: false, optional: true, required: false
  private _adjustment?: string; 
  public get adjustment() {
    return this.getStringAttribute('adjustment');
  }
  public set adjustment(value: string) {
    this._adjustment = value;
  }
  public resetAdjustment() {
    this._adjustment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adjustmentInput() {
    return this._adjustment;
  }

  // adjustment_percentage - computed: false, optional: true, required: false
  private _adjustmentPercentage?: string; 
  public get adjustmentPercentage() {
    return this.getStringAttribute('adjustment_percentage');
  }
  public set adjustmentPercentage(value: string) {
    this._adjustmentPercentage = value;
  }
  public resetAdjustmentPercentage() {
    this._adjustmentPercentage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adjustmentPercentageInput() {
    return this._adjustmentPercentage;
  }

  // batch_size_percentage - computed: false, optional: true, required: false
  private _batchSizePercentage?: string; 
  public get batchSizePercentage() {
    return this.getStringAttribute('batch_size_percentage');
  }
  public set batchSizePercentage(value: string) {
    this._batchSizePercentage = value;
  }
  public resetBatchSizePercentage() {
    this._batchSizePercentage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get batchSizePercentageInput() {
    return this._batchSizePercentage;
  }

  // cron_expression - computed: false, optional: false, required: true
  private _cronExpression?: string; 
  public get cronExpression() {
    return this.getStringAttribute('cron_expression');
  }
  public set cronExpression(value: string) {
    this._cronExpression = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cronExpressionInput() {
    return this._cronExpression;
  }

  // grace_period - computed: false, optional: true, required: false
  private _gracePeriod?: string; 
  public get gracePeriod() {
    return this.getStringAttribute('grace_period');
  }
  public set gracePeriod(value: string) {
    this._gracePeriod = value;
  }
  public resetGracePeriod() {
    this._gracePeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gracePeriodInput() {
    return this._gracePeriod;
  }

  // is_enabled - computed: false, optional: false, required: true
  private _isEnabled?: boolean | cdktf.IResolvable; 
  public get isEnabled() {
    return this.getBooleanAttribute('is_enabled');
  }
  public set isEnabled(value: boolean | cdktf.IResolvable) {
    this._isEnabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get isEnabledInput() {
    return this._isEnabled;
  }

  // scale_max_capacity - computed: false, optional: true, required: false
  private _scaleMaxCapacity?: string; 
  public get scaleMaxCapacity() {
    return this.getStringAttribute('scale_max_capacity');
  }
  public set scaleMaxCapacity(value: string) {
    this._scaleMaxCapacity = value;
  }
  public resetScaleMaxCapacity() {
    this._scaleMaxCapacity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scaleMaxCapacityInput() {
    return this._scaleMaxCapacity;
  }

  // scale_min_capacity - computed: false, optional: true, required: false
  private _scaleMinCapacity?: string; 
  public get scaleMinCapacity() {
    return this.getStringAttribute('scale_min_capacity');
  }
  public set scaleMinCapacity(value: string) {
    this._scaleMinCapacity = value;
  }
  public resetScaleMinCapacity() {
    this._scaleMinCapacity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scaleMinCapacityInput() {
    return this._scaleMinCapacity;
  }

  // scale_target_capacity - computed: false, optional: true, required: false
  private _scaleTargetCapacity?: string; 
  public get scaleTargetCapacity() {
    return this.getStringAttribute('scale_target_capacity');
  }
  public set scaleTargetCapacity(value: string) {
    this._scaleTargetCapacity = value;
  }
  public resetScaleTargetCapacity() {
    this._scaleTargetCapacity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scaleTargetCapacityInput() {
    return this._scaleTargetCapacity;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

export class ElastigroupAzureV3SchedulingTaskList extends cdktf.ComplexList {
  public internalValue? : ElastigroupAzureV3SchedulingTask[] | cdktf.IResolvable

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
  public get(index: number): ElastigroupAzureV3SchedulingTaskOutputReference {
    return new ElastigroupAzureV3SchedulingTaskOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ElastigroupAzureV3SecretSourceVault {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/elastigroup_azure_v3#name ElastigroupAzureV3#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/elastigroup_azure_v3#resource_group_name ElastigroupAzureV3#resource_group_name}
  */
  readonly resourceGroupName: string;
}

export function elastigroupAzureV3SecretSourceVaultToTerraform(struct?: ElastigroupAzureV3SecretSourceVault | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    resource_group_name: cdktf.stringToTerraform(struct!.resourceGroupName),
  }
}


export function elastigroupAzureV3SecretSourceVaultToHclTerraform(struct?: ElastigroupAzureV3SecretSourceVault | cdktf.IResolvable): any {
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
    resource_group_name: {
      value: cdktf.stringToHclTerraform(struct!.resourceGroupName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ElastigroupAzureV3SecretSourceVaultOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ElastigroupAzureV3SecretSourceVault | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._resourceGroupName !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceGroupName = this._resourceGroupName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ElastigroupAzureV3SecretSourceVault | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._resourceGroupName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._resourceGroupName = value.resourceGroupName;
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

  // resource_group_name - computed: false, optional: false, required: true
  private _resourceGroupName?: string; 
  public get resourceGroupName() {
    return this.getStringAttribute('resource_group_name');
  }
  public set resourceGroupName(value: string) {
    this._resourceGroupName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceGroupNameInput() {
    return this._resourceGroupName;
  }
}

export class ElastigroupAzureV3SecretSourceVaultList extends cdktf.ComplexList {
  public internalValue? : ElastigroupAzureV3SecretSourceVault[] | cdktf.IResolvable

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
  public get(index: number): ElastigroupAzureV3SecretSourceVaultOutputReference {
    return new ElastigroupAzureV3SecretSourceVaultOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ElastigroupAzureV3SecretVaultCertificates {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/elastigroup_azure_v3#certificate_store ElastigroupAzureV3#certificate_store}
  */
  readonly certificateStore: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/elastigroup_azure_v3#certificate_url ElastigroupAzureV3#certificate_url}
  */
  readonly certificateUrl: string;
}

export function elastigroupAzureV3SecretVaultCertificatesToTerraform(struct?: ElastigroupAzureV3SecretVaultCertificates | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    certificate_store: cdktf.stringToTerraform(struct!.certificateStore),
    certificate_url: cdktf.stringToTerraform(struct!.certificateUrl),
  }
}


export function elastigroupAzureV3SecretVaultCertificatesToHclTerraform(struct?: ElastigroupAzureV3SecretVaultCertificates | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    certificate_store: {
      value: cdktf.stringToHclTerraform(struct!.certificateStore),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    certificate_url: {
      value: cdktf.stringToHclTerraform(struct!.certificateUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ElastigroupAzureV3SecretVaultCertificatesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ElastigroupAzureV3SecretVaultCertificates | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._certificateStore !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificateStore = this._certificateStore;
    }
    if (this._certificateUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificateUrl = this._certificateUrl;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ElastigroupAzureV3SecretVaultCertificates | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._certificateStore = undefined;
      this._certificateUrl = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._certificateStore = value.certificateStore;
      this._certificateUrl = value.certificateUrl;
    }
  }

  // certificate_store - computed: false, optional: false, required: true
  private _certificateStore?: string; 
  public get certificateStore() {
    return this.getStringAttribute('certificate_store');
  }
  public set certificateStore(value: string) {
    this._certificateStore = value;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateStoreInput() {
    return this._certificateStore;
  }

  // certificate_url - computed: false, optional: false, required: true
  private _certificateUrl?: string; 
  public get certificateUrl() {
    return this.getStringAttribute('certificate_url');
  }
  public set certificateUrl(value: string) {
    this._certificateUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateUrlInput() {
    return this._certificateUrl;
  }
}

export class ElastigroupAzureV3SecretVaultCertificatesList extends cdktf.ComplexList {
  public internalValue? : ElastigroupAzureV3SecretVaultCertificates[] | cdktf.IResolvable

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
  public get(index: number): ElastigroupAzureV3SecretVaultCertificatesOutputReference {
    return new ElastigroupAzureV3SecretVaultCertificatesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ElastigroupAzureV3Secret {
  /**
  * source_vault block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/elastigroup_azure_v3#source_vault ElastigroupAzureV3#source_vault}
  */
  readonly sourceVault: ElastigroupAzureV3SecretSourceVault[] | cdktf.IResolvable;
  /**
  * vault_certificates block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/elastigroup_azure_v3#vault_certificates ElastigroupAzureV3#vault_certificates}
  */
  readonly vaultCertificates: ElastigroupAzureV3SecretVaultCertificates[] | cdktf.IResolvable;
}

export function elastigroupAzureV3SecretToTerraform(struct?: ElastigroupAzureV3Secret | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    source_vault: cdktf.listMapper(elastigroupAzureV3SecretSourceVaultToTerraform, true)(struct!.sourceVault),
    vault_certificates: cdktf.listMapper(elastigroupAzureV3SecretVaultCertificatesToTerraform, true)(struct!.vaultCertificates),
  }
}


export function elastigroupAzureV3SecretToHclTerraform(struct?: ElastigroupAzureV3Secret | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    source_vault: {
      value: cdktf.listMapperHcl(elastigroupAzureV3SecretSourceVaultToHclTerraform, true)(struct!.sourceVault),
      isBlock: true,
      type: "list",
      storageClassType: "ElastigroupAzureV3SecretSourceVaultList",
    },
    vault_certificates: {
      value: cdktf.listMapperHcl(elastigroupAzureV3SecretVaultCertificatesToHclTerraform, true)(struct!.vaultCertificates),
      isBlock: true,
      type: "list",
      storageClassType: "ElastigroupAzureV3SecretVaultCertificatesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ElastigroupAzureV3SecretOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ElastigroupAzureV3Secret | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._sourceVault?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceVault = this._sourceVault?.internalValue;
    }
    if (this._vaultCertificates?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vaultCertificates = this._vaultCertificates?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ElastigroupAzureV3Secret | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._sourceVault.internalValue = undefined;
      this._vaultCertificates.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._sourceVault.internalValue = value.sourceVault;
      this._vaultCertificates.internalValue = value.vaultCertificates;
    }
  }

  // source_vault - computed: false, optional: false, required: true
  private _sourceVault = new ElastigroupAzureV3SecretSourceVaultList(this, "source_vault", false);
  public get sourceVault() {
    return this._sourceVault;
  }
  public putSourceVault(value: ElastigroupAzureV3SecretSourceVault[] | cdktf.IResolvable) {
    this._sourceVault.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceVaultInput() {
    return this._sourceVault.internalValue;
  }

  // vault_certificates - computed: false, optional: false, required: true
  private _vaultCertificates = new ElastigroupAzureV3SecretVaultCertificatesList(this, "vault_certificates", false);
  public get vaultCertificates() {
    return this._vaultCertificates;
  }
  public putVaultCertificates(value: ElastigroupAzureV3SecretVaultCertificates[] | cdktf.IResolvable) {
    this._vaultCertificates.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vaultCertificatesInput() {
    return this._vaultCertificates.internalValue;
  }
}

export class ElastigroupAzureV3SecretList extends cdktf.ComplexList {
  public internalValue? : ElastigroupAzureV3Secret[] | cdktf.IResolvable

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
  public get(index: number): ElastigroupAzureV3SecretOutputReference {
    return new ElastigroupAzureV3SecretOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ElastigroupAzureV3Security {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/elastigroup_azure_v3#confidential_os_disk_encryption ElastigroupAzureV3#confidential_os_disk_encryption}
  */
  readonly confidentialOsDiskEncryption?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/elastigroup_azure_v3#encryption_at_host ElastigroupAzureV3#encryption_at_host}
  */
  readonly encryptionAtHost?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/elastigroup_azure_v3#secure_boot_enabled ElastigroupAzureV3#secure_boot_enabled}
  */
  readonly secureBootEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/elastigroup_azure_v3#security_type ElastigroupAzureV3#security_type}
  */
  readonly securityType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/elastigroup_azure_v3#vtpm_enabled ElastigroupAzureV3#vtpm_enabled}
  */
  readonly vtpmEnabled?: boolean | cdktf.IResolvable;
}

export function elastigroupAzureV3SecurityToTerraform(struct?: ElastigroupAzureV3SecurityOutputReference | ElastigroupAzureV3Security): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    confidential_os_disk_encryption: cdktf.booleanToTerraform(struct!.confidentialOsDiskEncryption),
    encryption_at_host: cdktf.booleanToTerraform(struct!.encryptionAtHost),
    secure_boot_enabled: cdktf.booleanToTerraform(struct!.secureBootEnabled),
    security_type: cdktf.stringToTerraform(struct!.securityType),
    vtpm_enabled: cdktf.booleanToTerraform(struct!.vtpmEnabled),
  }
}


export function elastigroupAzureV3SecurityToHclTerraform(struct?: ElastigroupAzureV3SecurityOutputReference | ElastigroupAzureV3Security): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    confidential_os_disk_encryption: {
      value: cdktf.booleanToHclTerraform(struct!.confidentialOsDiskEncryption),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    encryption_at_host: {
      value: cdktf.booleanToHclTerraform(struct!.encryptionAtHost),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    secure_boot_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.secureBootEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    security_type: {
      value: cdktf.stringToHclTerraform(struct!.securityType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vtpm_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.vtpmEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ElastigroupAzureV3SecurityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ElastigroupAzureV3Security | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._confidentialOsDiskEncryption !== undefined) {
      hasAnyValues = true;
      internalValueResult.confidentialOsDiskEncryption = this._confidentialOsDiskEncryption;
    }
    if (this._encryptionAtHost !== undefined) {
      hasAnyValues = true;
      internalValueResult.encryptionAtHost = this._encryptionAtHost;
    }
    if (this._secureBootEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.secureBootEnabled = this._secureBootEnabled;
    }
    if (this._securityType !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityType = this._securityType;
    }
    if (this._vtpmEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.vtpmEnabled = this._vtpmEnabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ElastigroupAzureV3Security | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._confidentialOsDiskEncryption = undefined;
      this._encryptionAtHost = undefined;
      this._secureBootEnabled = undefined;
      this._securityType = undefined;
      this._vtpmEnabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._confidentialOsDiskEncryption = value.confidentialOsDiskEncryption;
      this._encryptionAtHost = value.encryptionAtHost;
      this._secureBootEnabled = value.secureBootEnabled;
      this._securityType = value.securityType;
      this._vtpmEnabled = value.vtpmEnabled;
    }
  }

  // confidential_os_disk_encryption - computed: false, optional: true, required: false
  private _confidentialOsDiskEncryption?: boolean | cdktf.IResolvable; 
  public get confidentialOsDiskEncryption() {
    return this.getBooleanAttribute('confidential_os_disk_encryption');
  }
  public set confidentialOsDiskEncryption(value: boolean | cdktf.IResolvable) {
    this._confidentialOsDiskEncryption = value;
  }
  public resetConfidentialOsDiskEncryption() {
    this._confidentialOsDiskEncryption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get confidentialOsDiskEncryptionInput() {
    return this._confidentialOsDiskEncryption;
  }

  // encryption_at_host - computed: false, optional: true, required: false
  private _encryptionAtHost?: boolean | cdktf.IResolvable; 
  public get encryptionAtHost() {
    return this.getBooleanAttribute('encryption_at_host');
  }
  public set encryptionAtHost(value: boolean | cdktf.IResolvable) {
    this._encryptionAtHost = value;
  }
  public resetEncryptionAtHost() {
    this._encryptionAtHost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionAtHostInput() {
    return this._encryptionAtHost;
  }

  // secure_boot_enabled - computed: false, optional: true, required: false
  private _secureBootEnabled?: boolean | cdktf.IResolvable; 
  public get secureBootEnabled() {
    return this.getBooleanAttribute('secure_boot_enabled');
  }
  public set secureBootEnabled(value: boolean | cdktf.IResolvable) {
    this._secureBootEnabled = value;
  }
  public resetSecureBootEnabled() {
    this._secureBootEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secureBootEnabledInput() {
    return this._secureBootEnabled;
  }

  // security_type - computed: false, optional: true, required: false
  private _securityType?: string; 
  public get securityType() {
    return this.getStringAttribute('security_type');
  }
  public set securityType(value: string) {
    this._securityType = value;
  }
  public resetSecurityType() {
    this._securityType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityTypeInput() {
    return this._securityType;
  }

  // vtpm_enabled - computed: false, optional: true, required: false
  private _vtpmEnabled?: boolean | cdktf.IResolvable; 
  public get vtpmEnabled() {
    return this.getBooleanAttribute('vtpm_enabled');
  }
  public set vtpmEnabled(value: boolean | cdktf.IResolvable) {
    this._vtpmEnabled = value;
  }
  public resetVtpmEnabled() {
    this._vtpmEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vtpmEnabledInput() {
    return this._vtpmEnabled;
  }
}
export interface ElastigroupAzureV3Signal {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/elastigroup_azure_v3#timeout ElastigroupAzureV3#timeout}
  */
  readonly timeout: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/elastigroup_azure_v3#type ElastigroupAzureV3#type}
  */
  readonly type: string;
}

export function elastigroupAzureV3SignalToTerraform(struct?: ElastigroupAzureV3Signal | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    timeout: cdktf.numberToTerraform(struct!.timeout),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function elastigroupAzureV3SignalToHclTerraform(struct?: ElastigroupAzureV3Signal | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    timeout: {
      value: cdktf.numberToHclTerraform(struct!.timeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ElastigroupAzureV3SignalOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ElastigroupAzureV3Signal | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._timeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeout = this._timeout;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ElastigroupAzureV3Signal | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._timeout = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._timeout = value.timeout;
      this._type = value.type;
    }
  }

  // timeout - computed: false, optional: false, required: true
  private _timeout?: number; 
  public get timeout() {
    return this.getNumberAttribute('timeout');
  }
  public set timeout(value: number) {
    this._timeout = value;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

export class ElastigroupAzureV3SignalList extends cdktf.ComplexList {
  public internalValue? : ElastigroupAzureV3Signal[] | cdktf.IResolvable

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
  public get(index: number): ElastigroupAzureV3SignalOutputReference {
    return new ElastigroupAzureV3SignalOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ElastigroupAzureV3Tags {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/elastigroup_azure_v3#key ElastigroupAzureV3#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/elastigroup_azure_v3#value ElastigroupAzureV3#value}
  */
  readonly value: string;
}

export function elastigroupAzureV3TagsToTerraform(struct?: ElastigroupAzureV3Tags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function elastigroupAzureV3TagsToHclTerraform(struct?: ElastigroupAzureV3Tags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ElastigroupAzureV3TagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ElastigroupAzureV3Tags | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ElastigroupAzureV3Tags | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class ElastigroupAzureV3TagsList extends cdktf.ComplexList {
  public internalValue? : ElastigroupAzureV3Tags[] | cdktf.IResolvable

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
  public get(index: number): ElastigroupAzureV3TagsOutputReference {
    return new ElastigroupAzureV3TagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ElastigroupAzureV3VmSizesSpotSizeAttributes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/elastigroup_azure_v3#max_cpu ElastigroupAzureV3#max_cpu}
  */
  readonly maxCpu?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/elastigroup_azure_v3#max_memory ElastigroupAzureV3#max_memory}
  */
  readonly maxMemory?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/elastigroup_azure_v3#max_storage ElastigroupAzureV3#max_storage}
  */
  readonly maxStorage?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/elastigroup_azure_v3#min_cpu ElastigroupAzureV3#min_cpu}
  */
  readonly minCpu?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/elastigroup_azure_v3#min_memory ElastigroupAzureV3#min_memory}
  */
  readonly minMemory?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/elastigroup_azure_v3#min_storage ElastigroupAzureV3#min_storage}
  */
  readonly minStorage?: number;
}

export function elastigroupAzureV3VmSizesSpotSizeAttributesToTerraform(struct?: ElastigroupAzureV3VmSizesSpotSizeAttributesOutputReference | ElastigroupAzureV3VmSizesSpotSizeAttributes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_cpu: cdktf.numberToTerraform(struct!.maxCpu),
    max_memory: cdktf.numberToTerraform(struct!.maxMemory),
    max_storage: cdktf.numberToTerraform(struct!.maxStorage),
    min_cpu: cdktf.numberToTerraform(struct!.minCpu),
    min_memory: cdktf.numberToTerraform(struct!.minMemory),
    min_storage: cdktf.numberToTerraform(struct!.minStorage),
  }
}


export function elastigroupAzureV3VmSizesSpotSizeAttributesToHclTerraform(struct?: ElastigroupAzureV3VmSizesSpotSizeAttributesOutputReference | ElastigroupAzureV3VmSizesSpotSizeAttributes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max_cpu: {
      value: cdktf.numberToHclTerraform(struct!.maxCpu),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_memory: {
      value: cdktf.numberToHclTerraform(struct!.maxMemory),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_storage: {
      value: cdktf.numberToHclTerraform(struct!.maxStorage),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min_cpu: {
      value: cdktf.numberToHclTerraform(struct!.minCpu),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min_memory: {
      value: cdktf.numberToHclTerraform(struct!.minMemory),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min_storage: {
      value: cdktf.numberToHclTerraform(struct!.minStorage),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ElastigroupAzureV3VmSizesSpotSizeAttributesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ElastigroupAzureV3VmSizesSpotSizeAttributes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxCpu !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxCpu = this._maxCpu;
    }
    if (this._maxMemory !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxMemory = this._maxMemory;
    }
    if (this._maxStorage !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxStorage = this._maxStorage;
    }
    if (this._minCpu !== undefined) {
      hasAnyValues = true;
      internalValueResult.minCpu = this._minCpu;
    }
    if (this._minMemory !== undefined) {
      hasAnyValues = true;
      internalValueResult.minMemory = this._minMemory;
    }
    if (this._minStorage !== undefined) {
      hasAnyValues = true;
      internalValueResult.minStorage = this._minStorage;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ElastigroupAzureV3VmSizesSpotSizeAttributes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._maxCpu = undefined;
      this._maxMemory = undefined;
      this._maxStorage = undefined;
      this._minCpu = undefined;
      this._minMemory = undefined;
      this._minStorage = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._maxCpu = value.maxCpu;
      this._maxMemory = value.maxMemory;
      this._maxStorage = value.maxStorage;
      this._minCpu = value.minCpu;
      this._minMemory = value.minMemory;
      this._minStorage = value.minStorage;
    }
  }

  // max_cpu - computed: false, optional: true, required: false
  private _maxCpu?: number; 
  public get maxCpu() {
    return this.getNumberAttribute('max_cpu');
  }
  public set maxCpu(value: number) {
    this._maxCpu = value;
  }
  public resetMaxCpu() {
    this._maxCpu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxCpuInput() {
    return this._maxCpu;
  }

  // max_memory - computed: false, optional: true, required: false
  private _maxMemory?: number; 
  public get maxMemory() {
    return this.getNumberAttribute('max_memory');
  }
  public set maxMemory(value: number) {
    this._maxMemory = value;
  }
  public resetMaxMemory() {
    this._maxMemory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxMemoryInput() {
    return this._maxMemory;
  }

  // max_storage - computed: false, optional: true, required: false
  private _maxStorage?: number; 
  public get maxStorage() {
    return this.getNumberAttribute('max_storage');
  }
  public set maxStorage(value: number) {
    this._maxStorage = value;
  }
  public resetMaxStorage() {
    this._maxStorage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxStorageInput() {
    return this._maxStorage;
  }

  // min_cpu - computed: false, optional: true, required: false
  private _minCpu?: number; 
  public get minCpu() {
    return this.getNumberAttribute('min_cpu');
  }
  public set minCpu(value: number) {
    this._minCpu = value;
  }
  public resetMinCpu() {
    this._minCpu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minCpuInput() {
    return this._minCpu;
  }

  // min_memory - computed: false, optional: true, required: false
  private _minMemory?: number; 
  public get minMemory() {
    return this.getNumberAttribute('min_memory');
  }
  public set minMemory(value: number) {
    this._minMemory = value;
  }
  public resetMinMemory() {
    this._minMemory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minMemoryInput() {
    return this._minMemory;
  }

  // min_storage - computed: false, optional: true, required: false
  private _minStorage?: number; 
  public get minStorage() {
    return this.getNumberAttribute('min_storage');
  }
  public set minStorage(value: number) {
    this._minStorage = value;
  }
  public resetMinStorage() {
    this._minStorage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minStorageInput() {
    return this._minStorage;
  }
}
export interface ElastigroupAzureV3VmSizes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/elastigroup_azure_v3#excluded_vm_sizes ElastigroupAzureV3#excluded_vm_sizes}
  */
  readonly excludedVmSizes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/elastigroup_azure_v3#od_sizes ElastigroupAzureV3#od_sizes}
  */
  readonly odSizes: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/elastigroup_azure_v3#preferred_spot_sizes ElastigroupAzureV3#preferred_spot_sizes}
  */
  readonly preferredSpotSizes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/elastigroup_azure_v3#spot_sizes ElastigroupAzureV3#spot_sizes}
  */
  readonly spotSizes?: string[];
  /**
  * spot_size_attributes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/elastigroup_azure_v3#spot_size_attributes ElastigroupAzureV3#spot_size_attributes}
  */
  readonly spotSizeAttributes?: ElastigroupAzureV3VmSizesSpotSizeAttributes;
}

export function elastigroupAzureV3VmSizesToTerraform(struct?: ElastigroupAzureV3VmSizesOutputReference | ElastigroupAzureV3VmSizes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    excluded_vm_sizes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.excludedVmSizes),
    od_sizes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.odSizes),
    preferred_spot_sizes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.preferredSpotSizes),
    spot_sizes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.spotSizes),
    spot_size_attributes: elastigroupAzureV3VmSizesSpotSizeAttributesToTerraform(struct!.spotSizeAttributes),
  }
}


export function elastigroupAzureV3VmSizesToHclTerraform(struct?: ElastigroupAzureV3VmSizesOutputReference | ElastigroupAzureV3VmSizes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    excluded_vm_sizes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.excludedVmSizes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    od_sizes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.odSizes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    preferred_spot_sizes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.preferredSpotSizes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    spot_sizes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.spotSizes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    spot_size_attributes: {
      value: elastigroupAzureV3VmSizesSpotSizeAttributesToHclTerraform(struct!.spotSizeAttributes),
      isBlock: true,
      type: "list",
      storageClassType: "ElastigroupAzureV3VmSizesSpotSizeAttributesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ElastigroupAzureV3VmSizesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ElastigroupAzureV3VmSizes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._excludedVmSizes !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludedVmSizes = this._excludedVmSizes;
    }
    if (this._odSizes !== undefined) {
      hasAnyValues = true;
      internalValueResult.odSizes = this._odSizes;
    }
    if (this._preferredSpotSizes !== undefined) {
      hasAnyValues = true;
      internalValueResult.preferredSpotSizes = this._preferredSpotSizes;
    }
    if (this._spotSizes !== undefined) {
      hasAnyValues = true;
      internalValueResult.spotSizes = this._spotSizes;
    }
    if (this._spotSizeAttributes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.spotSizeAttributes = this._spotSizeAttributes?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ElastigroupAzureV3VmSizes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._excludedVmSizes = undefined;
      this._odSizes = undefined;
      this._preferredSpotSizes = undefined;
      this._spotSizes = undefined;
      this._spotSizeAttributes.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._excludedVmSizes = value.excludedVmSizes;
      this._odSizes = value.odSizes;
      this._preferredSpotSizes = value.preferredSpotSizes;
      this._spotSizes = value.spotSizes;
      this._spotSizeAttributes.internalValue = value.spotSizeAttributes;
    }
  }

  // excluded_vm_sizes - computed: false, optional: true, required: false
  private _excludedVmSizes?: string[]; 
  public get excludedVmSizes() {
    return this.getListAttribute('excluded_vm_sizes');
  }
  public set excludedVmSizes(value: string[]) {
    this._excludedVmSizes = value;
  }
  public resetExcludedVmSizes() {
    this._excludedVmSizes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludedVmSizesInput() {
    return this._excludedVmSizes;
  }

  // od_sizes - computed: false, optional: false, required: true
  private _odSizes?: string[]; 
  public get odSizes() {
    return this.getListAttribute('od_sizes');
  }
  public set odSizes(value: string[]) {
    this._odSizes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get odSizesInput() {
    return this._odSizes;
  }

  // preferred_spot_sizes - computed: false, optional: true, required: false
  private _preferredSpotSizes?: string[]; 
  public get preferredSpotSizes() {
    return this.getListAttribute('preferred_spot_sizes');
  }
  public set preferredSpotSizes(value: string[]) {
    this._preferredSpotSizes = value;
  }
  public resetPreferredSpotSizes() {
    this._preferredSpotSizes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preferredSpotSizesInput() {
    return this._preferredSpotSizes;
  }

  // spot_sizes - computed: false, optional: true, required: false
  private _spotSizes?: string[]; 
  public get spotSizes() {
    return this.getListAttribute('spot_sizes');
  }
  public set spotSizes(value: string[]) {
    this._spotSizes = value;
  }
  public resetSpotSizes() {
    this._spotSizes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spotSizesInput() {
    return this._spotSizes;
  }

  // spot_size_attributes - computed: false, optional: true, required: false
  private _spotSizeAttributes = new ElastigroupAzureV3VmSizesSpotSizeAttributesOutputReference(this, "spot_size_attributes");
  public get spotSizeAttributes() {
    return this._spotSizeAttributes;
  }
  public putSpotSizeAttributes(value: ElastigroupAzureV3VmSizesSpotSizeAttributes) {
    this._spotSizeAttributes.internalValue = value;
  }
  public resetSpotSizeAttributes() {
    this._spotSizeAttributes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spotSizeAttributesInput() {
    return this._spotSizeAttributes.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/elastigroup_azure_v3 spotinst_elastigroup_azure_v3}
*/
export class ElastigroupAzureV3 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "spotinst_elastigroup_azure_v3";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ElastigroupAzureV3 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ElastigroupAzureV3 to import
  * @param importFromId The id of the existing ElastigroupAzureV3 that should be imported. Refer to the {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/elastigroup_azure_v3#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ElastigroupAzureV3 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "spotinst_elastigroup_azure_v3", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/elastigroup_azure_v3 spotinst_elastigroup_azure_v3} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ElastigroupAzureV3Config
  */
  public constructor(scope: Construct, id: string, config: ElastigroupAzureV3Config) {
    super(scope, id, {
      terraformResourceType: 'spotinst_elastigroup_azure_v3',
      terraformGeneratorMetadata: {
        providerName: 'spotinst',
        providerVersion: '1.230.0',
        providerVersionConstraint: '1.230.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._availabilityVsCost = config.availabilityVsCost;
    this._customData = config.customData;
    this._description = config.description;
    this._desiredCapacity = config.desiredCapacity;
    this._drainingTimeout = config.drainingTimeout;
    this._fallbackToOnDemand = config.fallbackToOnDemand;
    this._id = config.id;
    this._maxSize = config.maxSize;
    this._minSize = config.minSize;
    this._name = config.name;
    this._onDemandCount = config.onDemandCount;
    this._optimizationWindows = config.optimizationWindows;
    this._os = config.os;
    this._preferredZones = config.preferredZones;
    this._region = config.region;
    this._resourceGroupName = config.resourceGroupName;
    this._shutdownScript = config.shutdownScript;
    this._spotPercentage = config.spotPercentage;
    this._userData = config.userData;
    this._vmNamePrefix = config.vmNamePrefix;
    this._zones = config.zones;
    this._bootDiagnostics.internalValue = config.bootDiagnostics;
    this._capacityReservation.internalValue = config.capacityReservation;
    this._dataDisk.internalValue = config.dataDisk;
    this._extensions.internalValue = config.extensions;
    this._health.internalValue = config.health;
    this._image.internalValue = config.image;
    this._loadBalancer.internalValue = config.loadBalancer;
    this._login.internalValue = config.login;
    this._managedServiceIdentity.internalValue = config.managedServiceIdentity;
    this._network.internalValue = config.network;
    this._osDisk.internalValue = config.osDisk;
    this._proximityPlacementGroups.internalValue = config.proximityPlacementGroups;
    this._revertToSpot.internalValue = config.revertToSpot;
    this._scalingDownPolicy.internalValue = config.scalingDownPolicy;
    this._scalingUpPolicy.internalValue = config.scalingUpPolicy;
    this._schedulingTask.internalValue = config.schedulingTask;
    this._secret.internalValue = config.secret;
    this._security.internalValue = config.security;
    this._signal.internalValue = config.signal;
    this._tags.internalValue = config.tags;
    this._vmSizes.internalValue = config.vmSizes;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // availability_vs_cost - computed: false, optional: true, required: false
  private _availabilityVsCost?: number; 
  public get availabilityVsCost() {
    return this.getNumberAttribute('availability_vs_cost');
  }
  public set availabilityVsCost(value: number) {
    this._availabilityVsCost = value;
  }
  public resetAvailabilityVsCost() {
    this._availabilityVsCost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get availabilityVsCostInput() {
    return this._availabilityVsCost;
  }

  // custom_data - computed: false, optional: true, required: false
  private _customData?: string; 
  public get customData() {
    return this.getStringAttribute('custom_data');
  }
  public set customData(value: string) {
    this._customData = value;
  }
  public resetCustomData() {
    this._customData = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customDataInput() {
    return this._customData;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // desired_capacity - computed: false, optional: true, required: false
  private _desiredCapacity?: number; 
  public get desiredCapacity() {
    return this.getNumberAttribute('desired_capacity');
  }
  public set desiredCapacity(value: number) {
    this._desiredCapacity = value;
  }
  public resetDesiredCapacity() {
    this._desiredCapacity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get desiredCapacityInput() {
    return this._desiredCapacity;
  }

  // draining_timeout - computed: true, optional: true, required: false
  private _drainingTimeout?: number; 
  public get drainingTimeout() {
    return this.getNumberAttribute('draining_timeout');
  }
  public set drainingTimeout(value: number) {
    this._drainingTimeout = value;
  }
  public resetDrainingTimeout() {
    this._drainingTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get drainingTimeoutInput() {
    return this._drainingTimeout;
  }

  // fallback_to_on_demand - computed: false, optional: false, required: true
  private _fallbackToOnDemand?: boolean | cdktf.IResolvable; 
  public get fallbackToOnDemand() {
    return this.getBooleanAttribute('fallback_to_on_demand');
  }
  public set fallbackToOnDemand(value: boolean | cdktf.IResolvable) {
    this._fallbackToOnDemand = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fallbackToOnDemandInput() {
    return this._fallbackToOnDemand;
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

  // max_size - computed: true, optional: true, required: false
  private _maxSize?: number; 
  public get maxSize() {
    return this.getNumberAttribute('max_size');
  }
  public set maxSize(value: number) {
    this._maxSize = value;
  }
  public resetMaxSize() {
    this._maxSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxSizeInput() {
    return this._maxSize;
  }

  // min_size - computed: true, optional: true, required: false
  private _minSize?: number; 
  public get minSize() {
    return this.getNumberAttribute('min_size');
  }
  public set minSize(value: number) {
    this._minSize = value;
  }
  public resetMinSize() {
    this._minSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minSizeInput() {
    return this._minSize;
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

  // on_demand_count - computed: false, optional: true, required: false
  private _onDemandCount?: number; 
  public get onDemandCount() {
    return this.getNumberAttribute('on_demand_count');
  }
  public set onDemandCount(value: number) {
    this._onDemandCount = value;
  }
  public resetOnDemandCount() {
    this._onDemandCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onDemandCountInput() {
    return this._onDemandCount;
  }

  // optimization_windows - computed: false, optional: true, required: false
  private _optimizationWindows?: string[]; 
  public get optimizationWindows() {
    return this.getListAttribute('optimization_windows');
  }
  public set optimizationWindows(value: string[]) {
    this._optimizationWindows = value;
  }
  public resetOptimizationWindows() {
    this._optimizationWindows = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optimizationWindowsInput() {
    return this._optimizationWindows;
  }

  // os - computed: false, optional: false, required: true
  private _os?: string; 
  public get os() {
    return this.getStringAttribute('os');
  }
  public set os(value: string) {
    this._os = value;
  }
  // Temporarily expose input value. Use with caution.
  public get osInput() {
    return this._os;
  }

  // preferred_zones - computed: false, optional: true, required: false
  private _preferredZones?: string[]; 
  public get preferredZones() {
    return this.getListAttribute('preferred_zones');
  }
  public set preferredZones(value: string[]) {
    this._preferredZones = value;
  }
  public resetPreferredZones() {
    this._preferredZones = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preferredZonesInput() {
    return this._preferredZones;
  }

  // region - computed: false, optional: false, required: true
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // resource_group_name - computed: false, optional: false, required: true
  private _resourceGroupName?: string; 
  public get resourceGroupName() {
    return this.getStringAttribute('resource_group_name');
  }
  public set resourceGroupName(value: string) {
    this._resourceGroupName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceGroupNameInput() {
    return this._resourceGroupName;
  }

  // shutdown_script - computed: false, optional: true, required: false
  private _shutdownScript?: string; 
  public get shutdownScript() {
    return this.getStringAttribute('shutdown_script');
  }
  public set shutdownScript(value: string) {
    this._shutdownScript = value;
  }
  public resetShutdownScript() {
    this._shutdownScript = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shutdownScriptInput() {
    return this._shutdownScript;
  }

  // spot_percentage - computed: false, optional: true, required: false
  private _spotPercentage?: number; 
  public get spotPercentage() {
    return this.getNumberAttribute('spot_percentage');
  }
  public set spotPercentage(value: number) {
    this._spotPercentage = value;
  }
  public resetSpotPercentage() {
    this._spotPercentage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spotPercentageInput() {
    return this._spotPercentage;
  }

  // user_data - computed: false, optional: true, required: false
  private _userData?: string; 
  public get userData() {
    return this.getStringAttribute('user_data');
  }
  public set userData(value: string) {
    this._userData = value;
  }
  public resetUserData() {
    this._userData = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userDataInput() {
    return this._userData;
  }

  // vm_name_prefix - computed: false, optional: true, required: false
  private _vmNamePrefix?: string; 
  public get vmNamePrefix() {
    return this.getStringAttribute('vm_name_prefix');
  }
  public set vmNamePrefix(value: string) {
    this._vmNamePrefix = value;
  }
  public resetVmNamePrefix() {
    this._vmNamePrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vmNamePrefixInput() {
    return this._vmNamePrefix;
  }

  // zones - computed: false, optional: true, required: false
  private _zones?: string[]; 
  public get zones() {
    return this.getListAttribute('zones');
  }
  public set zones(value: string[]) {
    this._zones = value;
  }
  public resetZones() {
    this._zones = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zonesInput() {
    return this._zones;
  }

  // boot_diagnostics - computed: false, optional: true, required: false
  private _bootDiagnostics = new ElastigroupAzureV3BootDiagnosticsList(this, "boot_diagnostics", false);
  public get bootDiagnostics() {
    return this._bootDiagnostics;
  }
  public putBootDiagnostics(value: ElastigroupAzureV3BootDiagnostics[] | cdktf.IResolvable) {
    this._bootDiagnostics.internalValue = value;
  }
  public resetBootDiagnostics() {
    this._bootDiagnostics.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bootDiagnosticsInput() {
    return this._bootDiagnostics.internalValue;
  }

  // capacity_reservation - computed: false, optional: true, required: false
  private _capacityReservation = new ElastigroupAzureV3CapacityReservationOutputReference(this, "capacity_reservation");
  public get capacityReservation() {
    return this._capacityReservation;
  }
  public putCapacityReservation(value: ElastigroupAzureV3CapacityReservation) {
    this._capacityReservation.internalValue = value;
  }
  public resetCapacityReservation() {
    this._capacityReservation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get capacityReservationInput() {
    return this._capacityReservation.internalValue;
  }

  // data_disk - computed: false, optional: true, required: false
  private _dataDisk = new ElastigroupAzureV3DataDiskList(this, "data_disk", false);
  public get dataDisk() {
    return this._dataDisk;
  }
  public putDataDisk(value: ElastigroupAzureV3DataDisk[] | cdktf.IResolvable) {
    this._dataDisk.internalValue = value;
  }
  public resetDataDisk() {
    this._dataDisk.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataDiskInput() {
    return this._dataDisk.internalValue;
  }

  // extensions - computed: false, optional: true, required: false
  private _extensions = new ElastigroupAzureV3ExtensionsList(this, "extensions", false);
  public get extensions() {
    return this._extensions;
  }
  public putExtensions(value: ElastigroupAzureV3Extensions[] | cdktf.IResolvable) {
    this._extensions.internalValue = value;
  }
  public resetExtensions() {
    this._extensions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extensionsInput() {
    return this._extensions.internalValue;
  }

  // health - computed: false, optional: true, required: false
  private _health = new ElastigroupAzureV3HealthOutputReference(this, "health");
  public get health() {
    return this._health;
  }
  public putHealth(value: ElastigroupAzureV3Health) {
    this._health.internalValue = value;
  }
  public resetHealth() {
    this._health.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthInput() {
    return this._health.internalValue;
  }

  // image - computed: false, optional: true, required: false
  private _image = new ElastigroupAzureV3ImageList(this, "image", false);
  public get image() {
    return this._image;
  }
  public putImage(value: ElastigroupAzureV3Image[] | cdktf.IResolvable) {
    this._image.internalValue = value;
  }
  public resetImage() {
    this._image.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageInput() {
    return this._image.internalValue;
  }

  // load_balancer - computed: false, optional: true, required: false
  private _loadBalancer = new ElastigroupAzureV3LoadBalancerList(this, "load_balancer", true);
  public get loadBalancer() {
    return this._loadBalancer;
  }
  public putLoadBalancer(value: ElastigroupAzureV3LoadBalancer[] | cdktf.IResolvable) {
    this._loadBalancer.internalValue = value;
  }
  public resetLoadBalancer() {
    this._loadBalancer.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loadBalancerInput() {
    return this._loadBalancer.internalValue;
  }

  // login - computed: false, optional: true, required: false
  private _login = new ElastigroupAzureV3LoginOutputReference(this, "login");
  public get login() {
    return this._login;
  }
  public putLogin(value: ElastigroupAzureV3Login) {
    this._login.internalValue = value;
  }
  public resetLogin() {
    this._login.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loginInput() {
    return this._login.internalValue;
  }

  // managed_service_identity - computed: false, optional: true, required: false
  private _managedServiceIdentity = new ElastigroupAzureV3ManagedServiceIdentityList(this, "managed_service_identity", true);
  public get managedServiceIdentity() {
    return this._managedServiceIdentity;
  }
  public putManagedServiceIdentity(value: ElastigroupAzureV3ManagedServiceIdentity[] | cdktf.IResolvable) {
    this._managedServiceIdentity.internalValue = value;
  }
  public resetManagedServiceIdentity() {
    this._managedServiceIdentity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managedServiceIdentityInput() {
    return this._managedServiceIdentity.internalValue;
  }

  // network - computed: false, optional: false, required: true
  private _network = new ElastigroupAzureV3NetworkOutputReference(this, "network");
  public get network() {
    return this._network;
  }
  public putNetwork(value: ElastigroupAzureV3Network) {
    this._network.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInput() {
    return this._network.internalValue;
  }

  // os_disk - computed: false, optional: true, required: false
  private _osDisk = new ElastigroupAzureV3OsDiskOutputReference(this, "os_disk");
  public get osDisk() {
    return this._osDisk;
  }
  public putOsDisk(value: ElastigroupAzureV3OsDisk) {
    this._osDisk.internalValue = value;
  }
  public resetOsDisk() {
    this._osDisk.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get osDiskInput() {
    return this._osDisk.internalValue;
  }

  // proximity_placement_groups - computed: false, optional: true, required: false
  private _proximityPlacementGroups = new ElastigroupAzureV3ProximityPlacementGroupsList(this, "proximity_placement_groups", false);
  public get proximityPlacementGroups() {
    return this._proximityPlacementGroups;
  }
  public putProximityPlacementGroups(value: ElastigroupAzureV3ProximityPlacementGroups[] | cdktf.IResolvable) {
    this._proximityPlacementGroups.internalValue = value;
  }
  public resetProximityPlacementGroups() {
    this._proximityPlacementGroups.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proximityPlacementGroupsInput() {
    return this._proximityPlacementGroups.internalValue;
  }

  // revert_to_spot - computed: false, optional: true, required: false
  private _revertToSpot = new ElastigroupAzureV3RevertToSpotOutputReference(this, "revert_to_spot");
  public get revertToSpot() {
    return this._revertToSpot;
  }
  public putRevertToSpot(value: ElastigroupAzureV3RevertToSpot) {
    this._revertToSpot.internalValue = value;
  }
  public resetRevertToSpot() {
    this._revertToSpot.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get revertToSpotInput() {
    return this._revertToSpot.internalValue;
  }

  // scaling_down_policy - computed: false, optional: true, required: false
  private _scalingDownPolicy = new ElastigroupAzureV3ScalingDownPolicyList(this, "scaling_down_policy", false);
  public get scalingDownPolicy() {
    return this._scalingDownPolicy;
  }
  public putScalingDownPolicy(value: ElastigroupAzureV3ScalingDownPolicy[] | cdktf.IResolvable) {
    this._scalingDownPolicy.internalValue = value;
  }
  public resetScalingDownPolicy() {
    this._scalingDownPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scalingDownPolicyInput() {
    return this._scalingDownPolicy.internalValue;
  }

  // scaling_up_policy - computed: false, optional: true, required: false
  private _scalingUpPolicy = new ElastigroupAzureV3ScalingUpPolicyList(this, "scaling_up_policy", false);
  public get scalingUpPolicy() {
    return this._scalingUpPolicy;
  }
  public putScalingUpPolicy(value: ElastigroupAzureV3ScalingUpPolicy[] | cdktf.IResolvable) {
    this._scalingUpPolicy.internalValue = value;
  }
  public resetScalingUpPolicy() {
    this._scalingUpPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scalingUpPolicyInput() {
    return this._scalingUpPolicy.internalValue;
  }

  // scheduling_task - computed: false, optional: true, required: false
  private _schedulingTask = new ElastigroupAzureV3SchedulingTaskList(this, "scheduling_task", false);
  public get schedulingTask() {
    return this._schedulingTask;
  }
  public putSchedulingTask(value: ElastigroupAzureV3SchedulingTask[] | cdktf.IResolvable) {
    this._schedulingTask.internalValue = value;
  }
  public resetSchedulingTask() {
    this._schedulingTask.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schedulingTaskInput() {
    return this._schedulingTask.internalValue;
  }

  // secret - computed: false, optional: true, required: false
  private _secret = new ElastigroupAzureV3SecretList(this, "secret", true);
  public get secret() {
    return this._secret;
  }
  public putSecret(value: ElastigroupAzureV3Secret[] | cdktf.IResolvable) {
    this._secret.internalValue = value;
  }
  public resetSecret() {
    this._secret.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretInput() {
    return this._secret.internalValue;
  }

  // security - computed: false, optional: true, required: false
  private _security = new ElastigroupAzureV3SecurityOutputReference(this, "security");
  public get security() {
    return this._security;
  }
  public putSecurity(value: ElastigroupAzureV3Security) {
    this._security.internalValue = value;
  }
  public resetSecurity() {
    this._security.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityInput() {
    return this._security.internalValue;
  }

  // signal - computed: false, optional: true, required: false
  private _signal = new ElastigroupAzureV3SignalList(this, "signal", false);
  public get signal() {
    return this._signal;
  }
  public putSignal(value: ElastigroupAzureV3Signal[] | cdktf.IResolvable) {
    this._signal.internalValue = value;
  }
  public resetSignal() {
    this._signal.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get signalInput() {
    return this._signal.internalValue;
  }

  // tags - computed: false, optional: true, required: false
  private _tags = new ElastigroupAzureV3TagsList(this, "tags", true);
  public get tags() {
    return this._tags;
  }
  public putTags(value: ElastigroupAzureV3Tags[] | cdktf.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }

  // vm_sizes - computed: false, optional: false, required: true
  private _vmSizes = new ElastigroupAzureV3VmSizesOutputReference(this, "vm_sizes");
  public get vmSizes() {
    return this._vmSizes;
  }
  public putVmSizes(value: ElastigroupAzureV3VmSizes) {
    this._vmSizes.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vmSizesInput() {
    return this._vmSizes.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      availability_vs_cost: cdktf.numberToTerraform(this._availabilityVsCost),
      custom_data: cdktf.stringToTerraform(this._customData),
      description: cdktf.stringToTerraform(this._description),
      desired_capacity: cdktf.numberToTerraform(this._desiredCapacity),
      draining_timeout: cdktf.numberToTerraform(this._drainingTimeout),
      fallback_to_on_demand: cdktf.booleanToTerraform(this._fallbackToOnDemand),
      id: cdktf.stringToTerraform(this._id),
      max_size: cdktf.numberToTerraform(this._maxSize),
      min_size: cdktf.numberToTerraform(this._minSize),
      name: cdktf.stringToTerraform(this._name),
      on_demand_count: cdktf.numberToTerraform(this._onDemandCount),
      optimization_windows: cdktf.listMapper(cdktf.stringToTerraform, false)(this._optimizationWindows),
      os: cdktf.stringToTerraform(this._os),
      preferred_zones: cdktf.listMapper(cdktf.stringToTerraform, false)(this._preferredZones),
      region: cdktf.stringToTerraform(this._region),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      shutdown_script: cdktf.stringToTerraform(this._shutdownScript),
      spot_percentage: cdktf.numberToTerraform(this._spotPercentage),
      user_data: cdktf.stringToTerraform(this._userData),
      vm_name_prefix: cdktf.stringToTerraform(this._vmNamePrefix),
      zones: cdktf.listMapper(cdktf.stringToTerraform, false)(this._zones),
      boot_diagnostics: cdktf.listMapper(elastigroupAzureV3BootDiagnosticsToTerraform, true)(this._bootDiagnostics.internalValue),
      capacity_reservation: elastigroupAzureV3CapacityReservationToTerraform(this._capacityReservation.internalValue),
      data_disk: cdktf.listMapper(elastigroupAzureV3DataDiskToTerraform, true)(this._dataDisk.internalValue),
      extensions: cdktf.listMapper(elastigroupAzureV3ExtensionsToTerraform, true)(this._extensions.internalValue),
      health: elastigroupAzureV3HealthToTerraform(this._health.internalValue),
      image: cdktf.listMapper(elastigroupAzureV3ImageToTerraform, true)(this._image.internalValue),
      load_balancer: cdktf.listMapper(elastigroupAzureV3LoadBalancerToTerraform, true)(this._loadBalancer.internalValue),
      login: elastigroupAzureV3LoginToTerraform(this._login.internalValue),
      managed_service_identity: cdktf.listMapper(elastigroupAzureV3ManagedServiceIdentityToTerraform, true)(this._managedServiceIdentity.internalValue),
      network: elastigroupAzureV3NetworkToTerraform(this._network.internalValue),
      os_disk: elastigroupAzureV3OsDiskToTerraform(this._osDisk.internalValue),
      proximity_placement_groups: cdktf.listMapper(elastigroupAzureV3ProximityPlacementGroupsToTerraform, true)(this._proximityPlacementGroups.internalValue),
      revert_to_spot: elastigroupAzureV3RevertToSpotToTerraform(this._revertToSpot.internalValue),
      scaling_down_policy: cdktf.listMapper(elastigroupAzureV3ScalingDownPolicyToTerraform, true)(this._scalingDownPolicy.internalValue),
      scaling_up_policy: cdktf.listMapper(elastigroupAzureV3ScalingUpPolicyToTerraform, true)(this._scalingUpPolicy.internalValue),
      scheduling_task: cdktf.listMapper(elastigroupAzureV3SchedulingTaskToTerraform, true)(this._schedulingTask.internalValue),
      secret: cdktf.listMapper(elastigroupAzureV3SecretToTerraform, true)(this._secret.internalValue),
      security: elastigroupAzureV3SecurityToTerraform(this._security.internalValue),
      signal: cdktf.listMapper(elastigroupAzureV3SignalToTerraform, true)(this._signal.internalValue),
      tags: cdktf.listMapper(elastigroupAzureV3TagsToTerraform, true)(this._tags.internalValue),
      vm_sizes: elastigroupAzureV3VmSizesToTerraform(this._vmSizes.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      availability_vs_cost: {
        value: cdktf.numberToHclTerraform(this._availabilityVsCost),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      custom_data: {
        value: cdktf.stringToHclTerraform(this._customData),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      desired_capacity: {
        value: cdktf.numberToHclTerraform(this._desiredCapacity),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      draining_timeout: {
        value: cdktf.numberToHclTerraform(this._drainingTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      fallback_to_on_demand: {
        value: cdktf.booleanToHclTerraform(this._fallbackToOnDemand),
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
      max_size: {
        value: cdktf.numberToHclTerraform(this._maxSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      min_size: {
        value: cdktf.numberToHclTerraform(this._minSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      on_demand_count: {
        value: cdktf.numberToHclTerraform(this._onDemandCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      optimization_windows: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._optimizationWindows),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      os: {
        value: cdktf.stringToHclTerraform(this._os),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      preferred_zones: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._preferredZones),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resource_group_name: {
        value: cdktf.stringToHclTerraform(this._resourceGroupName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      shutdown_script: {
        value: cdktf.stringToHclTerraform(this._shutdownScript),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      spot_percentage: {
        value: cdktf.numberToHclTerraform(this._spotPercentage),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      user_data: {
        value: cdktf.stringToHclTerraform(this._userData),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vm_name_prefix: {
        value: cdktf.stringToHclTerraform(this._vmNamePrefix),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      zones: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._zones),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      boot_diagnostics: {
        value: cdktf.listMapperHcl(elastigroupAzureV3BootDiagnosticsToHclTerraform, true)(this._bootDiagnostics.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ElastigroupAzureV3BootDiagnosticsList",
      },
      capacity_reservation: {
        value: elastigroupAzureV3CapacityReservationToHclTerraform(this._capacityReservation.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ElastigroupAzureV3CapacityReservationList",
      },
      data_disk: {
        value: cdktf.listMapperHcl(elastigroupAzureV3DataDiskToHclTerraform, true)(this._dataDisk.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ElastigroupAzureV3DataDiskList",
      },
      extensions: {
        value: cdktf.listMapperHcl(elastigroupAzureV3ExtensionsToHclTerraform, true)(this._extensions.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ElastigroupAzureV3ExtensionsList",
      },
      health: {
        value: elastigroupAzureV3HealthToHclTerraform(this._health.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ElastigroupAzureV3HealthList",
      },
      image: {
        value: cdktf.listMapperHcl(elastigroupAzureV3ImageToHclTerraform, true)(this._image.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ElastigroupAzureV3ImageList",
      },
      load_balancer: {
        value: cdktf.listMapperHcl(elastigroupAzureV3LoadBalancerToHclTerraform, true)(this._loadBalancer.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ElastigroupAzureV3LoadBalancerList",
      },
      login: {
        value: elastigroupAzureV3LoginToHclTerraform(this._login.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ElastigroupAzureV3LoginList",
      },
      managed_service_identity: {
        value: cdktf.listMapperHcl(elastigroupAzureV3ManagedServiceIdentityToHclTerraform, true)(this._managedServiceIdentity.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ElastigroupAzureV3ManagedServiceIdentityList",
      },
      network: {
        value: elastigroupAzureV3NetworkToHclTerraform(this._network.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ElastigroupAzureV3NetworkList",
      },
      os_disk: {
        value: elastigroupAzureV3OsDiskToHclTerraform(this._osDisk.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ElastigroupAzureV3OsDiskList",
      },
      proximity_placement_groups: {
        value: cdktf.listMapperHcl(elastigroupAzureV3ProximityPlacementGroupsToHclTerraform, true)(this._proximityPlacementGroups.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ElastigroupAzureV3ProximityPlacementGroupsList",
      },
      revert_to_spot: {
        value: elastigroupAzureV3RevertToSpotToHclTerraform(this._revertToSpot.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ElastigroupAzureV3RevertToSpotList",
      },
      scaling_down_policy: {
        value: cdktf.listMapperHcl(elastigroupAzureV3ScalingDownPolicyToHclTerraform, true)(this._scalingDownPolicy.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ElastigroupAzureV3ScalingDownPolicyList",
      },
      scaling_up_policy: {
        value: cdktf.listMapperHcl(elastigroupAzureV3ScalingUpPolicyToHclTerraform, true)(this._scalingUpPolicy.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ElastigroupAzureV3ScalingUpPolicyList",
      },
      scheduling_task: {
        value: cdktf.listMapperHcl(elastigroupAzureV3SchedulingTaskToHclTerraform, true)(this._schedulingTask.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ElastigroupAzureV3SchedulingTaskList",
      },
      secret: {
        value: cdktf.listMapperHcl(elastigroupAzureV3SecretToHclTerraform, true)(this._secret.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ElastigroupAzureV3SecretList",
      },
      security: {
        value: elastigroupAzureV3SecurityToHclTerraform(this._security.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ElastigroupAzureV3SecurityList",
      },
      signal: {
        value: cdktf.listMapperHcl(elastigroupAzureV3SignalToHclTerraform, true)(this._signal.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ElastigroupAzureV3SignalList",
      },
      tags: {
        value: cdktf.listMapperHcl(elastigroupAzureV3TagsToHclTerraform, true)(this._tags.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ElastigroupAzureV3TagsList",
      },
      vm_sizes: {
        value: elastigroupAzureV3VmSizesToHclTerraform(this._vmSizes.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ElastigroupAzureV3VmSizesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
