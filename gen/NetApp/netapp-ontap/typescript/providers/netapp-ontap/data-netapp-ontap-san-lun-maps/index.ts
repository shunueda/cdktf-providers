// https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/data-sources/san_lun-maps
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataNetappOntapSanLunMapsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Connection profile name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/data-sources/san_lun-maps#cx_profile_name DataNetappOntapSanLunMaps#cx_profile_name}
  */
  readonly cxProfileName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/data-sources/san_lun-maps#filter DataNetappOntapSanLunMaps#filter}
  */
  readonly filter?: DataNetappOntapSanLunMapsFilter;
}
export interface DataNetappOntapSanLunMapsFilterIgroup {
  /**
  * name of the igroup
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/data-sources/san_lun-maps#name DataNetappOntapSanLunMaps#name}
  */
  readonly name?: string;
}

export function dataNetappOntapSanLunMapsFilterIgroupToTerraform(struct?: DataNetappOntapSanLunMapsFilterIgroup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataNetappOntapSanLunMapsFilterIgroupToHclTerraform(struct?: DataNetappOntapSanLunMapsFilterIgroup | cdktf.IResolvable): any {
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

export class DataNetappOntapSanLunMapsFilterIgroupOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataNetappOntapSanLunMapsFilterIgroup | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataNetappOntapSanLunMapsFilterIgroup | cdktf.IResolvable | undefined) {
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
export interface DataNetappOntapSanLunMapsFilterLun {
  /**
  * name of the lun
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/data-sources/san_lun-maps#name DataNetappOntapSanLunMaps#name}
  */
  readonly name?: string;
}

export function dataNetappOntapSanLunMapsFilterLunToTerraform(struct?: DataNetappOntapSanLunMapsFilterLun | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataNetappOntapSanLunMapsFilterLunToHclTerraform(struct?: DataNetappOntapSanLunMapsFilterLun | cdktf.IResolvable): any {
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

export class DataNetappOntapSanLunMapsFilterLunOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataNetappOntapSanLunMapsFilterLun | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataNetappOntapSanLunMapsFilterLun | cdktf.IResolvable | undefined) {
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
export interface DataNetappOntapSanLunMapsFilterSvm {
  /**
  * name of the SVM
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/data-sources/san_lun-maps#name DataNetappOntapSanLunMaps#name}
  */
  readonly name?: string;
}

export function dataNetappOntapSanLunMapsFilterSvmToTerraform(struct?: DataNetappOntapSanLunMapsFilterSvm | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataNetappOntapSanLunMapsFilterSvmToHclTerraform(struct?: DataNetappOntapSanLunMapsFilterSvm | cdktf.IResolvable): any {
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

export class DataNetappOntapSanLunMapsFilterSvmOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataNetappOntapSanLunMapsFilterSvm | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataNetappOntapSanLunMapsFilterSvm | cdktf.IResolvable | undefined) {
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
export interface DataNetappOntapSanLunMapsFilter {
  /**
  * SVM details for ProtocolsSanLunMaps
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/data-sources/san_lun-maps#igroup DataNetappOntapSanLunMaps#igroup}
  */
  readonly igroup?: DataNetappOntapSanLunMapsFilterIgroup;
  /**
  * SVM details for ProtocolsSanLunMaps
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/data-sources/san_lun-maps#lun DataNetappOntapSanLunMaps#lun}
  */
  readonly lun?: DataNetappOntapSanLunMapsFilterLun;
  /**
  * SVM details for ProtocolsSanLunMaps
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/data-sources/san_lun-maps#svm DataNetappOntapSanLunMaps#svm}
  */
  readonly svm?: DataNetappOntapSanLunMapsFilterSvm;
}

export function dataNetappOntapSanLunMapsFilterToTerraform(struct?: DataNetappOntapSanLunMapsFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    igroup: dataNetappOntapSanLunMapsFilterIgroupToTerraform(struct!.igroup),
    lun: dataNetappOntapSanLunMapsFilterLunToTerraform(struct!.lun),
    svm: dataNetappOntapSanLunMapsFilterSvmToTerraform(struct!.svm),
  }
}


export function dataNetappOntapSanLunMapsFilterToHclTerraform(struct?: DataNetappOntapSanLunMapsFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    igroup: {
      value: dataNetappOntapSanLunMapsFilterIgroupToHclTerraform(struct!.igroup),
      isBlock: true,
      type: "struct",
      storageClassType: "DataNetappOntapSanLunMapsFilterIgroup",
    },
    lun: {
      value: dataNetappOntapSanLunMapsFilterLunToHclTerraform(struct!.lun),
      isBlock: true,
      type: "struct",
      storageClassType: "DataNetappOntapSanLunMapsFilterLun",
    },
    svm: {
      value: dataNetappOntapSanLunMapsFilterSvmToHclTerraform(struct!.svm),
      isBlock: true,
      type: "struct",
      storageClassType: "DataNetappOntapSanLunMapsFilterSvm",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataNetappOntapSanLunMapsFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataNetappOntapSanLunMapsFilter | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataNetappOntapSanLunMapsFilter | cdktf.IResolvable | undefined) {
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
  private _igroup = new DataNetappOntapSanLunMapsFilterIgroupOutputReference(this, "igroup");
  public get igroup() {
    return this._igroup;
  }
  public putIgroup(value: DataNetappOntapSanLunMapsFilterIgroup) {
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
  private _lun = new DataNetappOntapSanLunMapsFilterLunOutputReference(this, "lun");
  public get lun() {
    return this._lun;
  }
  public putLun(value: DataNetappOntapSanLunMapsFilterLun) {
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
  private _svm = new DataNetappOntapSanLunMapsFilterSvmOutputReference(this, "svm");
  public get svm() {
    return this._svm;
  }
  public putSvm(value: DataNetappOntapSanLunMapsFilterSvm) {
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
export interface DataNetappOntapSanLunMapsProtocolsSanLunMapsIgroup {
  /**
  * name of the igroup
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/data-sources/san_lun-maps#name DataNetappOntapSanLunMaps#name}
  */
  readonly name: string;
}

export function dataNetappOntapSanLunMapsProtocolsSanLunMapsIgroupToTerraform(struct?: DataNetappOntapSanLunMapsProtocolsSanLunMapsIgroup): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataNetappOntapSanLunMapsProtocolsSanLunMapsIgroupToHclTerraform(struct?: DataNetappOntapSanLunMapsProtocolsSanLunMapsIgroup): any {
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

export class DataNetappOntapSanLunMapsProtocolsSanLunMapsIgroupOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataNetappOntapSanLunMapsProtocolsSanLunMapsIgroup | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNetappOntapSanLunMapsProtocolsSanLunMapsIgroup | undefined) {
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
export interface DataNetappOntapSanLunMapsProtocolsSanLunMapsLun {
  /**
  * name of the lun
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/data-sources/san_lun-maps#name DataNetappOntapSanLunMaps#name}
  */
  readonly name: string;
}

export function dataNetappOntapSanLunMapsProtocolsSanLunMapsLunToTerraform(struct?: DataNetappOntapSanLunMapsProtocolsSanLunMapsLun): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataNetappOntapSanLunMapsProtocolsSanLunMapsLunToHclTerraform(struct?: DataNetappOntapSanLunMapsProtocolsSanLunMapsLun): any {
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

export class DataNetappOntapSanLunMapsProtocolsSanLunMapsLunOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataNetappOntapSanLunMapsProtocolsSanLunMapsLun | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNetappOntapSanLunMapsProtocolsSanLunMapsLun | undefined) {
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
export interface DataNetappOntapSanLunMapsProtocolsSanLunMapsSvm {
  /**
  * name of the SVM
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/data-sources/san_lun-maps#name DataNetappOntapSanLunMaps#name}
  */
  readonly name: string;
}

export function dataNetappOntapSanLunMapsProtocolsSanLunMapsSvmToTerraform(struct?: DataNetappOntapSanLunMapsProtocolsSanLunMapsSvm): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataNetappOntapSanLunMapsProtocolsSanLunMapsSvmToHclTerraform(struct?: DataNetappOntapSanLunMapsProtocolsSanLunMapsSvm): any {
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

export class DataNetappOntapSanLunMapsProtocolsSanLunMapsSvmOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataNetappOntapSanLunMapsProtocolsSanLunMapsSvm | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNetappOntapSanLunMapsProtocolsSanLunMapsSvm | undefined) {
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
export interface DataNetappOntapSanLunMapsProtocolsSanLunMaps {
  /**
  * Connection profile name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/data-sources/san_lun-maps#cx_profile_name DataNetappOntapSanLunMaps#cx_profile_name}
  */
  readonly cxProfileName: string;
  /**
  * SVM details for ProtocolsSanLunMaps
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/data-sources/san_lun-maps#igroup DataNetappOntapSanLunMaps#igroup}
  */
  readonly igroup: DataNetappOntapSanLunMapsProtocolsSanLunMapsIgroup;
  /**
  * SVM details for ProtocolsSanLunMaps
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/data-sources/san_lun-maps#lun DataNetappOntapSanLunMaps#lun}
  */
  readonly lun: DataNetappOntapSanLunMapsProtocolsSanLunMapsLun;
  /**
  * SVM details for ProtocolsSanLunMaps
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/data-sources/san_lun-maps#svm DataNetappOntapSanLunMaps#svm}
  */
  readonly svm: DataNetappOntapSanLunMapsProtocolsSanLunMapsSvm;
}

export function dataNetappOntapSanLunMapsProtocolsSanLunMapsToTerraform(struct?: DataNetappOntapSanLunMapsProtocolsSanLunMaps): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cx_profile_name: cdktf.stringToTerraform(struct!.cxProfileName),
    igroup: dataNetappOntapSanLunMapsProtocolsSanLunMapsIgroupToTerraform(struct!.igroup),
    lun: dataNetappOntapSanLunMapsProtocolsSanLunMapsLunToTerraform(struct!.lun),
    svm: dataNetappOntapSanLunMapsProtocolsSanLunMapsSvmToTerraform(struct!.svm),
  }
}


export function dataNetappOntapSanLunMapsProtocolsSanLunMapsToHclTerraform(struct?: DataNetappOntapSanLunMapsProtocolsSanLunMaps): any {
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
      value: dataNetappOntapSanLunMapsProtocolsSanLunMapsIgroupToHclTerraform(struct!.igroup),
      isBlock: true,
      type: "struct",
      storageClassType: "DataNetappOntapSanLunMapsProtocolsSanLunMapsIgroup",
    },
    lun: {
      value: dataNetappOntapSanLunMapsProtocolsSanLunMapsLunToHclTerraform(struct!.lun),
      isBlock: true,
      type: "struct",
      storageClassType: "DataNetappOntapSanLunMapsProtocolsSanLunMapsLun",
    },
    svm: {
      value: dataNetappOntapSanLunMapsProtocolsSanLunMapsSvmToHclTerraform(struct!.svm),
      isBlock: true,
      type: "struct",
      storageClassType: "DataNetappOntapSanLunMapsProtocolsSanLunMapsSvm",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataNetappOntapSanLunMapsProtocolsSanLunMapsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNetappOntapSanLunMapsProtocolsSanLunMaps | undefined {
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

  public set internalValue(value: DataNetappOntapSanLunMapsProtocolsSanLunMaps | undefined) {
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
  private _igroup = new DataNetappOntapSanLunMapsProtocolsSanLunMapsIgroupOutputReference(this, "igroup");
  public get igroup() {
    return this._igroup;
  }
  public putIgroup(value: DataNetappOntapSanLunMapsProtocolsSanLunMapsIgroup) {
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
  private _lun = new DataNetappOntapSanLunMapsProtocolsSanLunMapsLunOutputReference(this, "lun");
  public get lun() {
    return this._lun;
  }
  public putLun(value: DataNetappOntapSanLunMapsProtocolsSanLunMapsLun) {
    this._lun.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get lunInput() {
    return this._lun.internalValue;
  }

  // svm - computed: true, optional: false, required: true
  private _svm = new DataNetappOntapSanLunMapsProtocolsSanLunMapsSvmOutputReference(this, "svm");
  public get svm() {
    return this._svm;
  }
  public putSvm(value: DataNetappOntapSanLunMapsProtocolsSanLunMapsSvm) {
    this._svm.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get svmInput() {
    return this._svm.internalValue;
  }
}

export class DataNetappOntapSanLunMapsProtocolsSanLunMapsList extends cdktf.ComplexList {
  public internalValue? : DataNetappOntapSanLunMapsProtocolsSanLunMaps[] | cdktf.IResolvable

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
  public get(index: number): DataNetappOntapSanLunMapsProtocolsSanLunMapsOutputReference {
    return new DataNetappOntapSanLunMapsProtocolsSanLunMapsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/data-sources/san_lun-maps netapp-ontap_san_lun-maps}
*/
export class DataNetappOntapSanLunMaps extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "netapp-ontap_san_lun-maps";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataNetappOntapSanLunMaps resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataNetappOntapSanLunMaps to import
  * @param importFromId The id of the existing DataNetappOntapSanLunMaps that should be imported. Refer to the {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/data-sources/san_lun-maps#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataNetappOntapSanLunMaps to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "netapp-ontap_san_lun-maps", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/data-sources/san_lun-maps netapp-ontap_san_lun-maps} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataNetappOntapSanLunMapsConfig
  */
  public constructor(scope: Construct, id: string, config: DataNetappOntapSanLunMapsConfig) {
    super(scope, id, {
      terraformResourceType: 'netapp-ontap_san_lun-maps',
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
  private _filter = new DataNetappOntapSanLunMapsFilterOutputReference(this, "filter");
  public get filter() {
    return this._filter;
  }
  public putFilter(value: DataNetappOntapSanLunMapsFilter) {
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
  private _protocolsSanLunMaps = new DataNetappOntapSanLunMapsProtocolsSanLunMapsList(this, "protocols_san_lun_maps", false);
  public get protocolsSanLunMaps() {
    return this._protocolsSanLunMaps;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cx_profile_name: cdktf.stringToTerraform(this._cxProfileName),
      filter: dataNetappOntapSanLunMapsFilterToTerraform(this._filter.internalValue),
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
        value: dataNetappOntapSanLunMapsFilterToHclTerraform(this._filter.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataNetappOntapSanLunMapsFilter",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
