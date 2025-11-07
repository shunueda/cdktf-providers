// https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/point_to_point
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PointToPointConfig extends cdktf.TerraformMetaArguments {
  /**
  * The UUID for the billing account that should be billed. Can also be set with the PF_ACCOUNT_ID environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/point_to_point#account_uuid PointToPoint#account_uuid}
  */
  readonly accountUuid: string;
  /**
  * A brief description of this connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/point_to_point#description PointToPoint#description}
  */
  readonly description: string;
  /**
  * Label value linked to an object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/point_to_point#labels PointToPoint#labels}
  */
  readonly labels?: string[];
  /**
  * Optic media type.
  * 
  * 	Enum: ["LX" "EX" "ZX" "LR" "ER" "ER DWDM" "ZR" "ZR DWDM" "LR4" "ER4" "CWDM4" "LR4" "ER4 Lite"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/point_to_point#media PointToPoint#media}
  */
  readonly media: string;
  /**
  * Purchase order number or identifier of a service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/point_to_point#po_number PointToPoint#po_number}
  */
  readonly poNumber?: string;
  /**
  * UUID of the published quote line with which this connection should be associated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/point_to_point#published_quote_line_uuid PointToPoint#published_quote_line_uuid}
  */
  readonly publishedQuoteLineUuid?: string;
  /**
  * The capacity for this connection.
  * 
  * 	Enum: ["1Gbps" "10Gbps" "40Gbps" "100Gbps"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/point_to_point#speed PointToPoint#speed}
  */
  readonly speed: string;
  /**
  * Duration of the subscription in months
  * 
  * 	Enum ["1" "12" "24" "36"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/point_to_point#subscription_term PointToPoint#subscription_term}
  */
  readonly subscriptionTerm: number;
  /**
  * endpoints block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/point_to_point#endpoints PointToPoint#endpoints}
  */
  readonly endpoints: PointToPointEndpoints[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/point_to_point#timeouts PointToPoint#timeouts}
  */
  readonly timeouts?: PointToPointTimeouts;
}
export interface PointToPointEndpoints {
  /**
  * Only applicable to 1Gbps ports. Controls whether auto negotiation is on (true) or off (false). The request will fail if specified with ports greater than 1Gbps.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/point_to_point#autoneg PointToPoint#autoneg}
  */
  readonly autoneg: boolean | cdktf.IResolvable;
  /**
  * Unique site code of the customer's equipment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/point_to_point#customer_site_code PointToPoint#customer_site_code}
  */
  readonly customerSiteCode?: string;
  /**
  * A base64 encoded string of a PDF of a LOA.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/point_to_point#loa PointToPoint#loa}
  */
  readonly loa?: string;
  /**
  * Point of presence in which the port should be located.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/point_to_point#pop PointToPoint#pop}
  */
  readonly pop: string;
  /**
  * The desired availability zone of the port.
  * 
  * 	Example: "A"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/point_to_point#zone PointToPoint#zone}
  */
  readonly zone: string;
}

export function pointToPointEndpointsToTerraform(struct?: PointToPointEndpoints | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    autoneg: cdktf.booleanToTerraform(struct!.autoneg),
    customer_site_code: cdktf.stringToTerraform(struct!.customerSiteCode),
    loa: cdktf.stringToTerraform(struct!.loa),
    pop: cdktf.stringToTerraform(struct!.pop),
    zone: cdktf.stringToTerraform(struct!.zone),
  }
}


export function pointToPointEndpointsToHclTerraform(struct?: PointToPointEndpoints | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    autoneg: {
      value: cdktf.booleanToHclTerraform(struct!.autoneg),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    customer_site_code: {
      value: cdktf.stringToHclTerraform(struct!.customerSiteCode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    loa: {
      value: cdktf.stringToHclTerraform(struct!.loa),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pop: {
      value: cdktf.stringToHclTerraform(struct!.pop),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    zone: {
      value: cdktf.stringToHclTerraform(struct!.zone),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PointToPointEndpointsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PointToPointEndpoints | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autoneg !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoneg = this._autoneg;
    }
    if (this._customerSiteCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.customerSiteCode = this._customerSiteCode;
    }
    if (this._loa !== undefined) {
      hasAnyValues = true;
      internalValueResult.loa = this._loa;
    }
    if (this._pop !== undefined) {
      hasAnyValues = true;
      internalValueResult.pop = this._pop;
    }
    if (this._zone !== undefined) {
      hasAnyValues = true;
      internalValueResult.zone = this._zone;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PointToPointEndpoints | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._autoneg = undefined;
      this._customerSiteCode = undefined;
      this._loa = undefined;
      this._pop = undefined;
      this._zone = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._autoneg = value.autoneg;
      this._customerSiteCode = value.customerSiteCode;
      this._loa = value.loa;
      this._pop = value.pop;
      this._zone = value.zone;
    }
  }

  // autoneg - computed: false, optional: false, required: true
  private _autoneg?: boolean | cdktf.IResolvable; 
  public get autoneg() {
    return this.getBooleanAttribute('autoneg');
  }
  public set autoneg(value: boolean | cdktf.IResolvable) {
    this._autoneg = value;
  }
  // Temporarily expose input value. Use with caution.
  public get autonegInput() {
    return this._autoneg;
  }

  // customer_site_code - computed: false, optional: true, required: false
  private _customerSiteCode?: string; 
  public get customerSiteCode() {
    return this.getStringAttribute('customer_site_code');
  }
  public set customerSiteCode(value: string) {
    this._customerSiteCode = value;
  }
  public resetCustomerSiteCode() {
    this._customerSiteCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customerSiteCodeInput() {
    return this._customerSiteCode;
  }

  // loa - computed: false, optional: true, required: false
  private _loa?: string; 
  public get loa() {
    return this.getStringAttribute('loa');
  }
  public set loa(value: string) {
    this._loa = value;
  }
  public resetLoa() {
    this._loa = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loaInput() {
    return this._loa;
  }

  // pop - computed: false, optional: false, required: true
  private _pop?: string; 
  public get pop() {
    return this.getStringAttribute('pop');
  }
  public set pop(value: string) {
    this._pop = value;
  }
  // Temporarily expose input value. Use with caution.
  public get popInput() {
    return this._pop;
  }

  // port_circuit_id - computed: true, optional: false, required: false
  public get portCircuitId() {
    return this.getStringAttribute('port_circuit_id');
  }

  // zone - computed: false, optional: false, required: true
  private _zone?: string; 
  public get zone() {
    return this.getStringAttribute('zone');
  }
  public set zone(value: string) {
    this._zone = value;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneInput() {
    return this._zone;
  }
}

export class PointToPointEndpointsList extends cdktf.ComplexList {
  public internalValue? : PointToPointEndpoints[] | cdktf.IResolvable

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
  public get(index: number): PointToPointEndpointsOutputReference {
    return new PointToPointEndpointsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PointToPointTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/point_to_point#create PointToPoint#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/point_to_point#delete PointToPoint#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/point_to_point#read PointToPoint#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/point_to_point#update PointToPoint#update}
  */
  readonly update?: string;
}

export function pointToPointTimeoutsToTerraform(struct?: PointToPointTimeouts | cdktf.IResolvable): any {
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


export function pointToPointTimeoutsToHclTerraform(struct?: PointToPointTimeouts | cdktf.IResolvable): any {
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

export class PointToPointTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PointToPointTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: PointToPointTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/point_to_point packetfabric_point_to_point}
*/
export class PointToPoint extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "packetfabric_point_to_point";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PointToPoint resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PointToPoint to import
  * @param importFromId The id of the existing PointToPoint that should be imported. Refer to the {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/point_to_point#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PointToPoint to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "packetfabric_point_to_point", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/point_to_point packetfabric_point_to_point} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PointToPointConfig
  */
  public constructor(scope: Construct, id: string, config: PointToPointConfig) {
    super(scope, id, {
      terraformResourceType: 'packetfabric_point_to_point',
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
    this._description = config.description;
    this._labels = config.labels;
    this._media = config.media;
    this._poNumber = config.poNumber;
    this._publishedQuoteLineUuid = config.publishedQuoteLineUuid;
    this._speed = config.speed;
    this._subscriptionTerm = config.subscriptionTerm;
    this._endpoints.internalValue = config.endpoints;
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

  // media - computed: false, optional: false, required: true
  private _media?: string; 
  public get media() {
    return this.getStringAttribute('media');
  }
  public set media(value: string) {
    this._media = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mediaInput() {
    return this._media;
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

  // ptp_uuid - computed: true, optional: false, required: false
  public get ptpUuid() {
    return this.getStringAttribute('ptp_uuid');
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

  // subscription_term - computed: false, optional: false, required: true
  private _subscriptionTerm?: number; 
  public get subscriptionTerm() {
    return this.getNumberAttribute('subscription_term');
  }
  public set subscriptionTerm(value: number) {
    this._subscriptionTerm = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subscriptionTermInput() {
    return this._subscriptionTerm;
  }

  // endpoints - computed: false, optional: false, required: true
  private _endpoints = new PointToPointEndpointsList(this, "endpoints", false);
  public get endpoints() {
    return this._endpoints;
  }
  public putEndpoints(value: PointToPointEndpoints[] | cdktf.IResolvable) {
    this._endpoints.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointsInput() {
    return this._endpoints.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new PointToPointTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: PointToPointTimeouts) {
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
      description: cdktf.stringToTerraform(this._description),
      labels: cdktf.listMapper(cdktf.stringToTerraform, false)(this._labels),
      media: cdktf.stringToTerraform(this._media),
      po_number: cdktf.stringToTerraform(this._poNumber),
      published_quote_line_uuid: cdktf.stringToTerraform(this._publishedQuoteLineUuid),
      speed: cdktf.stringToTerraform(this._speed),
      subscription_term: cdktf.numberToTerraform(this._subscriptionTerm),
      endpoints: cdktf.listMapper(pointToPointEndpointsToTerraform, true)(this._endpoints.internalValue),
      timeouts: pointToPointTimeoutsToTerraform(this._timeouts.internalValue),
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
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      labels: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._labels),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      media: {
        value: cdktf.stringToHclTerraform(this._media),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      po_number: {
        value: cdktf.stringToHclTerraform(this._poNumber),
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
      endpoints: {
        value: cdktf.listMapperHcl(pointToPointEndpointsToHclTerraform, true)(this._endpoints.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PointToPointEndpointsList",
      },
      timeouts: {
        value: pointToPointTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "PointToPointTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
