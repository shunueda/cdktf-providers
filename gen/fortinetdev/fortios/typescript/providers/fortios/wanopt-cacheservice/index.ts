// https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wanopt_cacheservice
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WanoptCacheserviceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wanopt_cacheservice#acceptable_connections WanoptCacheservice#acceptable_connections}
  */
  readonly acceptableConnections?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wanopt_cacheservice#collaboration WanoptCacheservice#collaboration}
  */
  readonly collaboration?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wanopt_cacheservice#device_id WanoptCacheservice#device_id}
  */
  readonly deviceId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wanopt_cacheservice#dynamic_sort_subtable WanoptCacheservice#dynamic_sort_subtable}
  */
  readonly dynamicSortSubtable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wanopt_cacheservice#get_all_tables WanoptCacheservice#get_all_tables}
  */
  readonly fetchAllTables?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wanopt_cacheservice#id WanoptCacheservice#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wanopt_cacheservice#prefer_scenario WanoptCacheservice#prefer_scenario}
  */
  readonly preferScenario?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wanopt_cacheservice#vdomparam WanoptCacheservice#vdomparam}
  */
  readonly vdomparam?: string;
  /**
  * dst_peer block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wanopt_cacheservice#dst_peer WanoptCacheservice#dst_peer}
  */
  readonly dstPeer?: WanoptCacheserviceDstPeer[] | cdktf.IResolvable;
  /**
  * src_peer block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wanopt_cacheservice#src_peer WanoptCacheservice#src_peer}
  */
  readonly srcPeer?: WanoptCacheserviceSrcPeer[] | cdktf.IResolvable;
}
export interface WanoptCacheserviceDstPeer {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wanopt_cacheservice#auth_type WanoptCacheservice#auth_type}
  */
  readonly authType?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wanopt_cacheservice#device_id WanoptCacheservice#device_id}
  */
  readonly deviceId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wanopt_cacheservice#encode_type WanoptCacheservice#encode_type}
  */
  readonly encodeType?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wanopt_cacheservice#ip WanoptCacheservice#ip}
  */
  readonly ip?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wanopt_cacheservice#priority WanoptCacheservice#priority}
  */
  readonly priority?: number;
}

export function wanoptCacheserviceDstPeerToTerraform(struct?: WanoptCacheserviceDstPeer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auth_type: cdktf.numberToTerraform(struct!.authType),
    device_id: cdktf.stringToTerraform(struct!.deviceId),
    encode_type: cdktf.numberToTerraform(struct!.encodeType),
    ip: cdktf.stringToTerraform(struct!.ip),
    priority: cdktf.numberToTerraform(struct!.priority),
  }
}


export function wanoptCacheserviceDstPeerToHclTerraform(struct?: WanoptCacheserviceDstPeer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auth_type: {
      value: cdktf.numberToHclTerraform(struct!.authType),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    device_id: {
      value: cdktf.stringToHclTerraform(struct!.deviceId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    encode_type: {
      value: cdktf.numberToHclTerraform(struct!.encodeType),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ip: {
      value: cdktf.stringToHclTerraform(struct!.ip),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    priority: {
      value: cdktf.numberToHclTerraform(struct!.priority),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WanoptCacheserviceDstPeerOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WanoptCacheserviceDstPeer | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authType !== undefined) {
      hasAnyValues = true;
      internalValueResult.authType = this._authType;
    }
    if (this._deviceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.deviceId = this._deviceId;
    }
    if (this._encodeType !== undefined) {
      hasAnyValues = true;
      internalValueResult.encodeType = this._encodeType;
    }
    if (this._ip !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip = this._ip;
    }
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WanoptCacheserviceDstPeer | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._authType = undefined;
      this._deviceId = undefined;
      this._encodeType = undefined;
      this._ip = undefined;
      this._priority = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._authType = value.authType;
      this._deviceId = value.deviceId;
      this._encodeType = value.encodeType;
      this._ip = value.ip;
      this._priority = value.priority;
    }
  }

  // auth_type - computed: false, optional: true, required: false
  private _authType?: number; 
  public get authType() {
    return this.getNumberAttribute('auth_type');
  }
  public set authType(value: number) {
    this._authType = value;
  }
  public resetAuthType() {
    this._authType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authTypeInput() {
    return this._authType;
  }

  // device_id - computed: false, optional: true, required: false
  private _deviceId?: string; 
  public get deviceId() {
    return this.getStringAttribute('device_id');
  }
  public set deviceId(value: string) {
    this._deviceId = value;
  }
  public resetDeviceId() {
    this._deviceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceIdInput() {
    return this._deviceId;
  }

  // encode_type - computed: false, optional: true, required: false
  private _encodeType?: number; 
  public get encodeType() {
    return this.getNumberAttribute('encode_type');
  }
  public set encodeType(value: number) {
    this._encodeType = value;
  }
  public resetEncodeType() {
    this._encodeType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encodeTypeInput() {
    return this._encodeType;
  }

  // ip - computed: true, optional: true, required: false
  private _ip?: string; 
  public get ip() {
    return this.getStringAttribute('ip');
  }
  public set ip(value: string) {
    this._ip = value;
  }
  public resetIp() {
    this._ip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipInput() {
    return this._ip;
  }

  // priority - computed: true, optional: true, required: false
  private _priority?: number; 
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number) {
    this._priority = value;
  }
  public resetPriority() {
    this._priority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }
}

export class WanoptCacheserviceDstPeerList extends cdktf.ComplexList {
  public internalValue? : WanoptCacheserviceDstPeer[] | cdktf.IResolvable

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
  public get(index: number): WanoptCacheserviceDstPeerOutputReference {
    return new WanoptCacheserviceDstPeerOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WanoptCacheserviceSrcPeer {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wanopt_cacheservice#auth_type WanoptCacheservice#auth_type}
  */
  readonly authType?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wanopt_cacheservice#device_id WanoptCacheservice#device_id}
  */
  readonly deviceId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wanopt_cacheservice#encode_type WanoptCacheservice#encode_type}
  */
  readonly encodeType?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wanopt_cacheservice#ip WanoptCacheservice#ip}
  */
  readonly ip?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wanopt_cacheservice#priority WanoptCacheservice#priority}
  */
  readonly priority?: number;
}

export function wanoptCacheserviceSrcPeerToTerraform(struct?: WanoptCacheserviceSrcPeer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auth_type: cdktf.numberToTerraform(struct!.authType),
    device_id: cdktf.stringToTerraform(struct!.deviceId),
    encode_type: cdktf.numberToTerraform(struct!.encodeType),
    ip: cdktf.stringToTerraform(struct!.ip),
    priority: cdktf.numberToTerraform(struct!.priority),
  }
}


export function wanoptCacheserviceSrcPeerToHclTerraform(struct?: WanoptCacheserviceSrcPeer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auth_type: {
      value: cdktf.numberToHclTerraform(struct!.authType),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    device_id: {
      value: cdktf.stringToHclTerraform(struct!.deviceId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    encode_type: {
      value: cdktf.numberToHclTerraform(struct!.encodeType),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ip: {
      value: cdktf.stringToHclTerraform(struct!.ip),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    priority: {
      value: cdktf.numberToHclTerraform(struct!.priority),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WanoptCacheserviceSrcPeerOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WanoptCacheserviceSrcPeer | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authType !== undefined) {
      hasAnyValues = true;
      internalValueResult.authType = this._authType;
    }
    if (this._deviceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.deviceId = this._deviceId;
    }
    if (this._encodeType !== undefined) {
      hasAnyValues = true;
      internalValueResult.encodeType = this._encodeType;
    }
    if (this._ip !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip = this._ip;
    }
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WanoptCacheserviceSrcPeer | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._authType = undefined;
      this._deviceId = undefined;
      this._encodeType = undefined;
      this._ip = undefined;
      this._priority = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._authType = value.authType;
      this._deviceId = value.deviceId;
      this._encodeType = value.encodeType;
      this._ip = value.ip;
      this._priority = value.priority;
    }
  }

  // auth_type - computed: false, optional: true, required: false
  private _authType?: number; 
  public get authType() {
    return this.getNumberAttribute('auth_type');
  }
  public set authType(value: number) {
    this._authType = value;
  }
  public resetAuthType() {
    this._authType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authTypeInput() {
    return this._authType;
  }

  // device_id - computed: false, optional: true, required: false
  private _deviceId?: string; 
  public get deviceId() {
    return this.getStringAttribute('device_id');
  }
  public set deviceId(value: string) {
    this._deviceId = value;
  }
  public resetDeviceId() {
    this._deviceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceIdInput() {
    return this._deviceId;
  }

  // encode_type - computed: false, optional: true, required: false
  private _encodeType?: number; 
  public get encodeType() {
    return this.getNumberAttribute('encode_type');
  }
  public set encodeType(value: number) {
    this._encodeType = value;
  }
  public resetEncodeType() {
    this._encodeType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encodeTypeInput() {
    return this._encodeType;
  }

  // ip - computed: true, optional: true, required: false
  private _ip?: string; 
  public get ip() {
    return this.getStringAttribute('ip');
  }
  public set ip(value: string) {
    this._ip = value;
  }
  public resetIp() {
    this._ip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipInput() {
    return this._ip;
  }

  // priority - computed: true, optional: true, required: false
  private _priority?: number; 
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number) {
    this._priority = value;
  }
  public resetPriority() {
    this._priority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }
}

export class WanoptCacheserviceSrcPeerList extends cdktf.ComplexList {
  public internalValue? : WanoptCacheserviceSrcPeer[] | cdktf.IResolvable

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
  public get(index: number): WanoptCacheserviceSrcPeerOutputReference {
    return new WanoptCacheserviceSrcPeerOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wanopt_cacheservice fortios_wanopt_cacheservice}
*/
export class WanoptCacheservice extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortios_wanopt_cacheservice";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a WanoptCacheservice resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the WanoptCacheservice to import
  * @param importFromId The id of the existing WanoptCacheservice that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wanopt_cacheservice#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the WanoptCacheservice to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortios_wanopt_cacheservice", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wanopt_cacheservice fortios_wanopt_cacheservice} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WanoptCacheserviceConfig = {}
  */
  public constructor(scope: Construct, id: string, config: WanoptCacheserviceConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fortios_wanopt_cacheservice',
      terraformGeneratorMetadata: {
        providerName: 'fortios',
        providerVersion: '1.23.0',
        providerVersionConstraint: '1.23.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._acceptableConnections = config.acceptableConnections;
    this._collaboration = config.collaboration;
    this._deviceId = config.deviceId;
    this._dynamicSortSubtable = config.dynamicSortSubtable;
    this._getAllTables = config.fetchAllTables;
    this._id = config.id;
    this._preferScenario = config.preferScenario;
    this._vdomparam = config.vdomparam;
    this._dstPeer.internalValue = config.dstPeer;
    this._srcPeer.internalValue = config.srcPeer;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // acceptable_connections - computed: true, optional: true, required: false
  private _acceptableConnections?: string; 
  public get acceptableConnections() {
    return this.getStringAttribute('acceptable_connections');
  }
  public set acceptableConnections(value: string) {
    this._acceptableConnections = value;
  }
  public resetAcceptableConnections() {
    this._acceptableConnections = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acceptableConnectionsInput() {
    return this._acceptableConnections;
  }

  // collaboration - computed: true, optional: true, required: false
  private _collaboration?: string; 
  public get collaboration() {
    return this.getStringAttribute('collaboration');
  }
  public set collaboration(value: string) {
    this._collaboration = value;
  }
  public resetCollaboration() {
    this._collaboration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get collaborationInput() {
    return this._collaboration;
  }

  // device_id - computed: true, optional: true, required: false
  private _deviceId?: string; 
  public get deviceId() {
    return this.getStringAttribute('device_id');
  }
  public set deviceId(value: string) {
    this._deviceId = value;
  }
  public resetDeviceId() {
    this._deviceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceIdInput() {
    return this._deviceId;
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

  // get_all_tables - computed: false, optional: true, required: false
  private _getAllTables?: string; 
  public get fetchAllTables() {
    return this.getStringAttribute('get_all_tables');
  }
  public set fetchAllTables(value: string) {
    this._getAllTables = value;
  }
  public resetFetchAllTables() {
    this._getAllTables = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fetchAllTablesInput() {
    return this._getAllTables;
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

  // prefer_scenario - computed: true, optional: true, required: false
  private _preferScenario?: string; 
  public get preferScenario() {
    return this.getStringAttribute('prefer_scenario');
  }
  public set preferScenario(value: string) {
    this._preferScenario = value;
  }
  public resetPreferScenario() {
    this._preferScenario = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preferScenarioInput() {
    return this._preferScenario;
  }

  // vdomparam - computed: true, optional: true, required: false
  private _vdomparam?: string; 
  public get vdomparam() {
    return this.getStringAttribute('vdomparam');
  }
  public set vdomparam(value: string) {
    this._vdomparam = value;
  }
  public resetVdomparam() {
    this._vdomparam = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vdomparamInput() {
    return this._vdomparam;
  }

  // dst_peer - computed: false, optional: true, required: false
  private _dstPeer = new WanoptCacheserviceDstPeerList(this, "dst_peer", false);
  public get dstPeer() {
    return this._dstPeer;
  }
  public putDstPeer(value: WanoptCacheserviceDstPeer[] | cdktf.IResolvable) {
    this._dstPeer.internalValue = value;
  }
  public resetDstPeer() {
    this._dstPeer.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstPeerInput() {
    return this._dstPeer.internalValue;
  }

  // src_peer - computed: false, optional: true, required: false
  private _srcPeer = new WanoptCacheserviceSrcPeerList(this, "src_peer", false);
  public get srcPeer() {
    return this._srcPeer;
  }
  public putSrcPeer(value: WanoptCacheserviceSrcPeer[] | cdktf.IResolvable) {
    this._srcPeer.internalValue = value;
  }
  public resetSrcPeer() {
    this._srcPeer.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcPeerInput() {
    return this._srcPeer.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      acceptable_connections: cdktf.stringToTerraform(this._acceptableConnections),
      collaboration: cdktf.stringToTerraform(this._collaboration),
      device_id: cdktf.stringToTerraform(this._deviceId),
      dynamic_sort_subtable: cdktf.stringToTerraform(this._dynamicSortSubtable),
      get_all_tables: cdktf.stringToTerraform(this._getAllTables),
      id: cdktf.stringToTerraform(this._id),
      prefer_scenario: cdktf.stringToTerraform(this._preferScenario),
      vdomparam: cdktf.stringToTerraform(this._vdomparam),
      dst_peer: cdktf.listMapper(wanoptCacheserviceDstPeerToTerraform, true)(this._dstPeer.internalValue),
      src_peer: cdktf.listMapper(wanoptCacheserviceSrcPeerToTerraform, true)(this._srcPeer.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      acceptable_connections: {
        value: cdktf.stringToHclTerraform(this._acceptableConnections),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      collaboration: {
        value: cdktf.stringToHclTerraform(this._collaboration),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      device_id: {
        value: cdktf.stringToHclTerraform(this._deviceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dynamic_sort_subtable: {
        value: cdktf.stringToHclTerraform(this._dynamicSortSubtable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      get_all_tables: {
        value: cdktf.stringToHclTerraform(this._getAllTables),
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
      prefer_scenario: {
        value: cdktf.stringToHclTerraform(this._preferScenario),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vdomparam: {
        value: cdktf.stringToHclTerraform(this._vdomparam),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dst_peer: {
        value: cdktf.listMapperHcl(wanoptCacheserviceDstPeerToHclTerraform, true)(this._dstPeer.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "WanoptCacheserviceDstPeerList",
      },
      src_peer: {
        value: cdktf.listMapperHcl(wanoptCacheserviceSrcPeerToHclTerraform, true)(this._srcPeer.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "WanoptCacheserviceSrcPeerList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
