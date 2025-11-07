// https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/data-sources/qos_map_policy_definition
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataSdwanQosMapPolicyDefinitionConfig extends cdktf.TerraformMetaArguments {
  /**
  * The id of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/data-sources/qos_map_policy_definition#id DataSdwanQosMapPolicyDefinition#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataSdwanQosMapPolicyDefinitionQosSchedulers {
}

export function dataSdwanQosMapPolicyDefinitionQosSchedulersToTerraform(struct?: DataSdwanQosMapPolicyDefinitionQosSchedulers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSdwanQosMapPolicyDefinitionQosSchedulersToHclTerraform(struct?: DataSdwanQosMapPolicyDefinitionQosSchedulers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSdwanQosMapPolicyDefinitionQosSchedulersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSdwanQosMapPolicyDefinitionQosSchedulers | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSdwanQosMapPolicyDefinitionQosSchedulers | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // bandwidth_percent - computed: true, optional: false, required: false
  public get bandwidthPercent() {
    return this.getNumberAttribute('bandwidth_percent');
  }

  // buffer_percent - computed: true, optional: false, required: false
  public get bufferPercent() {
    return this.getNumberAttribute('buffer_percent');
  }

  // burst - computed: true, optional: false, required: false
  public get burst() {
    return this.getNumberAttribute('burst');
  }

  // class_map_id - computed: true, optional: false, required: false
  public get classMapId() {
    return this.getStringAttribute('class_map_id');
  }

  // class_map_version - computed: true, optional: false, required: false
  public get classMapVersion() {
    return this.getNumberAttribute('class_map_version');
  }

  // drop_type - computed: true, optional: false, required: false
  public get dropType() {
    return this.getStringAttribute('drop_type');
  }

  // queue - computed: true, optional: false, required: false
  public get queue() {
    return this.getNumberAttribute('queue');
  }

  // scheduling_type - computed: true, optional: false, required: false
  public get schedulingType() {
    return this.getStringAttribute('scheduling_type');
  }
}

export class DataSdwanQosMapPolicyDefinitionQosSchedulersList extends cdktf.ComplexList {

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
  public get(index: number): DataSdwanQosMapPolicyDefinitionQosSchedulersOutputReference {
    return new DataSdwanQosMapPolicyDefinitionQosSchedulersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/data-sources/qos_map_policy_definition sdwan_qos_map_policy_definition}
*/
export class DataSdwanQosMapPolicyDefinition extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sdwan_qos_map_policy_definition";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataSdwanQosMapPolicyDefinition resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataSdwanQosMapPolicyDefinition to import
  * @param importFromId The id of the existing DataSdwanQosMapPolicyDefinition that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/data-sources/qos_map_policy_definition#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataSdwanQosMapPolicyDefinition to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sdwan_qos_map_policy_definition", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/data-sources/qos_map_policy_definition sdwan_qos_map_policy_definition} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataSdwanQosMapPolicyDefinitionConfig
  */
  public constructor(scope: Construct, id: string, config: DataSdwanQosMapPolicyDefinitionConfig) {
    super(scope, id, {
      terraformResourceType: 'sdwan_qos_map_policy_definition',
      terraformGeneratorMetadata: {
        providerName: 'sdwan',
        providerVersion: '0.8.1'
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
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // qos_schedulers - computed: true, optional: false, required: false
  private _qosSchedulers = new DataSdwanQosMapPolicyDefinitionQosSchedulersList(this, "qos_schedulers", true);
  public get qosSchedulers() {
    return this._qosSchedulers;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getNumberAttribute('version');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
