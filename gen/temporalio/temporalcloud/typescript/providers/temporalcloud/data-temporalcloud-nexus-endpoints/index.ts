// https://registry.terraform.io/providers/temporalio/temporalcloud/1.1.1/docs/data-sources/nexus_endpoints
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataTemporalcloudNexusEndpointsConfig extends cdktf.TerraformMetaArguments {
}
export interface DataTemporalcloudNexusEndpointsNexusEndpointsWorkerTarget {
}

export function dataTemporalcloudNexusEndpointsNexusEndpointsWorkerTargetToTerraform(struct?: DataTemporalcloudNexusEndpointsNexusEndpointsWorkerTarget): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTemporalcloudNexusEndpointsNexusEndpointsWorkerTargetToHclTerraform(struct?: DataTemporalcloudNexusEndpointsNexusEndpointsWorkerTarget): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTemporalcloudNexusEndpointsNexusEndpointsWorkerTargetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataTemporalcloudNexusEndpointsNexusEndpointsWorkerTarget | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTemporalcloudNexusEndpointsNexusEndpointsWorkerTarget | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // namespace_id - computed: true, optional: false, required: false
  public get namespaceId() {
    return this.getStringAttribute('namespace_id');
  }

  // task_queue - computed: true, optional: false, required: false
  public get taskQueue() {
    return this.getStringAttribute('task_queue');
  }
}
export interface DataTemporalcloudNexusEndpointsNexusEndpoints {
  /**
  * The description of the Nexus Endpoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/temporalio/temporalcloud/1.1.1/docs/data-sources/nexus_endpoints#description DataTemporalcloudNexusEndpoints#description}
  */
  readonly description?: string;
}

export function dataTemporalcloudNexusEndpointsNexusEndpointsToTerraform(struct?: DataTemporalcloudNexusEndpointsNexusEndpoints): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
  }
}


export function dataTemporalcloudNexusEndpointsNexusEndpointsToHclTerraform(struct?: DataTemporalcloudNexusEndpointsNexusEndpoints): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataTemporalcloudNexusEndpointsNexusEndpointsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTemporalcloudNexusEndpointsNexusEndpoints | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTemporalcloudNexusEndpointsNexusEndpoints | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._description = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._description = value.description;
    }
  }

  // allowed_caller_namespaces - computed: true, optional: false, required: false
  public get allowedCallerNamespaces() {
    return cdktf.Fn.tolist(this.getListAttribute('allowed_caller_namespaces'));
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // description - computed: true, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // worker_target - computed: true, optional: false, required: false
  private _workerTarget = new DataTemporalcloudNexusEndpointsNexusEndpointsWorkerTargetOutputReference(this, "worker_target");
  public get workerTarget() {
    return this._workerTarget;
  }
}

export class DataTemporalcloudNexusEndpointsNexusEndpointsList extends cdktf.ComplexList {
  public internalValue? : DataTemporalcloudNexusEndpointsNexusEndpoints[] | cdktf.IResolvable

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
  public get(index: number): DataTemporalcloudNexusEndpointsNexusEndpointsOutputReference {
    return new DataTemporalcloudNexusEndpointsNexusEndpointsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/temporalio/temporalcloud/1.1.1/docs/data-sources/nexus_endpoints temporalcloud_nexus_endpoints}
*/
export class DataTemporalcloudNexusEndpoints extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "temporalcloud_nexus_endpoints";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataTemporalcloudNexusEndpoints resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataTemporalcloudNexusEndpoints to import
  * @param importFromId The id of the existing DataTemporalcloudNexusEndpoints that should be imported. Refer to the {@link https://registry.terraform.io/providers/temporalio/temporalcloud/1.1.1/docs/data-sources/nexus_endpoints#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataTemporalcloudNexusEndpoints to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "temporalcloud_nexus_endpoints", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/temporalio/temporalcloud/1.1.1/docs/data-sources/nexus_endpoints temporalcloud_nexus_endpoints} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataTemporalcloudNexusEndpointsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataTemporalcloudNexusEndpointsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'temporalcloud_nexus_endpoints',
      terraformGeneratorMetadata: {
        providerName: 'temporalcloud',
        providerVersion: '1.1.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // nexus_endpoints - computed: true, optional: false, required: false
  private _nexusEndpoints = new DataTemporalcloudNexusEndpointsNexusEndpointsList(this, "nexus_endpoints", false);
  public get nexusEndpoints() {
    return this._nexusEndpoints;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
    };
    return attrs;
  }
}
