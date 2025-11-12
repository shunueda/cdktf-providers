// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/network_virtual_wire_oper
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderNetworkVirtualWireOperConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/network_virtual_wire_oper#id DataThunderNetworkVirtualWireOper#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * virtual wire id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/network_virtual_wire_oper#virtual_wire_id DataThunderNetworkVirtualWireOper#virtual_wire_id}
  */
  readonly virtualWireId: number;
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/network_virtual_wire_oper#oper DataThunderNetworkVirtualWireOper#oper}
  */
  readonly oper?: DataThunderNetworkVirtualWireOperOper;
}
export interface DataThunderNetworkVirtualWireOperOperEndpoints {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/network_virtual_wire_oper#drop_packet DataThunderNetworkVirtualWireOper#drop_packet}
  */
  readonly dropPacket?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/network_virtual_wire_oper#endpoint_intf DataThunderNetworkVirtualWireOper#endpoint_intf}
  */
  readonly endpointIntf?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/network_virtual_wire_oper#endpoint_type DataThunderNetworkVirtualWireOper#endpoint_type}
  */
  readonly endpointType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/network_virtual_wire_oper#input_byte DataThunderNetworkVirtualWireOper#input_byte}
  */
  readonly inputByte?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/network_virtual_wire_oper#input_packet DataThunderNetworkVirtualWireOper#input_packet}
  */
  readonly inputPacket?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/network_virtual_wire_oper#output_byte DataThunderNetworkVirtualWireOper#output_byte}
  */
  readonly outputByte?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/network_virtual_wire_oper#output_packet DataThunderNetworkVirtualWireOper#output_packet}
  */
  readonly outputPacket?: number;
}

export function dataThunderNetworkVirtualWireOperOperEndpointsToTerraform(struct?: DataThunderNetworkVirtualWireOperOperEndpoints | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    drop_packet: cdktf.numberToTerraform(struct!.dropPacket),
    endpoint_intf: cdktf.numberToTerraform(struct!.endpointIntf),
    endpoint_type: cdktf.stringToTerraform(struct!.endpointType),
    input_byte: cdktf.numberToTerraform(struct!.inputByte),
    input_packet: cdktf.numberToTerraform(struct!.inputPacket),
    output_byte: cdktf.numberToTerraform(struct!.outputByte),
    output_packet: cdktf.numberToTerraform(struct!.outputPacket),
  }
}


export function dataThunderNetworkVirtualWireOperOperEndpointsToHclTerraform(struct?: DataThunderNetworkVirtualWireOperOperEndpoints | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    drop_packet: {
      value: cdktf.numberToHclTerraform(struct!.dropPacket),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    endpoint_intf: {
      value: cdktf.numberToHclTerraform(struct!.endpointIntf),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    endpoint_type: {
      value: cdktf.stringToHclTerraform(struct!.endpointType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    input_byte: {
      value: cdktf.numberToHclTerraform(struct!.inputByte),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    input_packet: {
      value: cdktf.numberToHclTerraform(struct!.inputPacket),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    output_byte: {
      value: cdktf.numberToHclTerraform(struct!.outputByte),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    output_packet: {
      value: cdktf.numberToHclTerraform(struct!.outputPacket),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderNetworkVirtualWireOperOperEndpointsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderNetworkVirtualWireOperOperEndpoints | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dropPacket !== undefined) {
      hasAnyValues = true;
      internalValueResult.dropPacket = this._dropPacket;
    }
    if (this._endpointIntf !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpointIntf = this._endpointIntf;
    }
    if (this._endpointType !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpointType = this._endpointType;
    }
    if (this._inputByte !== undefined) {
      hasAnyValues = true;
      internalValueResult.inputByte = this._inputByte;
    }
    if (this._inputPacket !== undefined) {
      hasAnyValues = true;
      internalValueResult.inputPacket = this._inputPacket;
    }
    if (this._outputByte !== undefined) {
      hasAnyValues = true;
      internalValueResult.outputByte = this._outputByte;
    }
    if (this._outputPacket !== undefined) {
      hasAnyValues = true;
      internalValueResult.outputPacket = this._outputPacket;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderNetworkVirtualWireOperOperEndpoints | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dropPacket = undefined;
      this._endpointIntf = undefined;
      this._endpointType = undefined;
      this._inputByte = undefined;
      this._inputPacket = undefined;
      this._outputByte = undefined;
      this._outputPacket = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dropPacket = value.dropPacket;
      this._endpointIntf = value.endpointIntf;
      this._endpointType = value.endpointType;
      this._inputByte = value.inputByte;
      this._inputPacket = value.inputPacket;
      this._outputByte = value.outputByte;
      this._outputPacket = value.outputPacket;
    }
  }

  // drop_packet - computed: false, optional: true, required: false
  private _dropPacket?: number; 
  public get dropPacket() {
    return this.getNumberAttribute('drop_packet');
  }
  public set dropPacket(value: number) {
    this._dropPacket = value;
  }
  public resetDropPacket() {
    this._dropPacket = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropPacketInput() {
    return this._dropPacket;
  }

  // endpoint_intf - computed: false, optional: true, required: false
  private _endpointIntf?: number; 
  public get endpointIntf() {
    return this.getNumberAttribute('endpoint_intf');
  }
  public set endpointIntf(value: number) {
    this._endpointIntf = value;
  }
  public resetEndpointIntf() {
    this._endpointIntf = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointIntfInput() {
    return this._endpointIntf;
  }

  // endpoint_type - computed: false, optional: true, required: false
  private _endpointType?: string; 
  public get endpointType() {
    return this.getStringAttribute('endpoint_type');
  }
  public set endpointType(value: string) {
    this._endpointType = value;
  }
  public resetEndpointType() {
    this._endpointType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointTypeInput() {
    return this._endpointType;
  }

  // input_byte - computed: false, optional: true, required: false
  private _inputByte?: number; 
  public get inputByte() {
    return this.getNumberAttribute('input_byte');
  }
  public set inputByte(value: number) {
    this._inputByte = value;
  }
  public resetInputByte() {
    this._inputByte = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inputByteInput() {
    return this._inputByte;
  }

  // input_packet - computed: false, optional: true, required: false
  private _inputPacket?: number; 
  public get inputPacket() {
    return this.getNumberAttribute('input_packet');
  }
  public set inputPacket(value: number) {
    this._inputPacket = value;
  }
  public resetInputPacket() {
    this._inputPacket = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inputPacketInput() {
    return this._inputPacket;
  }

  // output_byte - computed: false, optional: true, required: false
  private _outputByte?: number; 
  public get outputByte() {
    return this.getNumberAttribute('output_byte');
  }
  public set outputByte(value: number) {
    this._outputByte = value;
  }
  public resetOutputByte() {
    this._outputByte = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputByteInput() {
    return this._outputByte;
  }

  // output_packet - computed: false, optional: true, required: false
  private _outputPacket?: number; 
  public get outputPacket() {
    return this.getNumberAttribute('output_packet');
  }
  public set outputPacket(value: number) {
    this._outputPacket = value;
  }
  public resetOutputPacket() {
    this._outputPacket = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputPacketInput() {
    return this._outputPacket;
  }
}

export class DataThunderNetworkVirtualWireOperOperEndpointsList extends cdktf.ComplexList {
  public internalValue? : DataThunderNetworkVirtualWireOperOperEndpoints[] | cdktf.IResolvable

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
  public get(index: number): DataThunderNetworkVirtualWireOperOperEndpointsOutputReference {
    return new DataThunderNetworkVirtualWireOperOperEndpointsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderNetworkVirtualWireOperOper {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/network_virtual_wire_oper#virtual_wire_status DataThunderNetworkVirtualWireOper#virtual_wire_status}
  */
  readonly virtualWireStatus?: string;
  /**
  * endpoints block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/network_virtual_wire_oper#endpoints DataThunderNetworkVirtualWireOper#endpoints}
  */
  readonly endpoints?: DataThunderNetworkVirtualWireOperOperEndpoints[] | cdktf.IResolvable;
}

export function dataThunderNetworkVirtualWireOperOperToTerraform(struct?: DataThunderNetworkVirtualWireOperOperOutputReference | DataThunderNetworkVirtualWireOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    virtual_wire_status: cdktf.stringToTerraform(struct!.virtualWireStatus),
    endpoints: cdktf.listMapper(dataThunderNetworkVirtualWireOperOperEndpointsToTerraform, true)(struct!.endpoints),
  }
}


export function dataThunderNetworkVirtualWireOperOperToHclTerraform(struct?: DataThunderNetworkVirtualWireOperOperOutputReference | DataThunderNetworkVirtualWireOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    virtual_wire_status: {
      value: cdktf.stringToHclTerraform(struct!.virtualWireStatus),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    endpoints: {
      value: cdktf.listMapperHcl(dataThunderNetworkVirtualWireOperOperEndpointsToHclTerraform, true)(struct!.endpoints),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderNetworkVirtualWireOperOperEndpointsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderNetworkVirtualWireOperOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderNetworkVirtualWireOperOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._virtualWireStatus !== undefined) {
      hasAnyValues = true;
      internalValueResult.virtualWireStatus = this._virtualWireStatus;
    }
    if (this._endpoints?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpoints = this._endpoints?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderNetworkVirtualWireOperOper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._virtualWireStatus = undefined;
      this._endpoints.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._virtualWireStatus = value.virtualWireStatus;
      this._endpoints.internalValue = value.endpoints;
    }
  }

  // virtual_wire_status - computed: false, optional: true, required: false
  private _virtualWireStatus?: string; 
  public get virtualWireStatus() {
    return this.getStringAttribute('virtual_wire_status');
  }
  public set virtualWireStatus(value: string) {
    this._virtualWireStatus = value;
  }
  public resetVirtualWireStatus() {
    this._virtualWireStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualWireStatusInput() {
    return this._virtualWireStatus;
  }

  // endpoints - computed: false, optional: true, required: false
  private _endpoints = new DataThunderNetworkVirtualWireOperOperEndpointsList(this, "endpoints", false);
  public get endpoints() {
    return this._endpoints;
  }
  public putEndpoints(value: DataThunderNetworkVirtualWireOperOperEndpoints[] | cdktf.IResolvable) {
    this._endpoints.internalValue = value;
  }
  public resetEndpoints() {
    this._endpoints.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointsInput() {
    return this._endpoints.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/network_virtual_wire_oper thunder_network_virtual_wire_oper}
*/
export class DataThunderNetworkVirtualWireOper extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_network_virtual_wire_oper";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderNetworkVirtualWireOper resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderNetworkVirtualWireOper to import
  * @param importFromId The id of the existing DataThunderNetworkVirtualWireOper that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/network_virtual_wire_oper#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderNetworkVirtualWireOper to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_network_virtual_wire_oper", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/network_virtual_wire_oper thunder_network_virtual_wire_oper} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderNetworkVirtualWireOperConfig
  */
  public constructor(scope: Construct, id: string, config: DataThunderNetworkVirtualWireOperConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_network_virtual_wire_oper',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.4.2',
        providerVersionConstraint: '1.4.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._virtualWireId = config.virtualWireId;
    this._oper.internalValue = config.oper;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // virtual_wire_id - computed: false, optional: false, required: true
  private _virtualWireId?: number; 
  public get virtualWireId() {
    return this.getNumberAttribute('virtual_wire_id');
  }
  public set virtualWireId(value: number) {
    this._virtualWireId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualWireIdInput() {
    return this._virtualWireId;
  }

  // oper - computed: false, optional: true, required: false
  private _oper = new DataThunderNetworkVirtualWireOperOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderNetworkVirtualWireOperOper) {
    this._oper.internalValue = value;
  }
  public resetOper() {
    this._oper.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operInput() {
    return this._oper.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      virtual_wire_id: cdktf.numberToTerraform(this._virtualWireId),
      oper: dataThunderNetworkVirtualWireOperOperToTerraform(this._oper.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      virtual_wire_id: {
        value: cdktf.numberToHclTerraform(this._virtualWireId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      oper: {
        value: dataThunderNetworkVirtualWireOperOperToHclTerraform(this._oper.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderNetworkVirtualWireOperOperList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
