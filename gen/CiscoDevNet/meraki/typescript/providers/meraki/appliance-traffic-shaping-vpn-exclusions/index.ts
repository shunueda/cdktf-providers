// https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/appliance_traffic_shaping_vpn_exclusions
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ApplianceTrafficShapingVpnExclusionsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Custom VPN exclusion rules. Pass an empty array to clear existing rules.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/appliance_traffic_shaping_vpn_exclusions#custom ApplianceTrafficShapingVpnExclusions#custom}
  */
  readonly custom?: ApplianceTrafficShapingVpnExclusionsCustom[] | cdktf.IResolvable;
  /**
  * Major Application based VPN exclusion rules. Pass an empty array to clear existing rules.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/appliance_traffic_shaping_vpn_exclusions#major_applications ApplianceTrafficShapingVpnExclusions#major_applications}
  */
  readonly majorApplications?: ApplianceTrafficShapingVpnExclusionsMajorApplications[] | cdktf.IResolvable;
  /**
  * Network ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/appliance_traffic_shaping_vpn_exclusions#network_id ApplianceTrafficShapingVpnExclusions#network_id}
  */
  readonly networkId: string;
}
export interface ApplianceTrafficShapingVpnExclusionsCustom {
  /**
  * Destination address; hostname required for DNS, IPv4 otherwise.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/appliance_traffic_shaping_vpn_exclusions#destination ApplianceTrafficShapingVpnExclusions#destination}
  */
  readonly destination?: string;
  /**
  * Destination port.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/appliance_traffic_shaping_vpn_exclusions#port ApplianceTrafficShapingVpnExclusions#port}
  */
  readonly port?: string;
  /**
  * Protocol.
  *   - Choices: `any`, `dns`, `icmp`, `tcp`, `udp`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/appliance_traffic_shaping_vpn_exclusions#protocol ApplianceTrafficShapingVpnExclusions#protocol}
  */
  readonly protocol: string;
}

export function applianceTrafficShapingVpnExclusionsCustomToTerraform(struct?: ApplianceTrafficShapingVpnExclusionsCustom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    destination: cdktf.stringToTerraform(struct!.destination),
    port: cdktf.stringToTerraform(struct!.port),
    protocol: cdktf.stringToTerraform(struct!.protocol),
  }
}


export function applianceTrafficShapingVpnExclusionsCustomToHclTerraform(struct?: ApplianceTrafficShapingVpnExclusionsCustom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    destination: {
      value: cdktf.stringToHclTerraform(struct!.destination),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktf.stringToHclTerraform(struct!.port),
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

export class ApplianceTrafficShapingVpnExclusionsCustomOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplianceTrafficShapingVpnExclusionsCustom | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._destination !== undefined) {
      hasAnyValues = true;
      internalValueResult.destination = this._destination;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplianceTrafficShapingVpnExclusionsCustom | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._destination = undefined;
      this._port = undefined;
      this._protocol = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._destination = value.destination;
      this._port = value.port;
      this._protocol = value.protocol;
    }
  }

  // destination - computed: false, optional: true, required: false
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

  // port - computed: false, optional: true, required: false
  private _port?: string; 
  public get port() {
    return this.getStringAttribute('port');
  }
  public set port(value: string) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // protocol - computed: false, optional: false, required: true
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }
}

export class ApplianceTrafficShapingVpnExclusionsCustomList extends cdktf.ComplexList {
  public internalValue? : ApplianceTrafficShapingVpnExclusionsCustom[] | cdktf.IResolvable

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
  public get(index: number): ApplianceTrafficShapingVpnExclusionsCustomOutputReference {
    return new ApplianceTrafficShapingVpnExclusionsCustomOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplianceTrafficShapingVpnExclusionsMajorApplications {
  /**
  * Application`s Meraki ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/appliance_traffic_shaping_vpn_exclusions#id ApplianceTrafficShapingVpnExclusions#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Application`s name.
  *   - Choices: `AWS`, `Box`, `Office 365 Sharepoint`, `Office 365 Suite`, `Oracle`, `SAP`, `Salesforce`, `Skype & Teams`, `Slack`, `Webex`, `Webex Calling`, `Webex Meetings`, `Zoom`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/appliance_traffic_shaping_vpn_exclusions#name ApplianceTrafficShapingVpnExclusions#name}
  */
  readonly name?: string;
}

export function applianceTrafficShapingVpnExclusionsMajorApplicationsToTerraform(struct?: ApplianceTrafficShapingVpnExclusionsMajorApplications | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function applianceTrafficShapingVpnExclusionsMajorApplicationsToHclTerraform(struct?: ApplianceTrafficShapingVpnExclusionsMajorApplications | cdktf.IResolvable): any {
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

export class ApplianceTrafficShapingVpnExclusionsMajorApplicationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplianceTrafficShapingVpnExclusionsMajorApplications | cdktf.IResolvable | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplianceTrafficShapingVpnExclusionsMajorApplications | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._name = undefined;
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
}

export class ApplianceTrafficShapingVpnExclusionsMajorApplicationsList extends cdktf.ComplexList {
  public internalValue? : ApplianceTrafficShapingVpnExclusionsMajorApplications[] | cdktf.IResolvable

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
  public get(index: number): ApplianceTrafficShapingVpnExclusionsMajorApplicationsOutputReference {
    return new ApplianceTrafficShapingVpnExclusionsMajorApplicationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/appliance_traffic_shaping_vpn_exclusions meraki_appliance_traffic_shaping_vpn_exclusions}
*/
export class ApplianceTrafficShapingVpnExclusions extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "meraki_appliance_traffic_shaping_vpn_exclusions";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ApplianceTrafficShapingVpnExclusions resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ApplianceTrafficShapingVpnExclusions to import
  * @param importFromId The id of the existing ApplianceTrafficShapingVpnExclusions that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/appliance_traffic_shaping_vpn_exclusions#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ApplianceTrafficShapingVpnExclusions to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "meraki_appliance_traffic_shaping_vpn_exclusions", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/appliance_traffic_shaping_vpn_exclusions meraki_appliance_traffic_shaping_vpn_exclusions} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ApplianceTrafficShapingVpnExclusionsConfig
  */
  public constructor(scope: Construct, id: string, config: ApplianceTrafficShapingVpnExclusionsConfig) {
    super(scope, id, {
      terraformResourceType: 'meraki_appliance_traffic_shaping_vpn_exclusions',
      terraformGeneratorMetadata: {
        providerName: 'meraki',
        providerVersion: '1.7.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._custom.internalValue = config.custom;
    this._majorApplications.internalValue = config.majorApplications;
    this._networkId = config.networkId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // custom - computed: false, optional: true, required: false
  private _custom = new ApplianceTrafficShapingVpnExclusionsCustomList(this, "custom", false);
  public get custom() {
    return this._custom;
  }
  public putCustom(value: ApplianceTrafficShapingVpnExclusionsCustom[] | cdktf.IResolvable) {
    this._custom.internalValue = value;
  }
  public resetCustom() {
    this._custom.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customInput() {
    return this._custom.internalValue;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // major_applications - computed: false, optional: true, required: false
  private _majorApplications = new ApplianceTrafficShapingVpnExclusionsMajorApplicationsList(this, "major_applications", false);
  public get majorApplications() {
    return this._majorApplications;
  }
  public putMajorApplications(value: ApplianceTrafficShapingVpnExclusionsMajorApplications[] | cdktf.IResolvable) {
    this._majorApplications.internalValue = value;
  }
  public resetMajorApplications() {
    this._majorApplications.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get majorApplicationsInput() {
    return this._majorApplications.internalValue;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      custom: cdktf.listMapper(applianceTrafficShapingVpnExclusionsCustomToTerraform, false)(this._custom.internalValue),
      major_applications: cdktf.listMapper(applianceTrafficShapingVpnExclusionsMajorApplicationsToTerraform, false)(this._majorApplications.internalValue),
      network_id: cdktf.stringToTerraform(this._networkId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      custom: {
        value: cdktf.listMapperHcl(applianceTrafficShapingVpnExclusionsCustomToHclTerraform, false)(this._custom.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ApplianceTrafficShapingVpnExclusionsCustomList",
      },
      major_applications: {
        value: cdktf.listMapperHcl(applianceTrafficShapingVpnExclusionsMajorApplicationsToHclTerraform, false)(this._majorApplications.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ApplianceTrafficShapingVpnExclusionsMajorApplicationsList",
      },
      network_id: {
        value: cdktf.stringToHclTerraform(this._networkId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
