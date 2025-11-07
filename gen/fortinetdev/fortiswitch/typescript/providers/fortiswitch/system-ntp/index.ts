// https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_ntp
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SystemNtpConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_ntp#allow_unsync_source SystemNtp#allow_unsync_source}
  */
  readonly allowUnsyncSource?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_ntp#authentication SystemNtp#authentication}
  */
  readonly authentication?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_ntp#dynamic_sort_subtable SystemNtp#dynamic_sort_subtable}
  */
  readonly dynamicSortSubtable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_ntp#id SystemNtp#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_ntp#key SystemNtp#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_ntp#key_id SystemNtp#key_id}
  */
  readonly keyId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_ntp#key_type SystemNtp#key_type}
  */
  readonly keyType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_ntp#log_time_adjustments SystemNtp#log_time_adjustments}
  */
  readonly logTimeAdjustments?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_ntp#ntpsync SystemNtp#ntpsync}
  */
  readonly ntpsync?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_ntp#server_mode SystemNtp#server_mode}
  */
  readonly serverMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_ntp#source_ip SystemNtp#source_ip}
  */
  readonly sourceIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_ntp#source_ip6 SystemNtp#source_ip6}
  */
  readonly sourceIp6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_ntp#syncinterval SystemNtp#syncinterval}
  */
  readonly syncinterval?: number;
  /**
  * interface block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_ntp#interface SystemNtp#interface}
  */
  readonly interface?: SystemNtpInterface[] | cdktf.IResolvable;
  /**
  * ntpserver block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_ntp#ntpserver SystemNtp#ntpserver}
  */
  readonly ntpserver?: SystemNtpNtpserver[] | cdktf.IResolvable;
}
export interface SystemNtpInterface {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_ntp#interface_name SystemNtp#interface_name}
  */
  readonly interfaceName?: string;
}

export function systemNtpInterfaceToTerraform(struct?: SystemNtpInterface | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    interface_name: cdktf.stringToTerraform(struct!.interfaceName),
  }
}


export function systemNtpInterfaceToHclTerraform(struct?: SystemNtpInterface | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    interface_name: {
      value: cdktf.stringToHclTerraform(struct!.interfaceName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemNtpInterfaceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SystemNtpInterface | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._interfaceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.interfaceName = this._interfaceName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemNtpInterface | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._interfaceName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._interfaceName = value.interfaceName;
    }
  }

  // interface_name - computed: true, optional: true, required: false
  private _interfaceName?: string; 
  public get interfaceName() {
    return this.getStringAttribute('interface_name');
  }
  public set interfaceName(value: string) {
    this._interfaceName = value;
  }
  public resetInterfaceName() {
    this._interfaceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceNameInput() {
    return this._interfaceName;
  }
}

export class SystemNtpInterfaceList extends cdktf.ComplexList {
  public internalValue? : SystemNtpInterface[] | cdktf.IResolvable

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
  public get(index: number): SystemNtpInterfaceOutputReference {
    return new SystemNtpInterfaceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SystemNtpNtpserver {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_ntp#authentication SystemNtp#authentication}
  */
  readonly authentication?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_ntp#id SystemNtp#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_ntp#key SystemNtp#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_ntp#key_id SystemNtp#key_id}
  */
  readonly keyId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_ntp#ntpv3 SystemNtp#ntpv3}
  */
  readonly ntpv3?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_ntp#server SystemNtp#server}
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
    key: cdktf.stringToTerraform(struct!.key),
    key_id: cdktf.numberToTerraform(struct!.keyId),
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
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key_id: {
      value: cdktf.numberToHclTerraform(struct!.keyId),
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

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // key_id - computed: true, optional: true, required: false
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

  // server - computed: true, optional: true, required: false
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
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_ntp fortiswitch_system_ntp}
*/
export class SystemNtp extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortiswitch_system_ntp";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SystemNtp resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SystemNtp to import
  * @param importFromId The id of the existing SystemNtp that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_ntp#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SystemNtp to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortiswitch_system_ntp", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_ntp fortiswitch_system_ntp} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SystemNtpConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SystemNtpConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fortiswitch_system_ntp',
      terraformGeneratorMetadata: {
        providerName: 'fortiswitch',
        providerVersion: '1.1.6'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._allowUnsyncSource = config.allowUnsyncSource;
    this._authentication = config.authentication;
    this._dynamicSortSubtable = config.dynamicSortSubtable;
    this._id = config.id;
    this._key = config.key;
    this._keyId = config.keyId;
    this._keyType = config.keyType;
    this._logTimeAdjustments = config.logTimeAdjustments;
    this._ntpsync = config.ntpsync;
    this._serverMode = config.serverMode;
    this._sourceIp = config.sourceIp;
    this._sourceIp6 = config.sourceIp6;
    this._syncinterval = config.syncinterval;
    this._interface.internalValue = config.interface;
    this._ntpserver.internalValue = config.ntpserver;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allow_unsync_source - computed: true, optional: true, required: false
  private _allowUnsyncSource?: string; 
  public get allowUnsyncSource() {
    return this.getStringAttribute('allow_unsync_source');
  }
  public set allowUnsyncSource(value: string) {
    this._allowUnsyncSource = value;
  }
  public resetAllowUnsyncSource() {
    this._allowUnsyncSource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowUnsyncSourceInput() {
    return this._allowUnsyncSource;
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

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // key_id - computed: true, optional: true, required: false
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

  // key_type - computed: true, optional: true, required: false
  private _keyType?: string; 
  public get keyType() {
    return this.getStringAttribute('key_type');
  }
  public set keyType(value: string) {
    this._keyType = value;
  }
  public resetKeyType() {
    this._keyType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyTypeInput() {
    return this._keyType;
  }

  // log_time_adjustments - computed: true, optional: true, required: false
  private _logTimeAdjustments?: string; 
  public get logTimeAdjustments() {
    return this.getStringAttribute('log_time_adjustments');
  }
  public set logTimeAdjustments(value: string) {
    this._logTimeAdjustments = value;
  }
  public resetLogTimeAdjustments() {
    this._logTimeAdjustments = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logTimeAdjustmentsInput() {
    return this._logTimeAdjustments;
  }

  // ntpsync - computed: true, optional: true, required: false
  private _ntpsync?: string; 
  public get ntpsync() {
    return this.getStringAttribute('ntpsync');
  }
  public set ntpsync(value: string) {
    this._ntpsync = value;
  }
  public resetNtpsync() {
    this._ntpsync = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ntpsyncInput() {
    return this._ntpsync;
  }

  // server_mode - computed: true, optional: true, required: false
  private _serverMode?: string; 
  public get serverMode() {
    return this.getStringAttribute('server_mode');
  }
  public set serverMode(value: string) {
    this._serverMode = value;
  }
  public resetServerMode() {
    this._serverMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverModeInput() {
    return this._serverMode;
  }

  // source_ip - computed: true, optional: true, required: false
  private _sourceIp?: string; 
  public get sourceIp() {
    return this.getStringAttribute('source_ip');
  }
  public set sourceIp(value: string) {
    this._sourceIp = value;
  }
  public resetSourceIp() {
    this._sourceIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceIpInput() {
    return this._sourceIp;
  }

  // source_ip6 - computed: true, optional: true, required: false
  private _sourceIp6?: string; 
  public get sourceIp6() {
    return this.getStringAttribute('source_ip6');
  }
  public set sourceIp6(value: string) {
    this._sourceIp6 = value;
  }
  public resetSourceIp6() {
    this._sourceIp6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceIp6Input() {
    return this._sourceIp6;
  }

  // syncinterval - computed: true, optional: true, required: false
  private _syncinterval?: number; 
  public get syncinterval() {
    return this.getNumberAttribute('syncinterval');
  }
  public set syncinterval(value: number) {
    this._syncinterval = value;
  }
  public resetSyncinterval() {
    this._syncinterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncintervalInput() {
    return this._syncinterval;
  }

  // interface - computed: false, optional: true, required: false
  private _interface = new SystemNtpInterfaceList(this, "interface", false);
  public get interface() {
    return this._interface;
  }
  public putInterface(value: SystemNtpInterface[] | cdktf.IResolvable) {
    this._interface.internalValue = value;
  }
  public resetInterface() {
    this._interface.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceInput() {
    return this._interface.internalValue;
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
      allow_unsync_source: cdktf.stringToTerraform(this._allowUnsyncSource),
      authentication: cdktf.stringToTerraform(this._authentication),
      dynamic_sort_subtable: cdktf.stringToTerraform(this._dynamicSortSubtable),
      id: cdktf.stringToTerraform(this._id),
      key: cdktf.stringToTerraform(this._key),
      key_id: cdktf.numberToTerraform(this._keyId),
      key_type: cdktf.stringToTerraform(this._keyType),
      log_time_adjustments: cdktf.stringToTerraform(this._logTimeAdjustments),
      ntpsync: cdktf.stringToTerraform(this._ntpsync),
      server_mode: cdktf.stringToTerraform(this._serverMode),
      source_ip: cdktf.stringToTerraform(this._sourceIp),
      source_ip6: cdktf.stringToTerraform(this._sourceIp6),
      syncinterval: cdktf.numberToTerraform(this._syncinterval),
      interface: cdktf.listMapper(systemNtpInterfaceToTerraform, true)(this._interface.internalValue),
      ntpserver: cdktf.listMapper(systemNtpNtpserverToTerraform, true)(this._ntpserver.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      allow_unsync_source: {
        value: cdktf.stringToHclTerraform(this._allowUnsyncSource),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      authentication: {
        value: cdktf.stringToHclTerraform(this._authentication),
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
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      key: {
        value: cdktf.stringToHclTerraform(this._key),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      key_id: {
        value: cdktf.numberToHclTerraform(this._keyId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      key_type: {
        value: cdktf.stringToHclTerraform(this._keyType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      log_time_adjustments: {
        value: cdktf.stringToHclTerraform(this._logTimeAdjustments),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ntpsync: {
        value: cdktf.stringToHclTerraform(this._ntpsync),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      server_mode: {
        value: cdktf.stringToHclTerraform(this._serverMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source_ip: {
        value: cdktf.stringToHclTerraform(this._sourceIp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source_ip6: {
        value: cdktf.stringToHclTerraform(this._sourceIp6),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      syncinterval: {
        value: cdktf.numberToHclTerraform(this._syncinterval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      interface: {
        value: cdktf.listMapperHcl(systemNtpInterfaceToHclTerraform, true)(this._interface.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SystemNtpInterfaceList",
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
