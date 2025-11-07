// https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/data-sources/protocols_nfs_export_policies_data_source
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataNetappOntapProtocolsNfsExportPoliciesDataSourceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Connection profile name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/data-sources/protocols_nfs_export_policies_data_source#cx_profile_name DataNetappOntapProtocolsNfsExportPoliciesDataSource#cx_profile_name}
  */
  readonly cxProfileName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/data-sources/protocols_nfs_export_policies_data_source#filter DataNetappOntapProtocolsNfsExportPoliciesDataSource#filter}
  */
  readonly filter?: DataNetappOntapProtocolsNfsExportPoliciesDataSourceFilter;
}
export interface DataNetappOntapProtocolsNfsExportPoliciesDataSourceFilter {
  /**
  * ExportPolicy name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/data-sources/protocols_nfs_export_policies_data_source#name DataNetappOntapProtocolsNfsExportPoliciesDataSource#name}
  */
  readonly name?: string;
  /**
  * ExportPolicy svm name name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/data-sources/protocols_nfs_export_policies_data_source#svm_name DataNetappOntapProtocolsNfsExportPoliciesDataSource#svm_name}
  */
  readonly svmName?: string;
}

export function dataNetappOntapProtocolsNfsExportPoliciesDataSourceFilterToTerraform(struct?: DataNetappOntapProtocolsNfsExportPoliciesDataSourceFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    svm_name: cdktf.stringToTerraform(struct!.svmName),
  }
}


export function dataNetappOntapProtocolsNfsExportPoliciesDataSourceFilterToHclTerraform(struct?: DataNetappOntapProtocolsNfsExportPoliciesDataSourceFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    svm_name: {
      value: cdktf.stringToHclTerraform(struct!.svmName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataNetappOntapProtocolsNfsExportPoliciesDataSourceFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataNetappOntapProtocolsNfsExportPoliciesDataSourceFilter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._svmName !== undefined) {
      hasAnyValues = true;
      internalValueResult.svmName = this._svmName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNetappOntapProtocolsNfsExportPoliciesDataSourceFilter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._svmName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._svmName = value.svmName;
    }
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // svm_name - computed: false, optional: true, required: false
  private _svmName?: string; 
  public get svmName() {
    return this.getStringAttribute('svm_name');
  }
  public set svmName(value: string) {
    this._svmName = value;
  }
  public resetSvmName() {
    this._svmName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get svmNameInput() {
    return this._svmName;
  }
}
export interface DataNetappOntapProtocolsNfsExportPoliciesDataSourceProtocolsNfsExportPolicies {
  /**
  * Connection profile name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/data-sources/protocols_nfs_export_policies_data_source#cx_profile_name DataNetappOntapProtocolsNfsExportPoliciesDataSource#cx_profile_name}
  */
  readonly cxProfileName: string;
  /**
  * ExportPolicy name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/data-sources/protocols_nfs_export_policies_data_source#name DataNetappOntapProtocolsNfsExportPoliciesDataSource#name}
  */
  readonly name: string;
}

export function dataNetappOntapProtocolsNfsExportPoliciesDataSourceProtocolsNfsExportPoliciesToTerraform(struct?: DataNetappOntapProtocolsNfsExportPoliciesDataSourceProtocolsNfsExportPolicies): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cx_profile_name: cdktf.stringToTerraform(struct!.cxProfileName),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataNetappOntapProtocolsNfsExportPoliciesDataSourceProtocolsNfsExportPoliciesToHclTerraform(struct?: DataNetappOntapProtocolsNfsExportPoliciesDataSourceProtocolsNfsExportPolicies): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cx_profile_name: {
      value: cdktf.stringToHclTerraform(struct!.cxProfileName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataNetappOntapProtocolsNfsExportPoliciesDataSourceProtocolsNfsExportPoliciesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNetappOntapProtocolsNfsExportPoliciesDataSourceProtocolsNfsExportPolicies | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cxProfileName !== undefined) {
      hasAnyValues = true;
      internalValueResult.cxProfileName = this._cxProfileName;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNetappOntapProtocolsNfsExportPoliciesDataSourceProtocolsNfsExportPolicies | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cxProfileName = undefined;
      this._name = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cxProfileName = value.cxProfileName;
      this._name = value.name;
    }
  }

  // cx_profile_name - computed: true, optional: false, required: true
  private _cxProfileName?: string; 
  public get cxProfileName() {
    return this.getStringAttribute('cx_profile_name');
  }
  public set cxProfileName(value: string) {
    this._cxProfileName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cxProfileNameInput() {
    return this._cxProfileName;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // name - computed: true, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // svm_name - computed: true, optional: false, required: false
  public get svmName() {
    return this.getStringAttribute('svm_name');
  }

  // svm_uuid - computed: true, optional: false, required: false
  public get svmUuid() {
    return this.getStringAttribute('svm_uuid');
  }
}

export class DataNetappOntapProtocolsNfsExportPoliciesDataSourceProtocolsNfsExportPoliciesList extends cdktf.ComplexList {
  public internalValue? : DataNetappOntapProtocolsNfsExportPoliciesDataSourceProtocolsNfsExportPolicies[] | cdktf.IResolvable

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
  public get(index: number): DataNetappOntapProtocolsNfsExportPoliciesDataSourceProtocolsNfsExportPoliciesOutputReference {
    return new DataNetappOntapProtocolsNfsExportPoliciesDataSourceProtocolsNfsExportPoliciesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/data-sources/protocols_nfs_export_policies_data_source netapp-ontap_protocols_nfs_export_policies_data_source}
*/
export class DataNetappOntapProtocolsNfsExportPoliciesDataSource extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "netapp-ontap_protocols_nfs_export_policies_data_source";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataNetappOntapProtocolsNfsExportPoliciesDataSource resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataNetappOntapProtocolsNfsExportPoliciesDataSource to import
  * @param importFromId The id of the existing DataNetappOntapProtocolsNfsExportPoliciesDataSource that should be imported. Refer to the {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/data-sources/protocols_nfs_export_policies_data_source#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataNetappOntapProtocolsNfsExportPoliciesDataSource to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "netapp-ontap_protocols_nfs_export_policies_data_source", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/data-sources/protocols_nfs_export_policies_data_source netapp-ontap_protocols_nfs_export_policies_data_source} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataNetappOntapProtocolsNfsExportPoliciesDataSourceConfig
  */
  public constructor(scope: Construct, id: string, config: DataNetappOntapProtocolsNfsExportPoliciesDataSourceConfig) {
    super(scope, id, {
      terraformResourceType: 'netapp-ontap_protocols_nfs_export_policies_data_source',
      terraformGeneratorMetadata: {
        providerName: 'netapp-ontap',
        providerVersion: '2.3.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._cxProfileName = config.cxProfileName;
    this._filter.internalValue = config.filter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cx_profile_name - computed: false, optional: false, required: true
  private _cxProfileName?: string; 
  public get cxProfileName() {
    return this.getStringAttribute('cx_profile_name');
  }
  public set cxProfileName(value: string) {
    this._cxProfileName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cxProfileNameInput() {
    return this._cxProfileName;
  }

  // filter - computed: false, optional: true, required: false
  private _filter = new DataNetappOntapProtocolsNfsExportPoliciesDataSourceFilterOutputReference(this, "filter");
  public get filter() {
    return this._filter;
  }
  public putFilter(value: DataNetappOntapProtocolsNfsExportPoliciesDataSourceFilter) {
    this._filter.internalValue = value;
  }
  public resetFilter() {
    this._filter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter.internalValue;
  }

  // protocols_nfs_export_policies - computed: true, optional: false, required: false
  private _protocolsNfsExportPolicies = new DataNetappOntapProtocolsNfsExportPoliciesDataSourceProtocolsNfsExportPoliciesList(this, "protocols_nfs_export_policies", false);
  public get protocolsNfsExportPolicies() {
    return this._protocolsNfsExportPolicies;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cx_profile_name: cdktf.stringToTerraform(this._cxProfileName),
      filter: dataNetappOntapProtocolsNfsExportPoliciesDataSourceFilterToTerraform(this._filter.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cx_profile_name: {
        value: cdktf.stringToHclTerraform(this._cxProfileName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      filter: {
        value: dataNetappOntapProtocolsNfsExportPoliciesDataSourceFilterToHclTerraform(this._filter.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataNetappOntapProtocolsNfsExportPoliciesDataSourceFilter",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
