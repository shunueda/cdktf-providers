// https://registry.terraform.io/providers/nttcom/fic/0.5.6/docs/resources/eri_router_to_uno_connection_v1
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface EriRouterToUnoConnectionV1Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/fic/0.5.6/docs/resources/eri_router_to_uno_connection_v1#bandwidth EriRouterToUnoConnectionV1#bandwidth}
  */
  readonly bandwidth: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/fic/0.5.6/docs/resources/eri_router_to_uno_connection_v1#connected_network_address EriRouterToUnoConnectionV1#connected_network_address}
  */
  readonly connectedNetworkAddress: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/fic/0.5.6/docs/resources/eri_router_to_uno_connection_v1#destination_c_number EriRouterToUnoConnectionV1#destination_c_number}
  */
  readonly destinationCNumber?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/fic/0.5.6/docs/resources/eri_router_to_uno_connection_v1#destination_interconnect EriRouterToUnoConnectionV1#destination_interconnect}
  */
  readonly destinationInterconnect: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/fic/0.5.6/docs/resources/eri_router_to_uno_connection_v1#destination_parent_contract_number EriRouterToUnoConnectionV1#destination_parent_contract_number}
  */
  readonly destinationParentContractNumber: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/fic/0.5.6/docs/resources/eri_router_to_uno_connection_v1#destination_qos_type EriRouterToUnoConnectionV1#destination_qos_type}
  */
  readonly destinationQosType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/fic/0.5.6/docs/resources/eri_router_to_uno_connection_v1#destination_route_filter_out EriRouterToUnoConnectionV1#destination_route_filter_out}
  */
  readonly destinationRouteFilterOut: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/fic/0.5.6/docs/resources/eri_router_to_uno_connection_v1#destination_vpn_number EriRouterToUnoConnectionV1#destination_vpn_number}
  */
  readonly destinationVpnNumber: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/fic/0.5.6/docs/resources/eri_router_to_uno_connection_v1#id EriRouterToUnoConnectionV1#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/fic/0.5.6/docs/resources/eri_router_to_uno_connection_v1#name EriRouterToUnoConnectionV1#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/fic/0.5.6/docs/resources/eri_router_to_uno_connection_v1#source_group_name EriRouterToUnoConnectionV1#source_group_name}
  */
  readonly sourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/fic/0.5.6/docs/resources/eri_router_to_uno_connection_v1#source_route_filter_in EriRouterToUnoConnectionV1#source_route_filter_in}
  */
  readonly sourceRouteFilterIn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/fic/0.5.6/docs/resources/eri_router_to_uno_connection_v1#source_route_filter_out EriRouterToUnoConnectionV1#source_route_filter_out}
  */
  readonly sourceRouteFilterOut: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/fic/0.5.6/docs/resources/eri_router_to_uno_connection_v1#source_router_id EriRouterToUnoConnectionV1#source_router_id}
  */
  readonly sourceRouterId: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/fic/0.5.6/docs/resources/eri_router_to_uno_connection_v1#timeouts EriRouterToUnoConnectionV1#timeouts}
  */
  readonly timeouts?: EriRouterToUnoConnectionV1Timeouts;
}
export interface EriRouterToUnoConnectionV1Timeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/fic/0.5.6/docs/resources/eri_router_to_uno_connection_v1#create EriRouterToUnoConnectionV1#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/fic/0.5.6/docs/resources/eri_router_to_uno_connection_v1#delete EriRouterToUnoConnectionV1#delete}
  */
  readonly delete?: string;
}

export function eriRouterToUnoConnectionV1TimeoutsToTerraform(struct?: EriRouterToUnoConnectionV1Timeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
  }
}


export function eriRouterToUnoConnectionV1TimeoutsToHclTerraform(struct?: EriRouterToUnoConnectionV1Timeouts | cdktf.IResolvable): any {
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

export class EriRouterToUnoConnectionV1TimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): EriRouterToUnoConnectionV1Timeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: EriRouterToUnoConnectionV1Timeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/nttcom/fic/0.5.6/docs/resources/eri_router_to_uno_connection_v1 fic_eri_router_to_uno_connection_v1}
*/
export class EriRouterToUnoConnectionV1 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fic_eri_router_to_uno_connection_v1";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a EriRouterToUnoConnectionV1 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the EriRouterToUnoConnectionV1 to import
  * @param importFromId The id of the existing EriRouterToUnoConnectionV1 that should be imported. Refer to the {@link https://registry.terraform.io/providers/nttcom/fic/0.5.6/docs/resources/eri_router_to_uno_connection_v1#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the EriRouterToUnoConnectionV1 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fic_eri_router_to_uno_connection_v1", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/nttcom/fic/0.5.6/docs/resources/eri_router_to_uno_connection_v1 fic_eri_router_to_uno_connection_v1} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EriRouterToUnoConnectionV1Config
  */
  public constructor(scope: Construct, id: string, config: EriRouterToUnoConnectionV1Config) {
    super(scope, id, {
      terraformResourceType: 'fic_eri_router_to_uno_connection_v1',
      terraformGeneratorMetadata: {
        providerName: 'fic',
        providerVersion: '0.5.6',
        providerVersionConstraint: '0.5.6'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._bandwidth = config.bandwidth;
    this._connectedNetworkAddress = config.connectedNetworkAddress;
    this._destinationCNumber = config.destinationCNumber;
    this._destinationInterconnect = config.destinationInterconnect;
    this._destinationParentContractNumber = config.destinationParentContractNumber;
    this._destinationQosType = config.destinationQosType;
    this._destinationRouteFilterOut = config.destinationRouteFilterOut;
    this._destinationVpnNumber = config.destinationVpnNumber;
    this._id = config.id;
    this._name = config.name;
    this._sourceGroupName = config.sourceGroupName;
    this._sourceRouteFilterIn = config.sourceRouteFilterIn;
    this._sourceRouteFilterOut = config.sourceRouteFilterOut;
    this._sourceRouterId = config.sourceRouterId;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // area - computed: true, optional: false, required: false
  public get area() {
    return this.getStringAttribute('area');
  }

  // bandwidth - computed: false, optional: false, required: true
  private _bandwidth?: string; 
  public get bandwidth() {
    return this.getStringAttribute('bandwidth');
  }
  public set bandwidth(value: string) {
    this._bandwidth = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bandwidthInput() {
    return this._bandwidth;
  }

  // connected_network_address - computed: false, optional: false, required: true
  private _connectedNetworkAddress?: string; 
  public get connectedNetworkAddress() {
    return this.getStringAttribute('connected_network_address');
  }
  public set connectedNetworkAddress(value: string) {
    this._connectedNetworkAddress = value;
  }
  // Temporarily expose input value. Use with caution.
  public get connectedNetworkAddressInput() {
    return this._connectedNetworkAddress;
  }

  // destination_c_number - computed: false, optional: true, required: false
  private _destinationCNumber?: string; 
  public get destinationCNumber() {
    return this.getStringAttribute('destination_c_number');
  }
  public set destinationCNumber(value: string) {
    this._destinationCNumber = value;
  }
  public resetDestinationCNumber() {
    this._destinationCNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationCNumberInput() {
    return this._destinationCNumber;
  }

  // destination_contract_number - computed: true, optional: false, required: false
  public get destinationContractNumber() {
    return this.getStringAttribute('destination_contract_number');
  }

  // destination_interconnect - computed: false, optional: false, required: true
  private _destinationInterconnect?: string; 
  public get destinationInterconnect() {
    return this.getStringAttribute('destination_interconnect');
  }
  public set destinationInterconnect(value: string) {
    this._destinationInterconnect = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationInterconnectInput() {
    return this._destinationInterconnect;
  }

  // destination_parent_contract_number - computed: false, optional: false, required: true
  private _destinationParentContractNumber?: string; 
  public get destinationParentContractNumber() {
    return this.getStringAttribute('destination_parent_contract_number');
  }
  public set destinationParentContractNumber(value: string) {
    this._destinationParentContractNumber = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationParentContractNumberInput() {
    return this._destinationParentContractNumber;
  }

  // destination_qos_type - computed: false, optional: false, required: true
  private _destinationQosType?: string; 
  public get destinationQosType() {
    return this.getStringAttribute('destination_qos_type');
  }
  public set destinationQosType(value: string) {
    this._destinationQosType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationQosTypeInput() {
    return this._destinationQosType;
  }

  // destination_route_filter_out - computed: false, optional: false, required: true
  private _destinationRouteFilterOut?: string; 
  public get destinationRouteFilterOut() {
    return this.getStringAttribute('destination_route_filter_out');
  }
  public set destinationRouteFilterOut(value: string) {
    this._destinationRouteFilterOut = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationRouteFilterOutInput() {
    return this._destinationRouteFilterOut;
  }

  // destination_vpn_number - computed: false, optional: false, required: true
  private _destinationVpnNumber?: string; 
  public get destinationVpnNumber() {
    return this.getStringAttribute('destination_vpn_number');
  }
  public set destinationVpnNumber(value: string) {
    this._destinationVpnNumber = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationVpnNumberInput() {
    return this._destinationVpnNumber;
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

  // redundant - computed: true, optional: false, required: false
  public get redundant() {
    return this.getBooleanAttribute('redundant');
  }

  // source_group_name - computed: false, optional: false, required: true
  private _sourceGroupName?: string; 
  public get sourceGroupName() {
    return this.getStringAttribute('source_group_name');
  }
  public set sourceGroupName(value: string) {
    this._sourceGroupName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceGroupNameInput() {
    return this._sourceGroupName;
  }

  // source_route_filter_in - computed: false, optional: false, required: true
  private _sourceRouteFilterIn?: string; 
  public get sourceRouteFilterIn() {
    return this.getStringAttribute('source_route_filter_in');
  }
  public set sourceRouteFilterIn(value: string) {
    this._sourceRouteFilterIn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceRouteFilterInInput() {
    return this._sourceRouteFilterIn;
  }

  // source_route_filter_out - computed: false, optional: false, required: true
  private _sourceRouteFilterOut?: string; 
  public get sourceRouteFilterOut() {
    return this.getStringAttribute('source_route_filter_out');
  }
  public set sourceRouteFilterOut(value: string) {
    this._sourceRouteFilterOut = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceRouteFilterOutInput() {
    return this._sourceRouteFilterOut;
  }

  // source_router_id - computed: false, optional: false, required: true
  private _sourceRouterId?: string; 
  public get sourceRouterId() {
    return this.getStringAttribute('source_router_id');
  }
  public set sourceRouterId(value: string) {
    this._sourceRouterId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceRouterIdInput() {
    return this._sourceRouterId;
  }

  // tenant_id - computed: true, optional: false, required: false
  public get tenantId() {
    return this.getStringAttribute('tenant_id');
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new EriRouterToUnoConnectionV1TimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: EriRouterToUnoConnectionV1Timeouts) {
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
      bandwidth: cdktf.stringToTerraform(this._bandwidth),
      connected_network_address: cdktf.stringToTerraform(this._connectedNetworkAddress),
      destination_c_number: cdktf.stringToTerraform(this._destinationCNumber),
      destination_interconnect: cdktf.stringToTerraform(this._destinationInterconnect),
      destination_parent_contract_number: cdktf.stringToTerraform(this._destinationParentContractNumber),
      destination_qos_type: cdktf.stringToTerraform(this._destinationQosType),
      destination_route_filter_out: cdktf.stringToTerraform(this._destinationRouteFilterOut),
      destination_vpn_number: cdktf.stringToTerraform(this._destinationVpnNumber),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      source_group_name: cdktf.stringToTerraform(this._sourceGroupName),
      source_route_filter_in: cdktf.stringToTerraform(this._sourceRouteFilterIn),
      source_route_filter_out: cdktf.stringToTerraform(this._sourceRouteFilterOut),
      source_router_id: cdktf.stringToTerraform(this._sourceRouterId),
      timeouts: eriRouterToUnoConnectionV1TimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      bandwidth: {
        value: cdktf.stringToHclTerraform(this._bandwidth),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      connected_network_address: {
        value: cdktf.stringToHclTerraform(this._connectedNetworkAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      destination_c_number: {
        value: cdktf.stringToHclTerraform(this._destinationCNumber),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      destination_interconnect: {
        value: cdktf.stringToHclTerraform(this._destinationInterconnect),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      destination_parent_contract_number: {
        value: cdktf.stringToHclTerraform(this._destinationParentContractNumber),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      destination_qos_type: {
        value: cdktf.stringToHclTerraform(this._destinationQosType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      destination_route_filter_out: {
        value: cdktf.stringToHclTerraform(this._destinationRouteFilterOut),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      destination_vpn_number: {
        value: cdktf.stringToHclTerraform(this._destinationVpnNumber),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source_group_name: {
        value: cdktf.stringToHclTerraform(this._sourceGroupName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source_route_filter_in: {
        value: cdktf.stringToHclTerraform(this._sourceRouteFilterIn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source_route_filter_out: {
        value: cdktf.stringToHclTerraform(this._sourceRouteFilterOut),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source_router_id: {
        value: cdktf.stringToHclTerraform(this._sourceRouterId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: eriRouterToUnoConnectionV1TimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "EriRouterToUnoConnectionV1Timeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
