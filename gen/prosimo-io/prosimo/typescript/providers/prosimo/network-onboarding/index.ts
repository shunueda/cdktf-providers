// https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/network_onboarding
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NetworkOnboardingConfig extends cdktf.TerraformMetaArguments {
  /**
  * Set this to true if you would like the network  to be offboarded from fabric
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/network_onboarding#decommission_app NetworkOnboarding#decommission_app}
  */
  readonly decommissionApp: boolean | cdktf.IResolvable;
  /**
  * Force app offboarding incase of normal offboarding failure.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/network_onboarding#force_offboard NetworkOnboarding#force_offboard}
  */
  readonly forceOffboard?: boolean | cdktf.IResolvable;
  /**
  * Select list of internet egress control policies
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/network_onboarding#internet_egress_controls NetworkOnboarding#internet_egress_controls}
  */
  readonly internetEgressControls?: string[];
  /**
  * name for the application
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/network_onboarding#name NetworkOnboarding#name}
  */
  readonly name: string;
  /**
  * Assigned Namespace
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/network_onboarding#namespace NetworkOnboarding#namespace}
  */
  readonly namespace?: string;
  /**
  * Mark Network Exportable in Policy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/network_onboarding#network_exportable_policy NetworkOnboarding#network_exportable_policy}
  */
  readonly networkExportablePolicy: boolean | cdktf.IResolvable;
  /**
  * Set this to true if you would like the network to be onboarded to fabric
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/network_onboarding#onboard_app NetworkOnboarding#onboard_app}
  */
  readonly onboardApp: boolean | cdktf.IResolvable;
  /**
  * Select policy name.e.g: ALLOW-ALL-NETWORKS, DENY-ALL-NETWORKS or Custom Policies
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/network_onboarding#policies NetworkOnboarding#policies}
  */
  readonly policies?: string[];
  /**
  * Wait for the rollout of the task to complete. Defaults to true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/network_onboarding#wait_for_rollout NetworkOnboarding#wait_for_rollout}
  */
  readonly waitForRollout?: boolean | cdktf.IResolvable;
  /**
  * private_cloud block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/network_onboarding#private_cloud NetworkOnboarding#private_cloud}
  */
  readonly privateCloud?: NetworkOnboardingPrivateCloud[] | cdktf.IResolvable;
  /**
  * public_cloud block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/network_onboarding#public_cloud NetworkOnboarding#public_cloud}
  */
  readonly publicCloud?: NetworkOnboardingPublicCloud[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/network_onboarding#timeouts NetworkOnboarding#timeouts}
  */
  readonly timeouts?: NetworkOnboardingTimeouts;
}
export interface NetworkOnboardingPrivateCloud {
  /**
  * cloud application account name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/network_onboarding#cloud_creds_name NetworkOnboarding#cloud_creds_name}
  */
  readonly cloudCredsName: string;
  /**
  * subnet cider list
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/network_onboarding#subnets NetworkOnboarding#subnets}
  */
  readonly subnets?: string[];
}

export function networkOnboardingPrivateCloudToTerraform(struct?: NetworkOnboardingPrivateCloud | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cloud_creds_name: cdktf.stringToTerraform(struct!.cloudCredsName),
    subnets: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.subnets),
  }
}


export function networkOnboardingPrivateCloudToHclTerraform(struct?: NetworkOnboardingPrivateCloud | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cloud_creds_name: {
      value: cdktf.stringToHclTerraform(struct!.cloudCredsName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subnets: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.subnets),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkOnboardingPrivateCloudOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NetworkOnboardingPrivateCloud | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cloudCredsName !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudCredsName = this._cloudCredsName;
    }
    if (this._subnets !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnets = this._subnets;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkOnboardingPrivateCloud | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cloudCredsName = undefined;
      this._subnets = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cloudCredsName = value.cloudCredsName;
      this._subnets = value.subnets;
    }
  }

  // cloud_creds_name - computed: false, optional: false, required: true
  private _cloudCredsName?: string; 
  public get cloudCredsName() {
    return this.getStringAttribute('cloud_creds_name');
  }
  public set cloudCredsName(value: string) {
    this._cloudCredsName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudCredsNameInput() {
    return this._cloudCredsName;
  }

  // subnets - computed: false, optional: true, required: false
  private _subnets?: string[]; 
  public get subnets() {
    return this.getListAttribute('subnets');
  }
  public set subnets(value: string[]) {
    this._subnets = value;
  }
  public resetSubnets() {
    this._subnets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetsInput() {
    return this._subnets;
  }
}

export class NetworkOnboardingPrivateCloudList extends cdktf.ComplexList {
  public internalValue? : NetworkOnboardingPrivateCloud[] | cdktf.IResolvable

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
  public get(index: number): NetworkOnboardingPrivateCloudOutputReference {
    return new NetworkOnboardingPrivateCloudOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NetworkOnboardingPublicCloudCloudNetworksConnectorSettingsBandwidthRange {
  /**
  * Minimum Bandwidth Range
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/network_onboarding#max NetworkOnboarding#max}
  */
  readonly max: number;
  /**
  * Minimum Bandwidth Range
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/network_onboarding#min NetworkOnboarding#min}
  */
  readonly min: number;
}

export function networkOnboardingPublicCloudCloudNetworksConnectorSettingsBandwidthRangeToTerraform(struct?: NetworkOnboardingPublicCloudCloudNetworksConnectorSettingsBandwidthRange | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max: cdktf.numberToTerraform(struct!.max),
    min: cdktf.numberToTerraform(struct!.min),
  }
}


export function networkOnboardingPublicCloudCloudNetworksConnectorSettingsBandwidthRangeToHclTerraform(struct?: NetworkOnboardingPublicCloudCloudNetworksConnectorSettingsBandwidthRange | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max: {
      value: cdktf.numberToHclTerraform(struct!.max),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min: {
      value: cdktf.numberToHclTerraform(struct!.min),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkOnboardingPublicCloudCloudNetworksConnectorSettingsBandwidthRangeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NetworkOnboardingPublicCloudCloudNetworksConnectorSettingsBandwidthRange | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._max !== undefined) {
      hasAnyValues = true;
      internalValueResult.max = this._max;
    }
    if (this._min !== undefined) {
      hasAnyValues = true;
      internalValueResult.min = this._min;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkOnboardingPublicCloudCloudNetworksConnectorSettingsBandwidthRange | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._max = undefined;
      this._min = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._max = value.max;
      this._min = value.min;
    }
  }

  // max - computed: false, optional: false, required: true
  private _max?: number; 
  public get max() {
    return this.getNumberAttribute('max');
  }
  public set max(value: number) {
    this._max = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maxInput() {
    return this._max;
  }

  // min - computed: false, optional: false, required: true
  private _min?: number; 
  public get min() {
    return this.getNumberAttribute('min');
  }
  public set min(value: number) {
    this._min = value;
  }
  // Temporarily expose input value. Use with caution.
  public get minInput() {
    return this._min;
  }
}

export class NetworkOnboardingPublicCloudCloudNetworksConnectorSettingsBandwidthRangeList extends cdktf.ComplexList {
  public internalValue? : NetworkOnboardingPublicCloudCloudNetworksConnectorSettingsBandwidthRange[] | cdktf.IResolvable

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
  public get(index: number): NetworkOnboardingPublicCloudCloudNetworksConnectorSettingsBandwidthRangeOutputReference {
    return new NetworkOnboardingPublicCloudCloudNetworksConnectorSettingsBandwidthRangeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NetworkOnboardingPublicCloudCloudNetworksConnectorSettings {
  /**
  *  Available Options: <1 Gbps, 1-5 Gbps, 5-10 Gbps, >10 Gbps
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/network_onboarding#bandwidth NetworkOnboarding#bandwidth}
  */
  readonly bandwidth?: string;
  /**
  * connector subnet cider list, Applicable when connector placement is in workload VPC/VNET 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/network_onboarding#connector_subnets NetworkOnboarding#connector_subnets}
  */
  readonly connectorSubnets?: string[];
  /**
  * Available Options wrt cloud and bandwidth :Cloud_Provider: AWS:Bandwidth:  <1 Gbps, Available Options: t3.medium/t3a.medium/c5.largeBandwidth:  1-5 Gbps, Available Options: c5a.large/c5.xlarge/c5a.xlarge/c5n.xlargeBandwidth: 5-10 Gbps, Available Options: c5a.8xlarge/c5.9xlargeBandwidth: >10 Gbps, Available Options: c5n.9xlarge/c5a.16xlarge/c5.18xlarge/c5n.18xlargeCloud_Provider: AZURE:For AZURE Default Connector settings are used,hence user does not have to specify is explicitlyProvided values: Bandwidth: <1 Gbps, Instance Type: Standard_A2_v2Cloud_Provider: GCP:Bandwidth:  <1 Gbps, Available Options: e2-standard-2Bandwidth:  1-5 Gbps, Available Options: e2-standard-4Bandwidth: 5-10 Gbps, Available Options: e2-standard-8/e2-standard-16Bandwidth: >10 Gbps, Available Options: c2-standard-16
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/network_onboarding#instance_type NetworkOnboarding#instance_type}
  */
  readonly instanceType?: string;
  /**
  * bandwidth_range block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/network_onboarding#bandwidth_range NetworkOnboarding#bandwidth_range}
  */
  readonly bandwidthRange?: NetworkOnboardingPublicCloudCloudNetworksConnectorSettingsBandwidthRange[] | cdktf.IResolvable;
}

export function networkOnboardingPublicCloudCloudNetworksConnectorSettingsToTerraform(struct?: NetworkOnboardingPublicCloudCloudNetworksConnectorSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bandwidth: cdktf.stringToTerraform(struct!.bandwidth),
    connector_subnets: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.connectorSubnets),
    instance_type: cdktf.stringToTerraform(struct!.instanceType),
    bandwidth_range: cdktf.listMapper(networkOnboardingPublicCloudCloudNetworksConnectorSettingsBandwidthRangeToTerraform, true)(struct!.bandwidthRange),
  }
}


export function networkOnboardingPublicCloudCloudNetworksConnectorSettingsToHclTerraform(struct?: NetworkOnboardingPublicCloudCloudNetworksConnectorSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bandwidth: {
      value: cdktf.stringToHclTerraform(struct!.bandwidth),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    connector_subnets: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.connectorSubnets),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    instance_type: {
      value: cdktf.stringToHclTerraform(struct!.instanceType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bandwidth_range: {
      value: cdktf.listMapperHcl(networkOnboardingPublicCloudCloudNetworksConnectorSettingsBandwidthRangeToHclTerraform, true)(struct!.bandwidthRange),
      isBlock: true,
      type: "set",
      storageClassType: "NetworkOnboardingPublicCloudCloudNetworksConnectorSettingsBandwidthRangeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkOnboardingPublicCloudCloudNetworksConnectorSettingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NetworkOnboardingPublicCloudCloudNetworksConnectorSettings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bandwidth !== undefined) {
      hasAnyValues = true;
      internalValueResult.bandwidth = this._bandwidth;
    }
    if (this._connectorSubnets !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectorSubnets = this._connectorSubnets;
    }
    if (this._instanceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceType = this._instanceType;
    }
    if (this._bandwidthRange?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bandwidthRange = this._bandwidthRange?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkOnboardingPublicCloudCloudNetworksConnectorSettings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bandwidth = undefined;
      this._connectorSubnets = undefined;
      this._instanceType = undefined;
      this._bandwidthRange.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bandwidth = value.bandwidth;
      this._connectorSubnets = value.connectorSubnets;
      this._instanceType = value.instanceType;
      this._bandwidthRange.internalValue = value.bandwidthRange;
    }
  }

  // bandwidth - computed: false, optional: true, required: false
  private _bandwidth?: string; 
  public get bandwidth() {
    return this.getStringAttribute('bandwidth');
  }
  public set bandwidth(value: string) {
    this._bandwidth = value;
  }
  public resetBandwidth() {
    this._bandwidth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bandwidthInput() {
    return this._bandwidth;
  }

  // connector_subnets - computed: false, optional: true, required: false
  private _connectorSubnets?: string[]; 
  public get connectorSubnets() {
    return this.getListAttribute('connector_subnets');
  }
  public set connectorSubnets(value: string[]) {
    this._connectorSubnets = value;
  }
  public resetConnectorSubnets() {
    this._connectorSubnets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectorSubnetsInput() {
    return this._connectorSubnets;
  }

  // instance_type - computed: false, optional: true, required: false
  private _instanceType?: string; 
  public get instanceType() {
    return this.getStringAttribute('instance_type');
  }
  public set instanceType(value: string) {
    this._instanceType = value;
  }
  public resetInstanceType() {
    this._instanceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceTypeInput() {
    return this._instanceType;
  }

  // bandwidth_range - computed: false, optional: true, required: false
  private _bandwidthRange = new NetworkOnboardingPublicCloudCloudNetworksConnectorSettingsBandwidthRangeList(this, "bandwidth_range", true);
  public get bandwidthRange() {
    return this._bandwidthRange;
  }
  public putBandwidthRange(value: NetworkOnboardingPublicCloudCloudNetworksConnectorSettingsBandwidthRange[] | cdktf.IResolvable) {
    this._bandwidthRange.internalValue = value;
  }
  public resetBandwidthRange() {
    this._bandwidthRange.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bandwidthRangeInput() {
    return this._bandwidthRange.internalValue;
  }
}

export class NetworkOnboardingPublicCloudCloudNetworksConnectorSettingsList extends cdktf.ComplexList {
  public internalValue? : NetworkOnboardingPublicCloudCloudNetworksConnectorSettings[] | cdktf.IResolvable

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
  public get(index: number): NetworkOnboardingPublicCloudCloudNetworksConnectorSettingsOutputReference {
    return new NetworkOnboardingPublicCloudCloudNetworksConnectorSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NetworkOnboardingPublicCloudCloudNetworksSubnets {
  /**
  * Ip Range
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/network_onboarding#subnet NetworkOnboarding#subnet}
  */
  readonly subnet?: string;
  /**
  * Virtual Subnet 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/network_onboarding#virtual_subnet NetworkOnboarding#virtual_subnet}
  */
  readonly virtualSubnet?: string;
}

export function networkOnboardingPublicCloudCloudNetworksSubnetsToTerraform(struct?: NetworkOnboardingPublicCloudCloudNetworksSubnets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    subnet: cdktf.stringToTerraform(struct!.subnet),
    virtual_subnet: cdktf.stringToTerraform(struct!.virtualSubnet),
  }
}


export function networkOnboardingPublicCloudCloudNetworksSubnetsToHclTerraform(struct?: NetworkOnboardingPublicCloudCloudNetworksSubnets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    subnet: {
      value: cdktf.stringToHclTerraform(struct!.subnet),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    virtual_subnet: {
      value: cdktf.stringToHclTerraform(struct!.virtualSubnet),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkOnboardingPublicCloudCloudNetworksSubnetsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NetworkOnboardingPublicCloudCloudNetworksSubnets | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._subnet !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnet = this._subnet;
    }
    if (this._virtualSubnet !== undefined) {
      hasAnyValues = true;
      internalValueResult.virtualSubnet = this._virtualSubnet;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkOnboardingPublicCloudCloudNetworksSubnets | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._subnet = undefined;
      this._virtualSubnet = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._subnet = value.subnet;
      this._virtualSubnet = value.virtualSubnet;
    }
  }

  // subnet - computed: false, optional: true, required: false
  private _subnet?: string; 
  public get subnet() {
    return this.getStringAttribute('subnet');
  }
  public set subnet(value: string) {
    this._subnet = value;
  }
  public resetSubnet() {
    this._subnet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetInput() {
    return this._subnet;
  }

  // virtual_subnet - computed: false, optional: true, required: false
  private _virtualSubnet?: string; 
  public get virtualSubnet() {
    return this.getStringAttribute('virtual_subnet');
  }
  public set virtualSubnet(value: string) {
    this._virtualSubnet = value;
  }
  public resetVirtualSubnet() {
    this._virtualSubnet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualSubnetInput() {
    return this._virtualSubnet;
  }
}

export class NetworkOnboardingPublicCloudCloudNetworksSubnetsList extends cdktf.ComplexList {
  public internalValue? : NetworkOnboardingPublicCloudCloudNetworksSubnets[] | cdktf.IResolvable

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
  public get(index: number): NetworkOnboardingPublicCloudCloudNetworksSubnetsOutputReference {
    return new NetworkOnboardingPublicCloudCloudNetworksSubnetsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NetworkOnboardingPublicCloudCloudNetworks {
  /**
  * transit-gateway, vpc-peering & public(Only applicable if connector placement is in WorkLoad VPC)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/network_onboarding#connectivity_type NetworkOnboarding#connectivity_type}
  */
  readonly connectivityType?: string;
  /**
  * Infra VPC/Infra VNET, Workload VPC/Workload VNET or none.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/network_onboarding#connector_placement NetworkOnboarding#connector_placement}
  */
  readonly connectorPlacement: string;
  /**
  * (Required if transit-gateway is selected) tgw-id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/network_onboarding#hub_id NetworkOnboarding#hub_id}
  */
  readonly hubId?: string;
  /**
  * Service Insertion Endpoint, applicable when connector is placed in Workload VPC
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/network_onboarding#service_insertion_endpoint_subnets NetworkOnboarding#service_insertion_endpoint_subnets}
  */
  readonly serviceInsertionEndpointSubnets?: string;
  /**
  * VNET ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/network_onboarding#vnet NetworkOnboarding#vnet}
  */
  readonly vnet?: string;
  /**
  * VPC ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/network_onboarding#vpc NetworkOnboarding#vpc}
  */
  readonly vpc?: string;
  /**
  * connector_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/network_onboarding#connector_settings NetworkOnboarding#connector_settings}
  */
  readonly connectorSettings?: NetworkOnboardingPublicCloudCloudNetworksConnectorSettings[] | cdktf.IResolvable;
  /**
  * subnets block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/network_onboarding#subnets NetworkOnboarding#subnets}
  */
  readonly subnets?: NetworkOnboardingPublicCloudCloudNetworksSubnets[] | cdktf.IResolvable;
}

export function networkOnboardingPublicCloudCloudNetworksToTerraform(struct?: NetworkOnboardingPublicCloudCloudNetworks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    connectivity_type: cdktf.stringToTerraform(struct!.connectivityType),
    connector_placement: cdktf.stringToTerraform(struct!.connectorPlacement),
    hub_id: cdktf.stringToTerraform(struct!.hubId),
    service_insertion_endpoint_subnets: cdktf.stringToTerraform(struct!.serviceInsertionEndpointSubnets),
    vnet: cdktf.stringToTerraform(struct!.vnet),
    vpc: cdktf.stringToTerraform(struct!.vpc),
    connector_settings: cdktf.listMapper(networkOnboardingPublicCloudCloudNetworksConnectorSettingsToTerraform, true)(struct!.connectorSettings),
    subnets: cdktf.listMapper(networkOnboardingPublicCloudCloudNetworksSubnetsToTerraform, true)(struct!.subnets),
  }
}


export function networkOnboardingPublicCloudCloudNetworksToHclTerraform(struct?: NetworkOnboardingPublicCloudCloudNetworks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    connectivity_type: {
      value: cdktf.stringToHclTerraform(struct!.connectivityType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    connector_placement: {
      value: cdktf.stringToHclTerraform(struct!.connectorPlacement),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hub_id: {
      value: cdktf.stringToHclTerraform(struct!.hubId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_insertion_endpoint_subnets: {
      value: cdktf.stringToHclTerraform(struct!.serviceInsertionEndpointSubnets),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vnet: {
      value: cdktf.stringToHclTerraform(struct!.vnet),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vpc: {
      value: cdktf.stringToHclTerraform(struct!.vpc),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    connector_settings: {
      value: cdktf.listMapperHcl(networkOnboardingPublicCloudCloudNetworksConnectorSettingsToHclTerraform, true)(struct!.connectorSettings),
      isBlock: true,
      type: "set",
      storageClassType: "NetworkOnboardingPublicCloudCloudNetworksConnectorSettingsList",
    },
    subnets: {
      value: cdktf.listMapperHcl(networkOnboardingPublicCloudCloudNetworksSubnetsToHclTerraform, true)(struct!.subnets),
      isBlock: true,
      type: "list",
      storageClassType: "NetworkOnboardingPublicCloudCloudNetworksSubnetsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkOnboardingPublicCloudCloudNetworksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NetworkOnboardingPublicCloudCloudNetworks | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._connectivityType !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectivityType = this._connectivityType;
    }
    if (this._connectorPlacement !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectorPlacement = this._connectorPlacement;
    }
    if (this._hubId !== undefined) {
      hasAnyValues = true;
      internalValueResult.hubId = this._hubId;
    }
    if (this._serviceInsertionEndpointSubnets !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceInsertionEndpointSubnets = this._serviceInsertionEndpointSubnets;
    }
    if (this._vnet !== undefined) {
      hasAnyValues = true;
      internalValueResult.vnet = this._vnet;
    }
    if (this._vpc !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpc = this._vpc;
    }
    if (this._connectorSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectorSettings = this._connectorSettings?.internalValue;
    }
    if (this._subnets?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnets = this._subnets?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkOnboardingPublicCloudCloudNetworks | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._connectivityType = undefined;
      this._connectorPlacement = undefined;
      this._hubId = undefined;
      this._serviceInsertionEndpointSubnets = undefined;
      this._vnet = undefined;
      this._vpc = undefined;
      this._connectorSettings.internalValue = undefined;
      this._subnets.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._connectivityType = value.connectivityType;
      this._connectorPlacement = value.connectorPlacement;
      this._hubId = value.hubId;
      this._serviceInsertionEndpointSubnets = value.serviceInsertionEndpointSubnets;
      this._vnet = value.vnet;
      this._vpc = value.vpc;
      this._connectorSettings.internalValue = value.connectorSettings;
      this._subnets.internalValue = value.subnets;
    }
  }

  // connectivity_type - computed: false, optional: true, required: false
  private _connectivityType?: string; 
  public get connectivityType() {
    return this.getStringAttribute('connectivity_type');
  }
  public set connectivityType(value: string) {
    this._connectivityType = value;
  }
  public resetConnectivityType() {
    this._connectivityType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectivityTypeInput() {
    return this._connectivityType;
  }

  // connector_placement - computed: false, optional: false, required: true
  private _connectorPlacement?: string; 
  public get connectorPlacement() {
    return this.getStringAttribute('connector_placement');
  }
  public set connectorPlacement(value: string) {
    this._connectorPlacement = value;
  }
  // Temporarily expose input value. Use with caution.
  public get connectorPlacementInput() {
    return this._connectorPlacement;
  }

  // hub_id - computed: false, optional: true, required: false
  private _hubId?: string; 
  public get hubId() {
    return this.getStringAttribute('hub_id');
  }
  public set hubId(value: string) {
    this._hubId = value;
  }
  public resetHubId() {
    this._hubId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hubIdInput() {
    return this._hubId;
  }

  // service_insertion_endpoint_subnets - computed: false, optional: true, required: false
  private _serviceInsertionEndpointSubnets?: string; 
  public get serviceInsertionEndpointSubnets() {
    return this.getStringAttribute('service_insertion_endpoint_subnets');
  }
  public set serviceInsertionEndpointSubnets(value: string) {
    this._serviceInsertionEndpointSubnets = value;
  }
  public resetServiceInsertionEndpointSubnets() {
    this._serviceInsertionEndpointSubnets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceInsertionEndpointSubnetsInput() {
    return this._serviceInsertionEndpointSubnets;
  }

  // vnet - computed: false, optional: true, required: false
  private _vnet?: string; 
  public get vnet() {
    return this.getStringAttribute('vnet');
  }
  public set vnet(value: string) {
    this._vnet = value;
  }
  public resetVnet() {
    this._vnet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vnetInput() {
    return this._vnet;
  }

  // vpc - computed: false, optional: true, required: false
  private _vpc?: string; 
  public get vpc() {
    return this.getStringAttribute('vpc');
  }
  public set vpc(value: string) {
    this._vpc = value;
  }
  public resetVpc() {
    this._vpc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcInput() {
    return this._vpc;
  }

  // connector_settings - computed: false, optional: true, required: false
  private _connectorSettings = new NetworkOnboardingPublicCloudCloudNetworksConnectorSettingsList(this, "connector_settings", true);
  public get connectorSettings() {
    return this._connectorSettings;
  }
  public putConnectorSettings(value: NetworkOnboardingPublicCloudCloudNetworksConnectorSettings[] | cdktf.IResolvable) {
    this._connectorSettings.internalValue = value;
  }
  public resetConnectorSettings() {
    this._connectorSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectorSettingsInput() {
    return this._connectorSettings.internalValue;
  }

  // subnets - computed: false, optional: true, required: false
  private _subnets = new NetworkOnboardingPublicCloudCloudNetworksSubnetsList(this, "subnets", false);
  public get subnets() {
    return this._subnets;
  }
  public putSubnets(value: NetworkOnboardingPublicCloudCloudNetworksSubnets[] | cdktf.IResolvable) {
    this._subnets.internalValue = value;
  }
  public resetSubnets() {
    this._subnets.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetsInput() {
    return this._subnets.internalValue;
  }
}

export class NetworkOnboardingPublicCloudCloudNetworksList extends cdktf.ComplexList {
  public internalValue? : NetworkOnboardingPublicCloudCloudNetworks[] | cdktf.IResolvable

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
  public get(index: number): NetworkOnboardingPublicCloudCloudNetworksOutputReference {
    return new NetworkOnboardingPublicCloudCloudNetworksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NetworkOnboardingPublicCloud {
  /**
  * cloud application account name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/network_onboarding#cloud_creds_name NetworkOnboarding#cloud_creds_name}
  */
  readonly cloudCredsName: string;
  /**
  * public or private cloud
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/network_onboarding#cloud_type NetworkOnboarding#cloud_type}
  */
  readonly cloudType?: string;
  /**
  * connector
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/network_onboarding#connect_type NetworkOnboarding#connect_type}
  */
  readonly connectType?: string;
  /**
  * public or private cloud
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/network_onboarding#connection_option NetworkOnboarding#connection_option}
  */
  readonly connectionOption: string;
  /**
  * Name of cloud region
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/network_onboarding#region_name NetworkOnboarding#region_name}
  */
  readonly regionName: string;
  /**
  * cloud_networks block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/network_onboarding#cloud_networks NetworkOnboarding#cloud_networks}
  */
  readonly cloudNetworks: NetworkOnboardingPublicCloudCloudNetworks[] | cdktf.IResolvable;
}

export function networkOnboardingPublicCloudToTerraform(struct?: NetworkOnboardingPublicCloud | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cloud_creds_name: cdktf.stringToTerraform(struct!.cloudCredsName),
    cloud_type: cdktf.stringToTerraform(struct!.cloudType),
    connect_type: cdktf.stringToTerraform(struct!.connectType),
    connection_option: cdktf.stringToTerraform(struct!.connectionOption),
    region_name: cdktf.stringToTerraform(struct!.regionName),
    cloud_networks: cdktf.listMapper(networkOnboardingPublicCloudCloudNetworksToTerraform, true)(struct!.cloudNetworks),
  }
}


export function networkOnboardingPublicCloudToHclTerraform(struct?: NetworkOnboardingPublicCloud | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cloud_creds_name: {
      value: cdktf.stringToHclTerraform(struct!.cloudCredsName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cloud_type: {
      value: cdktf.stringToHclTerraform(struct!.cloudType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    connect_type: {
      value: cdktf.stringToHclTerraform(struct!.connectType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    connection_option: {
      value: cdktf.stringToHclTerraform(struct!.connectionOption),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    region_name: {
      value: cdktf.stringToHclTerraform(struct!.regionName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cloud_networks: {
      value: cdktf.listMapperHcl(networkOnboardingPublicCloudCloudNetworksToHclTerraform, true)(struct!.cloudNetworks),
      isBlock: true,
      type: "set",
      storageClassType: "NetworkOnboardingPublicCloudCloudNetworksList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkOnboardingPublicCloudOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NetworkOnboardingPublicCloud | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cloudCredsName !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudCredsName = this._cloudCredsName;
    }
    if (this._cloudType !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudType = this._cloudType;
    }
    if (this._connectType !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectType = this._connectType;
    }
    if (this._connectionOption !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectionOption = this._connectionOption;
    }
    if (this._regionName !== undefined) {
      hasAnyValues = true;
      internalValueResult.regionName = this._regionName;
    }
    if (this._cloudNetworks?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudNetworks = this._cloudNetworks?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkOnboardingPublicCloud | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cloudCredsName = undefined;
      this._cloudType = undefined;
      this._connectType = undefined;
      this._connectionOption = undefined;
      this._regionName = undefined;
      this._cloudNetworks.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cloudCredsName = value.cloudCredsName;
      this._cloudType = value.cloudType;
      this._connectType = value.connectType;
      this._connectionOption = value.connectionOption;
      this._regionName = value.regionName;
      this._cloudNetworks.internalValue = value.cloudNetworks;
    }
  }

  // cloud_creds_name - computed: false, optional: false, required: true
  private _cloudCredsName?: string; 
  public get cloudCredsName() {
    return this.getStringAttribute('cloud_creds_name');
  }
  public set cloudCredsName(value: string) {
    this._cloudCredsName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudCredsNameInput() {
    return this._cloudCredsName;
  }

  // cloud_type - computed: false, optional: true, required: false
  private _cloudType?: string; 
  public get cloudType() {
    return this.getStringAttribute('cloud_type');
  }
  public set cloudType(value: string) {
    this._cloudType = value;
  }
  public resetCloudType() {
    this._cloudType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudTypeInput() {
    return this._cloudType;
  }

  // connect_type - computed: false, optional: true, required: false
  private _connectType?: string; 
  public get connectType() {
    return this.getStringAttribute('connect_type');
  }
  public set connectType(value: string) {
    this._connectType = value;
  }
  public resetConnectType() {
    this._connectType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectTypeInput() {
    return this._connectType;
  }

  // connection_option - computed: false, optional: false, required: true
  private _connectionOption?: string; 
  public get connectionOption() {
    return this.getStringAttribute('connection_option');
  }
  public set connectionOption(value: string) {
    this._connectionOption = value;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionOptionInput() {
    return this._connectionOption;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // region_name - computed: false, optional: false, required: true
  private _regionName?: string; 
  public get regionName() {
    return this.getStringAttribute('region_name');
  }
  public set regionName(value: string) {
    this._regionName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionNameInput() {
    return this._regionName;
  }

  // cloud_networks - computed: false, optional: false, required: true
  private _cloudNetworks = new NetworkOnboardingPublicCloudCloudNetworksList(this, "cloud_networks", true);
  public get cloudNetworks() {
    return this._cloudNetworks;
  }
  public putCloudNetworks(value: NetworkOnboardingPublicCloudCloudNetworks[] | cdktf.IResolvable) {
    this._cloudNetworks.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudNetworksInput() {
    return this._cloudNetworks.internalValue;
  }
}

export class NetworkOnboardingPublicCloudList extends cdktf.ComplexList {
  public internalValue? : NetworkOnboardingPublicCloud[] | cdktf.IResolvable

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
  public get(index: number): NetworkOnboardingPublicCloudOutputReference {
    return new NetworkOnboardingPublicCloudOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NetworkOnboardingTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/network_onboarding#create NetworkOnboarding#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/network_onboarding#delete NetworkOnboarding#delete}
  */
  readonly delete?: string;
}

export function networkOnboardingTimeoutsToTerraform(struct?: NetworkOnboardingTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
  }
}


export function networkOnboardingTimeoutsToHclTerraform(struct?: NetworkOnboardingTimeouts | cdktf.IResolvable): any {
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

export class NetworkOnboardingTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): NetworkOnboardingTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: NetworkOnboardingTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/network_onboarding prosimo_network_onboarding}
*/
export class NetworkOnboarding extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "prosimo_network_onboarding";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a NetworkOnboarding resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the NetworkOnboarding to import
  * @param importFromId The id of the existing NetworkOnboarding that should be imported. Refer to the {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/network_onboarding#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the NetworkOnboarding to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "prosimo_network_onboarding", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/network_onboarding prosimo_network_onboarding} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NetworkOnboardingConfig
  */
  public constructor(scope: Construct, id: string, config: NetworkOnboardingConfig) {
    super(scope, id, {
      terraformResourceType: 'prosimo_network_onboarding',
      terraformGeneratorMetadata: {
        providerName: 'prosimo',
        providerVersion: '4.5.3',
        providerVersionConstraint: '4.5.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._decommissionApp = config.decommissionApp;
    this._forceOffboard = config.forceOffboard;
    this._internetEgressControls = config.internetEgressControls;
    this._name = config.name;
    this._namespace = config.namespace;
    this._networkExportablePolicy = config.networkExportablePolicy;
    this._onboardApp = config.onboardApp;
    this._policies = config.policies;
    this._waitForRollout = config.waitForRollout;
    this._privateCloud.internalValue = config.privateCloud;
    this._publicCloud.internalValue = config.publicCloud;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // decommission_app - computed: false, optional: false, required: true
  private _decommissionApp?: boolean | cdktf.IResolvable; 
  public get decommissionApp() {
    return this.getBooleanAttribute('decommission_app');
  }
  public set decommissionApp(value: boolean | cdktf.IResolvable) {
    this._decommissionApp = value;
  }
  // Temporarily expose input value. Use with caution.
  public get decommissionAppInput() {
    return this._decommissionApp;
  }

  // deployed - computed: true, optional: false, required: false
  public get deployed() {
    return this.getBooleanAttribute('deployed');
  }

  // force_offboard - computed: false, optional: true, required: false
  private _forceOffboard?: boolean | cdktf.IResolvable; 
  public get forceOffboard() {
    return this.getBooleanAttribute('force_offboard');
  }
  public set forceOffboard(value: boolean | cdktf.IResolvable) {
    this._forceOffboard = value;
  }
  public resetForceOffboard() {
    this._forceOffboard = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceOffboardInput() {
    return this._forceOffboard;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // internet_egress_controls - computed: false, optional: true, required: false
  private _internetEgressControls?: string[]; 
  public get internetEgressControls() {
    return this.getListAttribute('internet_egress_controls');
  }
  public set internetEgressControls(value: string[]) {
    this._internetEgressControls = value;
  }
  public resetInternetEgressControls() {
    this._internetEgressControls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get internetEgressControlsInput() {
    return this._internetEgressControls;
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

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // network_exportable_policy - computed: false, optional: false, required: true
  private _networkExportablePolicy?: boolean | cdktf.IResolvable; 
  public get networkExportablePolicy() {
    return this.getBooleanAttribute('network_exportable_policy');
  }
  public set networkExportablePolicy(value: boolean | cdktf.IResolvable) {
    this._networkExportablePolicy = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkExportablePolicyInput() {
    return this._networkExportablePolicy;
  }

  // onboard_app - computed: false, optional: false, required: true
  private _onboardApp?: boolean | cdktf.IResolvable; 
  public get onboardApp() {
    return this.getBooleanAttribute('onboard_app');
  }
  public set onboardApp(value: boolean | cdktf.IResolvable) {
    this._onboardApp = value;
  }
  // Temporarily expose input value. Use with caution.
  public get onboardAppInput() {
    return this._onboardApp;
  }

  // pam_cname - computed: true, optional: false, required: false
  public get pamCname() {
    return this.getStringAttribute('pam_cname');
  }

  // policies - computed: false, optional: true, required: false
  private _policies?: string[]; 
  public get policies() {
    return this.getListAttribute('policies');
  }
  public set policies(value: string[]) {
    this._policies = value;
  }
  public resetPolicies() {
    this._policies = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policiesInput() {
    return this._policies;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // wait_for_rollout - computed: false, optional: true, required: false
  private _waitForRollout?: boolean | cdktf.IResolvable; 
  public get waitForRollout() {
    return this.getBooleanAttribute('wait_for_rollout');
  }
  public set waitForRollout(value: boolean | cdktf.IResolvable) {
    this._waitForRollout = value;
  }
  public resetWaitForRollout() {
    this._waitForRollout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get waitForRolloutInput() {
    return this._waitForRollout;
  }

  // private_cloud - computed: false, optional: true, required: false
  private _privateCloud = new NetworkOnboardingPrivateCloudList(this, "private_cloud", true);
  public get privateCloud() {
    return this._privateCloud;
  }
  public putPrivateCloud(value: NetworkOnboardingPrivateCloud[] | cdktf.IResolvable) {
    this._privateCloud.internalValue = value;
  }
  public resetPrivateCloud() {
    this._privateCloud.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateCloudInput() {
    return this._privateCloud.internalValue;
  }

  // public_cloud - computed: false, optional: true, required: false
  private _publicCloud = new NetworkOnboardingPublicCloudList(this, "public_cloud", true);
  public get publicCloud() {
    return this._publicCloud;
  }
  public putPublicCloud(value: NetworkOnboardingPublicCloud[] | cdktf.IResolvable) {
    this._publicCloud.internalValue = value;
  }
  public resetPublicCloud() {
    this._publicCloud.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicCloudInput() {
    return this._publicCloud.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new NetworkOnboardingTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: NetworkOnboardingTimeouts) {
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
      decommission_app: cdktf.booleanToTerraform(this._decommissionApp),
      force_offboard: cdktf.booleanToTerraform(this._forceOffboard),
      internet_egress_controls: cdktf.listMapper(cdktf.stringToTerraform, false)(this._internetEgressControls),
      name: cdktf.stringToTerraform(this._name),
      namespace: cdktf.stringToTerraform(this._namespace),
      network_exportable_policy: cdktf.booleanToTerraform(this._networkExportablePolicy),
      onboard_app: cdktf.booleanToTerraform(this._onboardApp),
      policies: cdktf.listMapper(cdktf.stringToTerraform, false)(this._policies),
      wait_for_rollout: cdktf.booleanToTerraform(this._waitForRollout),
      private_cloud: cdktf.listMapper(networkOnboardingPrivateCloudToTerraform, true)(this._privateCloud.internalValue),
      public_cloud: cdktf.listMapper(networkOnboardingPublicCloudToTerraform, true)(this._publicCloud.internalValue),
      timeouts: networkOnboardingTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      decommission_app: {
        value: cdktf.booleanToHclTerraform(this._decommissionApp),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      force_offboard: {
        value: cdktf.booleanToHclTerraform(this._forceOffboard),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      internet_egress_controls: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._internetEgressControls),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      namespace: {
        value: cdktf.stringToHclTerraform(this._namespace),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      network_exportable_policy: {
        value: cdktf.booleanToHclTerraform(this._networkExportablePolicy),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      onboard_app: {
        value: cdktf.booleanToHclTerraform(this._onboardApp),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      policies: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._policies),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      wait_for_rollout: {
        value: cdktf.booleanToHclTerraform(this._waitForRollout),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      private_cloud: {
        value: cdktf.listMapperHcl(networkOnboardingPrivateCloudToHclTerraform, true)(this._privateCloud.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "NetworkOnboardingPrivateCloudList",
      },
      public_cloud: {
        value: cdktf.listMapperHcl(networkOnboardingPublicCloudToHclTerraform, true)(this._publicCloud.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "NetworkOnboardingPublicCloudList",
      },
      timeouts: {
        value: networkOnboardingTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "NetworkOnboardingTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
