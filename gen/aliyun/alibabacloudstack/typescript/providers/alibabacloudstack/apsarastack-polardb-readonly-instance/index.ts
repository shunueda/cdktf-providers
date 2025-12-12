// https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_polardb_readonly_instance
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ApsarastackPolardbReadonlyInstanceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_polardb_readonly_instance#db_instance_class ApsarastackPolardbReadonlyInstance#db_instance_class}
  */
  readonly dbInstanceClass?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_polardb_readonly_instance#db_instance_description ApsarastackPolardbReadonlyInstance#db_instance_description}
  */
  readonly dbInstanceDescription?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_polardb_readonly_instance#db_instance_storage ApsarastackPolardbReadonlyInstance#db_instance_storage}
  */
  readonly dbInstanceStorage?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_polardb_readonly_instance#db_instance_storage_type ApsarastackPolardbReadonlyInstance#db_instance_storage_type}
  */
  readonly dbInstanceStorageType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_polardb_readonly_instance#enable_ssl ApsarastackPolardbReadonlyInstance#enable_ssl}
  */
  readonly enableSsl?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_polardb_readonly_instance#encrypt_algorithm ApsarastackPolardbReadonlyInstance#encrypt_algorithm}
  */
  readonly encryptAlgorithm?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_polardb_readonly_instance#engine ApsarastackPolardbReadonlyInstance#engine}
  */
  readonly engine?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_polardb_readonly_instance#engine_version ApsarastackPolardbReadonlyInstance#engine_version}
  */
  readonly engineVersion: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_polardb_readonly_instance#id ApsarastackPolardbReadonlyInstance#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_polardb_readonly_instance#instance_name ApsarastackPolardbReadonlyInstance#instance_name}
  */
  readonly instanceName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_polardb_readonly_instance#instance_storage ApsarastackPolardbReadonlyInstance#instance_storage}
  */
  readonly instanceStorage?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_polardb_readonly_instance#instance_type ApsarastackPolardbReadonlyInstance#instance_type}
  */
  readonly instanceType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_polardb_readonly_instance#master_db_instance_id ApsarastackPolardbReadonlyInstance#master_db_instance_id}
  */
  readonly masterDbInstanceId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_polardb_readonly_instance#master_instance_id ApsarastackPolardbReadonlyInstance#master_instance_id}
  */
  readonly masterInstanceId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_polardb_readonly_instance#tde_status ApsarastackPolardbReadonlyInstance#tde_status}
  */
  readonly tdeStatus?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_polardb_readonly_instance#vswitch_id ApsarastackPolardbReadonlyInstance#vswitch_id}
  */
  readonly vswitchId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_polardb_readonly_instance#zone_id ApsarastackPolardbReadonlyInstance#zone_id}
  */
  readonly zoneId?: string;
  /**
  * parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_polardb_readonly_instance#parameters ApsarastackPolardbReadonlyInstance#parameters}
  */
  readonly parameters?: ApsarastackPolardbReadonlyInstanceParameters[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_polardb_readonly_instance#timeouts ApsarastackPolardbReadonlyInstance#timeouts}
  */
  readonly timeouts?: ApsarastackPolardbReadonlyInstanceTimeouts;
}
export interface ApsarastackPolardbReadonlyInstanceParameters {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_polardb_readonly_instance#name ApsarastackPolardbReadonlyInstance#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_polardb_readonly_instance#value ApsarastackPolardbReadonlyInstance#value}
  */
  readonly value: string;
}

export function apsarastackPolardbReadonlyInstanceParametersToTerraform(struct?: ApsarastackPolardbReadonlyInstanceParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function apsarastackPolardbReadonlyInstanceParametersToHclTerraform(struct?: ApsarastackPolardbReadonlyInstanceParameters | cdktf.IResolvable): any {
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

export class ApsarastackPolardbReadonlyInstanceParametersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApsarastackPolardbReadonlyInstanceParameters | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ApsarastackPolardbReadonlyInstanceParameters | cdktf.IResolvable | undefined) {
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

export class ApsarastackPolardbReadonlyInstanceParametersList extends cdktf.ComplexList {
  public internalValue? : ApsarastackPolardbReadonlyInstanceParameters[] | cdktf.IResolvable

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
  public get(index: number): ApsarastackPolardbReadonlyInstanceParametersOutputReference {
    return new ApsarastackPolardbReadonlyInstanceParametersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApsarastackPolardbReadonlyInstanceTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_polardb_readonly_instance#create ApsarastackPolardbReadonlyInstance#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_polardb_readonly_instance#delete ApsarastackPolardbReadonlyInstance#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_polardb_readonly_instance#update ApsarastackPolardbReadonlyInstance#update}
  */
  readonly update?: string;
}

export function apsarastackPolardbReadonlyInstanceTimeoutsToTerraform(struct?: ApsarastackPolardbReadonlyInstanceTimeouts | cdktf.IResolvable): any {
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


export function apsarastackPolardbReadonlyInstanceTimeoutsToHclTerraform(struct?: ApsarastackPolardbReadonlyInstanceTimeouts | cdktf.IResolvable): any {
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

export class ApsarastackPolardbReadonlyInstanceTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ApsarastackPolardbReadonlyInstanceTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ApsarastackPolardbReadonlyInstanceTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_polardb_readonly_instance apsarastack_polardb_readonly_instance}
*/
export class ApsarastackPolardbReadonlyInstance extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "apsarastack_polardb_readonly_instance";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ApsarastackPolardbReadonlyInstance resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ApsarastackPolardbReadonlyInstance to import
  * @param importFromId The id of the existing ApsarastackPolardbReadonlyInstance that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_polardb_readonly_instance#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ApsarastackPolardbReadonlyInstance to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "apsarastack_polardb_readonly_instance", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_polardb_readonly_instance apsarastack_polardb_readonly_instance} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ApsarastackPolardbReadonlyInstanceConfig
  */
  public constructor(scope: Construct, id: string, config: ApsarastackPolardbReadonlyInstanceConfig) {
    super(scope, id, {
      terraformResourceType: 'apsarastack_polardb_readonly_instance',
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
    this._dbInstanceClass = config.dbInstanceClass;
    this._dbInstanceDescription = config.dbInstanceDescription;
    this._dbInstanceStorage = config.dbInstanceStorage;
    this._dbInstanceStorageType = config.dbInstanceStorageType;
    this._enableSsl = config.enableSsl;
    this._encryptAlgorithm = config.encryptAlgorithm;
    this._engine = config.engine;
    this._engineVersion = config.engineVersion;
    this._id = config.id;
    this._instanceName = config.instanceName;
    this._instanceStorage = config.instanceStorage;
    this._instanceType = config.instanceType;
    this._masterDbInstanceId = config.masterDbInstanceId;
    this._masterInstanceId = config.masterInstanceId;
    this._tdeStatus = config.tdeStatus;
    this._vswitchId = config.vswitchId;
    this._zoneId = config.zoneId;
    this._parameters.internalValue = config.parameters;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // connection_string - computed: true, optional: false, required: false
  public get connectionString() {
    return this.getStringAttribute('connection_string');
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

  // db_instance_storage_type - computed: false, optional: false, required: true
  private _dbInstanceStorageType?: string; 
  public get dbInstanceStorageType() {
    return this.getStringAttribute('db_instance_storage_type');
  }
  public set dbInstanceStorageType(value: string) {
    this._dbInstanceStorageType = value;
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

  // engine - computed: true, optional: true, required: false
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

  // master_db_instance_id - computed: true, optional: true, required: false
  private _masterDbInstanceId?: string; 
  public get masterDbInstanceId() {
    return this.getStringAttribute('master_db_instance_id');
  }
  public set masterDbInstanceId(value: string) {
    this._masterDbInstanceId = value;
  }
  public resetMasterDbInstanceId() {
    this._masterDbInstanceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get masterDbInstanceIdInput() {
    return this._masterDbInstanceId;
  }

  // master_instance_id - computed: true, optional: true, required: false
  private _masterInstanceId?: string; 
  public get masterInstanceId() {
    return this.getStringAttribute('master_instance_id');
  }
  public set masterInstanceId(value: string) {
    this._masterInstanceId = value;
  }
  public resetMasterInstanceId() {
    this._masterInstanceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get masterInstanceIdInput() {
    return this._masterInstanceId;
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getStringAttribute('port');
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

  // parameters - computed: false, optional: true, required: false
  private _parameters = new ApsarastackPolardbReadonlyInstanceParametersList(this, "parameters", true);
  public get parameters() {
    return this._parameters;
  }
  public putParameters(value: ApsarastackPolardbReadonlyInstanceParameters[] | cdktf.IResolvable) {
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
  private _timeouts = new ApsarastackPolardbReadonlyInstanceTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ApsarastackPolardbReadonlyInstanceTimeouts) {
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
      db_instance_class: cdktf.stringToTerraform(this._dbInstanceClass),
      db_instance_description: cdktf.stringToTerraform(this._dbInstanceDescription),
      db_instance_storage: cdktf.numberToTerraform(this._dbInstanceStorage),
      db_instance_storage_type: cdktf.stringToTerraform(this._dbInstanceStorageType),
      enable_ssl: cdktf.booleanToTerraform(this._enableSsl),
      encrypt_algorithm: cdktf.stringToTerraform(this._encryptAlgorithm),
      engine: cdktf.stringToTerraform(this._engine),
      engine_version: cdktf.stringToTerraform(this._engineVersion),
      id: cdktf.stringToTerraform(this._id),
      instance_name: cdktf.stringToTerraform(this._instanceName),
      instance_storage: cdktf.numberToTerraform(this._instanceStorage),
      instance_type: cdktf.stringToTerraform(this._instanceType),
      master_db_instance_id: cdktf.stringToTerraform(this._masterDbInstanceId),
      master_instance_id: cdktf.stringToTerraform(this._masterInstanceId),
      tde_status: cdktf.booleanToTerraform(this._tdeStatus),
      vswitch_id: cdktf.stringToTerraform(this._vswitchId),
      zone_id: cdktf.stringToTerraform(this._zoneId),
      parameters: cdktf.listMapper(apsarastackPolardbReadonlyInstanceParametersToTerraform, true)(this._parameters.internalValue),
      timeouts: apsarastackPolardbReadonlyInstanceTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
      master_instance_id: {
        value: cdktf.stringToHclTerraform(this._masterInstanceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
      parameters: {
        value: cdktf.listMapperHcl(apsarastackPolardbReadonlyInstanceParametersToHclTerraform, true)(this._parameters.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ApsarastackPolardbReadonlyInstanceParametersList",
      },
      timeouts: {
        value: apsarastackPolardbReadonlyInstanceTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ApsarastackPolardbReadonlyInstanceTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
