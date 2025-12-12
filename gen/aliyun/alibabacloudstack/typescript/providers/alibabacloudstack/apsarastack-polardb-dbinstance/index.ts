// https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_polardb_dbinstance
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ApsarastackPolardbDbinstanceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_polardb_dbinstance#acl ApsarastackPolardbDbinstance#acl}
  */
  readonly acl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_polardb_dbinstance#auto_renew ApsarastackPolardbDbinstance#auto_renew}
  */
  readonly autoRenew?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_polardb_dbinstance#auto_renew_period ApsarastackPolardbDbinstance#auto_renew_period}
  */
  readonly autoRenewPeriod?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_polardb_dbinstance#cpu_type ApsarastackPolardbDbinstance#cpu_type}
  */
  readonly cpuType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_polardb_dbinstance#db_instance_class ApsarastackPolardbDbinstance#db_instance_class}
  */
  readonly dbInstanceClass?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_polardb_dbinstance#db_instance_description ApsarastackPolardbDbinstance#db_instance_description}
  */
  readonly dbInstanceDescription?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_polardb_dbinstance#db_instance_storage ApsarastackPolardbDbinstance#db_instance_storage}
  */
  readonly dbInstanceStorage?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_polardb_dbinstance#db_instance_storage_type ApsarastackPolardbDbinstance#db_instance_storage_type}
  */
  readonly dbInstanceStorageType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_polardb_dbinstance#enable_ssl ApsarastackPolardbDbinstance#enable_ssl}
  */
  readonly enableSsl?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_polardb_dbinstance#encrypt_algorithm ApsarastackPolardbDbinstance#encrypt_algorithm}
  */
  readonly encryptAlgorithm?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_polardb_dbinstance#encryption ApsarastackPolardbDbinstance#encryption}
  */
  readonly encryption?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_polardb_dbinstance#encryption_key ApsarastackPolardbDbinstance#encryption_key}
  */
  readonly encryptionKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_polardb_dbinstance#engine ApsarastackPolardbDbinstance#engine}
  */
  readonly engine: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_polardb_dbinstance#engine_version ApsarastackPolardbDbinstance#engine_version}
  */
  readonly engineVersion: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_polardb_dbinstance#force_restart ApsarastackPolardbDbinstance#force_restart}
  */
  readonly forceRestart?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_polardb_dbinstance#id ApsarastackPolardbDbinstance#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_polardb_dbinstance#instance_charge_type ApsarastackPolardbDbinstance#instance_charge_type}
  */
  readonly instanceChargeType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_polardb_dbinstance#instance_name ApsarastackPolardbDbinstance#instance_name}
  */
  readonly instanceName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_polardb_dbinstance#instance_storage ApsarastackPolardbDbinstance#instance_storage}
  */
  readonly instanceStorage?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_polardb_dbinstance#instance_type ApsarastackPolardbDbinstance#instance_type}
  */
  readonly instanceType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_polardb_dbinstance#maintain_time ApsarastackPolardbDbinstance#maintain_time}
  */
  readonly maintainTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_polardb_dbinstance#monitoring_period ApsarastackPolardbDbinstance#monitoring_period}
  */
  readonly monitoringPeriod?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_polardb_dbinstance#payment_type ApsarastackPolardbDbinstance#payment_type}
  */
  readonly paymentType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_polardb_dbinstance#period ApsarastackPolardbDbinstance#period}
  */
  readonly period?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_polardb_dbinstance#role_arn ApsarastackPolardbDbinstance#role_arn}
  */
  readonly roleArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_polardb_dbinstance#security_ip_mode ApsarastackPolardbDbinstance#security_ip_mode}
  */
  readonly securityIpMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_polardb_dbinstance#security_ips ApsarastackPolardbDbinstance#security_ips}
  */
  readonly securityIps?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_polardb_dbinstance#storage_type ApsarastackPolardbDbinstance#storage_type}
  */
  readonly storageType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_polardb_dbinstance#tags ApsarastackPolardbDbinstance#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_polardb_dbinstance#tde_status ApsarastackPolardbDbinstance#tde_status}
  */
  readonly tdeStatus?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_polardb_dbinstance#vswitch_id ApsarastackPolardbDbinstance#vswitch_id}
  */
  readonly vswitchId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_polardb_dbinstance#zone_id ApsarastackPolardbDbinstance#zone_id}
  */
  readonly zoneId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_polardb_dbinstance#zone_id_slave1 ApsarastackPolardbDbinstance#zone_id_slave1}
  */
  readonly zoneIdSlave1?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_polardb_dbinstance#zone_id_slave2 ApsarastackPolardbDbinstance#zone_id_slave2}
  */
  readonly zoneIdSlave2?: string;
  /**
  * parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_polardb_dbinstance#parameters ApsarastackPolardbDbinstance#parameters}
  */
  readonly parameters?: ApsarastackPolardbDbinstanceParameters[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_polardb_dbinstance#timeouts ApsarastackPolardbDbinstance#timeouts}
  */
  readonly timeouts?: ApsarastackPolardbDbinstanceTimeouts;
}
export interface ApsarastackPolardbDbinstanceParameters {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_polardb_dbinstance#name ApsarastackPolardbDbinstance#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_polardb_dbinstance#value ApsarastackPolardbDbinstance#value}
  */
  readonly value: string;
}

export function apsarastackPolardbDbinstanceParametersToTerraform(struct?: ApsarastackPolardbDbinstanceParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function apsarastackPolardbDbinstanceParametersToHclTerraform(struct?: ApsarastackPolardbDbinstanceParameters | cdktf.IResolvable): any {
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

export class ApsarastackPolardbDbinstanceParametersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApsarastackPolardbDbinstanceParameters | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ApsarastackPolardbDbinstanceParameters | cdktf.IResolvable | undefined) {
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

export class ApsarastackPolardbDbinstanceParametersList extends cdktf.ComplexList {
  public internalValue? : ApsarastackPolardbDbinstanceParameters[] | cdktf.IResolvable

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
  public get(index: number): ApsarastackPolardbDbinstanceParametersOutputReference {
    return new ApsarastackPolardbDbinstanceParametersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApsarastackPolardbDbinstanceTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_polardb_dbinstance#create ApsarastackPolardbDbinstance#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_polardb_dbinstance#delete ApsarastackPolardbDbinstance#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_polardb_dbinstance#update ApsarastackPolardbDbinstance#update}
  */
  readonly update?: string;
}

export function apsarastackPolardbDbinstanceTimeoutsToTerraform(struct?: ApsarastackPolardbDbinstanceTimeouts | cdktf.IResolvable): any {
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


export function apsarastackPolardbDbinstanceTimeoutsToHclTerraform(struct?: ApsarastackPolardbDbinstanceTimeouts | cdktf.IResolvable): any {
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

export class ApsarastackPolardbDbinstanceTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ApsarastackPolardbDbinstanceTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ApsarastackPolardbDbinstanceTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_polardb_dbinstance apsarastack_polardb_dbinstance}
*/
export class ApsarastackPolardbDbinstance extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "apsarastack_polardb_dbinstance";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ApsarastackPolardbDbinstance resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ApsarastackPolardbDbinstance to import
  * @param importFromId The id of the existing ApsarastackPolardbDbinstance that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_polardb_dbinstance#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ApsarastackPolardbDbinstance to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "apsarastack_polardb_dbinstance", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_polardb_dbinstance apsarastack_polardb_dbinstance} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ApsarastackPolardbDbinstanceConfig
  */
  public constructor(scope: Construct, id: string, config: ApsarastackPolardbDbinstanceConfig) {
    super(scope, id, {
      terraformResourceType: 'apsarastack_polardb_dbinstance',
      terraformGeneratorMetadata: {
        providerName: 'alibabacloudstack',
        providerVersion: '3.18.21',
        providerVersionConstraint: '3.18.21'
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
    this._cpuType = config.cpuType;
    this._dbInstanceClass = config.dbInstanceClass;
    this._dbInstanceDescription = config.dbInstanceDescription;
    this._dbInstanceStorage = config.dbInstanceStorage;
    this._dbInstanceStorageType = config.dbInstanceStorageType;
    this._enableSsl = config.enableSsl;
    this._encryptAlgorithm = config.encryptAlgorithm;
    this._encryption = config.encryption;
    this._encryptionKey = config.encryptionKey;
    this._engine = config.engine;
    this._engineVersion = config.engineVersion;
    this._forceRestart = config.forceRestart;
    this._id = config.id;
    this._instanceChargeType = config.instanceChargeType;
    this._instanceName = config.instanceName;
    this._instanceStorage = config.instanceStorage;
    this._instanceType = config.instanceType;
    this._maintainTime = config.maintainTime;
    this._monitoringPeriod = config.monitoringPeriod;
    this._paymentType = config.paymentType;
    this._period = config.period;
    this._roleArn = config.roleArn;
    this._securityIpMode = config.securityIpMode;
    this._securityIps = config.securityIps;
    this._storageType = config.storageType;
    this._tags = config.tags;
    this._tdeStatus = config.tdeStatus;
    this._vswitchId = config.vswitchId;
    this._zoneId = config.zoneId;
    this._zoneIdSlave1 = config.zoneIdSlave1;
    this._zoneIdSlave2 = config.zoneIdSlave2;
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

  // connection_string - computed: true, optional: false, required: false
  public get connectionString() {
    return this.getStringAttribute('connection_string');
  }

  // cpu_type - computed: true, optional: true, required: false
  private _cpuType?: string; 
  public get cpuType() {
    return this.getStringAttribute('cpu_type');
  }
  public set cpuType(value: string) {
    this._cpuType = value;
  }
  public resetCpuType() {
    this._cpuType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuTypeInput() {
    return this._cpuType;
  }

  // db_instance_class - computed: true, optional: true, required: false
  private _dbInstanceClass?: string; 
  public get dbInstanceClass() {
    return this.getStringAttribute('db_instance_class');
  }
  public set dbInstanceClass(value: string) {
    this._dbInstanceClass = value;
  }
  public resetDbInstanceClass() {
    this._dbInstanceClass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbInstanceClassInput() {
    return this._dbInstanceClass;
  }

  // db_instance_description - computed: true, optional: true, required: false
  private _dbInstanceDescription?: string; 
  public get dbInstanceDescription() {
    return this.getStringAttribute('db_instance_description');
  }
  public set dbInstanceDescription(value: string) {
    this._dbInstanceDescription = value;
  }
  public resetDbInstanceDescription() {
    this._dbInstanceDescription = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbInstanceDescriptionInput() {
    return this._dbInstanceDescription;
  }

  // db_instance_storage - computed: true, optional: true, required: false
  private _dbInstanceStorage?: number; 
  public get dbInstanceStorage() {
    return this.getNumberAttribute('db_instance_storage');
  }
  public set dbInstanceStorage(value: number) {
    this._dbInstanceStorage = value;
  }
  public resetDbInstanceStorage() {
    this._dbInstanceStorage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbInstanceStorageInput() {
    return this._dbInstanceStorage;
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

  // enable_ssl - computed: false, optional: true, required: false
  private _enableSsl?: boolean | cdktf.IResolvable; 
  public get enableSsl() {
    return this.getBooleanAttribute('enable_ssl');
  }
  public set enableSsl(value: boolean | cdktf.IResolvable) {
    this._enableSsl = value;
  }
  public resetEnableSsl() {
    this._enableSsl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableSslInput() {
    return this._enableSsl;
  }

  // encrypt_algorithm - computed: false, optional: true, required: false
  private _encryptAlgorithm?: string; 
  public get encryptAlgorithm() {
    return this.getStringAttribute('encrypt_algorithm');
  }
  public set encryptAlgorithm(value: string) {
    this._encryptAlgorithm = value;
  }
  public resetEncryptAlgorithm() {
    this._encryptAlgorithm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptAlgorithmInput() {
    return this._encryptAlgorithm;
  }

  // encryption - computed: false, optional: true, required: false
  private _encryption?: boolean | cdktf.IResolvable; 
  public get encryption() {
    return this.getBooleanAttribute('encryption');
  }
  public set encryption(value: boolean | cdktf.IResolvable) {
    this._encryption = value;
  }
  public resetEncryption() {
    this._encryption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionInput() {
    return this._encryption;
  }

  // encryption_key - computed: false, optional: true, required: false
  private _encryptionKey?: string; 
  public get encryptionKey() {
    return this.getStringAttribute('encryption_key');
  }
  public set encryptionKey(value: string) {
    this._encryptionKey = value;
  }
  public resetEncryptionKey() {
    this._encryptionKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionKeyInput() {
    return this._encryptionKey;
  }

  // engine - computed: false, optional: false, required: true
  private _engine?: string; 
  public get engine() {
    return this.getStringAttribute('engine');
  }
  public set engine(value: string) {
    this._engine = value;
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

  // instance_charge_type - computed: true, optional: true, required: false
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

  // instance_storage - computed: true, optional: true, required: false
  private _instanceStorage?: number; 
  public get instanceStorage() {
    return this.getNumberAttribute('instance_storage');
  }
  public set instanceStorage(value: number) {
    this._instanceStorage = value;
  }
  public resetInstanceStorage() {
    this._instanceStorage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceStorageInput() {
    return this._instanceStorage;
  }

  // instance_type - computed: true, optional: true, required: false
  private _instanceType?: string; 
  public get instanceType() {
    return this.getStringAttribute('instance_type');
  }
  public set instanceType(value: string) {
    this._instanceType = value;
  }
  public resetInstanceType() {
    this._instanceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceTypeInput() {
    return this._instanceType;
  }

  // maintain_time - computed: true, optional: true, required: false
  private _maintainTime?: string; 
  public get maintainTime() {
    return this.getStringAttribute('maintain_time');
  }
  public set maintainTime(value: string) {
    this._maintainTime = value;
  }
  public resetMaintainTime() {
    this._maintainTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maintainTimeInput() {
    return this._maintainTime;
  }

  // monitoring_period - computed: true, optional: true, required: false
  private _monitoringPeriod?: number; 
  public get monitoringPeriod() {
    return this.getNumberAttribute('monitoring_period');
  }
  public set monitoringPeriod(value: number) {
    this._monitoringPeriod = value;
  }
  public resetMonitoringPeriod() {
    this._monitoringPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitoringPeriodInput() {
    return this._monitoringPeriod;
  }

  // payment_type - computed: true, optional: true, required: false
  private _paymentType?: string; 
  public get paymentType() {
    return this.getStringAttribute('payment_type');
  }
  public set paymentType(value: string) {
    this._paymentType = value;
  }
  public resetPaymentType() {
    this._paymentType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get paymentTypeInput() {
    return this._paymentType;
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

  // role_arn - computed: true, optional: true, required: false
  private _roleArn?: string; 
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
  public set roleArn(value: string) {
    this._roleArn = value;
  }
  public resetRoleArn() {
    this._roleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleArnInput() {
    return this._roleArn;
  }

  // security_ip_mode - computed: false, optional: true, required: false
  private _securityIpMode?: string; 
  public get securityIpMode() {
    return this.getStringAttribute('security_ip_mode');
  }
  public set securityIpMode(value: string) {
    this._securityIpMode = value;
  }
  public resetSecurityIpMode() {
    this._securityIpMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityIpModeInput() {
    return this._securityIpMode;
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

  // storage_type - computed: true, optional: true, required: false
  private _storageType?: string; 
  public get storageType() {
    return this.getStringAttribute('storage_type');
  }
  public set storageType(value: string) {
    this._storageType = value;
  }
  public resetStorageType() {
    this._storageType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageTypeInput() {
    return this._storageType;
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

  // tde_status - computed: false, optional: true, required: false
  private _tdeStatus?: boolean | cdktf.IResolvable; 
  public get tdeStatus() {
    return this.getBooleanAttribute('tde_status');
  }
  public set tdeStatus(value: boolean | cdktf.IResolvable) {
    this._tdeStatus = value;
  }
  public resetTdeStatus() {
    this._tdeStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tdeStatusInput() {
    return this._tdeStatus;
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

  // zone_id_slave1 - computed: false, optional: true, required: false
  private _zoneIdSlave1?: string; 
  public get zoneIdSlave1() {
    return this.getStringAttribute('zone_id_slave1');
  }
  public set zoneIdSlave1(value: string) {
    this._zoneIdSlave1 = value;
  }
  public resetZoneIdSlave1() {
    this._zoneIdSlave1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneIdSlave1Input() {
    return this._zoneIdSlave1;
  }

  // zone_id_slave2 - computed: false, optional: true, required: false
  private _zoneIdSlave2?: string; 
  public get zoneIdSlave2() {
    return this.getStringAttribute('zone_id_slave2');
  }
  public set zoneIdSlave2(value: string) {
    this._zoneIdSlave2 = value;
  }
  public resetZoneIdSlave2() {
    this._zoneIdSlave2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneIdSlave2Input() {
    return this._zoneIdSlave2;
  }

  // parameters - computed: false, optional: true, required: false
  private _parameters = new ApsarastackPolardbDbinstanceParametersList(this, "parameters", true);
  public get parameters() {
    return this._parameters;
  }
  public putParameters(value: ApsarastackPolardbDbinstanceParameters[] | cdktf.IResolvable) {
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
  private _timeouts = new ApsarastackPolardbDbinstanceTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ApsarastackPolardbDbinstanceTimeouts) {
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
      cpu_type: cdktf.stringToTerraform(this._cpuType),
      db_instance_class: cdktf.stringToTerraform(this._dbInstanceClass),
      db_instance_description: cdktf.stringToTerraform(this._dbInstanceDescription),
      db_instance_storage: cdktf.numberToTerraform(this._dbInstanceStorage),
      db_instance_storage_type: cdktf.stringToTerraform(this._dbInstanceStorageType),
      enable_ssl: cdktf.booleanToTerraform(this._enableSsl),
      encrypt_algorithm: cdktf.stringToTerraform(this._encryptAlgorithm),
      encryption: cdktf.booleanToTerraform(this._encryption),
      encryption_key: cdktf.stringToTerraform(this._encryptionKey),
      engine: cdktf.stringToTerraform(this._engine),
      engine_version: cdktf.stringToTerraform(this._engineVersion),
      force_restart: cdktf.booleanToTerraform(this._forceRestart),
      id: cdktf.stringToTerraform(this._id),
      instance_charge_type: cdktf.stringToTerraform(this._instanceChargeType),
      instance_name: cdktf.stringToTerraform(this._instanceName),
      instance_storage: cdktf.numberToTerraform(this._instanceStorage),
      instance_type: cdktf.stringToTerraform(this._instanceType),
      maintain_time: cdktf.stringToTerraform(this._maintainTime),
      monitoring_period: cdktf.numberToTerraform(this._monitoringPeriod),
      payment_type: cdktf.stringToTerraform(this._paymentType),
      period: cdktf.numberToTerraform(this._period),
      role_arn: cdktf.stringToTerraform(this._roleArn),
      security_ip_mode: cdktf.stringToTerraform(this._securityIpMode),
      security_ips: cdktf.listMapper(cdktf.stringToTerraform, false)(this._securityIps),
      storage_type: cdktf.stringToTerraform(this._storageType),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      tde_status: cdktf.booleanToTerraform(this._tdeStatus),
      vswitch_id: cdktf.stringToTerraform(this._vswitchId),
      zone_id: cdktf.stringToTerraform(this._zoneId),
      zone_id_slave1: cdktf.stringToTerraform(this._zoneIdSlave1),
      zone_id_slave2: cdktf.stringToTerraform(this._zoneIdSlave2),
      parameters: cdktf.listMapper(apsarastackPolardbDbinstanceParametersToTerraform, true)(this._parameters.internalValue),
      timeouts: apsarastackPolardbDbinstanceTimeoutsToTerraform(this._timeouts.internalValue),
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
      cpu_type: {
        value: cdktf.stringToHclTerraform(this._cpuType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      db_instance_class: {
        value: cdktf.stringToHclTerraform(this._dbInstanceClass),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      db_instance_description: {
        value: cdktf.stringToHclTerraform(this._dbInstanceDescription),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      db_instance_storage: {
        value: cdktf.numberToHclTerraform(this._dbInstanceStorage),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      db_instance_storage_type: {
        value: cdktf.stringToHclTerraform(this._dbInstanceStorageType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enable_ssl: {
        value: cdktf.booleanToHclTerraform(this._enableSsl),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      encrypt_algorithm: {
        value: cdktf.stringToHclTerraform(this._encryptAlgorithm),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      encryption: {
        value: cdktf.booleanToHclTerraform(this._encryption),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      encryption_key: {
        value: cdktf.stringToHclTerraform(this._encryptionKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
      maintain_time: {
        value: cdktf.stringToHclTerraform(this._maintainTime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      monitoring_period: {
        value: cdktf.numberToHclTerraform(this._monitoringPeriod),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      payment_type: {
        value: cdktf.stringToHclTerraform(this._paymentType),
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
      role_arn: {
        value: cdktf.stringToHclTerraform(this._roleArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      security_ip_mode: {
        value: cdktf.stringToHclTerraform(this._securityIpMode),
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
      storage_type: {
        value: cdktf.stringToHclTerraform(this._storageType),
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
      tde_status: {
        value: cdktf.booleanToHclTerraform(this._tdeStatus),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
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
      zone_id_slave1: {
        value: cdktf.stringToHclTerraform(this._zoneIdSlave1),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      zone_id_slave2: {
        value: cdktf.stringToHclTerraform(this._zoneIdSlave2),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      parameters: {
        value: cdktf.listMapperHcl(apsarastackPolardbDbinstanceParametersToHclTerraform, true)(this._parameters.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ApsarastackPolardbDbinstanceParametersList",
      },
      timeouts: {
        value: apsarastackPolardbDbinstanceTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ApsarastackPolardbDbinstanceTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
