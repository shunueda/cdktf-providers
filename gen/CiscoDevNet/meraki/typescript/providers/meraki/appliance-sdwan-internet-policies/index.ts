// https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/appliance_sdwan_internet_policies
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ApplianceSdwanInternetPoliciesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Network ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/appliance_sdwan_internet_policies#network_id ApplianceSdwanInternetPolicies#network_id}
  */
  readonly networkId: string;
  /**
  * Policies with respective traffic filters for an MX network. Note: these policies are shared (merged) with meraki_appliance_traffic_shaping_uplink_selection resource's wan_traffic_uplink_preferences attribute. It is recommended to only use one resource for them, not both at the same time: Deleting this resource clears preferences created in meraki_appliance_traffic_shaping_uplink_selection, which is detected as a change by the provider on a subsequent apply. The same happens the other way around, but the change is not detected in sdwan_internet_policies.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/appliance_sdwan_internet_policies#wan_traffic_uplink_preferences ApplianceSdwanInternetPolicies#wan_traffic_uplink_preferences}
  */
  readonly wanTrafficUplinkPreferences: ApplianceSdwanInternetPoliciesWanTrafficUplinkPreferences[] | cdktf.IResolvable;
}
export interface ApplianceSdwanInternetPoliciesWanTrafficUplinkPreferencesTrafficFiltersDestinationApplications {
  /**
  * Id of the major application, or a list of NBAR Application Category or Application selections
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/appliance_sdwan_internet_policies#id ApplianceSdwanInternetPolicies#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name of the major application or application category selected
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/appliance_sdwan_internet_policies#name ApplianceSdwanInternetPolicies#name}
  */
  readonly name?: string;
  /**
  * app type (major or nbar)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/appliance_sdwan_internet_policies#type ApplianceSdwanInternetPolicies#type}
  */
  readonly type?: string;
}

export function applianceSdwanInternetPoliciesWanTrafficUplinkPreferencesTrafficFiltersDestinationApplicationsToTerraform(struct?: ApplianceSdwanInternetPoliciesWanTrafficUplinkPreferencesTrafficFiltersDestinationApplications | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function applianceSdwanInternetPoliciesWanTrafficUplinkPreferencesTrafficFiltersDestinationApplicationsToHclTerraform(struct?: ApplianceSdwanInternetPoliciesWanTrafficUplinkPreferencesTrafficFiltersDestinationApplications | cdktf.IResolvable): any {
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

export class ApplianceSdwanInternetPoliciesWanTrafficUplinkPreferencesTrafficFiltersDestinationApplicationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplianceSdwanInternetPoliciesWanTrafficUplinkPreferencesTrafficFiltersDestinationApplications | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
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
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplianceSdwanInternetPoliciesWanTrafficUplinkPreferencesTrafficFiltersDestinationApplications | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._name = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._name = value.name;
      this._type = value.type;
    }
  }

  // id - computed: false, optional: true, required: false
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

export class ApplianceSdwanInternetPoliciesWanTrafficUplinkPreferencesTrafficFiltersDestinationApplicationsList extends cdktf.ComplexList {
  public internalValue? : ApplianceSdwanInternetPoliciesWanTrafficUplinkPreferencesTrafficFiltersDestinationApplications[] | cdktf.IResolvable

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
  public get(index: number): ApplianceSdwanInternetPoliciesWanTrafficUplinkPreferencesTrafficFiltersDestinationApplicationsOutputReference {
    return new ApplianceSdwanInternetPoliciesWanTrafficUplinkPreferencesTrafficFiltersDestinationApplicationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplianceSdwanInternetPoliciesWanTrafficUplinkPreferencesTrafficFilters {
  /**
  * list of application objects (either majorApplication or nbar)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/appliance_sdwan_internet_policies#destination_applications ApplianceSdwanInternetPolicies#destination_applications}
  */
  readonly destinationApplications?: ApplianceSdwanInternetPoliciesWanTrafficUplinkPreferencesTrafficFiltersDestinationApplications[] | cdktf.IResolvable;
  /**
  * CIDR format address (e.g.'192.168.10.1', which is the same as '192.168.10.1/32'), or 'any'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/appliance_sdwan_internet_policies#destination_cidr ApplianceSdwanInternetPolicies#destination_cidr}
  */
  readonly destinationCidr?: string;
  /**
  * E.g.: 'any', '0' (also means 'any'), '8080', '1-1024'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/appliance_sdwan_internet_policies#destination_port ApplianceSdwanInternetPolicies#destination_port}
  */
  readonly destinationPort?: string;
  /**
  * Protocol of the traffic filter. Must be one of: `tcp`, `udp`, `icmp6` or `any`
  *   - Choices: `any`, `icmp6`, `tcp`, `udp`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/appliance_sdwan_internet_policies#protocol ApplianceSdwanInternetPolicies#protocol}
  */
  readonly protocol?: string;
  /**
  * CIDR format address (e.g.'192.168.10.1', which is the same as '192.168.10.1/32'), or 'any'. Cannot be used in combination with the 'vlan' property
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/appliance_sdwan_internet_policies#source_cidr ApplianceSdwanInternetPolicies#source_cidr}
  */
  readonly sourceCidr?: string;
  /**
  * Host ID in the VLAN. Should not exceed the VLAN subnet capacity. Must be used along with the 'vlan' property and is currently only available under a template network.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/appliance_sdwan_internet_policies#source_host ApplianceSdwanInternetPolicies#source_host}
  */
  readonly sourceHost?: number;
  /**
  * E.g.: 'any', '0' (also means 'any'), '8080', '1-1024'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/appliance_sdwan_internet_policies#source_port ApplianceSdwanInternetPolicies#source_port}
  */
  readonly sourcePort?: string;
  /**
  * VLAN ID of the configured VLAN in the Meraki network. Cannot be used in combination with the 'cidr' property and is currently only available under a template network.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/appliance_sdwan_internet_policies#source_vlan ApplianceSdwanInternetPolicies#source_vlan}
  */
  readonly sourceVlan?: number;
  /**
  * Traffic filter type. Must be `custom`, `major_application`, `application (NBAR)`, if type is `application`, you can pass either an NBAR App Category or Application
  *   - Choices: `application`, `custom`, `majorApplication`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/appliance_sdwan_internet_policies#type ApplianceSdwanInternetPolicies#type}
  */
  readonly type: string;
}

export function applianceSdwanInternetPoliciesWanTrafficUplinkPreferencesTrafficFiltersToTerraform(struct?: ApplianceSdwanInternetPoliciesWanTrafficUplinkPreferencesTrafficFilters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    destination_applications: cdktf.listMapper(applianceSdwanInternetPoliciesWanTrafficUplinkPreferencesTrafficFiltersDestinationApplicationsToTerraform, false)(struct!.destinationApplications),
    destination_cidr: cdktf.stringToTerraform(struct!.destinationCidr),
    destination_port: cdktf.stringToTerraform(struct!.destinationPort),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    source_cidr: cdktf.stringToTerraform(struct!.sourceCidr),
    source_host: cdktf.numberToTerraform(struct!.sourceHost),
    source_port: cdktf.stringToTerraform(struct!.sourcePort),
    source_vlan: cdktf.numberToTerraform(struct!.sourceVlan),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function applianceSdwanInternetPoliciesWanTrafficUplinkPreferencesTrafficFiltersToHclTerraform(struct?: ApplianceSdwanInternetPoliciesWanTrafficUplinkPreferencesTrafficFilters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    destination_applications: {
      value: cdktf.listMapperHcl(applianceSdwanInternetPoliciesWanTrafficUplinkPreferencesTrafficFiltersDestinationApplicationsToHclTerraform, false)(struct!.destinationApplications),
      isBlock: true,
      type: "list",
      storageClassType: "ApplianceSdwanInternetPoliciesWanTrafficUplinkPreferencesTrafficFiltersDestinationApplicationsList",
    },
    destination_cidr: {
      value: cdktf.stringToHclTerraform(struct!.destinationCidr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    destination_port: {
      value: cdktf.stringToHclTerraform(struct!.destinationPort),
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
    source_cidr: {
      value: cdktf.stringToHclTerraform(struct!.sourceCidr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_host: {
      value: cdktf.numberToHclTerraform(struct!.sourceHost),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    source_port: {
      value: cdktf.stringToHclTerraform(struct!.sourcePort),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_vlan: {
      value: cdktf.numberToHclTerraform(struct!.sourceVlan),
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

export class ApplianceSdwanInternetPoliciesWanTrafficUplinkPreferencesTrafficFiltersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplianceSdwanInternetPoliciesWanTrafficUplinkPreferencesTrafficFilters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._destinationApplications?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationApplications = this._destinationApplications?.internalValue;
    }
    if (this._destinationCidr !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationCidr = this._destinationCidr;
    }
    if (this._destinationPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationPort = this._destinationPort;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._sourceCidr !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceCidr = this._sourceCidr;
    }
    if (this._sourceHost !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceHost = this._sourceHost;
    }
    if (this._sourcePort !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourcePort = this._sourcePort;
    }
    if (this._sourceVlan !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceVlan = this._sourceVlan;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplianceSdwanInternetPoliciesWanTrafficUplinkPreferencesTrafficFilters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._destinationApplications.internalValue = undefined;
      this._destinationCidr = undefined;
      this._destinationPort = undefined;
      this._protocol = undefined;
      this._sourceCidr = undefined;
      this._sourceHost = undefined;
      this._sourcePort = undefined;
      this._sourceVlan = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._destinationApplications.internalValue = value.destinationApplications;
      this._destinationCidr = value.destinationCidr;
      this._destinationPort = value.destinationPort;
      this._protocol = value.protocol;
      this._sourceCidr = value.sourceCidr;
      this._sourceHost = value.sourceHost;
      this._sourcePort = value.sourcePort;
      this._sourceVlan = value.sourceVlan;
      this._type = value.type;
    }
  }

  // destination_applications - computed: false, optional: true, required: false
  private _destinationApplications = new ApplianceSdwanInternetPoliciesWanTrafficUplinkPreferencesTrafficFiltersDestinationApplicationsList(this, "destination_applications", false);
  public get destinationApplications() {
    return this._destinationApplications;
  }
  public putDestinationApplications(value: ApplianceSdwanInternetPoliciesWanTrafficUplinkPreferencesTrafficFiltersDestinationApplications[] | cdktf.IResolvable) {
    this._destinationApplications.internalValue = value;
  }
  public resetDestinationApplications() {
    this._destinationApplications.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationApplicationsInput() {
    return this._destinationApplications.internalValue;
  }

  // destination_cidr - computed: false, optional: true, required: false
  private _destinationCidr?: string; 
  public get destinationCidr() {
    return this.getStringAttribute('destination_cidr');
  }
  public set destinationCidr(value: string) {
    this._destinationCidr = value;
  }
  public resetDestinationCidr() {
    this._destinationCidr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationCidrInput() {
    return this._destinationCidr;
  }

  // destination_port - computed: false, optional: true, required: false
  private _destinationPort?: string; 
  public get destinationPort() {
    return this.getStringAttribute('destination_port');
  }
  public set destinationPort(value: string) {
    this._destinationPort = value;
  }
  public resetDestinationPort() {
    this._destinationPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationPortInput() {
    return this._destinationPort;
  }

  // protocol - computed: false, optional: true, required: false
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

  // source_cidr - computed: false, optional: true, required: false
  private _sourceCidr?: string; 
  public get sourceCidr() {
    return this.getStringAttribute('source_cidr');
  }
  public set sourceCidr(value: string) {
    this._sourceCidr = value;
  }
  public resetSourceCidr() {
    this._sourceCidr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceCidrInput() {
    return this._sourceCidr;
  }

  // source_host - computed: false, optional: true, required: false
  private _sourceHost?: number; 
  public get sourceHost() {
    return this.getNumberAttribute('source_host');
  }
  public set sourceHost(value: number) {
    this._sourceHost = value;
  }
  public resetSourceHost() {
    this._sourceHost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceHostInput() {
    return this._sourceHost;
  }

  // source_port - computed: false, optional: true, required: false
  private _sourcePort?: string; 
  public get sourcePort() {
    return this.getStringAttribute('source_port');
  }
  public set sourcePort(value: string) {
    this._sourcePort = value;
  }
  public resetSourcePort() {
    this._sourcePort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourcePortInput() {
    return this._sourcePort;
  }

  // source_vlan - computed: false, optional: true, required: false
  private _sourceVlan?: number; 
  public get sourceVlan() {
    return this.getNumberAttribute('source_vlan');
  }
  public set sourceVlan(value: number) {
    this._sourceVlan = value;
  }
  public resetSourceVlan() {
    this._sourceVlan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceVlanInput() {
    return this._sourceVlan;
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

export class ApplianceSdwanInternetPoliciesWanTrafficUplinkPreferencesTrafficFiltersList extends cdktf.ComplexList {
  public internalValue? : ApplianceSdwanInternetPoliciesWanTrafficUplinkPreferencesTrafficFilters[] | cdktf.IResolvable

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
  public get(index: number): ApplianceSdwanInternetPoliciesWanTrafficUplinkPreferencesTrafficFiltersOutputReference {
    return new ApplianceSdwanInternetPoliciesWanTrafficUplinkPreferencesTrafficFiltersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplianceSdwanInternetPoliciesWanTrafficUplinkPreferences {
  /**
  * Name of builtin performance class. Must be present when performanceClass type is `builtin` and value must be one of: `VoIP`
  *   - Choices: `VoIP`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/appliance_sdwan_internet_policies#builtin_performance_class_name ApplianceSdwanInternetPolicies#builtin_performance_class_name}
  */
  readonly builtinPerformanceClassName?: string;
  /**
  * ID of created custom performance class, must be present when performanceClass type is 'custom'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/appliance_sdwan_internet_policies#custom_performance_class_id ApplianceSdwanInternetPolicies#custom_performance_class_id}
  */
  readonly customPerformanceClassId?: string;
  /**
  * WAN failover and failback behavior
  *   - Choices: `poorPerformance`, `uplinkDown`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/appliance_sdwan_internet_policies#fail_over_criterion ApplianceSdwanInternetPolicies#fail_over_criterion}
  */
  readonly failOverCriterion?: string;
  /**
  * Type of this performance class. Must be one of: `builtin` or `custom`
  *   - Choices: `builtin`, `custom`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/appliance_sdwan_internet_policies#performance_class_type ApplianceSdwanInternetPolicies#performance_class_type}
  */
  readonly performanceClassType?: string;
  /**
  * Preferred uplink for uplink preference rule. Must be one of: `wan1`, `wan2`, `bestForVoIP`, `loadBalancing` or `defaultUplink`
  *   - Choices: `bestForVoIP`, `defaultUplink`, `loadBalancing`, `wan1`, `wan2`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/appliance_sdwan_internet_policies#preferred_uplink ApplianceSdwanInternetPolicies#preferred_uplink}
  */
  readonly preferredUplink: string;
  /**
  * Traffic filters
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/appliance_sdwan_internet_policies#traffic_filters ApplianceSdwanInternetPolicies#traffic_filters}
  */
  readonly trafficFilters: ApplianceSdwanInternetPoliciesWanTrafficUplinkPreferencesTrafficFilters[] | cdktf.IResolvable;
}

export function applianceSdwanInternetPoliciesWanTrafficUplinkPreferencesToTerraform(struct?: ApplianceSdwanInternetPoliciesWanTrafficUplinkPreferences | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    builtin_performance_class_name: cdktf.stringToTerraform(struct!.builtinPerformanceClassName),
    custom_performance_class_id: cdktf.stringToTerraform(struct!.customPerformanceClassId),
    fail_over_criterion: cdktf.stringToTerraform(struct!.failOverCriterion),
    performance_class_type: cdktf.stringToTerraform(struct!.performanceClassType),
    preferred_uplink: cdktf.stringToTerraform(struct!.preferredUplink),
    traffic_filters: cdktf.listMapper(applianceSdwanInternetPoliciesWanTrafficUplinkPreferencesTrafficFiltersToTerraform, false)(struct!.trafficFilters),
  }
}


export function applianceSdwanInternetPoliciesWanTrafficUplinkPreferencesToHclTerraform(struct?: ApplianceSdwanInternetPoliciesWanTrafficUplinkPreferences | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    builtin_performance_class_name: {
      value: cdktf.stringToHclTerraform(struct!.builtinPerformanceClassName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    custom_performance_class_id: {
      value: cdktf.stringToHclTerraform(struct!.customPerformanceClassId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fail_over_criterion: {
      value: cdktf.stringToHclTerraform(struct!.failOverCriterion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    performance_class_type: {
      value: cdktf.stringToHclTerraform(struct!.performanceClassType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    preferred_uplink: {
      value: cdktf.stringToHclTerraform(struct!.preferredUplink),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    traffic_filters: {
      value: cdktf.listMapperHcl(applianceSdwanInternetPoliciesWanTrafficUplinkPreferencesTrafficFiltersToHclTerraform, false)(struct!.trafficFilters),
      isBlock: true,
      type: "list",
      storageClassType: "ApplianceSdwanInternetPoliciesWanTrafficUplinkPreferencesTrafficFiltersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplianceSdwanInternetPoliciesWanTrafficUplinkPreferencesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplianceSdwanInternetPoliciesWanTrafficUplinkPreferences | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._builtinPerformanceClassName !== undefined) {
      hasAnyValues = true;
      internalValueResult.builtinPerformanceClassName = this._builtinPerformanceClassName;
    }
    if (this._customPerformanceClassId !== undefined) {
      hasAnyValues = true;
      internalValueResult.customPerformanceClassId = this._customPerformanceClassId;
    }
    if (this._failOverCriterion !== undefined) {
      hasAnyValues = true;
      internalValueResult.failOverCriterion = this._failOverCriterion;
    }
    if (this._performanceClassType !== undefined) {
      hasAnyValues = true;
      internalValueResult.performanceClassType = this._performanceClassType;
    }
    if (this._preferredUplink !== undefined) {
      hasAnyValues = true;
      internalValueResult.preferredUplink = this._preferredUplink;
    }
    if (this._trafficFilters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.trafficFilters = this._trafficFilters?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplianceSdwanInternetPoliciesWanTrafficUplinkPreferences | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._builtinPerformanceClassName = undefined;
      this._customPerformanceClassId = undefined;
      this._failOverCriterion = undefined;
      this._performanceClassType = undefined;
      this._preferredUplink = undefined;
      this._trafficFilters.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._builtinPerformanceClassName = value.builtinPerformanceClassName;
      this._customPerformanceClassId = value.customPerformanceClassId;
      this._failOverCriterion = value.failOverCriterion;
      this._performanceClassType = value.performanceClassType;
      this._preferredUplink = value.preferredUplink;
      this._trafficFilters.internalValue = value.trafficFilters;
    }
  }

  // builtin_performance_class_name - computed: false, optional: true, required: false
  private _builtinPerformanceClassName?: string; 
  public get builtinPerformanceClassName() {
    return this.getStringAttribute('builtin_performance_class_name');
  }
  public set builtinPerformanceClassName(value: string) {
    this._builtinPerformanceClassName = value;
  }
  public resetBuiltinPerformanceClassName() {
    this._builtinPerformanceClassName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get builtinPerformanceClassNameInput() {
    return this._builtinPerformanceClassName;
  }

  // custom_performance_class_id - computed: false, optional: true, required: false
  private _customPerformanceClassId?: string; 
  public get customPerformanceClassId() {
    return this.getStringAttribute('custom_performance_class_id');
  }
  public set customPerformanceClassId(value: string) {
    this._customPerformanceClassId = value;
  }
  public resetCustomPerformanceClassId() {
    this._customPerformanceClassId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customPerformanceClassIdInput() {
    return this._customPerformanceClassId;
  }

  // fail_over_criterion - computed: false, optional: true, required: false
  private _failOverCriterion?: string; 
  public get failOverCriterion() {
    return this.getStringAttribute('fail_over_criterion');
  }
  public set failOverCriterion(value: string) {
    this._failOverCriterion = value;
  }
  public resetFailOverCriterion() {
    this._failOverCriterion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failOverCriterionInput() {
    return this._failOverCriterion;
  }

  // performance_class_type - computed: false, optional: true, required: false
  private _performanceClassType?: string; 
  public get performanceClassType() {
    return this.getStringAttribute('performance_class_type');
  }
  public set performanceClassType(value: string) {
    this._performanceClassType = value;
  }
  public resetPerformanceClassType() {
    this._performanceClassType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get performanceClassTypeInput() {
    return this._performanceClassType;
  }

  // preferred_uplink - computed: false, optional: false, required: true
  private _preferredUplink?: string; 
  public get preferredUplink() {
    return this.getStringAttribute('preferred_uplink');
  }
  public set preferredUplink(value: string) {
    this._preferredUplink = value;
  }
  // Temporarily expose input value. Use with caution.
  public get preferredUplinkInput() {
    return this._preferredUplink;
  }

  // traffic_filters - computed: false, optional: false, required: true
  private _trafficFilters = new ApplianceSdwanInternetPoliciesWanTrafficUplinkPreferencesTrafficFiltersList(this, "traffic_filters", false);
  public get trafficFilters() {
    return this._trafficFilters;
  }
  public putTrafficFilters(value: ApplianceSdwanInternetPoliciesWanTrafficUplinkPreferencesTrafficFilters[] | cdktf.IResolvable) {
    this._trafficFilters.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get trafficFiltersInput() {
    return this._trafficFilters.internalValue;
  }
}

export class ApplianceSdwanInternetPoliciesWanTrafficUplinkPreferencesList extends cdktf.ComplexList {
  public internalValue? : ApplianceSdwanInternetPoliciesWanTrafficUplinkPreferences[] | cdktf.IResolvable

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
  public get(index: number): ApplianceSdwanInternetPoliciesWanTrafficUplinkPreferencesOutputReference {
    return new ApplianceSdwanInternetPoliciesWanTrafficUplinkPreferencesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/appliance_sdwan_internet_policies meraki_appliance_sdwan_internet_policies}
*/
export class ApplianceSdwanInternetPolicies extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "meraki_appliance_sdwan_internet_policies";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ApplianceSdwanInternetPolicies resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ApplianceSdwanInternetPolicies to import
  * @param importFromId The id of the existing ApplianceSdwanInternetPolicies that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/appliance_sdwan_internet_policies#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ApplianceSdwanInternetPolicies to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "meraki_appliance_sdwan_internet_policies", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/appliance_sdwan_internet_policies meraki_appliance_sdwan_internet_policies} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ApplianceSdwanInternetPoliciesConfig
  */
  public constructor(scope: Construct, id: string, config: ApplianceSdwanInternetPoliciesConfig) {
    super(scope, id, {
      terraformResourceType: 'meraki_appliance_sdwan_internet_policies',
      terraformGeneratorMetadata: {
        providerName: 'meraki',
        providerVersion: '1.7.1',
        providerVersionConstraint: '1.7.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._networkId = config.networkId;
    this._wanTrafficUplinkPreferences.internalValue = config.wanTrafficUplinkPreferences;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // network_id - computed: false, optional: false, required: true
  private _networkId?: string; 
  public get networkId() {
    return this.getStringAttribute('network_id');
  }
  public set networkId(value: string) {
    this._networkId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkIdInput() {
    return this._networkId;
  }

  // wan_traffic_uplink_preferences - computed: false, optional: false, required: true
  private _wanTrafficUplinkPreferences = new ApplianceSdwanInternetPoliciesWanTrafficUplinkPreferencesList(this, "wan_traffic_uplink_preferences", false);
  public get wanTrafficUplinkPreferences() {
    return this._wanTrafficUplinkPreferences;
  }
  public putWanTrafficUplinkPreferences(value: ApplianceSdwanInternetPoliciesWanTrafficUplinkPreferences[] | cdktf.IResolvable) {
    this._wanTrafficUplinkPreferences.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get wanTrafficUplinkPreferencesInput() {
    return this._wanTrafficUplinkPreferences.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      network_id: cdktf.stringToTerraform(this._networkId),
      wan_traffic_uplink_preferences: cdktf.listMapper(applianceSdwanInternetPoliciesWanTrafficUplinkPreferencesToTerraform, false)(this._wanTrafficUplinkPreferences.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      network_id: {
        value: cdktf.stringToHclTerraform(this._networkId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      wan_traffic_uplink_preferences: {
        value: cdktf.listMapperHcl(applianceSdwanInternetPoliciesWanTrafficUplinkPreferencesToHclTerraform, false)(this._wanTrafficUplinkPreferences.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ApplianceSdwanInternetPoliciesWanTrafficUplinkPreferencesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
