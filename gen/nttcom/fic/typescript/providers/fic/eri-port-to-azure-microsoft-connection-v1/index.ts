// https://registry.terraform.io/providers/nttcom/fic/0.5.6/docs/resources/eri_port_to_azure_microsoft_connection_v1
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface EriPortToAzureMicrosoftConnectionV1Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/fic/0.5.6/docs/resources/eri_port_to_azure_microsoft_connection_v1#bandwidth EriPortToAzureMicrosoftConnectionV1#bandwidth}
  */
  readonly bandwidth: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/fic/0.5.6/docs/resources/eri_port_to_azure_microsoft_connection_v1#destination_advertised_public_prefixes EriPortToAzureMicrosoftConnectionV1#destination_advertised_public_prefixes}
  */
  readonly destinationAdvertisedPublicPrefixes: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/fic/0.5.6/docs/resources/eri_port_to_azure_microsoft_connection_v1#destination_interconnect EriPortToAzureMicrosoftConnectionV1#destination_interconnect}
  */
  readonly destinationInterconnect: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/fic/0.5.6/docs/resources/eri_port_to_azure_microsoft_connection_v1#destination_qos_type EriPortToAzureMicrosoftConnectionV1#destination_qos_type}
  */
  readonly destinationQosType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/fic/0.5.6/docs/resources/eri_port_to_azure_microsoft_connection_v1#destination_routing_registry_name EriPortToAzureMicrosoftConnectionV1#destination_routing_registry_name}
  */
  readonly destinationRoutingRegistryName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/fic/0.5.6/docs/resources/eri_port_to_azure_microsoft_connection_v1#destination_service_key EriPortToAzureMicrosoftConnectionV1#destination_service_key}
  */
  readonly destinationServiceKey: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/fic/0.5.6/docs/resources/eri_port_to_azure_microsoft_connection_v1#destination_shared_key EriPortToAzureMicrosoftConnectionV1#destination_shared_key}
  */
  readonly destinationSharedKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/fic/0.5.6/docs/resources/eri_port_to_azure_microsoft_connection_v1#id EriPortToAzureMicrosoftConnectionV1#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/fic/0.5.6/docs/resources/eri_port_to_azure_microsoft_connection_v1#name EriPortToAzureMicrosoftConnectionV1#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/fic/0.5.6/docs/resources/eri_port_to_azure_microsoft_connection_v1#primary_connected_network_address EriPortToAzureMicrosoftConnectionV1#primary_connected_network_address}
  */
  readonly primaryConnectedNetworkAddress: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/fic/0.5.6/docs/resources/eri_port_to_azure_microsoft_connection_v1#secondary_connected_network_address EriPortToAzureMicrosoftConnectionV1#secondary_connected_network_address}
  */
  readonly secondaryConnectedNetworkAddress: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/fic/0.5.6/docs/resources/eri_port_to_azure_microsoft_connection_v1#source_asn EriPortToAzureMicrosoftConnectionV1#source_asn}
  */
  readonly sourceAsn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/fic/0.5.6/docs/resources/eri_port_to_azure_microsoft_connection_v1#source_primary_port_id EriPortToAzureMicrosoftConnectionV1#source_primary_port_id}
  */
  readonly sourcePrimaryPortId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/fic/0.5.6/docs/resources/eri_port_to_azure_microsoft_connection_v1#source_primary_vlan EriPortToAzureMicrosoftConnectionV1#source_primary_vlan}
  */
  readonly sourcePrimaryVlan: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/fic/0.5.6/docs/resources/eri_port_to_azure_microsoft_connection_v1#source_secondary_port_id EriPortToAzureMicrosoftConnectionV1#source_secondary_port_id}
  */
  readonly sourceSecondaryPortId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/fic/0.5.6/docs/resources/eri_port_to_azure_microsoft_connection_v1#source_secondary_vlan EriPortToAzureMicrosoftConnectionV1#source_secondary_vlan}
  */
  readonly sourceSecondaryVlan: number;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/fic/0.5.6/docs/resources/eri_port_to_azure_microsoft_connection_v1#timeouts EriPortToAzureMicrosoftConnectionV1#timeouts}
  */
  readonly timeouts?: EriPortToAzureMicrosoftConnectionV1Timeouts;
}
export interface EriPortToAzureMicrosoftConnectionV1Timeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/fic/0.5.6/docs/resources/eri_port_to_azure_microsoft_connection_v1#create EriPortToAzureMicrosoftConnectionV1#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/fic/0.5.6/docs/resources/eri_port_to_azure_microsoft_connection_v1#delete EriPortToAzureMicrosoftConnectionV1#delete}
  */
  readonly delete?: string;
}

export function eriPortToAzureMicrosoftConnectionV1TimeoutsToTerraform(struct?: EriPortToAzureMicrosoftConnectionV1Timeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
  }
}


export function eriPortToAzureMicrosoftConnectionV1TimeoutsToHclTerraform(struct?: EriPortToAzureMicrosoftConnectionV1Timeouts | cdktf.IResolvable): any {
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

export class EriPortToAzureMicrosoftConnectionV1TimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): EriPortToAzureMicrosoftConnectionV1Timeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: EriPortToAzureMicrosoftConnectionV1Timeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/nttcom/fic/0.5.6/docs/resources/eri_port_to_azure_microsoft_connection_v1 fic_eri_port_to_azure_microsoft_connection_v1}
*/
export class EriPortToAzureMicrosoftConnectionV1 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fic_eri_port_to_azure_microsoft_connection_v1";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a EriPortToAzureMicrosoftConnectionV1 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the EriPortToAzureMicrosoftConnectionV1 to import
  * @param importFromId The id of the existing EriPortToAzureMicrosoftConnectionV1 that should be imported. Refer to the {@link https://registry.terraform.io/providers/nttcom/fic/0.5.6/docs/resources/eri_port_to_azure_microsoft_connection_v1#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the EriPortToAzureMicrosoftConnectionV1 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fic_eri_port_to_azure_microsoft_connection_v1", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/nttcom/fic/0.5.6/docs/resources/eri_port_to_azure_microsoft_connection_v1 fic_eri_port_to_azure_microsoft_connection_v1} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EriPortToAzureMicrosoftConnectionV1Config
  */
  public constructor(scope: Construct, id: string, config: EriPortToAzureMicrosoftConnectionV1Config) {
    super(scope, id, {
      terraformResourceType: 'fic_eri_port_to_azure_microsoft_connection_v1',
      terraformGeneratorMetadata: {
        providerName: 'fic',
        providerVersion: '0.5.6'
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
    this._destinationAdvertisedPublicPrefixes = config.destinationAdvertisedPublicPrefixes;
    this._destinationInterconnect = config.destinationInterconnect;
    this._destinationQosType = config.destinationQosType;
    this._destinationRoutingRegistryName = config.destinationRoutingRegistryName;
    this._destinationServiceKey = config.destinationServiceKey;
    this._destinationSharedKey = config.destinationSharedKey;
    this._id = config.id;
    this._name = config.name;
    this._primaryConnectedNetworkAddress = config.primaryConnectedNetworkAddress;
    this._secondaryConnectedNetworkAddress = config.secondaryConnectedNetworkAddress;
    this._sourceAsn = config.sourceAsn;
    this._sourcePrimaryPortId = config.sourcePrimaryPortId;
    this._sourcePrimaryVlan = config.sourcePrimaryVlan;
    this._sourceSecondaryPortId = config.sourceSecondaryPortId;
    this._sourceSecondaryVlan = config.sourceSecondaryVlan;
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

  // destination_advertised_public_prefixes - computed: false, optional: false, required: true
  private _destinationAdvertisedPublicPrefixes?: string[]; 
  public get destinationAdvertisedPublicPrefixes() {
    return this.getListAttribute('destination_advertised_public_prefixes');
  }
  public set destinationAdvertisedPublicPrefixes(value: string[]) {
    this._destinationAdvertisedPublicPrefixes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationAdvertisedPublicPrefixesInput() {
    return this._destinationAdvertisedPublicPrefixes;
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

  // destination_routing_registry_name - computed: false, optional: true, required: false
  private _destinationRoutingRegistryName?: string; 
  public get destinationRoutingRegistryName() {
    return this.getStringAttribute('destination_routing_registry_name');
  }
  public set destinationRoutingRegistryName(value: string) {
    this._destinationRoutingRegistryName = value;
  }
  public resetDestinationRoutingRegistryName() {
    this._destinationRoutingRegistryName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationRoutingRegistryNameInput() {
    return this._destinationRoutingRegistryName;
  }

  // destination_service_key - computed: false, optional: false, required: true
  private _destinationServiceKey?: string; 
  public get destinationServiceKey() {
    return this.getStringAttribute('destination_service_key');
  }
  public set destinationServiceKey(value: string) {
    this._destinationServiceKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationServiceKeyInput() {
    return this._destinationServiceKey;
  }

  // destination_shared_key - computed: false, optional: true, required: false
  private _destinationSharedKey?: string; 
  public get destinationSharedKey() {
    return this.getStringAttribute('destination_shared_key');
  }
  public set destinationSharedKey(value: string) {
    this._destinationSharedKey = value;
  }
  public resetDestinationSharedKey() {
    this._destinationSharedKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationSharedKeyInput() {
    return this._destinationSharedKey;
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

  // operation_id - computed: true, optional: false, required: false
  public get operationId() {
    return this.getStringAttribute('operation_id');
  }

  // operation_status - computed: true, optional: false, required: false
  public get operationStatus() {
    return this.getStringAttribute('operation_status');
  }

  // primary_connected_network_address - computed: false, optional: false, required: true
  private _primaryConnectedNetworkAddress?: string; 
  public get primaryConnectedNetworkAddress() {
    return this.getStringAttribute('primary_connected_network_address');
  }
  public set primaryConnectedNetworkAddress(value: string) {
    this._primaryConnectedNetworkAddress = value;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryConnectedNetworkAddressInput() {
    return this._primaryConnectedNetworkAddress;
  }

  // redundant - computed: true, optional: false, required: false
  public get redundant() {
    return this.getBooleanAttribute('redundant');
  }

  // secondary_connected_network_address - computed: false, optional: false, required: true
  private _secondaryConnectedNetworkAddress?: string; 
  public get secondaryConnectedNetworkAddress() {
    return this.getStringAttribute('secondary_connected_network_address');
  }
  public set secondaryConnectedNetworkAddress(value: string) {
    this._secondaryConnectedNetworkAddress = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secondaryConnectedNetworkAddressInput() {
    return this._secondaryConnectedNetworkAddress;
  }

  // source_asn - computed: false, optional: false, required: true
  private _sourceAsn?: string; 
  public get sourceAsn() {
    return this.getStringAttribute('source_asn');
  }
  public set sourceAsn(value: string) {
    this._sourceAsn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceAsnInput() {
    return this._sourceAsn;
  }

  // source_primary_port_id - computed: false, optional: false, required: true
  private _sourcePrimaryPortId?: string; 
  public get sourcePrimaryPortId() {
    return this.getStringAttribute('source_primary_port_id');
  }
  public set sourcePrimaryPortId(value: string) {
    this._sourcePrimaryPortId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourcePrimaryPortIdInput() {
    return this._sourcePrimaryPortId;
  }

  // source_primary_vlan - computed: false, optional: false, required: true
  private _sourcePrimaryVlan?: number; 
  public get sourcePrimaryVlan() {
    return this.getNumberAttribute('source_primary_vlan');
  }
  public set sourcePrimaryVlan(value: number) {
    this._sourcePrimaryVlan = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourcePrimaryVlanInput() {
    return this._sourcePrimaryVlan;
  }

  // source_secondary_port_id - computed: false, optional: false, required: true
  private _sourceSecondaryPortId?: string; 
  public get sourceSecondaryPortId() {
    return this.getStringAttribute('source_secondary_port_id');
  }
  public set sourceSecondaryPortId(value: string) {
    this._sourceSecondaryPortId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceSecondaryPortIdInput() {
    return this._sourceSecondaryPortId;
  }

  // source_secondary_vlan - computed: false, optional: false, required: true
  private _sourceSecondaryVlan?: number; 
  public get sourceSecondaryVlan() {
    return this.getNumberAttribute('source_secondary_vlan');
  }
  public set sourceSecondaryVlan(value: number) {
    this._sourceSecondaryVlan = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceSecondaryVlanInput() {
    return this._sourceSecondaryVlan;
  }

  // tenant_id - computed: true, optional: false, required: false
  public get tenantId() {
    return this.getStringAttribute('tenant_id');
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new EriPortToAzureMicrosoftConnectionV1TimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: EriPortToAzureMicrosoftConnectionV1Timeouts) {
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
      destination_advertised_public_prefixes: cdktf.listMapper(cdktf.stringToTerraform, false)(this._destinationAdvertisedPublicPrefixes),
      destination_interconnect: cdktf.stringToTerraform(this._destinationInterconnect),
      destination_qos_type: cdktf.stringToTerraform(this._destinationQosType),
      destination_routing_registry_name: cdktf.stringToTerraform(this._destinationRoutingRegistryName),
      destination_service_key: cdktf.stringToTerraform(this._destinationServiceKey),
      destination_shared_key: cdktf.stringToTerraform(this._destinationSharedKey),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      primary_connected_network_address: cdktf.stringToTerraform(this._primaryConnectedNetworkAddress),
      secondary_connected_network_address: cdktf.stringToTerraform(this._secondaryConnectedNetworkAddress),
      source_asn: cdktf.stringToTerraform(this._sourceAsn),
      source_primary_port_id: cdktf.stringToTerraform(this._sourcePrimaryPortId),
      source_primary_vlan: cdktf.numberToTerraform(this._sourcePrimaryVlan),
      source_secondary_port_id: cdktf.stringToTerraform(this._sourceSecondaryPortId),
      source_secondary_vlan: cdktf.numberToTerraform(this._sourceSecondaryVlan),
      timeouts: eriPortToAzureMicrosoftConnectionV1TimeoutsToTerraform(this._timeouts.internalValue),
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
      destination_advertised_public_prefixes: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._destinationAdvertisedPublicPrefixes),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      destination_interconnect: {
        value: cdktf.stringToHclTerraform(this._destinationInterconnect),
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
      destination_routing_registry_name: {
        value: cdktf.stringToHclTerraform(this._destinationRoutingRegistryName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      destination_service_key: {
        value: cdktf.stringToHclTerraform(this._destinationServiceKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      destination_shared_key: {
        value: cdktf.stringToHclTerraform(this._destinationSharedKey),
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
      primary_connected_network_address: {
        value: cdktf.stringToHclTerraform(this._primaryConnectedNetworkAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      secondary_connected_network_address: {
        value: cdktf.stringToHclTerraform(this._secondaryConnectedNetworkAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source_asn: {
        value: cdktf.stringToHclTerraform(this._sourceAsn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source_primary_port_id: {
        value: cdktf.stringToHclTerraform(this._sourcePrimaryPortId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source_primary_vlan: {
        value: cdktf.numberToHclTerraform(this._sourcePrimaryVlan),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      source_secondary_port_id: {
        value: cdktf.stringToHclTerraform(this._sourceSecondaryPortId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source_secondary_vlan: {
        value: cdktf.numberToHclTerraform(this._sourceSecondaryVlan),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      timeouts: {
        value: eriPortToAzureMicrosoftConnectionV1TimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "EriPortToAzureMicrosoftConnectionV1Timeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
