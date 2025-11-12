// https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.0/docs/resources/radius_server
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RadiusServerConfig extends cdktf.TerraformMetaArguments {
  /**
  * Customize selected radius attributes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.0/docs/resources/radius_server#attributes RadiusServer#attributes}
  */
  readonly attributes?: RadiusServerAttributes[] | cdktf.IResolvable;
  /**
  * The time during which no properly formed response must be received from the RADIUS server
  *   - Range: `1`-`120`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.0/docs/resources/radius_server#dead_criteria_time RadiusServer#dead_criteria_time}
  */
  readonly deadCriteriaTime?: number;
  /**
  * The number of times the router must fail to receive a response from the radius server to mark it as dead
  *   - Range: `1`-`100`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.0/docs/resources/radius_server#dead_criteria_tries RadiusServer#dead_criteria_tries}
  */
  readonly deadCriteriaTries?: number;
  /**
  * Time to stop using a server that does not respond
  *   - Range: `1`-`1440`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.0/docs/resources/radius_server#deadtime RadiusServer#deadtime}
  */
  readonly deadtime?: number;
  /**
  * A device name from the provider configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.0/docs/resources/radius_server#device RadiusServer#device}
  */
  readonly device?: string;
}
export interface RadiusServerAttributesAttribute31Parameters {
  /**
  * 
  *   - Choices: `mac`, `send`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.0/docs/resources/radius_server#calling_station_id RadiusServer#calling_station_id}
  */
  readonly callingStationId: string;
  /**
  * Specify format (default format ex: 0000.4096.3e4a) ietf - format ex: 00-00-40-96-3E-4A
  *   - Choices: `ietf`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.0/docs/resources/radius_server#id_mac_format RadiusServer#id_mac_format}
  */
  readonly idMacFormat?: string;
  /**
  * 
  *   - Choices: `lower-case`, `upper-case`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.0/docs/resources/radius_server#id_mac_lu_case RadiusServer#id_mac_lu_case}
  */
  readonly idMacLuCase?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.0/docs/resources/radius_server#id_send_mac_only RadiusServer#id_send_mac_only}
  */
  readonly idSendMacOnly?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.0/docs/resources/radius_server#id_send_nas_port_detail RadiusServer#id_send_nas_port_detail}
  */
  readonly idSendNasPortDetail?: boolean | cdktf.IResolvable;
}

export function radiusServerAttributesAttribute31ParametersToTerraform(struct?: RadiusServerAttributesAttribute31Parameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    calling_station_id: cdktf.stringToTerraform(struct!.callingStationId),
    id_mac_format: cdktf.stringToTerraform(struct!.idMacFormat),
    id_mac_lu_case: cdktf.stringToTerraform(struct!.idMacLuCase),
    id_send_mac_only: cdktf.booleanToTerraform(struct!.idSendMacOnly),
    id_send_nas_port_detail: cdktf.booleanToTerraform(struct!.idSendNasPortDetail),
  }
}


export function radiusServerAttributesAttribute31ParametersToHclTerraform(struct?: RadiusServerAttributesAttribute31Parameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    calling_station_id: {
      value: cdktf.stringToHclTerraform(struct!.callingStationId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id_mac_format: {
      value: cdktf.stringToHclTerraform(struct!.idMacFormat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id_mac_lu_case: {
      value: cdktf.stringToHclTerraform(struct!.idMacLuCase),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id_send_mac_only: {
      value: cdktf.booleanToHclTerraform(struct!.idSendMacOnly),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    id_send_nas_port_detail: {
      value: cdktf.booleanToHclTerraform(struct!.idSendNasPortDetail),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RadiusServerAttributesAttribute31ParametersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RadiusServerAttributesAttribute31Parameters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._callingStationId !== undefined) {
      hasAnyValues = true;
      internalValueResult.callingStationId = this._callingStationId;
    }
    if (this._idMacFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.idMacFormat = this._idMacFormat;
    }
    if (this._idMacLuCase !== undefined) {
      hasAnyValues = true;
      internalValueResult.idMacLuCase = this._idMacLuCase;
    }
    if (this._idSendMacOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.idSendMacOnly = this._idSendMacOnly;
    }
    if (this._idSendNasPortDetail !== undefined) {
      hasAnyValues = true;
      internalValueResult.idSendNasPortDetail = this._idSendNasPortDetail;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RadiusServerAttributesAttribute31Parameters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._callingStationId = undefined;
      this._idMacFormat = undefined;
      this._idMacLuCase = undefined;
      this._idSendMacOnly = undefined;
      this._idSendNasPortDetail = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._callingStationId = value.callingStationId;
      this._idMacFormat = value.idMacFormat;
      this._idMacLuCase = value.idMacLuCase;
      this._idSendMacOnly = value.idSendMacOnly;
      this._idSendNasPortDetail = value.idSendNasPortDetail;
    }
  }

  // calling_station_id - computed: false, optional: false, required: true
  private _callingStationId?: string; 
  public get callingStationId() {
    return this.getStringAttribute('calling_station_id');
  }
  public set callingStationId(value: string) {
    this._callingStationId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get callingStationIdInput() {
    return this._callingStationId;
  }

  // id_mac_format - computed: false, optional: true, required: false
  private _idMacFormat?: string; 
  public get idMacFormat() {
    return this.getStringAttribute('id_mac_format');
  }
  public set idMacFormat(value: string) {
    this._idMacFormat = value;
  }
  public resetIdMacFormat() {
    this._idMacFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idMacFormatInput() {
    return this._idMacFormat;
  }

  // id_mac_lu_case - computed: false, optional: true, required: false
  private _idMacLuCase?: string; 
  public get idMacLuCase() {
    return this.getStringAttribute('id_mac_lu_case');
  }
  public set idMacLuCase(value: string) {
    this._idMacLuCase = value;
  }
  public resetIdMacLuCase() {
    this._idMacLuCase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idMacLuCaseInput() {
    return this._idMacLuCase;
  }

  // id_send_mac_only - computed: false, optional: true, required: false
  private _idSendMacOnly?: boolean | cdktf.IResolvable; 
  public get idSendMacOnly() {
    return this.getBooleanAttribute('id_send_mac_only');
  }
  public set idSendMacOnly(value: boolean | cdktf.IResolvable) {
    this._idSendMacOnly = value;
  }
  public resetIdSendMacOnly() {
    this._idSendMacOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idSendMacOnlyInput() {
    return this._idSendMacOnly;
  }

  // id_send_nas_port_detail - computed: false, optional: true, required: false
  private _idSendNasPortDetail?: boolean | cdktf.IResolvable; 
  public get idSendNasPortDetail() {
    return this.getBooleanAttribute('id_send_nas_port_detail');
  }
  public set idSendNasPortDetail(value: boolean | cdktf.IResolvable) {
    this._idSendNasPortDetail = value;
  }
  public resetIdSendNasPortDetail() {
    this._idSendNasPortDetail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idSendNasPortDetailInput() {
    return this._idSendNasPortDetail;
  }
}

export class RadiusServerAttributesAttribute31ParametersList extends cdktf.ComplexList {
  public internalValue? : RadiusServerAttributesAttribute31Parameters[] | cdktf.IResolvable

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
  public get(index: number): RadiusServerAttributesAttribute31ParametersOutputReference {
    return new RadiusServerAttributesAttribute31ParametersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RadiusServerAttributes {
  /**
  * Include attribute
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.0/docs/resources/radius_server#access_request_include RadiusServer#access_request_include}
  */
  readonly accessRequestInclude?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.0/docs/resources/radius_server#attribute_31_parameters RadiusServer#attribute_31_parameters}
  */
  readonly attribute31Parameters?: RadiusServerAttributesAttribute31Parameters[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.0/docs/resources/radius_server#number RadiusServer#number}
  */
  readonly number: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.0/docs/resources/radius_server#send_attributes RadiusServer#send_attributes}
  */
  readonly sendAttributes?: string[];
}

export function radiusServerAttributesToTerraform(struct?: RadiusServerAttributes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_request_include: cdktf.booleanToTerraform(struct!.accessRequestInclude),
    attribute_31_parameters: cdktf.listMapper(radiusServerAttributesAttribute31ParametersToTerraform, false)(struct!.attribute31Parameters),
    number: cdktf.stringToTerraform(struct!.number),
    send_attributes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.sendAttributes),
  }
}


export function radiusServerAttributesToHclTerraform(struct?: RadiusServerAttributes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access_request_include: {
      value: cdktf.booleanToHclTerraform(struct!.accessRequestInclude),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    attribute_31_parameters: {
      value: cdktf.listMapperHcl(radiusServerAttributesAttribute31ParametersToHclTerraform, false)(struct!.attribute31Parameters),
      isBlock: true,
      type: "list",
      storageClassType: "RadiusServerAttributesAttribute31ParametersList",
    },
    number: {
      value: cdktf.stringToHclTerraform(struct!.number),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    send_attributes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.sendAttributes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RadiusServerAttributesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RadiusServerAttributes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessRequestInclude !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessRequestInclude = this._accessRequestInclude;
    }
    if (this._attribute31Parameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.attribute31Parameters = this._attribute31Parameters?.internalValue;
    }
    if (this._number !== undefined) {
      hasAnyValues = true;
      internalValueResult.number = this._number;
    }
    if (this._sendAttributes !== undefined) {
      hasAnyValues = true;
      internalValueResult.sendAttributes = this._sendAttributes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RadiusServerAttributes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accessRequestInclude = undefined;
      this._attribute31Parameters.internalValue = undefined;
      this._number = undefined;
      this._sendAttributes = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accessRequestInclude = value.accessRequestInclude;
      this._attribute31Parameters.internalValue = value.attribute31Parameters;
      this._number = value.number;
      this._sendAttributes = value.sendAttributes;
    }
  }

  // access_request_include - computed: false, optional: true, required: false
  private _accessRequestInclude?: boolean | cdktf.IResolvable; 
  public get accessRequestInclude() {
    return this.getBooleanAttribute('access_request_include');
  }
  public set accessRequestInclude(value: boolean | cdktf.IResolvable) {
    this._accessRequestInclude = value;
  }
  public resetAccessRequestInclude() {
    this._accessRequestInclude = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessRequestIncludeInput() {
    return this._accessRequestInclude;
  }

  // attribute_31_parameters - computed: false, optional: true, required: false
  private _attribute31Parameters = new RadiusServerAttributesAttribute31ParametersList(this, "attribute_31_parameters", false);
  public get attribute31Parameters() {
    return this._attribute31Parameters;
  }
  public putAttribute31Parameters(value: RadiusServerAttributesAttribute31Parameters[] | cdktf.IResolvable) {
    this._attribute31Parameters.internalValue = value;
  }
  public resetAttribute31Parameters() {
    this._attribute31Parameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attribute31ParametersInput() {
    return this._attribute31Parameters.internalValue;
  }

  // number - computed: false, optional: false, required: true
  private _number?: string; 
  public get number() {
    return this.getStringAttribute('number');
  }
  public set number(value: string) {
    this._number = value;
  }
  // Temporarily expose input value. Use with caution.
  public get numberInput() {
    return this._number;
  }

  // send_attributes - computed: false, optional: true, required: false
  private _sendAttributes?: string[]; 
  public get sendAttributes() {
    return this.getListAttribute('send_attributes');
  }
  public set sendAttributes(value: string[]) {
    this._sendAttributes = value;
  }
  public resetSendAttributes() {
    this._sendAttributes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sendAttributesInput() {
    return this._sendAttributes;
  }
}

export class RadiusServerAttributesList extends cdktf.ComplexList {
  public internalValue? : RadiusServerAttributes[] | cdktf.IResolvable

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
  public get(index: number): RadiusServerAttributesOutputReference {
    return new RadiusServerAttributesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.0/docs/resources/radius_server iosxe_radius_server}
*/
export class RadiusServer extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "iosxe_radius_server";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a RadiusServer resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the RadiusServer to import
  * @param importFromId The id of the existing RadiusServer that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.0/docs/resources/radius_server#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the RadiusServer to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "iosxe_radius_server", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.0/docs/resources/radius_server iosxe_radius_server} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RadiusServerConfig = {}
  */
  public constructor(scope: Construct, id: string, config: RadiusServerConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'iosxe_radius_server',
      terraformGeneratorMetadata: {
        providerName: 'iosxe',
        providerVersion: '0.10.0',
        providerVersionConstraint: '0.10.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._attributes.internalValue = config.attributes;
    this._deadCriteriaTime = config.deadCriteriaTime;
    this._deadCriteriaTries = config.deadCriteriaTries;
    this._deadtime = config.deadtime;
    this._device = config.device;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // attributes - computed: false, optional: true, required: false
  private _attributes = new RadiusServerAttributesList(this, "attributes", false);
  public get attributes() {
    return this._attributes;
  }
  public putAttributes(value: RadiusServerAttributes[] | cdktf.IResolvable) {
    this._attributes.internalValue = value;
  }
  public resetAttributes() {
    this._attributes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributesInput() {
    return this._attributes.internalValue;
  }

  // dead_criteria_time - computed: false, optional: true, required: false
  private _deadCriteriaTime?: number; 
  public get deadCriteriaTime() {
    return this.getNumberAttribute('dead_criteria_time');
  }
  public set deadCriteriaTime(value: number) {
    this._deadCriteriaTime = value;
  }
  public resetDeadCriteriaTime() {
    this._deadCriteriaTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deadCriteriaTimeInput() {
    return this._deadCriteriaTime;
  }

  // dead_criteria_tries - computed: false, optional: true, required: false
  private _deadCriteriaTries?: number; 
  public get deadCriteriaTries() {
    return this.getNumberAttribute('dead_criteria_tries');
  }
  public set deadCriteriaTries(value: number) {
    this._deadCriteriaTries = value;
  }
  public resetDeadCriteriaTries() {
    this._deadCriteriaTries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deadCriteriaTriesInput() {
    return this._deadCriteriaTries;
  }

  // deadtime - computed: false, optional: true, required: false
  private _deadtime?: number; 
  public get deadtime() {
    return this.getNumberAttribute('deadtime');
  }
  public set deadtime(value: number) {
    this._deadtime = value;
  }
  public resetDeadtime() {
    this._deadtime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deadtimeInput() {
    return this._deadtime;
  }

  // device - computed: false, optional: true, required: false
  private _device?: string; 
  public get device() {
    return this.getStringAttribute('device');
  }
  public set device(value: string) {
    this._device = value;
  }
  public resetDevice() {
    this._device = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceInput() {
    return this._device;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      attributes: cdktf.listMapper(radiusServerAttributesToTerraform, false)(this._attributes.internalValue),
      dead_criteria_time: cdktf.numberToTerraform(this._deadCriteriaTime),
      dead_criteria_tries: cdktf.numberToTerraform(this._deadCriteriaTries),
      deadtime: cdktf.numberToTerraform(this._deadtime),
      device: cdktf.stringToTerraform(this._device),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      attributes: {
        value: cdktf.listMapperHcl(radiusServerAttributesToHclTerraform, false)(this._attributes.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RadiusServerAttributesList",
      },
      dead_criteria_time: {
        value: cdktf.numberToHclTerraform(this._deadCriteriaTime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      dead_criteria_tries: {
        value: cdktf.numberToHclTerraform(this._deadCriteriaTries),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      deadtime: {
        value: cdktf.numberToHclTerraform(this._deadtime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      device: {
        value: cdktf.stringToHclTerraform(this._device),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
