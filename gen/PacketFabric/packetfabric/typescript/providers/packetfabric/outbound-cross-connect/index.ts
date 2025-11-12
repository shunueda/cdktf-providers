// https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/outbound_cross_connect
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OutboundCrossConnectConfig extends cdktf.TerraformMetaArguments {
  /**
  * Display ID for the outbound cross connect.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/outbound_cross_connect#data_center_cross_connect_id OutboundCrossConnect#data_center_cross_connect_id}
  */
  readonly dataCenterCrossConnectId?: string;
  /**
  * PacketFabric outbound cross connect description.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/outbound_cross_connect#description OutboundCrossConnect#description}
  */
  readonly description: string;
  /**
  * Z-side circuit id for the far side of the cross connect.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/outbound_cross_connect#destination_circuit_id OutboundCrossConnect#destination_circuit_id}
  */
  readonly destinationCircuitId?: string;
  /**
  * Z-side company name for the far side of the cross connect.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/outbound_cross_connect#destination_name OutboundCrossConnect#destination_name}
  */
  readonly destinationName?: string;
  /**
  * Document UUID for the LOA. When you order a cross connect, you must provide an LOA/CFA authorizing PacketFabric access to your equipment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/outbound_cross_connect#document_uuid OutboundCrossConnect#document_uuid}
  */
  readonly documentUuid: string;
  /**
  * Z-side fiber module info.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/outbound_cross_connect#module OutboundCrossConnect#module}
  */
  readonly module?: string;
  /**
  * Z-side fiber panel info.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/outbound_cross_connect#panel OutboundCrossConnect#panel}
  */
  readonly panel?: string;
  /**
  * The circuit ID of the PacketFabric port to which your are building the cross connect. This starts with "PF-AP-".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/outbound_cross_connect#port OutboundCrossConnect#port}
  */
  readonly port: string;
  /**
  * Z-side fiber position info.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/outbound_cross_connect#position OutboundCrossConnect#position}
  */
  readonly position?: string;
  /**
  * UUID of the published quote line with which this cross connect should be associated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/outbound_cross_connect#published_quote_line_uuid OutboundCrossConnect#published_quote_line_uuid}
  */
  readonly publishedQuoteLineUuid?: string;
  /**
  * The site code for the port location.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/outbound_cross_connect#site OutboundCrossConnect#site}
  */
  readonly site: string;
  /**
  * The user description used for update.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/outbound_cross_connect#user_description OutboundCrossConnect#user_description}
  */
  readonly userDescription?: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/outbound_cross_connect#timeouts OutboundCrossConnect#timeouts}
  */
  readonly timeouts?: OutboundCrossConnectTimeouts;
}
export interface OutboundCrossConnectTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/outbound_cross_connect#create OutboundCrossConnect#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/outbound_cross_connect#delete OutboundCrossConnect#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/outbound_cross_connect#read OutboundCrossConnect#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/outbound_cross_connect#update OutboundCrossConnect#update}
  */
  readonly update?: string;
}

export function outboundCrossConnectTimeoutsToTerraform(struct?: OutboundCrossConnectTimeouts | cdktf.IResolvable): any {
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


export function outboundCrossConnectTimeoutsToHclTerraform(struct?: OutboundCrossConnectTimeouts | cdktf.IResolvable): any {
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

export class OutboundCrossConnectTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): OutboundCrossConnectTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: OutboundCrossConnectTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/outbound_cross_connect packetfabric_outbound_cross_connect}
*/
export class OutboundCrossConnect extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "packetfabric_outbound_cross_connect";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a OutboundCrossConnect resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the OutboundCrossConnect to import
  * @param importFromId The id of the existing OutboundCrossConnect that should be imported. Refer to the {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/outbound_cross_connect#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the OutboundCrossConnect to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "packetfabric_outbound_cross_connect", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/outbound_cross_connect packetfabric_outbound_cross_connect} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OutboundCrossConnectConfig
  */
  public constructor(scope: Construct, id: string, config: OutboundCrossConnectConfig) {
    super(scope, id, {
      terraformResourceType: 'packetfabric_outbound_cross_connect',
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
    this._dataCenterCrossConnectId = config.dataCenterCrossConnectId;
    this._description = config.description;
    this._destinationCircuitId = config.destinationCircuitId;
    this._destinationName = config.destinationName;
    this._documentUuid = config.documentUuid;
    this._module = config.module;
    this._panel = config.panel;
    this._port = config.port;
    this._position = config.position;
    this._publishedQuoteLineUuid = config.publishedQuoteLineUuid;
    this._site = config.site;
    this._userDescription = config.userDescription;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // data_center_cross_connect_id - computed: false, optional: true, required: false
  private _dataCenterCrossConnectId?: string; 
  public get dataCenterCrossConnectId() {
    return this.getStringAttribute('data_center_cross_connect_id');
  }
  public set dataCenterCrossConnectId(value: string) {
    this._dataCenterCrossConnectId = value;
  }
  public resetDataCenterCrossConnectId() {
    this._dataCenterCrossConnectId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataCenterCrossConnectIdInput() {
    return this._dataCenterCrossConnectId;
  }

  // deleted - computed: true, optional: false, required: false
  public get deleted() {
    return this.getBooleanAttribute('deleted');
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

  // destination_circuit_id - computed: false, optional: true, required: false
  private _destinationCircuitId?: string; 
  public get destinationCircuitId() {
    return this.getStringAttribute('destination_circuit_id');
  }
  public set destinationCircuitId(value: string) {
    this._destinationCircuitId = value;
  }
  public resetDestinationCircuitId() {
    this._destinationCircuitId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationCircuitIdInput() {
    return this._destinationCircuitId;
  }

  // destination_name - computed: false, optional: true, required: false
  private _destinationName?: string; 
  public get destinationName() {
    return this.getStringAttribute('destination_name');
  }
  public set destinationName(value: string) {
    this._destinationName = value;
  }
  public resetDestinationName() {
    this._destinationName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationNameInput() {
    return this._destinationName;
  }

  // document_uuid - computed: false, optional: false, required: true
  private _documentUuid?: string; 
  public get documentUuid() {
    return this.getStringAttribute('document_uuid');
  }
  public set documentUuid(value: string) {
    this._documentUuid = value;
  }
  // Temporarily expose input value. Use with caution.
  public get documentUuidInput() {
    return this._documentUuid;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // module - computed: false, optional: true, required: false
  private _module?: string; 
  public get module() {
    return this.getStringAttribute('module');
  }
  public set module(value: string) {
    this._module = value;
  }
  public resetModule() {
    this._module = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get moduleInput() {
    return this._module;
  }

  // obcc_status - computed: true, optional: false, required: false
  public get obccStatus() {
    return this.getStringAttribute('obcc_status');
  }

  // outbound_cross_connect_id - computed: true, optional: false, required: false
  public get outboundCrossConnectId() {
    return this.getStringAttribute('outbound_cross_connect_id');
  }

  // panel - computed: false, optional: true, required: false
  private _panel?: string; 
  public get panel() {
    return this.getStringAttribute('panel');
  }
  public set panel(value: string) {
    this._panel = value;
  }
  public resetPanel() {
    this._panel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get panelInput() {
    return this._panel;
  }

  // port - computed: false, optional: false, required: true
  private _port?: string; 
  public get port() {
    return this.getStringAttribute('port');
  }
  public set port(value: string) {
    this._port = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // position - computed: false, optional: true, required: false
  private _position?: string; 
  public get position() {
    return this.getStringAttribute('position');
  }
  public set position(value: string) {
    this._position = value;
  }
  public resetPosition() {
    this._position = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get positionInput() {
    return this._position;
  }

  // progress - computed: true, optional: false, required: false
  public get progress() {
    return this.getNumberAttribute('progress');
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

  // site - computed: false, optional: false, required: true
  private _site?: string; 
  public get site() {
    return this.getStringAttribute('site');
  }
  public set site(value: string) {
    this._site = value;
  }
  // Temporarily expose input value. Use with caution.
  public get siteInput() {
    return this._site;
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // time_updated - computed: true, optional: false, required: false
  public get timeUpdated() {
    return this.getStringAttribute('time_updated');
  }

  // user_description - computed: false, optional: true, required: false
  private _userDescription?: string; 
  public get userDescription() {
    return this.getStringAttribute('user_description');
  }
  public set userDescription(value: string) {
    this._userDescription = value;
  }
  public resetUserDescription() {
    this._userDescription = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userDescriptionInput() {
    return this._userDescription;
  }

  // z_loc_cfa - computed: true, optional: false, required: false
  public get zLocCfa() {
    return this.getStringAttribute('z_loc_cfa');
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new OutboundCrossConnectTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: OutboundCrossConnectTimeouts) {
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
      data_center_cross_connect_id: cdktf.stringToTerraform(this._dataCenterCrossConnectId),
      description: cdktf.stringToTerraform(this._description),
      destination_circuit_id: cdktf.stringToTerraform(this._destinationCircuitId),
      destination_name: cdktf.stringToTerraform(this._destinationName),
      document_uuid: cdktf.stringToTerraform(this._documentUuid),
      module: cdktf.stringToTerraform(this._module),
      panel: cdktf.stringToTerraform(this._panel),
      port: cdktf.stringToTerraform(this._port),
      position: cdktf.stringToTerraform(this._position),
      published_quote_line_uuid: cdktf.stringToTerraform(this._publishedQuoteLineUuid),
      site: cdktf.stringToTerraform(this._site),
      user_description: cdktf.stringToTerraform(this._userDescription),
      timeouts: outboundCrossConnectTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      data_center_cross_connect_id: {
        value: cdktf.stringToHclTerraform(this._dataCenterCrossConnectId),
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
      destination_circuit_id: {
        value: cdktf.stringToHclTerraform(this._destinationCircuitId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      destination_name: {
        value: cdktf.stringToHclTerraform(this._destinationName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      document_uuid: {
        value: cdktf.stringToHclTerraform(this._documentUuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      module: {
        value: cdktf.stringToHclTerraform(this._module),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      panel: {
        value: cdktf.stringToHclTerraform(this._panel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      port: {
        value: cdktf.stringToHclTerraform(this._port),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      position: {
        value: cdktf.stringToHclTerraform(this._position),
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
      site: {
        value: cdktf.stringToHclTerraform(this._site),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_description: {
        value: cdktf.stringToHclTerraform(this._userDescription),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: outboundCrossConnectTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "OutboundCrossConnectTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
