// https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/marketplace_service_port_accept_request
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MarketplaceServicePortAcceptRequestConfig extends cdktf.TerraformMetaArguments {
  /**
  * For cloud connections, this is the cloud provider: "aws", "google", "oracle", "azure"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/marketplace_service_port_accept_request#cloud_provider MarketplaceServicePortAcceptRequest#cloud_provider}
  */
  readonly cloudProvider?: string;
  /**
  * A brief description for the connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/marketplace_service_port_accept_request#description MarketplaceServicePortAcceptRequest#description}
  */
  readonly description: string;
  /**
  * The service type: "backbone", "ix", or "cloud".
  * 
  * 	Most requests will be "backbone". Connections to the requesting side's cloud environment are "cloud".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/marketplace_service_port_accept_request#type MarketplaceServicePortAcceptRequest#type}
  */
  readonly type: string;
  /**
  * UUID of the connection request you received from the marketplace user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/marketplace_service_port_accept_request#vc_request_uuid MarketplaceServicePortAcceptRequest#vc_request_uuid}
  */
  readonly vcRequestUuid: string;
  /**
  * interface block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/marketplace_service_port_accept_request#interface MarketplaceServicePortAcceptRequest#interface}
  */
  readonly interface: MarketplaceServicePortAcceptRequestInterface[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/marketplace_service_port_accept_request#timeouts MarketplaceServicePortAcceptRequest#timeouts}
  */
  readonly timeouts?: MarketplaceServicePortAcceptRequestTimeouts;
}
export interface MarketplaceServicePortAcceptRequestInterface {
  /**
  * The circuit ID of the port on which you want to provision the request. This starts with "PF-AP-"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/marketplace_service_port_accept_request#port_circuit_id MarketplaceServicePortAcceptRequest#port_circuit_id}
  */
  readonly portCircuitId: string;
  /**
  * Valid S-VLAN range is from 4-4094, inclusive.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/marketplace_service_port_accept_request#svlan MarketplaceServicePortAcceptRequest#svlan}
  */
  readonly svlan?: number;
  /**
  * Whether the interface should be untagged.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/marketplace_service_port_accept_request#untagged MarketplaceServicePortAcceptRequest#untagged}
  */
  readonly untagged?: boolean | cdktf.IResolvable;
  /**
  * Valid VLAN range is from 4-4094, inclusive.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/marketplace_service_port_accept_request#vlan MarketplaceServicePortAcceptRequest#vlan}
  */
  readonly vlan?: number;
  /**
  * For Microsoft Azure connections with Microsoft (public) peerings. Valid VLAN range is from 4-4094, inclusive.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/marketplace_service_port_accept_request#vlan_microsoft MarketplaceServicePortAcceptRequest#vlan_microsoft}
  */
  readonly vlanMicrosoft?: string;
  /**
  * For Microsoft Azure connections with private peerings. Valid VLAN range is from 4-4094, inclusive.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/marketplace_service_port_accept_request#vlan_private MarketplaceServicePortAcceptRequest#vlan_private}
  */
  readonly vlanPrivate?: string;
}

export function marketplaceServicePortAcceptRequestInterfaceToTerraform(struct?: MarketplaceServicePortAcceptRequestInterface | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    port_circuit_id: cdktf.stringToTerraform(struct!.portCircuitId),
    svlan: cdktf.numberToTerraform(struct!.svlan),
    untagged: cdktf.booleanToTerraform(struct!.untagged),
    vlan: cdktf.numberToTerraform(struct!.vlan),
    vlan_microsoft: cdktf.stringToTerraform(struct!.vlanMicrosoft),
    vlan_private: cdktf.stringToTerraform(struct!.vlanPrivate),
  }
}


export function marketplaceServicePortAcceptRequestInterfaceToHclTerraform(struct?: MarketplaceServicePortAcceptRequestInterface | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    port_circuit_id: {
      value: cdktf.stringToHclTerraform(struct!.portCircuitId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    svlan: {
      value: cdktf.numberToHclTerraform(struct!.svlan),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    untagged: {
      value: cdktf.booleanToHclTerraform(struct!.untagged),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    vlan: {
      value: cdktf.numberToHclTerraform(struct!.vlan),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    vlan_microsoft: {
      value: cdktf.stringToHclTerraform(struct!.vlanMicrosoft),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vlan_private: {
      value: cdktf.stringToHclTerraform(struct!.vlanPrivate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MarketplaceServicePortAcceptRequestInterfaceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MarketplaceServicePortAcceptRequestInterface | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._portCircuitId !== undefined) {
      hasAnyValues = true;
      internalValueResult.portCircuitId = this._portCircuitId;
    }
    if (this._svlan !== undefined) {
      hasAnyValues = true;
      internalValueResult.svlan = this._svlan;
    }
    if (this._untagged !== undefined) {
      hasAnyValues = true;
      internalValueResult.untagged = this._untagged;
    }
    if (this._vlan !== undefined) {
      hasAnyValues = true;
      internalValueResult.vlan = this._vlan;
    }
    if (this._vlanMicrosoft !== undefined) {
      hasAnyValues = true;
      internalValueResult.vlanMicrosoft = this._vlanMicrosoft;
    }
    if (this._vlanPrivate !== undefined) {
      hasAnyValues = true;
      internalValueResult.vlanPrivate = this._vlanPrivate;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MarketplaceServicePortAcceptRequestInterface | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._portCircuitId = undefined;
      this._svlan = undefined;
      this._untagged = undefined;
      this._vlan = undefined;
      this._vlanMicrosoft = undefined;
      this._vlanPrivate = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._portCircuitId = value.portCircuitId;
      this._svlan = value.svlan;
      this._untagged = value.untagged;
      this._vlan = value.vlan;
      this._vlanMicrosoft = value.vlanMicrosoft;
      this._vlanPrivate = value.vlanPrivate;
    }
  }

  // port_circuit_id - computed: false, optional: false, required: true
  private _portCircuitId?: string; 
  public get portCircuitId() {
    return this.getStringAttribute('port_circuit_id');
  }
  public set portCircuitId(value: string) {
    this._portCircuitId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portCircuitIdInput() {
    return this._portCircuitId;
  }

  // svlan - computed: false, optional: true, required: false
  private _svlan?: number; 
  public get svlan() {
    return this.getNumberAttribute('svlan');
  }
  public set svlan(value: number) {
    this._svlan = value;
  }
  public resetSvlan() {
    this._svlan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get svlanInput() {
    return this._svlan;
  }

  // untagged - computed: false, optional: true, required: false
  private _untagged?: boolean | cdktf.IResolvable; 
  public get untagged() {
    return this.getBooleanAttribute('untagged');
  }
  public set untagged(value: boolean | cdktf.IResolvable) {
    this._untagged = value;
  }
  public resetUntagged() {
    this._untagged = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get untaggedInput() {
    return this._untagged;
  }

  // vlan - computed: false, optional: true, required: false
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

  // vlan_microsoft - computed: false, optional: true, required: false
  private _vlanMicrosoft?: string; 
  public get vlanMicrosoft() {
    return this.getStringAttribute('vlan_microsoft');
  }
  public set vlanMicrosoft(value: string) {
    this._vlanMicrosoft = value;
  }
  public resetVlanMicrosoft() {
    this._vlanMicrosoft = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanMicrosoftInput() {
    return this._vlanMicrosoft;
  }

  // vlan_private - computed: false, optional: true, required: false
  private _vlanPrivate?: string; 
  public get vlanPrivate() {
    return this.getStringAttribute('vlan_private');
  }
  public set vlanPrivate(value: string) {
    this._vlanPrivate = value;
  }
  public resetVlanPrivate() {
    this._vlanPrivate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanPrivateInput() {
    return this._vlanPrivate;
  }
}

export class MarketplaceServicePortAcceptRequestInterfaceList extends cdktf.ComplexList {
  public internalValue? : MarketplaceServicePortAcceptRequestInterface[] | cdktf.IResolvable

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
  public get(index: number): MarketplaceServicePortAcceptRequestInterfaceOutputReference {
    return new MarketplaceServicePortAcceptRequestInterfaceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MarketplaceServicePortAcceptRequestTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/marketplace_service_port_accept_request#create MarketplaceServicePortAcceptRequest#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/marketplace_service_port_accept_request#delete MarketplaceServicePortAcceptRequest#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/marketplace_service_port_accept_request#read MarketplaceServicePortAcceptRequest#read}
  */
  readonly read?: string;
}

export function marketplaceServicePortAcceptRequestTimeoutsToTerraform(struct?: MarketplaceServicePortAcceptRequestTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
  }
}


export function marketplaceServicePortAcceptRequestTimeoutsToHclTerraform(struct?: MarketplaceServicePortAcceptRequestTimeouts | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MarketplaceServicePortAcceptRequestTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MarketplaceServicePortAcceptRequestTimeouts | cdktf.IResolvable | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MarketplaceServicePortAcceptRequestTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._read = undefined;
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
}

/**
* Represents a {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/marketplace_service_port_accept_request packetfabric_marketplace_service_port_accept_request}
*/
export class MarketplaceServicePortAcceptRequest extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "packetfabric_marketplace_service_port_accept_request";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a MarketplaceServicePortAcceptRequest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MarketplaceServicePortAcceptRequest to import
  * @param importFromId The id of the existing MarketplaceServicePortAcceptRequest that should be imported. Refer to the {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/marketplace_service_port_accept_request#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MarketplaceServicePortAcceptRequest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "packetfabric_marketplace_service_port_accept_request", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/marketplace_service_port_accept_request packetfabric_marketplace_service_port_accept_request} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MarketplaceServicePortAcceptRequestConfig
  */
  public constructor(scope: Construct, id: string, config: MarketplaceServicePortAcceptRequestConfig) {
    super(scope, id, {
      terraformResourceType: 'packetfabric_marketplace_service_port_accept_request',
      terraformGeneratorMetadata: {
        providerName: 'packetfabric',
        providerVersion: '1.9.3',
        providerVersionConstraint: '1.9.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._cloudProvider = config.cloudProvider;
    this._description = config.description;
    this._type = config.type;
    this._vcRequestUuid = config.vcRequestUuid;
    this._interface.internalValue = config.interface;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cloud_provider - computed: false, optional: true, required: false
  private _cloudProvider?: string; 
  public get cloudProvider() {
    return this.getStringAttribute('cloud_provider');
  }
  public set cloudProvider(value: string) {
    this._cloudProvider = value;
  }
  public resetCloudProvider() {
    this._cloudProvider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudProviderInput() {
    return this._cloudProvider;
  }

  // description - computed: false, optional: false, required: true
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // vc_request_uuid - computed: false, optional: false, required: true
  private _vcRequestUuid?: string; 
  public get vcRequestUuid() {
    return this.getStringAttribute('vc_request_uuid');
  }
  public set vcRequestUuid(value: string) {
    this._vcRequestUuid = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vcRequestUuidInput() {
    return this._vcRequestUuid;
  }

  // interface - computed: false, optional: false, required: true
  private _interface = new MarketplaceServicePortAcceptRequestInterfaceList(this, "interface", true);
  public get interface() {
    return this._interface;
  }
  public putInterface(value: MarketplaceServicePortAcceptRequestInterface[] | cdktf.IResolvable) {
    this._interface.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceInput() {
    return this._interface.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new MarketplaceServicePortAcceptRequestTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: MarketplaceServicePortAcceptRequestTimeouts) {
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
      cloud_provider: cdktf.stringToTerraform(this._cloudProvider),
      description: cdktf.stringToTerraform(this._description),
      type: cdktf.stringToTerraform(this._type),
      vc_request_uuid: cdktf.stringToTerraform(this._vcRequestUuid),
      interface: cdktf.listMapper(marketplaceServicePortAcceptRequestInterfaceToTerraform, true)(this._interface.internalValue),
      timeouts: marketplaceServicePortAcceptRequestTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cloud_provider: {
        value: cdktf.stringToHclTerraform(this._cloudProvider),
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
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vc_request_uuid: {
        value: cdktf.stringToHclTerraform(this._vcRequestUuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      interface: {
        value: cdktf.listMapperHcl(marketplaceServicePortAcceptRequestInterfaceToHclTerraform, true)(this._interface.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "MarketplaceServicePortAcceptRequestInterfaceList",
      },
      timeouts: {
        value: marketplaceServicePortAcceptRequestTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "MarketplaceServicePortAcceptRequestTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
