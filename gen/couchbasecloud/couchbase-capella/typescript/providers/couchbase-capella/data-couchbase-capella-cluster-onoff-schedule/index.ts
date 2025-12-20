// https://registry.terraform.io/providers/couchbasecloud/couchbase-capella/1.7.0/docs/data-sources/cluster_onoff_schedule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataCouchbaseCapellaClusterOnoffScheduleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/couchbasecloud/couchbase-capella/1.7.0/docs/data-sources/cluster_onoff_schedule#cluster_id DataCouchbaseCapellaClusterOnoffSchedule#cluster_id}
  */
  readonly clusterId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/couchbasecloud/couchbase-capella/1.7.0/docs/data-sources/cluster_onoff_schedule#organization_id DataCouchbaseCapellaClusterOnoffSchedule#organization_id}
  */
  readonly organizationId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/couchbasecloud/couchbase-capella/1.7.0/docs/data-sources/cluster_onoff_schedule#project_id DataCouchbaseCapellaClusterOnoffSchedule#project_id}
  */
  readonly projectId: string;
}
export interface DataCouchbaseCapellaClusterOnoffScheduleDaysFrom {
}

export function dataCouchbaseCapellaClusterOnoffScheduleDaysFromToTerraform(struct?: DataCouchbaseCapellaClusterOnoffScheduleDaysFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCouchbaseCapellaClusterOnoffScheduleDaysFromToHclTerraform(struct?: DataCouchbaseCapellaClusterOnoffScheduleDaysFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCouchbaseCapellaClusterOnoffScheduleDaysFromOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCouchbaseCapellaClusterOnoffScheduleDaysFrom | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCouchbaseCapellaClusterOnoffScheduleDaysFrom | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }

  // hour - computed: true, optional: false, required: false
  public get hour() {
    return this.getNumberAttribute('hour');
  }

  // minute - computed: true, optional: false, required: false
  public get minute() {
    return this.getNumberAttribute('minute');
  }
}
export interface DataCouchbaseCapellaClusterOnoffScheduleDaysTo {
}

export function dataCouchbaseCapellaClusterOnoffScheduleDaysToToTerraform(struct?: DataCouchbaseCapellaClusterOnoffScheduleDaysTo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCouchbaseCapellaClusterOnoffScheduleDaysToToHclTerraform(struct?: DataCouchbaseCapellaClusterOnoffScheduleDaysTo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCouchbaseCapellaClusterOnoffScheduleDaysToOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCouchbaseCapellaClusterOnoffScheduleDaysTo | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCouchbaseCapellaClusterOnoffScheduleDaysTo | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }

  // hour - computed: true, optional: false, required: false
  public get hour() {
    return this.getNumberAttribute('hour');
  }

  // minute - computed: true, optional: false, required: false
  public get minute() {
    return this.getNumberAttribute('minute');
  }
}
export interface DataCouchbaseCapellaClusterOnoffScheduleDays {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/couchbasecloud/couchbase-capella/1.7.0/docs/data-sources/cluster_onoff_schedule#from DataCouchbaseCapellaClusterOnoffSchedule#from}
  */
  readonly from?: DataCouchbaseCapellaClusterOnoffScheduleDaysFrom;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/couchbasecloud/couchbase-capella/1.7.0/docs/data-sources/cluster_onoff_schedule#to DataCouchbaseCapellaClusterOnoffSchedule#to}
  */
  readonly to?: DataCouchbaseCapellaClusterOnoffScheduleDaysTo;
}

export function dataCouchbaseCapellaClusterOnoffScheduleDaysToTerraform(struct?: DataCouchbaseCapellaClusterOnoffScheduleDays): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    from: dataCouchbaseCapellaClusterOnoffScheduleDaysFromToTerraform(struct!.from),
    to: dataCouchbaseCapellaClusterOnoffScheduleDaysToToTerraform(struct!.to),
  }
}


export function dataCouchbaseCapellaClusterOnoffScheduleDaysToHclTerraform(struct?: DataCouchbaseCapellaClusterOnoffScheduleDays): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    from: {
      value: dataCouchbaseCapellaClusterOnoffScheduleDaysFromToHclTerraform(struct!.from),
      isBlock: true,
      type: "struct",
      storageClassType: "DataCouchbaseCapellaClusterOnoffScheduleDaysFrom",
    },
    to: {
      value: dataCouchbaseCapellaClusterOnoffScheduleDaysToToHclTerraform(struct!.to),
      isBlock: true,
      type: "struct",
      storageClassType: "DataCouchbaseCapellaClusterOnoffScheduleDaysTo",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataCouchbaseCapellaClusterOnoffScheduleDaysOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCouchbaseCapellaClusterOnoffScheduleDays | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._from?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.from = this._from?.internalValue;
    }
    if (this._to?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.to = this._to?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCouchbaseCapellaClusterOnoffScheduleDays | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._from.internalValue = undefined;
      this._to.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._from.internalValue = value.from;
      this._to.internalValue = value.to;
    }
  }

  // day - computed: true, optional: false, required: false
  public get day() {
    return this.getStringAttribute('day');
  }

  // from - computed: true, optional: true, required: false
  private _from = new DataCouchbaseCapellaClusterOnoffScheduleDaysFromOutputReference(this, "from");
  public get from() {
    return this._from;
  }
  public putFrom(value: DataCouchbaseCapellaClusterOnoffScheduleDaysFrom) {
    this._from.internalValue = value;
  }
  public resetFrom() {
    this._from.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fromInput() {
    return this._from.internalValue;
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // to - computed: true, optional: true, required: false
  private _to = new DataCouchbaseCapellaClusterOnoffScheduleDaysToOutputReference(this, "to");
  public get to() {
    return this._to;
  }
  public putTo(value: DataCouchbaseCapellaClusterOnoffScheduleDaysTo) {
    this._to.internalValue = value;
  }
  public resetTo() {
    this._to.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get toInput() {
    return this._to.internalValue;
  }
}

export class DataCouchbaseCapellaClusterOnoffScheduleDaysList extends cdktf.ComplexList {
  public internalValue? : DataCouchbaseCapellaClusterOnoffScheduleDays[] | cdktf.IResolvable

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
  public get(index: number): DataCouchbaseCapellaClusterOnoffScheduleDaysOutputReference {
    return new DataCouchbaseCapellaClusterOnoffScheduleDaysOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/couchbasecloud/couchbase-capella/1.7.0/docs/data-sources/cluster_onoff_schedule couchbase-capella_cluster_onoff_schedule}
*/
export class DataCouchbaseCapellaClusterOnoffSchedule extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "couchbase-capella_cluster_onoff_schedule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataCouchbaseCapellaClusterOnoffSchedule resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataCouchbaseCapellaClusterOnoffSchedule to import
  * @param importFromId The id of the existing DataCouchbaseCapellaClusterOnoffSchedule that should be imported. Refer to the {@link https://registry.terraform.io/providers/couchbasecloud/couchbase-capella/1.7.0/docs/data-sources/cluster_onoff_schedule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataCouchbaseCapellaClusterOnoffSchedule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "couchbase-capella_cluster_onoff_schedule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/couchbasecloud/couchbase-capella/1.7.0/docs/data-sources/cluster_onoff_schedule couchbase-capella_cluster_onoff_schedule} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataCouchbaseCapellaClusterOnoffScheduleConfig
  */
  public constructor(scope: Construct, id: string, config: DataCouchbaseCapellaClusterOnoffScheduleConfig) {
    super(scope, id, {
      terraformResourceType: 'couchbase-capella_cluster_onoff_schedule',
      terraformGeneratorMetadata: {
        providerName: 'couchbase-capella',
        providerVersion: '1.7.0',
        providerVersionConstraint: '1.7.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._clusterId = config.clusterId;
    this._organizationId = config.organizationId;
    this._projectId = config.projectId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cluster_id - computed: false, optional: false, required: true
  private _clusterId?: string; 
  public get clusterId() {
    return this.getStringAttribute('cluster_id');
  }
  public set clusterId(value: string) {
    this._clusterId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterIdInput() {
    return this._clusterId;
  }

  // days - computed: true, optional: false, required: false
  private _days = new DataCouchbaseCapellaClusterOnoffScheduleDaysList(this, "days", false);
  public get days() {
    return this._days;
  }

  // organization_id - computed: false, optional: false, required: true
  private _organizationId?: string; 
  public get organizationId() {
    return this.getStringAttribute('organization_id');
  }
  public set organizationId(value: string) {
    this._organizationId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationIdInput() {
    return this._organizationId;
  }

  // project_id - computed: false, optional: false, required: true
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // timezone - computed: true, optional: false, required: false
  public get timezone() {
    return this.getStringAttribute('timezone');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cluster_id: cdktf.stringToTerraform(this._clusterId),
      organization_id: cdktf.stringToTerraform(this._organizationId),
      project_id: cdktf.stringToTerraform(this._projectId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cluster_id: {
        value: cdktf.stringToHclTerraform(this._clusterId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      organization_id: {
        value: cdktf.stringToHclTerraform(this._organizationId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      project_id: {
        value: cdktf.stringToHclTerraform(this._projectId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
