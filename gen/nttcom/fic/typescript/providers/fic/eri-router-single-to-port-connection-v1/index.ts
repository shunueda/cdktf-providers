// https://registry.terraform.io/providers/nttcom/fic/0.5.6/docs/resources/eri_router_single_to_port_connection_v1
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface EriRouterSingleToPortConnectionV1Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/fic/0.5.6/docs/resources/eri_router_single_to_port_connection_v1#bandwidth EriRouterSingleToPortConnectionV1#bandwidth}
  */
  readonly bandwidth: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/fic/0.5.6/docs/resources/eri_router_single_to_port_connection_v1#id EriRouterSingleToPortConnectionV1#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/fic/0.5.6/docs/resources/eri_router_single_to_port_connection_v1#name EriRouterSingleToPortConnectionV1#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/fic/0.5.6/docs/resources/eri_router_single_to_port_connection_v1#source_group_name EriRouterSingleToPortConnectionV1#source_group_name}
  */
  readonly sourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/fic/0.5.6/docs/resources/eri_router_single_to_port_connection_v1#source_route_filter_in EriRouterSingleToPortConnectionV1#source_route_filter_in}
  */
  readonly sourceRouteFilterIn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/fic/0.5.6/docs/resources/eri_router_single_to_port_connection_v1#source_route_filter_out EriRouterSingleToPortConnectionV1#source_route_filter_out}
  */
  readonly sourceRouteFilterOut: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/fic/0.5.6/docs/resources/eri_router_single_to_port_connection_v1#source_router_id EriRouterSingleToPortConnectionV1#source_router_id}
  */
  readonly sourceRouterId: string;
  /**
  * destination_information block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/fic/0.5.6/docs/resources/eri_router_single_to_port_connection_v1#destination_information EriRouterSingleToPortConnectionV1#destination_information}
  */
  readonly destinationInformation: EriRouterSingleToPortConnectionV1DestinationInformation;
  /**
  * source_information block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/fic/0.5.6/docs/resources/eri_router_single_to_port_connection_v1#source_information EriRouterSingleToPortConnectionV1#source_information}
  */
  readonly sourceInformation: EriRouterSingleToPortConnectionV1SourceInformation;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/fic/0.5.6/docs/resources/eri_router_single_to_port_connection_v1#timeouts EriRouterSingleToPortConnectionV1#timeouts}
  */
  readonly timeouts?: EriRouterSingleToPortConnectionV1Timeouts;
}
export interface EriRouterSingleToPortConnectionV1DestinationInformation {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/fic/0.5.6/docs/resources/eri_router_single_to_port_connection_v1#asn EriRouterSingleToPortConnectionV1#asn}
  */
  readonly asn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/fic/0.5.6/docs/resources/eri_router_single_to_port_connection_v1#ip_address EriRouterSingleToPortConnectionV1#ip_address}
  */
  readonly ipAddress: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/fic/0.5.6/docs/resources/eri_router_single_to_port_connection_v1#port_id EriRouterSingleToPortConnectionV1#port_id}
  */
  readonly portId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/fic/0.5.6/docs/resources/eri_router_single_to_port_connection_v1#vlan EriRouterSingleToPortConnectionV1#vlan}
  */
  readonly vlan: number;
}

export function eriRouterSingleToPortConnectionV1DestinationInformationToTerraform(struct?: EriRouterSingleToPortConnectionV1DestinationInformationOutputReference | EriRouterSingleToPortConnectionV1DestinationInformation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    asn: cdktf.stringToTerraform(struct!.asn),
    ip_address: cdktf.stringToTerraform(struct!.ipAddress),
    port_id: cdktf.stringToTerraform(struct!.portId),
    vlan: cdktf.numberToTerraform(struct!.vlan),
  }
}


export function eriRouterSingleToPortConnectionV1DestinationInformationToHclTerraform(struct?: EriRouterSingleToPortConnectionV1DestinationInformationOutputReference | EriRouterSingleToPortConnectionV1DestinationInformation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    asn: {
      value: cdktf.stringToHclTerraform(struct!.asn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip_address: {
      value: cdktf.stringToHclTerraform(struct!.ipAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port_id: {
      value: cdktf.stringToHclTerraform(struct!.portId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vlan: {
      value: cdktf.numberToHclTerraform(struct!.vlan),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EriRouterSingleToPortConnectionV1DestinationInformationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EriRouterSingleToPortConnectionV1DestinationInformation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._asn !== undefined) {
      hasAnyValues = true;
      internalValueResult.asn = this._asn;
    }
    if (this._ipAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddress = this._ipAddress;
    }
    if (this._portId !== undefined) {
      hasAnyValues = true;
      internalValueResult.portId = this._portId;
    }
    if (this._vlan !== undefined) {
      hasAnyValues = true;
      internalValueResult.vlan = this._vlan;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EriRouterSingleToPortConnectionV1DestinationInformation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._asn = undefined;
      this._ipAddress = undefined;
      this._portId = undefined;
      this._vlan = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._asn = value.asn;
      this._ipAddress = value.ipAddress;
      this._portId = value.portId;
      this._vlan = value.vlan;
    }
  }

  // asn - computed: false, optional: false, required: true
  private _asn?: string; 
  public get asn() {
    return this.getStringAttribute('asn');
  }
  public set asn(value: string) {
    this._asn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get asnInput() {
    return this._asn;
  }

  // ip_address - computed: false, optional: false, required: true
  private _ipAddress?: string; 
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }
  public set ipAddress(value: string) {
    this._ipAddress = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressInput() {
    return this._ipAddress;
  }

  // port_id - computed: false, optional: false, required: true
  private _portId?: string; 
  public get portId() {
    return this.getStringAttribute('port_id');
  }
  public set portId(value: string) {
    this._portId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portIdInput() {
    return this._portId;
  }

  // vlan - computed: false, optional: false, required: true
  private _vlan?: number; 
  public get vlan() {
    return this.getNumberAttribute('vlan');
  }
  public set vlan(value: number) {
    this._vlan = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanInput() {
    return this._vlan;
  }
}
export interface EriRouterSingleToPortConnectionV1SourceInformation {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/fic/0.5.6/docs/resources/eri_router_single_to_port_connection_v1#as_path_prepend_in EriRouterSingleToPortConnectionV1#as_path_prepend_in}
  */
  readonly asPathPrependIn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/fic/0.5.6/docs/resources/eri_router_single_to_port_connection_v1#as_path_prepend_out EriRouterSingleToPortConnectionV1#as_path_prepend_out}
  */
  readonly asPathPrependOut?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/fic/0.5.6/docs/resources/eri_router_single_to_port_connection_v1#ip_address EriRouterSingleToPortConnectionV1#ip_address}
  */
  readonly ipAddress: string;
}

export function eriRouterSingleToPortConnectionV1SourceInformationToTerraform(struct?: EriRouterSingleToPortConnectionV1SourceInformationOutputReference | EriRouterSingleToPortConnectionV1SourceInformation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    as_path_prepend_in: cdktf.stringToTerraform(struct!.asPathPrependIn),
    as_path_prepend_out: cdktf.stringToTerraform(struct!.asPathPrependOut),
    ip_address: cdktf.stringToTerraform(struct!.ipAddress),
  }
}


export function eriRouterSingleToPortConnectionV1SourceInformationToHclTerraform(struct?: EriRouterSingleToPortConnectionV1SourceInformationOutputReference | EriRouterSingleToPortConnectionV1SourceInformation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    as_path_prepend_in: {
      value: cdktf.stringToHclTerraform(struct!.asPathPrependIn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    as_path_prepend_out: {
      value: cdktf.stringToHclTerraform(struct!.asPathPrependOut),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip_address: {
      value: cdktf.stringToHclTerraform(struct!.ipAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EriRouterSingleToPortConnectionV1SourceInformationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EriRouterSingleToPortConnectionV1SourceInformation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._asPathPrependIn !== undefined) {
      hasAnyValues = true;
      internalValueResult.asPathPrependIn = this._asPathPrependIn;
    }
    if (this._asPathPrependOut !== undefined) {
      hasAnyValues = true;
      internalValueResult.asPathPrependOut = this._asPathPrependOut;
    }
    if (this._ipAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddress = this._ipAddress;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EriRouterSingleToPortConnectionV1SourceInformation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._asPathPrependIn = undefined;
      this._asPathPrependOut = undefined;
      this._ipAddress = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._asPathPrependIn = value.asPathPrependIn;
      this._asPathPrependOut = value.asPathPrependOut;
      this._ipAddress = value.ipAddress;
    }
  }

  // as_path_prepend_in - computed: false, optional: true, required: false
  private _asPathPrependIn?: string; 
  public get asPathPrependIn() {
    return this.getStringAttribute('as_path_prepend_in');
  }
  public set asPathPrependIn(value: string) {
    this._asPathPrependIn = value;
  }
  public resetAsPathPrependIn() {
    this._asPathPrependIn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get asPathPrependInInput() {
    return this._asPathPrependIn;
  }

  // as_path_prepend_out - computed: false, optional: true, required: false
  private _asPathPrependOut?: string; 
  public get asPathPrependOut() {
    return this.getStringAttribute('as_path_prepend_out');
  }
  public set asPathPrependOut(value: string) {
    this._asPathPrependOut = value;
  }
  public resetAsPathPrependOut() {
    this._asPathPrependOut = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get asPathPrependOutInput() {
    return this._asPathPrependOut;
  }

  // ip_address - computed: false, optional: false, required: true
  private _ipAddress?: string; 
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }
  public set ipAddress(value: string) {
    this._ipAddress = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressInput() {
    return this._ipAddress;
  }
}
export interface EriRouterSingleToPortConnectionV1Timeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/fic/0.5.6/docs/resources/eri_router_single_to_port_connection_v1#create EriRouterSingleToPortConnectionV1#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/fic/0.5.6/docs/resources/eri_router_single_to_port_connection_v1#delete EriRouterSingleToPortConnectionV1#delete}
  */
  readonly delete?: string;
}

export function eriRouterSingleToPortConnectionV1TimeoutsToTerraform(struct?: EriRouterSingleToPortConnectionV1Timeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
  }
}


export function eriRouterSingleToPortConnectionV1TimeoutsToHclTerraform(struct?: EriRouterSingleToPortConnectionV1Timeouts | cdktf.IResolvable): any {
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

export class EriRouterSingleToPortConnectionV1TimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): EriRouterSingleToPortConnectionV1Timeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: EriRouterSingleToPortConnectionV1Timeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/nttcom/fic/0.5.6/docs/resources/eri_router_single_to_port_connection_v1 fic_eri_router_single_to_port_connection_v1}
*/
export class EriRouterSingleToPortConnectionV1 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fic_eri_router_single_to_port_connection_v1";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a EriRouterSingleToPortConnectionV1 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the EriRouterSingleToPortConnectionV1 to import
  * @param importFromId The id of the existing EriRouterSingleToPortConnectionV1 that should be imported. Refer to the {@link https://registry.terraform.io/providers/nttcom/fic/0.5.6/docs/resources/eri_router_single_to_port_connection_v1#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the EriRouterSingleToPortConnectionV1 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fic_eri_router_single_to_port_connection_v1", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/nttcom/fic/0.5.6/docs/resources/eri_router_single_to_port_connection_v1 fic_eri_router_single_to_port_connection_v1} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EriRouterSingleToPortConnectionV1Config
  */
  public constructor(scope: Construct, id: string, config: EriRouterSingleToPortConnectionV1Config) {
    super(scope, id, {
      terraformResourceType: 'fic_eri_router_single_to_port_connection_v1',
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
    this._id = config.id;
    this._name = config.name;
    this._sourceGroupName = config.sourceGroupName;
    this._sourceRouteFilterIn = config.sourceRouteFilterIn;
    this._sourceRouteFilterOut = config.sourceRouteFilterOut;
    this._sourceRouterId = config.sourceRouterId;
    this._destinationInformation.internalValue = config.destinationInformation;
    this._sourceInformation.internalValue = config.sourceInformation;
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

  // destination_information - computed: false, optional: false, required: true
  private _destinationInformation = new EriRouterSingleToPortConnectionV1DestinationInformationOutputReference(this, "destination_information");
  public get destinationInformation() {
    return this._destinationInformation;
  }
  public putDestinationInformation(value: EriRouterSingleToPortConnectionV1DestinationInformation) {
    this._destinationInformation.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationInformationInput() {
    return this._destinationInformation.internalValue;
  }

  // source_information - computed: false, optional: false, required: true
  private _sourceInformation = new EriRouterSingleToPortConnectionV1SourceInformationOutputReference(this, "source_information");
  public get sourceInformation() {
    return this._sourceInformation;
  }
  public putSourceInformation(value: EriRouterSingleToPortConnectionV1SourceInformation) {
    this._sourceInformation.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInformationInput() {
    return this._sourceInformation.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new EriRouterSingleToPortConnectionV1TimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: EriRouterSingleToPortConnectionV1Timeouts) {
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
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      source_group_name: cdktf.stringToTerraform(this._sourceGroupName),
      source_route_filter_in: cdktf.stringToTerraform(this._sourceRouteFilterIn),
      source_route_filter_out: cdktf.stringToTerraform(this._sourceRouteFilterOut),
      source_router_id: cdktf.stringToTerraform(this._sourceRouterId),
      destination_information: eriRouterSingleToPortConnectionV1DestinationInformationToTerraform(this._destinationInformation.internalValue),
      source_information: eriRouterSingleToPortConnectionV1SourceInformationToTerraform(this._sourceInformation.internalValue),
      timeouts: eriRouterSingleToPortConnectionV1TimeoutsToTerraform(this._timeouts.internalValue),
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
      destination_information: {
        value: eriRouterSingleToPortConnectionV1DestinationInformationToHclTerraform(this._destinationInformation.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "EriRouterSingleToPortConnectionV1DestinationInformationList",
      },
      source_information: {
        value: eriRouterSingleToPortConnectionV1SourceInformationToHclTerraform(this._sourceInformation.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "EriRouterSingleToPortConnectionV1SourceInformationList",
      },
      timeouts: {
        value: eriRouterSingleToPortConnectionV1TimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "EriRouterSingleToPortConnectionV1Timeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
