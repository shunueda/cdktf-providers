// https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/data-sources/cloud_monitor_service_hybrid_double_writes
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAlicloudCloudMonitorServiceHybridDoubleWritesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/data-sources/cloud_monitor_service_hybrid_double_writes#id DataAlicloudCloudMonitorServiceHybridDoubleWrites#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/data-sources/cloud_monitor_service_hybrid_double_writes#ids DataAlicloudCloudMonitorServiceHybridDoubleWrites#ids}
  */
  readonly ids?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/data-sources/cloud_monitor_service_hybrid_double_writes#namespace DataAlicloudCloudMonitorServiceHybridDoubleWrites#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/data-sources/cloud_monitor_service_hybrid_double_writes#output_file DataAlicloudCloudMonitorServiceHybridDoubleWrites#output_file}
  */
  readonly outputFile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/data-sources/cloud_monitor_service_hybrid_double_writes#source_namespace DataAlicloudCloudMonitorServiceHybridDoubleWrites#source_namespace}
  */
  readonly sourceNamespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/data-sources/cloud_monitor_service_hybrid_double_writes#source_user_id DataAlicloudCloudMonitorServiceHybridDoubleWrites#source_user_id}
  */
  readonly sourceUserId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/data-sources/cloud_monitor_service_hybrid_double_writes#user_id DataAlicloudCloudMonitorServiceHybridDoubleWrites#user_id}
  */
  readonly userId?: string;
}
export interface DataAlicloudCloudMonitorServiceHybridDoubleWritesHybridDoubleWrites {
}

export function dataAlicloudCloudMonitorServiceHybridDoubleWritesHybridDoubleWritesToTerraform(struct?: DataAlicloudCloudMonitorServiceHybridDoubleWritesHybridDoubleWrites): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAlicloudCloudMonitorServiceHybridDoubleWritesHybridDoubleWritesToHclTerraform(struct?: DataAlicloudCloudMonitorServiceHybridDoubleWritesHybridDoubleWrites): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAlicloudCloudMonitorServiceHybridDoubleWritesHybridDoubleWritesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAlicloudCloudMonitorServiceHybridDoubleWritesHybridDoubleWrites | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAlicloudCloudMonitorServiceHybridDoubleWritesHybridDoubleWrites | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // namespace - computed: true, optional: false, required: false
  public get namespace() {
    return this.getStringAttribute('namespace');
  }

  // source_namespace - computed: true, optional: false, required: false
  public get sourceNamespace() {
    return this.getStringAttribute('source_namespace');
  }

  // source_user_id - computed: true, optional: false, required: false
  public get sourceUserId() {
    return this.getStringAttribute('source_user_id');
  }

  // user_id - computed: true, optional: false, required: false
  public get userId() {
    return this.getStringAttribute('user_id');
  }
}

export class DataAlicloudCloudMonitorServiceHybridDoubleWritesHybridDoubleWritesList extends cdktf.ComplexList {

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
  public get(index: number): DataAlicloudCloudMonitorServiceHybridDoubleWritesHybridDoubleWritesOutputReference {
    return new DataAlicloudCloudMonitorServiceHybridDoubleWritesHybridDoubleWritesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/data-sources/cloud_monitor_service_hybrid_double_writes alicloud_cloud_monitor_service_hybrid_double_writes}
*/
export class DataAlicloudCloudMonitorServiceHybridDoubleWrites extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_cloud_monitor_service_hybrid_double_writes";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAlicloudCloudMonitorServiceHybridDoubleWrites resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAlicloudCloudMonitorServiceHybridDoubleWrites to import
  * @param importFromId The id of the existing DataAlicloudCloudMonitorServiceHybridDoubleWrites that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/data-sources/cloud_monitor_service_hybrid_double_writes#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAlicloudCloudMonitorServiceHybridDoubleWrites to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_cloud_monitor_service_hybrid_double_writes", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/data-sources/cloud_monitor_service_hybrid_double_writes alicloud_cloud_monitor_service_hybrid_double_writes} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAlicloudCloudMonitorServiceHybridDoubleWritesConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataAlicloudCloudMonitorServiceHybridDoubleWritesConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'alicloud_cloud_monitor_service_hybrid_double_writes',
      terraformGeneratorMetadata: {
        providerName: 'alicloud',
        providerVersion: '1.262.1',
        providerVersionConstraint: '1.262.1'
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
    this._namespace = config.namespace;
    this._outputFile = config.outputFile;
    this._sourceNamespace = config.sourceNamespace;
    this._sourceUserId = config.sourceUserId;
    this._userId = config.userId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // hybrid_double_writes - computed: true, optional: false, required: false
  private _hybridDoubleWrites = new DataAlicloudCloudMonitorServiceHybridDoubleWritesHybridDoubleWritesList(this, "hybrid_double_writes", false);
  public get hybridDoubleWrites() {
    return this._hybridDoubleWrites;
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

  // ids - computed: true, optional: true, required: false
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

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // output_file - computed: false, optional: true, required: false
  private _outputFile?: string; 
  public get outputFile() {
    return this.getStringAttribute('output_file');
  }
  public set outputFile(value: string) {
    this._outputFile = value;
  }
  public resetOutputFile() {
    this._outputFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputFileInput() {
    return this._outputFile;
  }

  // source_namespace - computed: false, optional: true, required: false
  private _sourceNamespace?: string; 
  public get sourceNamespace() {
    return this.getStringAttribute('source_namespace');
  }
  public set sourceNamespace(value: string) {
    this._sourceNamespace = value;
  }
  public resetSourceNamespace() {
    this._sourceNamespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceNamespaceInput() {
    return this._sourceNamespace;
  }

  // source_user_id - computed: false, optional: true, required: false
  private _sourceUserId?: string; 
  public get sourceUserId() {
    return this.getStringAttribute('source_user_id');
  }
  public set sourceUserId(value: string) {
    this._sourceUserId = value;
  }
  public resetSourceUserId() {
    this._sourceUserId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceUserIdInput() {
    return this._sourceUserId;
  }

  // user_id - computed: false, optional: true, required: false
  private _userId?: string; 
  public get userId() {
    return this.getStringAttribute('user_id');
  }
  public set userId(value: string) {
    this._userId = value;
  }
  public resetUserId() {
    this._userId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userIdInput() {
    return this._userId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ids),
      namespace: cdktf.stringToTerraform(this._namespace),
      output_file: cdktf.stringToTerraform(this._outputFile),
      source_namespace: cdktf.stringToTerraform(this._sourceNamespace),
      source_user_id: cdktf.stringToTerraform(this._sourceUserId),
      user_id: cdktf.stringToTerraform(this._userId),
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
      namespace: {
        value: cdktf.stringToHclTerraform(this._namespace),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      output_file: {
        value: cdktf.stringToHclTerraform(this._outputFile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source_namespace: {
        value: cdktf.stringToHclTerraform(this._sourceNamespace),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source_user_id: {
        value: cdktf.stringToHclTerraform(this._sourceUserId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_id: {
        value: cdktf.stringToHclTerraform(this._userId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
