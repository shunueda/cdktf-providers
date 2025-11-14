// https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/system_ntp
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SystemNtpConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/system_ntp#dynamic_sort_subtable SystemNtp#dynamic_sort_subtable}
  */
  readonly dynamicSortSubtable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/system_ntp#id SystemNtp#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/system_ntp#status SystemNtp#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/system_ntp#sync_interval SystemNtp#sync_interval}
  */
  readonly syncInterval?: number;
  /**
  * ntpserver block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/system_ntp#ntpserver SystemNtp#ntpserver}
  */
  readonly ntpserver?: SystemNtpNtpserver[] | cdktf.IResolvable;
}
export interface SystemNtpNtpserver {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/system_ntp#authentication SystemNtp#authentication}
  */
  readonly authentication?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/system_ntp#id SystemNtp#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/system_ntp#key SystemNtp#key}
  */
  readonly key?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/system_ntp#key_id SystemNtp#key_id}
  */
  readonly keyId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/system_ntp#maxpoll SystemNtp#maxpoll}
  */
  readonly maxpoll?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/system_ntp#minpoll SystemNtp#minpoll}
  */
  readonly minpoll?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/system_ntp#ntpv3 SystemNtp#ntpv3}
  */
  readonly ntpv3?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/system_ntp#server SystemNtp#server}
  */
  readonly server?: string;
}

export function systemNtpNtpserverToTerraform(struct?: SystemNtpNtpserver | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    authentication: cdktf.stringToTerraform(struct!.authentication),
    id: cdktf.numberToTerraform(struct!.id),
    key: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.key),
    key_id: cdktf.numberToTerraform(struct!.keyId),
    maxpoll: cdktf.numberToTerraform(struct!.maxpoll),
    minpoll: cdktf.numberToTerraform(struct!.minpoll),
    ntpv3: cdktf.stringToTerraform(struct!.ntpv3),
    server: cdktf.stringToTerraform(struct!.server),
  }
}


export function systemNtpNtpserverToHclTerraform(struct?: SystemNtpNtpserver | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    authentication: {
      value: cdktf.stringToHclTerraform(struct!.authentication),
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
    key: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.key),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    key_id: {
      value: cdktf.numberToHclTerraform(struct!.keyId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    maxpoll: {
      value: cdktf.numberToHclTerraform(struct!.maxpoll),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    minpoll: {
      value: cdktf.numberToHclTerraform(struct!.minpoll),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ntpv3: {
      value: cdktf.stringToHclTerraform(struct!.ntpv3),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    server: {
      value: cdktf.stringToHclTerraform(struct!.server),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemNtpNtpserverOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SystemNtpNtpserver | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authentication !== undefined) {
      hasAnyValues = true;
      internalValueResult.authentication = this._authentication;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._keyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyId = this._keyId;
    }
    if (this._maxpoll !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxpoll = this._maxpoll;
    }
    if (this._minpoll !== undefined) {
      hasAnyValues = true;
      internalValueResult.minpoll = this._minpoll;
    }
    if (this._ntpv3 !== undefined) {
      hasAnyValues = true;
      internalValueResult.ntpv3 = this._ntpv3;
    }
    if (this._server !== undefined) {
      hasAnyValues = true;
      internalValueResult.server = this._server;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemNtpNtpserver | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._authentication = undefined;
      this._id = undefined;
      this._key = undefined;
      this._keyId = undefined;
      this._maxpoll = undefined;
      this._minpoll = undefined;
      this._ntpv3 = undefined;
      this._server = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._authentication = value.authentication;
      this._id = value.id;
      this._key = value.key;
      this._keyId = value.keyId;
      this._maxpoll = value.maxpoll;
      this._minpoll = value.minpoll;
      this._ntpv3 = value.ntpv3;
      this._server = value.server;
    }
  }

  // authentication - computed: true, optional: true, required: false
  private _authentication?: string; 
  public get authentication() {
    return this.getStringAttribute('authentication');
  }
  public set authentication(value: string) {
    this._authentication = value;
  }
  public resetAuthentication() {
    this._authentication = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationInput() {
    return this._authentication;
  }

  // id - computed: true, optional: true, required: false
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

  // key - computed: true, optional: true, required: false
  private _key?: string[]; 
  public get key() {
    return cdktf.Fn.tolist(this.getListAttribute('key'));
  }
  public set key(value: string[]) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // key_id - computed: false, optional: true, required: false
  private _keyId?: number; 
  public get keyId() {
    return this.getNumberAttribute('key_id');
  }
  public set keyId(value: number) {
    this._keyId = value;
  }
  public resetKeyId() {
    this._keyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyIdInput() {
    return this._keyId;
  }

  // maxpoll - computed: true, optional: true, required: false
  private _maxpoll?: number; 
  public get maxpoll() {
    return this.getNumberAttribute('maxpoll');
  }
  public set maxpoll(value: number) {
    this._maxpoll = value;
  }
  public resetMaxpoll() {
    this._maxpoll = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxpollInput() {
    return this._maxpoll;
  }

  // minpoll - computed: true, optional: true, required: false
  private _minpoll?: number; 
  public get minpoll() {
    return this.getNumberAttribute('minpoll');
  }
  public set minpoll(value: number) {
    this._minpoll = value;
  }
  public resetMinpoll() {
    this._minpoll = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minpollInput() {
    return this._minpoll;
  }

  // ntpv3 - computed: true, optional: true, required: false
  private _ntpv3?: string; 
  public get ntpv3() {
    return this.getStringAttribute('ntpv3');
  }
  public set ntpv3(value: string) {
    this._ntpv3 = value;
  }
  public resetNtpv3() {
    this._ntpv3 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ntpv3Input() {
    return this._ntpv3;
  }

  // server - computed: false, optional: true, required: false
  private _server?: string; 
  public get server() {
    return this.getStringAttribute('server');
  }
  public set server(value: string) {
    this._server = value;
  }
  public resetServer() {
    this._server = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverInput() {
    return this._server;
  }
}

export class SystemNtpNtpserverList extends cdktf.ComplexList {
  public internalValue? : SystemNtpNtpserver[] | cdktf.IResolvable

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
  public get(index: number): SystemNtpNtpserverOutputReference {
    return new SystemNtpNtpserverOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/system_ntp fortimanager_system_ntp}
*/
export class SystemNtp extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortimanager_system_ntp";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SystemNtp resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SystemNtp to import
  * @param importFromId The id of the existing SystemNtp that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/system_ntp#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SystemNtp to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortimanager_system_ntp", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/system_ntp fortimanager_system_ntp} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SystemNtpConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SystemNtpConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fortimanager_system_ntp',
      terraformGeneratorMetadata: {
        providerName: 'fortimanager',
        providerVersion: '1.15.0',
        providerVersionConstraint: '1.15.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._dynamicSortSubtable = config.dynamicSortSubtable;
    this._id = config.id;
    this._status = config.status;
    this._syncInterval = config.syncInterval;
    this._ntpserver.internalValue = config.ntpserver;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // status - computed: true, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // sync_interval - computed: true, optional: true, required: false
  private _syncInterval?: number; 
  public get syncInterval() {
    return this.getNumberAttribute('sync_interval');
  }
  public set syncInterval(value: number) {
    this._syncInterval = value;
  }
  public resetSyncInterval() {
    this._syncInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncIntervalInput() {
    return this._syncInterval;
  }

  // ntpserver - computed: false, optional: true, required: false
  private _ntpserver = new SystemNtpNtpserverList(this, "ntpserver", false);
  public get ntpserver() {
    return this._ntpserver;
  }
  public putNtpserver(value: SystemNtpNtpserver[] | cdktf.IResolvable) {
    this._ntpserver.internalValue = value;
  }
  public resetNtpserver() {
    this._ntpserver.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ntpserverInput() {
    return this._ntpserver.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      dynamic_sort_subtable: cdktf.stringToTerraform(this._dynamicSortSubtable),
      id: cdktf.stringToTerraform(this._id),
      status: cdktf.stringToTerraform(this._status),
      sync_interval: cdktf.numberToTerraform(this._syncInterval),
      ntpserver: cdktf.listMapper(systemNtpNtpserverToTerraform, true)(this._ntpserver.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      dynamic_sort_subtable: {
        value: cdktf.stringToHclTerraform(this._dynamicSortSubtable),
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
      status: {
        value: cdktf.stringToHclTerraform(this._status),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sync_interval: {
        value: cdktf.numberToHclTerraform(this._syncInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ntpserver: {
        value: cdktf.listMapperHcl(systemNtpNtpserverToHclTerraform, true)(this._ntpserver.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SystemNtpNtpserverList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
