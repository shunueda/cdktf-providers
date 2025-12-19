// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/license_manager
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LicenseManagerConfig extends cdktf.TerraformMetaArguments {
  /**
  * Configure feature bandwidth base (Mb)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/license_manager#bandwidth_base LicenseManager#bandwidth_base}
  */
  readonly bandwidthBase?: number;
  /**
  * Set the bandwidth to maximum
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/license_manager#bandwidth_unrestricted LicenseManager#bandwidth_unrestricted}
  */
  readonly bandwidthUnrestricted?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/license_manager#id LicenseManager#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Configure instance name [format: (string).(string).(string).(string)]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/license_manager#instance_name LicenseManager#instance_name}
  */
  readonly instanceName?: string;
  /**
  * Configure interval profile (1 monthly, 2 daily, 3 hourly)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/license_manager#interval LicenseManager#interval}
  */
  readonly interval?: number;
  /**
  * serial number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/license_manager#sn LicenseManager#sn}
  */
  readonly sn?: string;
  /**
  * Use management port to connect license server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/license_manager#use_mgmt_port LicenseManager#use_mgmt_port}
  */
  readonly useMgmtPort?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/license_manager#uuid LicenseManager#uuid}
  */
  readonly uuid?: string;
  /**
  * connect block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/license_manager#connect LicenseManager#connect}
  */
  readonly connect?: LicenseManagerConnect;
  /**
  * host_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/license_manager#host_list LicenseManager#host_list}
  */
  readonly hostList?: LicenseManagerHostListStruct[] | cdktf.IResolvable;
  /**
  * ng_waf_module block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/license_manager#ng_waf_module LicenseManager#ng_waf_module}
  */
  readonly ngWafModule?: LicenseManagerNgWafModule;
  /**
  * overage block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/license_manager#overage LicenseManager#overage}
  */
  readonly overage?: LicenseManagerOverage;
  /**
  * reminder_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/license_manager#reminder_list LicenseManager#reminder_list}
  */
  readonly reminderList?: LicenseManagerReminderListStruct[] | cdktf.IResolvable;
}
export interface LicenseManagerConnect {
  /**
  * Connect to license manager to activate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/license_manager#connect LicenseManager#connect}
  */
  readonly connect?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/license_manager#uuid LicenseManager#uuid}
  */
  readonly uuid?: string;
}

export function licenseManagerConnectToTerraform(struct?: LicenseManagerConnectOutputReference | LicenseManagerConnect): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    connect: cdktf.numberToTerraform(struct!.connect),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function licenseManagerConnectToHclTerraform(struct?: LicenseManagerConnectOutputReference | LicenseManagerConnect): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    connect: {
      value: cdktf.numberToHclTerraform(struct!.connect),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LicenseManagerConnectOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LicenseManagerConnect | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._connect !== undefined) {
      hasAnyValues = true;
      internalValueResult.connect = this._connect;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LicenseManagerConnect | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._connect = undefined;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._connect = value.connect;
      this._uuid = value.uuid;
    }
  }

  // connect - computed: false, optional: true, required: false
  private _connect?: number; 
  public get connect() {
    return this.getNumberAttribute('connect');
  }
  public set connect(value: number) {
    this._connect = value;
  }
  public resetConnect() {
    this._connect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectInput() {
    return this._connect;
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }
}
export interface LicenseManagerHostListStruct {
  /**
  * license server ip address (length:1-31)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/license_manager#host_ipv4 LicenseManager#host_ipv4}
  */
  readonly hostIpv4: string;
  /**
  * Configure license manager server ipv6-address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/license_manager#host_ipv6 LicenseManager#host_ipv6}
  */
  readonly hostIpv6: string;
  /**
  * Configure the license manager port, default is 443
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/license_manager#port LicenseManager#port}
  */
  readonly port?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/license_manager#uuid LicenseManager#uuid}
  */
  readonly uuid?: string;
}

export function licenseManagerHostListStructToTerraform(struct?: LicenseManagerHostListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host_ipv4: cdktf.stringToTerraform(struct!.hostIpv4),
    host_ipv6: cdktf.stringToTerraform(struct!.hostIpv6),
    port: cdktf.numberToTerraform(struct!.port),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function licenseManagerHostListStructToHclTerraform(struct?: LicenseManagerHostListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    host_ipv4: {
      value: cdktf.stringToHclTerraform(struct!.hostIpv4),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    host_ipv6: {
      value: cdktf.stringToHclTerraform(struct!.hostIpv6),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LicenseManagerHostListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LicenseManagerHostListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hostIpv4 !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostIpv4 = this._hostIpv4;
    }
    if (this._hostIpv6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostIpv6 = this._hostIpv6;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LicenseManagerHostListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._hostIpv4 = undefined;
      this._hostIpv6 = undefined;
      this._port = undefined;
      this._uuid = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._hostIpv4 = value.hostIpv4;
      this._hostIpv6 = value.hostIpv6;
      this._port = value.port;
      this._uuid = value.uuid;
    }
  }

  // host_ipv4 - computed: false, optional: false, required: true
  private _hostIpv4?: string; 
  public get hostIpv4() {
    return this.getStringAttribute('host_ipv4');
  }
  public set hostIpv4(value: string) {
    this._hostIpv4 = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostIpv4Input() {
    return this._hostIpv4;
  }

  // host_ipv6 - computed: false, optional: false, required: true
  private _hostIpv6?: string; 
  public get hostIpv6() {
    return this.getStringAttribute('host_ipv6');
  }
  public set hostIpv6(value: string) {
    this._hostIpv6 = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostIpv6Input() {
    return this._hostIpv6;
  }

  // port - computed: false, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }
}

export class LicenseManagerHostListStructList extends cdktf.ComplexList {
  public internalValue? : LicenseManagerHostListStruct[] | cdktf.IResolvable

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
  public get(index: number): LicenseManagerHostListStructOutputReference {
    return new LicenseManagerHostListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LicenseManagerNgWafModule {
  /**
  * access-key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/license_manager#access_key_id LicenseManager#access_key_id}
  */
  readonly accessKeyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/license_manager#secret_access_key LicenseManager#secret_access_key}
  */
  readonly secretAccessKey?: string;
}

export function licenseManagerNgWafModuleToTerraform(struct?: LicenseManagerNgWafModuleOutputReference | LicenseManagerNgWafModule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_key_id: cdktf.stringToTerraform(struct!.accessKeyId),
    secret_access_key: cdktf.stringToTerraform(struct!.secretAccessKey),
  }
}


export function licenseManagerNgWafModuleToHclTerraform(struct?: LicenseManagerNgWafModuleOutputReference | LicenseManagerNgWafModule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access_key_id: {
      value: cdktf.stringToHclTerraform(struct!.accessKeyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret_access_key: {
      value: cdktf.stringToHclTerraform(struct!.secretAccessKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LicenseManagerNgWafModuleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LicenseManagerNgWafModule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessKeyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessKeyId = this._accessKeyId;
    }
    if (this._secretAccessKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretAccessKey = this._secretAccessKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LicenseManagerNgWafModule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._accessKeyId = undefined;
      this._secretAccessKey = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._accessKeyId = value.accessKeyId;
      this._secretAccessKey = value.secretAccessKey;
    }
  }

  // access_key_id - computed: false, optional: true, required: false
  private _accessKeyId?: string; 
  public get accessKeyId() {
    return this.getStringAttribute('access_key_id');
  }
  public set accessKeyId(value: string) {
    this._accessKeyId = value;
  }
  public resetAccessKeyId() {
    this._accessKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessKeyIdInput() {
    return this._accessKeyId;
  }

  // secret_access_key - computed: false, optional: true, required: false
  private _secretAccessKey?: string; 
  public get secretAccessKey() {
    return this.getStringAttribute('secret_access_key');
  }
  public set secretAccessKey(value: string) {
    this._secretAccessKey = value;
  }
  public resetSecretAccessKey() {
    this._secretAccessKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretAccessKeyInput() {
    return this._secretAccessKey;
  }
}
export interface LicenseManagerOverage {
  /**
  * Number of bytes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/license_manager#bytes LicenseManager#bytes}
  */
  readonly bytes?: number;
  /**
  * Number of days
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/license_manager#days LicenseManager#days}
  */
  readonly days?: number;
  /**
  * Number of GB
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/license_manager#gb LicenseManager#gb}
  */
  readonly gb?: number;
  /**
  * Number of hours
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/license_manager#hours LicenseManager#hours}
  */
  readonly hours?: number;
  /**
  * Number of KB
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/license_manager#kb LicenseManager#kb}
  */
  readonly kb?: number;
  /**
  * Number of MB
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/license_manager#mb LicenseManager#mb}
  */
  readonly mb?: number;
  /**
  * Number of minutes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/license_manager#minutes LicenseManager#minutes}
  */
  readonly minutes?: number;
  /**
  * Number of seconds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/license_manager#seconds LicenseManager#seconds}
  */
  readonly seconds?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/license_manager#uuid LicenseManager#uuid}
  */
  readonly uuid?: string;
}

export function licenseManagerOverageToTerraform(struct?: LicenseManagerOverageOutputReference | LicenseManagerOverage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bytes: cdktf.numberToTerraform(struct!.bytes),
    days: cdktf.numberToTerraform(struct!.days),
    gb: cdktf.numberToTerraform(struct!.gb),
    hours: cdktf.numberToTerraform(struct!.hours),
    kb: cdktf.numberToTerraform(struct!.kb),
    mb: cdktf.numberToTerraform(struct!.mb),
    minutes: cdktf.numberToTerraform(struct!.minutes),
    seconds: cdktf.numberToTerraform(struct!.seconds),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function licenseManagerOverageToHclTerraform(struct?: LicenseManagerOverageOutputReference | LicenseManagerOverage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bytes: {
      value: cdktf.numberToHclTerraform(struct!.bytes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    days: {
      value: cdktf.numberToHclTerraform(struct!.days),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    gb: {
      value: cdktf.numberToHclTerraform(struct!.gb),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    hours: {
      value: cdktf.numberToHclTerraform(struct!.hours),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    kb: {
      value: cdktf.numberToHclTerraform(struct!.kb),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    mb: {
      value: cdktf.numberToHclTerraform(struct!.mb),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    minutes: {
      value: cdktf.numberToHclTerraform(struct!.minutes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    seconds: {
      value: cdktf.numberToHclTerraform(struct!.seconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LicenseManagerOverageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LicenseManagerOverage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bytes !== undefined) {
      hasAnyValues = true;
      internalValueResult.bytes = this._bytes;
    }
    if (this._days !== undefined) {
      hasAnyValues = true;
      internalValueResult.days = this._days;
    }
    if (this._gb !== undefined) {
      hasAnyValues = true;
      internalValueResult.gb = this._gb;
    }
    if (this._hours !== undefined) {
      hasAnyValues = true;
      internalValueResult.hours = this._hours;
    }
    if (this._kb !== undefined) {
      hasAnyValues = true;
      internalValueResult.kb = this._kb;
    }
    if (this._mb !== undefined) {
      hasAnyValues = true;
      internalValueResult.mb = this._mb;
    }
    if (this._minutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.minutes = this._minutes;
    }
    if (this._seconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.seconds = this._seconds;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LicenseManagerOverage | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bytes = undefined;
      this._days = undefined;
      this._gb = undefined;
      this._hours = undefined;
      this._kb = undefined;
      this._mb = undefined;
      this._minutes = undefined;
      this._seconds = undefined;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bytes = value.bytes;
      this._days = value.days;
      this._gb = value.gb;
      this._hours = value.hours;
      this._kb = value.kb;
      this._mb = value.mb;
      this._minutes = value.minutes;
      this._seconds = value.seconds;
      this._uuid = value.uuid;
    }
  }

  // bytes - computed: false, optional: true, required: false
  private _bytes?: number; 
  public get bytes() {
    return this.getNumberAttribute('bytes');
  }
  public set bytes(value: number) {
    this._bytes = value;
  }
  public resetBytes() {
    this._bytes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bytesInput() {
    return this._bytes;
  }

  // days - computed: false, optional: true, required: false
  private _days?: number; 
  public get days() {
    return this.getNumberAttribute('days');
  }
  public set days(value: number) {
    this._days = value;
  }
  public resetDays() {
    this._days = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get daysInput() {
    return this._days;
  }

  // gb - computed: false, optional: true, required: false
  private _gb?: number; 
  public get gb() {
    return this.getNumberAttribute('gb');
  }
  public set gb(value: number) {
    this._gb = value;
  }
  public resetGb() {
    this._gb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gbInput() {
    return this._gb;
  }

  // hours - computed: false, optional: true, required: false
  private _hours?: number; 
  public get hours() {
    return this.getNumberAttribute('hours');
  }
  public set hours(value: number) {
    this._hours = value;
  }
  public resetHours() {
    this._hours = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hoursInput() {
    return this._hours;
  }

  // kb - computed: false, optional: true, required: false
  private _kb?: number; 
  public get kb() {
    return this.getNumberAttribute('kb');
  }
  public set kb(value: number) {
    this._kb = value;
  }
  public resetKb() {
    this._kb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kbInput() {
    return this._kb;
  }

  // mb - computed: false, optional: true, required: false
  private _mb?: number; 
  public get mb() {
    return this.getNumberAttribute('mb');
  }
  public set mb(value: number) {
    this._mb = value;
  }
  public resetMb() {
    this._mb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mbInput() {
    return this._mb;
  }

  // minutes - computed: false, optional: true, required: false
  private _minutes?: number; 
  public get minutes() {
    return this.getNumberAttribute('minutes');
  }
  public set minutes(value: number) {
    this._minutes = value;
  }
  public resetMinutes() {
    this._minutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minutesInput() {
    return this._minutes;
  }

  // seconds - computed: false, optional: true, required: false
  private _seconds?: number; 
  public get seconds() {
    return this.getNumberAttribute('seconds');
  }
  public set seconds(value: number) {
    this._seconds = value;
  }
  public resetSeconds() {
    this._seconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secondsInput() {
    return this._seconds;
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }
}
export interface LicenseManagerReminderListStruct {
  /**
  * Configure reminder for grace time (Hour)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/license_manager#reminder_value LicenseManager#reminder_value}
  */
  readonly reminderValue: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/license_manager#uuid LicenseManager#uuid}
  */
  readonly uuid?: string;
}

export function licenseManagerReminderListStructToTerraform(struct?: LicenseManagerReminderListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    reminder_value: cdktf.numberToTerraform(struct!.reminderValue),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function licenseManagerReminderListStructToHclTerraform(struct?: LicenseManagerReminderListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    reminder_value: {
      value: cdktf.numberToHclTerraform(struct!.reminderValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LicenseManagerReminderListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LicenseManagerReminderListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._reminderValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.reminderValue = this._reminderValue;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LicenseManagerReminderListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._reminderValue = undefined;
      this._uuid = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._reminderValue = value.reminderValue;
      this._uuid = value.uuid;
    }
  }

  // reminder_value - computed: false, optional: false, required: true
  private _reminderValue?: number; 
  public get reminderValue() {
    return this.getNumberAttribute('reminder_value');
  }
  public set reminderValue(value: number) {
    this._reminderValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get reminderValueInput() {
    return this._reminderValue;
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }
}

export class LicenseManagerReminderListStructList extends cdktf.ComplexList {
  public internalValue? : LicenseManagerReminderListStruct[] | cdktf.IResolvable

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
  public get(index: number): LicenseManagerReminderListStructOutputReference {
    return new LicenseManagerReminderListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/license_manager thunder_license_manager}
*/
export class LicenseManager extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_license_manager";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a LicenseManager resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the LicenseManager to import
  * @param importFromId The id of the existing LicenseManager that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/license_manager#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the LicenseManager to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_license_manager", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/license_manager thunder_license_manager} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LicenseManagerConfig = {}
  */
  public constructor(scope: Construct, id: string, config: LicenseManagerConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_license_manager',
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
    this._bandwidthBase = config.bandwidthBase;
    this._bandwidthUnrestricted = config.bandwidthUnrestricted;
    this._id = config.id;
    this._instanceName = config.instanceName;
    this._interval = config.interval;
    this._sn = config.sn;
    this._useMgmtPort = config.useMgmtPort;
    this._uuid = config.uuid;
    this._connect.internalValue = config.connect;
    this._hostList.internalValue = config.hostList;
    this._ngWafModule.internalValue = config.ngWafModule;
    this._overage.internalValue = config.overage;
    this._reminderList.internalValue = config.reminderList;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // bandwidth_base - computed: false, optional: true, required: false
  private _bandwidthBase?: number; 
  public get bandwidthBase() {
    return this.getNumberAttribute('bandwidth_base');
  }
  public set bandwidthBase(value: number) {
    this._bandwidthBase = value;
  }
  public resetBandwidthBase() {
    this._bandwidthBase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bandwidthBaseInput() {
    return this._bandwidthBase;
  }

  // bandwidth_unrestricted - computed: false, optional: true, required: false
  private _bandwidthUnrestricted?: number; 
  public get bandwidthUnrestricted() {
    return this.getNumberAttribute('bandwidth_unrestricted');
  }
  public set bandwidthUnrestricted(value: number) {
    this._bandwidthUnrestricted = value;
  }
  public resetBandwidthUnrestricted() {
    this._bandwidthUnrestricted = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bandwidthUnrestrictedInput() {
    return this._bandwidthUnrestricted;
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

  // instance_name - computed: false, optional: true, required: false
  private _instanceName?: string; 
  public get instanceName() {
    return this.getStringAttribute('instance_name');
  }
  public set instanceName(value: string) {
    this._instanceName = value;
  }
  public resetInstanceName() {
    this._instanceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceNameInput() {
    return this._instanceName;
  }

  // interval - computed: false, optional: true, required: false
  private _interval?: number; 
  public get interval() {
    return this.getNumberAttribute('interval');
  }
  public set interval(value: number) {
    this._interval = value;
  }
  public resetInterval() {
    this._interval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalInput() {
    return this._interval;
  }

  // sn - computed: false, optional: true, required: false
  private _sn?: string; 
  public get sn() {
    return this.getStringAttribute('sn');
  }
  public set sn(value: string) {
    this._sn = value;
  }
  public resetSn() {
    this._sn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snInput() {
    return this._sn;
  }

  // use_mgmt_port - computed: false, optional: true, required: false
  private _useMgmtPort?: number; 
  public get useMgmtPort() {
    return this.getNumberAttribute('use_mgmt_port');
  }
  public set useMgmtPort(value: number) {
    this._useMgmtPort = value;
  }
  public resetUseMgmtPort() {
    this._useMgmtPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useMgmtPortInput() {
    return this._useMgmtPort;
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }

  // connect - computed: false, optional: true, required: false
  private _connect = new LicenseManagerConnectOutputReference(this, "connect");
  public get connect() {
    return this._connect;
  }
  public putConnect(value: LicenseManagerConnect) {
    this._connect.internalValue = value;
  }
  public resetConnect() {
    this._connect.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectInput() {
    return this._connect.internalValue;
  }

  // host_list - computed: false, optional: true, required: false
  private _hostList = new LicenseManagerHostListStructList(this, "host_list", false);
  public get hostList() {
    return this._hostList;
  }
  public putHostList(value: LicenseManagerHostListStruct[] | cdktf.IResolvable) {
    this._hostList.internalValue = value;
  }
  public resetHostList() {
    this._hostList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostListInput() {
    return this._hostList.internalValue;
  }

  // ng_waf_module - computed: false, optional: true, required: false
  private _ngWafModule = new LicenseManagerNgWafModuleOutputReference(this, "ng_waf_module");
  public get ngWafModule() {
    return this._ngWafModule;
  }
  public putNgWafModule(value: LicenseManagerNgWafModule) {
    this._ngWafModule.internalValue = value;
  }
  public resetNgWafModule() {
    this._ngWafModule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ngWafModuleInput() {
    return this._ngWafModule.internalValue;
  }

  // overage - computed: false, optional: true, required: false
  private _overage = new LicenseManagerOverageOutputReference(this, "overage");
  public get overage() {
    return this._overage;
  }
  public putOverage(value: LicenseManagerOverage) {
    this._overage.internalValue = value;
  }
  public resetOverage() {
    this._overage.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overageInput() {
    return this._overage.internalValue;
  }

  // reminder_list - computed: false, optional: true, required: false
  private _reminderList = new LicenseManagerReminderListStructList(this, "reminder_list", false);
  public get reminderList() {
    return this._reminderList;
  }
  public putReminderList(value: LicenseManagerReminderListStruct[] | cdktf.IResolvable) {
    this._reminderList.internalValue = value;
  }
  public resetReminderList() {
    this._reminderList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reminderListInput() {
    return this._reminderList.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      bandwidth_base: cdktf.numberToTerraform(this._bandwidthBase),
      bandwidth_unrestricted: cdktf.numberToTerraform(this._bandwidthUnrestricted),
      id: cdktf.stringToTerraform(this._id),
      instance_name: cdktf.stringToTerraform(this._instanceName),
      interval: cdktf.numberToTerraform(this._interval),
      sn: cdktf.stringToTerraform(this._sn),
      use_mgmt_port: cdktf.numberToTerraform(this._useMgmtPort),
      uuid: cdktf.stringToTerraform(this._uuid),
      connect: licenseManagerConnectToTerraform(this._connect.internalValue),
      host_list: cdktf.listMapper(licenseManagerHostListStructToTerraform, true)(this._hostList.internalValue),
      ng_waf_module: licenseManagerNgWafModuleToTerraform(this._ngWafModule.internalValue),
      overage: licenseManagerOverageToTerraform(this._overage.internalValue),
      reminder_list: cdktf.listMapper(licenseManagerReminderListStructToTerraform, true)(this._reminderList.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      bandwidth_base: {
        value: cdktf.numberToHclTerraform(this._bandwidthBase),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      bandwidth_unrestricted: {
        value: cdktf.numberToHclTerraform(this._bandwidthUnrestricted),
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
      instance_name: {
        value: cdktf.stringToHclTerraform(this._instanceName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      interval: {
        value: cdktf.numberToHclTerraform(this._interval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      sn: {
        value: cdktf.stringToHclTerraform(this._sn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      use_mgmt_port: {
        value: cdktf.numberToHclTerraform(this._useMgmtPort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      uuid: {
        value: cdktf.stringToHclTerraform(this._uuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      connect: {
        value: licenseManagerConnectToHclTerraform(this._connect.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "LicenseManagerConnectList",
      },
      host_list: {
        value: cdktf.listMapperHcl(licenseManagerHostListStructToHclTerraform, true)(this._hostList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "LicenseManagerHostListStructList",
      },
      ng_waf_module: {
        value: licenseManagerNgWafModuleToHclTerraform(this._ngWafModule.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "LicenseManagerNgWafModuleList",
      },
      overage: {
        value: licenseManagerOverageToHclTerraform(this._overage.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "LicenseManagerOverageList",
      },
      reminder_list: {
        value: cdktf.listMapperHcl(licenseManagerReminderListStructToHclTerraform, true)(this._reminderList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "LicenseManagerReminderListStructList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
