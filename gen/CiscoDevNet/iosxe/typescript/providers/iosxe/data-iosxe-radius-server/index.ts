// https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.0/docs/data-sources/radius_server
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataIosxeRadiusServerConfig extends cdktf.TerraformMetaArguments {
  /**
  * A device name from the provider configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.0/docs/data-sources/radius_server#device DataIosxeRadiusServer#device}
  */
  readonly device?: string;
}
export interface DataIosxeRadiusServerAttributesAttribute31Parameters {
}

export function dataIosxeRadiusServerAttributesAttribute31ParametersToTerraform(struct?: DataIosxeRadiusServerAttributesAttribute31Parameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIosxeRadiusServerAttributesAttribute31ParametersToHclTerraform(struct?: DataIosxeRadiusServerAttributesAttribute31Parameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIosxeRadiusServerAttributesAttribute31ParametersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataIosxeRadiusServerAttributesAttribute31Parameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIosxeRadiusServerAttributesAttribute31Parameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // calling_station_id - computed: true, optional: false, required: false
  public get callingStationId() {
    return this.getStringAttribute('calling_station_id');
  }

  // id_mac_format - computed: true, optional: false, required: false
  public get idMacFormat() {
    return this.getStringAttribute('id_mac_format');
  }

  // id_mac_lu_case - computed: true, optional: false, required: false
  public get idMacLuCase() {
    return this.getStringAttribute('id_mac_lu_case');
  }

  // id_send_mac_only - computed: true, optional: false, required: false
  public get idSendMacOnly() {
    return this.getBooleanAttribute('id_send_mac_only');
  }

  // id_send_nas_port_detail - computed: true, optional: false, required: false
  public get idSendNasPortDetail() {
    return this.getBooleanAttribute('id_send_nas_port_detail');
  }
}

export class DataIosxeRadiusServerAttributesAttribute31ParametersList extends cdktf.ComplexList {

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
  public get(index: number): DataIosxeRadiusServerAttributesAttribute31ParametersOutputReference {
    return new DataIosxeRadiusServerAttributesAttribute31ParametersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIosxeRadiusServerAttributes {
}

export function dataIosxeRadiusServerAttributesToTerraform(struct?: DataIosxeRadiusServerAttributes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIosxeRadiusServerAttributesToHclTerraform(struct?: DataIosxeRadiusServerAttributes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIosxeRadiusServerAttributesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataIosxeRadiusServerAttributes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIosxeRadiusServerAttributes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // access_request_include - computed: true, optional: false, required: false
  public get accessRequestInclude() {
    return this.getBooleanAttribute('access_request_include');
  }

  // attribute_31_parameters - computed: true, optional: false, required: false
  private _attribute31Parameters = new DataIosxeRadiusServerAttributesAttribute31ParametersList(this, "attribute_31_parameters", false);
  public get attribute31Parameters() {
    return this._attribute31Parameters;
  }

  // number - computed: true, optional: false, required: false
  public get number() {
    return this.getStringAttribute('number');
  }

  // send_attributes - computed: true, optional: false, required: false
  public get sendAttributes() {
    return this.getListAttribute('send_attributes');
  }
}

export class DataIosxeRadiusServerAttributesList extends cdktf.ComplexList {

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
  public get(index: number): DataIosxeRadiusServerAttributesOutputReference {
    return new DataIosxeRadiusServerAttributesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.0/docs/data-sources/radius_server iosxe_radius_server}
*/
export class DataIosxeRadiusServer extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "iosxe_radius_server";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataIosxeRadiusServer resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataIosxeRadiusServer to import
  * @param importFromId The id of the existing DataIosxeRadiusServer that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.0/docs/data-sources/radius_server#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataIosxeRadiusServer to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "iosxe_radius_server", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.0/docs/data-sources/radius_server iosxe_radius_server} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataIosxeRadiusServerConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataIosxeRadiusServerConfig = {}) {
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
    this._device = config.device;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // attributes - computed: true, optional: false, required: false
  private _attributes = new DataIosxeRadiusServerAttributesList(this, "attributes", false);
  public get attributes() {
    return this._attributes;
  }

  // dead_criteria_time - computed: true, optional: false, required: false
  public get deadCriteriaTime() {
    return this.getNumberAttribute('dead_criteria_time');
  }

  // dead_criteria_tries - computed: true, optional: false, required: false
  public get deadCriteriaTries() {
    return this.getNumberAttribute('dead_criteria_tries');
  }

  // deadtime - computed: true, optional: false, required: false
  public get deadtime() {
    return this.getNumberAttribute('deadtime');
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
      device: cdktf.stringToTerraform(this._device),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
