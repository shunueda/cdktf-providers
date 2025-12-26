// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/elasticsearch_diagnose
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ElasticsearchDiagnoseConfig extends cdktf.TerraformMetaArguments {
  /**
  * Intelligent operation and maintenance staff regularly patrol the inspection time every day, the time format is HH:00:00, such as 15:00:00.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/elasticsearch_diagnose#cron_time ElasticsearchDiagnose#cron_time}
  */
  readonly cronTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/elasticsearch_diagnose#id ElasticsearchDiagnose#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Instance id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/elasticsearch_diagnose#instance_id ElasticsearchDiagnose#instance_id}
  */
  readonly instanceId: string;
}
export interface ElasticsearchDiagnoseDiagnoseJobMetas {
}

export function elasticsearchDiagnoseDiagnoseJobMetasToTerraform(struct?: ElasticsearchDiagnoseDiagnoseJobMetas): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function elasticsearchDiagnoseDiagnoseJobMetasToHclTerraform(struct?: ElasticsearchDiagnoseDiagnoseJobMetas): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ElasticsearchDiagnoseDiagnoseJobMetasOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ElasticsearchDiagnoseDiagnoseJobMetas | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ElasticsearchDiagnoseDiagnoseJobMetas | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // job_description - computed: true, optional: false, required: false
  public get jobDescription() {
    return this.getStringAttribute('job_description');
  }

  // job_name - computed: true, optional: false, required: false
  public get jobName() {
    return this.getStringAttribute('job_name');
  }

  // job_zh_name - computed: true, optional: false, required: false
  public get jobZhName() {
    return this.getStringAttribute('job_zh_name');
  }
}

export class ElasticsearchDiagnoseDiagnoseJobMetasList extends cdktf.ComplexList {

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
  public get(index: number): ElasticsearchDiagnoseDiagnoseJobMetasOutputReference {
    return new ElasticsearchDiagnoseDiagnoseJobMetasOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/elasticsearch_diagnose tencentcloud_elasticsearch_diagnose}
*/
export class ElasticsearchDiagnose extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_elasticsearch_diagnose";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ElasticsearchDiagnose resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ElasticsearchDiagnose to import
  * @param importFromId The id of the existing ElasticsearchDiagnose that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/elasticsearch_diagnose#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ElasticsearchDiagnose to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_elasticsearch_diagnose", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/elasticsearch_diagnose tencentcloud_elasticsearch_diagnose} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ElasticsearchDiagnoseConfig
  */
  public constructor(scope: Construct, id: string, config: ElasticsearchDiagnoseConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_elasticsearch_diagnose',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.49',
        providerVersionConstraint: '1.82.49'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._cronTime = config.cronTime;
    this._id = config.id;
    this._instanceId = config.instanceId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cron_time - computed: false, optional: true, required: false
  private _cronTime?: string; 
  public get cronTime() {
    return this.getStringAttribute('cron_time');
  }
  public set cronTime(value: string) {
    this._cronTime = value;
  }
  public resetCronTime() {
    this._cronTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cronTimeInput() {
    return this._cronTime;
  }

  // diagnose_job_metas - computed: true, optional: false, required: false
  private _diagnoseJobMetas = new ElasticsearchDiagnoseDiagnoseJobMetasList(this, "diagnose_job_metas", false);
  public get diagnoseJobMetas() {
    return this._diagnoseJobMetas;
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

  // instance_id - computed: false, optional: false, required: true
  private _instanceId?: string; 
  public get instanceId() {
    return this.getStringAttribute('instance_id');
  }
  public set instanceId(value: string) {
    this._instanceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceIdInput() {
    return this._instanceId;
  }

  // max_count - computed: true, optional: false, required: false
  public get maxCount() {
    return this.getNumberAttribute('max_count');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cron_time: cdktf.stringToTerraform(this._cronTime),
      id: cdktf.stringToTerraform(this._id),
      instance_id: cdktf.stringToTerraform(this._instanceId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cron_time: {
        value: cdktf.stringToHclTerraform(this._cronTime),
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
      instance_id: {
        value: cdktf.stringToHclTerraform(this._instanceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
