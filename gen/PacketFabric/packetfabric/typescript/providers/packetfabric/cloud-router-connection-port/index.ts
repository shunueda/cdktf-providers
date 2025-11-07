// https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/cloud_router_connection_port
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CloudRouterConnectionPortConfig extends cdktf.TerraformMetaArguments {
  /**
  * The UUID for the billing account that should be billed. Can also be set with the PF_ACCOUNT_ID environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/cloud_router_connection_port#account_uuid CloudRouterConnectionPort#account_uuid}
  */
  readonly accountUuid: string;
  /**
  * Circuit ID of the target cloud router. This starts with "PF-L3-CUST-".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/cloud_router_connection_port#circuit_id CloudRouterConnectionPort#circuit_id}
  */
  readonly circuitId: string;
  /**
  * A brief description of this connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/cloud_router_connection_port#description CloudRouterConnectionPort#description}
  */
  readonly description: string;
  /**
  * Whether PacketFabric should allocate a public IP address for this connection. Defaults: false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/cloud_router_connection_port#is_public CloudRouterConnectionPort#is_public}
  */
  readonly isPublic?: boolean | cdktf.IResolvable;
  /**
  * Label value linked to an object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/cloud_router_connection_port#labels CloudRouterConnectionPort#labels}
  */
  readonly labels?: string[];
  /**
  * Set this to true if you intend to use DNAT on this connection. Defaults: false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/cloud_router_connection_port#maybe_dnat CloudRouterConnectionPort#maybe_dnat}
  */
  readonly maybeDnat?: boolean | cdktf.IResolvable;
  /**
  * Set this to true if you intend to use NAT on this connection. Defaults: false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/cloud_router_connection_port#maybe_nat CloudRouterConnectionPort#maybe_nat}
  */
  readonly maybeNat?: boolean | cdktf.IResolvable;
  /**
  * Purchase order number or identifier of a service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/cloud_router_connection_port#po_number CloudRouterConnectionPort#po_number}
  */
  readonly poNumber?: string;
  /**
  * The circuit ID of the port to connect to the cloud router. This starts with "PF-AP-".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/cloud_router_connection_port#port_circuit_id CloudRouterConnectionPort#port_circuit_id}
  */
  readonly portCircuitId: string;
  /**
  * UUID of the published quote line with which this connection should be associated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/cloud_router_connection_port#published_quote_line_uuid CloudRouterConnectionPort#published_quote_line_uuid}
  */
  readonly publishedQuoteLineUuid?: string;
  /**
  * The speed of the new connection.
  * 
  * 	Enum: ["50Mbps" "100Mbps" "200Mbps" "300Mbps" "400Mbps" "500Mbps" "1Gbps" "2Gbps" "5Gbps" "10Gbps"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/cloud_router_connection_port#speed CloudRouterConnectionPort#speed}
  */
  readonly speed: string;
  /**
  * Subscription term of the Cloud Router Connection
  * 
  * 	Enum: ["1", "12", "24", "36"] Defaults: 1
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/cloud_router_connection_port#subscription_term CloudRouterConnectionPort#subscription_term}
  */
  readonly subscriptionTerm?: number;
  /**
  * Whether the interface should be untagged. Do not specify a VLAN if this is to be an untagged connection. Defaults: false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/cloud_router_connection_port#untagged CloudRouterConnectionPort#untagged}
  */
  readonly untagged?: boolean | cdktf.IResolvable;
  /**
  * Valid VLAN range is from 4-4094, inclusive. Defaults: 0
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/cloud_router_connection_port#vlan CloudRouterConnectionPort#vlan}
  */
  readonly vlan?: number;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/cloud_router_connection_port#timeouts CloudRouterConnectionPort#timeouts}
  */
  readonly timeouts?: CloudRouterConnectionPortTimeouts;
}
export interface CloudRouterConnectionPortTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/cloud_router_connection_port#create CloudRouterConnectionPort#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/cloud_router_connection_port#delete CloudRouterConnectionPort#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/cloud_router_connection_port#read CloudRouterConnectionPort#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/cloud_router_connection_port#update CloudRouterConnectionPort#update}
  */
  readonly update?: string;
}

export function cloudRouterConnectionPortTimeoutsToTerraform(struct?: CloudRouterConnectionPortTimeouts | cdktf.IResolvable): any {
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


export function cloudRouterConnectionPortTimeoutsToHclTerraform(struct?: CloudRouterConnectionPortTimeouts | cdktf.IResolvable): any {
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

export class CloudRouterConnectionPortTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CloudRouterConnectionPortTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: CloudRouterConnectionPortTimeouts | cdktf.IResolvable | undefined) {
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

/**
* Represents a {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/cloud_router_connection_port packetfabric_cloud_router_connection_port}
*/
export class CloudRouterConnectionPort extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "packetfabric_cloud_router_connection_port";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CloudRouterConnectionPort resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CloudRouterConnectionPort to import
  * @param importFromId The id of the existing CloudRouterConnectionPort that should be imported. Refer to the {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/cloud_router_connection_port#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CloudRouterConnectionPort to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "packetfabric_cloud_router_connection_port", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/cloud_router_connection_port packetfabric_cloud_router_connection_port} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CloudRouterConnectionPortConfig
  */
  public constructor(scope: Construct, id: string, config: CloudRouterConnectionPortConfig) {
    super(scope, id, {
      terraformResourceType: 'packetfabric_cloud_router_connection_port',
      terraformGeneratorMetadata: {
        providerName: 'packetfabric',
        providerVersion: '1.9.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accountUuid = config.accountUuid;
    this._circuitId = config.circuitId;
    this._description = config.description;
    this._isPublic = config.isPublic;
    this._labels = config.labels;
    this._maybeDnat = config.maybeDnat;
    this._maybeNat = config.maybeNat;
    this._poNumber = config.poNumber;
    this._portCircuitId = config.portCircuitId;
    this._publishedQuoteLineUuid = config.publishedQuoteLineUuid;
    this._speed = config.speed;
    this._subscriptionTerm = config.subscriptionTerm;
    this._untagged = config.untagged;
    this._vlan = config.vlan;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_uuid - computed: false, optional: false, required: true
  private _accountUuid?: string; 
  public get accountUuid() {
    return this.getStringAttribute('account_uuid');
  }
  public set accountUuid(value: string) {
    this._accountUuid = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accountUuidInput() {
    return this._accountUuid;
  }

  // circuit_id - computed: false, optional: false, required: true
  private _circuitId?: string; 
  public get circuitId() {
    return this.getStringAttribute('circuit_id');
  }
  public set circuitId(value: string) {
    this._circuitId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get circuitIdInput() {
    return this._circuitId;
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

  // etl - computed: true, optional: false, required: false
  public get etl() {
    return this.getNumberAttribute('etl');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // is_public - computed: false, optional: true, required: false
  private _isPublic?: boolean | cdktf.IResolvable; 
  public get isPublic() {
    return this.getBooleanAttribute('is_public');
  }
  public set isPublic(value: boolean | cdktf.IResolvable) {
    this._isPublic = value;
  }
  public resetIsPublic() {
    this._isPublic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isPublicInput() {
    return this._isPublic;
  }

  // labels - computed: false, optional: true, required: false
  private _labels?: string[]; 
  public get labels() {
    return cdktf.Fn.tolist(this.getListAttribute('labels'));
  }
  public set labels(value: string[]) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels;
  }

  // maybe_dnat - computed: false, optional: true, required: false
  private _maybeDnat?: boolean | cdktf.IResolvable; 
  public get maybeDnat() {
    return this.getBooleanAttribute('maybe_dnat');
  }
  public set maybeDnat(value: boolean | cdktf.IResolvable) {
    this._maybeDnat = value;
  }
  public resetMaybeDnat() {
    this._maybeDnat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maybeDnatInput() {
    return this._maybeDnat;
  }

  // maybe_nat - computed: false, optional: true, required: false
  private _maybeNat?: boolean | cdktf.IResolvable; 
  public get maybeNat() {
    return this.getBooleanAttribute('maybe_nat');
  }
  public set maybeNat(value: boolean | cdktf.IResolvable) {
    this._maybeNat = value;
  }
  public resetMaybeNat() {
    this._maybeNat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maybeNatInput() {
    return this._maybeNat;
  }

  // po_number - computed: false, optional: true, required: false
  private _poNumber?: string; 
  public get poNumber() {
    return this.getStringAttribute('po_number');
  }
  public set poNumber(value: string) {
    this._poNumber = value;
  }
  public resetPoNumber() {
    this._poNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get poNumberInput() {
    return this._poNumber;
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

  // published_quote_line_uuid - computed: false, optional: true, required: false
  private _publishedQuoteLineUuid?: string; 
  public get publishedQuoteLineUuid() {
    return this.getStringAttribute('published_quote_line_uuid');
  }
  public set publishedQuoteLineUuid(value: string) {
    this._publishedQuoteLineUuid = value;
  }
  public resetPublishedQuoteLineUuid() {
    this._publishedQuoteLineUuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publishedQuoteLineUuidInput() {
    return this._publishedQuoteLineUuid;
  }

  // speed - computed: false, optional: false, required: true
  private _speed?: string; 
  public get speed() {
    return this.getStringAttribute('speed');
  }
  public set speed(value: string) {
    this._speed = value;
  }
  // Temporarily expose input value. Use with caution.
  public get speedInput() {
    return this._speed;
  }

  // subscription_term - computed: false, optional: true, required: false
  private _subscriptionTerm?: number; 
  public get subscriptionTerm() {
    return this.getNumberAttribute('subscription_term');
  }
  public set subscriptionTerm(value: number) {
    this._subscriptionTerm = value;
  }
  public resetSubscriptionTerm() {
    this._subscriptionTerm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subscriptionTermInput() {
    return this._subscriptionTerm;
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

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new CloudRouterConnectionPortTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: CloudRouterConnectionPortTimeouts) {
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
      account_uuid: cdktf.stringToTerraform(this._accountUuid),
      circuit_id: cdktf.stringToTerraform(this._circuitId),
      description: cdktf.stringToTerraform(this._description),
      is_public: cdktf.booleanToTerraform(this._isPublic),
      labels: cdktf.listMapper(cdktf.stringToTerraform, false)(this._labels),
      maybe_dnat: cdktf.booleanToTerraform(this._maybeDnat),
      maybe_nat: cdktf.booleanToTerraform(this._maybeNat),
      po_number: cdktf.stringToTerraform(this._poNumber),
      port_circuit_id: cdktf.stringToTerraform(this._portCircuitId),
      published_quote_line_uuid: cdktf.stringToTerraform(this._publishedQuoteLineUuid),
      speed: cdktf.stringToTerraform(this._speed),
      subscription_term: cdktf.numberToTerraform(this._subscriptionTerm),
      untagged: cdktf.booleanToTerraform(this._untagged),
      vlan: cdktf.numberToTerraform(this._vlan),
      timeouts: cloudRouterConnectionPortTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      account_uuid: {
        value: cdktf.stringToHclTerraform(this._accountUuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      circuit_id: {
        value: cdktf.stringToHclTerraform(this._circuitId),
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
      is_public: {
        value: cdktf.booleanToHclTerraform(this._isPublic),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      labels: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._labels),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      maybe_dnat: {
        value: cdktf.booleanToHclTerraform(this._maybeDnat),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      maybe_nat: {
        value: cdktf.booleanToHclTerraform(this._maybeNat),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      po_number: {
        value: cdktf.stringToHclTerraform(this._poNumber),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      port_circuit_id: {
        value: cdktf.stringToHclTerraform(this._portCircuitId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      published_quote_line_uuid: {
        value: cdktf.stringToHclTerraform(this._publishedQuoteLineUuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      speed: {
        value: cdktf.stringToHclTerraform(this._speed),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      subscription_term: {
        value: cdktf.numberToHclTerraform(this._subscriptionTerm),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      untagged: {
        value: cdktf.booleanToHclTerraform(this._untagged),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      vlan: {
        value: cdktf.numberToHclTerraform(this._vlan),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      timeouts: {
        value: cloudRouterConnectionPortTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "CloudRouterConnectionPortTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
