// https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/selectdb_db_cluster
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SelectdbDbClusterConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/selectdb_db_cluster#cache_size SelectdbDbCluster#cache_size}
  */
  readonly cacheSize: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/selectdb_db_cluster#db_cluster_class SelectdbDbCluster#db_cluster_class}
  */
  readonly dbClusterClass: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/selectdb_db_cluster#db_cluster_description SelectdbDbCluster#db_cluster_description}
  */
  readonly dbClusterDescription: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/selectdb_db_cluster#db_instance_id SelectdbDbCluster#db_instance_id}
  */
  readonly dbInstanceId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/selectdb_db_cluster#desired_status SelectdbDbCluster#desired_status}
  */
  readonly desiredStatus?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/selectdb_db_cluster#id SelectdbDbCluster#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/selectdb_db_cluster#payment_type SelectdbDbCluster#payment_type}
  */
  readonly paymentType: string;
  /**
  * desired_params block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/selectdb_db_cluster#desired_params SelectdbDbCluster#desired_params}
  */
  readonly desiredParams?: SelectdbDbClusterDesiredParams[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/selectdb_db_cluster#timeouts SelectdbDbCluster#timeouts}
  */
  readonly timeouts?: SelectdbDbClusterTimeouts;
}
export interface SelectdbDbClusterParamChangeLogs {
}

export function selectdbDbClusterParamChangeLogsToTerraform(struct?: SelectdbDbClusterParamChangeLogs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function selectdbDbClusterParamChangeLogsToHclTerraform(struct?: SelectdbDbClusterParamChangeLogs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class SelectdbDbClusterParamChangeLogsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SelectdbDbClusterParamChangeLogs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SelectdbDbClusterParamChangeLogs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // config_id - computed: true, optional: false, required: false
  public get configId() {
    return this.getNumberAttribute('config_id');
  }

  // gmt_created - computed: true, optional: false, required: false
  public get gmtCreated() {
    return this.getStringAttribute('gmt_created');
  }

  // gmt_modified - computed: true, optional: false, required: false
  public get gmtModified() {
    return this.getStringAttribute('gmt_modified');
  }

  // is_applied - computed: true, optional: false, required: false
  public get isApplied() {
    return this.getBooleanAttribute('is_applied');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // new_value - computed: true, optional: false, required: false
  public get newValue() {
    return this.getStringAttribute('new_value');
  }

  // old_value - computed: true, optional: false, required: false
  public get oldValue() {
    return this.getStringAttribute('old_value');
  }
}

export class SelectdbDbClusterParamChangeLogsList extends cdktf.ComplexList {

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
  public get(index: number): SelectdbDbClusterParamChangeLogsOutputReference {
    return new SelectdbDbClusterParamChangeLogsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SelectdbDbClusterDesiredParams {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/selectdb_db_cluster#name SelectdbDbCluster#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/selectdb_db_cluster#value SelectdbDbCluster#value}
  */
  readonly value?: string;
}

export function selectdbDbClusterDesiredParamsToTerraform(struct?: SelectdbDbClusterDesiredParams | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function selectdbDbClusterDesiredParamsToHclTerraform(struct?: SelectdbDbClusterDesiredParams | cdktf.IResolvable): any {
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

export class SelectdbDbClusterDesiredParamsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SelectdbDbClusterDesiredParams | cdktf.IResolvable | undefined {
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

  public set internalValue(value: SelectdbDbClusterDesiredParams | cdktf.IResolvable | undefined) {
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

export class SelectdbDbClusterDesiredParamsList extends cdktf.ComplexList {
  public internalValue? : SelectdbDbClusterDesiredParams[] | cdktf.IResolvable

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
  public get(index: number): SelectdbDbClusterDesiredParamsOutputReference {
    return new SelectdbDbClusterDesiredParamsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SelectdbDbClusterTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/selectdb_db_cluster#create SelectdbDbCluster#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/selectdb_db_cluster#delete SelectdbDbCluster#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/selectdb_db_cluster#update SelectdbDbCluster#update}
  */
  readonly update?: string;
}

export function selectdbDbClusterTimeoutsToTerraform(struct?: SelectdbDbClusterTimeouts | cdktf.IResolvable): any {
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


export function selectdbDbClusterTimeoutsToHclTerraform(struct?: SelectdbDbClusterTimeouts | cdktf.IResolvable): any {
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

export class SelectdbDbClusterTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SelectdbDbClusterTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: SelectdbDbClusterTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/selectdb_db_cluster alicloud_selectdb_db_cluster}
*/
export class SelectdbDbCluster extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_selectdb_db_cluster";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SelectdbDbCluster resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SelectdbDbCluster to import
  * @param importFromId The id of the existing SelectdbDbCluster that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/selectdb_db_cluster#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SelectdbDbCluster to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_selectdb_db_cluster", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/selectdb_db_cluster alicloud_selectdb_db_cluster} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SelectdbDbClusterConfig
  */
  public constructor(scope: Construct, id: string, config: SelectdbDbClusterConfig) {
    super(scope, id, {
      terraformResourceType: 'alicloud_selectdb_db_cluster',
      terraformGeneratorMetadata: {
        providerName: 'alicloud',
        providerVersion: '1.264.0',
        providerVersionConstraint: '1.264.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._cacheSize = config.cacheSize;
    this._dbClusterClass = config.dbClusterClass;
    this._dbClusterDescription = config.dbClusterDescription;
    this._dbInstanceId = config.dbInstanceId;
    this._desiredStatus = config.desiredStatus;
    this._id = config.id;
    this._paymentType = config.paymentType;
    this._desiredParams.internalValue = config.desiredParams;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cache_size - computed: false, optional: false, required: true
  private _cacheSize?: number; 
  public get cacheSize() {
    return this.getNumberAttribute('cache_size');
  }
  public set cacheSize(value: number) {
    this._cacheSize = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheSizeInput() {
    return this._cacheSize;
  }

  // cpu - computed: true, optional: false, required: false
  public get cpu() {
    return this.getNumberAttribute('cpu');
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // db_cluster_class - computed: false, optional: false, required: true
  private _dbClusterClass?: string; 
  public get dbClusterClass() {
    return this.getStringAttribute('db_cluster_class');
  }
  public set dbClusterClass(value: string) {
    this._dbClusterClass = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dbClusterClassInput() {
    return this._dbClusterClass;
  }

  // db_cluster_description - computed: false, optional: false, required: true
  private _dbClusterDescription?: string; 
  public get dbClusterDescription() {
    return this.getStringAttribute('db_cluster_description');
  }
  public set dbClusterDescription(value: string) {
    this._dbClusterDescription = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dbClusterDescriptionInput() {
    return this._dbClusterDescription;
  }

  // db_cluster_id - computed: true, optional: false, required: false
  public get dbClusterId() {
    return this.getStringAttribute('db_cluster_id');
  }

  // db_instance_id - computed: false, optional: false, required: true
  private _dbInstanceId?: string; 
  public get dbInstanceId() {
    return this.getStringAttribute('db_instance_id');
  }
  public set dbInstanceId(value: string) {
    this._dbInstanceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dbInstanceIdInput() {
    return this._dbInstanceId;
  }

  // desired_status - computed: false, optional: true, required: false
  private _desiredStatus?: string; 
  public get desiredStatus() {
    return this.getStringAttribute('desired_status');
  }
  public set desiredStatus(value: string) {
    this._desiredStatus = value;
  }
  public resetDesiredStatus() {
    this._desiredStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get desiredStatusInput() {
    return this._desiredStatus;
  }

  // engine - computed: true, optional: false, required: false
  public get engine() {
    return this.getStringAttribute('engine');
  }

  // engine_version - computed: true, optional: false, required: false
  public get engineVersion() {
    return this.getStringAttribute('engine_version');
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

  // memory - computed: true, optional: false, required: false
  public get memory() {
    return this.getNumberAttribute('memory');
  }

  // param_change_logs - computed: true, optional: false, required: false
  private _paramChangeLogs = new SelectdbDbClusterParamChangeLogsList(this, "param_change_logs", false);
  public get paramChangeLogs() {
    return this._paramChangeLogs;
  }

  // payment_type - computed: false, optional: false, required: true
  private _paymentType?: string; 
  public get paymentType() {
    return this.getStringAttribute('payment_type');
  }
  public set paymentType(value: string) {
    this._paymentType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get paymentTypeInput() {
    return this._paymentType;
  }

  // region_id - computed: true, optional: false, required: false
  public get regionId() {
    return this.getStringAttribute('region_id');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // vpc_id - computed: true, optional: false, required: false
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }

  // zone_id - computed: true, optional: false, required: false
  public get zoneId() {
    return this.getStringAttribute('zone_id');
  }

  // desired_params - computed: false, optional: true, required: false
  private _desiredParams = new SelectdbDbClusterDesiredParamsList(this, "desired_params", false);
  public get desiredParams() {
    return this._desiredParams;
  }
  public putDesiredParams(value: SelectdbDbClusterDesiredParams[] | cdktf.IResolvable) {
    this._desiredParams.internalValue = value;
  }
  public resetDesiredParams() {
    this._desiredParams.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get desiredParamsInput() {
    return this._desiredParams.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new SelectdbDbClusterTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: SelectdbDbClusterTimeouts) {
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
      cache_size: cdktf.numberToTerraform(this._cacheSize),
      db_cluster_class: cdktf.stringToTerraform(this._dbClusterClass),
      db_cluster_description: cdktf.stringToTerraform(this._dbClusterDescription),
      db_instance_id: cdktf.stringToTerraform(this._dbInstanceId),
      desired_status: cdktf.stringToTerraform(this._desiredStatus),
      id: cdktf.stringToTerraform(this._id),
      payment_type: cdktf.stringToTerraform(this._paymentType),
      desired_params: cdktf.listMapper(selectdbDbClusterDesiredParamsToTerraform, true)(this._desiredParams.internalValue),
      timeouts: selectdbDbClusterTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cache_size: {
        value: cdktf.numberToHclTerraform(this._cacheSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      db_cluster_class: {
        value: cdktf.stringToHclTerraform(this._dbClusterClass),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      db_cluster_description: {
        value: cdktf.stringToHclTerraform(this._dbClusterDescription),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      db_instance_id: {
        value: cdktf.stringToHclTerraform(this._dbInstanceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      desired_status: {
        value: cdktf.stringToHclTerraform(this._desiredStatus),
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
      payment_type: {
        value: cdktf.stringToHclTerraform(this._paymentType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      desired_params: {
        value: cdktf.listMapperHcl(selectdbDbClusterDesiredParamsToHclTerraform, true)(this._desiredParams.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SelectdbDbClusterDesiredParamsList",
      },
      timeouts: {
        value: selectdbDbClusterTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SelectdbDbClusterTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
