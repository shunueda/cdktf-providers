// https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/compute_instance_group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ComputeInstanceGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * The `true` value means that resource is protected from accidental deletion.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/compute_instance_group#deletion_protection ComputeInstanceGroup#deletion_protection}
  */
  readonly deletionProtection?: boolean | cdktf.IResolvable;
  /**
  * The resource description.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/compute_instance_group#description ComputeInstanceGroup#description}
  */
  readonly description?: string;
  /**
  * The folder identifier that resource belongs to. If it is not provided, the default provider `folder-id` is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/compute_instance_group#folder_id ComputeInstanceGroup#folder_id}
  */
  readonly folderId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/compute_instance_group#id ComputeInstanceGroup#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * A set of key/value label pairs which assigned to resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/compute_instance_group#labels ComputeInstanceGroup#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Timeout for waiting for the VM to become healthy. If the timeout is exceeded, the VM will be turned off based on the deployment policy. Specified in seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/compute_instance_group#max_checking_health_duration ComputeInstanceGroup#max_checking_health_duration}
  */
  readonly maxCheckingHealthDuration?: number;
  /**
  * The resource name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/compute_instance_group#name ComputeInstanceGroup#name}
  */
  readonly name?: string;
  /**
  * [Service account](https://yandex.cloud/docs/iam/concepts/users/service-accounts) which linked to the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/compute_instance_group#service_account_id ComputeInstanceGroup#service_account_id}
  */
  readonly serviceAccountId: string;
  /**
  * A set of key/value variables pairs to assign to the instance group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/compute_instance_group#variables ComputeInstanceGroup#variables}
  */
  readonly variables?: { [key: string]: string };
  /**
  * allocation_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/compute_instance_group#allocation_policy ComputeInstanceGroup#allocation_policy}
  */
  readonly allocationPolicy: ComputeInstanceGroupAllocationPolicy;
  /**
  * application_load_balancer block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/compute_instance_group#application_load_balancer ComputeInstanceGroup#application_load_balancer}
  */
  readonly applicationLoadBalancer?: ComputeInstanceGroupApplicationLoadBalancer;
  /**
  * deploy_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/compute_instance_group#deploy_policy ComputeInstanceGroup#deploy_policy}
  */
  readonly deployPolicy: ComputeInstanceGroupDeployPolicy;
  /**
  * health_check block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/compute_instance_group#health_check ComputeInstanceGroup#health_check}
  */
  readonly healthCheck?: ComputeInstanceGroupHealthCheck[] | cdktf.IResolvable;
  /**
  * instance_template block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/compute_instance_group#instance_template ComputeInstanceGroup#instance_template}
  */
  readonly instanceTemplate: ComputeInstanceGroupInstanceTemplate;
  /**
  * load_balancer block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/compute_instance_group#load_balancer ComputeInstanceGroup#load_balancer}
  */
  readonly loadBalancer?: ComputeInstanceGroupLoadBalancer;
  /**
  * scale_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/compute_instance_group#scale_policy ComputeInstanceGroup#scale_policy}
  */
  readonly scalePolicy: ComputeInstanceGroupScalePolicy;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/compute_instance_group#timeouts ComputeInstanceGroup#timeouts}
  */
  readonly timeouts?: ComputeInstanceGroupTimeouts;
}
export interface ComputeInstanceGroupInstancesNetworkInterface {
}

export function computeInstanceGroupInstancesNetworkInterfaceToTerraform(struct?: ComputeInstanceGroupInstancesNetworkInterface): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function computeInstanceGroupInstancesNetworkInterfaceToHclTerraform(struct?: ComputeInstanceGroupInstancesNetworkInterface): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ComputeInstanceGroupInstancesNetworkInterfaceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ComputeInstanceGroupInstancesNetworkInterface | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeInstanceGroupInstancesNetworkInterface | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // index - computed: true, optional: false, required: false
  public get index() {
    return this.getNumberAttribute('index');
  }

  // ip_address - computed: true, optional: false, required: false
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }

  // ipv4 - computed: true, optional: false, required: false
  public get ipv4() {
    return this.getBooleanAttribute('ipv4');
  }

  // ipv6 - computed: true, optional: false, required: false
  public get ipv6() {
    return this.getBooleanAttribute('ipv6');
  }

  // ipv6_address - computed: true, optional: false, required: false
  public get ipv6Address() {
    return this.getStringAttribute('ipv6_address');
  }

  // mac_address - computed: true, optional: false, required: false
  public get macAddress() {
    return this.getStringAttribute('mac_address');
  }

  // nat - computed: true, optional: false, required: false
  public get nat() {
    return this.getBooleanAttribute('nat');
  }

  // nat_ip_address - computed: true, optional: false, required: false
  public get natIpAddress() {
    return this.getStringAttribute('nat_ip_address');
  }

  // nat_ip_version - computed: true, optional: false, required: false
  public get natIpVersion() {
    return this.getStringAttribute('nat_ip_version');
  }

  // subnet_id - computed: true, optional: false, required: false
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
}

export class ComputeInstanceGroupInstancesNetworkInterfaceList extends cdktf.ComplexList {

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
  public get(index: number): ComputeInstanceGroupInstancesNetworkInterfaceOutputReference {
    return new ComputeInstanceGroupInstancesNetworkInterfaceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ComputeInstanceGroupInstances {
}

export function computeInstanceGroupInstancesToTerraform(struct?: ComputeInstanceGroupInstances): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function computeInstanceGroupInstancesToHclTerraform(struct?: ComputeInstanceGroupInstances): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ComputeInstanceGroupInstancesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ComputeInstanceGroupInstances | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeInstanceGroupInstances | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // fqdn - computed: true, optional: false, required: false
  public get fqdn() {
    return this.getStringAttribute('fqdn');
  }

  // instance_id - computed: true, optional: false, required: false
  public get instanceId() {
    return this.getStringAttribute('instance_id');
  }

  // instance_tag - computed: true, optional: false, required: false
  public get instanceTag() {
    return this.getStringAttribute('instance_tag');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // network_interface - computed: true, optional: false, required: false
  private _networkInterface = new ComputeInstanceGroupInstancesNetworkInterfaceList(this, "network_interface", false);
  public get networkInterface() {
    return this._networkInterface;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // status_changed_at - computed: true, optional: false, required: false
  public get statusChangedAt() {
    return this.getStringAttribute('status_changed_at');
  }

  // status_message - computed: true, optional: false, required: false
  public get statusMessage() {
    return this.getStringAttribute('status_message');
  }

  // zone_id - computed: true, optional: false, required: false
  public get zoneId() {
    return this.getStringAttribute('zone_id');
  }
}

export class ComputeInstanceGroupInstancesList extends cdktf.ComplexList {

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
  public get(index: number): ComputeInstanceGroupInstancesOutputReference {
    return new ComputeInstanceGroupInstancesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ComputeInstanceGroupAllocationPolicyInstanceTagsPool {
  /**
  * List of tags for instances in zone.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/compute_instance_group#tags ComputeInstanceGroup#tags}
  */
  readonly tags: string[];
  /**
  * Availability zone.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/compute_instance_group#zone ComputeInstanceGroup#zone}
  */
  readonly zone: string;
}

export function computeInstanceGroupAllocationPolicyInstanceTagsPoolToTerraform(struct?: ComputeInstanceGroupAllocationPolicyInstanceTagsPool | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    tags: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.tags),
    zone: cdktf.stringToTerraform(struct!.zone),
  }
}


export function computeInstanceGroupAllocationPolicyInstanceTagsPoolToHclTerraform(struct?: ComputeInstanceGroupAllocationPolicyInstanceTagsPool | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    tags: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.tags),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    zone: {
      value: cdktf.stringToHclTerraform(struct!.zone),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComputeInstanceGroupAllocationPolicyInstanceTagsPoolOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ComputeInstanceGroupAllocationPolicyInstanceTagsPool | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._tags !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags;
    }
    if (this._zone !== undefined) {
      hasAnyValues = true;
      internalValueResult.zone = this._zone;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeInstanceGroupAllocationPolicyInstanceTagsPool | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._tags = undefined;
      this._zone = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._tags = value.tags;
      this._zone = value.zone;
    }
  }

  // tags - computed: false, optional: false, required: true
  private _tags?: string[]; 
  public get tags() {
    return this.getListAttribute('tags');
  }
  public set tags(value: string[]) {
    this._tags = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // zone - computed: false, optional: false, required: true
  private _zone?: string; 
  public get zone() {
    return this.getStringAttribute('zone');
  }
  public set zone(value: string) {
    this._zone = value;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneInput() {
    return this._zone;
  }
}

export class ComputeInstanceGroupAllocationPolicyInstanceTagsPoolList extends cdktf.ComplexList {
  public internalValue? : ComputeInstanceGroupAllocationPolicyInstanceTagsPool[] | cdktf.IResolvable

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
  public get(index: number): ComputeInstanceGroupAllocationPolicyInstanceTagsPoolOutputReference {
    return new ComputeInstanceGroupAllocationPolicyInstanceTagsPoolOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ComputeInstanceGroupAllocationPolicy {
  /**
  * A list of [availability zones](https://yandex.cloud/docs/overview/concepts/geo-scope).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/compute_instance_group#zones ComputeInstanceGroup#zones}
  */
  readonly zones: string[];
  /**
  * instance_tags_pool block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/compute_instance_group#instance_tags_pool ComputeInstanceGroup#instance_tags_pool}
  */
  readonly instanceTagsPool?: ComputeInstanceGroupAllocationPolicyInstanceTagsPool[] | cdktf.IResolvable;
}

export function computeInstanceGroupAllocationPolicyToTerraform(struct?: ComputeInstanceGroupAllocationPolicyOutputReference | ComputeInstanceGroupAllocationPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    zones: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.zones),
    instance_tags_pool: cdktf.listMapper(computeInstanceGroupAllocationPolicyInstanceTagsPoolToTerraform, true)(struct!.instanceTagsPool),
  }
}


export function computeInstanceGroupAllocationPolicyToHclTerraform(struct?: ComputeInstanceGroupAllocationPolicyOutputReference | ComputeInstanceGroupAllocationPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    zones: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.zones),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    instance_tags_pool: {
      value: cdktf.listMapperHcl(computeInstanceGroupAllocationPolicyInstanceTagsPoolToHclTerraform, true)(struct!.instanceTagsPool),
      isBlock: true,
      type: "list",
      storageClassType: "ComputeInstanceGroupAllocationPolicyInstanceTagsPoolList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComputeInstanceGroupAllocationPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ComputeInstanceGroupAllocationPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._zones !== undefined) {
      hasAnyValues = true;
      internalValueResult.zones = this._zones;
    }
    if (this._instanceTagsPool?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceTagsPool = this._instanceTagsPool?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeInstanceGroupAllocationPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._zones = undefined;
      this._instanceTagsPool.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._zones = value.zones;
      this._instanceTagsPool.internalValue = value.instanceTagsPool;
    }
  }

  // zones - computed: false, optional: false, required: true
  private _zones?: string[]; 
  public get zones() {
    return cdktf.Fn.tolist(this.getListAttribute('zones'));
  }
  public set zones(value: string[]) {
    this._zones = value;
  }
  // Temporarily expose input value. Use with caution.
  public get zonesInput() {
    return this._zones;
  }

  // instance_tags_pool - computed: false, optional: true, required: false
  private _instanceTagsPool = new ComputeInstanceGroupAllocationPolicyInstanceTagsPoolList(this, "instance_tags_pool", false);
  public get instanceTagsPool() {
    return this._instanceTagsPool;
  }
  public putInstanceTagsPool(value: ComputeInstanceGroupAllocationPolicyInstanceTagsPool[] | cdktf.IResolvable) {
    this._instanceTagsPool.internalValue = value;
  }
  public resetInstanceTagsPool() {
    this._instanceTagsPool.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceTagsPoolInput() {
    return this._instanceTagsPool.internalValue;
  }
}
export interface ComputeInstanceGroupApplicationLoadBalancer {
  /**
  * Do not wait load balancer health checks.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/compute_instance_group#ignore_health_checks ComputeInstanceGroup#ignore_health_checks}
  */
  readonly ignoreHealthChecks?: boolean | cdktf.IResolvable;
  /**
  * Timeout for waiting for the VM to be checked by the load balancer. If the timeout is exceeded, the VM will be turned off based on the deployment policy. Specified in seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/compute_instance_group#max_opening_traffic_duration ComputeInstanceGroup#max_opening_traffic_duration}
  */
  readonly maxOpeningTrafficDuration?: number;
  /**
  * A description of the target group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/compute_instance_group#target_group_description ComputeInstanceGroup#target_group_description}
  */
  readonly targetGroupDescription?: string;
  /**
  * A set of key/value label pairs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/compute_instance_group#target_group_labels ComputeInstanceGroup#target_group_labels}
  */
  readonly targetGroupLabels?: { [key: string]: string };
  /**
  * The name of the target group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/compute_instance_group#target_group_name ComputeInstanceGroup#target_group_name}
  */
  readonly targetGroupName?: string;
}

export function computeInstanceGroupApplicationLoadBalancerToTerraform(struct?: ComputeInstanceGroupApplicationLoadBalancerOutputReference | ComputeInstanceGroupApplicationLoadBalancer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ignore_health_checks: cdktf.booleanToTerraform(struct!.ignoreHealthChecks),
    max_opening_traffic_duration: cdktf.numberToTerraform(struct!.maxOpeningTrafficDuration),
    target_group_description: cdktf.stringToTerraform(struct!.targetGroupDescription),
    target_group_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.targetGroupLabels),
    target_group_name: cdktf.stringToTerraform(struct!.targetGroupName),
  }
}


export function computeInstanceGroupApplicationLoadBalancerToHclTerraform(struct?: ComputeInstanceGroupApplicationLoadBalancerOutputReference | ComputeInstanceGroupApplicationLoadBalancer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ignore_health_checks: {
      value: cdktf.booleanToHclTerraform(struct!.ignoreHealthChecks),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    max_opening_traffic_duration: {
      value: cdktf.numberToHclTerraform(struct!.maxOpeningTrafficDuration),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    target_group_description: {
      value: cdktf.stringToHclTerraform(struct!.targetGroupDescription),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target_group_labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.targetGroupLabels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    target_group_name: {
      value: cdktf.stringToHclTerraform(struct!.targetGroupName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComputeInstanceGroupApplicationLoadBalancerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ComputeInstanceGroupApplicationLoadBalancer | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ignoreHealthChecks !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreHealthChecks = this._ignoreHealthChecks;
    }
    if (this._maxOpeningTrafficDuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxOpeningTrafficDuration = this._maxOpeningTrafficDuration;
    }
    if (this._targetGroupDescription !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetGroupDescription = this._targetGroupDescription;
    }
    if (this._targetGroupLabels !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetGroupLabels = this._targetGroupLabels;
    }
    if (this._targetGroupName !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetGroupName = this._targetGroupName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeInstanceGroupApplicationLoadBalancer | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ignoreHealthChecks = undefined;
      this._maxOpeningTrafficDuration = undefined;
      this._targetGroupDescription = undefined;
      this._targetGroupLabels = undefined;
      this._targetGroupName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ignoreHealthChecks = value.ignoreHealthChecks;
      this._maxOpeningTrafficDuration = value.maxOpeningTrafficDuration;
      this._targetGroupDescription = value.targetGroupDescription;
      this._targetGroupLabels = value.targetGroupLabels;
      this._targetGroupName = value.targetGroupName;
    }
  }

  // ignore_health_checks - computed: false, optional: true, required: false
  private _ignoreHealthChecks?: boolean | cdktf.IResolvable; 
  public get ignoreHealthChecks() {
    return this.getBooleanAttribute('ignore_health_checks');
  }
  public set ignoreHealthChecks(value: boolean | cdktf.IResolvable) {
    this._ignoreHealthChecks = value;
  }
  public resetIgnoreHealthChecks() {
    this._ignoreHealthChecks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreHealthChecksInput() {
    return this._ignoreHealthChecks;
  }

  // max_opening_traffic_duration - computed: false, optional: true, required: false
  private _maxOpeningTrafficDuration?: number; 
  public get maxOpeningTrafficDuration() {
    return this.getNumberAttribute('max_opening_traffic_duration');
  }
  public set maxOpeningTrafficDuration(value: number) {
    this._maxOpeningTrafficDuration = value;
  }
  public resetMaxOpeningTrafficDuration() {
    this._maxOpeningTrafficDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxOpeningTrafficDurationInput() {
    return this._maxOpeningTrafficDuration;
  }

  // status_message - computed: true, optional: false, required: false
  public get statusMessage() {
    return this.getStringAttribute('status_message');
  }

  // target_group_description - computed: false, optional: true, required: false
  private _targetGroupDescription?: string; 
  public get targetGroupDescription() {
    return this.getStringAttribute('target_group_description');
  }
  public set targetGroupDescription(value: string) {
    this._targetGroupDescription = value;
  }
  public resetTargetGroupDescription() {
    this._targetGroupDescription = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetGroupDescriptionInput() {
    return this._targetGroupDescription;
  }

  // target_group_id - computed: true, optional: false, required: false
  public get targetGroupId() {
    return this.getStringAttribute('target_group_id');
  }

  // target_group_labels - computed: false, optional: true, required: false
  private _targetGroupLabels?: { [key: string]: string }; 
  public get targetGroupLabels() {
    return this.getStringMapAttribute('target_group_labels');
  }
  public set targetGroupLabels(value: { [key: string]: string }) {
    this._targetGroupLabels = value;
  }
  public resetTargetGroupLabels() {
    this._targetGroupLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetGroupLabelsInput() {
    return this._targetGroupLabels;
  }

  // target_group_name - computed: false, optional: true, required: false
  private _targetGroupName?: string; 
  public get targetGroupName() {
    return this.getStringAttribute('target_group_name');
  }
  public set targetGroupName(value: string) {
    this._targetGroupName = value;
  }
  public resetTargetGroupName() {
    this._targetGroupName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetGroupNameInput() {
    return this._targetGroupName;
  }
}
export interface ComputeInstanceGroupDeployPolicy {
  /**
  * The maximum number of instances that can be created at the same time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/compute_instance_group#max_creating ComputeInstanceGroup#max_creating}
  */
  readonly maxCreating?: number;
  /**
  * The maximum number of instances that can be deleted at the same time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/compute_instance_group#max_deleting ComputeInstanceGroup#max_deleting}
  */
  readonly maxDeleting?: number;
  /**
  * The maximum number of instances that can be temporarily allocated above the group's target size during the update process.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/compute_instance_group#max_expansion ComputeInstanceGroup#max_expansion}
  */
  readonly maxExpansion: number;
  /**
  * The maximum number of running instances that can be taken offline (stopped or deleted) at the same time during the update process.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/compute_instance_group#max_unavailable ComputeInstanceGroup#max_unavailable}
  */
  readonly maxUnavailable: number;
  /**
  * The amount of time in seconds to allow for an instance to start. Instance will be considered up and running (and start receiving traffic) only after the startup_duration has elapsed and all health checks are passed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/compute_instance_group#startup_duration ComputeInstanceGroup#startup_duration}
  */
  readonly startupDuration?: number;
  /**
  * Affects the lifecycle of the instance during deployment. If set to `proactive` (default), Instance Groups can forcefully stop a running instance. If `opportunistic`, Instance Groups does not stop a running instance. Instead, it will wait until the instance stops itself or becomes unhealthy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/compute_instance_group#strategy ComputeInstanceGroup#strategy}
  */
  readonly strategy?: string;
}

export function computeInstanceGroupDeployPolicyToTerraform(struct?: ComputeInstanceGroupDeployPolicyOutputReference | ComputeInstanceGroupDeployPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_creating: cdktf.numberToTerraform(struct!.maxCreating),
    max_deleting: cdktf.numberToTerraform(struct!.maxDeleting),
    max_expansion: cdktf.numberToTerraform(struct!.maxExpansion),
    max_unavailable: cdktf.numberToTerraform(struct!.maxUnavailable),
    startup_duration: cdktf.numberToTerraform(struct!.startupDuration),
    strategy: cdktf.stringToTerraform(struct!.strategy),
  }
}


export function computeInstanceGroupDeployPolicyToHclTerraform(struct?: ComputeInstanceGroupDeployPolicyOutputReference | ComputeInstanceGroupDeployPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max_creating: {
      value: cdktf.numberToHclTerraform(struct!.maxCreating),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_deleting: {
      value: cdktf.numberToHclTerraform(struct!.maxDeleting),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_expansion: {
      value: cdktf.numberToHclTerraform(struct!.maxExpansion),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_unavailable: {
      value: cdktf.numberToHclTerraform(struct!.maxUnavailable),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    startup_duration: {
      value: cdktf.numberToHclTerraform(struct!.startupDuration),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    strategy: {
      value: cdktf.stringToHclTerraform(struct!.strategy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComputeInstanceGroupDeployPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ComputeInstanceGroupDeployPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxCreating !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxCreating = this._maxCreating;
    }
    if (this._maxDeleting !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxDeleting = this._maxDeleting;
    }
    if (this._maxExpansion !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxExpansion = this._maxExpansion;
    }
    if (this._maxUnavailable !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxUnavailable = this._maxUnavailable;
    }
    if (this._startupDuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.startupDuration = this._startupDuration;
    }
    if (this._strategy !== undefined) {
      hasAnyValues = true;
      internalValueResult.strategy = this._strategy;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeInstanceGroupDeployPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._maxCreating = undefined;
      this._maxDeleting = undefined;
      this._maxExpansion = undefined;
      this._maxUnavailable = undefined;
      this._startupDuration = undefined;
      this._strategy = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._maxCreating = value.maxCreating;
      this._maxDeleting = value.maxDeleting;
      this._maxExpansion = value.maxExpansion;
      this._maxUnavailable = value.maxUnavailable;
      this._startupDuration = value.startupDuration;
      this._strategy = value.strategy;
    }
  }

  // max_creating - computed: false, optional: true, required: false
  private _maxCreating?: number; 
  public get maxCreating() {
    return this.getNumberAttribute('max_creating');
  }
  public set maxCreating(value: number) {
    this._maxCreating = value;
  }
  public resetMaxCreating() {
    this._maxCreating = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxCreatingInput() {
    return this._maxCreating;
  }

  // max_deleting - computed: false, optional: true, required: false
  private _maxDeleting?: number; 
  public get maxDeleting() {
    return this.getNumberAttribute('max_deleting');
  }
  public set maxDeleting(value: number) {
    this._maxDeleting = value;
  }
  public resetMaxDeleting() {
    this._maxDeleting = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxDeletingInput() {
    return this._maxDeleting;
  }

  // max_expansion - computed: false, optional: false, required: true
  private _maxExpansion?: number; 
  public get maxExpansion() {
    return this.getNumberAttribute('max_expansion');
  }
  public set maxExpansion(value: number) {
    this._maxExpansion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maxExpansionInput() {
    return this._maxExpansion;
  }

  // max_unavailable - computed: false, optional: false, required: true
  private _maxUnavailable?: number; 
  public get maxUnavailable() {
    return this.getNumberAttribute('max_unavailable');
  }
  public set maxUnavailable(value: number) {
    this._maxUnavailable = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maxUnavailableInput() {
    return this._maxUnavailable;
  }

  // startup_duration - computed: false, optional: true, required: false
  private _startupDuration?: number; 
  public get startupDuration() {
    return this.getNumberAttribute('startup_duration');
  }
  public set startupDuration(value: number) {
    this._startupDuration = value;
  }
  public resetStartupDuration() {
    this._startupDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startupDurationInput() {
    return this._startupDuration;
  }

  // strategy - computed: true, optional: true, required: false
  private _strategy?: string; 
  public get strategy() {
    return this.getStringAttribute('strategy');
  }
  public set strategy(value: string) {
    this._strategy = value;
  }
  public resetStrategy() {
    this._strategy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get strategyInput() {
    return this._strategy;
  }
}
export interface ComputeInstanceGroupHealthCheckHttpOptions {
  /**
  * The URL path used for health check requests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/compute_instance_group#path ComputeInstanceGroup#path}
  */
  readonly path: string;
  /**
  * The port used for HTTP health checks.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/compute_instance_group#port ComputeInstanceGroup#port}
  */
  readonly port: number;
}

export function computeInstanceGroupHealthCheckHttpOptionsToTerraform(struct?: ComputeInstanceGroupHealthCheckHttpOptionsOutputReference | ComputeInstanceGroupHealthCheckHttpOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    path: cdktf.stringToTerraform(struct!.path),
    port: cdktf.numberToTerraform(struct!.port),
  }
}


export function computeInstanceGroupHealthCheckHttpOptionsToHclTerraform(struct?: ComputeInstanceGroupHealthCheckHttpOptionsOutputReference | ComputeInstanceGroupHealthCheckHttpOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComputeInstanceGroupHealthCheckHttpOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ComputeInstanceGroupHealthCheckHttpOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeInstanceGroupHealthCheckHttpOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._path = undefined;
      this._port = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._path = value.path;
      this._port = value.port;
    }
  }

  // path - computed: false, optional: false, required: true
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // port - computed: false, optional: false, required: true
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }
}
export interface ComputeInstanceGroupHealthCheckTcpOptions {
  /**
  * The port used for TCP health checks.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/compute_instance_group#port ComputeInstanceGroup#port}
  */
  readonly port: number;
}

export function computeInstanceGroupHealthCheckTcpOptionsToTerraform(struct?: ComputeInstanceGroupHealthCheckTcpOptionsOutputReference | ComputeInstanceGroupHealthCheckTcpOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    port: cdktf.numberToTerraform(struct!.port),
  }
}


export function computeInstanceGroupHealthCheckTcpOptionsToHclTerraform(struct?: ComputeInstanceGroupHealthCheckTcpOptionsOutputReference | ComputeInstanceGroupHealthCheckTcpOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComputeInstanceGroupHealthCheckTcpOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ComputeInstanceGroupHealthCheckTcpOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeInstanceGroupHealthCheckTcpOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._port = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._port = value.port;
    }
  }

  // port - computed: false, optional: false, required: true
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }
}
export interface ComputeInstanceGroupHealthCheck {
  /**
  * The number of successful health checks before the managed instance is declared healthy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/compute_instance_group#healthy_threshold ComputeInstanceGroup#healthy_threshold}
  */
  readonly healthyThreshold?: number;
  /**
  * The interval to wait between health checks in seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/compute_instance_group#interval ComputeInstanceGroup#interval}
  */
  readonly interval?: number;
  /**
  * The length of time to wait for a response before the health check times out in seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/compute_instance_group#timeout ComputeInstanceGroup#timeout}
  */
  readonly timeout?: number;
  /**
  * The number of failed health checks before the managed instance is declared unhealthy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/compute_instance_group#unhealthy_threshold ComputeInstanceGroup#unhealthy_threshold}
  */
  readonly unhealthyThreshold?: number;
  /**
  * http_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/compute_instance_group#http_options ComputeInstanceGroup#http_options}
  */
  readonly httpOptions?: ComputeInstanceGroupHealthCheckHttpOptions;
  /**
  * tcp_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/compute_instance_group#tcp_options ComputeInstanceGroup#tcp_options}
  */
  readonly tcpOptions?: ComputeInstanceGroupHealthCheckTcpOptions;
}

export function computeInstanceGroupHealthCheckToTerraform(struct?: ComputeInstanceGroupHealthCheck | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    healthy_threshold: cdktf.numberToTerraform(struct!.healthyThreshold),
    interval: cdktf.numberToTerraform(struct!.interval),
    timeout: cdktf.numberToTerraform(struct!.timeout),
    unhealthy_threshold: cdktf.numberToTerraform(struct!.unhealthyThreshold),
    http_options: computeInstanceGroupHealthCheckHttpOptionsToTerraform(struct!.httpOptions),
    tcp_options: computeInstanceGroupHealthCheckTcpOptionsToTerraform(struct!.tcpOptions),
  }
}


export function computeInstanceGroupHealthCheckToHclTerraform(struct?: ComputeInstanceGroupHealthCheck | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    healthy_threshold: {
      value: cdktf.numberToHclTerraform(struct!.healthyThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    interval: {
      value: cdktf.numberToHclTerraform(struct!.interval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    timeout: {
      value: cdktf.numberToHclTerraform(struct!.timeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    unhealthy_threshold: {
      value: cdktf.numberToHclTerraform(struct!.unhealthyThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    http_options: {
      value: computeInstanceGroupHealthCheckHttpOptionsToHclTerraform(struct!.httpOptions),
      isBlock: true,
      type: "list",
      storageClassType: "ComputeInstanceGroupHealthCheckHttpOptionsList",
    },
    tcp_options: {
      value: computeInstanceGroupHealthCheckTcpOptionsToHclTerraform(struct!.tcpOptions),
      isBlock: true,
      type: "list",
      storageClassType: "ComputeInstanceGroupHealthCheckTcpOptionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComputeInstanceGroupHealthCheckOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ComputeInstanceGroupHealthCheck | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._healthyThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.healthyThreshold = this._healthyThreshold;
    }
    if (this._interval !== undefined) {
      hasAnyValues = true;
      internalValueResult.interval = this._interval;
    }
    if (this._timeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeout = this._timeout;
    }
    if (this._unhealthyThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.unhealthyThreshold = this._unhealthyThreshold;
    }
    if (this._httpOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpOptions = this._httpOptions?.internalValue;
    }
    if (this._tcpOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpOptions = this._tcpOptions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeInstanceGroupHealthCheck | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._healthyThreshold = undefined;
      this._interval = undefined;
      this._timeout = undefined;
      this._unhealthyThreshold = undefined;
      this._httpOptions.internalValue = undefined;
      this._tcpOptions.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._healthyThreshold = value.healthyThreshold;
      this._interval = value.interval;
      this._timeout = value.timeout;
      this._unhealthyThreshold = value.unhealthyThreshold;
      this._httpOptions.internalValue = value.httpOptions;
      this._tcpOptions.internalValue = value.tcpOptions;
    }
  }

  // healthy_threshold - computed: false, optional: true, required: false
  private _healthyThreshold?: number; 
  public get healthyThreshold() {
    return this.getNumberAttribute('healthy_threshold');
  }
  public set healthyThreshold(value: number) {
    this._healthyThreshold = value;
  }
  public resetHealthyThreshold() {
    this._healthyThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthyThresholdInput() {
    return this._healthyThreshold;
  }

  // interval - computed: false, optional: true, required: false
  private _interval?: number; 
  public get interval() {
    return this.getNumberAttribute('interval');
  }
  public set interval(value: number) {
    this._interval = value;
  }
  public resetInterval() {
    this._interval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalInput() {
    return this._interval;
  }

  // timeout - computed: false, optional: true, required: false
  private _timeout?: number; 
  public get timeout() {
    return this.getNumberAttribute('timeout');
  }
  public set timeout(value: number) {
    this._timeout = value;
  }
  public resetTimeout() {
    this._timeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout;
  }

  // unhealthy_threshold - computed: false, optional: true, required: false
  private _unhealthyThreshold?: number; 
  public get unhealthyThreshold() {
    return this.getNumberAttribute('unhealthy_threshold');
  }
  public set unhealthyThreshold(value: number) {
    this._unhealthyThreshold = value;
  }
  public resetUnhealthyThreshold() {
    this._unhealthyThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unhealthyThresholdInput() {
    return this._unhealthyThreshold;
  }

  // http_options - computed: false, optional: true, required: false
  private _httpOptions = new ComputeInstanceGroupHealthCheckHttpOptionsOutputReference(this, "http_options");
  public get httpOptions() {
    return this._httpOptions;
  }
  public putHttpOptions(value: ComputeInstanceGroupHealthCheckHttpOptions) {
    this._httpOptions.internalValue = value;
  }
  public resetHttpOptions() {
    this._httpOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpOptionsInput() {
    return this._httpOptions.internalValue;
  }

  // tcp_options - computed: false, optional: true, required: false
  private _tcpOptions = new ComputeInstanceGroupHealthCheckTcpOptionsOutputReference(this, "tcp_options");
  public get tcpOptions() {
    return this._tcpOptions;
  }
  public putTcpOptions(value: ComputeInstanceGroupHealthCheckTcpOptions) {
    this._tcpOptions.internalValue = value;
  }
  public resetTcpOptions() {
    this._tcpOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpOptionsInput() {
    return this._tcpOptions.internalValue;
  }
}

export class ComputeInstanceGroupHealthCheckList extends cdktf.ComplexList {
  public internalValue? : ComputeInstanceGroupHealthCheck[] | cdktf.IResolvable

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
  public get(index: number): ComputeInstanceGroupHealthCheckOutputReference {
    return new ComputeInstanceGroupHealthCheckOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ComputeInstanceGroupInstanceTemplateBootDiskInitializeParams {
  /**
  * A description of the boot disk.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/compute_instance_group#description ComputeInstanceGroup#description}
  */
  readonly description?: string;
  /**
  * The disk image to initialize this disk from.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/compute_instance_group#image_id ComputeInstanceGroup#image_id}
  */
  readonly imageId?: string;
  /**
  * The size of the disk in GB.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/compute_instance_group#size ComputeInstanceGroup#size}
  */
  readonly size?: number;
  /**
  * The snapshot to initialize this disk from.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/compute_instance_group#snapshot_id ComputeInstanceGroup#snapshot_id}
  */
  readonly snapshotId?: string;
  /**
  * The disk type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/compute_instance_group#type ComputeInstanceGroup#type}
  */
  readonly type?: string;
}

export function computeInstanceGroupInstanceTemplateBootDiskInitializeParamsToTerraform(struct?: ComputeInstanceGroupInstanceTemplateBootDiskInitializeParamsOutputReference | ComputeInstanceGroupInstanceTemplateBootDiskInitializeParams): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    image_id: cdktf.stringToTerraform(struct!.imageId),
    size: cdktf.numberToTerraform(struct!.size),
    snapshot_id: cdktf.stringToTerraform(struct!.snapshotId),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function computeInstanceGroupInstanceTemplateBootDiskInitializeParamsToHclTerraform(struct?: ComputeInstanceGroupInstanceTemplateBootDiskInitializeParamsOutputReference | ComputeInstanceGroupInstanceTemplateBootDiskInitializeParams): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    image_id: {
      value: cdktf.stringToHclTerraform(struct!.imageId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    size: {
      value: cdktf.numberToHclTerraform(struct!.size),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    snapshot_id: {
      value: cdktf.stringToHclTerraform(struct!.snapshotId),
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

export class ComputeInstanceGroupInstanceTemplateBootDiskInitializeParamsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ComputeInstanceGroupInstanceTemplateBootDiskInitializeParams | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._imageId !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageId = this._imageId;
    }
    if (this._size !== undefined) {
      hasAnyValues = true;
      internalValueResult.size = this._size;
    }
    if (this._snapshotId !== undefined) {
      hasAnyValues = true;
      internalValueResult.snapshotId = this._snapshotId;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeInstanceGroupInstanceTemplateBootDiskInitializeParams | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._description = undefined;
      this._imageId = undefined;
      this._size = undefined;
      this._snapshotId = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._description = value.description;
      this._imageId = value.imageId;
      this._size = value.size;
      this._snapshotId = value.snapshotId;
      this._type = value.type;
    }
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

  // image_id - computed: true, optional: true, required: false
  private _imageId?: string; 
  public get imageId() {
    return this.getStringAttribute('image_id');
  }
  public set imageId(value: string) {
    this._imageId = value;
  }
  public resetImageId() {
    this._imageId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageIdInput() {
    return this._imageId;
  }

  // size - computed: true, optional: true, required: false
  private _size?: number; 
  public get size() {
    return this.getNumberAttribute('size');
  }
  public set size(value: number) {
    this._size = value;
  }
  public resetSize() {
    this._size = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeInput() {
    return this._size;
  }

  // snapshot_id - computed: true, optional: true, required: false
  private _snapshotId?: string; 
  public get snapshotId() {
    return this.getStringAttribute('snapshot_id');
  }
  public set snapshotId(value: string) {
    this._snapshotId = value;
  }
  public resetSnapshotId() {
    this._snapshotId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snapshotIdInput() {
    return this._snapshotId;
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
export interface ComputeInstanceGroupInstanceTemplateBootDisk {
  /**
  * This value can be used to reference the device under `/dev/disk/by-id/`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/compute_instance_group#device_name ComputeInstanceGroup#device_name}
  */
  readonly deviceName?: string;
  /**
  * The ID of the existing disk (such as those managed by yandex_compute_disk) to attach as a boot disk.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/compute_instance_group#disk_id ComputeInstanceGroup#disk_id}
  */
  readonly diskId?: string;
  /**
  * The access mode to the disk resource. By default a disk is attached in `READ_WRITE` mode.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/compute_instance_group#mode ComputeInstanceGroup#mode}
  */
  readonly mode?: string;
  /**
  * When set can be later used to change DiskSpec of actual disk.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/compute_instance_group#name ComputeInstanceGroup#name}
  */
  readonly name?: string;
  /**
  * initialize_params block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/compute_instance_group#initialize_params ComputeInstanceGroup#initialize_params}
  */
  readonly initializeParams?: ComputeInstanceGroupInstanceTemplateBootDiskInitializeParams;
}

export function computeInstanceGroupInstanceTemplateBootDiskToTerraform(struct?: ComputeInstanceGroupInstanceTemplateBootDiskOutputReference | ComputeInstanceGroupInstanceTemplateBootDisk): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    device_name: cdktf.stringToTerraform(struct!.deviceName),
    disk_id: cdktf.stringToTerraform(struct!.diskId),
    mode: cdktf.stringToTerraform(struct!.mode),
    name: cdktf.stringToTerraform(struct!.name),
    initialize_params: computeInstanceGroupInstanceTemplateBootDiskInitializeParamsToTerraform(struct!.initializeParams),
  }
}


export function computeInstanceGroupInstanceTemplateBootDiskToHclTerraform(struct?: ComputeInstanceGroupInstanceTemplateBootDiskOutputReference | ComputeInstanceGroupInstanceTemplateBootDisk): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    device_name: {
      value: cdktf.stringToHclTerraform(struct!.deviceName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    disk_id: {
      value: cdktf.stringToHclTerraform(struct!.diskId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mode: {
      value: cdktf.stringToHclTerraform(struct!.mode),
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
    initialize_params: {
      value: computeInstanceGroupInstanceTemplateBootDiskInitializeParamsToHclTerraform(struct!.initializeParams),
      isBlock: true,
      type: "list",
      storageClassType: "ComputeInstanceGroupInstanceTemplateBootDiskInitializeParamsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComputeInstanceGroupInstanceTemplateBootDiskOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ComputeInstanceGroupInstanceTemplateBootDisk | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._deviceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.deviceName = this._deviceName;
    }
    if (this._diskId !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskId = this._diskId;
    }
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._initializeParams?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.initializeParams = this._initializeParams?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeInstanceGroupInstanceTemplateBootDisk | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._deviceName = undefined;
      this._diskId = undefined;
      this._mode = undefined;
      this._name = undefined;
      this._initializeParams.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._deviceName = value.deviceName;
      this._diskId = value.diskId;
      this._mode = value.mode;
      this._name = value.name;
      this._initializeParams.internalValue = value.initializeParams;
    }
  }

  // device_name - computed: true, optional: true, required: false
  private _deviceName?: string; 
  public get deviceName() {
    return this.getStringAttribute('device_name');
  }
  public set deviceName(value: string) {
    this._deviceName = value;
  }
  public resetDeviceName() {
    this._deviceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceNameInput() {
    return this._deviceName;
  }

  // disk_id - computed: false, optional: true, required: false
  private _diskId?: string; 
  public get diskId() {
    return this.getStringAttribute('disk_id');
  }
  public set diskId(value: string) {
    this._diskId = value;
  }
  public resetDiskId() {
    this._diskId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskIdInput() {
    return this._diskId;
  }

  // mode - computed: false, optional: true, required: false
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
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

  // initialize_params - computed: false, optional: true, required: false
  private _initializeParams = new ComputeInstanceGroupInstanceTemplateBootDiskInitializeParamsOutputReference(this, "initialize_params");
  public get initializeParams() {
    return this._initializeParams;
  }
  public putInitializeParams(value: ComputeInstanceGroupInstanceTemplateBootDiskInitializeParams) {
    this._initializeParams.internalValue = value;
  }
  public resetInitializeParams() {
    this._initializeParams.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initializeParamsInput() {
    return this._initializeParams.internalValue;
  }
}
export interface ComputeInstanceGroupInstanceTemplateFilesystem {
  /**
  * Name of the device representing the filesystem on the instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/compute_instance_group#device_name ComputeInstanceGroup#device_name}
  */
  readonly deviceName?: string;
  /**
  * ID of the filesystem that should be attached.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/compute_instance_group#filesystem_id ComputeInstanceGroup#filesystem_id}
  */
  readonly filesystemId: string;
  /**
  * Mode of access to the filesystem that should be attached. By default, filesystem is attached in `READ_WRITE` mode.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/compute_instance_group#mode ComputeInstanceGroup#mode}
  */
  readonly mode?: string;
}

export function computeInstanceGroupInstanceTemplateFilesystemToTerraform(struct?: ComputeInstanceGroupInstanceTemplateFilesystem | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    device_name: cdktf.stringToTerraform(struct!.deviceName),
    filesystem_id: cdktf.stringToTerraform(struct!.filesystemId),
    mode: cdktf.stringToTerraform(struct!.mode),
  }
}


export function computeInstanceGroupInstanceTemplateFilesystemToHclTerraform(struct?: ComputeInstanceGroupInstanceTemplateFilesystem | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    device_name: {
      value: cdktf.stringToHclTerraform(struct!.deviceName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    filesystem_id: {
      value: cdktf.stringToHclTerraform(struct!.filesystemId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mode: {
      value: cdktf.stringToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComputeInstanceGroupInstanceTemplateFilesystemOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ComputeInstanceGroupInstanceTemplateFilesystem | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._deviceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.deviceName = this._deviceName;
    }
    if (this._filesystemId !== undefined) {
      hasAnyValues = true;
      internalValueResult.filesystemId = this._filesystemId;
    }
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeInstanceGroupInstanceTemplateFilesystem | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._deviceName = undefined;
      this._filesystemId = undefined;
      this._mode = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._deviceName = value.deviceName;
      this._filesystemId = value.filesystemId;
      this._mode = value.mode;
    }
  }

  // device_name - computed: false, optional: true, required: false
  private _deviceName?: string; 
  public get deviceName() {
    return this.getStringAttribute('device_name');
  }
  public set deviceName(value: string) {
    this._deviceName = value;
  }
  public resetDeviceName() {
    this._deviceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceNameInput() {
    return this._deviceName;
  }

  // filesystem_id - computed: false, optional: false, required: true
  private _filesystemId?: string; 
  public get filesystemId() {
    return this.getStringAttribute('filesystem_id');
  }
  public set filesystemId(value: string) {
    this._filesystemId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get filesystemIdInput() {
    return this._filesystemId;
  }

  // mode - computed: false, optional: true, required: false
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }
}

export class ComputeInstanceGroupInstanceTemplateFilesystemList extends cdktf.ComplexList {
  public internalValue? : ComputeInstanceGroupInstanceTemplateFilesystem[] | cdktf.IResolvable

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
  public get(index: number): ComputeInstanceGroupInstanceTemplateFilesystemOutputReference {
    return new ComputeInstanceGroupInstanceTemplateFilesystemOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ComputeInstanceGroupInstanceTemplateMetadataOptions {
  /**
  * Enables access to AWS flavored metadata (IMDSv1). Possible values: `0`, `1` for `enabled` and `2` for `disabled`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/compute_instance_group#aws_v1_http_endpoint ComputeInstanceGroup#aws_v1_http_endpoint}
  */
  readonly awsV1HttpEndpoint?: number;
  /**
  * Enables access to IAM credentials with AWS flavored metadata (IMDSv1). Possible values: `0`, `1` for `enabled` and `2` for `disabled`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/compute_instance_group#aws_v1_http_token ComputeInstanceGroup#aws_v1_http_token}
  */
  readonly awsV1HttpToken?: number;
  /**
  * Enables access to GCE flavored metadata. Possible values: `0`, `1` for `enabled` and `2` for `disabled`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/compute_instance_group#gce_http_endpoint ComputeInstanceGroup#gce_http_endpoint}
  */
  readonly gceHttpEndpoint?: number;
  /**
  * Enables access to IAM credentials with GCE flavored metadata. Possible values: `0`, `1` for `enabled` and `2` for `disabled`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/compute_instance_group#gce_http_token ComputeInstanceGroup#gce_http_token}
  */
  readonly gceHttpToken?: number;
}

export function computeInstanceGroupInstanceTemplateMetadataOptionsToTerraform(struct?: ComputeInstanceGroupInstanceTemplateMetadataOptionsOutputReference | ComputeInstanceGroupInstanceTemplateMetadataOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aws_v1_http_endpoint: cdktf.numberToTerraform(struct!.awsV1HttpEndpoint),
    aws_v1_http_token: cdktf.numberToTerraform(struct!.awsV1HttpToken),
    gce_http_endpoint: cdktf.numberToTerraform(struct!.gceHttpEndpoint),
    gce_http_token: cdktf.numberToTerraform(struct!.gceHttpToken),
  }
}


export function computeInstanceGroupInstanceTemplateMetadataOptionsToHclTerraform(struct?: ComputeInstanceGroupInstanceTemplateMetadataOptionsOutputReference | ComputeInstanceGroupInstanceTemplateMetadataOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    aws_v1_http_endpoint: {
      value: cdktf.numberToHclTerraform(struct!.awsV1HttpEndpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    aws_v1_http_token: {
      value: cdktf.numberToHclTerraform(struct!.awsV1HttpToken),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    gce_http_endpoint: {
      value: cdktf.numberToHclTerraform(struct!.gceHttpEndpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    gce_http_token: {
      value: cdktf.numberToHclTerraform(struct!.gceHttpToken),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComputeInstanceGroupInstanceTemplateMetadataOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ComputeInstanceGroupInstanceTemplateMetadataOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._awsV1HttpEndpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsV1HttpEndpoint = this._awsV1HttpEndpoint;
    }
    if (this._awsV1HttpToken !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsV1HttpToken = this._awsV1HttpToken;
    }
    if (this._gceHttpEndpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.gceHttpEndpoint = this._gceHttpEndpoint;
    }
    if (this._gceHttpToken !== undefined) {
      hasAnyValues = true;
      internalValueResult.gceHttpToken = this._gceHttpToken;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeInstanceGroupInstanceTemplateMetadataOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._awsV1HttpEndpoint = undefined;
      this._awsV1HttpToken = undefined;
      this._gceHttpEndpoint = undefined;
      this._gceHttpToken = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._awsV1HttpEndpoint = value.awsV1HttpEndpoint;
      this._awsV1HttpToken = value.awsV1HttpToken;
      this._gceHttpEndpoint = value.gceHttpEndpoint;
      this._gceHttpToken = value.gceHttpToken;
    }
  }

  // aws_v1_http_endpoint - computed: true, optional: true, required: false
  private _awsV1HttpEndpoint?: number; 
  public get awsV1HttpEndpoint() {
    return this.getNumberAttribute('aws_v1_http_endpoint');
  }
  public set awsV1HttpEndpoint(value: number) {
    this._awsV1HttpEndpoint = value;
  }
  public resetAwsV1HttpEndpoint() {
    this._awsV1HttpEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsV1HttpEndpointInput() {
    return this._awsV1HttpEndpoint;
  }

  // aws_v1_http_token - computed: true, optional: true, required: false
  private _awsV1HttpToken?: number; 
  public get awsV1HttpToken() {
    return this.getNumberAttribute('aws_v1_http_token');
  }
  public set awsV1HttpToken(value: number) {
    this._awsV1HttpToken = value;
  }
  public resetAwsV1HttpToken() {
    this._awsV1HttpToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsV1HttpTokenInput() {
    return this._awsV1HttpToken;
  }

  // gce_http_endpoint - computed: true, optional: true, required: false
  private _gceHttpEndpoint?: number; 
  public get gceHttpEndpoint() {
    return this.getNumberAttribute('gce_http_endpoint');
  }
  public set gceHttpEndpoint(value: number) {
    this._gceHttpEndpoint = value;
  }
  public resetGceHttpEndpoint() {
    this._gceHttpEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gceHttpEndpointInput() {
    return this._gceHttpEndpoint;
  }

  // gce_http_token - computed: true, optional: true, required: false
  private _gceHttpToken?: number; 
  public get gceHttpToken() {
    return this.getNumberAttribute('gce_http_token');
  }
  public set gceHttpToken(value: number) {
    this._gceHttpToken = value;
  }
  public resetGceHttpToken() {
    this._gceHttpToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gceHttpTokenInput() {
    return this._gceHttpToken;
  }
}
export interface ComputeInstanceGroupInstanceTemplateNetworkInterfaceDnsRecord {
  /**
  * DNS zone id (if not set, private zone used).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/compute_instance_group#dns_zone_id ComputeInstanceGroup#dns_zone_id}
  */
  readonly dnsZoneId?: string;
  /**
  * DNS record FQDN (must have dot at the end).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/compute_instance_group#fqdn ComputeInstanceGroup#fqdn}
  */
  readonly fqdn: string;
  /**
  * When set to `true`, also create PTR DNS record.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/compute_instance_group#ptr ComputeInstanceGroup#ptr}
  */
  readonly ptr?: boolean | cdktf.IResolvable;
  /**
  * DNS record TTL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/compute_instance_group#ttl ComputeInstanceGroup#ttl}
  */
  readonly ttl?: number;
}

export function computeInstanceGroupInstanceTemplateNetworkInterfaceDnsRecordToTerraform(struct?: ComputeInstanceGroupInstanceTemplateNetworkInterfaceDnsRecord | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dns_zone_id: cdktf.stringToTerraform(struct!.dnsZoneId),
    fqdn: cdktf.stringToTerraform(struct!.fqdn),
    ptr: cdktf.booleanToTerraform(struct!.ptr),
    ttl: cdktf.numberToTerraform(struct!.ttl),
  }
}


export function computeInstanceGroupInstanceTemplateNetworkInterfaceDnsRecordToHclTerraform(struct?: ComputeInstanceGroupInstanceTemplateNetworkInterfaceDnsRecord | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dns_zone_id: {
      value: cdktf.stringToHclTerraform(struct!.dnsZoneId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fqdn: {
      value: cdktf.stringToHclTerraform(struct!.fqdn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ptr: {
      value: cdktf.booleanToHclTerraform(struct!.ptr),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ttl: {
      value: cdktf.numberToHclTerraform(struct!.ttl),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComputeInstanceGroupInstanceTemplateNetworkInterfaceDnsRecordOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ComputeInstanceGroupInstanceTemplateNetworkInterfaceDnsRecord | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dnsZoneId !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsZoneId = this._dnsZoneId;
    }
    if (this._fqdn !== undefined) {
      hasAnyValues = true;
      internalValueResult.fqdn = this._fqdn;
    }
    if (this._ptr !== undefined) {
      hasAnyValues = true;
      internalValueResult.ptr = this._ptr;
    }
    if (this._ttl !== undefined) {
      hasAnyValues = true;
      internalValueResult.ttl = this._ttl;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeInstanceGroupInstanceTemplateNetworkInterfaceDnsRecord | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dnsZoneId = undefined;
      this._fqdn = undefined;
      this._ptr = undefined;
      this._ttl = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dnsZoneId = value.dnsZoneId;
      this._fqdn = value.fqdn;
      this._ptr = value.ptr;
      this._ttl = value.ttl;
    }
  }

  // dns_zone_id - computed: false, optional: true, required: false
  private _dnsZoneId?: string; 
  public get dnsZoneId() {
    return this.getStringAttribute('dns_zone_id');
  }
  public set dnsZoneId(value: string) {
    this._dnsZoneId = value;
  }
  public resetDnsZoneId() {
    this._dnsZoneId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsZoneIdInput() {
    return this._dnsZoneId;
  }

  // fqdn - computed: false, optional: false, required: true
  private _fqdn?: string; 
  public get fqdn() {
    return this.getStringAttribute('fqdn');
  }
  public set fqdn(value: string) {
    this._fqdn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fqdnInput() {
    return this._fqdn;
  }

  // ptr - computed: true, optional: true, required: false
  private _ptr?: boolean | cdktf.IResolvable; 
  public get ptr() {
    return this.getBooleanAttribute('ptr');
  }
  public set ptr(value: boolean | cdktf.IResolvable) {
    this._ptr = value;
  }
  public resetPtr() {
    this._ptr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ptrInput() {
    return this._ptr;
  }

  // ttl - computed: false, optional: true, required: false
  private _ttl?: number; 
  public get ttl() {
    return this.getNumberAttribute('ttl');
  }
  public set ttl(value: number) {
    this._ttl = value;
  }
  public resetTtl() {
    this._ttl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ttlInput() {
    return this._ttl;
  }
}

export class ComputeInstanceGroupInstanceTemplateNetworkInterfaceDnsRecordList extends cdktf.ComplexList {
  public internalValue? : ComputeInstanceGroupInstanceTemplateNetworkInterfaceDnsRecord[] | cdktf.IResolvable

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
  public get(index: number): ComputeInstanceGroupInstanceTemplateNetworkInterfaceDnsRecordOutputReference {
    return new ComputeInstanceGroupInstanceTemplateNetworkInterfaceDnsRecordOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ComputeInstanceGroupInstanceTemplateNetworkInterfaceIpv6DnsRecord {
  /**
  * DNS zone id (if not set, private zone used).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/compute_instance_group#dns_zone_id ComputeInstanceGroup#dns_zone_id}
  */
  readonly dnsZoneId?: string;
  /**
  * DNS record FQDN (must have dot at the end).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/compute_instance_group#fqdn ComputeInstanceGroup#fqdn}
  */
  readonly fqdn: string;
  /**
  * When set to `true`, also create PTR DNS record.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/compute_instance_group#ptr ComputeInstanceGroup#ptr}
  */
  readonly ptr?: boolean | cdktf.IResolvable;
  /**
  * DNS record TTL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/compute_instance_group#ttl ComputeInstanceGroup#ttl}
  */
  readonly ttl?: number;
}

export function computeInstanceGroupInstanceTemplateNetworkInterfaceIpv6DnsRecordToTerraform(struct?: ComputeInstanceGroupInstanceTemplateNetworkInterfaceIpv6DnsRecord | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dns_zone_id: cdktf.stringToTerraform(struct!.dnsZoneId),
    fqdn: cdktf.stringToTerraform(struct!.fqdn),
    ptr: cdktf.booleanToTerraform(struct!.ptr),
    ttl: cdktf.numberToTerraform(struct!.ttl),
  }
}


export function computeInstanceGroupInstanceTemplateNetworkInterfaceIpv6DnsRecordToHclTerraform(struct?: ComputeInstanceGroupInstanceTemplateNetworkInterfaceIpv6DnsRecord | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dns_zone_id: {
      value: cdktf.stringToHclTerraform(struct!.dnsZoneId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fqdn: {
      value: cdktf.stringToHclTerraform(struct!.fqdn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ptr: {
      value: cdktf.booleanToHclTerraform(struct!.ptr),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ttl: {
      value: cdktf.numberToHclTerraform(struct!.ttl),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComputeInstanceGroupInstanceTemplateNetworkInterfaceIpv6DnsRecordOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ComputeInstanceGroupInstanceTemplateNetworkInterfaceIpv6DnsRecord | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dnsZoneId !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsZoneId = this._dnsZoneId;
    }
    if (this._fqdn !== undefined) {
      hasAnyValues = true;
      internalValueResult.fqdn = this._fqdn;
    }
    if (this._ptr !== undefined) {
      hasAnyValues = true;
      internalValueResult.ptr = this._ptr;
    }
    if (this._ttl !== undefined) {
      hasAnyValues = true;
      internalValueResult.ttl = this._ttl;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeInstanceGroupInstanceTemplateNetworkInterfaceIpv6DnsRecord | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dnsZoneId = undefined;
      this._fqdn = undefined;
      this._ptr = undefined;
      this._ttl = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dnsZoneId = value.dnsZoneId;
      this._fqdn = value.fqdn;
      this._ptr = value.ptr;
      this._ttl = value.ttl;
    }
  }

  // dns_zone_id - computed: false, optional: true, required: false
  private _dnsZoneId?: string; 
  public get dnsZoneId() {
    return this.getStringAttribute('dns_zone_id');
  }
  public set dnsZoneId(value: string) {
    this._dnsZoneId = value;
  }
  public resetDnsZoneId() {
    this._dnsZoneId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsZoneIdInput() {
    return this._dnsZoneId;
  }

  // fqdn - computed: false, optional: false, required: true
  private _fqdn?: string; 
  public get fqdn() {
    return this.getStringAttribute('fqdn');
  }
  public set fqdn(value: string) {
    this._fqdn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fqdnInput() {
    return this._fqdn;
  }

  // ptr - computed: true, optional: true, required: false
  private _ptr?: boolean | cdktf.IResolvable; 
  public get ptr() {
    return this.getBooleanAttribute('ptr');
  }
  public set ptr(value: boolean | cdktf.IResolvable) {
    this._ptr = value;
  }
  public resetPtr() {
    this._ptr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ptrInput() {
    return this._ptr;
  }

  // ttl - computed: false, optional: true, required: false
  private _ttl?: number; 
  public get ttl() {
    return this.getNumberAttribute('ttl');
  }
  public set ttl(value: number) {
    this._ttl = value;
  }
  public resetTtl() {
    this._ttl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ttlInput() {
    return this._ttl;
  }
}

export class ComputeInstanceGroupInstanceTemplateNetworkInterfaceIpv6DnsRecordList extends cdktf.ComplexList {
  public internalValue? : ComputeInstanceGroupInstanceTemplateNetworkInterfaceIpv6DnsRecord[] | cdktf.IResolvable

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
  public get(index: number): ComputeInstanceGroupInstanceTemplateNetworkInterfaceIpv6DnsRecordOutputReference {
    return new ComputeInstanceGroupInstanceTemplateNetworkInterfaceIpv6DnsRecordOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ComputeInstanceGroupInstanceTemplateNetworkInterfaceNatDnsRecord {
  /**
  * DNS zone id (if not set, private zone used).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/compute_instance_group#dns_zone_id ComputeInstanceGroup#dns_zone_id}
  */
  readonly dnsZoneId?: string;
  /**
  * DNS record FQDN (must have dot at the end).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/compute_instance_group#fqdn ComputeInstanceGroup#fqdn}
  */
  readonly fqdn: string;
  /**
  * When set to `true`, also create PTR DNS record.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/compute_instance_group#ptr ComputeInstanceGroup#ptr}
  */
  readonly ptr?: boolean | cdktf.IResolvable;
  /**
  * DNS record TTL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/compute_instance_group#ttl ComputeInstanceGroup#ttl}
  */
  readonly ttl?: number;
}

export function computeInstanceGroupInstanceTemplateNetworkInterfaceNatDnsRecordToTerraform(struct?: ComputeInstanceGroupInstanceTemplateNetworkInterfaceNatDnsRecord | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dns_zone_id: cdktf.stringToTerraform(struct!.dnsZoneId),
    fqdn: cdktf.stringToTerraform(struct!.fqdn),
    ptr: cdktf.booleanToTerraform(struct!.ptr),
    ttl: cdktf.numberToTerraform(struct!.ttl),
  }
}


export function computeInstanceGroupInstanceTemplateNetworkInterfaceNatDnsRecordToHclTerraform(struct?: ComputeInstanceGroupInstanceTemplateNetworkInterfaceNatDnsRecord | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dns_zone_id: {
      value: cdktf.stringToHclTerraform(struct!.dnsZoneId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fqdn: {
      value: cdktf.stringToHclTerraform(struct!.fqdn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ptr: {
      value: cdktf.booleanToHclTerraform(struct!.ptr),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ttl: {
      value: cdktf.numberToHclTerraform(struct!.ttl),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComputeInstanceGroupInstanceTemplateNetworkInterfaceNatDnsRecordOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ComputeInstanceGroupInstanceTemplateNetworkInterfaceNatDnsRecord | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dnsZoneId !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsZoneId = this._dnsZoneId;
    }
    if (this._fqdn !== undefined) {
      hasAnyValues = true;
      internalValueResult.fqdn = this._fqdn;
    }
    if (this._ptr !== undefined) {
      hasAnyValues = true;
      internalValueResult.ptr = this._ptr;
    }
    if (this._ttl !== undefined) {
      hasAnyValues = true;
      internalValueResult.ttl = this._ttl;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeInstanceGroupInstanceTemplateNetworkInterfaceNatDnsRecord | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dnsZoneId = undefined;
      this._fqdn = undefined;
      this._ptr = undefined;
      this._ttl = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dnsZoneId = value.dnsZoneId;
      this._fqdn = value.fqdn;
      this._ptr = value.ptr;
      this._ttl = value.ttl;
    }
  }

  // dns_zone_id - computed: false, optional: true, required: false
  private _dnsZoneId?: string; 
  public get dnsZoneId() {
    return this.getStringAttribute('dns_zone_id');
  }
  public set dnsZoneId(value: string) {
    this._dnsZoneId = value;
  }
  public resetDnsZoneId() {
    this._dnsZoneId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsZoneIdInput() {
    return this._dnsZoneId;
  }

  // fqdn - computed: false, optional: false, required: true
  private _fqdn?: string; 
  public get fqdn() {
    return this.getStringAttribute('fqdn');
  }
  public set fqdn(value: string) {
    this._fqdn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fqdnInput() {
    return this._fqdn;
  }

  // ptr - computed: true, optional: true, required: false
  private _ptr?: boolean | cdktf.IResolvable; 
  public get ptr() {
    return this.getBooleanAttribute('ptr');
  }
  public set ptr(value: boolean | cdktf.IResolvable) {
    this._ptr = value;
  }
  public resetPtr() {
    this._ptr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ptrInput() {
    return this._ptr;
  }

  // ttl - computed: false, optional: true, required: false
  private _ttl?: number; 
  public get ttl() {
    return this.getNumberAttribute('ttl');
  }
  public set ttl(value: number) {
    this._ttl = value;
  }
  public resetTtl() {
    this._ttl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ttlInput() {
    return this._ttl;
  }
}

export class ComputeInstanceGroupInstanceTemplateNetworkInterfaceNatDnsRecordList extends cdktf.ComplexList {
  public internalValue? : ComputeInstanceGroupInstanceTemplateNetworkInterfaceNatDnsRecord[] | cdktf.IResolvable

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
  public get(index: number): ComputeInstanceGroupInstanceTemplateNetworkInterfaceNatDnsRecordOutputReference {
    return new ComputeInstanceGroupInstanceTemplateNetworkInterfaceNatDnsRecordOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ComputeInstanceGroupInstanceTemplateNetworkInterface {
  /**
  * Manual set static IP address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/compute_instance_group#ip_address ComputeInstanceGroup#ip_address}
  */
  readonly ipAddress?: string;
  /**
  * Allocate an IPv4 address for the interface. The default value is `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/compute_instance_group#ipv4 ComputeInstanceGroup#ipv4}
  */
  readonly ipv4?: boolean | cdktf.IResolvable;
  /**
  * If `true`, allocate an IPv6 address for the interface. The address will be automatically assigned from the specified subnet.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/compute_instance_group#ipv6 ComputeInstanceGroup#ipv6}
  */
  readonly ipv6?: boolean | cdktf.IResolvable;
  /**
  * Manual set static IPv6 address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/compute_instance_group#ipv6_address ComputeInstanceGroup#ipv6_address}
  */
  readonly ipv6Address?: string;
  /**
  * Flag for using NAT.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/compute_instance_group#nat ComputeInstanceGroup#nat}
  */
  readonly nat?: boolean | cdktf.IResolvable;
  /**
  * A public address that can be used to access the internet over NAT. Use `variables` to set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/compute_instance_group#nat_ip_address ComputeInstanceGroup#nat_ip_address}
  */
  readonly natIpAddress?: string;
  /**
  * The ID of the network.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/compute_instance_group#network_id ComputeInstanceGroup#network_id}
  */
  readonly networkId?: string;
  /**
  * Security group (SG) `IDs` for network interface.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/compute_instance_group#security_group_ids ComputeInstanceGroup#security_group_ids}
  */
  readonly securityGroupIds?: string[];
  /**
  * The ID of the subnets to attach this interface to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/compute_instance_group#subnet_ids ComputeInstanceGroup#subnet_ids}
  */
  readonly subnetIds?: string[];
  /**
  * dns_record block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/compute_instance_group#dns_record ComputeInstanceGroup#dns_record}
  */
  readonly dnsRecord?: ComputeInstanceGroupInstanceTemplateNetworkInterfaceDnsRecord[] | cdktf.IResolvable;
  /**
  * ipv6_dns_record block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/compute_instance_group#ipv6_dns_record ComputeInstanceGroup#ipv6_dns_record}
  */
  readonly ipv6DnsRecord?: ComputeInstanceGroupInstanceTemplateNetworkInterfaceIpv6DnsRecord[] | cdktf.IResolvable;
  /**
  * nat_dns_record block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/compute_instance_group#nat_dns_record ComputeInstanceGroup#nat_dns_record}
  */
  readonly natDnsRecord?: ComputeInstanceGroupInstanceTemplateNetworkInterfaceNatDnsRecord[] | cdktf.IResolvable;
}

export function computeInstanceGroupInstanceTemplateNetworkInterfaceToTerraform(struct?: ComputeInstanceGroupInstanceTemplateNetworkInterface | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip_address: cdktf.stringToTerraform(struct!.ipAddress),
    ipv4: cdktf.booleanToTerraform(struct!.ipv4),
    ipv6: cdktf.booleanToTerraform(struct!.ipv6),
    ipv6_address: cdktf.stringToTerraform(struct!.ipv6Address),
    nat: cdktf.booleanToTerraform(struct!.nat),
    nat_ip_address: cdktf.stringToTerraform(struct!.natIpAddress),
    network_id: cdktf.stringToTerraform(struct!.networkId),
    security_group_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.securityGroupIds),
    subnet_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.subnetIds),
    dns_record: cdktf.listMapper(computeInstanceGroupInstanceTemplateNetworkInterfaceDnsRecordToTerraform, true)(struct!.dnsRecord),
    ipv6_dns_record: cdktf.listMapper(computeInstanceGroupInstanceTemplateNetworkInterfaceIpv6DnsRecordToTerraform, true)(struct!.ipv6DnsRecord),
    nat_dns_record: cdktf.listMapper(computeInstanceGroupInstanceTemplateNetworkInterfaceNatDnsRecordToTerraform, true)(struct!.natDnsRecord),
  }
}


export function computeInstanceGroupInstanceTemplateNetworkInterfaceToHclTerraform(struct?: ComputeInstanceGroupInstanceTemplateNetworkInterface | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ip_address: {
      value: cdktf.stringToHclTerraform(struct!.ipAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv4: {
      value: cdktf.booleanToHclTerraform(struct!.ipv4),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ipv6: {
      value: cdktf.booleanToHclTerraform(struct!.ipv6),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ipv6_address: {
      value: cdktf.stringToHclTerraform(struct!.ipv6Address),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    nat: {
      value: cdktf.booleanToHclTerraform(struct!.nat),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    nat_ip_address: {
      value: cdktf.stringToHclTerraform(struct!.natIpAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    network_id: {
      value: cdktf.stringToHclTerraform(struct!.networkId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    security_group_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.securityGroupIds),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    subnet_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.subnetIds),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    dns_record: {
      value: cdktf.listMapperHcl(computeInstanceGroupInstanceTemplateNetworkInterfaceDnsRecordToHclTerraform, true)(struct!.dnsRecord),
      isBlock: true,
      type: "list",
      storageClassType: "ComputeInstanceGroupInstanceTemplateNetworkInterfaceDnsRecordList",
    },
    ipv6_dns_record: {
      value: cdktf.listMapperHcl(computeInstanceGroupInstanceTemplateNetworkInterfaceIpv6DnsRecordToHclTerraform, true)(struct!.ipv6DnsRecord),
      isBlock: true,
      type: "list",
      storageClassType: "ComputeInstanceGroupInstanceTemplateNetworkInterfaceIpv6DnsRecordList",
    },
    nat_dns_record: {
      value: cdktf.listMapperHcl(computeInstanceGroupInstanceTemplateNetworkInterfaceNatDnsRecordToHclTerraform, true)(struct!.natDnsRecord),
      isBlock: true,
      type: "list",
      storageClassType: "ComputeInstanceGroupInstanceTemplateNetworkInterfaceNatDnsRecordList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComputeInstanceGroupInstanceTemplateNetworkInterfaceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ComputeInstanceGroupInstanceTemplateNetworkInterface | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddress = this._ipAddress;
    }
    if (this._ipv4 !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4 = this._ipv4;
    }
    if (this._ipv6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6 = this._ipv6;
    }
    if (this._ipv6Address !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6Address = this._ipv6Address;
    }
    if (this._nat !== undefined) {
      hasAnyValues = true;
      internalValueResult.nat = this._nat;
    }
    if (this._natIpAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.natIpAddress = this._natIpAddress;
    }
    if (this._networkId !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkId = this._networkId;
    }
    if (this._securityGroupIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityGroupIds = this._securityGroupIds;
    }
    if (this._subnetIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetIds = this._subnetIds;
    }
    if (this._dnsRecord?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsRecord = this._dnsRecord?.internalValue;
    }
    if (this._ipv6DnsRecord?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6DnsRecord = this._ipv6DnsRecord?.internalValue;
    }
    if (this._natDnsRecord?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.natDnsRecord = this._natDnsRecord?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeInstanceGroupInstanceTemplateNetworkInterface | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ipAddress = undefined;
      this._ipv4 = undefined;
      this._ipv6 = undefined;
      this._ipv6Address = undefined;
      this._nat = undefined;
      this._natIpAddress = undefined;
      this._networkId = undefined;
      this._securityGroupIds = undefined;
      this._subnetIds = undefined;
      this._dnsRecord.internalValue = undefined;
      this._ipv6DnsRecord.internalValue = undefined;
      this._natDnsRecord.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ipAddress = value.ipAddress;
      this._ipv4 = value.ipv4;
      this._ipv6 = value.ipv6;
      this._ipv6Address = value.ipv6Address;
      this._nat = value.nat;
      this._natIpAddress = value.natIpAddress;
      this._networkId = value.networkId;
      this._securityGroupIds = value.securityGroupIds;
      this._subnetIds = value.subnetIds;
      this._dnsRecord.internalValue = value.dnsRecord;
      this._ipv6DnsRecord.internalValue = value.ipv6DnsRecord;
      this._natDnsRecord.internalValue = value.natDnsRecord;
    }
  }

  // ip_address - computed: true, optional: true, required: false
  private _ipAddress?: string; 
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }
  public set ipAddress(value: string) {
    this._ipAddress = value;
  }
  public resetIpAddress() {
    this._ipAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressInput() {
    return this._ipAddress;
  }

  // ipv4 - computed: false, optional: true, required: false
  private _ipv4?: boolean | cdktf.IResolvable; 
  public get ipv4() {
    return this.getBooleanAttribute('ipv4');
  }
  public set ipv4(value: boolean | cdktf.IResolvable) {
    this._ipv4 = value;
  }
  public resetIpv4() {
    this._ipv4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4Input() {
    return this._ipv4;
  }

  // ipv6 - computed: true, optional: true, required: false
  private _ipv6?: boolean | cdktf.IResolvable; 
  public get ipv6() {
    return this.getBooleanAttribute('ipv6');
  }
  public set ipv6(value: boolean | cdktf.IResolvable) {
    this._ipv6 = value;
  }
  public resetIpv6() {
    this._ipv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6Input() {
    return this._ipv6;
  }

  // ipv6_address - computed: true, optional: true, required: false
  private _ipv6Address?: string; 
  public get ipv6Address() {
    return this.getStringAttribute('ipv6_address');
  }
  public set ipv6Address(value: string) {
    this._ipv6Address = value;
  }
  public resetIpv6Address() {
    this._ipv6Address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6AddressInput() {
    return this._ipv6Address;
  }

  // nat - computed: true, optional: true, required: false
  private _nat?: boolean | cdktf.IResolvable; 
  public get nat() {
    return this.getBooleanAttribute('nat');
  }
  public set nat(value: boolean | cdktf.IResolvable) {
    this._nat = value;
  }
  public resetNat() {
    this._nat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get natInput() {
    return this._nat;
  }

  // nat_ip_address - computed: false, optional: true, required: false
  private _natIpAddress?: string; 
  public get natIpAddress() {
    return this.getStringAttribute('nat_ip_address');
  }
  public set natIpAddress(value: string) {
    this._natIpAddress = value;
  }
  public resetNatIpAddress() {
    this._natIpAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get natIpAddressInput() {
    return this._natIpAddress;
  }

  // network_id - computed: false, optional: true, required: false
  private _networkId?: string; 
  public get networkId() {
    return this.getStringAttribute('network_id');
  }
  public set networkId(value: string) {
    this._networkId = value;
  }
  public resetNetworkId() {
    this._networkId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkIdInput() {
    return this._networkId;
  }

  // security_group_ids - computed: false, optional: true, required: false
  private _securityGroupIds?: string[]; 
  public get securityGroupIds() {
    return cdktf.Fn.tolist(this.getListAttribute('security_group_ids'));
  }
  public set securityGroupIds(value: string[]) {
    this._securityGroupIds = value;
  }
  public resetSecurityGroupIds() {
    this._securityGroupIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupIdsInput() {
    return this._securityGroupIds;
  }

  // subnet_ids - computed: false, optional: true, required: false
  private _subnetIds?: string[]; 
  public get subnetIds() {
    return cdktf.Fn.tolist(this.getListAttribute('subnet_ids'));
  }
  public set subnetIds(value: string[]) {
    this._subnetIds = value;
  }
  public resetSubnetIds() {
    this._subnetIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdsInput() {
    return this._subnetIds;
  }

  // dns_record - computed: false, optional: true, required: false
  private _dnsRecord = new ComputeInstanceGroupInstanceTemplateNetworkInterfaceDnsRecordList(this, "dns_record", false);
  public get dnsRecord() {
    return this._dnsRecord;
  }
  public putDnsRecord(value: ComputeInstanceGroupInstanceTemplateNetworkInterfaceDnsRecord[] | cdktf.IResolvable) {
    this._dnsRecord.internalValue = value;
  }
  public resetDnsRecord() {
    this._dnsRecord.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsRecordInput() {
    return this._dnsRecord.internalValue;
  }

  // ipv6_dns_record - computed: false, optional: true, required: false
  private _ipv6DnsRecord = new ComputeInstanceGroupInstanceTemplateNetworkInterfaceIpv6DnsRecordList(this, "ipv6_dns_record", false);
  public get ipv6DnsRecord() {
    return this._ipv6DnsRecord;
  }
  public putIpv6DnsRecord(value: ComputeInstanceGroupInstanceTemplateNetworkInterfaceIpv6DnsRecord[] | cdktf.IResolvable) {
    this._ipv6DnsRecord.internalValue = value;
  }
  public resetIpv6DnsRecord() {
    this._ipv6DnsRecord.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6DnsRecordInput() {
    return this._ipv6DnsRecord.internalValue;
  }

  // nat_dns_record - computed: false, optional: true, required: false
  private _natDnsRecord = new ComputeInstanceGroupInstanceTemplateNetworkInterfaceNatDnsRecordList(this, "nat_dns_record", false);
  public get natDnsRecord() {
    return this._natDnsRecord;
  }
  public putNatDnsRecord(value: ComputeInstanceGroupInstanceTemplateNetworkInterfaceNatDnsRecord[] | cdktf.IResolvable) {
    this._natDnsRecord.internalValue = value;
  }
  public resetNatDnsRecord() {
    this._natDnsRecord.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get natDnsRecordInput() {
    return this._natDnsRecord.internalValue;
  }
}

export class ComputeInstanceGroupInstanceTemplateNetworkInterfaceList extends cdktf.ComplexList {
  public internalValue? : ComputeInstanceGroupInstanceTemplateNetworkInterface[] | cdktf.IResolvable

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
  public get(index: number): ComputeInstanceGroupInstanceTemplateNetworkInterfaceOutputReference {
    return new ComputeInstanceGroupInstanceTemplateNetworkInterfaceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ComputeInstanceGroupInstanceTemplateNetworkSettings {
  /**
  * Network acceleration type. By default a network is in `STANDARD` mode.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/compute_instance_group#type ComputeInstanceGroup#type}
  */
  readonly type?: string;
}

export function computeInstanceGroupInstanceTemplateNetworkSettingsToTerraform(struct?: ComputeInstanceGroupInstanceTemplateNetworkSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function computeInstanceGroupInstanceTemplateNetworkSettingsToHclTerraform(struct?: ComputeInstanceGroupInstanceTemplateNetworkSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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

export class ComputeInstanceGroupInstanceTemplateNetworkSettingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ComputeInstanceGroupInstanceTemplateNetworkSettings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeInstanceGroupInstanceTemplateNetworkSettings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._type = value.type;
    }
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

export class ComputeInstanceGroupInstanceTemplateNetworkSettingsList extends cdktf.ComplexList {
  public internalValue? : ComputeInstanceGroupInstanceTemplateNetworkSettings[] | cdktf.IResolvable

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
  public get(index: number): ComputeInstanceGroupInstanceTemplateNetworkSettingsOutputReference {
    return new ComputeInstanceGroupInstanceTemplateNetworkSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ComputeInstanceGroupInstanceTemplatePlacementPolicy {
  /**
  * Specifies the id of the Placement Group to assign to the instances.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/compute_instance_group#placement_group_id ComputeInstanceGroup#placement_group_id}
  */
  readonly placementGroupId: string;
}

export function computeInstanceGroupInstanceTemplatePlacementPolicyToTerraform(struct?: ComputeInstanceGroupInstanceTemplatePlacementPolicyOutputReference | ComputeInstanceGroupInstanceTemplatePlacementPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    placement_group_id: cdktf.stringToTerraform(struct!.placementGroupId),
  }
}


export function computeInstanceGroupInstanceTemplatePlacementPolicyToHclTerraform(struct?: ComputeInstanceGroupInstanceTemplatePlacementPolicyOutputReference | ComputeInstanceGroupInstanceTemplatePlacementPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    placement_group_id: {
      value: cdktf.stringToHclTerraform(struct!.placementGroupId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComputeInstanceGroupInstanceTemplatePlacementPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ComputeInstanceGroupInstanceTemplatePlacementPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._placementGroupId !== undefined) {
      hasAnyValues = true;
      internalValueResult.placementGroupId = this._placementGroupId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeInstanceGroupInstanceTemplatePlacementPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._placementGroupId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._placementGroupId = value.placementGroupId;
    }
  }

  // placement_group_id - computed: false, optional: false, required: true
  private _placementGroupId?: string; 
  public get placementGroupId() {
    return this.getStringAttribute('placement_group_id');
  }
  public set placementGroupId(value: string) {
    this._placementGroupId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get placementGroupIdInput() {
    return this._placementGroupId;
  }
}
export interface ComputeInstanceGroupInstanceTemplateResources {
  /**
  * If provided, specifies baseline core performance as a percent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/compute_instance_group#core_fraction ComputeInstanceGroup#core_fraction}
  */
  readonly coreFraction?: number;
  /**
  * The number of CPU cores for the instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/compute_instance_group#cores ComputeInstanceGroup#cores}
  */
  readonly cores: number;
  /**
  * If provided, specifies the number of GPU devices for the instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/compute_instance_group#gpus ComputeInstanceGroup#gpus}
  */
  readonly gpus?: number;
  /**
  * The memory size in GB.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/compute_instance_group#memory ComputeInstanceGroup#memory}
  */
  readonly memory: number;
}

export function computeInstanceGroupInstanceTemplateResourcesToTerraform(struct?: ComputeInstanceGroupInstanceTemplateResourcesOutputReference | ComputeInstanceGroupInstanceTemplateResources): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    core_fraction: cdktf.numberToTerraform(struct!.coreFraction),
    cores: cdktf.numberToTerraform(struct!.cores),
    gpus: cdktf.numberToTerraform(struct!.gpus),
    memory: cdktf.numberToTerraform(struct!.memory),
  }
}


export function computeInstanceGroupInstanceTemplateResourcesToHclTerraform(struct?: ComputeInstanceGroupInstanceTemplateResourcesOutputReference | ComputeInstanceGroupInstanceTemplateResources): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    core_fraction: {
      value: cdktf.numberToHclTerraform(struct!.coreFraction),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cores: {
      value: cdktf.numberToHclTerraform(struct!.cores),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    gpus: {
      value: cdktf.numberToHclTerraform(struct!.gpus),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    memory: {
      value: cdktf.numberToHclTerraform(struct!.memory),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComputeInstanceGroupInstanceTemplateResourcesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ComputeInstanceGroupInstanceTemplateResources | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._coreFraction !== undefined) {
      hasAnyValues = true;
      internalValueResult.coreFraction = this._coreFraction;
    }
    if (this._cores !== undefined) {
      hasAnyValues = true;
      internalValueResult.cores = this._cores;
    }
    if (this._gpus !== undefined) {
      hasAnyValues = true;
      internalValueResult.gpus = this._gpus;
    }
    if (this._memory !== undefined) {
      hasAnyValues = true;
      internalValueResult.memory = this._memory;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeInstanceGroupInstanceTemplateResources | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._coreFraction = undefined;
      this._cores = undefined;
      this._gpus = undefined;
      this._memory = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._coreFraction = value.coreFraction;
      this._cores = value.cores;
      this._gpus = value.gpus;
      this._memory = value.memory;
    }
  }

  // core_fraction - computed: false, optional: true, required: false
  private _coreFraction?: number; 
  public get coreFraction() {
    return this.getNumberAttribute('core_fraction');
  }
  public set coreFraction(value: number) {
    this._coreFraction = value;
  }
  public resetCoreFraction() {
    this._coreFraction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get coreFractionInput() {
    return this._coreFraction;
  }

  // cores - computed: false, optional: false, required: true
  private _cores?: number; 
  public get cores() {
    return this.getNumberAttribute('cores');
  }
  public set cores(value: number) {
    this._cores = value;
  }
  // Temporarily expose input value. Use with caution.
  public get coresInput() {
    return this._cores;
  }

  // gpus - computed: false, optional: true, required: false
  private _gpus?: number; 
  public get gpus() {
    return this.getNumberAttribute('gpus');
  }
  public set gpus(value: number) {
    this._gpus = value;
  }
  public resetGpus() {
    this._gpus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gpusInput() {
    return this._gpus;
  }

  // memory - computed: false, optional: false, required: true
  private _memory?: number; 
  public get memory() {
    return this.getNumberAttribute('memory');
  }
  public set memory(value: number) {
    this._memory = value;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryInput() {
    return this._memory;
  }
}
export interface ComputeInstanceGroupInstanceTemplateSchedulingPolicy {
  /**
  * Specifies if the instance is preemptible. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/compute_instance_group#preemptible ComputeInstanceGroup#preemptible}
  */
  readonly preemptible?: boolean | cdktf.IResolvable;
}

export function computeInstanceGroupInstanceTemplateSchedulingPolicyToTerraform(struct?: ComputeInstanceGroupInstanceTemplateSchedulingPolicyOutputReference | ComputeInstanceGroupInstanceTemplateSchedulingPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    preemptible: cdktf.booleanToTerraform(struct!.preemptible),
  }
}


export function computeInstanceGroupInstanceTemplateSchedulingPolicyToHclTerraform(struct?: ComputeInstanceGroupInstanceTemplateSchedulingPolicyOutputReference | ComputeInstanceGroupInstanceTemplateSchedulingPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    preemptible: {
      value: cdktf.booleanToHclTerraform(struct!.preemptible),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComputeInstanceGroupInstanceTemplateSchedulingPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ComputeInstanceGroupInstanceTemplateSchedulingPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._preemptible !== undefined) {
      hasAnyValues = true;
      internalValueResult.preemptible = this._preemptible;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeInstanceGroupInstanceTemplateSchedulingPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._preemptible = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._preemptible = value.preemptible;
    }
  }

  // preemptible - computed: false, optional: true, required: false
  private _preemptible?: boolean | cdktf.IResolvable; 
  public get preemptible() {
    return this.getBooleanAttribute('preemptible');
  }
  public set preemptible(value: boolean | cdktf.IResolvable) {
    this._preemptible = value;
  }
  public resetPreemptible() {
    this._preemptible = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preemptibleInput() {
    return this._preemptible;
  }
}
export interface ComputeInstanceGroupInstanceTemplateSecondaryDiskInitializeParams {
  /**
  * A description of the boot disk.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/compute_instance_group#description ComputeInstanceGroup#description}
  */
  readonly description?: string;
  /**
  * The disk image to initialize this disk from.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/compute_instance_group#image_id ComputeInstanceGroup#image_id}
  */
  readonly imageId?: string;
  /**
  * The size of the disk in GB.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/compute_instance_group#size ComputeInstanceGroup#size}
  */
  readonly size?: number;
  /**
  * The snapshot to initialize this disk from.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/compute_instance_group#snapshot_id ComputeInstanceGroup#snapshot_id}
  */
  readonly snapshotId?: string;
  /**
  * The disk type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/compute_instance_group#type ComputeInstanceGroup#type}
  */
  readonly type?: string;
}

export function computeInstanceGroupInstanceTemplateSecondaryDiskInitializeParamsToTerraform(struct?: ComputeInstanceGroupInstanceTemplateSecondaryDiskInitializeParamsOutputReference | ComputeInstanceGroupInstanceTemplateSecondaryDiskInitializeParams): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    image_id: cdktf.stringToTerraform(struct!.imageId),
    size: cdktf.numberToTerraform(struct!.size),
    snapshot_id: cdktf.stringToTerraform(struct!.snapshotId),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function computeInstanceGroupInstanceTemplateSecondaryDiskInitializeParamsToHclTerraform(struct?: ComputeInstanceGroupInstanceTemplateSecondaryDiskInitializeParamsOutputReference | ComputeInstanceGroupInstanceTemplateSecondaryDiskInitializeParams): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    image_id: {
      value: cdktf.stringToHclTerraform(struct!.imageId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    size: {
      value: cdktf.numberToHclTerraform(struct!.size),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    snapshot_id: {
      value: cdktf.stringToHclTerraform(struct!.snapshotId),
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

export class ComputeInstanceGroupInstanceTemplateSecondaryDiskInitializeParamsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ComputeInstanceGroupInstanceTemplateSecondaryDiskInitializeParams | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._imageId !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageId = this._imageId;
    }
    if (this._size !== undefined) {
      hasAnyValues = true;
      internalValueResult.size = this._size;
    }
    if (this._snapshotId !== undefined) {
      hasAnyValues = true;
      internalValueResult.snapshotId = this._snapshotId;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeInstanceGroupInstanceTemplateSecondaryDiskInitializeParams | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._description = undefined;
      this._imageId = undefined;
      this._size = undefined;
      this._snapshotId = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._description = value.description;
      this._imageId = value.imageId;
      this._size = value.size;
      this._snapshotId = value.snapshotId;
      this._type = value.type;
    }
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

  // image_id - computed: false, optional: true, required: false
  private _imageId?: string; 
  public get imageId() {
    return this.getStringAttribute('image_id');
  }
  public set imageId(value: string) {
    this._imageId = value;
  }
  public resetImageId() {
    this._imageId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageIdInput() {
    return this._imageId;
  }

  // size - computed: false, optional: true, required: false
  private _size?: number; 
  public get size() {
    return this.getNumberAttribute('size');
  }
  public set size(value: number) {
    this._size = value;
  }
  public resetSize() {
    this._size = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeInput() {
    return this._size;
  }

  // snapshot_id - computed: false, optional: true, required: false
  private _snapshotId?: string; 
  public get snapshotId() {
    return this.getStringAttribute('snapshot_id');
  }
  public set snapshotId(value: string) {
    this._snapshotId = value;
  }
  public resetSnapshotId() {
    this._snapshotId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snapshotIdInput() {
    return this._snapshotId;
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
export interface ComputeInstanceGroupInstanceTemplateSecondaryDisk {
  /**
  * This value can be used to reference the device under `/dev/disk/by-id/`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/compute_instance_group#device_name ComputeInstanceGroup#device_name}
  */
  readonly deviceName?: string;
  /**
  * ID of the existing disk. To set use variables.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/compute_instance_group#disk_id ComputeInstanceGroup#disk_id}
  */
  readonly diskId?: string;
  /**
  * The access mode to the disk resource. By default a disk is attached in `READ_WRITE` mode.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/compute_instance_group#mode ComputeInstanceGroup#mode}
  */
  readonly mode?: string;
  /**
  * When set can be later used to change DiskSpec of actual disk.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/compute_instance_group#name ComputeInstanceGroup#name}
  */
  readonly name?: string;
  /**
  * initialize_params block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/compute_instance_group#initialize_params ComputeInstanceGroup#initialize_params}
  */
  readonly initializeParams?: ComputeInstanceGroupInstanceTemplateSecondaryDiskInitializeParams;
}

export function computeInstanceGroupInstanceTemplateSecondaryDiskToTerraform(struct?: ComputeInstanceGroupInstanceTemplateSecondaryDisk | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    device_name: cdktf.stringToTerraform(struct!.deviceName),
    disk_id: cdktf.stringToTerraform(struct!.diskId),
    mode: cdktf.stringToTerraform(struct!.mode),
    name: cdktf.stringToTerraform(struct!.name),
    initialize_params: computeInstanceGroupInstanceTemplateSecondaryDiskInitializeParamsToTerraform(struct!.initializeParams),
  }
}


export function computeInstanceGroupInstanceTemplateSecondaryDiskToHclTerraform(struct?: ComputeInstanceGroupInstanceTemplateSecondaryDisk | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    device_name: {
      value: cdktf.stringToHclTerraform(struct!.deviceName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    disk_id: {
      value: cdktf.stringToHclTerraform(struct!.diskId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mode: {
      value: cdktf.stringToHclTerraform(struct!.mode),
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
    initialize_params: {
      value: computeInstanceGroupInstanceTemplateSecondaryDiskInitializeParamsToHclTerraform(struct!.initializeParams),
      isBlock: true,
      type: "list",
      storageClassType: "ComputeInstanceGroupInstanceTemplateSecondaryDiskInitializeParamsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComputeInstanceGroupInstanceTemplateSecondaryDiskOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ComputeInstanceGroupInstanceTemplateSecondaryDisk | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._deviceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.deviceName = this._deviceName;
    }
    if (this._diskId !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskId = this._diskId;
    }
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._initializeParams?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.initializeParams = this._initializeParams?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeInstanceGroupInstanceTemplateSecondaryDisk | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._deviceName = undefined;
      this._diskId = undefined;
      this._mode = undefined;
      this._name = undefined;
      this._initializeParams.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._deviceName = value.deviceName;
      this._diskId = value.diskId;
      this._mode = value.mode;
      this._name = value.name;
      this._initializeParams.internalValue = value.initializeParams;
    }
  }

  // device_name - computed: false, optional: true, required: false
  private _deviceName?: string; 
  public get deviceName() {
    return this.getStringAttribute('device_name');
  }
  public set deviceName(value: string) {
    this._deviceName = value;
  }
  public resetDeviceName() {
    this._deviceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceNameInput() {
    return this._deviceName;
  }

  // disk_id - computed: false, optional: true, required: false
  private _diskId?: string; 
  public get diskId() {
    return this.getStringAttribute('disk_id');
  }
  public set diskId(value: string) {
    this._diskId = value;
  }
  public resetDiskId() {
    this._diskId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskIdInput() {
    return this._diskId;
  }

  // mode - computed: false, optional: true, required: false
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
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

  // initialize_params - computed: false, optional: true, required: false
  private _initializeParams = new ComputeInstanceGroupInstanceTemplateSecondaryDiskInitializeParamsOutputReference(this, "initialize_params");
  public get initializeParams() {
    return this._initializeParams;
  }
  public putInitializeParams(value: ComputeInstanceGroupInstanceTemplateSecondaryDiskInitializeParams) {
    this._initializeParams.internalValue = value;
  }
  public resetInitializeParams() {
    this._initializeParams.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initializeParamsInput() {
    return this._initializeParams.internalValue;
  }
}

export class ComputeInstanceGroupInstanceTemplateSecondaryDiskList extends cdktf.ComplexList {
  public internalValue? : ComputeInstanceGroupInstanceTemplateSecondaryDisk[] | cdktf.IResolvable

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
  public get(index: number): ComputeInstanceGroupInstanceTemplateSecondaryDiskOutputReference {
    return new ComputeInstanceGroupInstanceTemplateSecondaryDiskOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ComputeInstanceGroupInstanceTemplate {
  /**
  * A description of the instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/compute_instance_group#description ComputeInstanceGroup#description}
  */
  readonly description?: string;
  /**
  * Hostname template for the instance. This field is used to generate the FQDN value of instance. The `hostname` must be unique within the network and region. If not specified, the hostname will be equal to `id` of the instance and FQDN will be `<id>.auto.internal`. Otherwise FQDN will be `<hostname>.<region_id>.internal`.
  * In order to be unique it must contain at least on of instance unique placeholders:
  * * `{instance.short_id}`
  * * {instance.index}
  * * combination of `{instance.zone_id}` and `{instance.index_in_zone}`
  * Example: `my-instance-{instance.index}`. If hostname is not set, `name` value will be used. It may also contain another placeholders, see `metadata` doc for full list.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/compute_instance_group#hostname ComputeInstanceGroup#hostname}
  */
  readonly hostname?: string;
  /**
  * A set of key/value label pairs to assign to the instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/compute_instance_group#labels ComputeInstanceGroup#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * A set of metadata key/value pairs to make available from within the instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/compute_instance_group#metadata ComputeInstanceGroup#metadata}
  */
  readonly metadata?: { [key: string]: string };
  /**
  * Name template of the instance.
  * In order to be unique it must contain at least one of instance unique placeholders:*`{instance.short_id}`
  * * `{instance.index}`
  * * combination of `{instance.zone_id}` and`{instance.index_in_zone}`.
  * Example: `my-instance-{instance.index}`.
  * If not set, default name is used: `{instance_group.id}-{instance.short_id}`. It may also contain another placeholders, see `metadata` doc for full list.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/compute_instance_group#name ComputeInstanceGroup#name}
  */
  readonly name?: string;
  /**
  * The ID of the hardware platform configuration for the instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/compute_instance_group#platform_id ComputeInstanceGroup#platform_id}
  */
  readonly platformId?: string;
  /**
  * ID of the reserved instance pool that the instance should belong to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/compute_instance_group#reserved_instance_pool_id ComputeInstanceGroup#reserved_instance_pool_id}
  */
  readonly reservedInstancePoolId?: string;
  /**
  * The ID of the service account authorized for this instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/compute_instance_group#service_account_id ComputeInstanceGroup#service_account_id}
  */
  readonly serviceAccountId?: string;
  /**
  * boot_disk block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/compute_instance_group#boot_disk ComputeInstanceGroup#boot_disk}
  */
  readonly bootDisk: ComputeInstanceGroupInstanceTemplateBootDisk;
  /**
  * filesystem block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/compute_instance_group#filesystem ComputeInstanceGroup#filesystem}
  */
  readonly filesystem?: ComputeInstanceGroupInstanceTemplateFilesystem[] | cdktf.IResolvable;
  /**
  * metadata_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/compute_instance_group#metadata_options ComputeInstanceGroup#metadata_options}
  */
  readonly metadataOptions?: ComputeInstanceGroupInstanceTemplateMetadataOptions;
  /**
  * network_interface block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/compute_instance_group#network_interface ComputeInstanceGroup#network_interface}
  */
  readonly networkInterface: ComputeInstanceGroupInstanceTemplateNetworkInterface[] | cdktf.IResolvable;
  /**
  * network_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/compute_instance_group#network_settings ComputeInstanceGroup#network_settings}
  */
  readonly networkSettings?: ComputeInstanceGroupInstanceTemplateNetworkSettings[] | cdktf.IResolvable;
  /**
  * placement_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/compute_instance_group#placement_policy ComputeInstanceGroup#placement_policy}
  */
  readonly placementPolicy?: ComputeInstanceGroupInstanceTemplatePlacementPolicy;
  /**
  * resources block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/compute_instance_group#resources ComputeInstanceGroup#resources}
  */
  readonly resources: ComputeInstanceGroupInstanceTemplateResources;
  /**
  * scheduling_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/compute_instance_group#scheduling_policy ComputeInstanceGroup#scheduling_policy}
  */
  readonly schedulingPolicy?: ComputeInstanceGroupInstanceTemplateSchedulingPolicy;
  /**
  * secondary_disk block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/compute_instance_group#secondary_disk ComputeInstanceGroup#secondary_disk}
  */
  readonly secondaryDisk?: ComputeInstanceGroupInstanceTemplateSecondaryDisk[] | cdktf.IResolvable;
}

export function computeInstanceGroupInstanceTemplateToTerraform(struct?: ComputeInstanceGroupInstanceTemplateOutputReference | ComputeInstanceGroupInstanceTemplate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    hostname: cdktf.stringToTerraform(struct!.hostname),
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
    metadata: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.metadata),
    name: cdktf.stringToTerraform(struct!.name),
    platform_id: cdktf.stringToTerraform(struct!.platformId),
    reserved_instance_pool_id: cdktf.stringToTerraform(struct!.reservedInstancePoolId),
    service_account_id: cdktf.stringToTerraform(struct!.serviceAccountId),
    boot_disk: computeInstanceGroupInstanceTemplateBootDiskToTerraform(struct!.bootDisk),
    filesystem: cdktf.listMapper(computeInstanceGroupInstanceTemplateFilesystemToTerraform, true)(struct!.filesystem),
    metadata_options: computeInstanceGroupInstanceTemplateMetadataOptionsToTerraform(struct!.metadataOptions),
    network_interface: cdktf.listMapper(computeInstanceGroupInstanceTemplateNetworkInterfaceToTerraform, true)(struct!.networkInterface),
    network_settings: cdktf.listMapper(computeInstanceGroupInstanceTemplateNetworkSettingsToTerraform, true)(struct!.networkSettings),
    placement_policy: computeInstanceGroupInstanceTemplatePlacementPolicyToTerraform(struct!.placementPolicy),
    resources: computeInstanceGroupInstanceTemplateResourcesToTerraform(struct!.resources),
    scheduling_policy: computeInstanceGroupInstanceTemplateSchedulingPolicyToTerraform(struct!.schedulingPolicy),
    secondary_disk: cdktf.listMapper(computeInstanceGroupInstanceTemplateSecondaryDiskToTerraform, true)(struct!.secondaryDisk),
  }
}


export function computeInstanceGroupInstanceTemplateToHclTerraform(struct?: ComputeInstanceGroupInstanceTemplateOutputReference | ComputeInstanceGroupInstanceTemplate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hostname: {
      value: cdktf.stringToHclTerraform(struct!.hostname),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.labels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    metadata: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.metadata),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    platform_id: {
      value: cdktf.stringToHclTerraform(struct!.platformId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    reserved_instance_pool_id: {
      value: cdktf.stringToHclTerraform(struct!.reservedInstancePoolId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_account_id: {
      value: cdktf.stringToHclTerraform(struct!.serviceAccountId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    boot_disk: {
      value: computeInstanceGroupInstanceTemplateBootDiskToHclTerraform(struct!.bootDisk),
      isBlock: true,
      type: "list",
      storageClassType: "ComputeInstanceGroupInstanceTemplateBootDiskList",
    },
    filesystem: {
      value: cdktf.listMapperHcl(computeInstanceGroupInstanceTemplateFilesystemToHclTerraform, true)(struct!.filesystem),
      isBlock: true,
      type: "set",
      storageClassType: "ComputeInstanceGroupInstanceTemplateFilesystemList",
    },
    metadata_options: {
      value: computeInstanceGroupInstanceTemplateMetadataOptionsToHclTerraform(struct!.metadataOptions),
      isBlock: true,
      type: "list",
      storageClassType: "ComputeInstanceGroupInstanceTemplateMetadataOptionsList",
    },
    network_interface: {
      value: cdktf.listMapperHcl(computeInstanceGroupInstanceTemplateNetworkInterfaceToHclTerraform, true)(struct!.networkInterface),
      isBlock: true,
      type: "list",
      storageClassType: "ComputeInstanceGroupInstanceTemplateNetworkInterfaceList",
    },
    network_settings: {
      value: cdktf.listMapperHcl(computeInstanceGroupInstanceTemplateNetworkSettingsToHclTerraform, true)(struct!.networkSettings),
      isBlock: true,
      type: "list",
      storageClassType: "ComputeInstanceGroupInstanceTemplateNetworkSettingsList",
    },
    placement_policy: {
      value: computeInstanceGroupInstanceTemplatePlacementPolicyToHclTerraform(struct!.placementPolicy),
      isBlock: true,
      type: "list",
      storageClassType: "ComputeInstanceGroupInstanceTemplatePlacementPolicyList",
    },
    resources: {
      value: computeInstanceGroupInstanceTemplateResourcesToHclTerraform(struct!.resources),
      isBlock: true,
      type: "list",
      storageClassType: "ComputeInstanceGroupInstanceTemplateResourcesList",
    },
    scheduling_policy: {
      value: computeInstanceGroupInstanceTemplateSchedulingPolicyToHclTerraform(struct!.schedulingPolicy),
      isBlock: true,
      type: "list",
      storageClassType: "ComputeInstanceGroupInstanceTemplateSchedulingPolicyList",
    },
    secondary_disk: {
      value: cdktf.listMapperHcl(computeInstanceGroupInstanceTemplateSecondaryDiskToHclTerraform, true)(struct!.secondaryDisk),
      isBlock: true,
      type: "list",
      storageClassType: "ComputeInstanceGroupInstanceTemplateSecondaryDiskList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComputeInstanceGroupInstanceTemplateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ComputeInstanceGroupInstanceTemplate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._hostname !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostname = this._hostname;
    }
    if (this._labels !== undefined) {
      hasAnyValues = true;
      internalValueResult.labels = this._labels;
    }
    if (this._metadata !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadata = this._metadata;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._platformId !== undefined) {
      hasAnyValues = true;
      internalValueResult.platformId = this._platformId;
    }
    if (this._reservedInstancePoolId !== undefined) {
      hasAnyValues = true;
      internalValueResult.reservedInstancePoolId = this._reservedInstancePoolId;
    }
    if (this._serviceAccountId !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceAccountId = this._serviceAccountId;
    }
    if (this._bootDisk?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bootDisk = this._bootDisk?.internalValue;
    }
    if (this._filesystem?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.filesystem = this._filesystem?.internalValue;
    }
    if (this._metadataOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadataOptions = this._metadataOptions?.internalValue;
    }
    if (this._networkInterface?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkInterface = this._networkInterface?.internalValue;
    }
    if (this._networkSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkSettings = this._networkSettings?.internalValue;
    }
    if (this._placementPolicy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.placementPolicy = this._placementPolicy?.internalValue;
    }
    if (this._resources?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resources = this._resources?.internalValue;
    }
    if (this._schedulingPolicy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.schedulingPolicy = this._schedulingPolicy?.internalValue;
    }
    if (this._secondaryDisk?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secondaryDisk = this._secondaryDisk?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeInstanceGroupInstanceTemplate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._description = undefined;
      this._hostname = undefined;
      this._labels = undefined;
      this._metadata = undefined;
      this._name = undefined;
      this._platformId = undefined;
      this._reservedInstancePoolId = undefined;
      this._serviceAccountId = undefined;
      this._bootDisk.internalValue = undefined;
      this._filesystem.internalValue = undefined;
      this._metadataOptions.internalValue = undefined;
      this._networkInterface.internalValue = undefined;
      this._networkSettings.internalValue = undefined;
      this._placementPolicy.internalValue = undefined;
      this._resources.internalValue = undefined;
      this._schedulingPolicy.internalValue = undefined;
      this._secondaryDisk.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._description = value.description;
      this._hostname = value.hostname;
      this._labels = value.labels;
      this._metadata = value.metadata;
      this._name = value.name;
      this._platformId = value.platformId;
      this._reservedInstancePoolId = value.reservedInstancePoolId;
      this._serviceAccountId = value.serviceAccountId;
      this._bootDisk.internalValue = value.bootDisk;
      this._filesystem.internalValue = value.filesystem;
      this._metadataOptions.internalValue = value.metadataOptions;
      this._networkInterface.internalValue = value.networkInterface;
      this._networkSettings.internalValue = value.networkSettings;
      this._placementPolicy.internalValue = value.placementPolicy;
      this._resources.internalValue = value.resources;
      this._schedulingPolicy.internalValue = value.schedulingPolicy;
      this._secondaryDisk.internalValue = value.secondaryDisk;
    }
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

  // hostname - computed: false, optional: true, required: false
  private _hostname?: string; 
  public get hostname() {
    return this.getStringAttribute('hostname');
  }
  public set hostname(value: string) {
    this._hostname = value;
  }
  public resetHostname() {
    this._hostname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnameInput() {
    return this._hostname;
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

  // metadata - computed: true, optional: true, required: false
  private _metadata?: { [key: string]: string }; 
  public get metadata() {
    return this.getStringMapAttribute('metadata');
  }
  public set metadata(value: { [key: string]: string }) {
    this._metadata = value;
  }
  public resetMetadata() {
    this._metadata = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata;
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

  // platform_id - computed: false, optional: true, required: false
  private _platformId?: string; 
  public get platformId() {
    return this.getStringAttribute('platform_id');
  }
  public set platformId(value: string) {
    this._platformId = value;
  }
  public resetPlatformId() {
    this._platformId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get platformIdInput() {
    return this._platformId;
  }

  // reserved_instance_pool_id - computed: false, optional: true, required: false
  private _reservedInstancePoolId?: string; 
  public get reservedInstancePoolId() {
    return this.getStringAttribute('reserved_instance_pool_id');
  }
  public set reservedInstancePoolId(value: string) {
    this._reservedInstancePoolId = value;
  }
  public resetReservedInstancePoolId() {
    this._reservedInstancePoolId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reservedInstancePoolIdInput() {
    return this._reservedInstancePoolId;
  }

  // service_account_id - computed: false, optional: true, required: false
  private _serviceAccountId?: string; 
  public get serviceAccountId() {
    return this.getStringAttribute('service_account_id');
  }
  public set serviceAccountId(value: string) {
    this._serviceAccountId = value;
  }
  public resetServiceAccountId() {
    this._serviceAccountId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountIdInput() {
    return this._serviceAccountId;
  }

  // boot_disk - computed: false, optional: false, required: true
  private _bootDisk = new ComputeInstanceGroupInstanceTemplateBootDiskOutputReference(this, "boot_disk");
  public get bootDisk() {
    return this._bootDisk;
  }
  public putBootDisk(value: ComputeInstanceGroupInstanceTemplateBootDisk) {
    this._bootDisk.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bootDiskInput() {
    return this._bootDisk.internalValue;
  }

  // filesystem - computed: false, optional: true, required: false
  private _filesystem = new ComputeInstanceGroupInstanceTemplateFilesystemList(this, "filesystem", true);
  public get filesystem() {
    return this._filesystem;
  }
  public putFilesystem(value: ComputeInstanceGroupInstanceTemplateFilesystem[] | cdktf.IResolvable) {
    this._filesystem.internalValue = value;
  }
  public resetFilesystem() {
    this._filesystem.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filesystemInput() {
    return this._filesystem.internalValue;
  }

  // metadata_options - computed: false, optional: true, required: false
  private _metadataOptions = new ComputeInstanceGroupInstanceTemplateMetadataOptionsOutputReference(this, "metadata_options");
  public get metadataOptions() {
    return this._metadataOptions;
  }
  public putMetadataOptions(value: ComputeInstanceGroupInstanceTemplateMetadataOptions) {
    this._metadataOptions.internalValue = value;
  }
  public resetMetadataOptions() {
    this._metadataOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataOptionsInput() {
    return this._metadataOptions.internalValue;
  }

  // network_interface - computed: false, optional: false, required: true
  private _networkInterface = new ComputeInstanceGroupInstanceTemplateNetworkInterfaceList(this, "network_interface", false);
  public get networkInterface() {
    return this._networkInterface;
  }
  public putNetworkInterface(value: ComputeInstanceGroupInstanceTemplateNetworkInterface[] | cdktf.IResolvable) {
    this._networkInterface.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInterfaceInput() {
    return this._networkInterface.internalValue;
  }

  // network_settings - computed: false, optional: true, required: false
  private _networkSettings = new ComputeInstanceGroupInstanceTemplateNetworkSettingsList(this, "network_settings", false);
  public get networkSettings() {
    return this._networkSettings;
  }
  public putNetworkSettings(value: ComputeInstanceGroupInstanceTemplateNetworkSettings[] | cdktf.IResolvable) {
    this._networkSettings.internalValue = value;
  }
  public resetNetworkSettings() {
    this._networkSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkSettingsInput() {
    return this._networkSettings.internalValue;
  }

  // placement_policy - computed: false, optional: true, required: false
  private _placementPolicy = new ComputeInstanceGroupInstanceTemplatePlacementPolicyOutputReference(this, "placement_policy");
  public get placementPolicy() {
    return this._placementPolicy;
  }
  public putPlacementPolicy(value: ComputeInstanceGroupInstanceTemplatePlacementPolicy) {
    this._placementPolicy.internalValue = value;
  }
  public resetPlacementPolicy() {
    this._placementPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get placementPolicyInput() {
    return this._placementPolicy.internalValue;
  }

  // resources - computed: false, optional: false, required: true
  private _resources = new ComputeInstanceGroupInstanceTemplateResourcesOutputReference(this, "resources");
  public get resources() {
    return this._resources;
  }
  public putResources(value: ComputeInstanceGroupInstanceTemplateResources) {
    this._resources.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcesInput() {
    return this._resources.internalValue;
  }

  // scheduling_policy - computed: false, optional: true, required: false
  private _schedulingPolicy = new ComputeInstanceGroupInstanceTemplateSchedulingPolicyOutputReference(this, "scheduling_policy");
  public get schedulingPolicy() {
    return this._schedulingPolicy;
  }
  public putSchedulingPolicy(value: ComputeInstanceGroupInstanceTemplateSchedulingPolicy) {
    this._schedulingPolicy.internalValue = value;
  }
  public resetSchedulingPolicy() {
    this._schedulingPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schedulingPolicyInput() {
    return this._schedulingPolicy.internalValue;
  }

  // secondary_disk - computed: false, optional: true, required: false
  private _secondaryDisk = new ComputeInstanceGroupInstanceTemplateSecondaryDiskList(this, "secondary_disk", false);
  public get secondaryDisk() {
    return this._secondaryDisk;
  }
  public putSecondaryDisk(value: ComputeInstanceGroupInstanceTemplateSecondaryDisk[] | cdktf.IResolvable) {
    this._secondaryDisk.internalValue = value;
  }
  public resetSecondaryDisk() {
    this._secondaryDisk.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secondaryDiskInput() {
    return this._secondaryDisk.internalValue;
  }
}
export interface ComputeInstanceGroupLoadBalancer {
  /**
  * Do not wait load balancer health checks.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/compute_instance_group#ignore_health_checks ComputeInstanceGroup#ignore_health_checks}
  */
  readonly ignoreHealthChecks?: boolean | cdktf.IResolvable;
  /**
  * Timeout for waiting for the VM to be checked by the load balancer. If the timeout is exceeded, the VM will be turned off based on the deployment policy. Specified in seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/compute_instance_group#max_opening_traffic_duration ComputeInstanceGroup#max_opening_traffic_duration}
  */
  readonly maxOpeningTrafficDuration?: number;
  /**
  * A description of the target group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/compute_instance_group#target_group_description ComputeInstanceGroup#target_group_description}
  */
  readonly targetGroupDescription?: string;
  /**
  * A set of key/value label pairs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/compute_instance_group#target_group_labels ComputeInstanceGroup#target_group_labels}
  */
  readonly targetGroupLabels?: { [key: string]: string };
  /**
  * The name of the target group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/compute_instance_group#target_group_name ComputeInstanceGroup#target_group_name}
  */
  readonly targetGroupName?: string;
}

export function computeInstanceGroupLoadBalancerToTerraform(struct?: ComputeInstanceGroupLoadBalancerOutputReference | ComputeInstanceGroupLoadBalancer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ignore_health_checks: cdktf.booleanToTerraform(struct!.ignoreHealthChecks),
    max_opening_traffic_duration: cdktf.numberToTerraform(struct!.maxOpeningTrafficDuration),
    target_group_description: cdktf.stringToTerraform(struct!.targetGroupDescription),
    target_group_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.targetGroupLabels),
    target_group_name: cdktf.stringToTerraform(struct!.targetGroupName),
  }
}


export function computeInstanceGroupLoadBalancerToHclTerraform(struct?: ComputeInstanceGroupLoadBalancerOutputReference | ComputeInstanceGroupLoadBalancer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ignore_health_checks: {
      value: cdktf.booleanToHclTerraform(struct!.ignoreHealthChecks),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    max_opening_traffic_duration: {
      value: cdktf.numberToHclTerraform(struct!.maxOpeningTrafficDuration),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    target_group_description: {
      value: cdktf.stringToHclTerraform(struct!.targetGroupDescription),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target_group_labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.targetGroupLabels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    target_group_name: {
      value: cdktf.stringToHclTerraform(struct!.targetGroupName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComputeInstanceGroupLoadBalancerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ComputeInstanceGroupLoadBalancer | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ignoreHealthChecks !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreHealthChecks = this._ignoreHealthChecks;
    }
    if (this._maxOpeningTrafficDuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxOpeningTrafficDuration = this._maxOpeningTrafficDuration;
    }
    if (this._targetGroupDescription !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetGroupDescription = this._targetGroupDescription;
    }
    if (this._targetGroupLabels !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetGroupLabels = this._targetGroupLabels;
    }
    if (this._targetGroupName !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetGroupName = this._targetGroupName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeInstanceGroupLoadBalancer | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ignoreHealthChecks = undefined;
      this._maxOpeningTrafficDuration = undefined;
      this._targetGroupDescription = undefined;
      this._targetGroupLabels = undefined;
      this._targetGroupName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ignoreHealthChecks = value.ignoreHealthChecks;
      this._maxOpeningTrafficDuration = value.maxOpeningTrafficDuration;
      this._targetGroupDescription = value.targetGroupDescription;
      this._targetGroupLabels = value.targetGroupLabels;
      this._targetGroupName = value.targetGroupName;
    }
  }

  // ignore_health_checks - computed: false, optional: true, required: false
  private _ignoreHealthChecks?: boolean | cdktf.IResolvable; 
  public get ignoreHealthChecks() {
    return this.getBooleanAttribute('ignore_health_checks');
  }
  public set ignoreHealthChecks(value: boolean | cdktf.IResolvable) {
    this._ignoreHealthChecks = value;
  }
  public resetIgnoreHealthChecks() {
    this._ignoreHealthChecks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreHealthChecksInput() {
    return this._ignoreHealthChecks;
  }

  // max_opening_traffic_duration - computed: false, optional: true, required: false
  private _maxOpeningTrafficDuration?: number; 
  public get maxOpeningTrafficDuration() {
    return this.getNumberAttribute('max_opening_traffic_duration');
  }
  public set maxOpeningTrafficDuration(value: number) {
    this._maxOpeningTrafficDuration = value;
  }
  public resetMaxOpeningTrafficDuration() {
    this._maxOpeningTrafficDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxOpeningTrafficDurationInput() {
    return this._maxOpeningTrafficDuration;
  }

  // status_message - computed: true, optional: false, required: false
  public get statusMessage() {
    return this.getStringAttribute('status_message');
  }

  // target_group_description - computed: false, optional: true, required: false
  private _targetGroupDescription?: string; 
  public get targetGroupDescription() {
    return this.getStringAttribute('target_group_description');
  }
  public set targetGroupDescription(value: string) {
    this._targetGroupDescription = value;
  }
  public resetTargetGroupDescription() {
    this._targetGroupDescription = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetGroupDescriptionInput() {
    return this._targetGroupDescription;
  }

  // target_group_id - computed: true, optional: false, required: false
  public get targetGroupId() {
    return this.getStringAttribute('target_group_id');
  }

  // target_group_labels - computed: false, optional: true, required: false
  private _targetGroupLabels?: { [key: string]: string }; 
  public get targetGroupLabels() {
    return this.getStringMapAttribute('target_group_labels');
  }
  public set targetGroupLabels(value: { [key: string]: string }) {
    this._targetGroupLabels = value;
  }
  public resetTargetGroupLabels() {
    this._targetGroupLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetGroupLabelsInput() {
    return this._targetGroupLabels;
  }

  // target_group_name - computed: false, optional: true, required: false
  private _targetGroupName?: string; 
  public get targetGroupName() {
    return this.getStringAttribute('target_group_name');
  }
  public set targetGroupName(value: string) {
    this._targetGroupName = value;
  }
  public resetTargetGroupName() {
    this._targetGroupName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetGroupNameInput() {
    return this._targetGroupName;
  }
}
export interface ComputeInstanceGroupScalePolicyAutoScaleCustomRule {
  /**
  * If specified, sets the folder id to fetch metrics from. By default, it is the ID of the folder the group belongs to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/compute_instance_group#folder_id ComputeInstanceGroup#folder_id}
  */
  readonly folderId?: string;
  /**
  * Metrics [labels](https://yandex.cloud/en/docs/monitoring/concepts/data-model#label) from Monitoring.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/compute_instance_group#labels ComputeInstanceGroup#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Name of the metric in Monitoring.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/compute_instance_group#metric_name ComputeInstanceGroup#metric_name}
  */
  readonly metricName: string;
  /**
  * Type of metric, can be `GAUGE` or `COUNTER`. `GAUGE` metric reflects the value at particular time point. `COUNTER` metric exhibits a monotonous growth over time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/compute_instance_group#metric_type ComputeInstanceGroup#metric_type}
  */
  readonly metricType: string;
  /**
  * The metric rule type (UTILIZATION, WORKLOAD). UTILIZATION for metrics describing resource utilization per VM instance. WORKLOAD for metrics describing total workload on all VM instances.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/compute_instance_group#rule_type ComputeInstanceGroup#rule_type}
  */
  readonly ruleType: string;
  /**
  * If specified, sets the service name to fetch metrics. The default value is `custom`. You can use a label to specify service metrics, e.g., `service` with the `compute` value for Compute Cloud.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/compute_instance_group#service ComputeInstanceGroup#service}
  */
  readonly service?: string;
  /**
  * Target metric value by which Instance Groups calculates the number of required VM instances.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/compute_instance_group#target ComputeInstanceGroup#target}
  */
  readonly target: number;
}

export function computeInstanceGroupScalePolicyAutoScaleCustomRuleToTerraform(struct?: ComputeInstanceGroupScalePolicyAutoScaleCustomRule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    folder_id: cdktf.stringToTerraform(struct!.folderId),
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
    metric_name: cdktf.stringToTerraform(struct!.metricName),
    metric_type: cdktf.stringToTerraform(struct!.metricType),
    rule_type: cdktf.stringToTerraform(struct!.ruleType),
    service: cdktf.stringToTerraform(struct!.service),
    target: cdktf.numberToTerraform(struct!.target),
  }
}


export function computeInstanceGroupScalePolicyAutoScaleCustomRuleToHclTerraform(struct?: ComputeInstanceGroupScalePolicyAutoScaleCustomRule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    folder_id: {
      value: cdktf.stringToHclTerraform(struct!.folderId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.labels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    metric_name: {
      value: cdktf.stringToHclTerraform(struct!.metricName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    metric_type: {
      value: cdktf.stringToHclTerraform(struct!.metricType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rule_type: {
      value: cdktf.stringToHclTerraform(struct!.ruleType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service: {
      value: cdktf.stringToHclTerraform(struct!.service),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target: {
      value: cdktf.numberToHclTerraform(struct!.target),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComputeInstanceGroupScalePolicyAutoScaleCustomRuleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ComputeInstanceGroupScalePolicyAutoScaleCustomRule | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._folderId !== undefined) {
      hasAnyValues = true;
      internalValueResult.folderId = this._folderId;
    }
    if (this._labels !== undefined) {
      hasAnyValues = true;
      internalValueResult.labels = this._labels;
    }
    if (this._metricName !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricName = this._metricName;
    }
    if (this._metricType !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricType = this._metricType;
    }
    if (this._ruleType !== undefined) {
      hasAnyValues = true;
      internalValueResult.ruleType = this._ruleType;
    }
    if (this._service !== undefined) {
      hasAnyValues = true;
      internalValueResult.service = this._service;
    }
    if (this._target !== undefined) {
      hasAnyValues = true;
      internalValueResult.target = this._target;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeInstanceGroupScalePolicyAutoScaleCustomRule | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._folderId = undefined;
      this._labels = undefined;
      this._metricName = undefined;
      this._metricType = undefined;
      this._ruleType = undefined;
      this._service = undefined;
      this._target = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._folderId = value.folderId;
      this._labels = value.labels;
      this._metricName = value.metricName;
      this._metricType = value.metricType;
      this._ruleType = value.ruleType;
      this._service = value.service;
      this._target = value.target;
    }
  }

  // folder_id - computed: false, optional: true, required: false
  private _folderId?: string; 
  public get folderId() {
    return this.getStringAttribute('folder_id');
  }
  public set folderId(value: string) {
    this._folderId = value;
  }
  public resetFolderId() {
    this._folderId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get folderIdInput() {
    return this._folderId;
  }

  // labels - computed: false, optional: true, required: false
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

  // metric_type - computed: false, optional: false, required: true
  private _metricType?: string; 
  public get metricType() {
    return this.getStringAttribute('metric_type');
  }
  public set metricType(value: string) {
    this._metricType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metricTypeInput() {
    return this._metricType;
  }

  // rule_type - computed: false, optional: false, required: true
  private _ruleType?: string; 
  public get ruleType() {
    return this.getStringAttribute('rule_type');
  }
  public set ruleType(value: string) {
    this._ruleType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleTypeInput() {
    return this._ruleType;
  }

  // service - computed: false, optional: true, required: false
  private _service?: string; 
  public get service() {
    return this.getStringAttribute('service');
  }
  public set service(value: string) {
    this._service = value;
  }
  public resetService() {
    this._service = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceInput() {
    return this._service;
  }

  // target - computed: false, optional: false, required: true
  private _target?: number; 
  public get target() {
    return this.getNumberAttribute('target');
  }
  public set target(value: number) {
    this._target = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target;
  }
}

export class ComputeInstanceGroupScalePolicyAutoScaleCustomRuleList extends cdktf.ComplexList {
  public internalValue? : ComputeInstanceGroupScalePolicyAutoScaleCustomRule[] | cdktf.IResolvable

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
  public get(index: number): ComputeInstanceGroupScalePolicyAutoScaleCustomRuleOutputReference {
    return new ComputeInstanceGroupScalePolicyAutoScaleCustomRuleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ComputeInstanceGroupScalePolicyAutoScale {
  /**
  * Autoscale type, can be `ZONAL` or `REGIONAL`. By default `ZONAL` type is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/compute_instance_group#auto_scale_type ComputeInstanceGroup#auto_scale_type}
  */
  readonly autoScaleType?: string;
  /**
  * Target CPU load level.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/compute_instance_group#cpu_utilization_target ComputeInstanceGroup#cpu_utilization_target}
  */
  readonly cpuUtilizationTarget?: number;
  /**
  * The initial number of instances in the instance group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/compute_instance_group#initial_size ComputeInstanceGroup#initial_size}
  */
  readonly initialSize: number;
  /**
  * The maximum number of virtual machines in the group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/compute_instance_group#max_size ComputeInstanceGroup#max_size}
  */
  readonly maxSize?: number;
  /**
  * The amount of time, in seconds, that metrics are averaged for. If the average value at the end of the interval is higher than the `cpu_utilization_target`, the instance group will increase the number of virtual machines in the group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/compute_instance_group#measurement_duration ComputeInstanceGroup#measurement_duration}
  */
  readonly measurementDuration: number;
  /**
  * The minimum number of virtual machines in a single availability zone.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/compute_instance_group#min_zone_size ComputeInstanceGroup#min_zone_size}
  */
  readonly minZoneSize?: number;
  /**
  * The minimum time interval, in seconds, to monitor the load before an instance group can reduce the number of virtual machines in the group. During this time, the group will not decrease even if the average load falls below the value of `cpu_utilization_target`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/compute_instance_group#stabilization_duration ComputeInstanceGroup#stabilization_duration}
  */
  readonly stabilizationDuration?: number;
  /**
  * The warm-up time of the virtual machine, in seconds. During this time, traffic is fed to the virtual machine, but load metrics are not taken into account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/compute_instance_group#warmup_duration ComputeInstanceGroup#warmup_duration}
  */
  readonly warmupDuration?: number;
  /**
  * custom_rule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/compute_instance_group#custom_rule ComputeInstanceGroup#custom_rule}
  */
  readonly customRule?: ComputeInstanceGroupScalePolicyAutoScaleCustomRule[] | cdktf.IResolvable;
}

export function computeInstanceGroupScalePolicyAutoScaleToTerraform(struct?: ComputeInstanceGroupScalePolicyAutoScaleOutputReference | ComputeInstanceGroupScalePolicyAutoScale): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auto_scale_type: cdktf.stringToTerraform(struct!.autoScaleType),
    cpu_utilization_target: cdktf.numberToTerraform(struct!.cpuUtilizationTarget),
    initial_size: cdktf.numberToTerraform(struct!.initialSize),
    max_size: cdktf.numberToTerraform(struct!.maxSize),
    measurement_duration: cdktf.numberToTerraform(struct!.measurementDuration),
    min_zone_size: cdktf.numberToTerraform(struct!.minZoneSize),
    stabilization_duration: cdktf.numberToTerraform(struct!.stabilizationDuration),
    warmup_duration: cdktf.numberToTerraform(struct!.warmupDuration),
    custom_rule: cdktf.listMapper(computeInstanceGroupScalePolicyAutoScaleCustomRuleToTerraform, true)(struct!.customRule),
  }
}


export function computeInstanceGroupScalePolicyAutoScaleToHclTerraform(struct?: ComputeInstanceGroupScalePolicyAutoScaleOutputReference | ComputeInstanceGroupScalePolicyAutoScale): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auto_scale_type: {
      value: cdktf.stringToHclTerraform(struct!.autoScaleType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cpu_utilization_target: {
      value: cdktf.numberToHclTerraform(struct!.cpuUtilizationTarget),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    initial_size: {
      value: cdktf.numberToHclTerraform(struct!.initialSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_size: {
      value: cdktf.numberToHclTerraform(struct!.maxSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    measurement_duration: {
      value: cdktf.numberToHclTerraform(struct!.measurementDuration),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min_zone_size: {
      value: cdktf.numberToHclTerraform(struct!.minZoneSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    stabilization_duration: {
      value: cdktf.numberToHclTerraform(struct!.stabilizationDuration),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    warmup_duration: {
      value: cdktf.numberToHclTerraform(struct!.warmupDuration),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    custom_rule: {
      value: cdktf.listMapperHcl(computeInstanceGroupScalePolicyAutoScaleCustomRuleToHclTerraform, true)(struct!.customRule),
      isBlock: true,
      type: "list",
      storageClassType: "ComputeInstanceGroupScalePolicyAutoScaleCustomRuleList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComputeInstanceGroupScalePolicyAutoScaleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ComputeInstanceGroupScalePolicyAutoScale | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autoScaleType !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoScaleType = this._autoScaleType;
    }
    if (this._cpuUtilizationTarget !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpuUtilizationTarget = this._cpuUtilizationTarget;
    }
    if (this._initialSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.initialSize = this._initialSize;
    }
    if (this._maxSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxSize = this._maxSize;
    }
    if (this._measurementDuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.measurementDuration = this._measurementDuration;
    }
    if (this._minZoneSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.minZoneSize = this._minZoneSize;
    }
    if (this._stabilizationDuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.stabilizationDuration = this._stabilizationDuration;
    }
    if (this._warmupDuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.warmupDuration = this._warmupDuration;
    }
    if (this._customRule?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customRule = this._customRule?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeInstanceGroupScalePolicyAutoScale | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._autoScaleType = undefined;
      this._cpuUtilizationTarget = undefined;
      this._initialSize = undefined;
      this._maxSize = undefined;
      this._measurementDuration = undefined;
      this._minZoneSize = undefined;
      this._stabilizationDuration = undefined;
      this._warmupDuration = undefined;
      this._customRule.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._autoScaleType = value.autoScaleType;
      this._cpuUtilizationTarget = value.cpuUtilizationTarget;
      this._initialSize = value.initialSize;
      this._maxSize = value.maxSize;
      this._measurementDuration = value.measurementDuration;
      this._minZoneSize = value.minZoneSize;
      this._stabilizationDuration = value.stabilizationDuration;
      this._warmupDuration = value.warmupDuration;
      this._customRule.internalValue = value.customRule;
    }
  }

  // auto_scale_type - computed: false, optional: true, required: false
  private _autoScaleType?: string; 
  public get autoScaleType() {
    return this.getStringAttribute('auto_scale_type');
  }
  public set autoScaleType(value: string) {
    this._autoScaleType = value;
  }
  public resetAutoScaleType() {
    this._autoScaleType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoScaleTypeInput() {
    return this._autoScaleType;
  }

  // cpu_utilization_target - computed: false, optional: true, required: false
  private _cpuUtilizationTarget?: number; 
  public get cpuUtilizationTarget() {
    return this.getNumberAttribute('cpu_utilization_target');
  }
  public set cpuUtilizationTarget(value: number) {
    this._cpuUtilizationTarget = value;
  }
  public resetCpuUtilizationTarget() {
    this._cpuUtilizationTarget = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuUtilizationTargetInput() {
    return this._cpuUtilizationTarget;
  }

  // initial_size - computed: false, optional: false, required: true
  private _initialSize?: number; 
  public get initialSize() {
    return this.getNumberAttribute('initial_size');
  }
  public set initialSize(value: number) {
    this._initialSize = value;
  }
  // Temporarily expose input value. Use with caution.
  public get initialSizeInput() {
    return this._initialSize;
  }

  // max_size - computed: false, optional: true, required: false
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

  // measurement_duration - computed: false, optional: false, required: true
  private _measurementDuration?: number; 
  public get measurementDuration() {
    return this.getNumberAttribute('measurement_duration');
  }
  public set measurementDuration(value: number) {
    this._measurementDuration = value;
  }
  // Temporarily expose input value. Use with caution.
  public get measurementDurationInput() {
    return this._measurementDuration;
  }

  // min_zone_size - computed: false, optional: true, required: false
  private _minZoneSize?: number; 
  public get minZoneSize() {
    return this.getNumberAttribute('min_zone_size');
  }
  public set minZoneSize(value: number) {
    this._minZoneSize = value;
  }
  public resetMinZoneSize() {
    this._minZoneSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minZoneSizeInput() {
    return this._minZoneSize;
  }

  // stabilization_duration - computed: true, optional: true, required: false
  private _stabilizationDuration?: number; 
  public get stabilizationDuration() {
    return this.getNumberAttribute('stabilization_duration');
  }
  public set stabilizationDuration(value: number) {
    this._stabilizationDuration = value;
  }
  public resetStabilizationDuration() {
    this._stabilizationDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stabilizationDurationInput() {
    return this._stabilizationDuration;
  }

  // warmup_duration - computed: true, optional: true, required: false
  private _warmupDuration?: number; 
  public get warmupDuration() {
    return this.getNumberAttribute('warmup_duration');
  }
  public set warmupDuration(value: number) {
    this._warmupDuration = value;
  }
  public resetWarmupDuration() {
    this._warmupDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get warmupDurationInput() {
    return this._warmupDuration;
  }

  // custom_rule - computed: false, optional: true, required: false
  private _customRule = new ComputeInstanceGroupScalePolicyAutoScaleCustomRuleList(this, "custom_rule", false);
  public get customRule() {
    return this._customRule;
  }
  public putCustomRule(value: ComputeInstanceGroupScalePolicyAutoScaleCustomRule[] | cdktf.IResolvable) {
    this._customRule.internalValue = value;
  }
  public resetCustomRule() {
    this._customRule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customRuleInput() {
    return this._customRule.internalValue;
  }
}
export interface ComputeInstanceGroupScalePolicyFixedScale {
  /**
  * The number of instances in the instance group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/compute_instance_group#size ComputeInstanceGroup#size}
  */
  readonly size: number;
}

export function computeInstanceGroupScalePolicyFixedScaleToTerraform(struct?: ComputeInstanceGroupScalePolicyFixedScaleOutputReference | ComputeInstanceGroupScalePolicyFixedScale): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    size: cdktf.numberToTerraform(struct!.size),
  }
}


export function computeInstanceGroupScalePolicyFixedScaleToHclTerraform(struct?: ComputeInstanceGroupScalePolicyFixedScaleOutputReference | ComputeInstanceGroupScalePolicyFixedScale): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    size: {
      value: cdktf.numberToHclTerraform(struct!.size),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComputeInstanceGroupScalePolicyFixedScaleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ComputeInstanceGroupScalePolicyFixedScale | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._size !== undefined) {
      hasAnyValues = true;
      internalValueResult.size = this._size;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeInstanceGroupScalePolicyFixedScale | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._size = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._size = value.size;
    }
  }

  // size - computed: false, optional: false, required: true
  private _size?: number; 
  public get size() {
    return this.getNumberAttribute('size');
  }
  public set size(value: number) {
    this._size = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeInput() {
    return this._size;
  }
}
export interface ComputeInstanceGroupScalePolicyTestAutoScaleCustomRule {
  /**
  * Folder ID of custom metric in Yandex Monitoring that should be used for scaling.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/compute_instance_group#folder_id ComputeInstanceGroup#folder_id}
  */
  readonly folderId?: string;
  /**
  * A map of labels of metric.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/compute_instance_group#labels ComputeInstanceGroup#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * The name of metric.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/compute_instance_group#metric_name ComputeInstanceGroup#metric_name}
  */
  readonly metricName: string;
  /**
  * Metric type, `GAUGE` or `COUNTER`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/compute_instance_group#metric_type ComputeInstanceGroup#metric_type}
  */
  readonly metricType: string;
  /**
  * Rule type: `UTILIZATION` - This type means that the metric applies to one instance. First, Instance Groups calculates the average metric value for each instance, then averages the values for instances in one availability zone. This type of metric must have the `instance_id` label. `WORKLOAD` - This type means that the metric applies to instances in one availability zone. This type of metric must have the `zone_id` label.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/compute_instance_group#rule_type ComputeInstanceGroup#rule_type}
  */
  readonly ruleType: string;
  /**
  * Service of custom metric in Yandex Monitoring that should be used for scaling.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/compute_instance_group#service ComputeInstanceGroup#service}
  */
  readonly service?: string;
  /**
  * Target metric value level.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/compute_instance_group#target ComputeInstanceGroup#target}
  */
  readonly target: number;
}

export function computeInstanceGroupScalePolicyTestAutoScaleCustomRuleToTerraform(struct?: ComputeInstanceGroupScalePolicyTestAutoScaleCustomRule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    folder_id: cdktf.stringToTerraform(struct!.folderId),
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
    metric_name: cdktf.stringToTerraform(struct!.metricName),
    metric_type: cdktf.stringToTerraform(struct!.metricType),
    rule_type: cdktf.stringToTerraform(struct!.ruleType),
    service: cdktf.stringToTerraform(struct!.service),
    target: cdktf.numberToTerraform(struct!.target),
  }
}


export function computeInstanceGroupScalePolicyTestAutoScaleCustomRuleToHclTerraform(struct?: ComputeInstanceGroupScalePolicyTestAutoScaleCustomRule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    folder_id: {
      value: cdktf.stringToHclTerraform(struct!.folderId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.labels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    metric_name: {
      value: cdktf.stringToHclTerraform(struct!.metricName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    metric_type: {
      value: cdktf.stringToHclTerraform(struct!.metricType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rule_type: {
      value: cdktf.stringToHclTerraform(struct!.ruleType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service: {
      value: cdktf.stringToHclTerraform(struct!.service),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target: {
      value: cdktf.numberToHclTerraform(struct!.target),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComputeInstanceGroupScalePolicyTestAutoScaleCustomRuleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ComputeInstanceGroupScalePolicyTestAutoScaleCustomRule | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._folderId !== undefined) {
      hasAnyValues = true;
      internalValueResult.folderId = this._folderId;
    }
    if (this._labels !== undefined) {
      hasAnyValues = true;
      internalValueResult.labels = this._labels;
    }
    if (this._metricName !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricName = this._metricName;
    }
    if (this._metricType !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricType = this._metricType;
    }
    if (this._ruleType !== undefined) {
      hasAnyValues = true;
      internalValueResult.ruleType = this._ruleType;
    }
    if (this._service !== undefined) {
      hasAnyValues = true;
      internalValueResult.service = this._service;
    }
    if (this._target !== undefined) {
      hasAnyValues = true;
      internalValueResult.target = this._target;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeInstanceGroupScalePolicyTestAutoScaleCustomRule | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._folderId = undefined;
      this._labels = undefined;
      this._metricName = undefined;
      this._metricType = undefined;
      this._ruleType = undefined;
      this._service = undefined;
      this._target = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._folderId = value.folderId;
      this._labels = value.labels;
      this._metricName = value.metricName;
      this._metricType = value.metricType;
      this._ruleType = value.ruleType;
      this._service = value.service;
      this._target = value.target;
    }
  }

  // folder_id - computed: false, optional: true, required: false
  private _folderId?: string; 
  public get folderId() {
    return this.getStringAttribute('folder_id');
  }
  public set folderId(value: string) {
    this._folderId = value;
  }
  public resetFolderId() {
    this._folderId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get folderIdInput() {
    return this._folderId;
  }

  // labels - computed: false, optional: true, required: false
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

  // metric_type - computed: false, optional: false, required: true
  private _metricType?: string; 
  public get metricType() {
    return this.getStringAttribute('metric_type');
  }
  public set metricType(value: string) {
    this._metricType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metricTypeInput() {
    return this._metricType;
  }

  // rule_type - computed: false, optional: false, required: true
  private _ruleType?: string; 
  public get ruleType() {
    return this.getStringAttribute('rule_type');
  }
  public set ruleType(value: string) {
    this._ruleType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleTypeInput() {
    return this._ruleType;
  }

  // service - computed: false, optional: true, required: false
  private _service?: string; 
  public get service() {
    return this.getStringAttribute('service');
  }
  public set service(value: string) {
    this._service = value;
  }
  public resetService() {
    this._service = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceInput() {
    return this._service;
  }

  // target - computed: false, optional: false, required: true
  private _target?: number; 
  public get target() {
    return this.getNumberAttribute('target');
  }
  public set target(value: number) {
    this._target = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target;
  }
}

export class ComputeInstanceGroupScalePolicyTestAutoScaleCustomRuleList extends cdktf.ComplexList {
  public internalValue? : ComputeInstanceGroupScalePolicyTestAutoScaleCustomRule[] | cdktf.IResolvable

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
  public get(index: number): ComputeInstanceGroupScalePolicyTestAutoScaleCustomRuleOutputReference {
    return new ComputeInstanceGroupScalePolicyTestAutoScaleCustomRuleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ComputeInstanceGroupScalePolicyTestAutoScale {
  /**
  * Autoscale type, can be `ZONAL` or `REGIONAL`. By default `ZONAL` type is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/compute_instance_group#auto_scale_type ComputeInstanceGroup#auto_scale_type}
  */
  readonly autoScaleType?: string;
  /**
  * Target CPU load level.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/compute_instance_group#cpu_utilization_target ComputeInstanceGroup#cpu_utilization_target}
  */
  readonly cpuUtilizationTarget?: number;
  /**
  * The initial number of instances in the instance group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/compute_instance_group#initial_size ComputeInstanceGroup#initial_size}
  */
  readonly initialSize: number;
  /**
  * The maximum number of virtual machines in the group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/compute_instance_group#max_size ComputeInstanceGroup#max_size}
  */
  readonly maxSize?: number;
  /**
  * The amount of time, in seconds, that metrics are averaged for. If the average value at the end of the interval is higher than the `cpu_utilization_target`, the instance group will increase the number of virtual machines in the group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/compute_instance_group#measurement_duration ComputeInstanceGroup#measurement_duration}
  */
  readonly measurementDuration: number;
  /**
  * The minimum number of virtual machines in a single availability zone.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/compute_instance_group#min_zone_size ComputeInstanceGroup#min_zone_size}
  */
  readonly minZoneSize?: number;
  /**
  * The minimum time interval, in seconds, to monitor the load before an instance group can reduce the number of virtual machines in the group. During this time, the group will not decrease even if the average load falls below the value of `cpu_utilization_target`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/compute_instance_group#stabilization_duration ComputeInstanceGroup#stabilization_duration}
  */
  readonly stabilizationDuration?: number;
  /**
  * The warm-up time of the virtual machine, in seconds. During this time, traffic is fed to the virtual machine, but load metrics are not taken into account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/compute_instance_group#warmup_duration ComputeInstanceGroup#warmup_duration}
  */
  readonly warmupDuration?: number;
  /**
  * custom_rule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/compute_instance_group#custom_rule ComputeInstanceGroup#custom_rule}
  */
  readonly customRule?: ComputeInstanceGroupScalePolicyTestAutoScaleCustomRule[] | cdktf.IResolvable;
}

export function computeInstanceGroupScalePolicyTestAutoScaleToTerraform(struct?: ComputeInstanceGroupScalePolicyTestAutoScaleOutputReference | ComputeInstanceGroupScalePolicyTestAutoScale): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auto_scale_type: cdktf.stringToTerraform(struct!.autoScaleType),
    cpu_utilization_target: cdktf.numberToTerraform(struct!.cpuUtilizationTarget),
    initial_size: cdktf.numberToTerraform(struct!.initialSize),
    max_size: cdktf.numberToTerraform(struct!.maxSize),
    measurement_duration: cdktf.numberToTerraform(struct!.measurementDuration),
    min_zone_size: cdktf.numberToTerraform(struct!.minZoneSize),
    stabilization_duration: cdktf.numberToTerraform(struct!.stabilizationDuration),
    warmup_duration: cdktf.numberToTerraform(struct!.warmupDuration),
    custom_rule: cdktf.listMapper(computeInstanceGroupScalePolicyTestAutoScaleCustomRuleToTerraform, true)(struct!.customRule),
  }
}


export function computeInstanceGroupScalePolicyTestAutoScaleToHclTerraform(struct?: ComputeInstanceGroupScalePolicyTestAutoScaleOutputReference | ComputeInstanceGroupScalePolicyTestAutoScale): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auto_scale_type: {
      value: cdktf.stringToHclTerraform(struct!.autoScaleType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cpu_utilization_target: {
      value: cdktf.numberToHclTerraform(struct!.cpuUtilizationTarget),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    initial_size: {
      value: cdktf.numberToHclTerraform(struct!.initialSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_size: {
      value: cdktf.numberToHclTerraform(struct!.maxSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    measurement_duration: {
      value: cdktf.numberToHclTerraform(struct!.measurementDuration),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min_zone_size: {
      value: cdktf.numberToHclTerraform(struct!.minZoneSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    stabilization_duration: {
      value: cdktf.numberToHclTerraform(struct!.stabilizationDuration),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    warmup_duration: {
      value: cdktf.numberToHclTerraform(struct!.warmupDuration),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    custom_rule: {
      value: cdktf.listMapperHcl(computeInstanceGroupScalePolicyTestAutoScaleCustomRuleToHclTerraform, true)(struct!.customRule),
      isBlock: true,
      type: "list",
      storageClassType: "ComputeInstanceGroupScalePolicyTestAutoScaleCustomRuleList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComputeInstanceGroupScalePolicyTestAutoScaleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ComputeInstanceGroupScalePolicyTestAutoScale | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autoScaleType !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoScaleType = this._autoScaleType;
    }
    if (this._cpuUtilizationTarget !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpuUtilizationTarget = this._cpuUtilizationTarget;
    }
    if (this._initialSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.initialSize = this._initialSize;
    }
    if (this._maxSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxSize = this._maxSize;
    }
    if (this._measurementDuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.measurementDuration = this._measurementDuration;
    }
    if (this._minZoneSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.minZoneSize = this._minZoneSize;
    }
    if (this._stabilizationDuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.stabilizationDuration = this._stabilizationDuration;
    }
    if (this._warmupDuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.warmupDuration = this._warmupDuration;
    }
    if (this._customRule?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customRule = this._customRule?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeInstanceGroupScalePolicyTestAutoScale | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._autoScaleType = undefined;
      this._cpuUtilizationTarget = undefined;
      this._initialSize = undefined;
      this._maxSize = undefined;
      this._measurementDuration = undefined;
      this._minZoneSize = undefined;
      this._stabilizationDuration = undefined;
      this._warmupDuration = undefined;
      this._customRule.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._autoScaleType = value.autoScaleType;
      this._cpuUtilizationTarget = value.cpuUtilizationTarget;
      this._initialSize = value.initialSize;
      this._maxSize = value.maxSize;
      this._measurementDuration = value.measurementDuration;
      this._minZoneSize = value.minZoneSize;
      this._stabilizationDuration = value.stabilizationDuration;
      this._warmupDuration = value.warmupDuration;
      this._customRule.internalValue = value.customRule;
    }
  }

  // auto_scale_type - computed: false, optional: true, required: false
  private _autoScaleType?: string; 
  public get autoScaleType() {
    return this.getStringAttribute('auto_scale_type');
  }
  public set autoScaleType(value: string) {
    this._autoScaleType = value;
  }
  public resetAutoScaleType() {
    this._autoScaleType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoScaleTypeInput() {
    return this._autoScaleType;
  }

  // cpu_utilization_target - computed: false, optional: true, required: false
  private _cpuUtilizationTarget?: number; 
  public get cpuUtilizationTarget() {
    return this.getNumberAttribute('cpu_utilization_target');
  }
  public set cpuUtilizationTarget(value: number) {
    this._cpuUtilizationTarget = value;
  }
  public resetCpuUtilizationTarget() {
    this._cpuUtilizationTarget = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuUtilizationTargetInput() {
    return this._cpuUtilizationTarget;
  }

  // initial_size - computed: false, optional: false, required: true
  private _initialSize?: number; 
  public get initialSize() {
    return this.getNumberAttribute('initial_size');
  }
  public set initialSize(value: number) {
    this._initialSize = value;
  }
  // Temporarily expose input value. Use with caution.
  public get initialSizeInput() {
    return this._initialSize;
  }

  // max_size - computed: false, optional: true, required: false
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

  // measurement_duration - computed: false, optional: false, required: true
  private _measurementDuration?: number; 
  public get measurementDuration() {
    return this.getNumberAttribute('measurement_duration');
  }
  public set measurementDuration(value: number) {
    this._measurementDuration = value;
  }
  // Temporarily expose input value. Use with caution.
  public get measurementDurationInput() {
    return this._measurementDuration;
  }

  // min_zone_size - computed: false, optional: true, required: false
  private _minZoneSize?: number; 
  public get minZoneSize() {
    return this.getNumberAttribute('min_zone_size');
  }
  public set minZoneSize(value: number) {
    this._minZoneSize = value;
  }
  public resetMinZoneSize() {
    this._minZoneSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minZoneSizeInput() {
    return this._minZoneSize;
  }

  // stabilization_duration - computed: true, optional: true, required: false
  private _stabilizationDuration?: number; 
  public get stabilizationDuration() {
    return this.getNumberAttribute('stabilization_duration');
  }
  public set stabilizationDuration(value: number) {
    this._stabilizationDuration = value;
  }
  public resetStabilizationDuration() {
    this._stabilizationDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stabilizationDurationInput() {
    return this._stabilizationDuration;
  }

  // warmup_duration - computed: true, optional: true, required: false
  private _warmupDuration?: number; 
  public get warmupDuration() {
    return this.getNumberAttribute('warmup_duration');
  }
  public set warmupDuration(value: number) {
    this._warmupDuration = value;
  }
  public resetWarmupDuration() {
    this._warmupDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get warmupDurationInput() {
    return this._warmupDuration;
  }

  // custom_rule - computed: false, optional: true, required: false
  private _customRule = new ComputeInstanceGroupScalePolicyTestAutoScaleCustomRuleList(this, "custom_rule", false);
  public get customRule() {
    return this._customRule;
  }
  public putCustomRule(value: ComputeInstanceGroupScalePolicyTestAutoScaleCustomRule[] | cdktf.IResolvable) {
    this._customRule.internalValue = value;
  }
  public resetCustomRule() {
    this._customRule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customRuleInput() {
    return this._customRule.internalValue;
  }
}
export interface ComputeInstanceGroupScalePolicy {
  /**
  * auto_scale block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/compute_instance_group#auto_scale ComputeInstanceGroup#auto_scale}
  */
  readonly autoScale?: ComputeInstanceGroupScalePolicyAutoScale;
  /**
  * fixed_scale block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/compute_instance_group#fixed_scale ComputeInstanceGroup#fixed_scale}
  */
  readonly fixedScale?: ComputeInstanceGroupScalePolicyFixedScale;
  /**
  * test_auto_scale block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/compute_instance_group#test_auto_scale ComputeInstanceGroup#test_auto_scale}
  */
  readonly testAutoScale?: ComputeInstanceGroupScalePolicyTestAutoScale;
}

export function computeInstanceGroupScalePolicyToTerraform(struct?: ComputeInstanceGroupScalePolicyOutputReference | ComputeInstanceGroupScalePolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auto_scale: computeInstanceGroupScalePolicyAutoScaleToTerraform(struct!.autoScale),
    fixed_scale: computeInstanceGroupScalePolicyFixedScaleToTerraform(struct!.fixedScale),
    test_auto_scale: computeInstanceGroupScalePolicyTestAutoScaleToTerraform(struct!.testAutoScale),
  }
}


export function computeInstanceGroupScalePolicyToHclTerraform(struct?: ComputeInstanceGroupScalePolicyOutputReference | ComputeInstanceGroupScalePolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auto_scale: {
      value: computeInstanceGroupScalePolicyAutoScaleToHclTerraform(struct!.autoScale),
      isBlock: true,
      type: "list",
      storageClassType: "ComputeInstanceGroupScalePolicyAutoScaleList",
    },
    fixed_scale: {
      value: computeInstanceGroupScalePolicyFixedScaleToHclTerraform(struct!.fixedScale),
      isBlock: true,
      type: "list",
      storageClassType: "ComputeInstanceGroupScalePolicyFixedScaleList",
    },
    test_auto_scale: {
      value: computeInstanceGroupScalePolicyTestAutoScaleToHclTerraform(struct!.testAutoScale),
      isBlock: true,
      type: "list",
      storageClassType: "ComputeInstanceGroupScalePolicyTestAutoScaleList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComputeInstanceGroupScalePolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ComputeInstanceGroupScalePolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autoScale?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoScale = this._autoScale?.internalValue;
    }
    if (this._fixedScale?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fixedScale = this._fixedScale?.internalValue;
    }
    if (this._testAutoScale?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.testAutoScale = this._testAutoScale?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeInstanceGroupScalePolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._autoScale.internalValue = undefined;
      this._fixedScale.internalValue = undefined;
      this._testAutoScale.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._autoScale.internalValue = value.autoScale;
      this._fixedScale.internalValue = value.fixedScale;
      this._testAutoScale.internalValue = value.testAutoScale;
    }
  }

  // auto_scale - computed: false, optional: true, required: false
  private _autoScale = new ComputeInstanceGroupScalePolicyAutoScaleOutputReference(this, "auto_scale");
  public get autoScale() {
    return this._autoScale;
  }
  public putAutoScale(value: ComputeInstanceGroupScalePolicyAutoScale) {
    this._autoScale.internalValue = value;
  }
  public resetAutoScale() {
    this._autoScale.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoScaleInput() {
    return this._autoScale.internalValue;
  }

  // fixed_scale - computed: false, optional: true, required: false
  private _fixedScale = new ComputeInstanceGroupScalePolicyFixedScaleOutputReference(this, "fixed_scale");
  public get fixedScale() {
    return this._fixedScale;
  }
  public putFixedScale(value: ComputeInstanceGroupScalePolicyFixedScale) {
    this._fixedScale.internalValue = value;
  }
  public resetFixedScale() {
    this._fixedScale.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fixedScaleInput() {
    return this._fixedScale.internalValue;
  }

  // test_auto_scale - computed: false, optional: true, required: false
  private _testAutoScale = new ComputeInstanceGroupScalePolicyTestAutoScaleOutputReference(this, "test_auto_scale");
  public get testAutoScale() {
    return this._testAutoScale;
  }
  public putTestAutoScale(value: ComputeInstanceGroupScalePolicyTestAutoScale) {
    this._testAutoScale.internalValue = value;
  }
  public resetTestAutoScale() {
    this._testAutoScale.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get testAutoScaleInput() {
    return this._testAutoScale.internalValue;
  }
}
export interface ComputeInstanceGroupTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/compute_instance_group#create ComputeInstanceGroup#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/compute_instance_group#delete ComputeInstanceGroup#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/compute_instance_group#update ComputeInstanceGroup#update}
  */
  readonly update?: string;
}

export function computeInstanceGroupTimeoutsToTerraform(struct?: ComputeInstanceGroupTimeouts | cdktf.IResolvable): any {
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


export function computeInstanceGroupTimeoutsToHclTerraform(struct?: ComputeInstanceGroupTimeouts | cdktf.IResolvable): any {
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

export class ComputeInstanceGroupTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ComputeInstanceGroupTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ComputeInstanceGroupTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/compute_instance_group yandex_compute_instance_group}
*/
export class ComputeInstanceGroup extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "yandex_compute_instance_group";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ComputeInstanceGroup resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ComputeInstanceGroup to import
  * @param importFromId The id of the existing ComputeInstanceGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/compute_instance_group#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ComputeInstanceGroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "yandex_compute_instance_group", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/compute_instance_group yandex_compute_instance_group} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ComputeInstanceGroupConfig
  */
  public constructor(scope: Construct, id: string, config: ComputeInstanceGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'yandex_compute_instance_group',
      terraformGeneratorMetadata: {
        providerName: 'yandex',
        providerVersion: '0.177.0',
        providerVersionConstraint: '0.177.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._deletionProtection = config.deletionProtection;
    this._description = config.description;
    this._folderId = config.folderId;
    this._id = config.id;
    this._labels = config.labels;
    this._maxCheckingHealthDuration = config.maxCheckingHealthDuration;
    this._name = config.name;
    this._serviceAccountId = config.serviceAccountId;
    this._variables = config.variables;
    this._allocationPolicy.internalValue = config.allocationPolicy;
    this._applicationLoadBalancer.internalValue = config.applicationLoadBalancer;
    this._deployPolicy.internalValue = config.deployPolicy;
    this._healthCheck.internalValue = config.healthCheck;
    this._instanceTemplate.internalValue = config.instanceTemplate;
    this._loadBalancer.internalValue = config.loadBalancer;
    this._scalePolicy.internalValue = config.scalePolicy;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // deletion_protection - computed: false, optional: true, required: false
  private _deletionProtection?: boolean | cdktf.IResolvable; 
  public get deletionProtection() {
    return this.getBooleanAttribute('deletion_protection');
  }
  public set deletionProtection(value: boolean | cdktf.IResolvable) {
    this._deletionProtection = value;
  }
  public resetDeletionProtection() {
    this._deletionProtection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deletionProtectionInput() {
    return this._deletionProtection;
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

  // folder_id - computed: true, optional: true, required: false
  private _folderId?: string; 
  public get folderId() {
    return this.getStringAttribute('folder_id');
  }
  public set folderId(value: string) {
    this._folderId = value;
  }
  public resetFolderId() {
    this._folderId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get folderIdInput() {
    return this._folderId;
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

  // instances - computed: true, optional: false, required: false
  private _instances = new ComputeInstanceGroupInstancesList(this, "instances", false);
  public get instances() {
    return this._instances;
  }

  // labels - computed: false, optional: true, required: false
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

  // max_checking_health_duration - computed: false, optional: true, required: false
  private _maxCheckingHealthDuration?: number; 
  public get maxCheckingHealthDuration() {
    return this.getNumberAttribute('max_checking_health_duration');
  }
  public set maxCheckingHealthDuration(value: number) {
    this._maxCheckingHealthDuration = value;
  }
  public resetMaxCheckingHealthDuration() {
    this._maxCheckingHealthDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxCheckingHealthDurationInput() {
    return this._maxCheckingHealthDuration;
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

  // service_account_id - computed: false, optional: false, required: true
  private _serviceAccountId?: string; 
  public get serviceAccountId() {
    return this.getStringAttribute('service_account_id');
  }
  public set serviceAccountId(value: string) {
    this._serviceAccountId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountIdInput() {
    return this._serviceAccountId;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // variables - computed: false, optional: true, required: false
  private _variables?: { [key: string]: string }; 
  public get variables() {
    return this.getStringMapAttribute('variables');
  }
  public set variables(value: { [key: string]: string }) {
    this._variables = value;
  }
  public resetVariables() {
    this._variables = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get variablesInput() {
    return this._variables;
  }

  // allocation_policy - computed: false, optional: false, required: true
  private _allocationPolicy = new ComputeInstanceGroupAllocationPolicyOutputReference(this, "allocation_policy");
  public get allocationPolicy() {
    return this._allocationPolicy;
  }
  public putAllocationPolicy(value: ComputeInstanceGroupAllocationPolicy) {
    this._allocationPolicy.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get allocationPolicyInput() {
    return this._allocationPolicy.internalValue;
  }

  // application_load_balancer - computed: false, optional: true, required: false
  private _applicationLoadBalancer = new ComputeInstanceGroupApplicationLoadBalancerOutputReference(this, "application_load_balancer");
  public get applicationLoadBalancer() {
    return this._applicationLoadBalancer;
  }
  public putApplicationLoadBalancer(value: ComputeInstanceGroupApplicationLoadBalancer) {
    this._applicationLoadBalancer.internalValue = value;
  }
  public resetApplicationLoadBalancer() {
    this._applicationLoadBalancer.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationLoadBalancerInput() {
    return this._applicationLoadBalancer.internalValue;
  }

  // deploy_policy - computed: false, optional: false, required: true
  private _deployPolicy = new ComputeInstanceGroupDeployPolicyOutputReference(this, "deploy_policy");
  public get deployPolicy() {
    return this._deployPolicy;
  }
  public putDeployPolicy(value: ComputeInstanceGroupDeployPolicy) {
    this._deployPolicy.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get deployPolicyInput() {
    return this._deployPolicy.internalValue;
  }

  // health_check - computed: false, optional: true, required: false
  private _healthCheck = new ComputeInstanceGroupHealthCheckList(this, "health_check", false);
  public get healthCheck() {
    return this._healthCheck;
  }
  public putHealthCheck(value: ComputeInstanceGroupHealthCheck[] | cdktf.IResolvable) {
    this._healthCheck.internalValue = value;
  }
  public resetHealthCheck() {
    this._healthCheck.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthCheckInput() {
    return this._healthCheck.internalValue;
  }

  // instance_template - computed: false, optional: false, required: true
  private _instanceTemplate = new ComputeInstanceGroupInstanceTemplateOutputReference(this, "instance_template");
  public get instanceTemplate() {
    return this._instanceTemplate;
  }
  public putInstanceTemplate(value: ComputeInstanceGroupInstanceTemplate) {
    this._instanceTemplate.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceTemplateInput() {
    return this._instanceTemplate.internalValue;
  }

  // load_balancer - computed: false, optional: true, required: false
  private _loadBalancer = new ComputeInstanceGroupLoadBalancerOutputReference(this, "load_balancer");
  public get loadBalancer() {
    return this._loadBalancer;
  }
  public putLoadBalancer(value: ComputeInstanceGroupLoadBalancer) {
    this._loadBalancer.internalValue = value;
  }
  public resetLoadBalancer() {
    this._loadBalancer.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loadBalancerInput() {
    return this._loadBalancer.internalValue;
  }

  // scale_policy - computed: false, optional: false, required: true
  private _scalePolicy = new ComputeInstanceGroupScalePolicyOutputReference(this, "scale_policy");
  public get scalePolicy() {
    return this._scalePolicy;
  }
  public putScalePolicy(value: ComputeInstanceGroupScalePolicy) {
    this._scalePolicy.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scalePolicyInput() {
    return this._scalePolicy.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new ComputeInstanceGroupTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ComputeInstanceGroupTimeouts) {
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
      deletion_protection: cdktf.booleanToTerraform(this._deletionProtection),
      description: cdktf.stringToTerraform(this._description),
      folder_id: cdktf.stringToTerraform(this._folderId),
      id: cdktf.stringToTerraform(this._id),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      max_checking_health_duration: cdktf.numberToTerraform(this._maxCheckingHealthDuration),
      name: cdktf.stringToTerraform(this._name),
      service_account_id: cdktf.stringToTerraform(this._serviceAccountId),
      variables: cdktf.hashMapper(cdktf.stringToTerraform)(this._variables),
      allocation_policy: computeInstanceGroupAllocationPolicyToTerraform(this._allocationPolicy.internalValue),
      application_load_balancer: computeInstanceGroupApplicationLoadBalancerToTerraform(this._applicationLoadBalancer.internalValue),
      deploy_policy: computeInstanceGroupDeployPolicyToTerraform(this._deployPolicy.internalValue),
      health_check: cdktf.listMapper(computeInstanceGroupHealthCheckToTerraform, true)(this._healthCheck.internalValue),
      instance_template: computeInstanceGroupInstanceTemplateToTerraform(this._instanceTemplate.internalValue),
      load_balancer: computeInstanceGroupLoadBalancerToTerraform(this._loadBalancer.internalValue),
      scale_policy: computeInstanceGroupScalePolicyToTerraform(this._scalePolicy.internalValue),
      timeouts: computeInstanceGroupTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      deletion_protection: {
        value: cdktf.booleanToHclTerraform(this._deletionProtection),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      folder_id: {
        value: cdktf.stringToHclTerraform(this._folderId),
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
      labels: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._labels),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      max_checking_health_duration: {
        value: cdktf.numberToHclTerraform(this._maxCheckingHealthDuration),
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
      service_account_id: {
        value: cdktf.stringToHclTerraform(this._serviceAccountId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      variables: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._variables),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      allocation_policy: {
        value: computeInstanceGroupAllocationPolicyToHclTerraform(this._allocationPolicy.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ComputeInstanceGroupAllocationPolicyList",
      },
      application_load_balancer: {
        value: computeInstanceGroupApplicationLoadBalancerToHclTerraform(this._applicationLoadBalancer.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ComputeInstanceGroupApplicationLoadBalancerList",
      },
      deploy_policy: {
        value: computeInstanceGroupDeployPolicyToHclTerraform(this._deployPolicy.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ComputeInstanceGroupDeployPolicyList",
      },
      health_check: {
        value: cdktf.listMapperHcl(computeInstanceGroupHealthCheckToHclTerraform, true)(this._healthCheck.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ComputeInstanceGroupHealthCheckList",
      },
      instance_template: {
        value: computeInstanceGroupInstanceTemplateToHclTerraform(this._instanceTemplate.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ComputeInstanceGroupInstanceTemplateList",
      },
      load_balancer: {
        value: computeInstanceGroupLoadBalancerToHclTerraform(this._loadBalancer.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ComputeInstanceGroupLoadBalancerList",
      },
      scale_policy: {
        value: computeInstanceGroupScalePolicyToHclTerraform(this._scalePolicy.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ComputeInstanceGroupScalePolicyList",
      },
      timeouts: {
        value: computeInstanceGroupTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ComputeInstanceGroupTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
