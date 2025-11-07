// https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_logfetch_clientprofile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SystemLogfetchClientprofileConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_logfetch_clientprofile#client_adom SystemLogfetchClientprofile#client_adom}
  */
  readonly clientAdom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_logfetch_clientprofile#data_range SystemLogfetchClientprofile#data_range}
  */
  readonly dataRange?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_logfetch_clientprofile#data_range_value SystemLogfetchClientprofile#data_range_value}
  */
  readonly dataRangeValue?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_logfetch_clientprofile#dynamic_sort_subtable SystemLogfetchClientprofile#dynamic_sort_subtable}
  */
  readonly dynamicSortSubtable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_logfetch_clientprofile#end_time SystemLogfetchClientprofile#end_time}
  */
  readonly endTime?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_logfetch_clientprofile#fosid SystemLogfetchClientprofile#fosid}
  */
  readonly fosid?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_logfetch_clientprofile#id SystemLogfetchClientprofile#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_logfetch_clientprofile#index_fetch_logs SystemLogfetchClientprofile#index_fetch_logs}
  */
  readonly indexFetchLogs?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_logfetch_clientprofile#log_filter_logic SystemLogfetchClientprofile#log_filter_logic}
  */
  readonly logFilterLogic?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_logfetch_clientprofile#log_filter_status SystemLogfetchClientprofile#log_filter_status}
  */
  readonly logFilterStatus?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_logfetch_clientprofile#name SystemLogfetchClientprofile#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_logfetch_clientprofile#password SystemLogfetchClientprofile#password}
  */
  readonly password?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_logfetch_clientprofile#peer_cert_cn SystemLogfetchClientprofile#peer_cert_cn}
  */
  readonly peerCertCn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_logfetch_clientprofile#secure_connection SystemLogfetchClientprofile#secure_connection}
  */
  readonly secureConnection?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_logfetch_clientprofile#server_adom SystemLogfetchClientprofile#server_adom}
  */
  readonly serverAdom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_logfetch_clientprofile#server_ip SystemLogfetchClientprofile#server_ip}
  */
  readonly serverIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_logfetch_clientprofile#start_time SystemLogfetchClientprofile#start_time}
  */
  readonly startTime?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_logfetch_clientprofile#sync_adom_config SystemLogfetchClientprofile#sync_adom_config}
  */
  readonly syncAdomConfig?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_logfetch_clientprofile#user SystemLogfetchClientprofile#user}
  */
  readonly user?: string;
  /**
  * device_filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_logfetch_clientprofile#device_filter SystemLogfetchClientprofile#device_filter}
  */
  readonly deviceFilter?: SystemLogfetchClientprofileDeviceFilter[] | cdktf.IResolvable;
  /**
  * log_filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_logfetch_clientprofile#log_filter SystemLogfetchClientprofile#log_filter}
  */
  readonly logFilter?: SystemLogfetchClientprofileLogFilter[] | cdktf.IResolvable;
}
export interface SystemLogfetchClientprofileDeviceFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_logfetch_clientprofile#adom SystemLogfetchClientprofile#adom}
  */
  readonly adom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_logfetch_clientprofile#device SystemLogfetchClientprofile#device}
  */
  readonly device?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_logfetch_clientprofile#id SystemLogfetchClientprofile#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_logfetch_clientprofile#vdom SystemLogfetchClientprofile#vdom}
  */
  readonly vdom?: string;
}

export function systemLogfetchClientprofileDeviceFilterToTerraform(struct?: SystemLogfetchClientprofileDeviceFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    adom: cdktf.stringToTerraform(struct!.adom),
    device: cdktf.stringToTerraform(struct!.device),
    id: cdktf.numberToTerraform(struct!.id),
    vdom: cdktf.stringToTerraform(struct!.vdom),
  }
}


export function systemLogfetchClientprofileDeviceFilterToHclTerraform(struct?: SystemLogfetchClientprofileDeviceFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    adom: {
      value: cdktf.stringToHclTerraform(struct!.adom),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    device: {
      value: cdktf.stringToHclTerraform(struct!.device),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktf.numberToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    vdom: {
      value: cdktf.stringToHclTerraform(struct!.vdom),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemLogfetchClientprofileDeviceFilterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SystemLogfetchClientprofileDeviceFilter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._adom !== undefined) {
      hasAnyValues = true;
      internalValueResult.adom = this._adom;
    }
    if (this._device !== undefined) {
      hasAnyValues = true;
      internalValueResult.device = this._device;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._vdom !== undefined) {
      hasAnyValues = true;
      internalValueResult.vdom = this._vdom;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemLogfetchClientprofileDeviceFilter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._adom = undefined;
      this._device = undefined;
      this._id = undefined;
      this._vdom = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._adom = value.adom;
      this._device = value.device;
      this._id = value.id;
      this._vdom = value.vdom;
    }
  }

  // adom - computed: true, optional: true, required: false
  private _adom?: string; 
  public get adom() {
    return this.getStringAttribute('adom');
  }
  public set adom(value: string) {
    this._adom = value;
  }
  public resetAdom() {
    this._adom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adomInput() {
    return this._adom;
  }

  // device - computed: true, optional: true, required: false
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

  // id - computed: false, optional: true, required: false
  private _id?: number; 
  public get id() {
    return this.getNumberAttribute('id');
  }
  public set id(value: number) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // vdom - computed: true, optional: true, required: false
  private _vdom?: string; 
  public get vdom() {
    return this.getStringAttribute('vdom');
  }
  public set vdom(value: string) {
    this._vdom = value;
  }
  public resetVdom() {
    this._vdom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vdomInput() {
    return this._vdom;
  }
}

export class SystemLogfetchClientprofileDeviceFilterList extends cdktf.ComplexList {
  public internalValue? : SystemLogfetchClientprofileDeviceFilter[] | cdktf.IResolvable

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
  public get(index: number): SystemLogfetchClientprofileDeviceFilterOutputReference {
    return new SystemLogfetchClientprofileDeviceFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SystemLogfetchClientprofileLogFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_logfetch_clientprofile#field SystemLogfetchClientprofile#field}
  */
  readonly field?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_logfetch_clientprofile#id SystemLogfetchClientprofile#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_logfetch_clientprofile#oper SystemLogfetchClientprofile#oper}
  */
  readonly oper?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_logfetch_clientprofile#value SystemLogfetchClientprofile#value}
  */
  readonly value?: string;
}

export function systemLogfetchClientprofileLogFilterToTerraform(struct?: SystemLogfetchClientprofileLogFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    field: cdktf.stringToTerraform(struct!.field),
    id: cdktf.numberToTerraform(struct!.id),
    oper: cdktf.stringToTerraform(struct!.oper),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function systemLogfetchClientprofileLogFilterToHclTerraform(struct?: SystemLogfetchClientprofileLogFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    field: {
      value: cdktf.stringToHclTerraform(struct!.field),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktf.numberToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    oper: {
      value: cdktf.stringToHclTerraform(struct!.oper),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemLogfetchClientprofileLogFilterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SystemLogfetchClientprofileLogFilter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._field !== undefined) {
      hasAnyValues = true;
      internalValueResult.field = this._field;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._oper !== undefined) {
      hasAnyValues = true;
      internalValueResult.oper = this._oper;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemLogfetchClientprofileLogFilter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._field = undefined;
      this._id = undefined;
      this._oper = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._field = value.field;
      this._id = value.id;
      this._oper = value.oper;
      this._value = value.value;
    }
  }

  // field - computed: false, optional: true, required: false
  private _field?: string; 
  public get field() {
    return this.getStringAttribute('field');
  }
  public set field(value: string) {
    this._field = value;
  }
  public resetField() {
    this._field = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldInput() {
    return this._field;
  }

  // id - computed: false, optional: true, required: false
  private _id?: number; 
  public get id() {
    return this.getNumberAttribute('id');
  }
  public set id(value: number) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // oper - computed: true, optional: true, required: false
  private _oper?: string; 
  public get oper() {
    return this.getStringAttribute('oper');
  }
  public set oper(value: string) {
    this._oper = value;
  }
  public resetOper() {
    this._oper = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operInput() {
    return this._oper;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class SystemLogfetchClientprofileLogFilterList extends cdktf.ComplexList {
  public internalValue? : SystemLogfetchClientprofileLogFilter[] | cdktf.IResolvable

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
  public get(index: number): SystemLogfetchClientprofileLogFilterOutputReference {
    return new SystemLogfetchClientprofileLogFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_logfetch_clientprofile fortimanager_system_logfetch_clientprofile}
*/
export class SystemLogfetchClientprofile extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortimanager_system_logfetch_clientprofile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SystemLogfetchClientprofile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SystemLogfetchClientprofile to import
  * @param importFromId The id of the existing SystemLogfetchClientprofile that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_logfetch_clientprofile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SystemLogfetchClientprofile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortimanager_system_logfetch_clientprofile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_logfetch_clientprofile fortimanager_system_logfetch_clientprofile} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SystemLogfetchClientprofileConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SystemLogfetchClientprofileConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fortimanager_system_logfetch_clientprofile',
      terraformGeneratorMetadata: {
        providerName: 'fortimanager',
        providerVersion: '1.14.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._clientAdom = config.clientAdom;
    this._dataRange = config.dataRange;
    this._dataRangeValue = config.dataRangeValue;
    this._dynamicSortSubtable = config.dynamicSortSubtable;
    this._endTime = config.endTime;
    this._fosid = config.fosid;
    this._id = config.id;
    this._indexFetchLogs = config.indexFetchLogs;
    this._logFilterLogic = config.logFilterLogic;
    this._logFilterStatus = config.logFilterStatus;
    this._name = config.name;
    this._password = config.password;
    this._peerCertCn = config.peerCertCn;
    this._secureConnection = config.secureConnection;
    this._serverAdom = config.serverAdom;
    this._serverIp = config.serverIp;
    this._startTime = config.startTime;
    this._syncAdomConfig = config.syncAdomConfig;
    this._user = config.user;
    this._deviceFilter.internalValue = config.deviceFilter;
    this._logFilter.internalValue = config.logFilter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // client_adom - computed: false, optional: true, required: false
  private _clientAdom?: string; 
  public get clientAdom() {
    return this.getStringAttribute('client_adom');
  }
  public set clientAdom(value: string) {
    this._clientAdom = value;
  }
  public resetClientAdom() {
    this._clientAdom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientAdomInput() {
    return this._clientAdom;
  }

  // data_range - computed: true, optional: true, required: false
  private _dataRange?: string; 
  public get dataRange() {
    return this.getStringAttribute('data_range');
  }
  public set dataRange(value: string) {
    this._dataRange = value;
  }
  public resetDataRange() {
    this._dataRange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataRangeInput() {
    return this._dataRange;
  }

  // data_range_value - computed: true, optional: true, required: false
  private _dataRangeValue?: number; 
  public get dataRangeValue() {
    return this.getNumberAttribute('data_range_value');
  }
  public set dataRangeValue(value: number) {
    this._dataRangeValue = value;
  }
  public resetDataRangeValue() {
    this._dataRangeValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataRangeValueInput() {
    return this._dataRangeValue;
  }

  // dynamic_sort_subtable - computed: false, optional: true, required: false
  private _dynamicSortSubtable?: string; 
  public get dynamicSortSubtable() {
    return this.getStringAttribute('dynamic_sort_subtable');
  }
  public set dynamicSortSubtable(value: string) {
    this._dynamicSortSubtable = value;
  }
  public resetDynamicSortSubtable() {
    this._dynamicSortSubtable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamicSortSubtableInput() {
    return this._dynamicSortSubtable;
  }

  // end_time - computed: true, optional: true, required: false
  private _endTime?: string[]; 
  public get endTime() {
    return cdktf.Fn.tolist(this.getListAttribute('end_time'));
  }
  public set endTime(value: string[]) {
    this._endTime = value;
  }
  public resetEndTime() {
    this._endTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endTimeInput() {
    return this._endTime;
  }

  // fosid - computed: false, optional: true, required: false
  private _fosid?: number; 
  public get fosid() {
    return this.getNumberAttribute('fosid');
  }
  public set fosid(value: number) {
    this._fosid = value;
  }
  public resetFosid() {
    this._fosid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fosidInput() {
    return this._fosid;
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

  // index_fetch_logs - computed: true, optional: true, required: false
  private _indexFetchLogs?: string; 
  public get indexFetchLogs() {
    return this.getStringAttribute('index_fetch_logs');
  }
  public set indexFetchLogs(value: string) {
    this._indexFetchLogs = value;
  }
  public resetIndexFetchLogs() {
    this._indexFetchLogs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get indexFetchLogsInput() {
    return this._indexFetchLogs;
  }

  // log_filter_logic - computed: true, optional: true, required: false
  private _logFilterLogic?: string; 
  public get logFilterLogic() {
    return this.getStringAttribute('log_filter_logic');
  }
  public set logFilterLogic(value: string) {
    this._logFilterLogic = value;
  }
  public resetLogFilterLogic() {
    this._logFilterLogic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logFilterLogicInput() {
    return this._logFilterLogic;
  }

  // log_filter_status - computed: true, optional: true, required: false
  private _logFilterStatus?: string; 
  public get logFilterStatus() {
    return this.getStringAttribute('log_filter_status');
  }
  public set logFilterStatus(value: string) {
    this._logFilterStatus = value;
  }
  public resetLogFilterStatus() {
    this._logFilterStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logFilterStatusInput() {
    return this._logFilterStatus;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // password - computed: true, optional: true, required: false
  private _password?: string[]; 
  public get password() {
    return cdktf.Fn.tolist(this.getListAttribute('password'));
  }
  public set password(value: string[]) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // peer_cert_cn - computed: false, optional: true, required: false
  private _peerCertCn?: string; 
  public get peerCertCn() {
    return this.getStringAttribute('peer_cert_cn');
  }
  public set peerCertCn(value: string) {
    this._peerCertCn = value;
  }
  public resetPeerCertCn() {
    this._peerCertCn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peerCertCnInput() {
    return this._peerCertCn;
  }

  // secure_connection - computed: true, optional: true, required: false
  private _secureConnection?: string; 
  public get secureConnection() {
    return this.getStringAttribute('secure_connection');
  }
  public set secureConnection(value: string) {
    this._secureConnection = value;
  }
  public resetSecureConnection() {
    this._secureConnection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secureConnectionInput() {
    return this._secureConnection;
  }

  // server_adom - computed: false, optional: true, required: false
  private _serverAdom?: string; 
  public get serverAdom() {
    return this.getStringAttribute('server_adom');
  }
  public set serverAdom(value: string) {
    this._serverAdom = value;
  }
  public resetServerAdom() {
    this._serverAdom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverAdomInput() {
    return this._serverAdom;
  }

  // server_ip - computed: true, optional: true, required: false
  private _serverIp?: string; 
  public get serverIp() {
    return this.getStringAttribute('server_ip');
  }
  public set serverIp(value: string) {
    this._serverIp = value;
  }
  public resetServerIp() {
    this._serverIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverIpInput() {
    return this._serverIp;
  }

  // start_time - computed: true, optional: true, required: false
  private _startTime?: string[]; 
  public get startTime() {
    return cdktf.Fn.tolist(this.getListAttribute('start_time'));
  }
  public set startTime(value: string[]) {
    this._startTime = value;
  }
  public resetStartTime() {
    this._startTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startTimeInput() {
    return this._startTime;
  }

  // sync_adom_config - computed: true, optional: true, required: false
  private _syncAdomConfig?: string; 
  public get syncAdomConfig() {
    return this.getStringAttribute('sync_adom_config');
  }
  public set syncAdomConfig(value: string) {
    this._syncAdomConfig = value;
  }
  public resetSyncAdomConfig() {
    this._syncAdomConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncAdomConfigInput() {
    return this._syncAdomConfig;
  }

  // user - computed: false, optional: true, required: false
  private _user?: string; 
  public get user() {
    return this.getStringAttribute('user');
  }
  public set user(value: string) {
    this._user = value;
  }
  public resetUser() {
    this._user = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userInput() {
    return this._user;
  }

  // device_filter - computed: false, optional: true, required: false
  private _deviceFilter = new SystemLogfetchClientprofileDeviceFilterList(this, "device_filter", false);
  public get deviceFilter() {
    return this._deviceFilter;
  }
  public putDeviceFilter(value: SystemLogfetchClientprofileDeviceFilter[] | cdktf.IResolvable) {
    this._deviceFilter.internalValue = value;
  }
  public resetDeviceFilter() {
    this._deviceFilter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceFilterInput() {
    return this._deviceFilter.internalValue;
  }

  // log_filter - computed: false, optional: true, required: false
  private _logFilter = new SystemLogfetchClientprofileLogFilterList(this, "log_filter", false);
  public get logFilter() {
    return this._logFilter;
  }
  public putLogFilter(value: SystemLogfetchClientprofileLogFilter[] | cdktf.IResolvable) {
    this._logFilter.internalValue = value;
  }
  public resetLogFilter() {
    this._logFilter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logFilterInput() {
    return this._logFilter.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      client_adom: cdktf.stringToTerraform(this._clientAdom),
      data_range: cdktf.stringToTerraform(this._dataRange),
      data_range_value: cdktf.numberToTerraform(this._dataRangeValue),
      dynamic_sort_subtable: cdktf.stringToTerraform(this._dynamicSortSubtable),
      end_time: cdktf.listMapper(cdktf.stringToTerraform, false)(this._endTime),
      fosid: cdktf.numberToTerraform(this._fosid),
      id: cdktf.stringToTerraform(this._id),
      index_fetch_logs: cdktf.stringToTerraform(this._indexFetchLogs),
      log_filter_logic: cdktf.stringToTerraform(this._logFilterLogic),
      log_filter_status: cdktf.stringToTerraform(this._logFilterStatus),
      name: cdktf.stringToTerraform(this._name),
      password: cdktf.listMapper(cdktf.stringToTerraform, false)(this._password),
      peer_cert_cn: cdktf.stringToTerraform(this._peerCertCn),
      secure_connection: cdktf.stringToTerraform(this._secureConnection),
      server_adom: cdktf.stringToTerraform(this._serverAdom),
      server_ip: cdktf.stringToTerraform(this._serverIp),
      start_time: cdktf.listMapper(cdktf.stringToTerraform, false)(this._startTime),
      sync_adom_config: cdktf.stringToTerraform(this._syncAdomConfig),
      user: cdktf.stringToTerraform(this._user),
      device_filter: cdktf.listMapper(systemLogfetchClientprofileDeviceFilterToTerraform, true)(this._deviceFilter.internalValue),
      log_filter: cdktf.listMapper(systemLogfetchClientprofileLogFilterToTerraform, true)(this._logFilter.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      client_adom: {
        value: cdktf.stringToHclTerraform(this._clientAdom),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      data_range: {
        value: cdktf.stringToHclTerraform(this._dataRange),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      data_range_value: {
        value: cdktf.numberToHclTerraform(this._dataRangeValue),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      dynamic_sort_subtable: {
        value: cdktf.stringToHclTerraform(this._dynamicSortSubtable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      end_time: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._endTime),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      fosid: {
        value: cdktf.numberToHclTerraform(this._fosid),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      index_fetch_logs: {
        value: cdktf.stringToHclTerraform(this._indexFetchLogs),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      log_filter_logic: {
        value: cdktf.stringToHclTerraform(this._logFilterLogic),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      log_filter_status: {
        value: cdktf.stringToHclTerraform(this._logFilterStatus),
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
      password: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._password),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      peer_cert_cn: {
        value: cdktf.stringToHclTerraform(this._peerCertCn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      secure_connection: {
        value: cdktf.stringToHclTerraform(this._secureConnection),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      server_adom: {
        value: cdktf.stringToHclTerraform(this._serverAdom),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      server_ip: {
        value: cdktf.stringToHclTerraform(this._serverIp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      start_time: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._startTime),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      sync_adom_config: {
        value: cdktf.stringToHclTerraform(this._syncAdomConfig),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user: {
        value: cdktf.stringToHclTerraform(this._user),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      device_filter: {
        value: cdktf.listMapperHcl(systemLogfetchClientprofileDeviceFilterToHclTerraform, true)(this._deviceFilter.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SystemLogfetchClientprofileDeviceFilterList",
      },
      log_filter: {
        value: cdktf.listMapperHcl(systemLogfetchClientprofileLogFilterToHclTerraform, true)(this._logFilter.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SystemLogfetchClientprofileLogFilterList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
