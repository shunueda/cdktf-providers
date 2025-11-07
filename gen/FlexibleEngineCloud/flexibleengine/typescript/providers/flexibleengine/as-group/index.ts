// https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/as_group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AsGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/as_group#available_zones AsGroup#available_zones}
  */
  readonly availableZones?: string[];
  /**
  * The cooling duration, in seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/as_group#cool_down_time AsGroup#cool_down_time}
  */
  readonly coolDownTime?: number;
  /**
  * Whether to delete instances when they are removed from the AS group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/as_group#delete_instances AsGroup#delete_instances}
  */
  readonly deleteInstances?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/as_group#delete_publicip AsGroup#delete_publicip}
  */
  readonly deletePublicip?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/as_group#desire_instance_number AsGroup#desire_instance_number}
  */
  readonly desireInstanceNumber?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/as_group#force_delete AsGroup#force_delete}
  */
  readonly forceDelete?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/as_group#health_periodic_audit_method AsGroup#health_periodic_audit_method}
  */
  readonly healthPeriodicAuditMethod?: string;
  /**
  * The health check period for instances, in minutes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/as_group#health_periodic_audit_time AsGroup#health_periodic_audit_time}
  */
  readonly healthPeriodicAuditTime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/as_group#id AsGroup#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/as_group#instance_terminate_policy AsGroup#instance_terminate_policy}
  */
  readonly instanceTerminatePolicy?: string;
  /**
  * The system supports the binding of up to six ELB listeners, the IDs of which are separated using a comma.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/as_group#lb_listener_id AsGroup#lb_listener_id}
  */
  readonly lbListenerId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/as_group#max_instance_number AsGroup#max_instance_number}
  */
  readonly maxInstanceNumber?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/as_group#min_instance_number AsGroup#min_instance_number}
  */
  readonly minInstanceNumber?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/as_group#notifications AsGroup#notifications}
  */
  readonly notifications?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/as_group#region AsGroup#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/as_group#scaling_configuration_id AsGroup#scaling_configuration_id}
  */
  readonly scalingConfigurationId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/as_group#scaling_group_name AsGroup#scaling_group_name}
  */
  readonly scalingGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/as_group#tags AsGroup#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/as_group#vpc_id AsGroup#vpc_id}
  */
  readonly vpcId: string;
  /**
  * lbaas_listeners block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/as_group#lbaas_listeners AsGroup#lbaas_listeners}
  */
  readonly lbaasListeners?: AsGroupLbaasListeners[] | cdktf.IResolvable;
  /**
  * networks block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/as_group#networks AsGroup#networks}
  */
  readonly networks: AsGroupNetworks[] | cdktf.IResolvable;
  /**
  * security_groups block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/as_group#security_groups AsGroup#security_groups}
  */
  readonly securityGroups: AsGroupSecurityGroups[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/as_group#timeouts AsGroup#timeouts}
  */
  readonly timeouts?: AsGroupTimeouts;
}
export interface AsGroupLbaasListeners {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/as_group#pool_id AsGroup#pool_id}
  */
  readonly poolId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/as_group#protocol_port AsGroup#protocol_port}
  */
  readonly protocolPort: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/as_group#weight AsGroup#weight}
  */
  readonly weight?: number;
}

export function asGroupLbaasListenersToTerraform(struct?: AsGroupLbaasListeners | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    pool_id: cdktf.stringToTerraform(struct!.poolId),
    protocol_port: cdktf.numberToTerraform(struct!.protocolPort),
    weight: cdktf.numberToTerraform(struct!.weight),
  }
}


export function asGroupLbaasListenersToHclTerraform(struct?: AsGroupLbaasListeners | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    pool_id: {
      value: cdktf.stringToHclTerraform(struct!.poolId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    protocol_port: {
      value: cdktf.numberToHclTerraform(struct!.protocolPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    weight: {
      value: cdktf.numberToHclTerraform(struct!.weight),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AsGroupLbaasListenersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AsGroupLbaasListeners | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._poolId !== undefined) {
      hasAnyValues = true;
      internalValueResult.poolId = this._poolId;
    }
    if (this._protocolPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocolPort = this._protocolPort;
    }
    if (this._weight !== undefined) {
      hasAnyValues = true;
      internalValueResult.weight = this._weight;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AsGroupLbaasListeners | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._poolId = undefined;
      this._protocolPort = undefined;
      this._weight = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._poolId = value.poolId;
      this._protocolPort = value.protocolPort;
      this._weight = value.weight;
    }
  }

  // pool_id - computed: false, optional: false, required: true
  private _poolId?: string; 
  public get poolId() {
    return this.getStringAttribute('pool_id');
  }
  public set poolId(value: string) {
    this._poolId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get poolIdInput() {
    return this._poolId;
  }

  // protocol_port - computed: false, optional: false, required: true
  private _protocolPort?: number; 
  public get protocolPort() {
    return this.getNumberAttribute('protocol_port');
  }
  public set protocolPort(value: number) {
    this._protocolPort = value;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolPortInput() {
    return this._protocolPort;
  }

  // weight - computed: false, optional: true, required: false
  private _weight?: number; 
  public get weight() {
    return this.getNumberAttribute('weight');
  }
  public set weight(value: number) {
    this._weight = value;
  }
  public resetWeight() {
    this._weight = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weightInput() {
    return this._weight;
  }
}

export class AsGroupLbaasListenersList extends cdktf.ComplexList {
  public internalValue? : AsGroupLbaasListeners[] | cdktf.IResolvable

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
  public get(index: number): AsGroupLbaasListenersOutputReference {
    return new AsGroupLbaasListenersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AsGroupNetworks {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/as_group#id AsGroup#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}

export function asGroupNetworksToTerraform(struct?: AsGroupNetworks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function asGroupNetworksToHclTerraform(struct?: AsGroupNetworks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AsGroupNetworksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AsGroupNetworks | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AsGroupNetworks | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
    }
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }
}

export class AsGroupNetworksList extends cdktf.ComplexList {
  public internalValue? : AsGroupNetworks[] | cdktf.IResolvable

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
  public get(index: number): AsGroupNetworksOutputReference {
    return new AsGroupNetworksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AsGroupSecurityGroups {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/as_group#id AsGroup#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}

export function asGroupSecurityGroupsToTerraform(struct?: AsGroupSecurityGroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function asGroupSecurityGroupsToHclTerraform(struct?: AsGroupSecurityGroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AsGroupSecurityGroupsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AsGroupSecurityGroups | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AsGroupSecurityGroups | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
    }
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }
}

export class AsGroupSecurityGroupsList extends cdktf.ComplexList {
  public internalValue? : AsGroupSecurityGroups[] | cdktf.IResolvable

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
  public get(index: number): AsGroupSecurityGroupsOutputReference {
    return new AsGroupSecurityGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AsGroupTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/as_group#create AsGroup#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/as_group#delete AsGroup#delete}
  */
  readonly delete?: string;
}

export function asGroupTimeoutsToTerraform(struct?: AsGroupTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
  }
}


export function asGroupTimeoutsToHclTerraform(struct?: AsGroupTimeouts | cdktf.IResolvable): any {
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

export class AsGroupTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AsGroupTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: AsGroupTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/as_group flexibleengine_as_group}
*/
export class AsGroup extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "flexibleengine_as_group";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AsGroup resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AsGroup to import
  * @param importFromId The id of the existing AsGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/as_group#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AsGroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "flexibleengine_as_group", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/as_group flexibleengine_as_group} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AsGroupConfig
  */
  public constructor(scope: Construct, id: string, config: AsGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'flexibleengine_as_group',
      terraformGeneratorMetadata: {
        providerName: 'flexibleengine',
        providerVersion: '1.46.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._availableZones = config.availableZones;
    this._coolDownTime = config.coolDownTime;
    this._deleteInstances = config.deleteInstances;
    this._deletePublicip = config.deletePublicip;
    this._desireInstanceNumber = config.desireInstanceNumber;
    this._forceDelete = config.forceDelete;
    this._healthPeriodicAuditMethod = config.healthPeriodicAuditMethod;
    this._healthPeriodicAuditTime = config.healthPeriodicAuditTime;
    this._id = config.id;
    this._instanceTerminatePolicy = config.instanceTerminatePolicy;
    this._lbListenerId = config.lbListenerId;
    this._maxInstanceNumber = config.maxInstanceNumber;
    this._minInstanceNumber = config.minInstanceNumber;
    this._notifications = config.notifications;
    this._region = config.region;
    this._scalingConfigurationId = config.scalingConfigurationId;
    this._scalingGroupName = config.scalingGroupName;
    this._tags = config.tags;
    this._vpcId = config.vpcId;
    this._lbaasListeners.internalValue = config.lbaasListeners;
    this._networks.internalValue = config.networks;
    this._securityGroups.internalValue = config.securityGroups;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // available_zones - computed: false, optional: true, required: false
  private _availableZones?: string[]; 
  public get availableZones() {
    return this.getListAttribute('available_zones');
  }
  public set availableZones(value: string[]) {
    this._availableZones = value;
  }
  public resetAvailableZones() {
    this._availableZones = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get availableZonesInput() {
    return this._availableZones;
  }

  // cool_down_time - computed: false, optional: true, required: false
  private _coolDownTime?: number; 
  public get coolDownTime() {
    return this.getNumberAttribute('cool_down_time');
  }
  public set coolDownTime(value: number) {
    this._coolDownTime = value;
  }
  public resetCoolDownTime() {
    this._coolDownTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get coolDownTimeInput() {
    return this._coolDownTime;
  }

  // current_instance_number - computed: true, optional: false, required: false
  public get currentInstanceNumber() {
    return this.getNumberAttribute('current_instance_number');
  }

  // delete_instances - computed: false, optional: true, required: false
  private _deleteInstances?: string; 
  public get deleteInstances() {
    return this.getStringAttribute('delete_instances');
  }
  public set deleteInstances(value: string) {
    this._deleteInstances = value;
  }
  public resetDeleteInstances() {
    this._deleteInstances = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInstancesInput() {
    return this._deleteInstances;
  }

  // delete_publicip - computed: false, optional: true, required: false
  private _deletePublicip?: boolean | cdktf.IResolvable; 
  public get deletePublicip() {
    return this.getBooleanAttribute('delete_publicip');
  }
  public set deletePublicip(value: boolean | cdktf.IResolvable) {
    this._deletePublicip = value;
  }
  public resetDeletePublicip() {
    this._deletePublicip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deletePublicipInput() {
    return this._deletePublicip;
  }

  // desire_instance_number - computed: true, optional: true, required: false
  private _desireInstanceNumber?: number; 
  public get desireInstanceNumber() {
    return this.getNumberAttribute('desire_instance_number');
  }
  public set desireInstanceNumber(value: number) {
    this._desireInstanceNumber = value;
  }
  public resetDesireInstanceNumber() {
    this._desireInstanceNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get desireInstanceNumberInput() {
    return this._desireInstanceNumber;
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

  // health_periodic_audit_method - computed: false, optional: true, required: false
  private _healthPeriodicAuditMethod?: string; 
  public get healthPeriodicAuditMethod() {
    return this.getStringAttribute('health_periodic_audit_method');
  }
  public set healthPeriodicAuditMethod(value: string) {
    this._healthPeriodicAuditMethod = value;
  }
  public resetHealthPeriodicAuditMethod() {
    this._healthPeriodicAuditMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthPeriodicAuditMethodInput() {
    return this._healthPeriodicAuditMethod;
  }

  // health_periodic_audit_time - computed: false, optional: true, required: false
  private _healthPeriodicAuditTime?: number; 
  public get healthPeriodicAuditTime() {
    return this.getNumberAttribute('health_periodic_audit_time');
  }
  public set healthPeriodicAuditTime(value: number) {
    this._healthPeriodicAuditTime = value;
  }
  public resetHealthPeriodicAuditTime() {
    this._healthPeriodicAuditTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthPeriodicAuditTimeInput() {
    return this._healthPeriodicAuditTime;
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

  // instance_terminate_policy - computed: false, optional: true, required: false
  private _instanceTerminatePolicy?: string; 
  public get instanceTerminatePolicy() {
    return this.getStringAttribute('instance_terminate_policy');
  }
  public set instanceTerminatePolicy(value: string) {
    this._instanceTerminatePolicy = value;
  }
  public resetInstanceTerminatePolicy() {
    this._instanceTerminatePolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceTerminatePolicyInput() {
    return this._instanceTerminatePolicy;
  }

  // instances - computed: true, optional: false, required: false
  public get instances() {
    return this.getListAttribute('instances');
  }

  // lb_listener_id - computed: false, optional: true, required: false
  private _lbListenerId?: string; 
  public get lbListenerId() {
    return this.getStringAttribute('lb_listener_id');
  }
  public set lbListenerId(value: string) {
    this._lbListenerId = value;
  }
  public resetLbListenerId() {
    this._lbListenerId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lbListenerIdInput() {
    return this._lbListenerId;
  }

  // max_instance_number - computed: false, optional: true, required: false
  private _maxInstanceNumber?: number; 
  public get maxInstanceNumber() {
    return this.getNumberAttribute('max_instance_number');
  }
  public set maxInstanceNumber(value: number) {
    this._maxInstanceNumber = value;
  }
  public resetMaxInstanceNumber() {
    this._maxInstanceNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxInstanceNumberInput() {
    return this._maxInstanceNumber;
  }

  // min_instance_number - computed: false, optional: true, required: false
  private _minInstanceNumber?: number; 
  public get minInstanceNumber() {
    return this.getNumberAttribute('min_instance_number');
  }
  public set minInstanceNumber(value: number) {
    this._minInstanceNumber = value;
  }
  public resetMinInstanceNumber() {
    this._minInstanceNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minInstanceNumberInput() {
    return this._minInstanceNumber;
  }

  // notifications - computed: false, optional: true, required: false
  private _notifications?: string[]; 
  public get notifications() {
    return this.getListAttribute('notifications');
  }
  public set notifications(value: string[]) {
    this._notifications = value;
  }
  public resetNotifications() {
    this._notifications = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationsInput() {
    return this._notifications;
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

  // scaling_configuration_id - computed: true, optional: true, required: false
  private _scalingConfigurationId?: string; 
  public get scalingConfigurationId() {
    return this.getStringAttribute('scaling_configuration_id');
  }
  public set scalingConfigurationId(value: string) {
    this._scalingConfigurationId = value;
  }
  public resetScalingConfigurationId() {
    this._scalingConfigurationId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scalingConfigurationIdInput() {
    return this._scalingConfigurationId;
  }

  // scaling_group_name - computed: false, optional: false, required: true
  private _scalingGroupName?: string; 
  public get scalingGroupName() {
    return this.getStringAttribute('scaling_group_name');
  }
  public set scalingGroupName(value: string) {
    this._scalingGroupName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scalingGroupNameInput() {
    return this._scalingGroupName;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // vpc_id - computed: false, optional: false, required: true
  private _vpcId?: string; 
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }
  public set vpcId(value: string) {
    this._vpcId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcIdInput() {
    return this._vpcId;
  }

  // lbaas_listeners - computed: false, optional: true, required: false
  private _lbaasListeners = new AsGroupLbaasListenersList(this, "lbaas_listeners", false);
  public get lbaasListeners() {
    return this._lbaasListeners;
  }
  public putLbaasListeners(value: AsGroupLbaasListeners[] | cdktf.IResolvable) {
    this._lbaasListeners.internalValue = value;
  }
  public resetLbaasListeners() {
    this._lbaasListeners.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lbaasListenersInput() {
    return this._lbaasListeners.internalValue;
  }

  // networks - computed: false, optional: false, required: true
  private _networks = new AsGroupNetworksList(this, "networks", false);
  public get networks() {
    return this._networks;
  }
  public putNetworks(value: AsGroupNetworks[] | cdktf.IResolvable) {
    this._networks.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networksInput() {
    return this._networks.internalValue;
  }

  // security_groups - computed: false, optional: false, required: true
  private _securityGroups = new AsGroupSecurityGroupsList(this, "security_groups", false);
  public get securityGroups() {
    return this._securityGroups;
  }
  public putSecurityGroups(value: AsGroupSecurityGroups[] | cdktf.IResolvable) {
    this._securityGroups.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupsInput() {
    return this._securityGroups.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new AsGroupTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: AsGroupTimeouts) {
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
      available_zones: cdktf.listMapper(cdktf.stringToTerraform, false)(this._availableZones),
      cool_down_time: cdktf.numberToTerraform(this._coolDownTime),
      delete_instances: cdktf.stringToTerraform(this._deleteInstances),
      delete_publicip: cdktf.booleanToTerraform(this._deletePublicip),
      desire_instance_number: cdktf.numberToTerraform(this._desireInstanceNumber),
      force_delete: cdktf.booleanToTerraform(this._forceDelete),
      health_periodic_audit_method: cdktf.stringToTerraform(this._healthPeriodicAuditMethod),
      health_periodic_audit_time: cdktf.numberToTerraform(this._healthPeriodicAuditTime),
      id: cdktf.stringToTerraform(this._id),
      instance_terminate_policy: cdktf.stringToTerraform(this._instanceTerminatePolicy),
      lb_listener_id: cdktf.stringToTerraform(this._lbListenerId),
      max_instance_number: cdktf.numberToTerraform(this._maxInstanceNumber),
      min_instance_number: cdktf.numberToTerraform(this._minInstanceNumber),
      notifications: cdktf.listMapper(cdktf.stringToTerraform, false)(this._notifications),
      region: cdktf.stringToTerraform(this._region),
      scaling_configuration_id: cdktf.stringToTerraform(this._scalingConfigurationId),
      scaling_group_name: cdktf.stringToTerraform(this._scalingGroupName),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      vpc_id: cdktf.stringToTerraform(this._vpcId),
      lbaas_listeners: cdktf.listMapper(asGroupLbaasListenersToTerraform, true)(this._lbaasListeners.internalValue),
      networks: cdktf.listMapper(asGroupNetworksToTerraform, true)(this._networks.internalValue),
      security_groups: cdktf.listMapper(asGroupSecurityGroupsToTerraform, true)(this._securityGroups.internalValue),
      timeouts: asGroupTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      available_zones: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._availableZones),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      cool_down_time: {
        value: cdktf.numberToHclTerraform(this._coolDownTime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      delete_instances: {
        value: cdktf.stringToHclTerraform(this._deleteInstances),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      delete_publicip: {
        value: cdktf.booleanToHclTerraform(this._deletePublicip),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      desire_instance_number: {
        value: cdktf.numberToHclTerraform(this._desireInstanceNumber),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      force_delete: {
        value: cdktf.booleanToHclTerraform(this._forceDelete),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      health_periodic_audit_method: {
        value: cdktf.stringToHclTerraform(this._healthPeriodicAuditMethod),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      health_periodic_audit_time: {
        value: cdktf.numberToHclTerraform(this._healthPeriodicAuditTime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      instance_terminate_policy: {
        value: cdktf.stringToHclTerraform(this._instanceTerminatePolicy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      lb_listener_id: {
        value: cdktf.stringToHclTerraform(this._lbListenerId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      max_instance_number: {
        value: cdktf.numberToHclTerraform(this._maxInstanceNumber),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      min_instance_number: {
        value: cdktf.numberToHclTerraform(this._minInstanceNumber),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      notifications: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._notifications),
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
      scaling_configuration_id: {
        value: cdktf.stringToHclTerraform(this._scalingConfigurationId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scaling_group_name: {
        value: cdktf.stringToHclTerraform(this._scalingGroupName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      vpc_id: {
        value: cdktf.stringToHclTerraform(this._vpcId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      lbaas_listeners: {
        value: cdktf.listMapperHcl(asGroupLbaasListenersToHclTerraform, true)(this._lbaasListeners.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AsGroupLbaasListenersList",
      },
      networks: {
        value: cdktf.listMapperHcl(asGroupNetworksToHclTerraform, true)(this._networks.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AsGroupNetworksList",
      },
      security_groups: {
        value: cdktf.listMapperHcl(asGroupSecurityGroupsToHclTerraform, true)(this._securityGroups.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AsGroupSecurityGroupsList",
      },
      timeouts: {
        value: asGroupTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AsGroupTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
