// https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/data-sources/mqtt_instances
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAlibabacloudstackMqttInstancesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/data-sources/mqtt_instances#id DataAlibabacloudstackMqttInstances#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/data-sources/mqtt_instances#ids DataAlibabacloudstackMqttInstances#ids}
  */
  readonly ids?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/data-sources/mqtt_instances#name_regex DataAlibabacloudstackMqttInstances#name_regex}
  */
  readonly nameRegex?: string;
}
export interface DataAlibabacloudstackMqttInstancesInstances {
}

export function dataAlibabacloudstackMqttInstancesInstancesToTerraform(struct?: DataAlibabacloudstackMqttInstancesInstances): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAlibabacloudstackMqttInstancesInstancesToHclTerraform(struct?: DataAlibabacloudstackMqttInstancesInstances): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAlibabacloudstackMqttInstancesInstancesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAlibabacloudstackMqttInstancesInstances | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAlibabacloudstackMqttInstancesInstances | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getNumberAttribute('create_time');
  }

  // endpoints - computed: true, optional: false, required: false
  private _endpoints = new cdktf.StringMap(this, "endpoints");
  public get endpoints() {
    return this._endpoints;
  }

  // independent_naming - computed: true, optional: false, required: false
  public get independentNaming() {
    return this.getBooleanAttribute('independent_naming');
  }

  // instance_id - computed: true, optional: false, required: false
  public get instanceId() {
    return this.getStringAttribute('instance_id');
  }

  // instance_name - computed: true, optional: false, required: false
  public get instanceName() {
    return this.getStringAttribute('instance_name');
  }

  // instance_status - computed: true, optional: false, required: false
  public get instanceStatus() {
    return this.getNumberAttribute('instance_status');
  }

  // instance_type - computed: true, optional: false, required: false
  public get instanceType() {
    return this.getNumberAttribute('instance_type');
  }

  // max_conn - computed: true, optional: false, required: false
  public get maxConn() {
    return this.getNumberAttribute('max_conn');
  }

  // max_down_tps - computed: true, optional: false, required: false
  public get maxDownTps() {
    return this.getNumberAttribute('max_down_tps');
  }

  // max_sub - computed: true, optional: false, required: false
  public get maxSub() {
    return this.getNumberAttribute('max_sub');
  }

  // max_tps - computed: true, optional: false, required: false
  public get maxTps() {
    return this.getNumberAttribute('max_tps');
  }

  // max_up_tps - computed: true, optional: false, required: false
  public get maxUpTps() {
    return this.getNumberAttribute('max_up_tps');
  }

  // namespace_rules_type - computed: true, optional: false, required: false
  public get namespaceRulesType() {
    return this.getBooleanAttribute('namespace_rules_type');
  }

  // order_id - computed: true, optional: false, required: false
  public get orderId() {
    return this.getStringAttribute('order_id');
  }

  // sp_instance_type - computed: true, optional: false, required: false
  public get spInstanceType() {
    return this.getNumberAttribute('sp_instance_type');
  }

  // store_instance_id - computed: true, optional: false, required: false
  public get storeInstanceId() {
    return this.getStringAttribute('store_instance_id');
  }

  // store_type - computed: true, optional: false, required: false
  public get storeType() {
    return this.getNumberAttribute('store_type');
  }
}

export class DataAlibabacloudstackMqttInstancesInstancesList extends cdktf.ComplexList {

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
  public get(index: number): DataAlibabacloudstackMqttInstancesInstancesOutputReference {
    return new DataAlibabacloudstackMqttInstancesInstancesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/data-sources/mqtt_instances alibabacloudstack_mqtt_instances}
*/
export class DataAlibabacloudstackMqttInstances extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alibabacloudstack_mqtt_instances";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAlibabacloudstackMqttInstances resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAlibabacloudstackMqttInstances to import
  * @param importFromId The id of the existing DataAlibabacloudstackMqttInstances that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/data-sources/mqtt_instances#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAlibabacloudstackMqttInstances to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alibabacloudstack_mqtt_instances", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/data-sources/mqtt_instances alibabacloudstack_mqtt_instances} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAlibabacloudstackMqttInstancesConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataAlibabacloudstackMqttInstancesConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'alibabacloudstack_mqtt_instances',
      terraformGeneratorMetadata: {
        providerName: 'alibabacloudstack',
        providerVersion: '3.18.20',
        providerVersionConstraint: '3.18.20'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._ids = config.ids;
    this._nameRegex = config.nameRegex;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // ids - computed: false, optional: true, required: false
  private _ids?: string[]; 
  public get ids() {
    return this.getListAttribute('ids');
  }
  public set ids(value: string[]) {
    this._ids = value;
  }
  public resetIds() {
    this._ids = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idsInput() {
    return this._ids;
  }

  // instances - computed: true, optional: false, required: false
  private _instances = new DataAlibabacloudstackMqttInstancesInstancesList(this, "instances", false);
  public get instances() {
    return this._instances;
  }

  // name_regex - computed: false, optional: true, required: false
  private _nameRegex?: string; 
  public get nameRegex() {
    return this.getStringAttribute('name_regex');
  }
  public set nameRegex(value: string) {
    this._nameRegex = value;
  }
  public resetNameRegex() {
    this._nameRegex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameRegexInput() {
    return this._nameRegex;
  }

  // names - computed: true, optional: false, required: false
  public get names() {
    return this.getListAttribute('names');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ids),
      name_regex: cdktf.stringToTerraform(this._nameRegex),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._ids),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      name_regex: {
        value: cdktf.stringToHclTerraform(this._nameRegex),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
