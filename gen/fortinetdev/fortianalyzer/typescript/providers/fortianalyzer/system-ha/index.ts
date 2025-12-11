// https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.2/docs/resources/system_ha
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SystemHaConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.2/docs/resources/system_ha#cfg_sync_hb_interval SystemHa#cfg_sync_hb_interval}
  */
  readonly cfgSyncHbInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.2/docs/resources/system_ha#dynamic_sort_subtable SystemHa#dynamic_sort_subtable}
  */
  readonly dynamicSortSubtable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.2/docs/resources/system_ha#group_id SystemHa#group_id}
  */
  readonly groupId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.2/docs/resources/system_ha#group_name SystemHa#group_name}
  */
  readonly groupName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.2/docs/resources/system_ha#hb_interface SystemHa#hb_interface}
  */
  readonly hbInterface?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.2/docs/resources/system_ha#hb_interval SystemHa#hb_interval}
  */
  readonly hbInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.2/docs/resources/system_ha#healthcheck SystemHa#healthcheck}
  */
  readonly healthcheck?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.2/docs/resources/system_ha#id SystemHa#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.2/docs/resources/system_ha#initial_sync SystemHa#initial_sync}
  */
  readonly initialSync?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.2/docs/resources/system_ha#initial_sync_threads SystemHa#initial_sync_threads}
  */
  readonly initialSyncThreads?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.2/docs/resources/system_ha#load_balance SystemHa#load_balance}
  */
  readonly loadBalance?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.2/docs/resources/system_ha#local_cert SystemHa#local_cert}
  */
  readonly localCert?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.2/docs/resources/system_ha#log_sync SystemHa#log_sync}
  */
  readonly logSync?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.2/docs/resources/system_ha#mode SystemHa#mode}
  */
  readonly mode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.2/docs/resources/system_ha#password SystemHa#password}
  */
  readonly password?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.2/docs/resources/system_ha#preferred_role SystemHa#preferred_role}
  */
  readonly preferredRole?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.2/docs/resources/system_ha#priority SystemHa#priority}
  */
  readonly priority?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.2/docs/resources/system_ha#private_clusterid SystemHa#private_clusterid}
  */
  readonly privateClusterid?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.2/docs/resources/system_ha#private_file_quota SystemHa#private_file_quota}
  */
  readonly privateFileQuota?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.2/docs/resources/system_ha#private_hb_interval SystemHa#private_hb_interval}
  */
  readonly privateHbInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.2/docs/resources/system_ha#private_hb_lost_threshold SystemHa#private_hb_lost_threshold}
  */
  readonly privateHbLostThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.2/docs/resources/system_ha#private_mode SystemHa#private_mode}
  */
  readonly privateMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.2/docs/resources/system_ha#private_password SystemHa#private_password}
  */
  readonly privatePassword?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.2/docs/resources/system_ha#unicast SystemHa#unicast}
  */
  readonly unicast?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.2/docs/resources/system_ha#vip SystemHa#vip}
  */
  readonly vip?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.2/docs/resources/system_ha#vip_interface SystemHa#vip_interface}
  */
  readonly vipInterface?: string;
  /**
  * peer block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.2/docs/resources/system_ha#peer SystemHa#peer}
  */
  readonly peer?: SystemHaPeer[] | cdktf.IResolvable;
  /**
  * private_peer block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.2/docs/resources/system_ha#private_peer SystemHa#private_peer}
  */
  readonly privatePeer?: SystemHaPrivatePeer[] | cdktf.IResolvable;
  /**
  * vip_block block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.2/docs/resources/system_ha#vip_block SystemHa#vip_block}
  */
  readonly vipBlock?: SystemHaVipBlock[] | cdktf.IResolvable;
}
export interface SystemHaPeer {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.2/docs/resources/system_ha#addr SystemHa#addr}
  */
  readonly addr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.2/docs/resources/system_ha#addr_hb SystemHa#addr_hb}
  */
  readonly addrHb?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.2/docs/resources/system_ha#id SystemHa#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.2/docs/resources/system_ha#ip SystemHa#ip}
  */
  readonly ip?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.2/docs/resources/system_ha#ip_hb SystemHa#ip_hb}
  */
  readonly ipHb?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.2/docs/resources/system_ha#serial_number SystemHa#serial_number}
  */
  readonly serialNumber?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.2/docs/resources/system_ha#status SystemHa#status}
  */
  readonly status?: string;
}

export function systemHaPeerToTerraform(struct?: SystemHaPeer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    addr: cdktf.stringToTerraform(struct!.addr),
    addr_hb: cdktf.stringToTerraform(struct!.addrHb),
    id: cdktf.numberToTerraform(struct!.id),
    ip: cdktf.stringToTerraform(struct!.ip),
    ip_hb: cdktf.stringToTerraform(struct!.ipHb),
    serial_number: cdktf.stringToTerraform(struct!.serialNumber),
    status: cdktf.stringToTerraform(struct!.status),
  }
}


export function systemHaPeerToHclTerraform(struct?: SystemHaPeer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    addr: {
      value: cdktf.stringToHclTerraform(struct!.addr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    addr_hb: {
      value: cdktf.stringToHclTerraform(struct!.addrHb),
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
    ip: {
      value: cdktf.stringToHclTerraform(struct!.ip),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip_hb: {
      value: cdktf.stringToHclTerraform(struct!.ipHb),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    serial_number: {
      value: cdktf.stringToHclTerraform(struct!.serialNumber),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    status: {
      value: cdktf.stringToHclTerraform(struct!.status),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemHaPeerOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SystemHaPeer | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addr !== undefined) {
      hasAnyValues = true;
      internalValueResult.addr = this._addr;
    }
    if (this._addrHb !== undefined) {
      hasAnyValues = true;
      internalValueResult.addrHb = this._addrHb;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._ip !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip = this._ip;
    }
    if (this._ipHb !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipHb = this._ipHb;
    }
    if (this._serialNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.serialNumber = this._serialNumber;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemHaPeer | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._addr = undefined;
      this._addrHb = undefined;
      this._id = undefined;
      this._ip = undefined;
      this._ipHb = undefined;
      this._serialNumber = undefined;
      this._status = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._addr = value.addr;
      this._addrHb = value.addrHb;
      this._id = value.id;
      this._ip = value.ip;
      this._ipHb = value.ipHb;
      this._serialNumber = value.serialNumber;
      this._status = value.status;
    }
  }

  // addr - computed: false, optional: true, required: false
  private _addr?: string; 
  public get addr() {
    return this.getStringAttribute('addr');
  }
  public set addr(value: string) {
    this._addr = value;
  }
  public resetAddr() {
    this._addr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addrInput() {
    return this._addr;
  }

  // addr_hb - computed: false, optional: true, required: false
  private _addrHb?: string; 
  public get addrHb() {
    return this.getStringAttribute('addr_hb');
  }
  public set addrHb(value: string) {
    this._addrHb = value;
  }
  public resetAddrHb() {
    this._addrHb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addrHbInput() {
    return this._addrHb;
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

  // ip - computed: false, optional: true, required: false
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

  // ip_hb - computed: false, optional: true, required: false
  private _ipHb?: string; 
  public get ipHb() {
    return this.getStringAttribute('ip_hb');
  }
  public set ipHb(value: string) {
    this._ipHb = value;
  }
  public resetIpHb() {
    this._ipHb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipHbInput() {
    return this._ipHb;
  }

  // serial_number - computed: false, optional: true, required: false
  private _serialNumber?: string; 
  public get serialNumber() {
    return this.getStringAttribute('serial_number');
  }
  public set serialNumber(value: string) {
    this._serialNumber = value;
  }
  public resetSerialNumber() {
    this._serialNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serialNumberInput() {
    return this._serialNumber;
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
}

export class SystemHaPeerList extends cdktf.ComplexList {
  public internalValue? : SystemHaPeer[] | cdktf.IResolvable

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
  public get(index: number): SystemHaPeerOutputReference {
    return new SystemHaPeerOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SystemHaPrivatePeer {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.2/docs/resources/system_ha#id SystemHa#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.2/docs/resources/system_ha#ip SystemHa#ip}
  */
  readonly ip?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.2/docs/resources/system_ha#ip6 SystemHa#ip6}
  */
  readonly ip6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.2/docs/resources/system_ha#serial_number SystemHa#serial_number}
  */
  readonly serialNumber?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.2/docs/resources/system_ha#status SystemHa#status}
  */
  readonly status?: string;
}

export function systemHaPrivatePeerToTerraform(struct?: SystemHaPrivatePeer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.numberToTerraform(struct!.id),
    ip: cdktf.stringToTerraform(struct!.ip),
    ip6: cdktf.stringToTerraform(struct!.ip6),
    serial_number: cdktf.stringToTerraform(struct!.serialNumber),
    status: cdktf.stringToTerraform(struct!.status),
  }
}


export function systemHaPrivatePeerToHclTerraform(struct?: SystemHaPrivatePeer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.numberToHclTerraform(struct!.id),
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
    ip6: {
      value: cdktf.stringToHclTerraform(struct!.ip6),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    serial_number: {
      value: cdktf.stringToHclTerraform(struct!.serialNumber),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    status: {
      value: cdktf.stringToHclTerraform(struct!.status),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemHaPrivatePeerOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SystemHaPrivatePeer | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._ip !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip = this._ip;
    }
    if (this._ip6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip6 = this._ip6;
    }
    if (this._serialNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.serialNumber = this._serialNumber;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemHaPrivatePeer | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._ip = undefined;
      this._ip6 = undefined;
      this._serialNumber = undefined;
      this._status = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._ip = value.ip;
      this._ip6 = value.ip6;
      this._serialNumber = value.serialNumber;
      this._status = value.status;
    }
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

  // ip - computed: false, optional: true, required: false
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

  // ip6 - computed: true, optional: true, required: false
  private _ip6?: string; 
  public get ip6() {
    return this.getStringAttribute('ip6');
  }
  public set ip6(value: string) {
    this._ip6 = value;
  }
  public resetIp6() {
    this._ip6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ip6Input() {
    return this._ip6;
  }

  // serial_number - computed: false, optional: true, required: false
  private _serialNumber?: string; 
  public get serialNumber() {
    return this.getStringAttribute('serial_number');
  }
  public set serialNumber(value: string) {
    this._serialNumber = value;
  }
  public resetSerialNumber() {
    this._serialNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serialNumberInput() {
    return this._serialNumber;
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
}

export class SystemHaPrivatePeerList extends cdktf.ComplexList {
  public internalValue? : SystemHaPrivatePeer[] | cdktf.IResolvable

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
  public get(index: number): SystemHaPrivatePeerOutputReference {
    return new SystemHaPrivatePeerOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SystemHaVipBlock {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.2/docs/resources/system_ha#id SystemHa#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.2/docs/resources/system_ha#status SystemHa#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.2/docs/resources/system_ha#vip SystemHa#vip}
  */
  readonly vip?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.2/docs/resources/system_ha#vip_interface SystemHa#vip_interface}
  */
  readonly vipInterface?: string;
}

export function systemHaVipBlockToTerraform(struct?: SystemHaVipBlock | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.numberToTerraform(struct!.id),
    status: cdktf.stringToTerraform(struct!.status),
    vip: cdktf.stringToTerraform(struct!.vip),
    vip_interface: cdktf.stringToTerraform(struct!.vipInterface),
  }
}


export function systemHaVipBlockToHclTerraform(struct?: SystemHaVipBlock | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.numberToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    status: {
      value: cdktf.stringToHclTerraform(struct!.status),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vip: {
      value: cdktf.stringToHclTerraform(struct!.vip),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vip_interface: {
      value: cdktf.stringToHclTerraform(struct!.vipInterface),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemHaVipBlockOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SystemHaVipBlock | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    if (this._vip !== undefined) {
      hasAnyValues = true;
      internalValueResult.vip = this._vip;
    }
    if (this._vipInterface !== undefined) {
      hasAnyValues = true;
      internalValueResult.vipInterface = this._vipInterface;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemHaVipBlock | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._status = undefined;
      this._vip = undefined;
      this._vipInterface = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._status = value.status;
      this._vip = value.vip;
      this._vipInterface = value.vipInterface;
    }
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

  // vip - computed: false, optional: true, required: false
  private _vip?: string; 
  public get vip() {
    return this.getStringAttribute('vip');
  }
  public set vip(value: string) {
    this._vip = value;
  }
  public resetVip() {
    this._vip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vipInput() {
    return this._vip;
  }

  // vip_interface - computed: false, optional: true, required: false
  private _vipInterface?: string; 
  public get vipInterface() {
    return this.getStringAttribute('vip_interface');
  }
  public set vipInterface(value: string) {
    this._vipInterface = value;
  }
  public resetVipInterface() {
    this._vipInterface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vipInterfaceInput() {
    return this._vipInterface;
  }
}

export class SystemHaVipBlockList extends cdktf.ComplexList {
  public internalValue? : SystemHaVipBlock[] | cdktf.IResolvable

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
  public get(index: number): SystemHaVipBlockOutputReference {
    return new SystemHaVipBlockOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.2/docs/resources/system_ha fortianalyzer_system_ha}
*/
export class SystemHa extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortianalyzer_system_ha";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SystemHa resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SystemHa to import
  * @param importFromId The id of the existing SystemHa that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.2/docs/resources/system_ha#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SystemHa to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortianalyzer_system_ha", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.2/docs/resources/system_ha fortianalyzer_system_ha} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SystemHaConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SystemHaConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fortianalyzer_system_ha',
      terraformGeneratorMetadata: {
        providerName: 'fortianalyzer',
        providerVersion: '1.5.2',
        providerVersionConstraint: '1.5.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._cfgSyncHbInterval = config.cfgSyncHbInterval;
    this._dynamicSortSubtable = config.dynamicSortSubtable;
    this._groupId = config.groupId;
    this._groupName = config.groupName;
    this._hbInterface = config.hbInterface;
    this._hbInterval = config.hbInterval;
    this._healthcheck = config.healthcheck;
    this._id = config.id;
    this._initialSync = config.initialSync;
    this._initialSyncThreads = config.initialSyncThreads;
    this._loadBalance = config.loadBalance;
    this._localCert = config.localCert;
    this._logSync = config.logSync;
    this._mode = config.mode;
    this._password = config.password;
    this._preferredRole = config.preferredRole;
    this._priority = config.priority;
    this._privateClusterid = config.privateClusterid;
    this._privateFileQuota = config.privateFileQuota;
    this._privateHbInterval = config.privateHbInterval;
    this._privateHbLostThreshold = config.privateHbLostThreshold;
    this._privateMode = config.privateMode;
    this._privatePassword = config.privatePassword;
    this._unicast = config.unicast;
    this._vip = config.vip;
    this._vipInterface = config.vipInterface;
    this._peer.internalValue = config.peer;
    this._privatePeer.internalValue = config.privatePeer;
    this._vipBlock.internalValue = config.vipBlock;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cfg_sync_hb_interval - computed: true, optional: true, required: false
  private _cfgSyncHbInterval?: number; 
  public get cfgSyncHbInterval() {
    return this.getNumberAttribute('cfg_sync_hb_interval');
  }
  public set cfgSyncHbInterval(value: number) {
    this._cfgSyncHbInterval = value;
  }
  public resetCfgSyncHbInterval() {
    this._cfgSyncHbInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cfgSyncHbIntervalInput() {
    return this._cfgSyncHbInterval;
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

  // group_id - computed: false, optional: true, required: false
  private _groupId?: number; 
  public get groupId() {
    return this.getNumberAttribute('group_id');
  }
  public set groupId(value: number) {
    this._groupId = value;
  }
  public resetGroupId() {
    this._groupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupIdInput() {
    return this._groupId;
  }

  // group_name - computed: false, optional: true, required: false
  private _groupName?: string; 
  public get groupName() {
    return this.getStringAttribute('group_name');
  }
  public set groupName(value: string) {
    this._groupName = value;
  }
  public resetGroupName() {
    this._groupName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupNameInput() {
    return this._groupName;
  }

  // hb_interface - computed: false, optional: true, required: false
  private _hbInterface?: string; 
  public get hbInterface() {
    return this.getStringAttribute('hb_interface');
  }
  public set hbInterface(value: string) {
    this._hbInterface = value;
  }
  public resetHbInterface() {
    this._hbInterface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hbInterfaceInput() {
    return this._hbInterface;
  }

  // hb_interval - computed: true, optional: true, required: false
  private _hbInterval?: number; 
  public get hbInterval() {
    return this.getNumberAttribute('hb_interval');
  }
  public set hbInterval(value: number) {
    this._hbInterval = value;
  }
  public resetHbInterval() {
    this._hbInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hbIntervalInput() {
    return this._hbInterval;
  }

  // healthcheck - computed: false, optional: true, required: false
  private _healthcheck?: string[]; 
  public get healthcheck() {
    return cdktf.Fn.tolist(this.getListAttribute('healthcheck'));
  }
  public set healthcheck(value: string[]) {
    this._healthcheck = value;
  }
  public resetHealthcheck() {
    this._healthcheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthcheckInput() {
    return this._healthcheck;
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

  // initial_sync - computed: true, optional: true, required: false
  private _initialSync?: string; 
  public get initialSync() {
    return this.getStringAttribute('initial_sync');
  }
  public set initialSync(value: string) {
    this._initialSync = value;
  }
  public resetInitialSync() {
    this._initialSync = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initialSyncInput() {
    return this._initialSync;
  }

  // initial_sync_threads - computed: true, optional: true, required: false
  private _initialSyncThreads?: number; 
  public get initialSyncThreads() {
    return this.getNumberAttribute('initial_sync_threads');
  }
  public set initialSyncThreads(value: number) {
    this._initialSyncThreads = value;
  }
  public resetInitialSyncThreads() {
    this._initialSyncThreads = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initialSyncThreadsInput() {
    return this._initialSyncThreads;
  }

  // load_balance - computed: true, optional: true, required: false
  private _loadBalance?: string; 
  public get loadBalance() {
    return this.getStringAttribute('load_balance');
  }
  public set loadBalance(value: string) {
    this._loadBalance = value;
  }
  public resetLoadBalance() {
    this._loadBalance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loadBalanceInput() {
    return this._loadBalance;
  }

  // local_cert - computed: false, optional: true, required: false
  private _localCert?: string; 
  public get localCert() {
    return this.getStringAttribute('local_cert');
  }
  public set localCert(value: string) {
    this._localCert = value;
  }
  public resetLocalCert() {
    this._localCert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localCertInput() {
    return this._localCert;
  }

  // log_sync - computed: true, optional: true, required: false
  private _logSync?: string; 
  public get logSync() {
    return this.getStringAttribute('log_sync');
  }
  public set logSync(value: string) {
    this._logSync = value;
  }
  public resetLogSync() {
    this._logSync = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logSyncInput() {
    return this._logSync;
  }

  // mode - computed: true, optional: true, required: false
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }

  // password - computed: false, optional: true, required: false
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

  // preferred_role - computed: true, optional: true, required: false
  private _preferredRole?: string; 
  public get preferredRole() {
    return this.getStringAttribute('preferred_role');
  }
  public set preferredRole(value: string) {
    this._preferredRole = value;
  }
  public resetPreferredRole() {
    this._preferredRole = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preferredRoleInput() {
    return this._preferredRole;
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

  // private_clusterid - computed: true, optional: true, required: false
  private _privateClusterid?: number; 
  public get privateClusterid() {
    return this.getNumberAttribute('private_clusterid');
  }
  public set privateClusterid(value: number) {
    this._privateClusterid = value;
  }
  public resetPrivateClusterid() {
    this._privateClusterid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateClusteridInput() {
    return this._privateClusterid;
  }

  // private_file_quota - computed: true, optional: true, required: false
  private _privateFileQuota?: number; 
  public get privateFileQuota() {
    return this.getNumberAttribute('private_file_quota');
  }
  public set privateFileQuota(value: number) {
    this._privateFileQuota = value;
  }
  public resetPrivateFileQuota() {
    this._privateFileQuota = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateFileQuotaInput() {
    return this._privateFileQuota;
  }

  // private_hb_interval - computed: true, optional: true, required: false
  private _privateHbInterval?: number; 
  public get privateHbInterval() {
    return this.getNumberAttribute('private_hb_interval');
  }
  public set privateHbInterval(value: number) {
    this._privateHbInterval = value;
  }
  public resetPrivateHbInterval() {
    this._privateHbInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateHbIntervalInput() {
    return this._privateHbInterval;
  }

  // private_hb_lost_threshold - computed: true, optional: true, required: false
  private _privateHbLostThreshold?: number; 
  public get privateHbLostThreshold() {
    return this.getNumberAttribute('private_hb_lost_threshold');
  }
  public set privateHbLostThreshold(value: number) {
    this._privateHbLostThreshold = value;
  }
  public resetPrivateHbLostThreshold() {
    this._privateHbLostThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateHbLostThresholdInput() {
    return this._privateHbLostThreshold;
  }

  // private_mode - computed: true, optional: true, required: false
  private _privateMode?: string; 
  public get privateMode() {
    return this.getStringAttribute('private_mode');
  }
  public set privateMode(value: string) {
    this._privateMode = value;
  }
  public resetPrivateMode() {
    this._privateMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateModeInput() {
    return this._privateMode;
  }

  // private_password - computed: false, optional: true, required: false
  private _privatePassword?: string[]; 
  public get privatePassword() {
    return cdktf.Fn.tolist(this.getListAttribute('private_password'));
  }
  public set privatePassword(value: string[]) {
    this._privatePassword = value;
  }
  public resetPrivatePassword() {
    this._privatePassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privatePasswordInput() {
    return this._privatePassword;
  }

  // unicast - computed: true, optional: true, required: false
  private _unicast?: string; 
  public get unicast() {
    return this.getStringAttribute('unicast');
  }
  public set unicast(value: string) {
    this._unicast = value;
  }
  public resetUnicast() {
    this._unicast = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unicastInput() {
    return this._unicast;
  }

  // vip - computed: false, optional: true, required: false
  private _vip?: string; 
  public get vip() {
    return this.getStringAttribute('vip');
  }
  public set vip(value: string) {
    this._vip = value;
  }
  public resetVip() {
    this._vip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vipInput() {
    return this._vip;
  }

  // vip_interface - computed: false, optional: true, required: false
  private _vipInterface?: string; 
  public get vipInterface() {
    return this.getStringAttribute('vip_interface');
  }
  public set vipInterface(value: string) {
    this._vipInterface = value;
  }
  public resetVipInterface() {
    this._vipInterface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vipInterfaceInput() {
    return this._vipInterface;
  }

  // peer - computed: false, optional: true, required: false
  private _peer = new SystemHaPeerList(this, "peer", false);
  public get peer() {
    return this._peer;
  }
  public putPeer(value: SystemHaPeer[] | cdktf.IResolvable) {
    this._peer.internalValue = value;
  }
  public resetPeer() {
    this._peer.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peerInput() {
    return this._peer.internalValue;
  }

  // private_peer - computed: false, optional: true, required: false
  private _privatePeer = new SystemHaPrivatePeerList(this, "private_peer", false);
  public get privatePeer() {
    return this._privatePeer;
  }
  public putPrivatePeer(value: SystemHaPrivatePeer[] | cdktf.IResolvable) {
    this._privatePeer.internalValue = value;
  }
  public resetPrivatePeer() {
    this._privatePeer.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privatePeerInput() {
    return this._privatePeer.internalValue;
  }

  // vip_block - computed: false, optional: true, required: false
  private _vipBlock = new SystemHaVipBlockList(this, "vip_block", false);
  public get vipBlock() {
    return this._vipBlock;
  }
  public putVipBlock(value: SystemHaVipBlock[] | cdktf.IResolvable) {
    this._vipBlock.internalValue = value;
  }
  public resetVipBlock() {
    this._vipBlock.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vipBlockInput() {
    return this._vipBlock.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cfg_sync_hb_interval: cdktf.numberToTerraform(this._cfgSyncHbInterval),
      dynamic_sort_subtable: cdktf.stringToTerraform(this._dynamicSortSubtable),
      group_id: cdktf.numberToTerraform(this._groupId),
      group_name: cdktf.stringToTerraform(this._groupName),
      hb_interface: cdktf.stringToTerraform(this._hbInterface),
      hb_interval: cdktf.numberToTerraform(this._hbInterval),
      healthcheck: cdktf.listMapper(cdktf.stringToTerraform, false)(this._healthcheck),
      id: cdktf.stringToTerraform(this._id),
      initial_sync: cdktf.stringToTerraform(this._initialSync),
      initial_sync_threads: cdktf.numberToTerraform(this._initialSyncThreads),
      load_balance: cdktf.stringToTerraform(this._loadBalance),
      local_cert: cdktf.stringToTerraform(this._localCert),
      log_sync: cdktf.stringToTerraform(this._logSync),
      mode: cdktf.stringToTerraform(this._mode),
      password: cdktf.listMapper(cdktf.stringToTerraform, false)(this._password),
      preferred_role: cdktf.stringToTerraform(this._preferredRole),
      priority: cdktf.numberToTerraform(this._priority),
      private_clusterid: cdktf.numberToTerraform(this._privateClusterid),
      private_file_quota: cdktf.numberToTerraform(this._privateFileQuota),
      private_hb_interval: cdktf.numberToTerraform(this._privateHbInterval),
      private_hb_lost_threshold: cdktf.numberToTerraform(this._privateHbLostThreshold),
      private_mode: cdktf.stringToTerraform(this._privateMode),
      private_password: cdktf.listMapper(cdktf.stringToTerraform, false)(this._privatePassword),
      unicast: cdktf.stringToTerraform(this._unicast),
      vip: cdktf.stringToTerraform(this._vip),
      vip_interface: cdktf.stringToTerraform(this._vipInterface),
      peer: cdktf.listMapper(systemHaPeerToTerraform, true)(this._peer.internalValue),
      private_peer: cdktf.listMapper(systemHaPrivatePeerToTerraform, true)(this._privatePeer.internalValue),
      vip_block: cdktf.listMapper(systemHaVipBlockToTerraform, true)(this._vipBlock.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cfg_sync_hb_interval: {
        value: cdktf.numberToHclTerraform(this._cfgSyncHbInterval),
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
      group_id: {
        value: cdktf.numberToHclTerraform(this._groupId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      group_name: {
        value: cdktf.stringToHclTerraform(this._groupName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hb_interface: {
        value: cdktf.stringToHclTerraform(this._hbInterface),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hb_interval: {
        value: cdktf.numberToHclTerraform(this._hbInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      healthcheck: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._healthcheck),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      initial_sync: {
        value: cdktf.stringToHclTerraform(this._initialSync),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      initial_sync_threads: {
        value: cdktf.numberToHclTerraform(this._initialSyncThreads),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      load_balance: {
        value: cdktf.stringToHclTerraform(this._loadBalance),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      local_cert: {
        value: cdktf.stringToHclTerraform(this._localCert),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      log_sync: {
        value: cdktf.stringToHclTerraform(this._logSync),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mode: {
        value: cdktf.stringToHclTerraform(this._mode),
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
      preferred_role: {
        value: cdktf.stringToHclTerraform(this._preferredRole),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      priority: {
        value: cdktf.numberToHclTerraform(this._priority),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      private_clusterid: {
        value: cdktf.numberToHclTerraform(this._privateClusterid),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      private_file_quota: {
        value: cdktf.numberToHclTerraform(this._privateFileQuota),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      private_hb_interval: {
        value: cdktf.numberToHclTerraform(this._privateHbInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      private_hb_lost_threshold: {
        value: cdktf.numberToHclTerraform(this._privateHbLostThreshold),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      private_mode: {
        value: cdktf.stringToHclTerraform(this._privateMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      private_password: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._privatePassword),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      unicast: {
        value: cdktf.stringToHclTerraform(this._unicast),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vip: {
        value: cdktf.stringToHclTerraform(this._vip),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vip_interface: {
        value: cdktf.stringToHclTerraform(this._vipInterface),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      peer: {
        value: cdktf.listMapperHcl(systemHaPeerToHclTerraform, true)(this._peer.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SystemHaPeerList",
      },
      private_peer: {
        value: cdktf.listMapperHcl(systemHaPrivatePeerToHclTerraform, true)(this._privatePeer.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SystemHaPrivatePeerList",
      },
      vip_block: {
        value: cdktf.listMapperHcl(systemHaVipBlockToHclTerraform, true)(this._vipBlock.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SystemHaVipBlockList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
