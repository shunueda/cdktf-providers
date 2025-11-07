// https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/resources/gateway
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GatewayConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/resources/gateway#activated Gateway#activated}
  */
  readonly activated?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/resources/gateway#date_created Gateway#date_created}
  */
  readonly dateCreated?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/resources/gateway#date_modified Gateway#date_modified}
  */
  readonly dateModified?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/resources/gateway#description Gateway#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/resources/gateway#id Gateway#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/resources/gateway#model Gateway#model}
  */
  readonly model?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/resources/gateway#name Gateway#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/resources/gateway#psk Gateway#psk}
  */
  readonly psk?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/resources/gateway#public_key Gateway#public_key}
  */
  readonly publicKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/resources/gateway#role Gateway#role}
  */
  readonly role?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/resources/gateway#serialnumber Gateway#serialnumber}
  */
  readonly serialnumber?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/resources/gateway#swmanifest Gateway#swmanifest}
  */
  readonly swmanifest?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/resources/gateway#swversion Gateway#swversion}
  */
  readonly swversion?: string;
  /**
  * assigned_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/resources/gateway#assigned_policy Gateway#assigned_policy}
  */
  readonly assignedPolicy?: GatewayAssignedPolicy;
  /**
  * bgp_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/resources/gateway#bgp_configuration Gateway#bgp_configuration}
  */
  readonly bgpConfiguration?: GatewayBgpConfiguration[] | cdktf.IResolvable;
  /**
  * created_by block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/resources/gateway#created_by Gateway#created_by}
  */
  readonly createdBy?: GatewayCreatedBy;
  /**
  * interfaces block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/resources/gateway#interfaces Gateway#interfaces}
  */
  readonly interfaces?: GatewayInterfaces[] | cdktf.IResolvable;
  /**
  * modified_by block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/resources/gateway#modified_by Gateway#modified_by}
  */
  readonly modifiedBy?: GatewayModifiedBy;
  /**
  * mqtt_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/resources/gateway#mqtt_configuration Gateway#mqtt_configuration}
  */
  readonly mqttConfiguration?: GatewayMqttConfiguration;
  /**
  * one2_one_nat_rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/resources/gateway#one2_one_nat_rules Gateway#one2_one_nat_rules}
  */
  readonly one2OneNatRules?: GatewayOne2OneNatRules[] | cdktf.IResolvable;
  /**
  * overlay_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/resources/gateway#overlay_configuration Gateway#overlay_configuration}
  */
  readonly overlayConfiguration?: GatewayOverlayConfiguration;
  /**
  * port_forwarding_nat_rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/resources/gateway#port_forwarding_nat_rules Gateway#port_forwarding_nat_rules}
  */
  readonly portForwardingNatRules?: GatewayPortForwardingNatRules[] | cdktf.IResolvable;
  /**
  * static_routes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/resources/gateway#static_routes Gateway#static_routes}
  */
  readonly staticRoutes?: GatewayStaticRoutes[] | cdktf.IResolvable;
}
export interface GatewayAssignedPolicy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/resources/gateway#id Gateway#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/resources/gateway#name Gateway#name}
  */
  readonly name?: string;
}

export function gatewayAssignedPolicyToTerraform(struct?: GatewayAssignedPolicyOutputReference | GatewayAssignedPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function gatewayAssignedPolicyToHclTerraform(struct?: GatewayAssignedPolicyOutputReference | GatewayAssignedPolicy): any {
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

export class GatewayAssignedPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GatewayAssignedPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GatewayAssignedPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._id = undefined;
      this._name = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._id = value.id;
      this._name = value.name;
    }
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
}
export interface GatewayBgpConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/resources/gateway#bfd_interval Gateway#bfd_interval}
  */
  readonly bfdInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/resources/gateway#bfd_multiplier Gateway#bfd_multiplier}
  */
  readonly bfdMultiplier?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/resources/gateway#bfd_recv_interval Gateway#bfd_recv_interval}
  */
  readonly bfdRecvInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/resources/gateway#is_bfd_enabled Gateway#is_bfd_enabled}
  */
  readonly isBfdEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/resources/gateway#local_as Gateway#local_as}
  */
  readonly localAs?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/resources/gateway#name Gateway#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/resources/gateway#neighbor Gateway#neighbor}
  */
  readonly neighbor?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/resources/gateway#remote_as Gateway#remote_as}
  */
  readonly remoteAs?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/resources/gateway#router_id Gateway#router_id}
  */
  readonly routerId?: string;
}

export function gatewayBgpConfigurationToTerraform(struct?: GatewayBgpConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bfd_interval: cdktf.numberToTerraform(struct!.bfdInterval),
    bfd_multiplier: cdktf.numberToTerraform(struct!.bfdMultiplier),
    bfd_recv_interval: cdktf.numberToTerraform(struct!.bfdRecvInterval),
    is_bfd_enabled: cdktf.booleanToTerraform(struct!.isBfdEnabled),
    local_as: cdktf.numberToTerraform(struct!.localAs),
    name: cdktf.stringToTerraform(struct!.name),
    neighbor: cdktf.stringToTerraform(struct!.neighbor),
    remote_as: cdktf.numberToTerraform(struct!.remoteAs),
    router_id: cdktf.stringToTerraform(struct!.routerId),
  }
}


export function gatewayBgpConfigurationToHclTerraform(struct?: GatewayBgpConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bfd_interval: {
      value: cdktf.numberToHclTerraform(struct!.bfdInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    bfd_multiplier: {
      value: cdktf.numberToHclTerraform(struct!.bfdMultiplier),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    bfd_recv_interval: {
      value: cdktf.numberToHclTerraform(struct!.bfdRecvInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    is_bfd_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.isBfdEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    local_as: {
      value: cdktf.numberToHclTerraform(struct!.localAs),
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
    neighbor: {
      value: cdktf.stringToHclTerraform(struct!.neighbor),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    remote_as: {
      value: cdktf.numberToHclTerraform(struct!.remoteAs),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    router_id: {
      value: cdktf.stringToHclTerraform(struct!.routerId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GatewayBgpConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GatewayBgpConfiguration | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bfdInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.bfdInterval = this._bfdInterval;
    }
    if (this._bfdMultiplier !== undefined) {
      hasAnyValues = true;
      internalValueResult.bfdMultiplier = this._bfdMultiplier;
    }
    if (this._bfdRecvInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.bfdRecvInterval = this._bfdRecvInterval;
    }
    if (this._isBfdEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.isBfdEnabled = this._isBfdEnabled;
    }
    if (this._localAs !== undefined) {
      hasAnyValues = true;
      internalValueResult.localAs = this._localAs;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._neighbor !== undefined) {
      hasAnyValues = true;
      internalValueResult.neighbor = this._neighbor;
    }
    if (this._remoteAs !== undefined) {
      hasAnyValues = true;
      internalValueResult.remoteAs = this._remoteAs;
    }
    if (this._routerId !== undefined) {
      hasAnyValues = true;
      internalValueResult.routerId = this._routerId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GatewayBgpConfiguration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bfdInterval = undefined;
      this._bfdMultiplier = undefined;
      this._bfdRecvInterval = undefined;
      this._isBfdEnabled = undefined;
      this._localAs = undefined;
      this._name = undefined;
      this._neighbor = undefined;
      this._remoteAs = undefined;
      this._routerId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bfdInterval = value.bfdInterval;
      this._bfdMultiplier = value.bfdMultiplier;
      this._bfdRecvInterval = value.bfdRecvInterval;
      this._isBfdEnabled = value.isBfdEnabled;
      this._localAs = value.localAs;
      this._name = value.name;
      this._neighbor = value.neighbor;
      this._remoteAs = value.remoteAs;
      this._routerId = value.routerId;
    }
  }

  // bfd_interval - computed: true, optional: true, required: false
  private _bfdInterval?: number; 
  public get bfdInterval() {
    return this.getNumberAttribute('bfd_interval');
  }
  public set bfdInterval(value: number) {
    this._bfdInterval = value;
  }
  public resetBfdInterval() {
    this._bfdInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bfdIntervalInput() {
    return this._bfdInterval;
  }

  // bfd_multiplier - computed: true, optional: true, required: false
  private _bfdMultiplier?: number; 
  public get bfdMultiplier() {
    return this.getNumberAttribute('bfd_multiplier');
  }
  public set bfdMultiplier(value: number) {
    this._bfdMultiplier = value;
  }
  public resetBfdMultiplier() {
    this._bfdMultiplier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bfdMultiplierInput() {
    return this._bfdMultiplier;
  }

  // bfd_recv_interval - computed: true, optional: true, required: false
  private _bfdRecvInterval?: number; 
  public get bfdRecvInterval() {
    return this.getNumberAttribute('bfd_recv_interval');
  }
  public set bfdRecvInterval(value: number) {
    this._bfdRecvInterval = value;
  }
  public resetBfdRecvInterval() {
    this._bfdRecvInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bfdRecvIntervalInput() {
    return this._bfdRecvInterval;
  }

  // is_bfd_enabled - computed: true, optional: true, required: false
  private _isBfdEnabled?: boolean | cdktf.IResolvable; 
  public get isBfdEnabled() {
    return this.getBooleanAttribute('is_bfd_enabled');
  }
  public set isBfdEnabled(value: boolean | cdktf.IResolvable) {
    this._isBfdEnabled = value;
  }
  public resetIsBfdEnabled() {
    this._isBfdEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isBfdEnabledInput() {
    return this._isBfdEnabled;
  }

  // local_as - computed: true, optional: true, required: false
  private _localAs?: number; 
  public get localAs() {
    return this.getNumberAttribute('local_as');
  }
  public set localAs(value: number) {
    this._localAs = value;
  }
  public resetLocalAs() {
    this._localAs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localAsInput() {
    return this._localAs;
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

  // neighbor - computed: true, optional: true, required: false
  private _neighbor?: string; 
  public get neighbor() {
    return this.getStringAttribute('neighbor');
  }
  public set neighbor(value: string) {
    this._neighbor = value;
  }
  public resetNeighbor() {
    this._neighbor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get neighborInput() {
    return this._neighbor;
  }

  // remote_as - computed: true, optional: true, required: false
  private _remoteAs?: number; 
  public get remoteAs() {
    return this.getNumberAttribute('remote_as');
  }
  public set remoteAs(value: number) {
    this._remoteAs = value;
  }
  public resetRemoteAs() {
    this._remoteAs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteAsInput() {
    return this._remoteAs;
  }

  // router_id - computed: true, optional: true, required: false
  private _routerId?: string; 
  public get routerId() {
    return this.getStringAttribute('router_id');
  }
  public set routerId(value: string) {
    this._routerId = value;
  }
  public resetRouterId() {
    this._routerId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routerIdInput() {
    return this._routerId;
  }
}

export class GatewayBgpConfigurationList extends cdktf.ComplexList {
  public internalValue? : GatewayBgpConfiguration[] | cdktf.IResolvable

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
  public get(index: number): GatewayBgpConfigurationOutputReference {
    return new GatewayBgpConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GatewayCreatedBy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/resources/gateway#email Gateway#email}
  */
  readonly email?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/resources/gateway#id Gateway#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/resources/gateway#name Gateway#name}
  */
  readonly name?: string;
}

export function gatewayCreatedByToTerraform(struct?: GatewayCreatedByOutputReference | GatewayCreatedBy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    email: cdktf.stringToTerraform(struct!.email),
    id: cdktf.stringToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function gatewayCreatedByToHclTerraform(struct?: GatewayCreatedByOutputReference | GatewayCreatedBy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    email: {
      value: cdktf.stringToHclTerraform(struct!.email),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
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

export class GatewayCreatedByOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GatewayCreatedBy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._email !== undefined) {
      hasAnyValues = true;
      internalValueResult.email = this._email;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GatewayCreatedBy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._email = undefined;
      this._id = undefined;
      this._name = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._email = value.email;
      this._id = value.id;
      this._name = value.name;
    }
  }

  // email - computed: true, optional: true, required: false
  private _email?: string; 
  public get email() {
    return this.getStringAttribute('email');
  }
  public set email(value: string) {
    this._email = value;
  }
  public resetEmail() {
    this._email = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailInput() {
    return this._email;
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
}
export interface GatewayInterfacesAddresses {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/resources/gateway#address Gateway#address}
  */
  readonly address?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/resources/gateway#address_assignment Gateway#address_assignment}
  */
  readonly addressAssignment?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/resources/gateway#address_family Gateway#address_family}
  */
  readonly addressFamily?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/resources/gateway#dns_primary Gateway#dns_primary}
  */
  readonly dnsPrimary?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/resources/gateway#dns_secondary Gateway#dns_secondary}
  */
  readonly dnsSecondary?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/resources/gateway#gateway Gateway#gateway}
  */
  readonly gateway?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/resources/gateway#mask Gateway#mask}
  */
  readonly mask?: string;
}

export function gatewayInterfacesAddressesToTerraform(struct?: GatewayInterfacesAddresses | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address: cdktf.stringToTerraform(struct!.address),
    address_assignment: cdktf.stringToTerraform(struct!.addressAssignment),
    address_family: cdktf.stringToTerraform(struct!.addressFamily),
    dns_primary: cdktf.stringToTerraform(struct!.dnsPrimary),
    dns_secondary: cdktf.stringToTerraform(struct!.dnsSecondary),
    gateway: cdktf.stringToTerraform(struct!.gateway),
    mask: cdktf.stringToTerraform(struct!.mask),
  }
}


export function gatewayInterfacesAddressesToHclTerraform(struct?: GatewayInterfacesAddresses | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    address: {
      value: cdktf.stringToHclTerraform(struct!.address),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    address_assignment: {
      value: cdktf.stringToHclTerraform(struct!.addressAssignment),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    address_family: {
      value: cdktf.stringToHclTerraform(struct!.addressFamily),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dns_primary: {
      value: cdktf.stringToHclTerraform(struct!.dnsPrimary),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dns_secondary: {
      value: cdktf.stringToHclTerraform(struct!.dnsSecondary),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    gateway: {
      value: cdktf.stringToHclTerraform(struct!.gateway),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mask: {
      value: cdktf.stringToHclTerraform(struct!.mask),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GatewayInterfacesAddressesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GatewayInterfacesAddresses | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._address !== undefined) {
      hasAnyValues = true;
      internalValueResult.address = this._address;
    }
    if (this._addressAssignment !== undefined) {
      hasAnyValues = true;
      internalValueResult.addressAssignment = this._addressAssignment;
    }
    if (this._addressFamily !== undefined) {
      hasAnyValues = true;
      internalValueResult.addressFamily = this._addressFamily;
    }
    if (this._dnsPrimary !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsPrimary = this._dnsPrimary;
    }
    if (this._dnsSecondary !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsSecondary = this._dnsSecondary;
    }
    if (this._gateway !== undefined) {
      hasAnyValues = true;
      internalValueResult.gateway = this._gateway;
    }
    if (this._mask !== undefined) {
      hasAnyValues = true;
      internalValueResult.mask = this._mask;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GatewayInterfacesAddresses | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._address = undefined;
      this._addressAssignment = undefined;
      this._addressFamily = undefined;
      this._dnsPrimary = undefined;
      this._dnsSecondary = undefined;
      this._gateway = undefined;
      this._mask = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._address = value.address;
      this._addressAssignment = value.addressAssignment;
      this._addressFamily = value.addressFamily;
      this._dnsPrimary = value.dnsPrimary;
      this._dnsSecondary = value.dnsSecondary;
      this._gateway = value.gateway;
      this._mask = value.mask;
    }
  }

  // address - computed: true, optional: true, required: false
  private _address?: string; 
  public get address() {
    return this.getStringAttribute('address');
  }
  public set address(value: string) {
    this._address = value;
  }
  public resetAddress() {
    this._address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressInput() {
    return this._address;
  }

  // address_assignment - computed: true, optional: true, required: false
  private _addressAssignment?: string; 
  public get addressAssignment() {
    return this.getStringAttribute('address_assignment');
  }
  public set addressAssignment(value: string) {
    this._addressAssignment = value;
  }
  public resetAddressAssignment() {
    this._addressAssignment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressAssignmentInput() {
    return this._addressAssignment;
  }

  // address_family - computed: true, optional: true, required: false
  private _addressFamily?: string; 
  public get addressFamily() {
    return this.getStringAttribute('address_family');
  }
  public set addressFamily(value: string) {
    this._addressFamily = value;
  }
  public resetAddressFamily() {
    this._addressFamily = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressFamilyInput() {
    return this._addressFamily;
  }

  // dns_primary - computed: true, optional: true, required: false
  private _dnsPrimary?: string; 
  public get dnsPrimary() {
    return this.getStringAttribute('dns_primary');
  }
  public set dnsPrimary(value: string) {
    this._dnsPrimary = value;
  }
  public resetDnsPrimary() {
    this._dnsPrimary = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsPrimaryInput() {
    return this._dnsPrimary;
  }

  // dns_secondary - computed: true, optional: true, required: false
  private _dnsSecondary?: string; 
  public get dnsSecondary() {
    return this.getStringAttribute('dns_secondary');
  }
  public set dnsSecondary(value: string) {
    this._dnsSecondary = value;
  }
  public resetDnsSecondary() {
    this._dnsSecondary = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsSecondaryInput() {
    return this._dnsSecondary;
  }

  // gateway - computed: true, optional: true, required: false
  private _gateway?: string; 
  public get gateway() {
    return this.getStringAttribute('gateway');
  }
  public set gateway(value: string) {
    this._gateway = value;
  }
  public resetGateway() {
    this._gateway = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewayInput() {
    return this._gateway;
  }

  // mask - computed: true, optional: true, required: false
  private _mask?: string; 
  public get mask() {
    return this.getStringAttribute('mask');
  }
  public set mask(value: string) {
    this._mask = value;
  }
  public resetMask() {
    this._mask = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maskInput() {
    return this._mask;
  }
}

export class GatewayInterfacesAddressesList extends cdktf.ComplexList {
  public internalValue? : GatewayInterfacesAddresses[] | cdktf.IResolvable

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
  public get(index: number): GatewayInterfacesAddressesOutputReference {
    return new GatewayInterfacesAddressesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GatewayInterfacesDhcpRelayServerSetting {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/resources/gateway#relay_server_ip_list Gateway#relay_server_ip_list}
  */
  readonly relayServerIpList?: string[];
}

export function gatewayInterfacesDhcpRelayServerSettingToTerraform(struct?: GatewayInterfacesDhcpRelayServerSettingOutputReference | GatewayInterfacesDhcpRelayServerSetting): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    relay_server_ip_list: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.relayServerIpList),
  }
}


export function gatewayInterfacesDhcpRelayServerSettingToHclTerraform(struct?: GatewayInterfacesDhcpRelayServerSettingOutputReference | GatewayInterfacesDhcpRelayServerSetting): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    relay_server_ip_list: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.relayServerIpList),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GatewayInterfacesDhcpRelayServerSettingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GatewayInterfacesDhcpRelayServerSetting | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._relayServerIpList !== undefined) {
      hasAnyValues = true;
      internalValueResult.relayServerIpList = this._relayServerIpList;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GatewayInterfacesDhcpRelayServerSetting | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._relayServerIpList = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._relayServerIpList = value.relayServerIpList;
    }
  }

  // relay_server_ip_list - computed: true, optional: true, required: false
  private _relayServerIpList?: string[]; 
  public get relayServerIpList() {
    return this.getListAttribute('relay_server_ip_list');
  }
  public set relayServerIpList(value: string[]) {
    this._relayServerIpList = value;
  }
  public resetRelayServerIpList() {
    this._relayServerIpList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relayServerIpListInput() {
    return this._relayServerIpList;
  }
}
export interface GatewayInterfacesDhcpServerSettingAddressRanges {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/resources/gateway#end_ipv4 Gateway#end_ipv4}
  */
  readonly endIpv4?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/resources/gateway#start_ipv4 Gateway#start_ipv4}
  */
  readonly startIpv4?: string;
}

export function gatewayInterfacesDhcpServerSettingAddressRangesToTerraform(struct?: GatewayInterfacesDhcpServerSettingAddressRanges | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    end_ipv4: cdktf.stringToTerraform(struct!.endIpv4),
    start_ipv4: cdktf.stringToTerraform(struct!.startIpv4),
  }
}


export function gatewayInterfacesDhcpServerSettingAddressRangesToHclTerraform(struct?: GatewayInterfacesDhcpServerSettingAddressRanges | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    end_ipv4: {
      value: cdktf.stringToHclTerraform(struct!.endIpv4),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    start_ipv4: {
      value: cdktf.stringToHclTerraform(struct!.startIpv4),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GatewayInterfacesDhcpServerSettingAddressRangesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GatewayInterfacesDhcpServerSettingAddressRanges | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._endIpv4 !== undefined) {
      hasAnyValues = true;
      internalValueResult.endIpv4 = this._endIpv4;
    }
    if (this._startIpv4 !== undefined) {
      hasAnyValues = true;
      internalValueResult.startIpv4 = this._startIpv4;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GatewayInterfacesDhcpServerSettingAddressRanges | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._endIpv4 = undefined;
      this._startIpv4 = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._endIpv4 = value.endIpv4;
      this._startIpv4 = value.startIpv4;
    }
  }

  // end_ipv4 - computed: true, optional: true, required: false
  private _endIpv4?: string; 
  public get endIpv4() {
    return this.getStringAttribute('end_ipv4');
  }
  public set endIpv4(value: string) {
    this._endIpv4 = value;
  }
  public resetEndIpv4() {
    this._endIpv4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endIpv4Input() {
    return this._endIpv4;
  }

  // start_ipv4 - computed: true, optional: true, required: false
  private _startIpv4?: string; 
  public get startIpv4() {
    return this.getStringAttribute('start_ipv4');
  }
  public set startIpv4(value: string) {
    this._startIpv4 = value;
  }
  public resetStartIpv4() {
    this._startIpv4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startIpv4Input() {
    return this._startIpv4;
  }
}

export class GatewayInterfacesDhcpServerSettingAddressRangesList extends cdktf.ComplexList {
  public internalValue? : GatewayInterfacesDhcpServerSettingAddressRanges[] | cdktf.IResolvable

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
  public get(index: number): GatewayInterfacesDhcpServerSettingAddressRangesOutputReference {
    return new GatewayInterfacesDhcpServerSettingAddressRangesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GatewayInterfacesDhcpServerSettingCustomOptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/resources/gateway#code Gateway#code}
  */
  readonly code?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/resources/gateway#type Gateway#type}
  */
  readonly type?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/resources/gateway#value Gateway#value}
  */
  readonly value?: string;
}

export function gatewayInterfacesDhcpServerSettingCustomOptionsToTerraform(struct?: GatewayInterfacesDhcpServerSettingCustomOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    code: cdktf.numberToTerraform(struct!.code),
    type: cdktf.stringToTerraform(struct!.type),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function gatewayInterfacesDhcpServerSettingCustomOptionsToHclTerraform(struct?: GatewayInterfacesDhcpServerSettingCustomOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    code: {
      value: cdktf.numberToHclTerraform(struct!.code),
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

export class GatewayInterfacesDhcpServerSettingCustomOptionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GatewayInterfacesDhcpServerSettingCustomOptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._code !== undefined) {
      hasAnyValues = true;
      internalValueResult.code = this._code;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GatewayInterfacesDhcpServerSettingCustomOptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._code = undefined;
      this._type = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._code = value.code;
      this._type = value.type;
      this._value = value.value;
    }
  }

  // code - computed: true, optional: true, required: false
  private _code?: number; 
  public get code() {
    return this.getNumberAttribute('code');
  }
  public set code(value: number) {
    this._code = value;
  }
  public resetCode() {
    this._code = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get codeInput() {
    return this._code;
  }

  // type - computed: true, optional: true, required: false
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

  // value - computed: true, optional: true, required: false
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

export class GatewayInterfacesDhcpServerSettingCustomOptionsList extends cdktf.ComplexList {
  public internalValue? : GatewayInterfacesDhcpServerSettingCustomOptions[] | cdktf.IResolvable

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
  public get(index: number): GatewayInterfacesDhcpServerSettingCustomOptionsOutputReference {
    return new GatewayInterfacesDhcpServerSettingCustomOptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GatewayInterfacesDhcpServerSettingMacAddressToIpv4Bindings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/resources/gateway#ipv4_address Gateway#ipv4_address}
  */
  readonly ipv4Address?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/resources/gateway#mac_address Gateway#mac_address}
  */
  readonly macAddress?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/resources/gateway#name Gateway#name}
  */
  readonly name?: string;
}

export function gatewayInterfacesDhcpServerSettingMacAddressToIpv4BindingsToTerraform(struct?: GatewayInterfacesDhcpServerSettingMacAddressToIpv4Bindings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ipv4_address: cdktf.stringToTerraform(struct!.ipv4Address),
    mac_address: cdktf.stringToTerraform(struct!.macAddress),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function gatewayInterfacesDhcpServerSettingMacAddressToIpv4BindingsToHclTerraform(struct?: GatewayInterfacesDhcpServerSettingMacAddressToIpv4Bindings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ipv4_address: {
      value: cdktf.stringToHclTerraform(struct!.ipv4Address),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mac_address: {
      value: cdktf.stringToHclTerraform(struct!.macAddress),
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

export class GatewayInterfacesDhcpServerSettingMacAddressToIpv4BindingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GatewayInterfacesDhcpServerSettingMacAddressToIpv4Bindings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipv4Address !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4Address = this._ipv4Address;
    }
    if (this._macAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.macAddress = this._macAddress;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GatewayInterfacesDhcpServerSettingMacAddressToIpv4Bindings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ipv4Address = undefined;
      this._macAddress = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ipv4Address = value.ipv4Address;
      this._macAddress = value.macAddress;
      this._name = value.name;
    }
  }

  // ipv4_address - computed: true, optional: true, required: false
  private _ipv4Address?: string; 
  public get ipv4Address() {
    return this.getStringAttribute('ipv4_address');
  }
  public set ipv4Address(value: string) {
    this._ipv4Address = value;
  }
  public resetIpv4Address() {
    this._ipv4Address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4AddressInput() {
    return this._ipv4Address;
  }

  // mac_address - computed: true, optional: true, required: false
  private _macAddress?: string; 
  public get macAddress() {
    return this.getStringAttribute('mac_address');
  }
  public set macAddress(value: string) {
    this._macAddress = value;
  }
  public resetMacAddress() {
    this._macAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get macAddressInput() {
    return this._macAddress;
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
}

export class GatewayInterfacesDhcpServerSettingMacAddressToIpv4BindingsList extends cdktf.ComplexList {
  public internalValue? : GatewayInterfacesDhcpServerSettingMacAddressToIpv4Bindings[] | cdktf.IResolvable

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
  public get(index: number): GatewayInterfacesDhcpServerSettingMacAddressToIpv4BindingsOutputReference {
    return new GatewayInterfacesDhcpServerSettingMacAddressToIpv4BindingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GatewayInterfacesDhcpServerSetting {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/resources/gateway#dns_primary Gateway#dns_primary}
  */
  readonly dnsPrimary?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/resources/gateway#dns_secondary Gateway#dns_secondary}
  */
  readonly dnsSecondary?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/resources/gateway#lease_duration Gateway#lease_duration}
  */
  readonly leaseDuration?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/resources/gateway#network Gateway#network}
  */
  readonly network?: string;
  /**
  * address_ranges block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/resources/gateway#address_ranges Gateway#address_ranges}
  */
  readonly addressRanges?: GatewayInterfacesDhcpServerSettingAddressRanges[] | cdktf.IResolvable;
  /**
  * custom_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/resources/gateway#custom_options Gateway#custom_options}
  */
  readonly customOptions?: GatewayInterfacesDhcpServerSettingCustomOptions[] | cdktf.IResolvable;
  /**
  * mac_address_to_ipv4_bindings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/resources/gateway#mac_address_to_ipv4_bindings Gateway#mac_address_to_ipv4_bindings}
  */
  readonly macAddressToIpv4Bindings?: GatewayInterfacesDhcpServerSettingMacAddressToIpv4Bindings[] | cdktf.IResolvable;
}

export function gatewayInterfacesDhcpServerSettingToTerraform(struct?: GatewayInterfacesDhcpServerSettingOutputReference | GatewayInterfacesDhcpServerSetting): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dns_primary: cdktf.stringToTerraform(struct!.dnsPrimary),
    dns_secondary: cdktf.stringToTerraform(struct!.dnsSecondary),
    lease_duration: cdktf.numberToTerraform(struct!.leaseDuration),
    network: cdktf.stringToTerraform(struct!.network),
    address_ranges: cdktf.listMapper(gatewayInterfacesDhcpServerSettingAddressRangesToTerraform, true)(struct!.addressRanges),
    custom_options: cdktf.listMapper(gatewayInterfacesDhcpServerSettingCustomOptionsToTerraform, true)(struct!.customOptions),
    mac_address_to_ipv4_bindings: cdktf.listMapper(gatewayInterfacesDhcpServerSettingMacAddressToIpv4BindingsToTerraform, true)(struct!.macAddressToIpv4Bindings),
  }
}


export function gatewayInterfacesDhcpServerSettingToHclTerraform(struct?: GatewayInterfacesDhcpServerSettingOutputReference | GatewayInterfacesDhcpServerSetting): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dns_primary: {
      value: cdktf.stringToHclTerraform(struct!.dnsPrimary),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dns_secondary: {
      value: cdktf.stringToHclTerraform(struct!.dnsSecondary),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    lease_duration: {
      value: cdktf.numberToHclTerraform(struct!.leaseDuration),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    network: {
      value: cdktf.stringToHclTerraform(struct!.network),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    address_ranges: {
      value: cdktf.listMapperHcl(gatewayInterfacesDhcpServerSettingAddressRangesToHclTerraform, true)(struct!.addressRanges),
      isBlock: true,
      type: "list",
      storageClassType: "GatewayInterfacesDhcpServerSettingAddressRangesList",
    },
    custom_options: {
      value: cdktf.listMapperHcl(gatewayInterfacesDhcpServerSettingCustomOptionsToHclTerraform, true)(struct!.customOptions),
      isBlock: true,
      type: "list",
      storageClassType: "GatewayInterfacesDhcpServerSettingCustomOptionsList",
    },
    mac_address_to_ipv4_bindings: {
      value: cdktf.listMapperHcl(gatewayInterfacesDhcpServerSettingMacAddressToIpv4BindingsToHclTerraform, true)(struct!.macAddressToIpv4Bindings),
      isBlock: true,
      type: "list",
      storageClassType: "GatewayInterfacesDhcpServerSettingMacAddressToIpv4BindingsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GatewayInterfacesDhcpServerSettingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GatewayInterfacesDhcpServerSetting | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dnsPrimary !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsPrimary = this._dnsPrimary;
    }
    if (this._dnsSecondary !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsSecondary = this._dnsSecondary;
    }
    if (this._leaseDuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.leaseDuration = this._leaseDuration;
    }
    if (this._network !== undefined) {
      hasAnyValues = true;
      internalValueResult.network = this._network;
    }
    if (this._addressRanges?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.addressRanges = this._addressRanges?.internalValue;
    }
    if (this._customOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customOptions = this._customOptions?.internalValue;
    }
    if (this._macAddressToIpv4Bindings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.macAddressToIpv4Bindings = this._macAddressToIpv4Bindings?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GatewayInterfacesDhcpServerSetting | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dnsPrimary = undefined;
      this._dnsSecondary = undefined;
      this._leaseDuration = undefined;
      this._network = undefined;
      this._addressRanges.internalValue = undefined;
      this._customOptions.internalValue = undefined;
      this._macAddressToIpv4Bindings.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dnsPrimary = value.dnsPrimary;
      this._dnsSecondary = value.dnsSecondary;
      this._leaseDuration = value.leaseDuration;
      this._network = value.network;
      this._addressRanges.internalValue = value.addressRanges;
      this._customOptions.internalValue = value.customOptions;
      this._macAddressToIpv4Bindings.internalValue = value.macAddressToIpv4Bindings;
    }
  }

  // dns_primary - computed: true, optional: true, required: false
  private _dnsPrimary?: string; 
  public get dnsPrimary() {
    return this.getStringAttribute('dns_primary');
  }
  public set dnsPrimary(value: string) {
    this._dnsPrimary = value;
  }
  public resetDnsPrimary() {
    this._dnsPrimary = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsPrimaryInput() {
    return this._dnsPrimary;
  }

  // dns_secondary - computed: true, optional: true, required: false
  private _dnsSecondary?: string; 
  public get dnsSecondary() {
    return this.getStringAttribute('dns_secondary');
  }
  public set dnsSecondary(value: string) {
    this._dnsSecondary = value;
  }
  public resetDnsSecondary() {
    this._dnsSecondary = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsSecondaryInput() {
    return this._dnsSecondary;
  }

  // lease_duration - computed: true, optional: true, required: false
  private _leaseDuration?: number; 
  public get leaseDuration() {
    return this.getNumberAttribute('lease_duration');
  }
  public set leaseDuration(value: number) {
    this._leaseDuration = value;
  }
  public resetLeaseDuration() {
    this._leaseDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get leaseDurationInput() {
    return this._leaseDuration;
  }

  // network - computed: true, optional: true, required: false
  private _network?: string; 
  public get network() {
    return this.getStringAttribute('network');
  }
  public set network(value: string) {
    this._network = value;
  }
  public resetNetwork() {
    this._network = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInput() {
    return this._network;
  }

  // address_ranges - computed: false, optional: true, required: false
  private _addressRanges = new GatewayInterfacesDhcpServerSettingAddressRangesList(this, "address_ranges", false);
  public get addressRanges() {
    return this._addressRanges;
  }
  public putAddressRanges(value: GatewayInterfacesDhcpServerSettingAddressRanges[] | cdktf.IResolvable) {
    this._addressRanges.internalValue = value;
  }
  public resetAddressRanges() {
    this._addressRanges.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressRangesInput() {
    return this._addressRanges.internalValue;
  }

  // custom_options - computed: false, optional: true, required: false
  private _customOptions = new GatewayInterfacesDhcpServerSettingCustomOptionsList(this, "custom_options", false);
  public get customOptions() {
    return this._customOptions;
  }
  public putCustomOptions(value: GatewayInterfacesDhcpServerSettingCustomOptions[] | cdktf.IResolvable) {
    this._customOptions.internalValue = value;
  }
  public resetCustomOptions() {
    this._customOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customOptionsInput() {
    return this._customOptions.internalValue;
  }

  // mac_address_to_ipv4_bindings - computed: false, optional: true, required: false
  private _macAddressToIpv4Bindings = new GatewayInterfacesDhcpServerSettingMacAddressToIpv4BindingsList(this, "mac_address_to_ipv4_bindings", false);
  public get macAddressToIpv4Bindings() {
    return this._macAddressToIpv4Bindings;
  }
  public putMacAddressToIpv4Bindings(value: GatewayInterfacesDhcpServerSettingMacAddressToIpv4Bindings[] | cdktf.IResolvable) {
    this._macAddressToIpv4Bindings.internalValue = value;
  }
  public resetMacAddressToIpv4Bindings() {
    this._macAddressToIpv4Bindings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get macAddressToIpv4BindingsInput() {
    return this._macAddressToIpv4Bindings.internalValue;
  }
}
export interface GatewayInterfacesLteProps {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/resources/gateway#apn Gateway#apn}
  */
  readonly apn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/resources/gateway#is_primary Gateway#is_primary}
  */
  readonly isPrimary?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/resources/gateway#password Gateway#password}
  */
  readonly password?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/resources/gateway#user_name Gateway#user_name}
  */
  readonly userName?: string;
}

export function gatewayInterfacesLtePropsToTerraform(struct?: GatewayInterfacesLtePropsOutputReference | GatewayInterfacesLteProps): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    apn: cdktf.stringToTerraform(struct!.apn),
    is_primary: cdktf.booleanToTerraform(struct!.isPrimary),
    password: cdktf.stringToTerraform(struct!.password),
    user_name: cdktf.stringToTerraform(struct!.userName),
  }
}


export function gatewayInterfacesLtePropsToHclTerraform(struct?: GatewayInterfacesLtePropsOutputReference | GatewayInterfacesLteProps): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    apn: {
      value: cdktf.stringToHclTerraform(struct!.apn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    is_primary: {
      value: cdktf.booleanToHclTerraform(struct!.isPrimary),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
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

export class GatewayInterfacesLtePropsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GatewayInterfacesLteProps | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apn !== undefined) {
      hasAnyValues = true;
      internalValueResult.apn = this._apn;
    }
    if (this._isPrimary !== undefined) {
      hasAnyValues = true;
      internalValueResult.isPrimary = this._isPrimary;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._userName !== undefined) {
      hasAnyValues = true;
      internalValueResult.userName = this._userName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GatewayInterfacesLteProps | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._apn = undefined;
      this._isPrimary = undefined;
      this._password = undefined;
      this._userName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._apn = value.apn;
      this._isPrimary = value.isPrimary;
      this._password = value.password;
      this._userName = value.userName;
    }
  }

  // apn - computed: true, optional: true, required: false
  private _apn?: string; 
  public get apn() {
    return this.getStringAttribute('apn');
  }
  public set apn(value: string) {
    this._apn = value;
  }
  public resetApn() {
    this._apn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apnInput() {
    return this._apn;
  }

  // is_primary - computed: true, optional: true, required: false
  private _isPrimary?: boolean | cdktf.IResolvable; 
  public get isPrimary() {
    return this.getBooleanAttribute('is_primary');
  }
  public set isPrimary(value: boolean | cdktf.IResolvable) {
    this._isPrimary = value;
  }
  public resetIsPrimary() {
    this._isPrimary = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isPrimaryInput() {
    return this._isPrimary;
  }

  // password - computed: true, optional: true, required: false
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

  // user_name - computed: true, optional: true, required: false
  private _userName?: string; 
  public get userName() {
    return this.getStringAttribute('user_name');
  }
  public set userName(value: string) {
    this._userName = value;
  }
  public resetUserName() {
    this._userName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userNameInput() {
    return this._userName;
  }
}
export interface GatewayInterfacesOverlaySettingDataUsageLimit {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/resources/gateway#data_limit_mb Gateway#data_limit_mb}
  */
  readonly dataLimitMb?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/resources/gateway#data_usage_period Gateway#data_usage_period}
  */
  readonly dataUsagePeriod?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/resources/gateway#data_usage_period_start_date Gateway#data_usage_period_start_date}
  */
  readonly dataUsagePeriodStartDate?: string;
}

export function gatewayInterfacesOverlaySettingDataUsageLimitToTerraform(struct?: GatewayInterfacesOverlaySettingDataUsageLimitOutputReference | GatewayInterfacesOverlaySettingDataUsageLimit): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    data_limit_mb: cdktf.numberToTerraform(struct!.dataLimitMb),
    data_usage_period: cdktf.stringToTerraform(struct!.dataUsagePeriod),
    data_usage_period_start_date: cdktf.stringToTerraform(struct!.dataUsagePeriodStartDate),
  }
}


export function gatewayInterfacesOverlaySettingDataUsageLimitToHclTerraform(struct?: GatewayInterfacesOverlaySettingDataUsageLimitOutputReference | GatewayInterfacesOverlaySettingDataUsageLimit): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    data_limit_mb: {
      value: cdktf.numberToHclTerraform(struct!.dataLimitMb),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    data_usage_period: {
      value: cdktf.stringToHclTerraform(struct!.dataUsagePeriod),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    data_usage_period_start_date: {
      value: cdktf.stringToHclTerraform(struct!.dataUsagePeriodStartDate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GatewayInterfacesOverlaySettingDataUsageLimitOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GatewayInterfacesOverlaySettingDataUsageLimit | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dataLimitMb !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataLimitMb = this._dataLimitMb;
    }
    if (this._dataUsagePeriod !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataUsagePeriod = this._dataUsagePeriod;
    }
    if (this._dataUsagePeriodStartDate !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataUsagePeriodStartDate = this._dataUsagePeriodStartDate;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GatewayInterfacesOverlaySettingDataUsageLimit | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dataLimitMb = undefined;
      this._dataUsagePeriod = undefined;
      this._dataUsagePeriodStartDate = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dataLimitMb = value.dataLimitMb;
      this._dataUsagePeriod = value.dataUsagePeriod;
      this._dataUsagePeriodStartDate = value.dataUsagePeriodStartDate;
    }
  }

  // data_limit_mb - computed: true, optional: true, required: false
  private _dataLimitMb?: number; 
  public get dataLimitMb() {
    return this.getNumberAttribute('data_limit_mb');
  }
  public set dataLimitMb(value: number) {
    this._dataLimitMb = value;
  }
  public resetDataLimitMb() {
    this._dataLimitMb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataLimitMbInput() {
    return this._dataLimitMb;
  }

  // data_usage_period - computed: true, optional: true, required: false
  private _dataUsagePeriod?: string; 
  public get dataUsagePeriod() {
    return this.getStringAttribute('data_usage_period');
  }
  public set dataUsagePeriod(value: string) {
    this._dataUsagePeriod = value;
  }
  public resetDataUsagePeriod() {
    this._dataUsagePeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataUsagePeriodInput() {
    return this._dataUsagePeriod;
  }

  // data_usage_period_start_date - computed: true, optional: true, required: false
  private _dataUsagePeriodStartDate?: string; 
  public get dataUsagePeriodStartDate() {
    return this.getStringAttribute('data_usage_period_start_date');
  }
  public set dataUsagePeriodStartDate(value: string) {
    this._dataUsagePeriodStartDate = value;
  }
  public resetDataUsagePeriodStartDate() {
    this._dataUsagePeriodStartDate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataUsagePeriodStartDateInput() {
    return this._dataUsagePeriodStartDate;
  }
}
export interface GatewayInterfacesOverlaySetting {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/resources/gateway#bw_measurement_mode Gateway#bw_measurement_mode}
  */
  readonly bwMeasurementMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/resources/gateway#do_copy_tos Gateway#do_copy_tos}
  */
  readonly doCopyTos?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/resources/gateway#is_backup Gateway#is_backup}
  */
  readonly isBackup?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/resources/gateway#is_metered Gateway#is_metered}
  */
  readonly isMetered?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/resources/gateway#rx_bw_kbps Gateway#rx_bw_kbps}
  */
  readonly rxBwKbps?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/resources/gateway#tag Gateway#tag}
  */
  readonly tag?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/resources/gateway#tx_bw_kbps Gateway#tx_bw_kbps}
  */
  readonly txBwKbps?: number;
  /**
  * data_usage_limit block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/resources/gateway#data_usage_limit Gateway#data_usage_limit}
  */
  readonly dataUsageLimit?: GatewayInterfacesOverlaySettingDataUsageLimit;
}

export function gatewayInterfacesOverlaySettingToTerraform(struct?: GatewayInterfacesOverlaySettingOutputReference | GatewayInterfacesOverlaySetting): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bw_measurement_mode: cdktf.stringToTerraform(struct!.bwMeasurementMode),
    do_copy_tos: cdktf.booleanToTerraform(struct!.doCopyTos),
    is_backup: cdktf.booleanToTerraform(struct!.isBackup),
    is_metered: cdktf.booleanToTerraform(struct!.isMetered),
    rx_bw_kbps: cdktf.numberToTerraform(struct!.rxBwKbps),
    tag: cdktf.stringToTerraform(struct!.tag),
    tx_bw_kbps: cdktf.numberToTerraform(struct!.txBwKbps),
    data_usage_limit: gatewayInterfacesOverlaySettingDataUsageLimitToTerraform(struct!.dataUsageLimit),
  }
}


export function gatewayInterfacesOverlaySettingToHclTerraform(struct?: GatewayInterfacesOverlaySettingOutputReference | GatewayInterfacesOverlaySetting): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bw_measurement_mode: {
      value: cdktf.stringToHclTerraform(struct!.bwMeasurementMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    do_copy_tos: {
      value: cdktf.booleanToHclTerraform(struct!.doCopyTos),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    is_backup: {
      value: cdktf.booleanToHclTerraform(struct!.isBackup),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    is_metered: {
      value: cdktf.booleanToHclTerraform(struct!.isMetered),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    rx_bw_kbps: {
      value: cdktf.numberToHclTerraform(struct!.rxBwKbps),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tag: {
      value: cdktf.stringToHclTerraform(struct!.tag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tx_bw_kbps: {
      value: cdktf.numberToHclTerraform(struct!.txBwKbps),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    data_usage_limit: {
      value: gatewayInterfacesOverlaySettingDataUsageLimitToHclTerraform(struct!.dataUsageLimit),
      isBlock: true,
      type: "set",
      storageClassType: "GatewayInterfacesOverlaySettingDataUsageLimitList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GatewayInterfacesOverlaySettingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GatewayInterfacesOverlaySetting | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bwMeasurementMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.bwMeasurementMode = this._bwMeasurementMode;
    }
    if (this._doCopyTos !== undefined) {
      hasAnyValues = true;
      internalValueResult.doCopyTos = this._doCopyTos;
    }
    if (this._isBackup !== undefined) {
      hasAnyValues = true;
      internalValueResult.isBackup = this._isBackup;
    }
    if (this._isMetered !== undefined) {
      hasAnyValues = true;
      internalValueResult.isMetered = this._isMetered;
    }
    if (this._rxBwKbps !== undefined) {
      hasAnyValues = true;
      internalValueResult.rxBwKbps = this._rxBwKbps;
    }
    if (this._tag !== undefined) {
      hasAnyValues = true;
      internalValueResult.tag = this._tag;
    }
    if (this._txBwKbps !== undefined) {
      hasAnyValues = true;
      internalValueResult.txBwKbps = this._txBwKbps;
    }
    if (this._dataUsageLimit?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataUsageLimit = this._dataUsageLimit?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GatewayInterfacesOverlaySetting | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bwMeasurementMode = undefined;
      this._doCopyTos = undefined;
      this._isBackup = undefined;
      this._isMetered = undefined;
      this._rxBwKbps = undefined;
      this._tag = undefined;
      this._txBwKbps = undefined;
      this._dataUsageLimit.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bwMeasurementMode = value.bwMeasurementMode;
      this._doCopyTos = value.doCopyTos;
      this._isBackup = value.isBackup;
      this._isMetered = value.isMetered;
      this._rxBwKbps = value.rxBwKbps;
      this._tag = value.tag;
      this._txBwKbps = value.txBwKbps;
      this._dataUsageLimit.internalValue = value.dataUsageLimit;
    }
  }

  // bw_measurement_mode - computed: true, optional: true, required: false
  private _bwMeasurementMode?: string; 
  public get bwMeasurementMode() {
    return this.getStringAttribute('bw_measurement_mode');
  }
  public set bwMeasurementMode(value: string) {
    this._bwMeasurementMode = value;
  }
  public resetBwMeasurementMode() {
    this._bwMeasurementMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bwMeasurementModeInput() {
    return this._bwMeasurementMode;
  }

  // do_copy_tos - computed: true, optional: true, required: false
  private _doCopyTos?: boolean | cdktf.IResolvable; 
  public get doCopyTos() {
    return this.getBooleanAttribute('do_copy_tos');
  }
  public set doCopyTos(value: boolean | cdktf.IResolvable) {
    this._doCopyTos = value;
  }
  public resetDoCopyTos() {
    this._doCopyTos = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get doCopyTosInput() {
    return this._doCopyTos;
  }

  // is_backup - computed: true, optional: true, required: false
  private _isBackup?: boolean | cdktf.IResolvable; 
  public get isBackup() {
    return this.getBooleanAttribute('is_backup');
  }
  public set isBackup(value: boolean | cdktf.IResolvable) {
    this._isBackup = value;
  }
  public resetIsBackup() {
    this._isBackup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isBackupInput() {
    return this._isBackup;
  }

  // is_metered - computed: true, optional: true, required: false
  private _isMetered?: boolean | cdktf.IResolvable; 
  public get isMetered() {
    return this.getBooleanAttribute('is_metered');
  }
  public set isMetered(value: boolean | cdktf.IResolvable) {
    this._isMetered = value;
  }
  public resetIsMetered() {
    this._isMetered = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isMeteredInput() {
    return this._isMetered;
  }

  // rx_bw_kbps - computed: true, optional: true, required: false
  private _rxBwKbps?: number; 
  public get rxBwKbps() {
    return this.getNumberAttribute('rx_bw_kbps');
  }
  public set rxBwKbps(value: number) {
    this._rxBwKbps = value;
  }
  public resetRxBwKbps() {
    this._rxBwKbps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rxBwKbpsInput() {
    return this._rxBwKbps;
  }

  // tag - computed: true, optional: true, required: false
  private _tag?: string; 
  public get tag() {
    return this.getStringAttribute('tag');
  }
  public set tag(value: string) {
    this._tag = value;
  }
  public resetTag() {
    this._tag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagInput() {
    return this._tag;
  }

  // tx_bw_kbps - computed: true, optional: true, required: false
  private _txBwKbps?: number; 
  public get txBwKbps() {
    return this.getNumberAttribute('tx_bw_kbps');
  }
  public set txBwKbps(value: number) {
    this._txBwKbps = value;
  }
  public resetTxBwKbps() {
    this._txBwKbps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get txBwKbpsInput() {
    return this._txBwKbps;
  }

  // data_usage_limit - computed: false, optional: true, required: false
  private _dataUsageLimit = new GatewayInterfacesOverlaySettingDataUsageLimitOutputReference(this, "data_usage_limit");
  public get dataUsageLimit() {
    return this._dataUsageLimit;
  }
  public putDataUsageLimit(value: GatewayInterfacesOverlaySettingDataUsageLimit) {
    this._dataUsageLimit.internalValue = value;
  }
  public resetDataUsageLimit() {
    this._dataUsageLimit.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataUsageLimitInput() {
    return this._dataUsageLimit.internalValue;
  }
}
export interface GatewayInterfacesProxyArpSettings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/resources/gateway#ipv4_address Gateway#ipv4_address}
  */
  readonly ipv4Address?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/resources/gateway#ipv4_gateway Gateway#ipv4_gateway}
  */
  readonly ipv4Gateway?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/resources/gateway#ipv4_mask Gateway#ipv4_mask}
  */
  readonly ipv4Mask?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/resources/gateway#lan_interface_name Gateway#lan_interface_name}
  */
  readonly lanInterfaceName?: string;
}

export function gatewayInterfacesProxyArpSettingsToTerraform(struct?: GatewayInterfacesProxyArpSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ipv4_address: cdktf.stringToTerraform(struct!.ipv4Address),
    ipv4_gateway: cdktf.stringToTerraform(struct!.ipv4Gateway),
    ipv4_mask: cdktf.stringToTerraform(struct!.ipv4Mask),
    lan_interface_name: cdktf.stringToTerraform(struct!.lanInterfaceName),
  }
}


export function gatewayInterfacesProxyArpSettingsToHclTerraform(struct?: GatewayInterfacesProxyArpSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ipv4_address: {
      value: cdktf.stringToHclTerraform(struct!.ipv4Address),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv4_gateway: {
      value: cdktf.stringToHclTerraform(struct!.ipv4Gateway),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv4_mask: {
      value: cdktf.stringToHclTerraform(struct!.ipv4Mask),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    lan_interface_name: {
      value: cdktf.stringToHclTerraform(struct!.lanInterfaceName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GatewayInterfacesProxyArpSettingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GatewayInterfacesProxyArpSettings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipv4Address !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4Address = this._ipv4Address;
    }
    if (this._ipv4Gateway !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4Gateway = this._ipv4Gateway;
    }
    if (this._ipv4Mask !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4Mask = this._ipv4Mask;
    }
    if (this._lanInterfaceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.lanInterfaceName = this._lanInterfaceName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GatewayInterfacesProxyArpSettings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ipv4Address = undefined;
      this._ipv4Gateway = undefined;
      this._ipv4Mask = undefined;
      this._lanInterfaceName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ipv4Address = value.ipv4Address;
      this._ipv4Gateway = value.ipv4Gateway;
      this._ipv4Mask = value.ipv4Mask;
      this._lanInterfaceName = value.lanInterfaceName;
    }
  }

  // ipv4_address - computed: true, optional: true, required: false
  private _ipv4Address?: string; 
  public get ipv4Address() {
    return this.getStringAttribute('ipv4_address');
  }
  public set ipv4Address(value: string) {
    this._ipv4Address = value;
  }
  public resetIpv4Address() {
    this._ipv4Address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4AddressInput() {
    return this._ipv4Address;
  }

  // ipv4_gateway - computed: true, optional: true, required: false
  private _ipv4Gateway?: string; 
  public get ipv4Gateway() {
    return this.getStringAttribute('ipv4_gateway');
  }
  public set ipv4Gateway(value: string) {
    this._ipv4Gateway = value;
  }
  public resetIpv4Gateway() {
    this._ipv4Gateway = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4GatewayInput() {
    return this._ipv4Gateway;
  }

  // ipv4_mask - computed: true, optional: true, required: false
  private _ipv4Mask?: string; 
  public get ipv4Mask() {
    return this.getStringAttribute('ipv4_mask');
  }
  public set ipv4Mask(value: string) {
    this._ipv4Mask = value;
  }
  public resetIpv4Mask() {
    this._ipv4Mask = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4MaskInput() {
    return this._ipv4Mask;
  }

  // lan_interface_name - computed: true, optional: true, required: false
  private _lanInterfaceName?: string; 
  public get lanInterfaceName() {
    return this.getStringAttribute('lan_interface_name');
  }
  public set lanInterfaceName(value: string) {
    this._lanInterfaceName = value;
  }
  public resetLanInterfaceName() {
    this._lanInterfaceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lanInterfaceNameInput() {
    return this._lanInterfaceName;
  }
}

export class GatewayInterfacesProxyArpSettingsList extends cdktf.ComplexList {
  public internalValue? : GatewayInterfacesProxyArpSettings[] | cdktf.IResolvable

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
  public get(index: number): GatewayInterfacesProxyArpSettingsOutputReference {
    return new GatewayInterfacesProxyArpSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GatewayInterfacesRadius {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/resources/gateway#accounting_port Gateway#accounting_port}
  */
  readonly accountingPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/resources/gateway#client_interface_name Gateway#client_interface_name}
  */
  readonly clientInterfaceName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/resources/gateway#client_ipv4 Gateway#client_ipv4}
  */
  readonly clientIpv4?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/resources/gateway#ipv4 Gateway#ipv4}
  */
  readonly ipv4?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/resources/gateway#name Gateway#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/resources/gateway#port Gateway#port}
  */
  readonly port?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/resources/gateway#secret Gateway#secret}
  */
  readonly secret?: string;
}

export function gatewayInterfacesRadiusToTerraform(struct?: GatewayInterfacesRadius | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    accounting_port: cdktf.numberToTerraform(struct!.accountingPort),
    client_interface_name: cdktf.stringToTerraform(struct!.clientInterfaceName),
    client_ipv4: cdktf.stringToTerraform(struct!.clientIpv4),
    ipv4: cdktf.stringToTerraform(struct!.ipv4),
    name: cdktf.stringToTerraform(struct!.name),
    port: cdktf.numberToTerraform(struct!.port),
    secret: cdktf.stringToTerraform(struct!.secret),
  }
}


export function gatewayInterfacesRadiusToHclTerraform(struct?: GatewayInterfacesRadius | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    accounting_port: {
      value: cdktf.numberToHclTerraform(struct!.accountingPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    client_interface_name: {
      value: cdktf.stringToHclTerraform(struct!.clientInterfaceName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_ipv4: {
      value: cdktf.stringToHclTerraform(struct!.clientIpv4),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv4: {
      value: cdktf.stringToHclTerraform(struct!.ipv4),
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
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    secret: {
      value: cdktf.stringToHclTerraform(struct!.secret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GatewayInterfacesRadiusOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GatewayInterfacesRadius | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accountingPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.accountingPort = this._accountingPort;
    }
    if (this._clientInterfaceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientInterfaceName = this._clientInterfaceName;
    }
    if (this._clientIpv4 !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientIpv4 = this._clientIpv4;
    }
    if (this._ipv4 !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4 = this._ipv4;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._secret !== undefined) {
      hasAnyValues = true;
      internalValueResult.secret = this._secret;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GatewayInterfacesRadius | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accountingPort = undefined;
      this._clientInterfaceName = undefined;
      this._clientIpv4 = undefined;
      this._ipv4 = undefined;
      this._name = undefined;
      this._port = undefined;
      this._secret = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accountingPort = value.accountingPort;
      this._clientInterfaceName = value.clientInterfaceName;
      this._clientIpv4 = value.clientIpv4;
      this._ipv4 = value.ipv4;
      this._name = value.name;
      this._port = value.port;
      this._secret = value.secret;
    }
  }

  // accounting_port - computed: true, optional: true, required: false
  private _accountingPort?: number; 
  public get accountingPort() {
    return this.getNumberAttribute('accounting_port');
  }
  public set accountingPort(value: number) {
    this._accountingPort = value;
  }
  public resetAccountingPort() {
    this._accountingPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountingPortInput() {
    return this._accountingPort;
  }

  // client_interface_name - computed: true, optional: true, required: false
  private _clientInterfaceName?: string; 
  public get clientInterfaceName() {
    return this.getStringAttribute('client_interface_name');
  }
  public set clientInterfaceName(value: string) {
    this._clientInterfaceName = value;
  }
  public resetClientInterfaceName() {
    this._clientInterfaceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientInterfaceNameInput() {
    return this._clientInterfaceName;
  }

  // client_ipv4 - computed: true, optional: true, required: false
  private _clientIpv4?: string; 
  public get clientIpv4() {
    return this.getStringAttribute('client_ipv4');
  }
  public set clientIpv4(value: string) {
    this._clientIpv4 = value;
  }
  public resetClientIpv4() {
    this._clientIpv4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIpv4Input() {
    return this._clientIpv4;
  }

  // ipv4 - computed: true, optional: true, required: false
  private _ipv4?: string; 
  public get ipv4() {
    return this.getStringAttribute('ipv4');
  }
  public set ipv4(value: string) {
    this._ipv4 = value;
  }
  public resetIpv4() {
    this._ipv4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4Input() {
    return this._ipv4;
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

  // port - computed: true, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // secret - computed: true, optional: true, required: false
  private _secret?: string; 
  public get secret() {
    return this.getStringAttribute('secret');
  }
  public set secret(value: string) {
    this._secret = value;
  }
  public resetSecret() {
    this._secret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretInput() {
    return this._secret;
  }
}

export class GatewayInterfacesRadiusList extends cdktf.ComplexList {
  public internalValue? : GatewayInterfacesRadius[] | cdktf.IResolvable

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
  public get(index: number): GatewayInterfacesRadiusOutputReference {
    return new GatewayInterfacesRadiusOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GatewayInterfacesVrrp {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/resources/gateway#advertise_interval Gateway#advertise_interval}
  */
  readonly advertiseInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/resources/gateway#priority Gateway#priority}
  */
  readonly priority?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/resources/gateway#state Gateway#state}
  */
  readonly state?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/resources/gateway#virtual_ipv4 Gateway#virtual_ipv4}
  */
  readonly virtualIpv4?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/resources/gateway#virtual_router_id Gateway#virtual_router_id}
  */
  readonly virtualRouterId?: number;
}

export function gatewayInterfacesVrrpToTerraform(struct?: GatewayInterfacesVrrpOutputReference | GatewayInterfacesVrrp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    advertise_interval: cdktf.numberToTerraform(struct!.advertiseInterval),
    priority: cdktf.numberToTerraform(struct!.priority),
    state: cdktf.stringToTerraform(struct!.state),
    virtual_ipv4: cdktf.stringToTerraform(struct!.virtualIpv4),
    virtual_router_id: cdktf.numberToTerraform(struct!.virtualRouterId),
  }
}


export function gatewayInterfacesVrrpToHclTerraform(struct?: GatewayInterfacesVrrpOutputReference | GatewayInterfacesVrrp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    advertise_interval: {
      value: cdktf.numberToHclTerraform(struct!.advertiseInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    priority: {
      value: cdktf.numberToHclTerraform(struct!.priority),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    state: {
      value: cdktf.stringToHclTerraform(struct!.state),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    virtual_ipv4: {
      value: cdktf.stringToHclTerraform(struct!.virtualIpv4),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    virtual_router_id: {
      value: cdktf.numberToHclTerraform(struct!.virtualRouterId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GatewayInterfacesVrrpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GatewayInterfacesVrrp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._advertiseInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.advertiseInterval = this._advertiseInterval;
    }
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    if (this._state !== undefined) {
      hasAnyValues = true;
      internalValueResult.state = this._state;
    }
    if (this._virtualIpv4 !== undefined) {
      hasAnyValues = true;
      internalValueResult.virtualIpv4 = this._virtualIpv4;
    }
    if (this._virtualRouterId !== undefined) {
      hasAnyValues = true;
      internalValueResult.virtualRouterId = this._virtualRouterId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GatewayInterfacesVrrp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._advertiseInterval = undefined;
      this._priority = undefined;
      this._state = undefined;
      this._virtualIpv4 = undefined;
      this._virtualRouterId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._advertiseInterval = value.advertiseInterval;
      this._priority = value.priority;
      this._state = value.state;
      this._virtualIpv4 = value.virtualIpv4;
      this._virtualRouterId = value.virtualRouterId;
    }
  }

  // advertise_interval - computed: true, optional: true, required: false
  private _advertiseInterval?: number; 
  public get advertiseInterval() {
    return this.getNumberAttribute('advertise_interval');
  }
  public set advertiseInterval(value: number) {
    this._advertiseInterval = value;
  }
  public resetAdvertiseInterval() {
    this._advertiseInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advertiseIntervalInput() {
    return this._advertiseInterval;
  }

  // priority - computed: true, optional: true, required: false
  private _priority?: number; 
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number) {
    this._priority = value;
  }
  public resetPriority() {
    this._priority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }

  // state - computed: true, optional: true, required: false
  private _state?: string; 
  public get state() {
    return this.getStringAttribute('state');
  }
  public set state(value: string) {
    this._state = value;
  }
  public resetState() {
    this._state = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateInput() {
    return this._state;
  }

  // virtual_ipv4 - computed: true, optional: true, required: false
  private _virtualIpv4?: string; 
  public get virtualIpv4() {
    return this.getStringAttribute('virtual_ipv4');
  }
  public set virtualIpv4(value: string) {
    this._virtualIpv4 = value;
  }
  public resetVirtualIpv4() {
    this._virtualIpv4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualIpv4Input() {
    return this._virtualIpv4;
  }

  // virtual_router_id - computed: true, optional: true, required: false
  private _virtualRouterId?: number; 
  public get virtualRouterId() {
    return this.getNumberAttribute('virtual_router_id');
  }
  public set virtualRouterId(value: number) {
    this._virtualRouterId = value;
  }
  public resetVirtualRouterId() {
    this._virtualRouterId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualRouterIdInput() {
    return this._virtualRouterId;
  }
}
export interface GatewayInterfacesWifiPropsEncryption {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/resources/gateway#key Gateway#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/resources/gateway#protocol Gateway#protocol}
  */
  readonly protocol?: string;
}

export function gatewayInterfacesWifiPropsEncryptionToTerraform(struct?: GatewayInterfacesWifiPropsEncryptionOutputReference | GatewayInterfacesWifiPropsEncryption): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    protocol: cdktf.stringToTerraform(struct!.protocol),
  }
}


export function gatewayInterfacesWifiPropsEncryptionToHclTerraform(struct?: GatewayInterfacesWifiPropsEncryptionOutputReference | GatewayInterfacesWifiPropsEncryption): any {
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
    protocol: {
      value: cdktf.stringToHclTerraform(struct!.protocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GatewayInterfacesWifiPropsEncryptionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GatewayInterfacesWifiPropsEncryption | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GatewayInterfacesWifiPropsEncryption | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._key = undefined;
      this._protocol = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._key = value.key;
      this._protocol = value.protocol;
    }
  }

  // key - computed: true, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // protocol - computed: true, optional: true, required: false
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  public resetProtocol() {
    this._protocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }
}
export interface GatewayInterfacesWifiProps {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/resources/gateway#bridge Gateway#bridge}
  */
  readonly bridge?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/resources/gateway#channel Gateway#channel}
  */
  readonly channel?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/resources/gateway#country_code Gateway#country_code}
  */
  readonly countryCode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/resources/gateway#freq Gateway#freq}
  */
  readonly freq?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/resources/gateway#mode Gateway#mode}
  */
  readonly mode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/resources/gateway#ssid Gateway#ssid}
  */
  readonly ssid?: string;
  /**
  * encryption block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/resources/gateway#encryption Gateway#encryption}
  */
  readonly encryption?: GatewayInterfacesWifiPropsEncryption;
}

export function gatewayInterfacesWifiPropsToTerraform(struct?: GatewayInterfacesWifiPropsOutputReference | GatewayInterfacesWifiProps): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bridge: cdktf.stringToTerraform(struct!.bridge),
    channel: cdktf.numberToTerraform(struct!.channel),
    country_code: cdktf.stringToTerraform(struct!.countryCode),
    freq: cdktf.numberToTerraform(struct!.freq),
    mode: cdktf.stringToTerraform(struct!.mode),
    ssid: cdktf.stringToTerraform(struct!.ssid),
    encryption: gatewayInterfacesWifiPropsEncryptionToTerraform(struct!.encryption),
  }
}


export function gatewayInterfacesWifiPropsToHclTerraform(struct?: GatewayInterfacesWifiPropsOutputReference | GatewayInterfacesWifiProps): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bridge: {
      value: cdktf.stringToHclTerraform(struct!.bridge),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    channel: {
      value: cdktf.numberToHclTerraform(struct!.channel),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    country_code: {
      value: cdktf.stringToHclTerraform(struct!.countryCode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    freq: {
      value: cdktf.numberToHclTerraform(struct!.freq),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    mode: {
      value: cdktf.stringToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssid: {
      value: cdktf.stringToHclTerraform(struct!.ssid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    encryption: {
      value: gatewayInterfacesWifiPropsEncryptionToHclTerraform(struct!.encryption),
      isBlock: true,
      type: "set",
      storageClassType: "GatewayInterfacesWifiPropsEncryptionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GatewayInterfacesWifiPropsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GatewayInterfacesWifiProps | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bridge !== undefined) {
      hasAnyValues = true;
      internalValueResult.bridge = this._bridge;
    }
    if (this._channel !== undefined) {
      hasAnyValues = true;
      internalValueResult.channel = this._channel;
    }
    if (this._countryCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.countryCode = this._countryCode;
    }
    if (this._freq !== undefined) {
      hasAnyValues = true;
      internalValueResult.freq = this._freq;
    }
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._ssid !== undefined) {
      hasAnyValues = true;
      internalValueResult.ssid = this._ssid;
    }
    if (this._encryption?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.encryption = this._encryption?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GatewayInterfacesWifiProps | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bridge = undefined;
      this._channel = undefined;
      this._countryCode = undefined;
      this._freq = undefined;
      this._mode = undefined;
      this._ssid = undefined;
      this._encryption.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bridge = value.bridge;
      this._channel = value.channel;
      this._countryCode = value.countryCode;
      this._freq = value.freq;
      this._mode = value.mode;
      this._ssid = value.ssid;
      this._encryption.internalValue = value.encryption;
    }
  }

  // bridge - computed: true, optional: true, required: false
  private _bridge?: string; 
  public get bridge() {
    return this.getStringAttribute('bridge');
  }
  public set bridge(value: string) {
    this._bridge = value;
  }
  public resetBridge() {
    this._bridge = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bridgeInput() {
    return this._bridge;
  }

  // channel - computed: true, optional: true, required: false
  private _channel?: number; 
  public get channel() {
    return this.getNumberAttribute('channel');
  }
  public set channel(value: number) {
    this._channel = value;
  }
  public resetChannel() {
    this._channel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get channelInput() {
    return this._channel;
  }

  // country_code - computed: true, optional: true, required: false
  private _countryCode?: string; 
  public get countryCode() {
    return this.getStringAttribute('country_code');
  }
  public set countryCode(value: string) {
    this._countryCode = value;
  }
  public resetCountryCode() {
    this._countryCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get countryCodeInput() {
    return this._countryCode;
  }

  // freq - computed: true, optional: true, required: false
  private _freq?: number; 
  public get freq() {
    return this.getNumberAttribute('freq');
  }
  public set freq(value: number) {
    this._freq = value;
  }
  public resetFreq() {
    this._freq = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get freqInput() {
    return this._freq;
  }

  // mode - computed: true, optional: true, required: false
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

  // ssid - computed: true, optional: true, required: false
  private _ssid?: string; 
  public get ssid() {
    return this.getStringAttribute('ssid');
  }
  public set ssid(value: string) {
    this._ssid = value;
  }
  public resetSsid() {
    this._ssid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ssidInput() {
    return this._ssid;
  }

  // encryption - computed: false, optional: true, required: false
  private _encryption = new GatewayInterfacesWifiPropsEncryptionOutputReference(this, "encryption");
  public get encryption() {
    return this._encryption;
  }
  public putEncryption(value: GatewayInterfacesWifiPropsEncryption) {
    this._encryption.internalValue = value;
  }
  public resetEncryption() {
    this._encryption.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionInput() {
    return this._encryption.internalValue;
  }
}
export interface GatewayInterfaces {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/resources/gateway#8021x_mab Gateway#8021x_mab}
  */
  readonly 8021XMab?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/resources/gateway#allowed_vlans Gateway#allowed_vlans}
  */
  readonly allowedVlans?: number[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/resources/gateway#bridge_members Gateway#bridge_members}
  */
  readonly bridgeMembers?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/resources/gateway#do_advertise Gateway#do_advertise}
  */
  readonly doAdvertise?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/resources/gateway#enable_nat Gateway#enable_nat}
  */
  readonly enableNat?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/resources/gateway#is_disabled Gateway#is_disabled}
  */
  readonly isDisabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/resources/gateway#mac_addr Gateway#mac_addr}
  */
  readonly macAddr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/resources/gateway#mode Gateway#mode}
  */
  readonly mode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/resources/gateway#mtu Gateway#mtu}
  */
  readonly mtu?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/resources/gateway#mtu_discovery Gateway#mtu_discovery}
  */
  readonly mtuDiscovery?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/resources/gateway#name Gateway#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/resources/gateway#type Gateway#type}
  */
  readonly type?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/resources/gateway#vlan Gateway#vlan}
  */
  readonly vlan?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/resources/gateway#zone Gateway#zone}
  */
  readonly zone?: string;
  /**
  * addresses block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/resources/gateway#addresses Gateway#addresses}
  */
  readonly addresses?: GatewayInterfacesAddresses[] | cdktf.IResolvable;
  /**
  * dhcp_relay_server_setting block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/resources/gateway#dhcp_relay_server_setting Gateway#dhcp_relay_server_setting}
  */
  readonly dhcpRelayServerSetting?: GatewayInterfacesDhcpRelayServerSetting;
  /**
  * dhcp_server_setting block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/resources/gateway#dhcp_server_setting Gateway#dhcp_server_setting}
  */
  readonly dhcpServerSetting?: GatewayInterfacesDhcpServerSetting;
  /**
  * lte_props block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/resources/gateway#lte_props Gateway#lte_props}
  */
  readonly lteProps?: GatewayInterfacesLteProps;
  /**
  * overlay_setting block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/resources/gateway#overlay_setting Gateway#overlay_setting}
  */
  readonly overlaySetting?: GatewayInterfacesOverlaySetting;
  /**
  * proxy_arp_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/resources/gateway#proxy_arp_settings Gateway#proxy_arp_settings}
  */
  readonly proxyArpSettings?: GatewayInterfacesProxyArpSettings[] | cdktf.IResolvable;
  /**
  * radius block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/resources/gateway#radius Gateway#radius}
  */
  readonly radius?: GatewayInterfacesRadius[] | cdktf.IResolvable;
  /**
  * vrrp block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/resources/gateway#vrrp Gateway#vrrp}
  */
  readonly vrrp?: GatewayInterfacesVrrp;
  /**
  * wifi_props block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/resources/gateway#wifi_props Gateway#wifi_props}
  */
  readonly wifiProps?: GatewayInterfacesWifiProps;
}

export function gatewayInterfacesToTerraform(struct?: GatewayInterfaces | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    8021x_mab: cdktf.booleanToTerraform(struct!.8021XMab),
    allowed_vlans: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.allowedVlans),
    bridge_members: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.bridgeMembers),
    do_advertise: cdktf.booleanToTerraform(struct!.doAdvertise),
    enable_nat: cdktf.booleanToTerraform(struct!.enableNat),
    is_disabled: cdktf.booleanToTerraform(struct!.isDisabled),
    mac_addr: cdktf.stringToTerraform(struct!.macAddr),
    mode: cdktf.stringToTerraform(struct!.mode),
    mtu: cdktf.numberToTerraform(struct!.mtu),
    mtu_discovery: cdktf.stringToTerraform(struct!.mtuDiscovery),
    name: cdktf.stringToTerraform(struct!.name),
    type: cdktf.stringToTerraform(struct!.type),
    vlan: cdktf.numberToTerraform(struct!.vlan),
    zone: cdktf.stringToTerraform(struct!.zone),
    addresses: cdktf.listMapper(gatewayInterfacesAddressesToTerraform, true)(struct!.addresses),
    dhcp_relay_server_setting: gatewayInterfacesDhcpRelayServerSettingToTerraform(struct!.dhcpRelayServerSetting),
    dhcp_server_setting: gatewayInterfacesDhcpServerSettingToTerraform(struct!.dhcpServerSetting),
    lte_props: gatewayInterfacesLtePropsToTerraform(struct!.lteProps),
    overlay_setting: gatewayInterfacesOverlaySettingToTerraform(struct!.overlaySetting),
    proxy_arp_settings: cdktf.listMapper(gatewayInterfacesProxyArpSettingsToTerraform, true)(struct!.proxyArpSettings),
    radius: cdktf.listMapper(gatewayInterfacesRadiusToTerraform, true)(struct!.radius),
    vrrp: gatewayInterfacesVrrpToTerraform(struct!.vrrp),
    wifi_props: gatewayInterfacesWifiPropsToTerraform(struct!.wifiProps),
  }
}


export function gatewayInterfacesToHclTerraform(struct?: GatewayInterfaces | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    8021x_mab: {
      value: cdktf.booleanToHclTerraform(struct!.8021XMab),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    allowed_vlans: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.allowedVlans),
      isBlock: false,
      type: "list",
      storageClassType: "numberList",
    },
    bridge_members: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.bridgeMembers),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    do_advertise: {
      value: cdktf.booleanToHclTerraform(struct!.doAdvertise),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_nat: {
      value: cdktf.booleanToHclTerraform(struct!.enableNat),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    is_disabled: {
      value: cdktf.booleanToHclTerraform(struct!.isDisabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    mac_addr: {
      value: cdktf.stringToHclTerraform(struct!.macAddr),
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
    mtu: {
      value: cdktf.numberToHclTerraform(struct!.mtu),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    mtu_discovery: {
      value: cdktf.stringToHclTerraform(struct!.mtuDiscovery),
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
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vlan: {
      value: cdktf.numberToHclTerraform(struct!.vlan),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    zone: {
      value: cdktf.stringToHclTerraform(struct!.zone),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    addresses: {
      value: cdktf.listMapperHcl(gatewayInterfacesAddressesToHclTerraform, true)(struct!.addresses),
      isBlock: true,
      type: "list",
      storageClassType: "GatewayInterfacesAddressesList",
    },
    dhcp_relay_server_setting: {
      value: gatewayInterfacesDhcpRelayServerSettingToHclTerraform(struct!.dhcpRelayServerSetting),
      isBlock: true,
      type: "set",
      storageClassType: "GatewayInterfacesDhcpRelayServerSettingList",
    },
    dhcp_server_setting: {
      value: gatewayInterfacesDhcpServerSettingToHclTerraform(struct!.dhcpServerSetting),
      isBlock: true,
      type: "set",
      storageClassType: "GatewayInterfacesDhcpServerSettingList",
    },
    lte_props: {
      value: gatewayInterfacesLtePropsToHclTerraform(struct!.lteProps),
      isBlock: true,
      type: "set",
      storageClassType: "GatewayInterfacesLtePropsList",
    },
    overlay_setting: {
      value: gatewayInterfacesOverlaySettingToHclTerraform(struct!.overlaySetting),
      isBlock: true,
      type: "set",
      storageClassType: "GatewayInterfacesOverlaySettingList",
    },
    proxy_arp_settings: {
      value: cdktf.listMapperHcl(gatewayInterfacesProxyArpSettingsToHclTerraform, true)(struct!.proxyArpSettings),
      isBlock: true,
      type: "list",
      storageClassType: "GatewayInterfacesProxyArpSettingsList",
    },
    radius: {
      value: cdktf.listMapperHcl(gatewayInterfacesRadiusToHclTerraform, true)(struct!.radius),
      isBlock: true,
      type: "list",
      storageClassType: "GatewayInterfacesRadiusList",
    },
    vrrp: {
      value: gatewayInterfacesVrrpToHclTerraform(struct!.vrrp),
      isBlock: true,
      type: "set",
      storageClassType: "GatewayInterfacesVrrpList",
    },
    wifi_props: {
      value: gatewayInterfacesWifiPropsToHclTerraform(struct!.wifiProps),
      isBlock: true,
      type: "set",
      storageClassType: "GatewayInterfacesWifiPropsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GatewayInterfacesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GatewayInterfaces | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._8021XMab !== undefined) {
      hasAnyValues = true;
      internalValueResult.8021XMab = this._8021XMab;
    }
    if (this._allowedVlans !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedVlans = this._allowedVlans;
    }
    if (this._bridgeMembers !== undefined) {
      hasAnyValues = true;
      internalValueResult.bridgeMembers = this._bridgeMembers;
    }
    if (this._doAdvertise !== undefined) {
      hasAnyValues = true;
      internalValueResult.doAdvertise = this._doAdvertise;
    }
    if (this._enableNat !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableNat = this._enableNat;
    }
    if (this._isDisabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.isDisabled = this._isDisabled;
    }
    if (this._macAddr !== undefined) {
      hasAnyValues = true;
      internalValueResult.macAddr = this._macAddr;
    }
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._mtu !== undefined) {
      hasAnyValues = true;
      internalValueResult.mtu = this._mtu;
    }
    if (this._mtuDiscovery !== undefined) {
      hasAnyValues = true;
      internalValueResult.mtuDiscovery = this._mtuDiscovery;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._vlan !== undefined) {
      hasAnyValues = true;
      internalValueResult.vlan = this._vlan;
    }
    if (this._zone !== undefined) {
      hasAnyValues = true;
      internalValueResult.zone = this._zone;
    }
    if (this._addresses?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.addresses = this._addresses?.internalValue;
    }
    if (this._dhcpRelayServerSetting?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dhcpRelayServerSetting = this._dhcpRelayServerSetting?.internalValue;
    }
    if (this._dhcpServerSetting?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dhcpServerSetting = this._dhcpServerSetting?.internalValue;
    }
    if (this._lteProps?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.lteProps = this._lteProps?.internalValue;
    }
    if (this._overlaySetting?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.overlaySetting = this._overlaySetting?.internalValue;
    }
    if (this._proxyArpSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.proxyArpSettings = this._proxyArpSettings?.internalValue;
    }
    if (this._radius?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.radius = this._radius?.internalValue;
    }
    if (this._vrrp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vrrp = this._vrrp?.internalValue;
    }
    if (this._wifiProps?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.wifiProps = this._wifiProps?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GatewayInterfaces | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._8021XMab = undefined;
      this._allowedVlans = undefined;
      this._bridgeMembers = undefined;
      this._doAdvertise = undefined;
      this._enableNat = undefined;
      this._isDisabled = undefined;
      this._macAddr = undefined;
      this._mode = undefined;
      this._mtu = undefined;
      this._mtuDiscovery = undefined;
      this._name = undefined;
      this._type = undefined;
      this._vlan = undefined;
      this._zone = undefined;
      this._addresses.internalValue = undefined;
      this._dhcpRelayServerSetting.internalValue = undefined;
      this._dhcpServerSetting.internalValue = undefined;
      this._lteProps.internalValue = undefined;
      this._overlaySetting.internalValue = undefined;
      this._proxyArpSettings.internalValue = undefined;
      this._radius.internalValue = undefined;
      this._vrrp.internalValue = undefined;
      this._wifiProps.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._8021XMab = value.8021XMab;
      this._allowedVlans = value.allowedVlans;
      this._bridgeMembers = value.bridgeMembers;
      this._doAdvertise = value.doAdvertise;
      this._enableNat = value.enableNat;
      this._isDisabled = value.isDisabled;
      this._macAddr = value.macAddr;
      this._mode = value.mode;
      this._mtu = value.mtu;
      this._mtuDiscovery = value.mtuDiscovery;
      this._name = value.name;
      this._type = value.type;
      this._vlan = value.vlan;
      this._zone = value.zone;
      this._addresses.internalValue = value.addresses;
      this._dhcpRelayServerSetting.internalValue = value.dhcpRelayServerSetting;
      this._dhcpServerSetting.internalValue = value.dhcpServerSetting;
      this._lteProps.internalValue = value.lteProps;
      this._overlaySetting.internalValue = value.overlaySetting;
      this._proxyArpSettings.internalValue = value.proxyArpSettings;
      this._radius.internalValue = value.radius;
      this._vrrp.internalValue = value.vrrp;
      this._wifiProps.internalValue = value.wifiProps;
    }
  }

  // 8021x_mab - computed: true, optional: true, required: false
  private _8021XMab?: boolean | cdktf.IResolvable; 
  public get 8021XMab() {
    return this.getBooleanAttribute('8021x_mab');
  }
  public set 8021XMab(value: boolean | cdktf.IResolvable) {
    this._8021XMab = value;
  }
  public reset8021XMab() {
    this._8021XMab = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get 8021XMabInput() {
    return this._8021XMab;
  }

  // allowed_vlans - computed: true, optional: true, required: false
  private _allowedVlans?: number[]; 
  public get allowedVlans() {
    return this.getNumberListAttribute('allowed_vlans');
  }
  public set allowedVlans(value: number[]) {
    this._allowedVlans = value;
  }
  public resetAllowedVlans() {
    this._allowedVlans = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedVlansInput() {
    return this._allowedVlans;
  }

  // bridge_members - computed: true, optional: true, required: false
  private _bridgeMembers?: string[]; 
  public get bridgeMembers() {
    return this.getListAttribute('bridge_members');
  }
  public set bridgeMembers(value: string[]) {
    this._bridgeMembers = value;
  }
  public resetBridgeMembers() {
    this._bridgeMembers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bridgeMembersInput() {
    return this._bridgeMembers;
  }

  // do_advertise - computed: true, optional: true, required: false
  private _doAdvertise?: boolean | cdktf.IResolvable; 
  public get doAdvertise() {
    return this.getBooleanAttribute('do_advertise');
  }
  public set doAdvertise(value: boolean | cdktf.IResolvable) {
    this._doAdvertise = value;
  }
  public resetDoAdvertise() {
    this._doAdvertise = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get doAdvertiseInput() {
    return this._doAdvertise;
  }

  // enable_nat - computed: true, optional: true, required: false
  private _enableNat?: boolean | cdktf.IResolvable; 
  public get enableNat() {
    return this.getBooleanAttribute('enable_nat');
  }
  public set enableNat(value: boolean | cdktf.IResolvable) {
    this._enableNat = value;
  }
  public resetEnableNat() {
    this._enableNat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableNatInput() {
    return this._enableNat;
  }

  // is_disabled - computed: true, optional: true, required: false
  private _isDisabled?: boolean | cdktf.IResolvable; 
  public get isDisabled() {
    return this.getBooleanAttribute('is_disabled');
  }
  public set isDisabled(value: boolean | cdktf.IResolvable) {
    this._isDisabled = value;
  }
  public resetIsDisabled() {
    this._isDisabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isDisabledInput() {
    return this._isDisabled;
  }

  // mac_addr - computed: true, optional: true, required: false
  private _macAddr?: string; 
  public get macAddr() {
    return this.getStringAttribute('mac_addr');
  }
  public set macAddr(value: string) {
    this._macAddr = value;
  }
  public resetMacAddr() {
    this._macAddr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get macAddrInput() {
    return this._macAddr;
  }

  // mode - computed: true, optional: true, required: false
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

  // mtu - computed: true, optional: true, required: false
  private _mtu?: number; 
  public get mtu() {
    return this.getNumberAttribute('mtu');
  }
  public set mtu(value: number) {
    this._mtu = value;
  }
  public resetMtu() {
    this._mtu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mtuInput() {
    return this._mtu;
  }

  // mtu_discovery - computed: true, optional: true, required: false
  private _mtuDiscovery?: string; 
  public get mtuDiscovery() {
    return this.getStringAttribute('mtu_discovery');
  }
  public set mtuDiscovery(value: string) {
    this._mtuDiscovery = value;
  }
  public resetMtuDiscovery() {
    this._mtuDiscovery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mtuDiscoveryInput() {
    return this._mtuDiscovery;
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

  // type - computed: true, optional: true, required: false
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

  // vlan - computed: true, optional: true, required: false
  private _vlan?: number; 
  public get vlan() {
    return this.getNumberAttribute('vlan');
  }
  public set vlan(value: number) {
    this._vlan = value;
  }
  public resetVlan() {
    this._vlan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanInput() {
    return this._vlan;
  }

  // zone - computed: true, optional: true, required: false
  private _zone?: string; 
  public get zone() {
    return this.getStringAttribute('zone');
  }
  public set zone(value: string) {
    this._zone = value;
  }
  public resetZone() {
    this._zone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneInput() {
    return this._zone;
  }

  // addresses - computed: false, optional: true, required: false
  private _addresses = new GatewayInterfacesAddressesList(this, "addresses", false);
  public get addresses() {
    return this._addresses;
  }
  public putAddresses(value: GatewayInterfacesAddresses[] | cdktf.IResolvable) {
    this._addresses.internalValue = value;
  }
  public resetAddresses() {
    this._addresses.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressesInput() {
    return this._addresses.internalValue;
  }

  // dhcp_relay_server_setting - computed: false, optional: true, required: false
  private _dhcpRelayServerSetting = new GatewayInterfacesDhcpRelayServerSettingOutputReference(this, "dhcp_relay_server_setting");
  public get dhcpRelayServerSetting() {
    return this._dhcpRelayServerSetting;
  }
  public putDhcpRelayServerSetting(value: GatewayInterfacesDhcpRelayServerSetting) {
    this._dhcpRelayServerSetting.internalValue = value;
  }
  public resetDhcpRelayServerSetting() {
    this._dhcpRelayServerSetting.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpRelayServerSettingInput() {
    return this._dhcpRelayServerSetting.internalValue;
  }

  // dhcp_server_setting - computed: false, optional: true, required: false
  private _dhcpServerSetting = new GatewayInterfacesDhcpServerSettingOutputReference(this, "dhcp_server_setting");
  public get dhcpServerSetting() {
    return this._dhcpServerSetting;
  }
  public putDhcpServerSetting(value: GatewayInterfacesDhcpServerSetting) {
    this._dhcpServerSetting.internalValue = value;
  }
  public resetDhcpServerSetting() {
    this._dhcpServerSetting.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpServerSettingInput() {
    return this._dhcpServerSetting.internalValue;
  }

  // lte_props - computed: false, optional: true, required: false
  private _lteProps = new GatewayInterfacesLtePropsOutputReference(this, "lte_props");
  public get lteProps() {
    return this._lteProps;
  }
  public putLteProps(value: GatewayInterfacesLteProps) {
    this._lteProps.internalValue = value;
  }
  public resetLteProps() {
    this._lteProps.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ltePropsInput() {
    return this._lteProps.internalValue;
  }

  // overlay_setting - computed: false, optional: true, required: false
  private _overlaySetting = new GatewayInterfacesOverlaySettingOutputReference(this, "overlay_setting");
  public get overlaySetting() {
    return this._overlaySetting;
  }
  public putOverlaySetting(value: GatewayInterfacesOverlaySetting) {
    this._overlaySetting.internalValue = value;
  }
  public resetOverlaySetting() {
    this._overlaySetting.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overlaySettingInput() {
    return this._overlaySetting.internalValue;
  }

  // proxy_arp_settings - computed: false, optional: true, required: false
  private _proxyArpSettings = new GatewayInterfacesProxyArpSettingsList(this, "proxy_arp_settings", false);
  public get proxyArpSettings() {
    return this._proxyArpSettings;
  }
  public putProxyArpSettings(value: GatewayInterfacesProxyArpSettings[] | cdktf.IResolvable) {
    this._proxyArpSettings.internalValue = value;
  }
  public resetProxyArpSettings() {
    this._proxyArpSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyArpSettingsInput() {
    return this._proxyArpSettings.internalValue;
  }

  // radius - computed: false, optional: true, required: false
  private _radius = new GatewayInterfacesRadiusList(this, "radius", false);
  public get radius() {
    return this._radius;
  }
  public putRadius(value: GatewayInterfacesRadius[] | cdktf.IResolvable) {
    this._radius.internalValue = value;
  }
  public resetRadius() {
    this._radius.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get radiusInput() {
    return this._radius.internalValue;
  }

  // vrrp - computed: false, optional: true, required: false
  private _vrrp = new GatewayInterfacesVrrpOutputReference(this, "vrrp");
  public get vrrp() {
    return this._vrrp;
  }
  public putVrrp(value: GatewayInterfacesVrrp) {
    this._vrrp.internalValue = value;
  }
  public resetVrrp() {
    this._vrrp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vrrpInput() {
    return this._vrrp.internalValue;
  }

  // wifi_props - computed: false, optional: true, required: false
  private _wifiProps = new GatewayInterfacesWifiPropsOutputReference(this, "wifi_props");
  public get wifiProps() {
    return this._wifiProps;
  }
  public putWifiProps(value: GatewayInterfacesWifiProps) {
    this._wifiProps.internalValue = value;
  }
  public resetWifiProps() {
    this._wifiProps.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wifiPropsInput() {
    return this._wifiProps.internalValue;
  }
}

export class GatewayInterfacesList extends cdktf.ComplexList {
  public internalValue? : GatewayInterfaces[] | cdktf.IResolvable

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
  public get(index: number): GatewayInterfacesOutputReference {
    return new GatewayInterfacesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GatewayModifiedBy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/resources/gateway#email Gateway#email}
  */
  readonly email?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/resources/gateway#id Gateway#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/resources/gateway#name Gateway#name}
  */
  readonly name?: string;
}

export function gatewayModifiedByToTerraform(struct?: GatewayModifiedByOutputReference | GatewayModifiedBy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    email: cdktf.stringToTerraform(struct!.email),
    id: cdktf.stringToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function gatewayModifiedByToHclTerraform(struct?: GatewayModifiedByOutputReference | GatewayModifiedBy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    email: {
      value: cdktf.stringToHclTerraform(struct!.email),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
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

export class GatewayModifiedByOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GatewayModifiedBy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._email !== undefined) {
      hasAnyValues = true;
      internalValueResult.email = this._email;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GatewayModifiedBy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._email = undefined;
      this._id = undefined;
      this._name = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._email = value.email;
      this._id = value.id;
      this._name = value.name;
    }
  }

  // email - computed: true, optional: true, required: false
  private _email?: string; 
  public get email() {
    return this.getStringAttribute('email');
  }
  public set email(value: string) {
    this._email = value;
  }
  public resetEmail() {
    this._email = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailInput() {
    return this._email;
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
}
export interface GatewayMqttConfigurationTopic {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/resources/gateway#name Gateway#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/resources/gateway#uri Gateway#uri}
  */
  readonly uri?: string;
}

export function gatewayMqttConfigurationTopicToTerraform(struct?: GatewayMqttConfigurationTopic | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    uri: cdktf.stringToTerraform(struct!.uri),
  }
}


export function gatewayMqttConfigurationTopicToHclTerraform(struct?: GatewayMqttConfigurationTopic | cdktf.IResolvable): any {
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
    uri: {
      value: cdktf.stringToHclTerraform(struct!.uri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GatewayMqttConfigurationTopicOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GatewayMqttConfigurationTopic | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._uri !== undefined) {
      hasAnyValues = true;
      internalValueResult.uri = this._uri;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GatewayMqttConfigurationTopic | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._uri = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._uri = value.uri;
    }
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

  // uri - computed: true, optional: true, required: false
  private _uri?: string; 
  public get uri() {
    return this.getStringAttribute('uri');
  }
  public set uri(value: string) {
    this._uri = value;
  }
  public resetUri() {
    this._uri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uriInput() {
    return this._uri;
  }
}

export class GatewayMqttConfigurationTopicList extends cdktf.ComplexList {
  public internalValue? : GatewayMqttConfigurationTopic[] | cdktf.IResolvable

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
  public get(index: number): GatewayMqttConfigurationTopicOutputReference {
    return new GatewayMqttConfigurationTopicOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GatewayMqttConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/resources/gateway#device_id Gateway#device_id}
  */
  readonly deviceId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/resources/gateway#name Gateway#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/resources/gateway#project_id Gateway#project_id}
  */
  readonly projectId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/resources/gateway#region Gateway#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/resources/gateway#registry Gateway#registry}
  */
  readonly registry?: string;
  /**
  * topic block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/resources/gateway#topic Gateway#topic}
  */
  readonly topic?: GatewayMqttConfigurationTopic[] | cdktf.IResolvable;
}

export function gatewayMqttConfigurationToTerraform(struct?: GatewayMqttConfigurationOutputReference | GatewayMqttConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    device_id: cdktf.stringToTerraform(struct!.deviceId),
    name: cdktf.stringToTerraform(struct!.name),
    project_id: cdktf.stringToTerraform(struct!.projectId),
    region: cdktf.stringToTerraform(struct!.region),
    registry: cdktf.stringToTerraform(struct!.registry),
    topic: cdktf.listMapper(gatewayMqttConfigurationTopicToTerraform, true)(struct!.topic),
  }
}


export function gatewayMqttConfigurationToHclTerraform(struct?: GatewayMqttConfigurationOutputReference | GatewayMqttConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    device_id: {
      value: cdktf.stringToHclTerraform(struct!.deviceId),
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
    project_id: {
      value: cdktf.stringToHclTerraform(struct!.projectId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    region: {
      value: cdktf.stringToHclTerraform(struct!.region),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    registry: {
      value: cdktf.stringToHclTerraform(struct!.registry),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    topic: {
      value: cdktf.listMapperHcl(gatewayMqttConfigurationTopicToHclTerraform, true)(struct!.topic),
      isBlock: true,
      type: "list",
      storageClassType: "GatewayMqttConfigurationTopicList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GatewayMqttConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GatewayMqttConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._deviceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.deviceId = this._deviceId;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._projectId !== undefined) {
      hasAnyValues = true;
      internalValueResult.projectId = this._projectId;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    if (this._registry !== undefined) {
      hasAnyValues = true;
      internalValueResult.registry = this._registry;
    }
    if (this._topic?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.topic = this._topic?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GatewayMqttConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._deviceId = undefined;
      this._name = undefined;
      this._projectId = undefined;
      this._region = undefined;
      this._registry = undefined;
      this._topic.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._deviceId = value.deviceId;
      this._name = value.name;
      this._projectId = value.projectId;
      this._region = value.region;
      this._registry = value.registry;
      this._topic.internalValue = value.topic;
    }
  }

  // device_id - computed: true, optional: true, required: false
  private _deviceId?: string; 
  public get deviceId() {
    return this.getStringAttribute('device_id');
  }
  public set deviceId(value: string) {
    this._deviceId = value;
  }
  public resetDeviceId() {
    this._deviceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceIdInput() {
    return this._deviceId;
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

  // project_id - computed: true, optional: true, required: false
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  public resetProjectId() {
    this._projectId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
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

  // registry - computed: true, optional: true, required: false
  private _registry?: string; 
  public get registry() {
    return this.getStringAttribute('registry');
  }
  public set registry(value: string) {
    this._registry = value;
  }
  public resetRegistry() {
    this._registry = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get registryInput() {
    return this._registry;
  }

  // topic - computed: false, optional: true, required: false
  private _topic = new GatewayMqttConfigurationTopicList(this, "topic", false);
  public get topic() {
    return this._topic;
  }
  public putTopic(value: GatewayMqttConfigurationTopic[] | cdktf.IResolvable) {
    this._topic.internalValue = value;
  }
  public resetTopic() {
    this._topic.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get topicInput() {
    return this._topic.internalValue;
  }
}
export interface GatewayOne2OneNatRules {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/resources/gateway#bi_directional Gateway#bi_directional}
  */
  readonly biDirectional?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/resources/gateway#lan_ip Gateway#lan_ip}
  */
  readonly lanIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/resources/gateway#lan_port Gateway#lan_port}
  */
  readonly lanPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/resources/gateway#name Gateway#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/resources/gateway#public_ip Gateway#public_ip}
  */
  readonly publicIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/resources/gateway#public_port Gateway#public_port}
  */
  readonly publicPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/resources/gateway#up_link_if_name Gateway#up_link_if_name}
  */
  readonly upLinkIfName?: string;
}

export function gatewayOne2OneNatRulesToTerraform(struct?: GatewayOne2OneNatRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bi_directional: cdktf.booleanToTerraform(struct!.biDirectional),
    lan_ip: cdktf.stringToTerraform(struct!.lanIp),
    lan_port: cdktf.numberToTerraform(struct!.lanPort),
    name: cdktf.stringToTerraform(struct!.name),
    public_ip: cdktf.stringToTerraform(struct!.publicIp),
    public_port: cdktf.numberToTerraform(struct!.publicPort),
    up_link_if_name: cdktf.stringToTerraform(struct!.upLinkIfName),
  }
}


export function gatewayOne2OneNatRulesToHclTerraform(struct?: GatewayOne2OneNatRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bi_directional: {
      value: cdktf.booleanToHclTerraform(struct!.biDirectional),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    lan_ip: {
      value: cdktf.stringToHclTerraform(struct!.lanIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    lan_port: {
      value: cdktf.numberToHclTerraform(struct!.lanPort),
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
    public_ip: {
      value: cdktf.stringToHclTerraform(struct!.publicIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    public_port: {
      value: cdktf.numberToHclTerraform(struct!.publicPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    up_link_if_name: {
      value: cdktf.stringToHclTerraform(struct!.upLinkIfName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GatewayOne2OneNatRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GatewayOne2OneNatRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._biDirectional !== undefined) {
      hasAnyValues = true;
      internalValueResult.biDirectional = this._biDirectional;
    }
    if (this._lanIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.lanIp = this._lanIp;
    }
    if (this._lanPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.lanPort = this._lanPort;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._publicIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.publicIp = this._publicIp;
    }
    if (this._publicPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.publicPort = this._publicPort;
    }
    if (this._upLinkIfName !== undefined) {
      hasAnyValues = true;
      internalValueResult.upLinkIfName = this._upLinkIfName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GatewayOne2OneNatRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._biDirectional = undefined;
      this._lanIp = undefined;
      this._lanPort = undefined;
      this._name = undefined;
      this._publicIp = undefined;
      this._publicPort = undefined;
      this._upLinkIfName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._biDirectional = value.biDirectional;
      this._lanIp = value.lanIp;
      this._lanPort = value.lanPort;
      this._name = value.name;
      this._publicIp = value.publicIp;
      this._publicPort = value.publicPort;
      this._upLinkIfName = value.upLinkIfName;
    }
  }

  // bi_directional - computed: true, optional: true, required: false
  private _biDirectional?: boolean | cdktf.IResolvable; 
  public get biDirectional() {
    return this.getBooleanAttribute('bi_directional');
  }
  public set biDirectional(value: boolean | cdktf.IResolvable) {
    this._biDirectional = value;
  }
  public resetBiDirectional() {
    this._biDirectional = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get biDirectionalInput() {
    return this._biDirectional;
  }

  // lan_ip - computed: true, optional: true, required: false
  private _lanIp?: string; 
  public get lanIp() {
    return this.getStringAttribute('lan_ip');
  }
  public set lanIp(value: string) {
    this._lanIp = value;
  }
  public resetLanIp() {
    this._lanIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lanIpInput() {
    return this._lanIp;
  }

  // lan_port - computed: true, optional: true, required: false
  private _lanPort?: number; 
  public get lanPort() {
    return this.getNumberAttribute('lan_port');
  }
  public set lanPort(value: number) {
    this._lanPort = value;
  }
  public resetLanPort() {
    this._lanPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lanPortInput() {
    return this._lanPort;
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

  // public_ip - computed: true, optional: true, required: false
  private _publicIp?: string; 
  public get publicIp() {
    return this.getStringAttribute('public_ip');
  }
  public set publicIp(value: string) {
    this._publicIp = value;
  }
  public resetPublicIp() {
    this._publicIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicIpInput() {
    return this._publicIp;
  }

  // public_port - computed: true, optional: true, required: false
  private _publicPort?: number; 
  public get publicPort() {
    return this.getNumberAttribute('public_port');
  }
  public set publicPort(value: number) {
    this._publicPort = value;
  }
  public resetPublicPort() {
    this._publicPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicPortInput() {
    return this._publicPort;
  }

  // up_link_if_name - computed: true, optional: true, required: false
  private _upLinkIfName?: string; 
  public get upLinkIfName() {
    return this.getStringAttribute('up_link_if_name');
  }
  public set upLinkIfName(value: string) {
    this._upLinkIfName = value;
  }
  public resetUpLinkIfName() {
    this._upLinkIfName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get upLinkIfNameInput() {
    return this._upLinkIfName;
  }
}

export class GatewayOne2OneNatRulesList extends cdktf.ComplexList {
  public internalValue? : GatewayOne2OneNatRules[] | cdktf.IResolvable

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
  public get(index: number): GatewayOne2OneNatRulesOutputReference {
    return new GatewayOne2OneNatRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GatewayOverlayConfigurationRoutableAddresses {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/resources/gateway#network_address Gateway#network_address}
  */
  readonly networkAddress?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/resources/gateway#network_tag Gateway#network_tag}
  */
  readonly networkTag?: string;
}

export function gatewayOverlayConfigurationRoutableAddressesToTerraform(struct?: GatewayOverlayConfigurationRoutableAddresses | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    network_address: cdktf.stringToTerraform(struct!.networkAddress),
    network_tag: cdktf.stringToTerraform(struct!.networkTag),
  }
}


export function gatewayOverlayConfigurationRoutableAddressesToHclTerraform(struct?: GatewayOverlayConfigurationRoutableAddresses | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    network_address: {
      value: cdktf.stringToHclTerraform(struct!.networkAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    network_tag: {
      value: cdktf.stringToHclTerraform(struct!.networkTag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GatewayOverlayConfigurationRoutableAddressesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GatewayOverlayConfigurationRoutableAddresses | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._networkAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkAddress = this._networkAddress;
    }
    if (this._networkTag !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkTag = this._networkTag;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GatewayOverlayConfigurationRoutableAddresses | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._networkAddress = undefined;
      this._networkTag = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._networkAddress = value.networkAddress;
      this._networkTag = value.networkTag;
    }
  }

  // network_address - computed: true, optional: true, required: false
  private _networkAddress?: string; 
  public get networkAddress() {
    return this.getStringAttribute('network_address');
  }
  public set networkAddress(value: string) {
    this._networkAddress = value;
  }
  public resetNetworkAddress() {
    this._networkAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkAddressInput() {
    return this._networkAddress;
  }

  // network_tag - computed: true, optional: true, required: false
  private _networkTag?: string; 
  public get networkTag() {
    return this.getStringAttribute('network_tag');
  }
  public set networkTag(value: string) {
    this._networkTag = value;
  }
  public resetNetworkTag() {
    this._networkTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkTagInput() {
    return this._networkTag;
  }
}

export class GatewayOverlayConfigurationRoutableAddressesList extends cdktf.ComplexList {
  public internalValue? : GatewayOverlayConfigurationRoutableAddresses[] | cdktf.IResolvable

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
  public get(index: number): GatewayOverlayConfigurationRoutableAddressesOutputReference {
    return new GatewayOverlayConfigurationRoutableAddressesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GatewayOverlayConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/resources/gateway#ip Gateway#ip}
  */
  readonly ip?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/resources/gateway#mask Gateway#mask}
  */
  readonly mask?: string;
  /**
  * routable_addresses block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/resources/gateway#routable_addresses Gateway#routable_addresses}
  */
  readonly routableAddresses?: GatewayOverlayConfigurationRoutableAddresses[] | cdktf.IResolvable;
}

export function gatewayOverlayConfigurationToTerraform(struct?: GatewayOverlayConfigurationOutputReference | GatewayOverlayConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip: cdktf.stringToTerraform(struct!.ip),
    mask: cdktf.stringToTerraform(struct!.mask),
    routable_addresses: cdktf.listMapper(gatewayOverlayConfigurationRoutableAddressesToTerraform, true)(struct!.routableAddresses),
  }
}


export function gatewayOverlayConfigurationToHclTerraform(struct?: GatewayOverlayConfigurationOutputReference | GatewayOverlayConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ip: {
      value: cdktf.stringToHclTerraform(struct!.ip),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mask: {
      value: cdktf.stringToHclTerraform(struct!.mask),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    routable_addresses: {
      value: cdktf.listMapperHcl(gatewayOverlayConfigurationRoutableAddressesToHclTerraform, true)(struct!.routableAddresses),
      isBlock: true,
      type: "list",
      storageClassType: "GatewayOverlayConfigurationRoutableAddressesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GatewayOverlayConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GatewayOverlayConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ip !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip = this._ip;
    }
    if (this._mask !== undefined) {
      hasAnyValues = true;
      internalValueResult.mask = this._mask;
    }
    if (this._routableAddresses?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.routableAddresses = this._routableAddresses?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GatewayOverlayConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ip = undefined;
      this._mask = undefined;
      this._routableAddresses.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ip = value.ip;
      this._mask = value.mask;
      this._routableAddresses.internalValue = value.routableAddresses;
    }
  }

  // ip - computed: true, optional: true, required: false
  private _ip?: string; 
  public get ip() {
    return this.getStringAttribute('ip');
  }
  public set ip(value: string) {
    this._ip = value;
  }
  public resetIp() {
    this._ip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipInput() {
    return this._ip;
  }

  // mask - computed: true, optional: true, required: false
  private _mask?: string; 
  public get mask() {
    return this.getStringAttribute('mask');
  }
  public set mask(value: string) {
    this._mask = value;
  }
  public resetMask() {
    this._mask = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maskInput() {
    return this._mask;
  }

  // routable_addresses - computed: false, optional: true, required: false
  private _routableAddresses = new GatewayOverlayConfigurationRoutableAddressesList(this, "routable_addresses", false);
  public get routableAddresses() {
    return this._routableAddresses;
  }
  public putRoutableAddresses(value: GatewayOverlayConfigurationRoutableAddresses[] | cdktf.IResolvable) {
    this._routableAddresses.internalValue = value;
  }
  public resetRoutableAddresses() {
    this._routableAddresses.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routableAddressesInput() {
    return this._routableAddresses.internalValue;
  }
}
export interface GatewayPortForwardingNatRules {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/resources/gateway#bi_directional Gateway#bi_directional}
  */
  readonly biDirectional?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/resources/gateway#lan_ip Gateway#lan_ip}
  */
  readonly lanIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/resources/gateway#lan_port Gateway#lan_port}
  */
  readonly lanPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/resources/gateway#name Gateway#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/resources/gateway#public_ip Gateway#public_ip}
  */
  readonly publicIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/resources/gateway#public_port Gateway#public_port}
  */
  readonly publicPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/resources/gateway#up_link_if_name Gateway#up_link_if_name}
  */
  readonly upLinkIfName?: string;
}

export function gatewayPortForwardingNatRulesToTerraform(struct?: GatewayPortForwardingNatRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bi_directional: cdktf.booleanToTerraform(struct!.biDirectional),
    lan_ip: cdktf.stringToTerraform(struct!.lanIp),
    lan_port: cdktf.numberToTerraform(struct!.lanPort),
    name: cdktf.stringToTerraform(struct!.name),
    public_ip: cdktf.stringToTerraform(struct!.publicIp),
    public_port: cdktf.numberToTerraform(struct!.publicPort),
    up_link_if_name: cdktf.stringToTerraform(struct!.upLinkIfName),
  }
}


export function gatewayPortForwardingNatRulesToHclTerraform(struct?: GatewayPortForwardingNatRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bi_directional: {
      value: cdktf.booleanToHclTerraform(struct!.biDirectional),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    lan_ip: {
      value: cdktf.stringToHclTerraform(struct!.lanIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    lan_port: {
      value: cdktf.numberToHclTerraform(struct!.lanPort),
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
    public_ip: {
      value: cdktf.stringToHclTerraform(struct!.publicIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    public_port: {
      value: cdktf.numberToHclTerraform(struct!.publicPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    up_link_if_name: {
      value: cdktf.stringToHclTerraform(struct!.upLinkIfName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GatewayPortForwardingNatRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GatewayPortForwardingNatRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._biDirectional !== undefined) {
      hasAnyValues = true;
      internalValueResult.biDirectional = this._biDirectional;
    }
    if (this._lanIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.lanIp = this._lanIp;
    }
    if (this._lanPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.lanPort = this._lanPort;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._publicIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.publicIp = this._publicIp;
    }
    if (this._publicPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.publicPort = this._publicPort;
    }
    if (this._upLinkIfName !== undefined) {
      hasAnyValues = true;
      internalValueResult.upLinkIfName = this._upLinkIfName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GatewayPortForwardingNatRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._biDirectional = undefined;
      this._lanIp = undefined;
      this._lanPort = undefined;
      this._name = undefined;
      this._publicIp = undefined;
      this._publicPort = undefined;
      this._upLinkIfName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._biDirectional = value.biDirectional;
      this._lanIp = value.lanIp;
      this._lanPort = value.lanPort;
      this._name = value.name;
      this._publicIp = value.publicIp;
      this._publicPort = value.publicPort;
      this._upLinkIfName = value.upLinkIfName;
    }
  }

  // bi_directional - computed: true, optional: true, required: false
  private _biDirectional?: boolean | cdktf.IResolvable; 
  public get biDirectional() {
    return this.getBooleanAttribute('bi_directional');
  }
  public set biDirectional(value: boolean | cdktf.IResolvable) {
    this._biDirectional = value;
  }
  public resetBiDirectional() {
    this._biDirectional = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get biDirectionalInput() {
    return this._biDirectional;
  }

  // lan_ip - computed: true, optional: true, required: false
  private _lanIp?: string; 
  public get lanIp() {
    return this.getStringAttribute('lan_ip');
  }
  public set lanIp(value: string) {
    this._lanIp = value;
  }
  public resetLanIp() {
    this._lanIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lanIpInput() {
    return this._lanIp;
  }

  // lan_port - computed: true, optional: true, required: false
  private _lanPort?: number; 
  public get lanPort() {
    return this.getNumberAttribute('lan_port');
  }
  public set lanPort(value: number) {
    this._lanPort = value;
  }
  public resetLanPort() {
    this._lanPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lanPortInput() {
    return this._lanPort;
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

  // public_ip - computed: true, optional: true, required: false
  private _publicIp?: string; 
  public get publicIp() {
    return this.getStringAttribute('public_ip');
  }
  public set publicIp(value: string) {
    this._publicIp = value;
  }
  public resetPublicIp() {
    this._publicIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicIpInput() {
    return this._publicIp;
  }

  // public_port - computed: true, optional: true, required: false
  private _publicPort?: number; 
  public get publicPort() {
    return this.getNumberAttribute('public_port');
  }
  public set publicPort(value: number) {
    this._publicPort = value;
  }
  public resetPublicPort() {
    this._publicPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicPortInput() {
    return this._publicPort;
  }

  // up_link_if_name - computed: true, optional: true, required: false
  private _upLinkIfName?: string; 
  public get upLinkIfName() {
    return this.getStringAttribute('up_link_if_name');
  }
  public set upLinkIfName(value: string) {
    this._upLinkIfName = value;
  }
  public resetUpLinkIfName() {
    this._upLinkIfName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get upLinkIfNameInput() {
    return this._upLinkIfName;
  }
}

export class GatewayPortForwardingNatRulesList extends cdktf.ComplexList {
  public internalValue? : GatewayPortForwardingNatRules[] | cdktf.IResolvable

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
  public get(index: number): GatewayPortForwardingNatRulesOutputReference {
    return new GatewayPortForwardingNatRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GatewayStaticRoutes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/resources/gateway#advertise Gateway#advertise}
  */
  readonly advertise?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/resources/gateway#cost Gateway#cost}
  */
  readonly cost?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/resources/gateway#destination Gateway#destination}
  */
  readonly destination?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/resources/gateway#device Gateway#device}
  */
  readonly device?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/resources/gateway#install Gateway#install}
  */
  readonly install?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/resources/gateway#nhop Gateway#nhop}
  */
  readonly nhop?: string;
}

export function gatewayStaticRoutesToTerraform(struct?: GatewayStaticRoutes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    advertise: cdktf.booleanToTerraform(struct!.advertise),
    cost: cdktf.numberToTerraform(struct!.cost),
    destination: cdktf.stringToTerraform(struct!.destination),
    device: cdktf.stringToTerraform(struct!.device),
    install: cdktf.booleanToTerraform(struct!.install),
    nhop: cdktf.stringToTerraform(struct!.nhop),
  }
}


export function gatewayStaticRoutesToHclTerraform(struct?: GatewayStaticRoutes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    advertise: {
      value: cdktf.booleanToHclTerraform(struct!.advertise),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    cost: {
      value: cdktf.numberToHclTerraform(struct!.cost),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    destination: {
      value: cdktf.stringToHclTerraform(struct!.destination),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    device: {
      value: cdktf.stringToHclTerraform(struct!.device),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    install: {
      value: cdktf.booleanToHclTerraform(struct!.install),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    nhop: {
      value: cdktf.stringToHclTerraform(struct!.nhop),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GatewayStaticRoutesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GatewayStaticRoutes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._advertise !== undefined) {
      hasAnyValues = true;
      internalValueResult.advertise = this._advertise;
    }
    if (this._cost !== undefined) {
      hasAnyValues = true;
      internalValueResult.cost = this._cost;
    }
    if (this._destination !== undefined) {
      hasAnyValues = true;
      internalValueResult.destination = this._destination;
    }
    if (this._device !== undefined) {
      hasAnyValues = true;
      internalValueResult.device = this._device;
    }
    if (this._install !== undefined) {
      hasAnyValues = true;
      internalValueResult.install = this._install;
    }
    if (this._nhop !== undefined) {
      hasAnyValues = true;
      internalValueResult.nhop = this._nhop;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GatewayStaticRoutes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._advertise = undefined;
      this._cost = undefined;
      this._destination = undefined;
      this._device = undefined;
      this._install = undefined;
      this._nhop = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._advertise = value.advertise;
      this._cost = value.cost;
      this._destination = value.destination;
      this._device = value.device;
      this._install = value.install;
      this._nhop = value.nhop;
    }
  }

  // advertise - computed: true, optional: true, required: false
  private _advertise?: boolean | cdktf.IResolvable; 
  public get advertise() {
    return this.getBooleanAttribute('advertise');
  }
  public set advertise(value: boolean | cdktf.IResolvable) {
    this._advertise = value;
  }
  public resetAdvertise() {
    this._advertise = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advertiseInput() {
    return this._advertise;
  }

  // cost - computed: true, optional: true, required: false
  private _cost?: number; 
  public get cost() {
    return this.getNumberAttribute('cost');
  }
  public set cost(value: number) {
    this._cost = value;
  }
  public resetCost() {
    this._cost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get costInput() {
    return this._cost;
  }

  // destination - computed: true, optional: true, required: false
  private _destination?: string; 
  public get destination() {
    return this.getStringAttribute('destination');
  }
  public set destination(value: string) {
    this._destination = value;
  }
  public resetDestination() {
    this._destination = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationInput() {
    return this._destination;
  }

  // device - computed: true, optional: true, required: false
  private _device?: string; 
  public get device() {
    return this.getStringAttribute('device');
  }
  public set device(value: string) {
    this._device = value;
  }
  public resetDevice() {
    this._device = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceInput() {
    return this._device;
  }

  // install - computed: true, optional: true, required: false
  private _install?: boolean | cdktf.IResolvable; 
  public get install() {
    return this.getBooleanAttribute('install');
  }
  public set install(value: boolean | cdktf.IResolvable) {
    this._install = value;
  }
  public resetInstall() {
    this._install = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get installInput() {
    return this._install;
  }

  // nhop - computed: true, optional: true, required: false
  private _nhop?: string; 
  public get nhop() {
    return this.getStringAttribute('nhop');
  }
  public set nhop(value: string) {
    this._nhop = value;
  }
  public resetNhop() {
    this._nhop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nhopInput() {
    return this._nhop;
  }
}

export class GatewayStaticRoutesList extends cdktf.ComplexList {
  public internalValue? : GatewayStaticRoutes[] | cdktf.IResolvable

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
  public get(index: number): GatewayStaticRoutesOutputReference {
    return new GatewayStaticRoutesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/resources/gateway netskopebwan_gateway}
*/
export class Gateway extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "netskopebwan_gateway";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Gateway resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Gateway to import
  * @param importFromId The id of the existing Gateway that should be imported. Refer to the {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/resources/gateway#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Gateway to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "netskopebwan_gateway", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/resources/gateway netskopebwan_gateway} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GatewayConfig
  */
  public constructor(scope: Construct, id: string, config: GatewayConfig) {
    super(scope, id, {
      terraformResourceType: 'netskopebwan_gateway',
      terraformGeneratorMetadata: {
        providerName: 'netskopebwan',
        providerVersion: '0.0.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._activated = config.activated;
    this._dateCreated = config.dateCreated;
    this._dateModified = config.dateModified;
    this._description = config.description;
    this._id = config.id;
    this._model = config.model;
    this._name = config.name;
    this._psk = config.psk;
    this._publicKey = config.publicKey;
    this._role = config.role;
    this._serialnumber = config.serialnumber;
    this._swmanifest = config.swmanifest;
    this._swversion = config.swversion;
    this._assignedPolicy.internalValue = config.assignedPolicy;
    this._bgpConfiguration.internalValue = config.bgpConfiguration;
    this._createdBy.internalValue = config.createdBy;
    this._interfaces.internalValue = config.interfaces;
    this._modifiedBy.internalValue = config.modifiedBy;
    this._mqttConfiguration.internalValue = config.mqttConfiguration;
    this._one2OneNatRules.internalValue = config.one2OneNatRules;
    this._overlayConfiguration.internalValue = config.overlayConfiguration;
    this._portForwardingNatRules.internalValue = config.portForwardingNatRules;
    this._staticRoutes.internalValue = config.staticRoutes;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // activated - computed: true, optional: true, required: false
  private _activated?: boolean | cdktf.IResolvable; 
  public get activated() {
    return this.getBooleanAttribute('activated');
  }
  public set activated(value: boolean | cdktf.IResolvable) {
    this._activated = value;
  }
  public resetActivated() {
    this._activated = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activatedInput() {
    return this._activated;
  }

  // date_created - computed: true, optional: true, required: false
  private _dateCreated?: string; 
  public get dateCreated() {
    return this.getStringAttribute('date_created');
  }
  public set dateCreated(value: string) {
    this._dateCreated = value;
  }
  public resetDateCreated() {
    this._dateCreated = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dateCreatedInput() {
    return this._dateCreated;
  }

  // date_modified - computed: true, optional: true, required: false
  private _dateModified?: string; 
  public get dateModified() {
    return this.getStringAttribute('date_modified');
  }
  public set dateModified(value: string) {
    this._dateModified = value;
  }
  public resetDateModified() {
    this._dateModified = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dateModifiedInput() {
    return this._dateModified;
  }

  // description - computed: true, optional: true, required: false
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

  // model - computed: true, optional: true, required: false
  private _model?: string; 
  public get model() {
    return this.getStringAttribute('model');
  }
  public set model(value: string) {
    this._model = value;
  }
  public resetModel() {
    this._model = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modelInput() {
    return this._model;
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

  // psk - computed: true, optional: true, required: false
  private _psk?: string; 
  public get psk() {
    return this.getStringAttribute('psk');
  }
  public set psk(value: string) {
    this._psk = value;
  }
  public resetPsk() {
    this._psk = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pskInput() {
    return this._psk;
  }

  // public_key - computed: true, optional: true, required: false
  private _publicKey?: string; 
  public get publicKey() {
    return this.getStringAttribute('public_key');
  }
  public set publicKey(value: string) {
    this._publicKey = value;
  }
  public resetPublicKey() {
    this._publicKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicKeyInput() {
    return this._publicKey;
  }

  // role - computed: true, optional: true, required: false
  private _role?: string; 
  public get role() {
    return this.getStringAttribute('role');
  }
  public set role(value: string) {
    this._role = value;
  }
  public resetRole() {
    this._role = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleInput() {
    return this._role;
  }

  // serialnumber - computed: true, optional: true, required: false
  private _serialnumber?: string; 
  public get serialnumber() {
    return this.getStringAttribute('serialnumber');
  }
  public set serialnumber(value: string) {
    this._serialnumber = value;
  }
  public resetSerialnumber() {
    this._serialnumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serialnumberInput() {
    return this._serialnumber;
  }

  // swmanifest - computed: true, optional: true, required: false
  private _swmanifest?: string; 
  public get swmanifest() {
    return this.getStringAttribute('swmanifest');
  }
  public set swmanifest(value: string) {
    this._swmanifest = value;
  }
  public resetSwmanifest() {
    this._swmanifest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get swmanifestInput() {
    return this._swmanifest;
  }

  // swversion - computed: true, optional: true, required: false
  private _swversion?: string; 
  public get swversion() {
    return this.getStringAttribute('swversion');
  }
  public set swversion(value: string) {
    this._swversion = value;
  }
  public resetSwversion() {
    this._swversion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get swversionInput() {
    return this._swversion;
  }

  // assigned_policy - computed: false, optional: true, required: false
  private _assignedPolicy = new GatewayAssignedPolicyOutputReference(this, "assigned_policy");
  public get assignedPolicy() {
    return this._assignedPolicy;
  }
  public putAssignedPolicy(value: GatewayAssignedPolicy) {
    this._assignedPolicy.internalValue = value;
  }
  public resetAssignedPolicy() {
    this._assignedPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assignedPolicyInput() {
    return this._assignedPolicy.internalValue;
  }

  // bgp_configuration - computed: false, optional: true, required: false
  private _bgpConfiguration = new GatewayBgpConfigurationList(this, "bgp_configuration", false);
  public get bgpConfiguration() {
    return this._bgpConfiguration;
  }
  public putBgpConfiguration(value: GatewayBgpConfiguration[] | cdktf.IResolvable) {
    this._bgpConfiguration.internalValue = value;
  }
  public resetBgpConfiguration() {
    this._bgpConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bgpConfigurationInput() {
    return this._bgpConfiguration.internalValue;
  }

  // created_by - computed: false, optional: true, required: false
  private _createdBy = new GatewayCreatedByOutputReference(this, "created_by");
  public get createdBy() {
    return this._createdBy;
  }
  public putCreatedBy(value: GatewayCreatedBy) {
    this._createdBy.internalValue = value;
  }
  public resetCreatedBy() {
    this._createdBy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createdByInput() {
    return this._createdBy.internalValue;
  }

  // interfaces - computed: false, optional: true, required: false
  private _interfaces = new GatewayInterfacesList(this, "interfaces", false);
  public get interfaces() {
    return this._interfaces;
  }
  public putInterfaces(value: GatewayInterfaces[] | cdktf.IResolvable) {
    this._interfaces.internalValue = value;
  }
  public resetInterfaces() {
    this._interfaces.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfacesInput() {
    return this._interfaces.internalValue;
  }

  // modified_by - computed: false, optional: true, required: false
  private _modifiedBy = new GatewayModifiedByOutputReference(this, "modified_by");
  public get modifiedBy() {
    return this._modifiedBy;
  }
  public putModifiedBy(value: GatewayModifiedBy) {
    this._modifiedBy.internalValue = value;
  }
  public resetModifiedBy() {
    this._modifiedBy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modifiedByInput() {
    return this._modifiedBy.internalValue;
  }

  // mqtt_configuration - computed: false, optional: true, required: false
  private _mqttConfiguration = new GatewayMqttConfigurationOutputReference(this, "mqtt_configuration");
  public get mqttConfiguration() {
    return this._mqttConfiguration;
  }
  public putMqttConfiguration(value: GatewayMqttConfiguration) {
    this._mqttConfiguration.internalValue = value;
  }
  public resetMqttConfiguration() {
    this._mqttConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mqttConfigurationInput() {
    return this._mqttConfiguration.internalValue;
  }

  // one2_one_nat_rules - computed: false, optional: true, required: false
  private _one2OneNatRules = new GatewayOne2OneNatRulesList(this, "one2_one_nat_rules", false);
  public get one2OneNatRules() {
    return this._one2OneNatRules;
  }
  public putOne2OneNatRules(value: GatewayOne2OneNatRules[] | cdktf.IResolvable) {
    this._one2OneNatRules.internalValue = value;
  }
  public resetOne2OneNatRules() {
    this._one2OneNatRules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get one2OneNatRulesInput() {
    return this._one2OneNatRules.internalValue;
  }

  // overlay_configuration - computed: false, optional: true, required: false
  private _overlayConfiguration = new GatewayOverlayConfigurationOutputReference(this, "overlay_configuration");
  public get overlayConfiguration() {
    return this._overlayConfiguration;
  }
  public putOverlayConfiguration(value: GatewayOverlayConfiguration) {
    this._overlayConfiguration.internalValue = value;
  }
  public resetOverlayConfiguration() {
    this._overlayConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overlayConfigurationInput() {
    return this._overlayConfiguration.internalValue;
  }

  // port_forwarding_nat_rules - computed: false, optional: true, required: false
  private _portForwardingNatRules = new GatewayPortForwardingNatRulesList(this, "port_forwarding_nat_rules", false);
  public get portForwardingNatRules() {
    return this._portForwardingNatRules;
  }
  public putPortForwardingNatRules(value: GatewayPortForwardingNatRules[] | cdktf.IResolvable) {
    this._portForwardingNatRules.internalValue = value;
  }
  public resetPortForwardingNatRules() {
    this._portForwardingNatRules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portForwardingNatRulesInput() {
    return this._portForwardingNatRules.internalValue;
  }

  // static_routes - computed: false, optional: true, required: false
  private _staticRoutes = new GatewayStaticRoutesList(this, "static_routes", false);
  public get staticRoutes() {
    return this._staticRoutes;
  }
  public putStaticRoutes(value: GatewayStaticRoutes[] | cdktf.IResolvable) {
    this._staticRoutes.internalValue = value;
  }
  public resetStaticRoutes() {
    this._staticRoutes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staticRoutesInput() {
    return this._staticRoutes.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      activated: cdktf.booleanToTerraform(this._activated),
      date_created: cdktf.stringToTerraform(this._dateCreated),
      date_modified: cdktf.stringToTerraform(this._dateModified),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      model: cdktf.stringToTerraform(this._model),
      name: cdktf.stringToTerraform(this._name),
      psk: cdktf.stringToTerraform(this._psk),
      public_key: cdktf.stringToTerraform(this._publicKey),
      role: cdktf.stringToTerraform(this._role),
      serialnumber: cdktf.stringToTerraform(this._serialnumber),
      swmanifest: cdktf.stringToTerraform(this._swmanifest),
      swversion: cdktf.stringToTerraform(this._swversion),
      assigned_policy: gatewayAssignedPolicyToTerraform(this._assignedPolicy.internalValue),
      bgp_configuration: cdktf.listMapper(gatewayBgpConfigurationToTerraform, true)(this._bgpConfiguration.internalValue),
      created_by: gatewayCreatedByToTerraform(this._createdBy.internalValue),
      interfaces: cdktf.listMapper(gatewayInterfacesToTerraform, true)(this._interfaces.internalValue),
      modified_by: gatewayModifiedByToTerraform(this._modifiedBy.internalValue),
      mqtt_configuration: gatewayMqttConfigurationToTerraform(this._mqttConfiguration.internalValue),
      one2_one_nat_rules: cdktf.listMapper(gatewayOne2OneNatRulesToTerraform, true)(this._one2OneNatRules.internalValue),
      overlay_configuration: gatewayOverlayConfigurationToTerraform(this._overlayConfiguration.internalValue),
      port_forwarding_nat_rules: cdktf.listMapper(gatewayPortForwardingNatRulesToTerraform, true)(this._portForwardingNatRules.internalValue),
      static_routes: cdktf.listMapper(gatewayStaticRoutesToTerraform, true)(this._staticRoutes.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      activated: {
        value: cdktf.booleanToHclTerraform(this._activated),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      date_created: {
        value: cdktf.stringToHclTerraform(this._dateCreated),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      date_modified: {
        value: cdktf.stringToHclTerraform(this._dateModified),
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
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      model: {
        value: cdktf.stringToHclTerraform(this._model),
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
      psk: {
        value: cdktf.stringToHclTerraform(this._psk),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      public_key: {
        value: cdktf.stringToHclTerraform(this._publicKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      role: {
        value: cdktf.stringToHclTerraform(this._role),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      serialnumber: {
        value: cdktf.stringToHclTerraform(this._serialnumber),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      swmanifest: {
        value: cdktf.stringToHclTerraform(this._swmanifest),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      swversion: {
        value: cdktf.stringToHclTerraform(this._swversion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      assigned_policy: {
        value: gatewayAssignedPolicyToHclTerraform(this._assignedPolicy.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "GatewayAssignedPolicyList",
      },
      bgp_configuration: {
        value: cdktf.listMapperHcl(gatewayBgpConfigurationToHclTerraform, true)(this._bgpConfiguration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GatewayBgpConfigurationList",
      },
      created_by: {
        value: gatewayCreatedByToHclTerraform(this._createdBy.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "GatewayCreatedByList",
      },
      interfaces: {
        value: cdktf.listMapperHcl(gatewayInterfacesToHclTerraform, true)(this._interfaces.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GatewayInterfacesList",
      },
      modified_by: {
        value: gatewayModifiedByToHclTerraform(this._modifiedBy.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "GatewayModifiedByList",
      },
      mqtt_configuration: {
        value: gatewayMqttConfigurationToHclTerraform(this._mqttConfiguration.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "GatewayMqttConfigurationList",
      },
      one2_one_nat_rules: {
        value: cdktf.listMapperHcl(gatewayOne2OneNatRulesToHclTerraform, true)(this._one2OneNatRules.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GatewayOne2OneNatRulesList",
      },
      overlay_configuration: {
        value: gatewayOverlayConfigurationToHclTerraform(this._overlayConfiguration.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "GatewayOverlayConfigurationList",
      },
      port_forwarding_nat_rules: {
        value: cdktf.listMapperHcl(gatewayPortForwardingNatRulesToHclTerraform, true)(this._portForwardingNatRules.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GatewayPortForwardingNatRulesList",
      },
      static_routes: {
        value: cdktf.listMapperHcl(gatewayStaticRoutesToHclTerraform, true)(this._staticRoutes.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GatewayStaticRoutesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
