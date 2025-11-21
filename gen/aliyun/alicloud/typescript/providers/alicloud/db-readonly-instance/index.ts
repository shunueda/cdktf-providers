// https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/db_readonly_instance
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DbReadonlyInstanceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/db_readonly_instance#acl DbReadonlyInstance#acl}
  */
  readonly acl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/db_readonly_instance#auto_renew DbReadonlyInstance#auto_renew}
  */
  readonly autoRenew?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/db_readonly_instance#auto_renew_period DbReadonlyInstance#auto_renew_period}
  */
  readonly autoRenewPeriod?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/db_readonly_instance#ca_type DbReadonlyInstance#ca_type}
  */
  readonly caType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/db_readonly_instance#client_ca_cert DbReadonlyInstance#client_ca_cert}
  */
  readonly clientCaCert?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/db_readonly_instance#client_ca_enabled DbReadonlyInstance#client_ca_enabled}
  */
  readonly clientCaEnabled?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/db_readonly_instance#client_cert_revocation_list DbReadonlyInstance#client_cert_revocation_list}
  */
  readonly clientCertRevocationList?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/db_readonly_instance#client_crl_enabled DbReadonlyInstance#client_crl_enabled}
  */
  readonly clientCrlEnabled?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/db_readonly_instance#db_instance_ip_array_attribute DbReadonlyInstance#db_instance_ip_array_attribute}
  */
  readonly dbInstanceIpArrayAttribute?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/db_readonly_instance#db_instance_ip_array_name DbReadonlyInstance#db_instance_ip_array_name}
  */
  readonly dbInstanceIpArrayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/db_readonly_instance#db_instance_storage_type DbReadonlyInstance#db_instance_storage_type}
  */
  readonly dbInstanceStorageType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/db_readonly_instance#deletion_protection DbReadonlyInstance#deletion_protection}
  */
  readonly deletionProtection?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/db_readonly_instance#direction DbReadonlyInstance#direction}
  */
  readonly direction?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/db_readonly_instance#effective_time DbReadonlyInstance#effective_time}
  */
  readonly effectiveTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/db_readonly_instance#engine_version DbReadonlyInstance#engine_version}
  */
  readonly engineVersion: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/db_readonly_instance#force_restart DbReadonlyInstance#force_restart}
  */
  readonly forceRestart?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/db_readonly_instance#id DbReadonlyInstance#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/db_readonly_instance#instance_charge_type DbReadonlyInstance#instance_charge_type}
  */
  readonly instanceChargeType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/db_readonly_instance#instance_name DbReadonlyInstance#instance_name}
  */
  readonly instanceName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/db_readonly_instance#instance_storage DbReadonlyInstance#instance_storage}
  */
  readonly instanceStorage: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/db_readonly_instance#instance_type DbReadonlyInstance#instance_type}
  */
  readonly instanceType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/db_readonly_instance#master_db_instance_id DbReadonlyInstance#master_db_instance_id}
  */
  readonly masterDbInstanceId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/db_readonly_instance#modify_mode DbReadonlyInstance#modify_mode}
  */
  readonly modifyMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/db_readonly_instance#period DbReadonlyInstance#period}
  */
  readonly period?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/db_readonly_instance#replication_acl DbReadonlyInstance#replication_acl}
  */
  readonly replicationAcl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/db_readonly_instance#resource_group_id DbReadonlyInstance#resource_group_id}
  */
  readonly resourceGroupId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/db_readonly_instance#security_ip_type DbReadonlyInstance#security_ip_type}
  */
  readonly securityIpType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/db_readonly_instance#security_ips DbReadonlyInstance#security_ips}
  */
  readonly securityIps?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/db_readonly_instance#server_cert DbReadonlyInstance#server_cert}
  */
  readonly serverCert?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/db_readonly_instance#server_key DbReadonlyInstance#server_key}
  */
  readonly serverKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/db_readonly_instance#ssl_enabled DbReadonlyInstance#ssl_enabled}
  */
  readonly sslEnabled?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/db_readonly_instance#switch_time DbReadonlyInstance#switch_time}
  */
  readonly switchTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/db_readonly_instance#tags DbReadonlyInstance#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/db_readonly_instance#target_minor_version DbReadonlyInstance#target_minor_version}
  */
  readonly targetMinorVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/db_readonly_instance#upgrade_db_instance_kernel_version DbReadonlyInstance#upgrade_db_instance_kernel_version}
  */
  readonly upgradeDbInstanceKernelVersion?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/db_readonly_instance#upgrade_time DbReadonlyInstance#upgrade_time}
  */
  readonly upgradeTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/db_readonly_instance#vswitch_id DbReadonlyInstance#vswitch_id}
  */
  readonly vswitchId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/db_readonly_instance#whitelist_network_type DbReadonlyInstance#whitelist_network_type}
  */
  readonly whitelistNetworkType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/db_readonly_instance#zone_id DbReadonlyInstance#zone_id}
  */
  readonly zoneId?: string;
  /**
  * parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/db_readonly_instance#parameters DbReadonlyInstance#parameters}
  */
  readonly parameters?: DbReadonlyInstanceParameters[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/db_readonly_instance#timeouts DbReadonlyInstance#timeouts}
  */
  readonly timeouts?: DbReadonlyInstanceTimeouts;
}
export interface DbReadonlyInstanceParameters {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/db_readonly_instance#name DbReadonlyInstance#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/db_readonly_instance#value DbReadonlyInstance#value}
  */
  readonly value: string;
}

export function dbReadonlyInstanceParametersToTerraform(struct?: DbReadonlyInstanceParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dbReadonlyInstanceParametersToHclTerraform(struct?: DbReadonlyInstanceParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
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

export class DbReadonlyInstanceParametersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DbReadonlyInstanceParameters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DbReadonlyInstanceParameters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._value = value.value;
    }
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

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class DbReadonlyInstanceParametersList extends cdktf.ComplexList {
  public internalValue? : DbReadonlyInstanceParameters[] | cdktf.IResolvable

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
  public get(index: number): DbReadonlyInstanceParametersOutputReference {
    return new DbReadonlyInstanceParametersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DbReadonlyInstanceTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/db_readonly_instance#create DbReadonlyInstance#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/db_readonly_instance#delete DbReadonlyInstance#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/db_readonly_instance#update DbReadonlyInstance#update}
  */
  readonly update?: string;
}

export function dbReadonlyInstanceTimeoutsToTerraform(struct?: DbReadonlyInstanceTimeouts | cdktf.IResolvable): any {
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


export function dbReadonlyInstanceTimeoutsToHclTerraform(struct?: DbReadonlyInstanceTimeouts | cdktf.IResolvable): any {
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

export class DbReadonlyInstanceTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DbReadonlyInstanceTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DbReadonlyInstanceTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/db_readonly_instance alicloud_db_readonly_instance}
*/
export class DbReadonlyInstance extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_db_readonly_instance";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DbReadonlyInstance resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DbReadonlyInstance to import
  * @param importFromId The id of the existing DbReadonlyInstance that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/db_readonly_instance#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DbReadonlyInstance to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_db_readonly_instance", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/db_readonly_instance alicloud_db_readonly_instance} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DbReadonlyInstanceConfig
  */
  public constructor(scope: Construct, id: string, config: DbReadonlyInstanceConfig) {
    super(scope, id, {
      terraformResourceType: 'alicloud_db_readonly_instance',
      terraformGeneratorMetadata: {
        providerName: 'alicloud',
        providerVersion: '1.263.0',
        providerVersionConstraint: '1.263.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._acl = config.acl;
    this._autoRenew = config.autoRenew;
    this._autoRenewPeriod = config.autoRenewPeriod;
    this._caType = config.caType;
    this._clientCaCert = config.clientCaCert;
    this._clientCaEnabled = config.clientCaEnabled;
    this._clientCertRevocationList = config.clientCertRevocationList;
    this._clientCrlEnabled = config.clientCrlEnabled;
    this._dbInstanceIpArrayAttribute = config.dbInstanceIpArrayAttribute;
    this._dbInstanceIpArrayName = config.dbInstanceIpArrayName;
    this._dbInstanceStorageType = config.dbInstanceStorageType;
    this._deletionProtection = config.deletionProtection;
    this._direction = config.direction;
    this._effectiveTime = config.effectiveTime;
    this._engineVersion = config.engineVersion;
    this._forceRestart = config.forceRestart;
    this._id = config.id;
    this._instanceChargeType = config.instanceChargeType;
    this._instanceName = config.instanceName;
    this._instanceStorage = config.instanceStorage;
    this._instanceType = config.instanceType;
    this._masterDbInstanceId = config.masterDbInstanceId;
    this._modifyMode = config.modifyMode;
    this._period = config.period;
    this._replicationAcl = config.replicationAcl;
    this._resourceGroupId = config.resourceGroupId;
    this._securityIpType = config.securityIpType;
    this._securityIps = config.securityIps;
    this._serverCert = config.serverCert;
    this._serverKey = config.serverKey;
    this._sslEnabled = config.sslEnabled;
    this._switchTime = config.switchTime;
    this._tags = config.tags;
    this._targetMinorVersion = config.targetMinorVersion;
    this._upgradeDbInstanceKernelVersion = config.upgradeDbInstanceKernelVersion;
    this._upgradeTime = config.upgradeTime;
    this._vswitchId = config.vswitchId;
    this._whitelistNetworkType = config.whitelistNetworkType;
    this._zoneId = config.zoneId;
    this._parameters.internalValue = config.parameters;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // acl - computed: true, optional: true, required: false
  private _acl?: string; 
  public get acl() {
    return this.getStringAttribute('acl');
  }
  public set acl(value: string) {
    this._acl = value;
  }
  public resetAcl() {
    this._acl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aclInput() {
    return this._acl;
  }

  // auto_renew - computed: false, optional: true, required: false
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

  // auto_renew_period - computed: false, optional: true, required: false
  private _autoRenewPeriod?: number; 
  public get autoRenewPeriod() {
    return this.getNumberAttribute('auto_renew_period');
  }
  public set autoRenewPeriod(value: number) {
    this._autoRenewPeriod = value;
  }
  public resetAutoRenewPeriod() {
    this._autoRenewPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoRenewPeriodInput() {
    return this._autoRenewPeriod;
  }

  // ca_type - computed: true, optional: true, required: false
  private _caType?: string; 
  public get caType() {
    return this.getStringAttribute('ca_type');
  }
  public set caType(value: string) {
    this._caType = value;
  }
  public resetCaType() {
    this._caType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caTypeInput() {
    return this._caType;
  }

  // client_ca_cert - computed: false, optional: true, required: false
  private _clientCaCert?: string; 
  public get clientCaCert() {
    return this.getStringAttribute('client_ca_cert');
  }
  public set clientCaCert(value: string) {
    this._clientCaCert = value;
  }
  public resetClientCaCert() {
    this._clientCaCert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientCaCertInput() {
    return this._clientCaCert;
  }

  // client_ca_enabled - computed: false, optional: true, required: false
  private _clientCaEnabled?: number; 
  public get clientCaEnabled() {
    return this.getNumberAttribute('client_ca_enabled');
  }
  public set clientCaEnabled(value: number) {
    this._clientCaEnabled = value;
  }
  public resetClientCaEnabled() {
    this._clientCaEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientCaEnabledInput() {
    return this._clientCaEnabled;
  }

  // client_cert_revocation_list - computed: false, optional: true, required: false
  private _clientCertRevocationList?: string; 
  public get clientCertRevocationList() {
    return this.getStringAttribute('client_cert_revocation_list');
  }
  public set clientCertRevocationList(value: string) {
    this._clientCertRevocationList = value;
  }
  public resetClientCertRevocationList() {
    this._clientCertRevocationList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientCertRevocationListInput() {
    return this._clientCertRevocationList;
  }

  // client_crl_enabled - computed: false, optional: true, required: false
  private _clientCrlEnabled?: number; 
  public get clientCrlEnabled() {
    return this.getNumberAttribute('client_crl_enabled');
  }
  public set clientCrlEnabled(value: number) {
    this._clientCrlEnabled = value;
  }
  public resetClientCrlEnabled() {
    this._clientCrlEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientCrlEnabledInput() {
    return this._clientCrlEnabled;
  }

  // connection_string - computed: true, optional: false, required: false
  public get connectionString() {
    return this.getStringAttribute('connection_string');
  }

  // db_instance_ip_array_attribute - computed: false, optional: true, required: false
  private _dbInstanceIpArrayAttribute?: string; 
  public get dbInstanceIpArrayAttribute() {
    return this.getStringAttribute('db_instance_ip_array_attribute');
  }
  public set dbInstanceIpArrayAttribute(value: string) {
    this._dbInstanceIpArrayAttribute = value;
  }
  public resetDbInstanceIpArrayAttribute() {
    this._dbInstanceIpArrayAttribute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbInstanceIpArrayAttributeInput() {
    return this._dbInstanceIpArrayAttribute;
  }

  // db_instance_ip_array_name - computed: false, optional: true, required: false
  private _dbInstanceIpArrayName?: string; 
  public get dbInstanceIpArrayName() {
    return this.getStringAttribute('db_instance_ip_array_name');
  }
  public set dbInstanceIpArrayName(value: string) {
    this._dbInstanceIpArrayName = value;
  }
  public resetDbInstanceIpArrayName() {
    this._dbInstanceIpArrayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbInstanceIpArrayNameInput() {
    return this._dbInstanceIpArrayName;
  }

  // db_instance_storage_type - computed: true, optional: true, required: false
  private _dbInstanceStorageType?: string; 
  public get dbInstanceStorageType() {
    return this.getStringAttribute('db_instance_storage_type');
  }
  public set dbInstanceStorageType(value: string) {
    this._dbInstanceStorageType = value;
  }
  public resetDbInstanceStorageType() {
    this._dbInstanceStorageType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbInstanceStorageTypeInput() {
    return this._dbInstanceStorageType;
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

  // direction - computed: false, optional: true, required: false
  private _direction?: string; 
  public get direction() {
    return this.getStringAttribute('direction');
  }
  public set direction(value: string) {
    this._direction = value;
  }
  public resetDirection() {
    this._direction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get directionInput() {
    return this._direction;
  }

  // effective_time - computed: false, optional: true, required: false
  private _effectiveTime?: string; 
  public get effectiveTime() {
    return this.getStringAttribute('effective_time');
  }
  public set effectiveTime(value: string) {
    this._effectiveTime = value;
  }
  public resetEffectiveTime() {
    this._effectiveTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get effectiveTimeInput() {
    return this._effectiveTime;
  }

  // engine - computed: true, optional: false, required: false
  public get engine() {
    return this.getStringAttribute('engine');
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

  // force_restart - computed: false, optional: true, required: false
  private _forceRestart?: boolean | cdktf.IResolvable; 
  public get forceRestart() {
    return this.getBooleanAttribute('force_restart');
  }
  public set forceRestart(value: boolean | cdktf.IResolvable) {
    this._forceRestart = value;
  }
  public resetForceRestart() {
    this._forceRestart = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceRestartInput() {
    return this._forceRestart;
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

  // instance_charge_type - computed: false, optional: true, required: false
  private _instanceChargeType?: string; 
  public get instanceChargeType() {
    return this.getStringAttribute('instance_charge_type');
  }
  public set instanceChargeType(value: string) {
    this._instanceChargeType = value;
  }
  public resetInstanceChargeType() {
    this._instanceChargeType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceChargeTypeInput() {
    return this._instanceChargeType;
  }

  // instance_name - computed: true, optional: true, required: false
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

  // instance_storage - computed: false, optional: false, required: true
  private _instanceStorage?: number; 
  public get instanceStorage() {
    return this.getNumberAttribute('instance_storage');
  }
  public set instanceStorage(value: number) {
    this._instanceStorage = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceStorageInput() {
    return this._instanceStorage;
  }

  // instance_type - computed: false, optional: false, required: true
  private _instanceType?: string; 
  public get instanceType() {
    return this.getStringAttribute('instance_type');
  }
  public set instanceType(value: string) {
    this._instanceType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceTypeInput() {
    return this._instanceType;
  }

  // master_db_instance_id - computed: false, optional: false, required: true
  private _masterDbInstanceId?: string; 
  public get masterDbInstanceId() {
    return this.getStringAttribute('master_db_instance_id');
  }
  public set masterDbInstanceId(value: string) {
    this._masterDbInstanceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get masterDbInstanceIdInput() {
    return this._masterDbInstanceId;
  }

  // modify_mode - computed: false, optional: true, required: false
  private _modifyMode?: string; 
  public get modifyMode() {
    return this.getStringAttribute('modify_mode');
  }
  public set modifyMode(value: string) {
    this._modifyMode = value;
  }
  public resetModifyMode() {
    this._modifyMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modifyModeInput() {
    return this._modifyMode;
  }

  // period - computed: false, optional: true, required: false
  private _period?: number; 
  public get period() {
    return this.getNumberAttribute('period');
  }
  public set period(value: number) {
    this._period = value;
  }
  public resetPeriod() {
    this._period = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get periodInput() {
    return this._period;
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getStringAttribute('port');
  }

  // replication_acl - computed: true, optional: true, required: false
  private _replicationAcl?: string; 
  public get replicationAcl() {
    return this.getStringAttribute('replication_acl');
  }
  public set replicationAcl(value: string) {
    this._replicationAcl = value;
  }
  public resetReplicationAcl() {
    this._replicationAcl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replicationAclInput() {
    return this._replicationAcl;
  }

  // resource_group_id - computed: true, optional: true, required: false
  private _resourceGroupId?: string; 
  public get resourceGroupId() {
    return this.getStringAttribute('resource_group_id');
  }
  public set resourceGroupId(value: string) {
    this._resourceGroupId = value;
  }
  public resetResourceGroupId() {
    this._resourceGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceGroupIdInput() {
    return this._resourceGroupId;
  }

  // security_ip_type - computed: false, optional: true, required: false
  private _securityIpType?: string; 
  public get securityIpType() {
    return this.getStringAttribute('security_ip_type');
  }
  public set securityIpType(value: string) {
    this._securityIpType = value;
  }
  public resetSecurityIpType() {
    this._securityIpType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityIpTypeInput() {
    return this._securityIpType;
  }

  // security_ips - computed: true, optional: true, required: false
  private _securityIps?: string[]; 
  public get securityIps() {
    return cdktf.Fn.tolist(this.getListAttribute('security_ips'));
  }
  public set securityIps(value: string[]) {
    this._securityIps = value;
  }
  public resetSecurityIps() {
    this._securityIps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityIpsInput() {
    return this._securityIps;
  }

  // server_cert - computed: true, optional: true, required: false
  private _serverCert?: string; 
  public get serverCert() {
    return this.getStringAttribute('server_cert');
  }
  public set serverCert(value: string) {
    this._serverCert = value;
  }
  public resetServerCert() {
    this._serverCert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverCertInput() {
    return this._serverCert;
  }

  // server_key - computed: true, optional: true, required: false
  private _serverKey?: string; 
  public get serverKey() {
    return this.getStringAttribute('server_key');
  }
  public set serverKey(value: string) {
    this._serverKey = value;
  }
  public resetServerKey() {
    this._serverKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverKeyInput() {
    return this._serverKey;
  }

  // ssl_enabled - computed: true, optional: true, required: false
  private _sslEnabled?: number; 
  public get sslEnabled() {
    return this.getNumberAttribute('ssl_enabled');
  }
  public set sslEnabled(value: number) {
    this._sslEnabled = value;
  }
  public resetSslEnabled() {
    this._sslEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslEnabledInput() {
    return this._sslEnabled;
  }

  // switch_time - computed: false, optional: true, required: false
  private _switchTime?: string; 
  public get switchTime() {
    return this.getStringAttribute('switch_time');
  }
  public set switchTime(value: string) {
    this._switchTime = value;
  }
  public resetSwitchTime() {
    this._switchTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get switchTimeInput() {
    return this._switchTime;
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

  // target_minor_version - computed: true, optional: true, required: false
  private _targetMinorVersion?: string; 
  public get targetMinorVersion() {
    return this.getStringAttribute('target_minor_version');
  }
  public set targetMinorVersion(value: string) {
    this._targetMinorVersion = value;
  }
  public resetTargetMinorVersion() {
    this._targetMinorVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetMinorVersionInput() {
    return this._targetMinorVersion;
  }

  // upgrade_db_instance_kernel_version - computed: false, optional: true, required: false
  private _upgradeDbInstanceKernelVersion?: boolean | cdktf.IResolvable; 
  public get upgradeDbInstanceKernelVersion() {
    return this.getBooleanAttribute('upgrade_db_instance_kernel_version');
  }
  public set upgradeDbInstanceKernelVersion(value: boolean | cdktf.IResolvable) {
    this._upgradeDbInstanceKernelVersion = value;
  }
  public resetUpgradeDbInstanceKernelVersion() {
    this._upgradeDbInstanceKernelVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get upgradeDbInstanceKernelVersionInput() {
    return this._upgradeDbInstanceKernelVersion;
  }

  // upgrade_time - computed: false, optional: true, required: false
  private _upgradeTime?: string; 
  public get upgradeTime() {
    return this.getStringAttribute('upgrade_time');
  }
  public set upgradeTime(value: string) {
    this._upgradeTime = value;
  }
  public resetUpgradeTime() {
    this._upgradeTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get upgradeTimeInput() {
    return this._upgradeTime;
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

  // whitelist_network_type - computed: false, optional: true, required: false
  private _whitelistNetworkType?: string; 
  public get whitelistNetworkType() {
    return this.getStringAttribute('whitelist_network_type');
  }
  public set whitelistNetworkType(value: string) {
    this._whitelistNetworkType = value;
  }
  public resetWhitelistNetworkType() {
    this._whitelistNetworkType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get whitelistNetworkTypeInput() {
    return this._whitelistNetworkType;
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

  // parameters - computed: false, optional: true, required: false
  private _parameters = new DbReadonlyInstanceParametersList(this, "parameters", true);
  public get parameters() {
    return this._parameters;
  }
  public putParameters(value: DbReadonlyInstanceParameters[] | cdktf.IResolvable) {
    this._parameters.internalValue = value;
  }
  public resetParameters() {
    this._parameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parametersInput() {
    return this._parameters.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DbReadonlyInstanceTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DbReadonlyInstanceTimeouts) {
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
      acl: cdktf.stringToTerraform(this._acl),
      auto_renew: cdktf.booleanToTerraform(this._autoRenew),
      auto_renew_period: cdktf.numberToTerraform(this._autoRenewPeriod),
      ca_type: cdktf.stringToTerraform(this._caType),
      client_ca_cert: cdktf.stringToTerraform(this._clientCaCert),
      client_ca_enabled: cdktf.numberToTerraform(this._clientCaEnabled),
      client_cert_revocation_list: cdktf.stringToTerraform(this._clientCertRevocationList),
      client_crl_enabled: cdktf.numberToTerraform(this._clientCrlEnabled),
      db_instance_ip_array_attribute: cdktf.stringToTerraform(this._dbInstanceIpArrayAttribute),
      db_instance_ip_array_name: cdktf.stringToTerraform(this._dbInstanceIpArrayName),
      db_instance_storage_type: cdktf.stringToTerraform(this._dbInstanceStorageType),
      deletion_protection: cdktf.booleanToTerraform(this._deletionProtection),
      direction: cdktf.stringToTerraform(this._direction),
      effective_time: cdktf.stringToTerraform(this._effectiveTime),
      engine_version: cdktf.stringToTerraform(this._engineVersion),
      force_restart: cdktf.booleanToTerraform(this._forceRestart),
      id: cdktf.stringToTerraform(this._id),
      instance_charge_type: cdktf.stringToTerraform(this._instanceChargeType),
      instance_name: cdktf.stringToTerraform(this._instanceName),
      instance_storage: cdktf.numberToTerraform(this._instanceStorage),
      instance_type: cdktf.stringToTerraform(this._instanceType),
      master_db_instance_id: cdktf.stringToTerraform(this._masterDbInstanceId),
      modify_mode: cdktf.stringToTerraform(this._modifyMode),
      period: cdktf.numberToTerraform(this._period),
      replication_acl: cdktf.stringToTerraform(this._replicationAcl),
      resource_group_id: cdktf.stringToTerraform(this._resourceGroupId),
      security_ip_type: cdktf.stringToTerraform(this._securityIpType),
      security_ips: cdktf.listMapper(cdktf.stringToTerraform, false)(this._securityIps),
      server_cert: cdktf.stringToTerraform(this._serverCert),
      server_key: cdktf.stringToTerraform(this._serverKey),
      ssl_enabled: cdktf.numberToTerraform(this._sslEnabled),
      switch_time: cdktf.stringToTerraform(this._switchTime),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      target_minor_version: cdktf.stringToTerraform(this._targetMinorVersion),
      upgrade_db_instance_kernel_version: cdktf.booleanToTerraform(this._upgradeDbInstanceKernelVersion),
      upgrade_time: cdktf.stringToTerraform(this._upgradeTime),
      vswitch_id: cdktf.stringToTerraform(this._vswitchId),
      whitelist_network_type: cdktf.stringToTerraform(this._whitelistNetworkType),
      zone_id: cdktf.stringToTerraform(this._zoneId),
      parameters: cdktf.listMapper(dbReadonlyInstanceParametersToTerraform, true)(this._parameters.internalValue),
      timeouts: dbReadonlyInstanceTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      acl: {
        value: cdktf.stringToHclTerraform(this._acl),
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
      auto_renew_period: {
        value: cdktf.numberToHclTerraform(this._autoRenewPeriod),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ca_type: {
        value: cdktf.stringToHclTerraform(this._caType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      client_ca_cert: {
        value: cdktf.stringToHclTerraform(this._clientCaCert),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      client_ca_enabled: {
        value: cdktf.numberToHclTerraform(this._clientCaEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      client_cert_revocation_list: {
        value: cdktf.stringToHclTerraform(this._clientCertRevocationList),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      client_crl_enabled: {
        value: cdktf.numberToHclTerraform(this._clientCrlEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      db_instance_ip_array_attribute: {
        value: cdktf.stringToHclTerraform(this._dbInstanceIpArrayAttribute),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      db_instance_ip_array_name: {
        value: cdktf.stringToHclTerraform(this._dbInstanceIpArrayName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      db_instance_storage_type: {
        value: cdktf.stringToHclTerraform(this._dbInstanceStorageType),
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
      direction: {
        value: cdktf.stringToHclTerraform(this._direction),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      effective_time: {
        value: cdktf.stringToHclTerraform(this._effectiveTime),
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
      force_restart: {
        value: cdktf.booleanToHclTerraform(this._forceRestart),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      instance_charge_type: {
        value: cdktf.stringToHclTerraform(this._instanceChargeType),
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
      instance_storage: {
        value: cdktf.numberToHclTerraform(this._instanceStorage),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      instance_type: {
        value: cdktf.stringToHclTerraform(this._instanceType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      master_db_instance_id: {
        value: cdktf.stringToHclTerraform(this._masterDbInstanceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      modify_mode: {
        value: cdktf.stringToHclTerraform(this._modifyMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      period: {
        value: cdktf.numberToHclTerraform(this._period),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      replication_acl: {
        value: cdktf.stringToHclTerraform(this._replicationAcl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resource_group_id: {
        value: cdktf.stringToHclTerraform(this._resourceGroupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      security_ip_type: {
        value: cdktf.stringToHclTerraform(this._securityIpType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      security_ips: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._securityIps),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      server_cert: {
        value: cdktf.stringToHclTerraform(this._serverCert),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      server_key: {
        value: cdktf.stringToHclTerraform(this._serverKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ssl_enabled: {
        value: cdktf.numberToHclTerraform(this._sslEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      switch_time: {
        value: cdktf.stringToHclTerraform(this._switchTime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      target_minor_version: {
        value: cdktf.stringToHclTerraform(this._targetMinorVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      upgrade_db_instance_kernel_version: {
        value: cdktf.booleanToHclTerraform(this._upgradeDbInstanceKernelVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      upgrade_time: {
        value: cdktf.stringToHclTerraform(this._upgradeTime),
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
      whitelist_network_type: {
        value: cdktf.stringToHclTerraform(this._whitelistNetworkType),
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
      parameters: {
        value: cdktf.listMapperHcl(dbReadonlyInstanceParametersToHclTerraform, true)(this._parameters.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DbReadonlyInstanceParametersList",
      },
      timeouts: {
        value: dbReadonlyInstanceTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DbReadonlyInstanceTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
