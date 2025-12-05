// https://registry.terraform.io/providers/verge-io/vergeio/2.7.3/docs/data-sources/vms
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataVergeioVmsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Filter by name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/verge-io/vergeio/2.7.3/docs/data-sources/vms#filter_name DataVergeioVms#filter_name}
  */
  readonly filterName?: string;
  /**
  * Filter by snapshot
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/verge-io/vergeio/2.7.3/docs/data-sources/vms#is_snapshot DataVergeioVms#is_snapshot}
  */
  readonly isSnapshot?: boolean | cdktf.IResolvable;
}
export interface DataVergeioVmsVmsDrivesMediaSource {
}

export function dataVergeioVmsVmsDrivesMediaSourceToTerraform(struct?: DataVergeioVmsVmsDrivesMediaSource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataVergeioVmsVmsDrivesMediaSourceToHclTerraform(struct?: DataVergeioVmsVmsDrivesMediaSource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataVergeioVmsVmsDrivesMediaSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataVergeioVmsVmsDrivesMediaSource | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataVergeioVmsVmsDrivesMediaSource | cdktf.IResolvable | undefined) {
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

  // allocated_bytes - computed: true, optional: false, required: false
  public get allocatedBytes() {
    return this.getNumberAttribute('allocated_bytes');
  }

  // filesize - computed: true, optional: false, required: false
  public get filesize() {
    return this.getNumberAttribute('filesize');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getNumberAttribute('key');
  }

  // used_bytes - computed: true, optional: false, required: false
  public get usedBytes() {
    return this.getNumberAttribute('used_bytes');
  }
}
export interface DataVergeioVmsVmsDrives {
  /**
  * Mediasource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/verge-io/vergeio/2.7.3/docs/data-sources/vms#media_source DataVergeioVms#media_source}
  */
  readonly mediaSource?: DataVergeioVmsVmsDrivesMediaSource;
}

export function dataVergeioVmsVmsDrivesToTerraform(struct?: DataVergeioVmsVmsDrives): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    media_source: dataVergeioVmsVmsDrivesMediaSourceToTerraform(struct!.mediaSource),
  }
}


export function dataVergeioVmsVmsDrivesToHclTerraform(struct?: DataVergeioVmsVmsDrives): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    media_source: {
      value: dataVergeioVmsVmsDrivesMediaSourceToHclTerraform(struct!.mediaSource),
      isBlock: true,
      type: "struct",
      storageClassType: "DataVergeioVmsVmsDrivesMediaSource",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataVergeioVmsVmsDrivesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataVergeioVmsVmsDrives | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mediaSource?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mediaSource = this._mediaSource?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataVergeioVmsVmsDrives | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._mediaSource.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._mediaSource.internalValue = value.mediaSource;
    }
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // interface - computed: true, optional: false, required: false
  public get interface() {
    return this.getStringAttribute('interface');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getNumberAttribute('key');
  }

  // media - computed: true, optional: false, required: false
  public get media() {
    return this.getStringAttribute('media');
  }

  // media_source - computed: true, optional: true, required: false
  private _mediaSource = new DataVergeioVmsVmsDrivesMediaSourceOutputReference(this, "media_source");
  public get mediaSource() {
    return this._mediaSource;
  }
  public putMediaSource(value: DataVergeioVmsVmsDrivesMediaSource) {
    this._mediaSource.internalValue = value;
  }
  public resetMediaSource() {
    this._mediaSource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mediaSourceInput() {
    return this._mediaSource.internalValue;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // preferred_tier - computed: true, optional: false, required: false
  public get preferredTier() {
    return this.getStringAttribute('preferred_tier');
  }
}

export class DataVergeioVmsVmsDrivesList extends cdktf.ComplexList {
  public internalValue? : DataVergeioVmsVmsDrives[] | cdktf.IResolvable

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
  public get(index: number): DataVergeioVmsVmsDrivesOutputReference {
    return new DataVergeioVmsVmsDrivesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataVergeioVmsVmsNics {
}

export function dataVergeioVmsVmsNicsToTerraform(struct?: DataVergeioVmsVmsNics): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataVergeioVmsVmsNicsToHclTerraform(struct?: DataVergeioVmsVmsNics): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataVergeioVmsVmsNicsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataVergeioVmsVmsNics | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataVergeioVmsVmsNics | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // interface - computed: true, optional: false, required: false
  public get interface() {
    return this.getStringAttribute('interface');
  }

  // ipaddress - computed: true, optional: false, required: false
  public get ipaddress() {
    return this.getStringAttribute('ipaddress');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getNumberAttribute('key');
  }

  // macaddress - computed: true, optional: false, required: false
  public get macaddress() {
    return this.getStringAttribute('macaddress');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // vnet - computed: true, optional: false, required: false
  public get vnet() {
    return this.getStringAttribute('vnet');
  }
}

export class DataVergeioVmsVmsNicsList extends cdktf.ComplexList {

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
  public get(index: number): DataVergeioVmsVmsNicsOutputReference {
    return new DataVergeioVmsVmsNicsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataVergeioVmsVms {
}

export function dataVergeioVmsVmsToTerraform(struct?: DataVergeioVmsVms): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataVergeioVmsVmsToHclTerraform(struct?: DataVergeioVmsVms): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataVergeioVmsVmsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataVergeioVmsVms | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataVergeioVmsVms | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cpu_type - computed: true, optional: false, required: false
  public get cpuType() {
    return this.getStringAttribute('cpu_type');
  }

  // drives - computed: true, optional: false, required: false
  private _drives = new DataVergeioVmsVmsDrivesList(this, "drives", false);
  public get drives() {
    return this._drives;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // is_snapshot - computed: true, optional: false, required: false
  public get isSnapshot() {
    return this.getBooleanAttribute('is_snapshot');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getNumberAttribute('key');
  }

  // machine_type - computed: true, optional: false, required: false
  public get machineType() {
    return this.getStringAttribute('machine_type');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // nics - computed: true, optional: false, required: false
  private _nics = new DataVergeioVmsVmsNicsList(this, "nics", false);
  public get nics() {
    return this._nics;
  }

  // os_family - computed: true, optional: false, required: false
  public get osFamily() {
    return this.getStringAttribute('os_family');
  }

  // uefi - computed: true, optional: false, required: false
  public get uefi() {
    return this.getBooleanAttribute('uefi');
  }
}

export class DataVergeioVmsVmsList extends cdktf.ComplexList {

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
  public get(index: number): DataVergeioVmsVmsOutputReference {
    return new DataVergeioVmsVmsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/verge-io/vergeio/2.7.3/docs/data-sources/vms vergeio_vms}
*/
export class DataVergeioVms extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vergeio_vms";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataVergeioVms resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataVergeioVms to import
  * @param importFromId The id of the existing DataVergeioVms that should be imported. Refer to the {@link https://registry.terraform.io/providers/verge-io/vergeio/2.7.3/docs/data-sources/vms#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataVergeioVms to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "vergeio_vms", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/verge-io/vergeio/2.7.3/docs/data-sources/vms vergeio_vms} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataVergeioVmsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataVergeioVmsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'vergeio_vms',
      terraformGeneratorMetadata: {
        providerName: 'vergeio',
        providerVersion: '2.7.3',
        providerVersionConstraint: '2.7.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._filterName = config.filterName;
    this._isSnapshot = config.isSnapshot;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // filter_name - computed: false, optional: true, required: false
  private _filterName?: string; 
  public get filterName() {
    return this.getStringAttribute('filter_name');
  }
  public set filterName(value: string) {
    this._filterName = value;
  }
  public resetFilterName() {
    this._filterName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterNameInput() {
    return this._filterName;
  }

  // is_snapshot - computed: false, optional: true, required: false
  private _isSnapshot?: boolean | cdktf.IResolvable; 
  public get isSnapshot() {
    return this.getBooleanAttribute('is_snapshot');
  }
  public set isSnapshot(value: boolean | cdktf.IResolvable) {
    this._isSnapshot = value;
  }
  public resetIsSnapshot() {
    this._isSnapshot = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isSnapshotInput() {
    return this._isSnapshot;
  }

  // vms - computed: true, optional: false, required: false
  private _vms = new DataVergeioVmsVmsList(this, "vms", false);
  public get vms() {
    return this._vms;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      filter_name: cdktf.stringToTerraform(this._filterName),
      is_snapshot: cdktf.booleanToTerraform(this._isSnapshot),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      filter_name: {
        value: cdktf.stringToHclTerraform(this._filterName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      is_snapshot: {
        value: cdktf.booleanToHclTerraform(this._isSnapshot),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
