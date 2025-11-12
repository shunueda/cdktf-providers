// https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/data-sources/protocols_san_lun-maps_data_source
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataNetappOntapProtocolsSanLunMapsDataSourceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Connection profile name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/data-sources/protocols_san_lun-maps_data_source#cx_profile_name DataNetappOntapProtocolsSanLunMapsDataSource#cx_profile_name}
  */
  readonly cxProfileName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/data-sources/protocols_san_lun-maps_data_source#filter DataNetappOntapProtocolsSanLunMapsDataSource#filter}
  */
  readonly filter?: DataNetappOntapProtocolsSanLunMapsDataSourceFilter;
}
export interface DataNetappOntapProtocolsSanLunMapsDataSourceFilterIgroup {
  /**
  * name of the igroup
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/data-sources/protocols_san_lun-maps_data_source#name DataNetappOntapProtocolsSanLunMapsDataSource#name}
  */
  readonly name?: string;
}

export function dataNetappOntapProtocolsSanLunMapsDataSourceFilterIgroupToTerraform(struct?: DataNetappOntapProtocolsSanLunMapsDataSourceFilterIgroup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataNetappOntapProtocolsSanLunMapsDataSourceFilterIgroupToHclTerraform(struct?: DataNetappOntapProtocolsSanLunMapsDataSourceFilterIgroup | cdktf.IResolvable): any {
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

export class DataNetappOntapProtocolsSanLunMapsDataSourceFilterIgroupOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataNetappOntapProtocolsSanLunMapsDataSourceFilterIgroup | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataNetappOntapProtocolsSanLunMapsDataSourceFilterIgroup | cdktf.IResolvable | undefined) {
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
}
export interface DataNetappOntapProtocolsSanLunMapsDataSourceFilterLun {
  /**
  * name of the lun
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/data-sources/protocols_san_lun-maps_data_source#name DataNetappOntapProtocolsSanLunMapsDataSource#name}
  */
  readonly name?: string;
}

export function dataNetappOntapProtocolsSanLunMapsDataSourceFilterLunToTerraform(struct?: DataNetappOntapProtocolsSanLunMapsDataSourceFilterLun | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataNetappOntapProtocolsSanLunMapsDataSourceFilterLunToHclTerraform(struct?: DataNetappOntapProtocolsSanLunMapsDataSourceFilterLun | cdktf.IResolvable): any {
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

export class DataNetappOntapProtocolsSanLunMapsDataSourceFilterLunOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataNetappOntapProtocolsSanLunMapsDataSourceFilterLun | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataNetappOntapProtocolsSanLunMapsDataSourceFilterLun | cdktf.IResolvable | undefined) {
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
}
export interface DataNetappOntapProtocolsSanLunMapsDataSourceFilterSvm {
  /**
  * name of the SVM
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/data-sources/protocols_san_lun-maps_data_source#name DataNetappOntapProtocolsSanLunMapsDataSource#name}
  */
  readonly name?: string;
}

export function dataNetappOntapProtocolsSanLunMapsDataSourceFilterSvmToTerraform(struct?: DataNetappOntapProtocolsSanLunMapsDataSourceFilterSvm | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataNetappOntapProtocolsSanLunMapsDataSourceFilterSvmToHclTerraform(struct?: DataNetappOntapProtocolsSanLunMapsDataSourceFilterSvm | cdktf.IResolvable): any {
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

export class DataNetappOntapProtocolsSanLunMapsDataSourceFilterSvmOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataNetappOntapProtocolsSanLunMapsDataSourceFilterSvm | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataNetappOntapProtocolsSanLunMapsDataSourceFilterSvm | cdktf.IResolvable | undefined) {
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
}
export interface DataNetappOntapProtocolsSanLunMapsDataSourceFilter {
  /**
  * SVM details for ProtocolsSanLunMaps
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/data-sources/protocols_san_lun-maps_data_source#igroup DataNetappOntapProtocolsSanLunMapsDataSource#igroup}
  */
  readonly igroup?: DataNetappOntapProtocolsSanLunMapsDataSourceFilterIgroup;
  /**
  * SVM details for ProtocolsSanLunMaps
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/data-sources/protocols_san_lun-maps_data_source#lun DataNetappOntapProtocolsSanLunMapsDataSource#lun}
  */
  readonly lun?: DataNetappOntapProtocolsSanLunMapsDataSourceFilterLun;
  /**
  * SVM details for ProtocolsSanLunMaps
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/data-sources/protocols_san_lun-maps_data_source#svm DataNetappOntapProtocolsSanLunMapsDataSource#svm}
  */
  readonly svm?: DataNetappOntapProtocolsSanLunMapsDataSourceFilterSvm;
}

export function dataNetappOntapProtocolsSanLunMapsDataSourceFilterToTerraform(struct?: DataNetappOntapProtocolsSanLunMapsDataSourceFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    igroup: dataNetappOntapProtocolsSanLunMapsDataSourceFilterIgroupToTerraform(struct!.igroup),
    lun: dataNetappOntapProtocolsSanLunMapsDataSourceFilterLunToTerraform(struct!.lun),
    svm: dataNetappOntapProtocolsSanLunMapsDataSourceFilterSvmToTerraform(struct!.svm),
  }
}


export function dataNetappOntapProtocolsSanLunMapsDataSourceFilterToHclTerraform(struct?: DataNetappOntapProtocolsSanLunMapsDataSourceFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    igroup: {
      value: dataNetappOntapProtocolsSanLunMapsDataSourceFilterIgroupToHclTerraform(struct!.igroup),
      isBlock: true,
      type: "struct",
      storageClassType: "DataNetappOntapProtocolsSanLunMapsDataSourceFilterIgroup",
    },
    lun: {
      value: dataNetappOntapProtocolsSanLunMapsDataSourceFilterLunToHclTerraform(struct!.lun),
      isBlock: true,
      type: "struct",
      storageClassType: "DataNetappOntapProtocolsSanLunMapsDataSourceFilterLun",
    },
    svm: {
      value: dataNetappOntapProtocolsSanLunMapsDataSourceFilterSvmToHclTerraform(struct!.svm),
      isBlock: true,
      type: "struct",
      storageClassType: "DataNetappOntapProtocolsSanLunMapsDataSourceFilterSvm",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataNetappOntapProtocolsSanLunMapsDataSourceFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataNetappOntapProtocolsSanLunMapsDataSourceFilter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._igroup?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.igroup = this._igroup?.internalValue;
    }
    if (this._lun?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.lun = this._lun?.internalValue;
    }
    if (this._svm?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.svm = this._svm?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNetappOntapProtocolsSanLunMapsDataSourceFilter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._igroup.internalValue = undefined;
      this._lun.internalValue = undefined;
      this._svm.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._igroup.internalValue = value.igroup;
      this._lun.internalValue = value.lun;
      this._svm.internalValue = value.svm;
    }
  }

  // igroup - computed: false, optional: true, required: false
  private _igroup = new DataNetappOntapProtocolsSanLunMapsDataSourceFilterIgroupOutputReference(this, "igroup");
  public get igroup() {
    return this._igroup;
  }
  public putIgroup(value: DataNetappOntapProtocolsSanLunMapsDataSourceFilterIgroup) {
    this._igroup.internalValue = value;
  }
  public resetIgroup() {
    this._igroup.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get igroupInput() {
    return this._igroup.internalValue;
  }

  // lun - computed: false, optional: true, required: false
  private _lun = new DataNetappOntapProtocolsSanLunMapsDataSourceFilterLunOutputReference(this, "lun");
  public get lun() {
    return this._lun;
  }
  public putLun(value: DataNetappOntapProtocolsSanLunMapsDataSourceFilterLun) {
    this._lun.internalValue = value;
  }
  public resetLun() {
    this._lun.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lunInput() {
    return this._lun.internalValue;
  }

  // svm - computed: false, optional: true, required: false
  private _svm = new DataNetappOntapProtocolsSanLunMapsDataSourceFilterSvmOutputReference(this, "svm");
  public get svm() {
    return this._svm;
  }
  public putSvm(value: DataNetappOntapProtocolsSanLunMapsDataSourceFilterSvm) {
    this._svm.internalValue = value;
  }
  public resetSvm() {
    this._svm.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get svmInput() {
    return this._svm.internalValue;
  }
}
export interface DataNetappOntapProtocolsSanLunMapsDataSourceProtocolsSanLunMapsIgroup {
  /**
  * name of the igroup
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/data-sources/protocols_san_lun-maps_data_source#name DataNetappOntapProtocolsSanLunMapsDataSource#name}
  */
  readonly name: string;
}

export function dataNetappOntapProtocolsSanLunMapsDataSourceProtocolsSanLunMapsIgroupToTerraform(struct?: DataNetappOntapProtocolsSanLunMapsDataSourceProtocolsSanLunMapsIgroup): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataNetappOntapProtocolsSanLunMapsDataSourceProtocolsSanLunMapsIgroupToHclTerraform(struct?: DataNetappOntapProtocolsSanLunMapsDataSourceProtocolsSanLunMapsIgroup): any {
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

export class DataNetappOntapProtocolsSanLunMapsDataSourceProtocolsSanLunMapsIgroupOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataNetappOntapProtocolsSanLunMapsDataSourceProtocolsSanLunMapsIgroup | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNetappOntapProtocolsSanLunMapsDataSourceProtocolsSanLunMapsIgroup | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
    }
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
}
export interface DataNetappOntapProtocolsSanLunMapsDataSourceProtocolsSanLunMapsLun {
  /**
  * name of the lun
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/data-sources/protocols_san_lun-maps_data_source#name DataNetappOntapProtocolsSanLunMapsDataSource#name}
  */
  readonly name: string;
}

export function dataNetappOntapProtocolsSanLunMapsDataSourceProtocolsSanLunMapsLunToTerraform(struct?: DataNetappOntapProtocolsSanLunMapsDataSourceProtocolsSanLunMapsLun): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataNetappOntapProtocolsSanLunMapsDataSourceProtocolsSanLunMapsLunToHclTerraform(struct?: DataNetappOntapProtocolsSanLunMapsDataSourceProtocolsSanLunMapsLun): any {
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

export class DataNetappOntapProtocolsSanLunMapsDataSourceProtocolsSanLunMapsLunOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataNetappOntapProtocolsSanLunMapsDataSourceProtocolsSanLunMapsLun | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNetappOntapProtocolsSanLunMapsDataSourceProtocolsSanLunMapsLun | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
    }
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
}
export interface DataNetappOntapProtocolsSanLunMapsDataSourceProtocolsSanLunMapsSvm {
  /**
  * name of the SVM
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/data-sources/protocols_san_lun-maps_data_source#name DataNetappOntapProtocolsSanLunMapsDataSource#name}
  */
  readonly name: string;
}

export function dataNetappOntapProtocolsSanLunMapsDataSourceProtocolsSanLunMapsSvmToTerraform(struct?: DataNetappOntapProtocolsSanLunMapsDataSourceProtocolsSanLunMapsSvm): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataNetappOntapProtocolsSanLunMapsDataSourceProtocolsSanLunMapsSvmToHclTerraform(struct?: DataNetappOntapProtocolsSanLunMapsDataSourceProtocolsSanLunMapsSvm): any {
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

export class DataNetappOntapProtocolsSanLunMapsDataSourceProtocolsSanLunMapsSvmOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataNetappOntapProtocolsSanLunMapsDataSourceProtocolsSanLunMapsSvm | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNetappOntapProtocolsSanLunMapsDataSourceProtocolsSanLunMapsSvm | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
    }
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
}
export interface DataNetappOntapProtocolsSanLunMapsDataSourceProtocolsSanLunMaps {
  /**
  * Connection profile name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/data-sources/protocols_san_lun-maps_data_source#cx_profile_name DataNetappOntapProtocolsSanLunMapsDataSource#cx_profile_name}
  */
  readonly cxProfileName: string;
  /**
  * SVM details for ProtocolsSanLunMaps
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/data-sources/protocols_san_lun-maps_data_source#igroup DataNetappOntapProtocolsSanLunMapsDataSource#igroup}
  */
  readonly igroup: DataNetappOntapProtocolsSanLunMapsDataSourceProtocolsSanLunMapsIgroup;
  /**
  * SVM details for ProtocolsSanLunMaps
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/data-sources/protocols_san_lun-maps_data_source#lun DataNetappOntapProtocolsSanLunMapsDataSource#lun}
  */
  readonly lun: DataNetappOntapProtocolsSanLunMapsDataSourceProtocolsSanLunMapsLun;
  /**
  * SVM details for ProtocolsSanLunMaps
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/data-sources/protocols_san_lun-maps_data_source#svm DataNetappOntapProtocolsSanLunMapsDataSource#svm}
  */
  readonly svm: DataNetappOntapProtocolsSanLunMapsDataSourceProtocolsSanLunMapsSvm;
}

export function dataNetappOntapProtocolsSanLunMapsDataSourceProtocolsSanLunMapsToTerraform(struct?: DataNetappOntapProtocolsSanLunMapsDataSourceProtocolsSanLunMaps): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cx_profile_name: cdktf.stringToTerraform(struct!.cxProfileName),
    igroup: dataNetappOntapProtocolsSanLunMapsDataSourceProtocolsSanLunMapsIgroupToTerraform(struct!.igroup),
    lun: dataNetappOntapProtocolsSanLunMapsDataSourceProtocolsSanLunMapsLunToTerraform(struct!.lun),
    svm: dataNetappOntapProtocolsSanLunMapsDataSourceProtocolsSanLunMapsSvmToTerraform(struct!.svm),
  }
}


export function dataNetappOntapProtocolsSanLunMapsDataSourceProtocolsSanLunMapsToHclTerraform(struct?: DataNetappOntapProtocolsSanLunMapsDataSourceProtocolsSanLunMaps): any {
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
    igroup: {
      value: dataNetappOntapProtocolsSanLunMapsDataSourceProtocolsSanLunMapsIgroupToHclTerraform(struct!.igroup),
      isBlock: true,
      type: "struct",
      storageClassType: "DataNetappOntapProtocolsSanLunMapsDataSourceProtocolsSanLunMapsIgroup",
    },
    lun: {
      value: dataNetappOntapProtocolsSanLunMapsDataSourceProtocolsSanLunMapsLunToHclTerraform(struct!.lun),
      isBlock: true,
      type: "struct",
      storageClassType: "DataNetappOntapProtocolsSanLunMapsDataSourceProtocolsSanLunMapsLun",
    },
    svm: {
      value: dataNetappOntapProtocolsSanLunMapsDataSourceProtocolsSanLunMapsSvmToHclTerraform(struct!.svm),
      isBlock: true,
      type: "struct",
      storageClassType: "DataNetappOntapProtocolsSanLunMapsDataSourceProtocolsSanLunMapsSvm",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataNetappOntapProtocolsSanLunMapsDataSourceProtocolsSanLunMapsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNetappOntapProtocolsSanLunMapsDataSourceProtocolsSanLunMaps | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cxProfileName !== undefined) {
      hasAnyValues = true;
      internalValueResult.cxProfileName = this._cxProfileName;
    }
    if (this._igroup?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.igroup = this._igroup?.internalValue;
    }
    if (this._lun?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.lun = this._lun?.internalValue;
    }
    if (this._svm?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.svm = this._svm?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNetappOntapProtocolsSanLunMapsDataSourceProtocolsSanLunMaps | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cxProfileName = undefined;
      this._igroup.internalValue = undefined;
      this._lun.internalValue = undefined;
      this._svm.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cxProfileName = value.cxProfileName;
      this._igroup.internalValue = value.igroup;
      this._lun.internalValue = value.lun;
      this._svm.internalValue = value.svm;
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

  // igroup - computed: true, optional: false, required: true
  private _igroup = new DataNetappOntapProtocolsSanLunMapsDataSourceProtocolsSanLunMapsIgroupOutputReference(this, "igroup");
  public get igroup() {
    return this._igroup;
  }
  public putIgroup(value: DataNetappOntapProtocolsSanLunMapsDataSourceProtocolsSanLunMapsIgroup) {
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

  // lun - computed: true, optional: false, required: true
  private _lun = new DataNetappOntapProtocolsSanLunMapsDataSourceProtocolsSanLunMapsLunOutputReference(this, "lun");
  public get lun() {
    return this._lun;
  }
  public putLun(value: DataNetappOntapProtocolsSanLunMapsDataSourceProtocolsSanLunMapsLun) {
    this._lun.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get lunInput() {
    return this._lun.internalValue;
  }

  // svm - computed: true, optional: false, required: true
  private _svm = new DataNetappOntapProtocolsSanLunMapsDataSourceProtocolsSanLunMapsSvmOutputReference(this, "svm");
  public get svm() {
    return this._svm;
  }
  public putSvm(value: DataNetappOntapProtocolsSanLunMapsDataSourceProtocolsSanLunMapsSvm) {
    this._svm.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get svmInput() {
    return this._svm.internalValue;
  }
}

export class DataNetappOntapProtocolsSanLunMapsDataSourceProtocolsSanLunMapsList extends cdktf.ComplexList {
  public internalValue? : DataNetappOntapProtocolsSanLunMapsDataSourceProtocolsSanLunMaps[] | cdktf.IResolvable

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
  public get(index: number): DataNetappOntapProtocolsSanLunMapsDataSourceProtocolsSanLunMapsOutputReference {
    return new DataNetappOntapProtocolsSanLunMapsDataSourceProtocolsSanLunMapsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/data-sources/protocols_san_lun-maps_data_source netapp-ontap_protocols_san_lun-maps_data_source}
*/
export class DataNetappOntapProtocolsSanLunMapsDataSource extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "netapp-ontap_protocols_san_lun-maps_data_source";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataNetappOntapProtocolsSanLunMapsDataSource resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataNetappOntapProtocolsSanLunMapsDataSource to import
  * @param importFromId The id of the existing DataNetappOntapProtocolsSanLunMapsDataSource that should be imported. Refer to the {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/data-sources/protocols_san_lun-maps_data_source#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataNetappOntapProtocolsSanLunMapsDataSource to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "netapp-ontap_protocols_san_lun-maps_data_source", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/data-sources/protocols_san_lun-maps_data_source netapp-ontap_protocols_san_lun-maps_data_source} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataNetappOntapProtocolsSanLunMapsDataSourceConfig
  */
  public constructor(scope: Construct, id: string, config: DataNetappOntapProtocolsSanLunMapsDataSourceConfig) {
    super(scope, id, {
      terraformResourceType: 'netapp-ontap_protocols_san_lun-maps_data_source',
      terraformGeneratorMetadata: {
        providerName: 'netapp-ontap',
        providerVersion: '2.3.0',
        providerVersionConstraint: '2.3.0'
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
  private _filter = new DataNetappOntapProtocolsSanLunMapsDataSourceFilterOutputReference(this, "filter");
  public get filter() {
    return this._filter;
  }
  public putFilter(value: DataNetappOntapProtocolsSanLunMapsDataSourceFilter) {
    this._filter.internalValue = value;
  }
  public resetFilter() {
    this._filter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter.internalValue;
  }

  // protocols_san_lun_maps - computed: true, optional: false, required: false
  private _protocolsSanLunMaps = new DataNetappOntapProtocolsSanLunMapsDataSourceProtocolsSanLunMapsList(this, "protocols_san_lun_maps", false);
  public get protocolsSanLunMaps() {
    return this._protocolsSanLunMaps;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cx_profile_name: cdktf.stringToTerraform(this._cxProfileName),
      filter: dataNetappOntapProtocolsSanLunMapsDataSourceFilterToTerraform(this._filter.internalValue),
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
        value: dataNetappOntapProtocolsSanLunMapsDataSourceFilterToHclTerraform(this._filter.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataNetappOntapProtocolsSanLunMapsDataSourceFilter",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
