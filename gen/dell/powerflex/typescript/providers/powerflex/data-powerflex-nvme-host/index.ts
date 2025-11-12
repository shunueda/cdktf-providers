// https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/nvme_host
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataPowerflexNvmeHostConfig extends cdktf.TerraformMetaArguments {
  /**
  * filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/nvme_host#filter DataPowerflexNvmeHost#filter}
  */
  readonly filter?: DataPowerflexNvmeHostFilter;
}
export interface DataPowerflexNvmeHostNvmeHostDetailsLinks {
}

export function dataPowerflexNvmeHostNvmeHostDetailsLinksToTerraform(struct?: DataPowerflexNvmeHostNvmeHostDetailsLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPowerflexNvmeHostNvmeHostDetailsLinksToHclTerraform(struct?: DataPowerflexNvmeHostNvmeHostDetailsLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPowerflexNvmeHostNvmeHostDetailsLinksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPowerflexNvmeHostNvmeHostDetailsLinks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPowerflexNvmeHostNvmeHostDetailsLinks | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // href - computed: true, optional: false, required: false
  public get href() {
    return this.getStringAttribute('href');
  }

  // rel - computed: true, optional: false, required: false
  public get rel() {
    return this.getStringAttribute('rel');
  }
}

export class DataPowerflexNvmeHostNvmeHostDetailsLinksList extends cdktf.ComplexList {

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
  public get(index: number): DataPowerflexNvmeHostNvmeHostDetailsLinksOutputReference {
    return new DataPowerflexNvmeHostNvmeHostDetailsLinksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPowerflexNvmeHostNvmeHostDetails {
}

export function dataPowerflexNvmeHostNvmeHostDetailsToTerraform(struct?: DataPowerflexNvmeHostNvmeHostDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPowerflexNvmeHostNvmeHostDetailsToHclTerraform(struct?: DataPowerflexNvmeHostNvmeHostDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPowerflexNvmeHostNvmeHostDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPowerflexNvmeHostNvmeHostDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPowerflexNvmeHostNvmeHostDetails | undefined) {
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

  // links - computed: true, optional: false, required: false
  private _links = new DataPowerflexNvmeHostNvmeHostDetailsLinksList(this, "links", false);
  public get links() {
    return this._links;
  }

  // max_num_paths - computed: true, optional: false, required: false
  public get maxNumPaths() {
    return this.getNumberAttribute('max_num_paths');
  }

  // max_num_sys_ports - computed: true, optional: false, required: false
  public get maxNumSysPorts() {
    return this.getNumberAttribute('max_num_sys_ports');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // nqn - computed: true, optional: false, required: false
  public get nqn() {
    return this.getStringAttribute('nqn');
  }

  // system_id - computed: true, optional: false, required: false
  public get systemId() {
    return this.getStringAttribute('system_id');
  }
}

export class DataPowerflexNvmeHostNvmeHostDetailsList extends cdktf.ComplexList {

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
  public get(index: number): DataPowerflexNvmeHostNvmeHostDetailsOutputReference {
    return new DataPowerflexNvmeHostNvmeHostDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPowerflexNvmeHostFilter {
  /**
  * List of id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/nvme_host#id DataPowerflexNvmeHost#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string[];
  /**
  * List of max_num_paths
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/nvme_host#max_num_paths DataPowerflexNvmeHost#max_num_paths}
  */
  readonly maxNumPaths?: number[];
  /**
  * List of max_num_sys_ports
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/nvme_host#max_num_sys_ports DataPowerflexNvmeHost#max_num_sys_ports}
  */
  readonly maxNumSysPorts?: number[];
  /**
  * List of name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/nvme_host#name DataPowerflexNvmeHost#name}
  */
  readonly name?: string[];
  /**
  * List of nqn
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/nvme_host#nqn DataPowerflexNvmeHost#nqn}
  */
  readonly nqn?: string[];
  /**
  * List of system_id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/nvme_host#system_id DataPowerflexNvmeHost#system_id}
  */
  readonly systemId?: string[];
}

export function dataPowerflexNvmeHostFilterToTerraform(struct?: DataPowerflexNvmeHostFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.id),
    max_num_paths: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.maxNumPaths),
    max_num_sys_ports: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.maxNumSysPorts),
    name: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.name),
    nqn: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.nqn),
    system_id: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.systemId),
  }
}


export function dataPowerflexNvmeHostFilterToHclTerraform(struct?: DataPowerflexNvmeHostFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.id),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    max_num_paths: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.maxNumPaths),
      isBlock: false,
      type: "set",
      storageClassType: "numberList",
    },
    max_num_sys_ports: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.maxNumSysPorts),
      isBlock: false,
      type: "set",
      storageClassType: "numberList",
    },
    name: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.name),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    nqn: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.nqn),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    system_id: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.systemId),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPowerflexNvmeHostFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPowerflexNvmeHostFilter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._maxNumPaths !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxNumPaths = this._maxNumPaths;
    }
    if (this._maxNumSysPorts !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxNumSysPorts = this._maxNumSysPorts;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._nqn !== undefined) {
      hasAnyValues = true;
      internalValueResult.nqn = this._nqn;
    }
    if (this._systemId !== undefined) {
      hasAnyValues = true;
      internalValueResult.systemId = this._systemId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPowerflexNvmeHostFilter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._maxNumPaths = undefined;
      this._maxNumSysPorts = undefined;
      this._name = undefined;
      this._nqn = undefined;
      this._systemId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._maxNumPaths = value.maxNumPaths;
      this._maxNumSysPorts = value.maxNumSysPorts;
      this._name = value.name;
      this._nqn = value.nqn;
      this._systemId = value.systemId;
    }
  }

  // id - computed: false, optional: true, required: false
  private _id?: string[]; 
  public get id() {
    return cdktf.Fn.tolist(this.getListAttribute('id'));
  }
  public set id(value: string[]) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // max_num_paths - computed: false, optional: true, required: false
  private _maxNumPaths?: number[]; 
  public get maxNumPaths() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('max_num_paths')));
  }
  public set maxNumPaths(value: number[]) {
    this._maxNumPaths = value;
  }
  public resetMaxNumPaths() {
    this._maxNumPaths = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxNumPathsInput() {
    return this._maxNumPaths;
  }

  // max_num_sys_ports - computed: false, optional: true, required: false
  private _maxNumSysPorts?: number[]; 
  public get maxNumSysPorts() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('max_num_sys_ports')));
  }
  public set maxNumSysPorts(value: number[]) {
    this._maxNumSysPorts = value;
  }
  public resetMaxNumSysPorts() {
    this._maxNumSysPorts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxNumSysPortsInput() {
    return this._maxNumSysPorts;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string[]; 
  public get name() {
    return cdktf.Fn.tolist(this.getListAttribute('name'));
  }
  public set name(value: string[]) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // nqn - computed: false, optional: true, required: false
  private _nqn?: string[]; 
  public get nqn() {
    return cdktf.Fn.tolist(this.getListAttribute('nqn'));
  }
  public set nqn(value: string[]) {
    this._nqn = value;
  }
  public resetNqn() {
    this._nqn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nqnInput() {
    return this._nqn;
  }

  // system_id - computed: false, optional: true, required: false
  private _systemId?: string[]; 
  public get systemId() {
    return cdktf.Fn.tolist(this.getListAttribute('system_id'));
  }
  public set systemId(value: string[]) {
    this._systemId = value;
  }
  public resetSystemId() {
    this._systemId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get systemIdInput() {
    return this._systemId;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/nvme_host powerflex_nvme_host}
*/
export class DataPowerflexNvmeHost extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "powerflex_nvme_host";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataPowerflexNvmeHost resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataPowerflexNvmeHost to import
  * @param importFromId The id of the existing DataPowerflexNvmeHost that should be imported. Refer to the {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/nvme_host#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataPowerflexNvmeHost to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "powerflex_nvme_host", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/nvme_host powerflex_nvme_host} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataPowerflexNvmeHostConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataPowerflexNvmeHostConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'powerflex_nvme_host',
      terraformGeneratorMetadata: {
        providerName: 'powerflex',
        providerVersion: '1.8.0',
        providerVersionConstraint: '1.8.0'
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

  // nvme_host_details - computed: true, optional: false, required: false
  private _nvmeHostDetails = new DataPowerflexNvmeHostNvmeHostDetailsList(this, "nvme_host_details", false);
  public get nvmeHostDetails() {
    return this._nvmeHostDetails;
  }

  // filter - computed: false, optional: true, required: false
  private _filter = new DataPowerflexNvmeHostFilterOutputReference(this, "filter");
  public get filter() {
    return this._filter;
  }
  public putFilter(value: DataPowerflexNvmeHostFilter) {
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
      filter: dataPowerflexNvmeHostFilterToTerraform(this._filter.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      filter: {
        value: dataPowerflexNvmeHostFilterToHclTerraform(this._filter.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataPowerflexNvmeHostFilter",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
