// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/gslb_service_port_oper
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderGslbServicePortOperConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/gslb_service_port_oper#id DataThunderGslbServicePortOper#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/gslb_service_port_oper#oper DataThunderGslbServicePortOper#oper}
  */
  readonly oper?: DataThunderGslbServicePortOperOper;
}
export interface DataThunderGslbServicePortOperOperServicePortListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/gslb_service_port_oper#active_real_server DataThunderGslbServicePortOper#active_real_server}
  */
  readonly activeRealServer?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/gslb_service_port_oper#attributes DataThunderGslbServicePortOper#attributes}
  */
  readonly attributes?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/gslb_service_port_oper#current_connections DataThunderGslbServicePortOper#current_connections}
  */
  readonly currentConnections?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/gslb_service_port_oper#service_hcode DataThunderGslbServicePortOper#service_hcode}
  */
  readonly serviceHcode?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/gslb_service_port_oper#service_label DataThunderGslbServicePortOper#service_label}
  */
  readonly serviceLabel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/gslb_service_port_oper#service_port_name DataThunderGslbServicePortOper#service_port_name}
  */
  readonly servicePortName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/gslb_service_port_oper#state DataThunderGslbServicePortOper#state}
  */
  readonly state?: string;
}

export function dataThunderGslbServicePortOperOperServicePortListStructToTerraform(struct?: DataThunderGslbServicePortOperOperServicePortListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    active_real_server: cdktf.numberToTerraform(struct!.activeRealServer),
    attributes: cdktf.stringToTerraform(struct!.attributes),
    current_connections: cdktf.numberToTerraform(struct!.currentConnections),
    service_hcode: cdktf.numberToTerraform(struct!.serviceHcode),
    service_label: cdktf.stringToTerraform(struct!.serviceLabel),
    service_port_name: cdktf.stringToTerraform(struct!.servicePortName),
    state: cdktf.stringToTerraform(struct!.state),
  }
}


export function dataThunderGslbServicePortOperOperServicePortListStructToHclTerraform(struct?: DataThunderGslbServicePortOperOperServicePortListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    active_real_server: {
      value: cdktf.numberToHclTerraform(struct!.activeRealServer),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    attributes: {
      value: cdktf.stringToHclTerraform(struct!.attributes),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    current_connections: {
      value: cdktf.numberToHclTerraform(struct!.currentConnections),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    service_hcode: {
      value: cdktf.numberToHclTerraform(struct!.serviceHcode),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    service_label: {
      value: cdktf.stringToHclTerraform(struct!.serviceLabel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_port_name: {
      value: cdktf.stringToHclTerraform(struct!.servicePortName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    state: {
      value: cdktf.stringToHclTerraform(struct!.state),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderGslbServicePortOperOperServicePortListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderGslbServicePortOperOperServicePortListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._activeRealServer !== undefined) {
      hasAnyValues = true;
      internalValueResult.activeRealServer = this._activeRealServer;
    }
    if (this._attributes !== undefined) {
      hasAnyValues = true;
      internalValueResult.attributes = this._attributes;
    }
    if (this._currentConnections !== undefined) {
      hasAnyValues = true;
      internalValueResult.currentConnections = this._currentConnections;
    }
    if (this._serviceHcode !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceHcode = this._serviceHcode;
    }
    if (this._serviceLabel !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceLabel = this._serviceLabel;
    }
    if (this._servicePortName !== undefined) {
      hasAnyValues = true;
      internalValueResult.servicePortName = this._servicePortName;
    }
    if (this._state !== undefined) {
      hasAnyValues = true;
      internalValueResult.state = this._state;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderGslbServicePortOperOperServicePortListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._activeRealServer = undefined;
      this._attributes = undefined;
      this._currentConnections = undefined;
      this._serviceHcode = undefined;
      this._serviceLabel = undefined;
      this._servicePortName = undefined;
      this._state = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._activeRealServer = value.activeRealServer;
      this._attributes = value.attributes;
      this._currentConnections = value.currentConnections;
      this._serviceHcode = value.serviceHcode;
      this._serviceLabel = value.serviceLabel;
      this._servicePortName = value.servicePortName;
      this._state = value.state;
    }
  }

  // active_real_server - computed: false, optional: true, required: false
  private _activeRealServer?: number; 
  public get activeRealServer() {
    return this.getNumberAttribute('active_real_server');
  }
  public set activeRealServer(value: number) {
    this._activeRealServer = value;
  }
  public resetActiveRealServer() {
    this._activeRealServer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activeRealServerInput() {
    return this._activeRealServer;
  }

  // attributes - computed: false, optional: true, required: false
  private _attributes?: string; 
  public get attributes() {
    return this.getStringAttribute('attributes');
  }
  public set attributes(value: string) {
    this._attributes = value;
  }
  public resetAttributes() {
    this._attributes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributesInput() {
    return this._attributes;
  }

  // current_connections - computed: false, optional: true, required: false
  private _currentConnections?: number; 
  public get currentConnections() {
    return this.getNumberAttribute('current_connections');
  }
  public set currentConnections(value: number) {
    this._currentConnections = value;
  }
  public resetCurrentConnections() {
    this._currentConnections = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get currentConnectionsInput() {
    return this._currentConnections;
  }

  // service_hcode - computed: false, optional: true, required: false
  private _serviceHcode?: number; 
  public get serviceHcode() {
    return this.getNumberAttribute('service_hcode');
  }
  public set serviceHcode(value: number) {
    this._serviceHcode = value;
  }
  public resetServiceHcode() {
    this._serviceHcode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceHcodeInput() {
    return this._serviceHcode;
  }

  // service_label - computed: false, optional: true, required: false
  private _serviceLabel?: string; 
  public get serviceLabel() {
    return this.getStringAttribute('service_label');
  }
  public set serviceLabel(value: string) {
    this._serviceLabel = value;
  }
  public resetServiceLabel() {
    this._serviceLabel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceLabelInput() {
    return this._serviceLabel;
  }

  // service_port_name - computed: false, optional: true, required: false
  private _servicePortName?: string; 
  public get servicePortName() {
    return this.getStringAttribute('service_port_name');
  }
  public set servicePortName(value: string) {
    this._servicePortName = value;
  }
  public resetServicePortName() {
    this._servicePortName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get servicePortNameInput() {
    return this._servicePortName;
  }

  // state - computed: false, optional: true, required: false
  private _state?: string; 
  public get state() {
    return this.getStringAttribute('state');
  }
  public set state(value: string) {
    this._state = value;
  }
  public resetState() {
    this._state = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateInput() {
    return this._state;
  }
}

export class DataThunderGslbServicePortOperOperServicePortListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderGslbServicePortOperOperServicePortListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderGslbServicePortOperOperServicePortListStructOutputReference {
    return new DataThunderGslbServicePortOperOperServicePortListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderGslbServicePortOperOper {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/gslb_service_port_oper#label DataThunderGslbServicePortOper#label}
  */
  readonly label?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/gslb_service_port_oper#port_count DataThunderGslbServicePortOper#port_count}
  */
  readonly portCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/gslb_service_port_oper#service_hash DataThunderGslbServicePortOper#service_hash}
  */
  readonly serviceHash?: number;
  /**
  * service_port_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/gslb_service_port_oper#service_port_list DataThunderGslbServicePortOper#service_port_list}
  */
  readonly servicePortList?: DataThunderGslbServicePortOperOperServicePortListStruct[] | cdktf.IResolvable;
}

export function dataThunderGslbServicePortOperOperToTerraform(struct?: DataThunderGslbServicePortOperOperOutputReference | DataThunderGslbServicePortOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    label: cdktf.stringToTerraform(struct!.label),
    port_count: cdktf.numberToTerraform(struct!.portCount),
    service_hash: cdktf.numberToTerraform(struct!.serviceHash),
    service_port_list: cdktf.listMapper(dataThunderGslbServicePortOperOperServicePortListStructToTerraform, true)(struct!.servicePortList),
  }
}


export function dataThunderGslbServicePortOperOperToHclTerraform(struct?: DataThunderGslbServicePortOperOperOutputReference | DataThunderGslbServicePortOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    label: {
      value: cdktf.stringToHclTerraform(struct!.label),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port_count: {
      value: cdktf.numberToHclTerraform(struct!.portCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    service_hash: {
      value: cdktf.numberToHclTerraform(struct!.serviceHash),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    service_port_list: {
      value: cdktf.listMapperHcl(dataThunderGslbServicePortOperOperServicePortListStructToHclTerraform, true)(struct!.servicePortList),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderGslbServicePortOperOperServicePortListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderGslbServicePortOperOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderGslbServicePortOperOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._label !== undefined) {
      hasAnyValues = true;
      internalValueResult.label = this._label;
    }
    if (this._portCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.portCount = this._portCount;
    }
    if (this._serviceHash !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceHash = this._serviceHash;
    }
    if (this._servicePortList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.servicePortList = this._servicePortList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderGslbServicePortOperOper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._label = undefined;
      this._portCount = undefined;
      this._serviceHash = undefined;
      this._servicePortList.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._label = value.label;
      this._portCount = value.portCount;
      this._serviceHash = value.serviceHash;
      this._servicePortList.internalValue = value.servicePortList;
    }
  }

  // label - computed: false, optional: true, required: false
  private _label?: string; 
  public get label() {
    return this.getStringAttribute('label');
  }
  public set label(value: string) {
    this._label = value;
  }
  public resetLabel() {
    this._label = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelInput() {
    return this._label;
  }

  // port_count - computed: false, optional: true, required: false
  private _portCount?: number; 
  public get portCount() {
    return this.getNumberAttribute('port_count');
  }
  public set portCount(value: number) {
    this._portCount = value;
  }
  public resetPortCount() {
    this._portCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portCountInput() {
    return this._portCount;
  }

  // service_hash - computed: false, optional: true, required: false
  private _serviceHash?: number; 
  public get serviceHash() {
    return this.getNumberAttribute('service_hash');
  }
  public set serviceHash(value: number) {
    this._serviceHash = value;
  }
  public resetServiceHash() {
    this._serviceHash = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceHashInput() {
    return this._serviceHash;
  }

  // service_port_list - computed: false, optional: true, required: false
  private _servicePortList = new DataThunderGslbServicePortOperOperServicePortListStructList(this, "service_port_list", false);
  public get servicePortList() {
    return this._servicePortList;
  }
  public putServicePortList(value: DataThunderGslbServicePortOperOperServicePortListStruct[] | cdktf.IResolvable) {
    this._servicePortList.internalValue = value;
  }
  public resetServicePortList() {
    this._servicePortList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get servicePortListInput() {
    return this._servicePortList.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/gslb_service_port_oper thunder_gslb_service_port_oper}
*/
export class DataThunderGslbServicePortOper extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_gslb_service_port_oper";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderGslbServicePortOper resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderGslbServicePortOper to import
  * @param importFromId The id of the existing DataThunderGslbServicePortOper that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/gslb_service_port_oper#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderGslbServicePortOper to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_gslb_service_port_oper", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/gslb_service_port_oper thunder_gslb_service_port_oper} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderGslbServicePortOperConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderGslbServicePortOperConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_gslb_service_port_oper',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.5.0',
        providerVersionConstraint: '1.5.0'
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

  // oper - computed: false, optional: true, required: false
  private _oper = new DataThunderGslbServicePortOperOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderGslbServicePortOperOper) {
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
      oper: dataThunderGslbServicePortOperOperToTerraform(this._oper.internalValue),
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
      oper: {
        value: dataThunderGslbServicePortOperOperToHclTerraform(this._oper.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderGslbServicePortOperOperList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
