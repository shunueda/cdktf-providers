// https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/hbase_instance
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface HbaseInstanceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/hbase_instance#account HbaseInstance#account}
  */
  readonly account?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/hbase_instance#auto_renew HbaseInstance#auto_renew}
  */
  readonly autoRenew?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/hbase_instance#cold_storage_size HbaseInstance#cold_storage_size}
  */
  readonly coldStorageSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/hbase_instance#core_disk_size HbaseInstance#core_disk_size}
  */
  readonly coreDiskSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/hbase_instance#core_disk_type HbaseInstance#core_disk_type}
  */
  readonly coreDiskType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/hbase_instance#core_instance_quantity HbaseInstance#core_instance_quantity}
  */
  readonly coreInstanceQuantity?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/hbase_instance#core_instance_type HbaseInstance#core_instance_type}
  */
  readonly coreInstanceType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/hbase_instance#deletion_protection HbaseInstance#deletion_protection}
  */
  readonly deletionProtection?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/hbase_instance#duration HbaseInstance#duration}
  */
  readonly duration?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/hbase_instance#engine HbaseInstance#engine}
  */
  readonly engine?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/hbase_instance#engine_version HbaseInstance#engine_version}
  */
  readonly engineVersion: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/hbase_instance#id HbaseInstance#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/hbase_instance#immediate_delete_flag HbaseInstance#immediate_delete_flag}
  */
  readonly immediateDeleteFlag?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/hbase_instance#ip_white HbaseInstance#ip_white}
  */
  readonly ipWhite?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/hbase_instance#maintain_end_time HbaseInstance#maintain_end_time}
  */
  readonly maintainEndTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/hbase_instance#maintain_start_time HbaseInstance#maintain_start_time}
  */
  readonly maintainStartTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/hbase_instance#master_instance_type HbaseInstance#master_instance_type}
  */
  readonly masterInstanceType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/hbase_instance#name HbaseInstance#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/hbase_instance#password HbaseInstance#password}
  */
  readonly password?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/hbase_instance#pay_type HbaseInstance#pay_type}
  */
  readonly payType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/hbase_instance#security_groups HbaseInstance#security_groups}
  */
  readonly securityGroups?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/hbase_instance#tags HbaseInstance#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/hbase_instance#vpc_id HbaseInstance#vpc_id}
  */
  readonly vpcId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/hbase_instance#vswitch_id HbaseInstance#vswitch_id}
  */
  readonly vswitchId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/hbase_instance#zone_id HbaseInstance#zone_id}
  */
  readonly zoneId?: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/hbase_instance#timeouts HbaseInstance#timeouts}
  */
  readonly timeouts?: HbaseInstanceTimeouts;
}
export interface HbaseInstanceSlbConnAddrs {
}

export function hbaseInstanceSlbConnAddrsToTerraform(struct?: HbaseInstanceSlbConnAddrs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function hbaseInstanceSlbConnAddrsToHclTerraform(struct?: HbaseInstanceSlbConnAddrs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class HbaseInstanceSlbConnAddrsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): HbaseInstanceSlbConnAddrs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HbaseInstanceSlbConnAddrs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // conn_addr - computed: true, optional: false, required: false
  public get connAddr() {
    return this.getStringAttribute('conn_addr');
  }

  // conn_addr_port - computed: true, optional: false, required: false
  public get connAddrPort() {
    return this.getStringAttribute('conn_addr_port');
  }

  // net_type - computed: true, optional: false, required: false
  public get netType() {
    return this.getStringAttribute('net_type');
  }
}

export class HbaseInstanceSlbConnAddrsList extends cdktf.ComplexList {

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
  public get(index: number): HbaseInstanceSlbConnAddrsOutputReference {
    return new HbaseInstanceSlbConnAddrsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HbaseInstanceUiProxyConnAddrs {
}

export function hbaseInstanceUiProxyConnAddrsToTerraform(struct?: HbaseInstanceUiProxyConnAddrs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function hbaseInstanceUiProxyConnAddrsToHclTerraform(struct?: HbaseInstanceUiProxyConnAddrs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class HbaseInstanceUiProxyConnAddrsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): HbaseInstanceUiProxyConnAddrs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HbaseInstanceUiProxyConnAddrs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // conn_addr - computed: true, optional: false, required: false
  public get connAddr() {
    return this.getStringAttribute('conn_addr');
  }

  // conn_addr_port - computed: true, optional: false, required: false
  public get connAddrPort() {
    return this.getStringAttribute('conn_addr_port');
  }

  // net_type - computed: true, optional: false, required: false
  public get netType() {
    return this.getStringAttribute('net_type');
  }
}

export class HbaseInstanceUiProxyConnAddrsList extends cdktf.ComplexList {

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
  public get(index: number): HbaseInstanceUiProxyConnAddrsOutputReference {
    return new HbaseInstanceUiProxyConnAddrsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HbaseInstanceZkConnAddrs {
}

export function hbaseInstanceZkConnAddrsToTerraform(struct?: HbaseInstanceZkConnAddrs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function hbaseInstanceZkConnAddrsToHclTerraform(struct?: HbaseInstanceZkConnAddrs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class HbaseInstanceZkConnAddrsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): HbaseInstanceZkConnAddrs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HbaseInstanceZkConnAddrs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // conn_addr - computed: true, optional: false, required: false
  public get connAddr() {
    return this.getStringAttribute('conn_addr');
  }

  // conn_addr_port - computed: true, optional: false, required: false
  public get connAddrPort() {
    return this.getStringAttribute('conn_addr_port');
  }

  // net_type - computed: true, optional: false, required: false
  public get netType() {
    return this.getStringAttribute('net_type');
  }
}

export class HbaseInstanceZkConnAddrsList extends cdktf.ComplexList {

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
  public get(index: number): HbaseInstanceZkConnAddrsOutputReference {
    return new HbaseInstanceZkConnAddrsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HbaseInstanceTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/hbase_instance#create HbaseInstance#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/hbase_instance#delete HbaseInstance#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/hbase_instance#update HbaseInstance#update}
  */
  readonly update?: string;
}

export function hbaseInstanceTimeoutsToTerraform(struct?: HbaseInstanceTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function hbaseInstanceTimeoutsToHclTerraform(struct?: HbaseInstanceTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HbaseInstanceTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): HbaseInstanceTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HbaseInstanceTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/hbase_instance alicloud_hbase_instance}
*/
export class HbaseInstance extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_hbase_instance";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a HbaseInstance resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the HbaseInstance to import
  * @param importFromId The id of the existing HbaseInstance that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/hbase_instance#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the HbaseInstance to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_hbase_instance", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/hbase_instance alicloud_hbase_instance} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options HbaseInstanceConfig
  */
  public constructor(scope: Construct, id: string, config: HbaseInstanceConfig) {
    super(scope, id, {
      terraformResourceType: 'alicloud_hbase_instance',
      terraformGeneratorMetadata: {
        providerName: 'alicloud',
        providerVersion: '1.262.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._account = config.account;
    this._autoRenew = config.autoRenew;
    this._coldStorageSize = config.coldStorageSize;
    this._coreDiskSize = config.coreDiskSize;
    this._coreDiskType = config.coreDiskType;
    this._coreInstanceQuantity = config.coreInstanceQuantity;
    this._coreInstanceType = config.coreInstanceType;
    this._deletionProtection = config.deletionProtection;
    this._duration = config.duration;
    this._engine = config.engine;
    this._engineVersion = config.engineVersion;
    this._id = config.id;
    this._immediateDeleteFlag = config.immediateDeleteFlag;
    this._ipWhite = config.ipWhite;
    this._maintainEndTime = config.maintainEndTime;
    this._maintainStartTime = config.maintainStartTime;
    this._masterInstanceType = config.masterInstanceType;
    this._name = config.name;
    this._password = config.password;
    this._payType = config.payType;
    this._securityGroups = config.securityGroups;
    this._tags = config.tags;
    this._vpcId = config.vpcId;
    this._vswitchId = config.vswitchId;
    this._zoneId = config.zoneId;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account - computed: false, optional: true, required: false
  private _account?: string; 
  public get account() {
    return this.getStringAttribute('account');
  }
  public set account(value: string) {
    this._account = value;
  }
  public resetAccount() {
    this._account = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountInput() {
    return this._account;
  }

  // auto_renew - computed: true, optional: true, required: false
  private _autoRenew?: boolean | cdktf.IResolvable; 
  public get autoRenew() {
    return this.getBooleanAttribute('auto_renew');
  }
  public set autoRenew(value: boolean | cdktf.IResolvable) {
    this._autoRenew = value;
  }
  public resetAutoRenew() {
    this._autoRenew = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoRenewInput() {
    return this._autoRenew;
  }

  // cold_storage_size - computed: false, optional: true, required: false
  private _coldStorageSize?: number; 
  public get coldStorageSize() {
    return this.getNumberAttribute('cold_storage_size');
  }
  public set coldStorageSize(value: number) {
    this._coldStorageSize = value;
  }
  public resetColdStorageSize() {
    this._coldStorageSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get coldStorageSizeInput() {
    return this._coldStorageSize;
  }

  // core_disk_size - computed: false, optional: true, required: false
  private _coreDiskSize?: number; 
  public get coreDiskSize() {
    return this.getNumberAttribute('core_disk_size');
  }
  public set coreDiskSize(value: number) {
    this._coreDiskSize = value;
  }
  public resetCoreDiskSize() {
    this._coreDiskSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get coreDiskSizeInput() {
    return this._coreDiskSize;
  }

  // core_disk_type - computed: false, optional: true, required: false
  private _coreDiskType?: string; 
  public get coreDiskType() {
    return this.getStringAttribute('core_disk_type');
  }
  public set coreDiskType(value: string) {
    this._coreDiskType = value;
  }
  public resetCoreDiskType() {
    this._coreDiskType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get coreDiskTypeInput() {
    return this._coreDiskType;
  }

  // core_instance_quantity - computed: false, optional: true, required: false
  private _coreInstanceQuantity?: number; 
  public get coreInstanceQuantity() {
    return this.getNumberAttribute('core_instance_quantity');
  }
  public set coreInstanceQuantity(value: number) {
    this._coreInstanceQuantity = value;
  }
  public resetCoreInstanceQuantity() {
    this._coreInstanceQuantity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get coreInstanceQuantityInput() {
    return this._coreInstanceQuantity;
  }

  // core_instance_type - computed: false, optional: false, required: true
  private _coreInstanceType?: string; 
  public get coreInstanceType() {
    return this.getStringAttribute('core_instance_type');
  }
  public set coreInstanceType(value: string) {
    this._coreInstanceType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get coreInstanceTypeInput() {
    return this._coreInstanceType;
  }

  // deletion_protection - computed: false, optional: true, required: false
  private _deletionProtection?: boolean | cdktf.IResolvable; 
  public get deletionProtection() {
    return this.getBooleanAttribute('deletion_protection');
  }
  public set deletionProtection(value: boolean | cdktf.IResolvable) {
    this._deletionProtection = value;
  }
  public resetDeletionProtection() {
    this._deletionProtection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deletionProtectionInput() {
    return this._deletionProtection;
  }

  // duration - computed: true, optional: true, required: false
  private _duration?: number; 
  public get duration() {
    return this.getNumberAttribute('duration');
  }
  public set duration(value: number) {
    this._duration = value;
  }
  public resetDuration() {
    this._duration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get durationInput() {
    return this._duration;
  }

  // engine - computed: false, optional: true, required: false
  private _engine?: string; 
  public get engine() {
    return this.getStringAttribute('engine');
  }
  public set engine(value: string) {
    this._engine = value;
  }
  public resetEngine() {
    this._engine = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get engineInput() {
    return this._engine;
  }

  // engine_version - computed: false, optional: false, required: true
  private _engineVersion?: string; 
  public get engineVersion() {
    return this.getStringAttribute('engine_version');
  }
  public set engineVersion(value: string) {
    this._engineVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get engineVersionInput() {
    return this._engineVersion;
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

  // immediate_delete_flag - computed: false, optional: true, required: false
  private _immediateDeleteFlag?: boolean | cdktf.IResolvable; 
  public get immediateDeleteFlag() {
    return this.getBooleanAttribute('immediate_delete_flag');
  }
  public set immediateDeleteFlag(value: boolean | cdktf.IResolvable) {
    this._immediateDeleteFlag = value;
  }
  public resetImmediateDeleteFlag() {
    this._immediateDeleteFlag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get immediateDeleteFlagInput() {
    return this._immediateDeleteFlag;
  }

  // ip_white - computed: true, optional: true, required: false
  private _ipWhite?: string; 
  public get ipWhite() {
    return this.getStringAttribute('ip_white');
  }
  public set ipWhite(value: string) {
    this._ipWhite = value;
  }
  public resetIpWhite() {
    this._ipWhite = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipWhiteInput() {
    return this._ipWhite;
  }

  // maintain_end_time - computed: true, optional: true, required: false
  private _maintainEndTime?: string; 
  public get maintainEndTime() {
    return this.getStringAttribute('maintain_end_time');
  }
  public set maintainEndTime(value: string) {
    this._maintainEndTime = value;
  }
  public resetMaintainEndTime() {
    this._maintainEndTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maintainEndTimeInput() {
    return this._maintainEndTime;
  }

  // maintain_start_time - computed: true, optional: true, required: false
  private _maintainStartTime?: string; 
  public get maintainStartTime() {
    return this.getStringAttribute('maintain_start_time');
  }
  public set maintainStartTime(value: string) {
    this._maintainStartTime = value;
  }
  public resetMaintainStartTime() {
    this._maintainStartTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maintainStartTimeInput() {
    return this._maintainStartTime;
  }

  // master_instance_quantity - computed: true, optional: false, required: false
  public get masterInstanceQuantity() {
    return this.getNumberAttribute('master_instance_quantity');
  }

  // master_instance_type - computed: false, optional: false, required: true
  private _masterInstanceType?: string; 
  public get masterInstanceType() {
    return this.getStringAttribute('master_instance_type');
  }
  public set masterInstanceType(value: string) {
    this._masterInstanceType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get masterInstanceTypeInput() {
    return this._masterInstanceType;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // password - computed: false, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // pay_type - computed: false, optional: true, required: false
  private _payType?: string; 
  public get payType() {
    return this.getStringAttribute('pay_type');
  }
  public set payType(value: string) {
    this._payType = value;
  }
  public resetPayType() {
    this._payType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get payTypeInput() {
    return this._payType;
  }

  // security_groups - computed: true, optional: true, required: false
  private _securityGroups?: string[]; 
  public get securityGroups() {
    return cdktf.Fn.tolist(this.getListAttribute('security_groups'));
  }
  public set securityGroups(value: string[]) {
    this._securityGroups = value;
  }
  public resetSecurityGroups() {
    this._securityGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupsInput() {
    return this._securityGroups;
  }

  // slb_conn_addrs - computed: true, optional: false, required: false
  private _slbConnAddrs = new HbaseInstanceSlbConnAddrsList(this, "slb_conn_addrs", false);
  public get slbConnAddrs() {
    return this._slbConnAddrs;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // ui_proxy_conn_addrs - computed: true, optional: false, required: false
  private _uiProxyConnAddrs = new HbaseInstanceUiProxyConnAddrsList(this, "ui_proxy_conn_addrs", false);
  public get uiProxyConnAddrs() {
    return this._uiProxyConnAddrs;
  }

  // vpc_id - computed: false, optional: true, required: false
  private _vpcId?: string; 
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }
  public set vpcId(value: string) {
    this._vpcId = value;
  }
  public resetVpcId() {
    this._vpcId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcIdInput() {
    return this._vpcId;
  }

  // vswitch_id - computed: false, optional: true, required: false
  private _vswitchId?: string; 
  public get vswitchId() {
    return this.getStringAttribute('vswitch_id');
  }
  public set vswitchId(value: string) {
    this._vswitchId = value;
  }
  public resetVswitchId() {
    this._vswitchId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vswitchIdInput() {
    return this._vswitchId;
  }

  // zk_conn_addrs - computed: true, optional: false, required: false
  private _zkConnAddrs = new HbaseInstanceZkConnAddrsList(this, "zk_conn_addrs", false);
  public get zkConnAddrs() {
    return this._zkConnAddrs;
  }

  // zone_id - computed: true, optional: true, required: false
  private _zoneId?: string; 
  public get zoneId() {
    return this.getStringAttribute('zone_id');
  }
  public set zoneId(value: string) {
    this._zoneId = value;
  }
  public resetZoneId() {
    this._zoneId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneIdInput() {
    return this._zoneId;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new HbaseInstanceTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: HbaseInstanceTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account: cdktf.stringToTerraform(this._account),
      auto_renew: cdktf.booleanToTerraform(this._autoRenew),
      cold_storage_size: cdktf.numberToTerraform(this._coldStorageSize),
      core_disk_size: cdktf.numberToTerraform(this._coreDiskSize),
      core_disk_type: cdktf.stringToTerraform(this._coreDiskType),
      core_instance_quantity: cdktf.numberToTerraform(this._coreInstanceQuantity),
      core_instance_type: cdktf.stringToTerraform(this._coreInstanceType),
      deletion_protection: cdktf.booleanToTerraform(this._deletionProtection),
      duration: cdktf.numberToTerraform(this._duration),
      engine: cdktf.stringToTerraform(this._engine),
      engine_version: cdktf.stringToTerraform(this._engineVersion),
      id: cdktf.stringToTerraform(this._id),
      immediate_delete_flag: cdktf.booleanToTerraform(this._immediateDeleteFlag),
      ip_white: cdktf.stringToTerraform(this._ipWhite),
      maintain_end_time: cdktf.stringToTerraform(this._maintainEndTime),
      maintain_start_time: cdktf.stringToTerraform(this._maintainStartTime),
      master_instance_type: cdktf.stringToTerraform(this._masterInstanceType),
      name: cdktf.stringToTerraform(this._name),
      password: cdktf.stringToTerraform(this._password),
      pay_type: cdktf.stringToTerraform(this._payType),
      security_groups: cdktf.listMapper(cdktf.stringToTerraform, false)(this._securityGroups),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      vpc_id: cdktf.stringToTerraform(this._vpcId),
      vswitch_id: cdktf.stringToTerraform(this._vswitchId),
      zone_id: cdktf.stringToTerraform(this._zoneId),
      timeouts: hbaseInstanceTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      account: {
        value: cdktf.stringToHclTerraform(this._account),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      auto_renew: {
        value: cdktf.booleanToHclTerraform(this._autoRenew),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      cold_storage_size: {
        value: cdktf.numberToHclTerraform(this._coldStorageSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      core_disk_size: {
        value: cdktf.numberToHclTerraform(this._coreDiskSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      core_disk_type: {
        value: cdktf.stringToHclTerraform(this._coreDiskType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      core_instance_quantity: {
        value: cdktf.numberToHclTerraform(this._coreInstanceQuantity),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      core_instance_type: {
        value: cdktf.stringToHclTerraform(this._coreInstanceType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      deletion_protection: {
        value: cdktf.booleanToHclTerraform(this._deletionProtection),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      duration: {
        value: cdktf.numberToHclTerraform(this._duration),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      engine: {
        value: cdktf.stringToHclTerraform(this._engine),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      engine_version: {
        value: cdktf.stringToHclTerraform(this._engineVersion),
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
      immediate_delete_flag: {
        value: cdktf.booleanToHclTerraform(this._immediateDeleteFlag),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ip_white: {
        value: cdktf.stringToHclTerraform(this._ipWhite),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      maintain_end_time: {
        value: cdktf.stringToHclTerraform(this._maintainEndTime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      maintain_start_time: {
        value: cdktf.stringToHclTerraform(this._maintainStartTime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      master_instance_type: {
        value: cdktf.stringToHclTerraform(this._masterInstanceType),
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
        value: cdktf.stringToHclTerraform(this._password),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pay_type: {
        value: cdktf.stringToHclTerraform(this._payType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      security_groups: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._securityGroups),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      vpc_id: {
        value: cdktf.stringToHclTerraform(this._vpcId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vswitch_id: {
        value: cdktf.stringToHclTerraform(this._vswitchId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      zone_id: {
        value: cdktf.stringToHclTerraform(this._zoneId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: hbaseInstanceTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "HbaseInstanceTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
