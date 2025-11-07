// https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/data-sources/writable_snapshot
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataPowerscaleWritableSnapshotConfig extends cdktf.TerraformMetaArguments {
  /**
  * filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/data-sources/writable_snapshot#filter DataPowerscaleWritableSnapshot#filter}
  */
  readonly filter?: DataPowerscaleWritableSnapshotFilter;
}
export interface DataPowerscaleWritableSnapshotWritable {
}

export function dataPowerscaleWritableSnapshotWritableToTerraform(struct?: DataPowerscaleWritableSnapshotWritable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPowerscaleWritableSnapshotWritableToHclTerraform(struct?: DataPowerscaleWritableSnapshotWritable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPowerscaleWritableSnapshotWritableOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPowerscaleWritableSnapshotWritable | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPowerscaleWritableSnapshotWritable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // created - computed: true, optional: false, required: false
  public get created() {
    return this.getNumberAttribute('created');
  }

  // dst_path - computed: true, optional: false, required: false
  public get dstPath() {
    return this.getStringAttribute('dst_path');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // log_size - computed: true, optional: false, required: false
  public get logSize() {
    return this.getNumberAttribute('log_size');
  }

  // phys_size - computed: true, optional: false, required: false
  public get physSize() {
    return this.getNumberAttribute('phys_size');
  }

  // src_id - computed: true, optional: false, required: false
  public get srcId() {
    return this.getNumberAttribute('src_id');
  }

  // src_path - computed: true, optional: false, required: false
  public get srcPath() {
    return this.getStringAttribute('src_path');
  }

  // src_snap - computed: true, optional: false, required: false
  public get srcSnap() {
    return this.getStringAttribute('src_snap');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }
}

export class DataPowerscaleWritableSnapshotWritableList extends cdktf.ComplexList {

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
  public get(index: number): DataPowerscaleWritableSnapshotWritableOutputReference {
    return new DataPowerscaleWritableSnapshotWritableOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPowerscaleWritableSnapshotFilter {
  /**
  * The direction of the sort.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/data-sources/writable_snapshot#dir DataPowerscaleWritableSnapshot#dir}
  */
  readonly dir?: string;
  /**
  * Return no more than this many results at once (see resume).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/data-sources/writable_snapshot#limit DataPowerscaleWritableSnapshot#limit}
  */
  readonly limit?: number;
  /**
  * Only list writable snapshots matching this path.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/data-sources/writable_snapshot#path DataPowerscaleWritableSnapshot#path}
  */
  readonly path?: string;
  /**
  * Continue returning results from previous call using this token (token should come from the previous call, resume cannot be used with other options).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/data-sources/writable_snapshot#resume DataPowerscaleWritableSnapshot#resume}
  */
  readonly resume?: string;
  /**
  * The field that will be used for sorting.  Choices are path, src name, src path, created, size and state. Default is created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/data-sources/writable_snapshot#sort DataPowerscaleWritableSnapshot#sort}
  */
  readonly sort?: string;
  /**
  * Only list writable snapshots matching this state.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/data-sources/writable_snapshot#state DataPowerscaleWritableSnapshot#state}
  */
  readonly state?: string;
}

export function dataPowerscaleWritableSnapshotFilterToTerraform(struct?: DataPowerscaleWritableSnapshotFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dir: cdktf.stringToTerraform(struct!.dir),
    limit: cdktf.numberToTerraform(struct!.limit),
    path: cdktf.stringToTerraform(struct!.path),
    resume: cdktf.stringToTerraform(struct!.resume),
    sort: cdktf.stringToTerraform(struct!.sort),
    state: cdktf.stringToTerraform(struct!.state),
  }
}


export function dataPowerscaleWritableSnapshotFilterToHclTerraform(struct?: DataPowerscaleWritableSnapshotFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dir: {
      value: cdktf.stringToHclTerraform(struct!.dir),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    limit: {
      value: cdktf.numberToHclTerraform(struct!.limit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resume: {
      value: cdktf.stringToHclTerraform(struct!.resume),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sort: {
      value: cdktf.stringToHclTerraform(struct!.sort),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    state: {
      value: cdktf.stringToHclTerraform(struct!.state),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPowerscaleWritableSnapshotFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPowerscaleWritableSnapshotFilter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dir !== undefined) {
      hasAnyValues = true;
      internalValueResult.dir = this._dir;
    }
    if (this._limit !== undefined) {
      hasAnyValues = true;
      internalValueResult.limit = this._limit;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._resume !== undefined) {
      hasAnyValues = true;
      internalValueResult.resume = this._resume;
    }
    if (this._sort !== undefined) {
      hasAnyValues = true;
      internalValueResult.sort = this._sort;
    }
    if (this._state !== undefined) {
      hasAnyValues = true;
      internalValueResult.state = this._state;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPowerscaleWritableSnapshotFilter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dir = undefined;
      this._limit = undefined;
      this._path = undefined;
      this._resume = undefined;
      this._sort = undefined;
      this._state = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dir = value.dir;
      this._limit = value.limit;
      this._path = value.path;
      this._resume = value.resume;
      this._sort = value.sort;
      this._state = value.state;
    }
  }

  // dir - computed: false, optional: true, required: false
  private _dir?: string; 
  public get dir() {
    return this.getStringAttribute('dir');
  }
  public set dir(value: string) {
    this._dir = value;
  }
  public resetDir() {
    this._dir = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dirInput() {
    return this._dir;
  }

  // limit - computed: false, optional: true, required: false
  private _limit?: number; 
  public get limit() {
    return this.getNumberAttribute('limit');
  }
  public set limit(value: number) {
    this._limit = value;
  }
  public resetLimit() {
    this._limit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitInput() {
    return this._limit;
  }

  // path - computed: false, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // resume - computed: false, optional: true, required: false
  private _resume?: string; 
  public get resume() {
    return this.getStringAttribute('resume');
  }
  public set resume(value: string) {
    this._resume = value;
  }
  public resetResume() {
    this._resume = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resumeInput() {
    return this._resume;
  }

  // sort - computed: false, optional: true, required: false
  private _sort?: string; 
  public get sort() {
    return this.getStringAttribute('sort');
  }
  public set sort(value: string) {
    this._sort = value;
  }
  public resetSort() {
    this._sort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sortInput() {
    return this._sort;
  }

  // state - computed: false, optional: true, required: false
  private _state?: string; 
  public get state() {
    return this.getStringAttribute('state');
  }
  public set state(value: string) {
    this._state = value;
  }
  public resetState() {
    this._state = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateInput() {
    return this._state;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/data-sources/writable_snapshot powerscale_writable_snapshot}
*/
export class DataPowerscaleWritableSnapshot extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "powerscale_writable_snapshot";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataPowerscaleWritableSnapshot resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataPowerscaleWritableSnapshot to import
  * @param importFromId The id of the existing DataPowerscaleWritableSnapshot that should be imported. Refer to the {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/data-sources/writable_snapshot#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataPowerscaleWritableSnapshot to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "powerscale_writable_snapshot", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/data-sources/writable_snapshot powerscale_writable_snapshot} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataPowerscaleWritableSnapshotConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataPowerscaleWritableSnapshotConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'powerscale_writable_snapshot',
      terraformGeneratorMetadata: {
        providerName: 'powerscale',
        providerVersion: '1.8.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._filter.internalValue = config.filter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // writable - computed: true, optional: false, required: false
  private _writable = new DataPowerscaleWritableSnapshotWritableList(this, "writable", false);
  public get writable() {
    return this._writable;
  }

  // filter - computed: false, optional: true, required: false
  private _filter = new DataPowerscaleWritableSnapshotFilterOutputReference(this, "filter");
  public get filter() {
    return this._filter;
  }
  public putFilter(value: DataPowerscaleWritableSnapshotFilter) {
    this._filter.internalValue = value;
  }
  public resetFilter() {
    this._filter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      filter: dataPowerscaleWritableSnapshotFilterToTerraform(this._filter.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      filter: {
        value: dataPowerscaleWritableSnapshotFilterToHclTerraform(this._filter.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataPowerscaleWritableSnapshotFilter",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
