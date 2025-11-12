// https://registry.terraform.io/providers/microsoft/fabric/1.6.0/docs/resources/gateway
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GatewayConfig extends cdktf.TerraformMetaArguments {
  /**
  * The capacity ID. If the value of [`type`](#type) attribute is `VirtualNetwork` this attribute is **REQUIRED**. If the value of [`type`](#type) attribute is one of `OnPremises` or `OnPremisesPersonal` this attribute is **NULL**.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/fabric/1.6.0/docs/resources/gateway#capacity_id Gateway#capacity_id}
  */
  readonly capacityId?: string;
  /**
  * The Gateway display name. String length must be at most 200. If the value of [`type`](#type) attribute is one of `OnPremises` or `VirtualNetwork` this attribute is **REQUIRED**. If the value of [`type`](#type) attribute is `OnPremisesPersonal` this attribute is **NULL**.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/fabric/1.6.0/docs/resources/gateway#display_name Gateway#display_name}
  */
  readonly displayName?: string;
  /**
  * The inactivity minutes before sleep. Value must be one of : `30`, `60`, `90`, `120`, `150`, `240`, `360`, `480`, `720`, `1440`. If the value of [`type`](#type) attribute is `VirtualNetwork` this attribute is **REQUIRED**. If the value of [`type`](#type) attribute is one of `OnPremises` or `OnPremisesPersonal` this attribute is **NULL**.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/fabric/1.6.0/docs/resources/gateway#inactivity_minutes_before_sleep Gateway#inactivity_minutes_before_sleep}
  */
  readonly inactivityMinutesBeforeSleep?: number;
  /**
  * The number of member gateways. Value must be between 1 and 7. If the value of [`type`](#type) attribute is `VirtualNetwork` this attribute is **REQUIRED**. If the value of [`type`](#type) attribute is one of `OnPremises` or `OnPremisesPersonal` this attribute is **NULL**.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/fabric/1.6.0/docs/resources/gateway#number_of_member_gateways Gateway#number_of_member_gateways}
  */
  readonly numberOfMemberGateways?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/fabric/1.6.0/docs/resources/gateway#timeouts Gateway#timeouts}
  */
  readonly timeouts?: GatewayTimeouts;
  /**
  * <i style="color:red;font-weight: bold">(ForceNew)</i> The Gateway type. Value must be one of : `VirtualNetwork`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/fabric/1.6.0/docs/resources/gateway#type Gateway#type}
  */
  readonly type: string;
  /**
  * <i style="color:red;font-weight: bold">(ForceNew)</i> The Azure virtual network resource. If the value of [`type`](#type) attribute is `VirtualNetwork` this attribute is **REQUIRED**. If the value of [`type`](#type) attribute is one of `OnPremises` or `OnPremisesPersonal` this attribute is **NULL**.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/fabric/1.6.0/docs/resources/gateway#virtual_network_azure_resource Gateway#virtual_network_azure_resource}
  */
  readonly virtualNetworkAzureResource?: GatewayVirtualNetworkAzureResource;
}
export interface GatewayPublicKey {
}

export function gatewayPublicKeyToTerraform(struct?: GatewayPublicKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function gatewayPublicKeyToHclTerraform(struct?: GatewayPublicKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GatewayPublicKeyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayPublicKey | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GatewayPublicKey | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // exponent - computed: true, optional: false, required: false
  public get exponent() {
    return this.getStringAttribute('exponent');
  }

  // modulus - computed: true, optional: false, required: false
  public get modulus() {
    return this.getStringAttribute('modulus');
  }
}
export interface GatewayTimeouts {
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/fabric/1.6.0/docs/resources/gateway#create Gateway#create}
  */
  readonly create?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/fabric/1.6.0/docs/resources/gateway#delete Gateway#delete}
  */
  readonly delete?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Read operations occur during any refresh or planning operation when refresh is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/fabric/1.6.0/docs/resources/gateway#read Gateway#read}
  */
  readonly read?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/fabric/1.6.0/docs/resources/gateway#update Gateway#update}
  */
  readonly update?: string;
}

export function gatewayTimeoutsToTerraform(struct?: GatewayTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function gatewayTimeoutsToHclTerraform(struct?: GatewayTimeouts | cdktf.IResolvable): any {
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

export class GatewayTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayTimeouts | cdktf.IResolvable | undefined {
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
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GatewayTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._read = undefined;
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
      this._read = value.read;
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
export interface GatewayVirtualNetworkAzureResource {
  /**
  * The resource group name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/fabric/1.6.0/docs/resources/gateway#resource_group_name Gateway#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * The subnet name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/fabric/1.6.0/docs/resources/gateway#subnet_name Gateway#subnet_name}
  */
  readonly subnetName: string;
  /**
  * The subscription ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/fabric/1.6.0/docs/resources/gateway#subscription_id Gateway#subscription_id}
  */
  readonly subscriptionId: string;
  /**
  * The virtual network name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/fabric/1.6.0/docs/resources/gateway#virtual_network_name Gateway#virtual_network_name}
  */
  readonly virtualNetworkName: string;
}

export function gatewayVirtualNetworkAzureResourceToTerraform(struct?: GatewayVirtualNetworkAzureResource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    resource_group_name: cdktf.stringToTerraform(struct!.resourceGroupName),
    subnet_name: cdktf.stringToTerraform(struct!.subnetName),
    subscription_id: cdktf.stringToTerraform(struct!.subscriptionId),
    virtual_network_name: cdktf.stringToTerraform(struct!.virtualNetworkName),
  }
}


export function gatewayVirtualNetworkAzureResourceToHclTerraform(struct?: GatewayVirtualNetworkAzureResource | cdktf.IResolvable): any {
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
    subnet_name: {
      value: cdktf.stringToHclTerraform(struct!.subnetName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subscription_id: {
      value: cdktf.stringToHclTerraform(struct!.subscriptionId),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GatewayVirtualNetworkAzureResourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayVirtualNetworkAzureResource | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._resourceGroupName !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceGroupName = this._resourceGroupName;
    }
    if (this._subnetName !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetName = this._subnetName;
    }
    if (this._subscriptionId !== undefined) {
      hasAnyValues = true;
      internalValueResult.subscriptionId = this._subscriptionId;
    }
    if (this._virtualNetworkName !== undefined) {
      hasAnyValues = true;
      internalValueResult.virtualNetworkName = this._virtualNetworkName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GatewayVirtualNetworkAzureResource | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._resourceGroupName = undefined;
      this._subnetName = undefined;
      this._subscriptionId = undefined;
      this._virtualNetworkName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._resourceGroupName = value.resourceGroupName;
      this._subnetName = value.subnetName;
      this._subscriptionId = value.subscriptionId;
      this._virtualNetworkName = value.virtualNetworkName;
    }
  }

  // resource_group_name - computed: true, optional: false, required: true
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

  // subnet_name - computed: true, optional: false, required: true
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

  // subscription_id - computed: true, optional: false, required: true
  private _subscriptionId?: string; 
  public get subscriptionId() {
    return this.getStringAttribute('subscription_id');
  }
  public set subscriptionId(value: string) {
    this._subscriptionId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subscriptionIdInput() {
    return this._subscriptionId;
  }

  // virtual_network_name - computed: true, optional: false, required: true
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
}

/**
* Represents a {@link https://registry.terraform.io/providers/microsoft/fabric/1.6.0/docs/resources/gateway fabric_gateway}
*/
export class Gateway extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fabric_gateway";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Gateway resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Gateway to import
  * @param importFromId The id of the existing Gateway that should be imported. Refer to the {@link https://registry.terraform.io/providers/microsoft/fabric/1.6.0/docs/resources/gateway#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Gateway to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fabric_gateway", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/microsoft/fabric/1.6.0/docs/resources/gateway fabric_gateway} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GatewayConfig
  */
  public constructor(scope: Construct, id: string, config: GatewayConfig) {
    super(scope, id, {
      terraformResourceType: 'fabric_gateway',
      terraformGeneratorMetadata: {
        providerName: 'fabric',
        providerVersion: '1.6.0',
        providerVersionConstraint: '1.6.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._capacityId = config.capacityId;
    this._displayName = config.displayName;
    this._inactivityMinutesBeforeSleep = config.inactivityMinutesBeforeSleep;
    this._numberOfMemberGateways = config.numberOfMemberGateways;
    this._timeouts.internalValue = config.timeouts;
    this._type = config.type;
    this._virtualNetworkAzureResource.internalValue = config.virtualNetworkAzureResource;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allow_cloud_connection_refresh - computed: true, optional: false, required: false
  public get allowCloudConnectionRefresh() {
    return this.getBooleanAttribute('allow_cloud_connection_refresh');
  }

  // allow_custom_connectors - computed: true, optional: false, required: false
  public get allowCustomConnectors() {
    return this.getBooleanAttribute('allow_custom_connectors');
  }

  // capacity_id - computed: true, optional: true, required: false
  private _capacityId?: string; 
  public get capacityId() {
    return this.getStringAttribute('capacity_id');
  }
  public set capacityId(value: string) {
    this._capacityId = value;
  }
  public resetCapacityId() {
    this._capacityId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get capacityIdInput() {
    return this._capacityId;
  }

  // display_name - computed: true, optional: true, required: false
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // inactivity_minutes_before_sleep - computed: true, optional: true, required: false
  private _inactivityMinutesBeforeSleep?: number; 
  public get inactivityMinutesBeforeSleep() {
    return this.getNumberAttribute('inactivity_minutes_before_sleep');
  }
  public set inactivityMinutesBeforeSleep(value: number) {
    this._inactivityMinutesBeforeSleep = value;
  }
  public resetInactivityMinutesBeforeSleep() {
    this._inactivityMinutesBeforeSleep = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inactivityMinutesBeforeSleepInput() {
    return this._inactivityMinutesBeforeSleep;
  }

  // load_balancing_setting - computed: true, optional: false, required: false
  public get loadBalancingSetting() {
    return this.getStringAttribute('load_balancing_setting');
  }

  // number_of_member_gateways - computed: true, optional: true, required: false
  private _numberOfMemberGateways?: number; 
  public get numberOfMemberGateways() {
    return this.getNumberAttribute('number_of_member_gateways');
  }
  public set numberOfMemberGateways(value: number) {
    this._numberOfMemberGateways = value;
  }
  public resetNumberOfMemberGateways() {
    this._numberOfMemberGateways = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numberOfMemberGatewaysInput() {
    return this._numberOfMemberGateways;
  }

  // public_key - computed: true, optional: false, required: false
  private _publicKey = new GatewayPublicKeyOutputReference(this, "public_key");
  public get publicKey() {
    return this._publicKey;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new GatewayTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: GatewayTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
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

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getStringAttribute('version');
  }

  // virtual_network_azure_resource - computed: true, optional: true, required: false
  private _virtualNetworkAzureResource = new GatewayVirtualNetworkAzureResourceOutputReference(this, "virtual_network_azure_resource");
  public get virtualNetworkAzureResource() {
    return this._virtualNetworkAzureResource;
  }
  public putVirtualNetworkAzureResource(value: GatewayVirtualNetworkAzureResource) {
    this._virtualNetworkAzureResource.internalValue = value;
  }
  public resetVirtualNetworkAzureResource() {
    this._virtualNetworkAzureResource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualNetworkAzureResourceInput() {
    return this._virtualNetworkAzureResource.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      capacity_id: cdktf.stringToTerraform(this._capacityId),
      display_name: cdktf.stringToTerraform(this._displayName),
      inactivity_minutes_before_sleep: cdktf.numberToTerraform(this._inactivityMinutesBeforeSleep),
      number_of_member_gateways: cdktf.numberToTerraform(this._numberOfMemberGateways),
      timeouts: gatewayTimeoutsToTerraform(this._timeouts.internalValue),
      type: cdktf.stringToTerraform(this._type),
      virtual_network_azure_resource: gatewayVirtualNetworkAzureResourceToTerraform(this._virtualNetworkAzureResource.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      capacity_id: {
        value: cdktf.stringToHclTerraform(this._capacityId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      display_name: {
        value: cdktf.stringToHclTerraform(this._displayName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      inactivity_minutes_before_sleep: {
        value: cdktf.numberToHclTerraform(this._inactivityMinutesBeforeSleep),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      number_of_member_gateways: {
        value: cdktf.numberToHclTerraform(this._numberOfMemberGateways),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      timeouts: {
        value: gatewayTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GatewayTimeouts",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      virtual_network_azure_resource: {
        value: gatewayVirtualNetworkAzureResourceToHclTerraform(this._virtualNetworkAzureResource.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GatewayVirtualNetworkAzureResource",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
