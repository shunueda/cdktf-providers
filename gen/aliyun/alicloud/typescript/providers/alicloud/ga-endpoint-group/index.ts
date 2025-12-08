// https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/ga_endpoint_group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GaEndpointGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/ga_endpoint_group#accelerator_id GaEndpointGroup#accelerator_id}
  */
  readonly acceleratorId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/ga_endpoint_group#description GaEndpointGroup#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/ga_endpoint_group#endpoint_group_region GaEndpointGroup#endpoint_group_region}
  */
  readonly endpointGroupRegion: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/ga_endpoint_group#endpoint_group_type GaEndpointGroup#endpoint_group_type}
  */
  readonly endpointGroupType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/ga_endpoint_group#endpoint_protocol_version GaEndpointGroup#endpoint_protocol_version}
  */
  readonly endpointProtocolVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/ga_endpoint_group#endpoint_request_protocol GaEndpointGroup#endpoint_request_protocol}
  */
  readonly endpointRequestProtocol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/ga_endpoint_group#health_check_enabled GaEndpointGroup#health_check_enabled}
  */
  readonly healthCheckEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/ga_endpoint_group#health_check_interval_seconds GaEndpointGroup#health_check_interval_seconds}
  */
  readonly healthCheckIntervalSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/ga_endpoint_group#health_check_path GaEndpointGroup#health_check_path}
  */
  readonly healthCheckPath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/ga_endpoint_group#health_check_port GaEndpointGroup#health_check_port}
  */
  readonly healthCheckPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/ga_endpoint_group#health_check_protocol GaEndpointGroup#health_check_protocol}
  */
  readonly healthCheckProtocol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/ga_endpoint_group#id GaEndpointGroup#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/ga_endpoint_group#listener_id GaEndpointGroup#listener_id}
  */
  readonly listenerId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/ga_endpoint_group#name GaEndpointGroup#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/ga_endpoint_group#tags GaEndpointGroup#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/ga_endpoint_group#threshold_count GaEndpointGroup#threshold_count}
  */
  readonly thresholdCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/ga_endpoint_group#traffic_percentage GaEndpointGroup#traffic_percentage}
  */
  readonly trafficPercentage?: number;
  /**
  * endpoint_configurations block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/ga_endpoint_group#endpoint_configurations GaEndpointGroup#endpoint_configurations}
  */
  readonly endpointConfigurations: GaEndpointGroupEndpointConfigurations[] | cdktf.IResolvable;
  /**
  * port_overrides block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/ga_endpoint_group#port_overrides GaEndpointGroup#port_overrides}
  */
  readonly portOverrides?: GaEndpointGroupPortOverrides;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/ga_endpoint_group#timeouts GaEndpointGroup#timeouts}
  */
  readonly timeouts?: GaEndpointGroupTimeouts;
}
export interface GaEndpointGroupEndpointConfigurations {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/ga_endpoint_group#enable_clientip_preservation GaEndpointGroup#enable_clientip_preservation}
  */
  readonly enableClientipPreservation?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/ga_endpoint_group#enable_proxy_protocol GaEndpointGroup#enable_proxy_protocol}
  */
  readonly enableProxyProtocol?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/ga_endpoint_group#endpoint GaEndpointGroup#endpoint}
  */
  readonly endpoint: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/ga_endpoint_group#sub_address GaEndpointGroup#sub_address}
  */
  readonly subAddress?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/ga_endpoint_group#type GaEndpointGroup#type}
  */
  readonly type: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/ga_endpoint_group#vpc_id GaEndpointGroup#vpc_id}
  */
  readonly vpcId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/ga_endpoint_group#vswitch_ids GaEndpointGroup#vswitch_ids}
  */
  readonly vswitchIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/ga_endpoint_group#weight GaEndpointGroup#weight}
  */
  readonly weight: number;
}

export function gaEndpointGroupEndpointConfigurationsToTerraform(struct?: GaEndpointGroupEndpointConfigurations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable_clientip_preservation: cdktf.booleanToTerraform(struct!.enableClientipPreservation),
    enable_proxy_protocol: cdktf.booleanToTerraform(struct!.enableProxyProtocol),
    endpoint: cdktf.stringToTerraform(struct!.endpoint),
    sub_address: cdktf.stringToTerraform(struct!.subAddress),
    type: cdktf.stringToTerraform(struct!.type),
    vpc_id: cdktf.stringToTerraform(struct!.vpcId),
    vswitch_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.vswitchIds),
    weight: cdktf.numberToTerraform(struct!.weight),
  }
}


export function gaEndpointGroupEndpointConfigurationsToHclTerraform(struct?: GaEndpointGroupEndpointConfigurations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable_clientip_preservation: {
      value: cdktf.booleanToHclTerraform(struct!.enableClientipPreservation),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_proxy_protocol: {
      value: cdktf.booleanToHclTerraform(struct!.enableProxyProtocol),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    endpoint: {
      value: cdktf.stringToHclTerraform(struct!.endpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sub_address: {
      value: cdktf.stringToHclTerraform(struct!.subAddress),
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
    vpc_id: {
      value: cdktf.stringToHclTerraform(struct!.vpcId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vswitch_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.vswitchIds),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
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

export class GaEndpointGroupEndpointConfigurationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GaEndpointGroupEndpointConfigurations | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enableClientipPreservation !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableClientipPreservation = this._enableClientipPreservation;
    }
    if (this._enableProxyProtocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableProxyProtocol = this._enableProxyProtocol;
    }
    if (this._endpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpoint = this._endpoint;
    }
    if (this._subAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.subAddress = this._subAddress;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._vpcId !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpcId = this._vpcId;
    }
    if (this._vswitchIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.vswitchIds = this._vswitchIds;
    }
    if (this._weight !== undefined) {
      hasAnyValues = true;
      internalValueResult.weight = this._weight;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GaEndpointGroupEndpointConfigurations | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enableClientipPreservation = undefined;
      this._enableProxyProtocol = undefined;
      this._endpoint = undefined;
      this._subAddress = undefined;
      this._type = undefined;
      this._vpcId = undefined;
      this._vswitchIds = undefined;
      this._weight = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enableClientipPreservation = value.enableClientipPreservation;
      this._enableProxyProtocol = value.enableProxyProtocol;
      this._endpoint = value.endpoint;
      this._subAddress = value.subAddress;
      this._type = value.type;
      this._vpcId = value.vpcId;
      this._vswitchIds = value.vswitchIds;
      this._weight = value.weight;
    }
  }

  // enable_clientip_preservation - computed: true, optional: true, required: false
  private _enableClientipPreservation?: boolean | cdktf.IResolvable; 
  public get enableClientipPreservation() {
    return this.getBooleanAttribute('enable_clientip_preservation');
  }
  public set enableClientipPreservation(value: boolean | cdktf.IResolvable) {
    this._enableClientipPreservation = value;
  }
  public resetEnableClientipPreservation() {
    this._enableClientipPreservation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableClientipPreservationInput() {
    return this._enableClientipPreservation;
  }

  // enable_proxy_protocol - computed: false, optional: true, required: false
  private _enableProxyProtocol?: boolean | cdktf.IResolvable; 
  public get enableProxyProtocol() {
    return this.getBooleanAttribute('enable_proxy_protocol');
  }
  public set enableProxyProtocol(value: boolean | cdktf.IResolvable) {
    this._enableProxyProtocol = value;
  }
  public resetEnableProxyProtocol() {
    this._enableProxyProtocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableProxyProtocolInput() {
    return this._enableProxyProtocol;
  }

  // endpoint - computed: false, optional: false, required: true
  private _endpoint?: string; 
  public get endpoint() {
    return this.getStringAttribute('endpoint');
  }
  public set endpoint(value: string) {
    this._endpoint = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointInput() {
    return this._endpoint;
  }

  // sub_address - computed: true, optional: true, required: false
  private _subAddress?: string; 
  public get subAddress() {
    return this.getStringAttribute('sub_address');
  }
  public set subAddress(value: string) {
    this._subAddress = value;
  }
  public resetSubAddress() {
    this._subAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subAddressInput() {
    return this._subAddress;
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

  // vpc_id - computed: false, optional: true, required: false
  private _vpcId?: string; 
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }
  public set vpcId(value: string) {
    this._vpcId = value;
  }
  public resetVpcId() {
    this._vpcId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcIdInput() {
    return this._vpcId;
  }

  // vswitch_ids - computed: false, optional: true, required: false
  private _vswitchIds?: string[]; 
  public get vswitchIds() {
    return this.getListAttribute('vswitch_ids');
  }
  public set vswitchIds(value: string[]) {
    this._vswitchIds = value;
  }
  public resetVswitchIds() {
    this._vswitchIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vswitchIdsInput() {
    return this._vswitchIds;
  }

  // weight - computed: false, optional: false, required: true
  private _weight?: number; 
  public get weight() {
    return this.getNumberAttribute('weight');
  }
  public set weight(value: number) {
    this._weight = value;
  }
  // Temporarily expose input value. Use with caution.
  public get weightInput() {
    return this._weight;
  }
}

export class GaEndpointGroupEndpointConfigurationsList extends cdktf.ComplexList {
  public internalValue? : GaEndpointGroupEndpointConfigurations[] | cdktf.IResolvable

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
  public get(index: number): GaEndpointGroupEndpointConfigurationsOutputReference {
    return new GaEndpointGroupEndpointConfigurationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GaEndpointGroupPortOverrides {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/ga_endpoint_group#endpoint_port GaEndpointGroup#endpoint_port}
  */
  readonly endpointPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/ga_endpoint_group#listener_port GaEndpointGroup#listener_port}
  */
  readonly listenerPort?: number;
}

export function gaEndpointGroupPortOverridesToTerraform(struct?: GaEndpointGroupPortOverridesOutputReference | GaEndpointGroupPortOverrides): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    endpoint_port: cdktf.numberToTerraform(struct!.endpointPort),
    listener_port: cdktf.numberToTerraform(struct!.listenerPort),
  }
}


export function gaEndpointGroupPortOverridesToHclTerraform(struct?: GaEndpointGroupPortOverridesOutputReference | GaEndpointGroupPortOverrides): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    endpoint_port: {
      value: cdktf.numberToHclTerraform(struct!.endpointPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    listener_port: {
      value: cdktf.numberToHclTerraform(struct!.listenerPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GaEndpointGroupPortOverridesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GaEndpointGroupPortOverrides | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._endpointPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpointPort = this._endpointPort;
    }
    if (this._listenerPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.listenerPort = this._listenerPort;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GaEndpointGroupPortOverrides | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._endpointPort = undefined;
      this._listenerPort = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._endpointPort = value.endpointPort;
      this._listenerPort = value.listenerPort;
    }
  }

  // endpoint_port - computed: false, optional: true, required: false
  private _endpointPort?: number; 
  public get endpointPort() {
    return this.getNumberAttribute('endpoint_port');
  }
  public set endpointPort(value: number) {
    this._endpointPort = value;
  }
  public resetEndpointPort() {
    this._endpointPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointPortInput() {
    return this._endpointPort;
  }

  // listener_port - computed: false, optional: true, required: false
  private _listenerPort?: number; 
  public get listenerPort() {
    return this.getNumberAttribute('listener_port');
  }
  public set listenerPort(value: number) {
    this._listenerPort = value;
  }
  public resetListenerPort() {
    this._listenerPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get listenerPortInput() {
    return this._listenerPort;
  }
}
export interface GaEndpointGroupTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/ga_endpoint_group#create GaEndpointGroup#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/ga_endpoint_group#delete GaEndpointGroup#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/ga_endpoint_group#update GaEndpointGroup#update}
  */
  readonly update?: string;
}

export function gaEndpointGroupTimeoutsToTerraform(struct?: GaEndpointGroupTimeouts | cdktf.IResolvable): any {
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


export function gaEndpointGroupTimeoutsToHclTerraform(struct?: GaEndpointGroupTimeouts | cdktf.IResolvable): any {
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

export class GaEndpointGroupTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GaEndpointGroupTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GaEndpointGroupTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/ga_endpoint_group alicloud_ga_endpoint_group}
*/
export class GaEndpointGroup extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_ga_endpoint_group";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GaEndpointGroup resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GaEndpointGroup to import
  * @param importFromId The id of the existing GaEndpointGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/ga_endpoint_group#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GaEndpointGroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_ga_endpoint_group", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/ga_endpoint_group alicloud_ga_endpoint_group} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GaEndpointGroupConfig
  */
  public constructor(scope: Construct, id: string, config: GaEndpointGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'alicloud_ga_endpoint_group',
      terraformGeneratorMetadata: {
        providerName: 'alicloud',
        providerVersion: '1.265.0',
        providerVersionConstraint: '1.265.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._acceleratorId = config.acceleratorId;
    this._description = config.description;
    this._endpointGroupRegion = config.endpointGroupRegion;
    this._endpointGroupType = config.endpointGroupType;
    this._endpointProtocolVersion = config.endpointProtocolVersion;
    this._endpointRequestProtocol = config.endpointRequestProtocol;
    this._healthCheckEnabled = config.healthCheckEnabled;
    this._healthCheckIntervalSeconds = config.healthCheckIntervalSeconds;
    this._healthCheckPath = config.healthCheckPath;
    this._healthCheckPort = config.healthCheckPort;
    this._healthCheckProtocol = config.healthCheckProtocol;
    this._id = config.id;
    this._listenerId = config.listenerId;
    this._name = config.name;
    this._tags = config.tags;
    this._thresholdCount = config.thresholdCount;
    this._trafficPercentage = config.trafficPercentage;
    this._endpointConfigurations.internalValue = config.endpointConfigurations;
    this._portOverrides.internalValue = config.portOverrides;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // accelerator_id - computed: false, optional: false, required: true
  private _acceleratorId?: string; 
  public get acceleratorId() {
    return this.getStringAttribute('accelerator_id');
  }
  public set acceleratorId(value: string) {
    this._acceleratorId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get acceleratorIdInput() {
    return this._acceleratorId;
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

  // endpoint_group_ip_list - computed: true, optional: false, required: false
  public get endpointGroupIpList() {
    return this.getListAttribute('endpoint_group_ip_list');
  }

  // endpoint_group_region - computed: false, optional: false, required: true
  private _endpointGroupRegion?: string; 
  public get endpointGroupRegion() {
    return this.getStringAttribute('endpoint_group_region');
  }
  public set endpointGroupRegion(value: string) {
    this._endpointGroupRegion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointGroupRegionInput() {
    return this._endpointGroupRegion;
  }

  // endpoint_group_type - computed: true, optional: true, required: false
  private _endpointGroupType?: string; 
  public get endpointGroupType() {
    return this.getStringAttribute('endpoint_group_type');
  }
  public set endpointGroupType(value: string) {
    this._endpointGroupType = value;
  }
  public resetEndpointGroupType() {
    this._endpointGroupType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointGroupTypeInput() {
    return this._endpointGroupType;
  }

  // endpoint_protocol_version - computed: true, optional: true, required: false
  private _endpointProtocolVersion?: string; 
  public get endpointProtocolVersion() {
    return this.getStringAttribute('endpoint_protocol_version');
  }
  public set endpointProtocolVersion(value: string) {
    this._endpointProtocolVersion = value;
  }
  public resetEndpointProtocolVersion() {
    this._endpointProtocolVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointProtocolVersionInput() {
    return this._endpointProtocolVersion;
  }

  // endpoint_request_protocol - computed: true, optional: true, required: false
  private _endpointRequestProtocol?: string; 
  public get endpointRequestProtocol() {
    return this.getStringAttribute('endpoint_request_protocol');
  }
  public set endpointRequestProtocol(value: string) {
    this._endpointRequestProtocol = value;
  }
  public resetEndpointRequestProtocol() {
    this._endpointRequestProtocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointRequestProtocolInput() {
    return this._endpointRequestProtocol;
  }

  // health_check_enabled - computed: false, optional: true, required: false
  private _healthCheckEnabled?: boolean | cdktf.IResolvable; 
  public get healthCheckEnabled() {
    return this.getBooleanAttribute('health_check_enabled');
  }
  public set healthCheckEnabled(value: boolean | cdktf.IResolvable) {
    this._healthCheckEnabled = value;
  }
  public resetHealthCheckEnabled() {
    this._healthCheckEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthCheckEnabledInput() {
    return this._healthCheckEnabled;
  }

  // health_check_interval_seconds - computed: false, optional: true, required: false
  private _healthCheckIntervalSeconds?: number; 
  public get healthCheckIntervalSeconds() {
    return this.getNumberAttribute('health_check_interval_seconds');
  }
  public set healthCheckIntervalSeconds(value: number) {
    this._healthCheckIntervalSeconds = value;
  }
  public resetHealthCheckIntervalSeconds() {
    this._healthCheckIntervalSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthCheckIntervalSecondsInput() {
    return this._healthCheckIntervalSeconds;
  }

  // health_check_path - computed: false, optional: true, required: false
  private _healthCheckPath?: string; 
  public get healthCheckPath() {
    return this.getStringAttribute('health_check_path');
  }
  public set healthCheckPath(value: string) {
    this._healthCheckPath = value;
  }
  public resetHealthCheckPath() {
    this._healthCheckPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthCheckPathInput() {
    return this._healthCheckPath;
  }

  // health_check_port - computed: false, optional: true, required: false
  private _healthCheckPort?: number; 
  public get healthCheckPort() {
    return this.getNumberAttribute('health_check_port');
  }
  public set healthCheckPort(value: number) {
    this._healthCheckPort = value;
  }
  public resetHealthCheckPort() {
    this._healthCheckPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthCheckPortInput() {
    return this._healthCheckPort;
  }

  // health_check_protocol - computed: false, optional: true, required: false
  private _healthCheckProtocol?: string; 
  public get healthCheckProtocol() {
    return this.getStringAttribute('health_check_protocol');
  }
  public set healthCheckProtocol(value: string) {
    this._healthCheckProtocol = value;
  }
  public resetHealthCheckProtocol() {
    this._healthCheckProtocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthCheckProtocolInput() {
    return this._healthCheckProtocol;
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

  // listener_id - computed: false, optional: false, required: true
  private _listenerId?: string; 
  public get listenerId() {
    return this.getStringAttribute('listener_id');
  }
  public set listenerId(value: string) {
    this._listenerId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get listenerIdInput() {
    return this._listenerId;
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

  // threshold_count - computed: true, optional: true, required: false
  private _thresholdCount?: number; 
  public get thresholdCount() {
    return this.getNumberAttribute('threshold_count');
  }
  public set thresholdCount(value: number) {
    this._thresholdCount = value;
  }
  public resetThresholdCount() {
    this._thresholdCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdCountInput() {
    return this._thresholdCount;
  }

  // traffic_percentage - computed: false, optional: true, required: false
  private _trafficPercentage?: number; 
  public get trafficPercentage() {
    return this.getNumberAttribute('traffic_percentage');
  }
  public set trafficPercentage(value: number) {
    this._trafficPercentage = value;
  }
  public resetTrafficPercentage() {
    this._trafficPercentage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trafficPercentageInput() {
    return this._trafficPercentage;
  }

  // endpoint_configurations - computed: false, optional: false, required: true
  private _endpointConfigurations = new GaEndpointGroupEndpointConfigurationsList(this, "endpoint_configurations", false);
  public get endpointConfigurations() {
    return this._endpointConfigurations;
  }
  public putEndpointConfigurations(value: GaEndpointGroupEndpointConfigurations[] | cdktf.IResolvable) {
    this._endpointConfigurations.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointConfigurationsInput() {
    return this._endpointConfigurations.internalValue;
  }

  // port_overrides - computed: false, optional: true, required: false
  private _portOverrides = new GaEndpointGroupPortOverridesOutputReference(this, "port_overrides");
  public get portOverrides() {
    return this._portOverrides;
  }
  public putPortOverrides(value: GaEndpointGroupPortOverrides) {
    this._portOverrides.internalValue = value;
  }
  public resetPortOverrides() {
    this._portOverrides.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portOverridesInput() {
    return this._portOverrides.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new GaEndpointGroupTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: GaEndpointGroupTimeouts) {
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
      accelerator_id: cdktf.stringToTerraform(this._acceleratorId),
      description: cdktf.stringToTerraform(this._description),
      endpoint_group_region: cdktf.stringToTerraform(this._endpointGroupRegion),
      endpoint_group_type: cdktf.stringToTerraform(this._endpointGroupType),
      endpoint_protocol_version: cdktf.stringToTerraform(this._endpointProtocolVersion),
      endpoint_request_protocol: cdktf.stringToTerraform(this._endpointRequestProtocol),
      health_check_enabled: cdktf.booleanToTerraform(this._healthCheckEnabled),
      health_check_interval_seconds: cdktf.numberToTerraform(this._healthCheckIntervalSeconds),
      health_check_path: cdktf.stringToTerraform(this._healthCheckPath),
      health_check_port: cdktf.numberToTerraform(this._healthCheckPort),
      health_check_protocol: cdktf.stringToTerraform(this._healthCheckProtocol),
      id: cdktf.stringToTerraform(this._id),
      listener_id: cdktf.stringToTerraform(this._listenerId),
      name: cdktf.stringToTerraform(this._name),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      threshold_count: cdktf.numberToTerraform(this._thresholdCount),
      traffic_percentage: cdktf.numberToTerraform(this._trafficPercentage),
      endpoint_configurations: cdktf.listMapper(gaEndpointGroupEndpointConfigurationsToTerraform, true)(this._endpointConfigurations.internalValue),
      port_overrides: gaEndpointGroupPortOverridesToTerraform(this._portOverrides.internalValue),
      timeouts: gaEndpointGroupTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      accelerator_id: {
        value: cdktf.stringToHclTerraform(this._acceleratorId),
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
      endpoint_group_region: {
        value: cdktf.stringToHclTerraform(this._endpointGroupRegion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      endpoint_group_type: {
        value: cdktf.stringToHclTerraform(this._endpointGroupType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      endpoint_protocol_version: {
        value: cdktf.stringToHclTerraform(this._endpointProtocolVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      endpoint_request_protocol: {
        value: cdktf.stringToHclTerraform(this._endpointRequestProtocol),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      health_check_enabled: {
        value: cdktf.booleanToHclTerraform(this._healthCheckEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      health_check_interval_seconds: {
        value: cdktf.numberToHclTerraform(this._healthCheckIntervalSeconds),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      health_check_path: {
        value: cdktf.stringToHclTerraform(this._healthCheckPath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      health_check_port: {
        value: cdktf.numberToHclTerraform(this._healthCheckPort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      health_check_protocol: {
        value: cdktf.stringToHclTerraform(this._healthCheckProtocol),
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
      listener_id: {
        value: cdktf.stringToHclTerraform(this._listenerId),
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
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      threshold_count: {
        value: cdktf.numberToHclTerraform(this._thresholdCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      traffic_percentage: {
        value: cdktf.numberToHclTerraform(this._trafficPercentage),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      endpoint_configurations: {
        value: cdktf.listMapperHcl(gaEndpointGroupEndpointConfigurationsToHclTerraform, true)(this._endpointConfigurations.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GaEndpointGroupEndpointConfigurationsList",
      },
      port_overrides: {
        value: gaEndpointGroupPortOverridesToHclTerraform(this._portOverrides.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GaEndpointGroupPortOverridesList",
      },
      timeouts: {
        value: gaEndpointGroupTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GaEndpointGroupTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
