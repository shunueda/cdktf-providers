// https://registry.terraform.io/providers/buildkite/buildkite/1.27.1/docs/data-sources/clusters
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataBuildkiteClustersConfig extends cdktf.TerraformMetaArguments {
}
export interface DataBuildkiteClustersClustersDefaultQueue {
}

export function dataBuildkiteClustersClustersDefaultQueueToTerraform(struct?: DataBuildkiteClustersClustersDefaultQueue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataBuildkiteClustersClustersDefaultQueueToHclTerraform(struct?: DataBuildkiteClustersClustersDefaultQueue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataBuildkiteClustersClustersDefaultQueueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataBuildkiteClustersClustersDefaultQueue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataBuildkiteClustersClustersDefaultQueue | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // uuid - computed: true, optional: false, required: false
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
}
export interface DataBuildkiteClustersClustersMaintainers {
}

export function dataBuildkiteClustersClustersMaintainersToTerraform(struct?: DataBuildkiteClustersClustersMaintainers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataBuildkiteClustersClustersMaintainersToHclTerraform(struct?: DataBuildkiteClustersClustersMaintainers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataBuildkiteClustersClustersMaintainersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataBuildkiteClustersClustersMaintainers | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataBuildkiteClustersClustersMaintainers | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // actor_email - computed: true, optional: false, required: false
  public get actorEmail() {
    return this.getStringAttribute('actor_email');
  }

  // actor_name - computed: true, optional: false, required: false
  public get actorName() {
    return this.getStringAttribute('actor_name');
  }

  // actor_slug - computed: true, optional: false, required: false
  public get actorSlug() {
    return this.getStringAttribute('actor_slug');
  }

  // actor_type - computed: true, optional: false, required: false
  public get actorType() {
    return this.getStringAttribute('actor_type');
  }

  // actor_uuid - computed: true, optional: false, required: false
  public get actorUuid() {
    return this.getStringAttribute('actor_uuid');
  }

  // permission_uuid - computed: true, optional: false, required: false
  public get permissionUuid() {
    return this.getStringAttribute('permission_uuid');
  }
}

export class DataBuildkiteClustersClustersMaintainersList extends cdktf.ComplexList {

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
  public get(index: number): DataBuildkiteClustersClustersMaintainersOutputReference {
    return new DataBuildkiteClustersClustersMaintainersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataBuildkiteClustersClusters {
}

export function dataBuildkiteClustersClustersToTerraform(struct?: DataBuildkiteClustersClusters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataBuildkiteClustersClustersToHclTerraform(struct?: DataBuildkiteClustersClusters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataBuildkiteClustersClustersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataBuildkiteClustersClusters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataBuildkiteClustersClusters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // color - computed: true, optional: false, required: false
  public get color() {
    return this.getStringAttribute('color');
  }

  // default_queue - computed: true, optional: false, required: false
  private _defaultQueue = new DataBuildkiteClustersClustersDefaultQueueOutputReference(this, "default_queue");
  public get defaultQueue() {
    return this._defaultQueue;
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // emoji - computed: true, optional: false, required: false
  public get emoji() {
    return this.getStringAttribute('emoji');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // maintainers - computed: true, optional: false, required: false
  private _maintainers = new DataBuildkiteClustersClustersMaintainersList(this, "maintainers", false);
  public get maintainers() {
    return this._maintainers;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // uuid - computed: true, optional: false, required: false
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
}

export class DataBuildkiteClustersClustersList extends cdktf.ComplexList {

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
  public get(index: number): DataBuildkiteClustersClustersOutputReference {
    return new DataBuildkiteClustersClustersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/buildkite/buildkite/1.27.1/docs/data-sources/clusters buildkite_clusters}
*/
export class DataBuildkiteClusters extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "buildkite_clusters";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataBuildkiteClusters resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataBuildkiteClusters to import
  * @param importFromId The id of the existing DataBuildkiteClusters that should be imported. Refer to the {@link https://registry.terraform.io/providers/buildkite/buildkite/1.27.1/docs/data-sources/clusters#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataBuildkiteClusters to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "buildkite_clusters", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/buildkite/buildkite/1.27.1/docs/data-sources/clusters buildkite_clusters} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataBuildkiteClustersConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataBuildkiteClustersConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'buildkite_clusters',
      terraformGeneratorMetadata: {
        providerName: 'buildkite',
        providerVersion: '1.27.1',
        providerVersionConstraint: '1.27.1'
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

  // clusters - computed: true, optional: false, required: false
  private _clusters = new DataBuildkiteClustersClustersList(this, "clusters", false);
  public get clusters() {
    return this._clusters;
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
