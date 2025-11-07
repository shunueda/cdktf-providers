// https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/data-sources/protocols_san_lun-map_data_source
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataNetappOntapProtocolsSanLunMapDataSourceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Connection profile name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/data-sources/protocols_san_lun-map_data_source#cx_profile_name DataNetappOntapProtocolsSanLunMapDataSource#cx_profile_name}
  */
  readonly cxProfileName: string;
  /**
  * SVM details for ProtocolsSanLunMaps
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/data-sources/protocols_san_lun-map_data_source#igroup DataNetappOntapProtocolsSanLunMapDataSource#igroup}
  */
  readonly igroup: DataNetappOntapProtocolsSanLunMapDataSourceIgroup;
  /**
  * SVM details for ProtocolsSanLunMaps
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/data-sources/protocols_san_lun-map_data_source#lun DataNetappOntapProtocolsSanLunMapDataSource#lun}
  */
  readonly lun: DataNetappOntapProtocolsSanLunMapDataSourceLun;
  /**
  * SVM details for ProtocolsSanLunMaps
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/data-sources/protocols_san_lun-map_data_source#svm DataNetappOntapProtocolsSanLunMapDataSource#svm}
  */
  readonly svm: DataNetappOntapProtocolsSanLunMapDataSourceSvm;
}
export interface DataNetappOntapProtocolsSanLunMapDataSourceIgroup {
  /**
  * name of the igroup
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/data-sources/protocols_san_lun-map_data_source#name DataNetappOntapProtocolsSanLunMapDataSource#name}
  */
  readonly name: string;
}

export function dataNetappOntapProtocolsSanLunMapDataSourceIgroupToTerraform(struct?: DataNetappOntapProtocolsSanLunMapDataSourceIgroup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataNetappOntapProtocolsSanLunMapDataSourceIgroupToHclTerraform(struct?: DataNetappOntapProtocolsSanLunMapDataSourceIgroup | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataNetappOntapProtocolsSanLunMapDataSourceIgroupOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataNetappOntapProtocolsSanLunMapDataSourceIgroup | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNetappOntapProtocolsSanLunMapDataSourceIgroup | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
    }
  }

  // name - computed: false, optional: false, required: true
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
}
export interface DataNetappOntapProtocolsSanLunMapDataSourceLun {
  /**
  * name of the lun
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/data-sources/protocols_san_lun-map_data_source#name DataNetappOntapProtocolsSanLunMapDataSource#name}
  */
  readonly name: string;
}

export function dataNetappOntapProtocolsSanLunMapDataSourceLunToTerraform(struct?: DataNetappOntapProtocolsSanLunMapDataSourceLun | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataNetappOntapProtocolsSanLunMapDataSourceLunToHclTerraform(struct?: DataNetappOntapProtocolsSanLunMapDataSourceLun | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataNetappOntapProtocolsSanLunMapDataSourceLunOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataNetappOntapProtocolsSanLunMapDataSourceLun | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNetappOntapProtocolsSanLunMapDataSourceLun | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
    }
  }

  // name - computed: false, optional: false, required: true
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
}
export interface DataNetappOntapProtocolsSanLunMapDataSourceSvm {
  /**
  * name of the SVM
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/data-sources/protocols_san_lun-map_data_source#name DataNetappOntapProtocolsSanLunMapDataSource#name}
  */
  readonly name: string;
}

export function dataNetappOntapProtocolsSanLunMapDataSourceSvmToTerraform(struct?: DataNetappOntapProtocolsSanLunMapDataSourceSvm | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataNetappOntapProtocolsSanLunMapDataSourceSvmToHclTerraform(struct?: DataNetappOntapProtocolsSanLunMapDataSourceSvm | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataNetappOntapProtocolsSanLunMapDataSourceSvmOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataNetappOntapProtocolsSanLunMapDataSourceSvm | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNetappOntapProtocolsSanLunMapDataSourceSvm | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
    }
  }

  // name - computed: false, optional: false, required: true
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
}

/**
* Represents a {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/data-sources/protocols_san_lun-map_data_source netapp-ontap_protocols_san_lun-map_data_source}
*/
export class DataNetappOntapProtocolsSanLunMapDataSource extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "netapp-ontap_protocols_san_lun-map_data_source";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataNetappOntapProtocolsSanLunMapDataSource resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataNetappOntapProtocolsSanLunMapDataSource to import
  * @param importFromId The id of the existing DataNetappOntapProtocolsSanLunMapDataSource that should be imported. Refer to the {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/data-sources/protocols_san_lun-map_data_source#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataNetappOntapProtocolsSanLunMapDataSource to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "netapp-ontap_protocols_san_lun-map_data_source", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/data-sources/protocols_san_lun-map_data_source netapp-ontap_protocols_san_lun-map_data_source} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataNetappOntapProtocolsSanLunMapDataSourceConfig
  */
  public constructor(scope: Construct, id: string, config: DataNetappOntapProtocolsSanLunMapDataSourceConfig) {
    super(scope, id, {
      terraformResourceType: 'netapp-ontap_protocols_san_lun-map_data_source',
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
    this._igroup.internalValue = config.igroup;
    this._lun.internalValue = config.lun;
    this._svm.internalValue = config.svm;
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

  // igroup - computed: false, optional: false, required: true
  private _igroup = new DataNetappOntapProtocolsSanLunMapDataSourceIgroupOutputReference(this, "igroup");
  public get igroup() {
    return this._igroup;
  }
  public putIgroup(value: DataNetappOntapProtocolsSanLunMapDataSourceIgroup) {
    this._igroup.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get igroupInput() {
    return this._igroup.internalValue;
  }

  // logical_unit_number - computed: true, optional: false, required: false
  public get logicalUnitNumber() {
    return this.getNumberAttribute('logical_unit_number');
  }

  // lun - computed: false, optional: false, required: true
  private _lun = new DataNetappOntapProtocolsSanLunMapDataSourceLunOutputReference(this, "lun");
  public get lun() {
    return this._lun;
  }
  public putLun(value: DataNetappOntapProtocolsSanLunMapDataSourceLun) {
    this._lun.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get lunInput() {
    return this._lun.internalValue;
  }

  // svm - computed: false, optional: false, required: true
  private _svm = new DataNetappOntapProtocolsSanLunMapDataSourceSvmOutputReference(this, "svm");
  public get svm() {
    return this._svm;
  }
  public putSvm(value: DataNetappOntapProtocolsSanLunMapDataSourceSvm) {
    this._svm.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get svmInput() {
    return this._svm.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cx_profile_name: cdktf.stringToTerraform(this._cxProfileName),
      igroup: dataNetappOntapProtocolsSanLunMapDataSourceIgroupToTerraform(this._igroup.internalValue),
      lun: dataNetappOntapProtocolsSanLunMapDataSourceLunToTerraform(this._lun.internalValue),
      svm: dataNetappOntapProtocolsSanLunMapDataSourceSvmToTerraform(this._svm.internalValue),
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
      igroup: {
        value: dataNetappOntapProtocolsSanLunMapDataSourceIgroupToHclTerraform(this._igroup.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataNetappOntapProtocolsSanLunMapDataSourceIgroup",
      },
      lun: {
        value: dataNetappOntapProtocolsSanLunMapDataSourceLunToHclTerraform(this._lun.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataNetappOntapProtocolsSanLunMapDataSourceLun",
      },
      svm: {
        value: dataNetappOntapProtocolsSanLunMapDataSourceSvmToHclTerraform(this._svm.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataNetappOntapProtocolsSanLunMapDataSourceSvm",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
