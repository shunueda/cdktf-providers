// https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/data-sources/flexcaches
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataNetappOntapFlexcachesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Connection profile name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/data-sources/flexcaches#cx_profile_name DataNetappOntapFlexcaches#cx_profile_name}
  */
  readonly cxProfileName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/data-sources/flexcaches#filter DataNetappOntapFlexcaches#filter}
  */
  readonly filter?: DataNetappOntapFlexcachesFilter;
}
export interface DataNetappOntapFlexcachesFilter {
  /**
  * StorageFlexcache name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/data-sources/flexcaches#name DataNetappOntapFlexcaches#name}
  */
  readonly name?: string;
  /**
  * StorageFlexcache svm name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/data-sources/flexcaches#svm_name DataNetappOntapFlexcaches#svm_name}
  */
  readonly svmName?: string;
}

export function dataNetappOntapFlexcachesFilterToTerraform(struct?: DataNetappOntapFlexcachesFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    svm_name: cdktf.stringToTerraform(struct!.svmName),
  }
}


export function dataNetappOntapFlexcachesFilterToHclTerraform(struct?: DataNetappOntapFlexcachesFilter | cdktf.IResolvable): any {
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

export class DataNetappOntapFlexcachesFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataNetappOntapFlexcachesFilter | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataNetappOntapFlexcachesFilter | cdktf.IResolvable | undefined) {
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
export interface DataNetappOntapFlexcachesStorageFlexcachesAggregates {
}

export function dataNetappOntapFlexcachesStorageFlexcachesAggregatesToTerraform(struct?: DataNetappOntapFlexcachesStorageFlexcachesAggregates): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNetappOntapFlexcachesStorageFlexcachesAggregatesToHclTerraform(struct?: DataNetappOntapFlexcachesStorageFlexcachesAggregates): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNetappOntapFlexcachesStorageFlexcachesAggregatesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNetappOntapFlexcachesStorageFlexcachesAggregates | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNetappOntapFlexcachesStorageFlexcachesAggregates | undefined) {
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

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

export class DataNetappOntapFlexcachesStorageFlexcachesAggregatesList extends cdktf.ComplexList {

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
  public get(index: number): DataNetappOntapFlexcachesStorageFlexcachesAggregatesOutputReference {
    return new DataNetappOntapFlexcachesStorageFlexcachesAggregatesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNetappOntapFlexcachesStorageFlexcachesGuarantee {
}

export function dataNetappOntapFlexcachesStorageFlexcachesGuaranteeToTerraform(struct?: DataNetappOntapFlexcachesStorageFlexcachesGuarantee): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNetappOntapFlexcachesStorageFlexcachesGuaranteeToHclTerraform(struct?: DataNetappOntapFlexcachesStorageFlexcachesGuarantee): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNetappOntapFlexcachesStorageFlexcachesGuaranteeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataNetappOntapFlexcachesStorageFlexcachesGuarantee | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNetappOntapFlexcachesStorageFlexcachesGuarantee | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}
export interface DataNetappOntapFlexcachesStorageFlexcachesOriginsSvm {
}

export function dataNetappOntapFlexcachesStorageFlexcachesOriginsSvmToTerraform(struct?: DataNetappOntapFlexcachesStorageFlexcachesOriginsSvm): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNetappOntapFlexcachesStorageFlexcachesOriginsSvmToHclTerraform(struct?: DataNetappOntapFlexcachesStorageFlexcachesOriginsSvm): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNetappOntapFlexcachesStorageFlexcachesOriginsSvmOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataNetappOntapFlexcachesStorageFlexcachesOriginsSvm | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNetappOntapFlexcachesStorageFlexcachesOriginsSvm | undefined) {
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

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}
export interface DataNetappOntapFlexcachesStorageFlexcachesOriginsVolume {
}

export function dataNetappOntapFlexcachesStorageFlexcachesOriginsVolumeToTerraform(struct?: DataNetappOntapFlexcachesStorageFlexcachesOriginsVolume): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNetappOntapFlexcachesStorageFlexcachesOriginsVolumeToHclTerraform(struct?: DataNetappOntapFlexcachesStorageFlexcachesOriginsVolume): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNetappOntapFlexcachesStorageFlexcachesOriginsVolumeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataNetappOntapFlexcachesStorageFlexcachesOriginsVolume | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNetappOntapFlexcachesStorageFlexcachesOriginsVolume | undefined) {
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

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}
export interface DataNetappOntapFlexcachesStorageFlexcachesOrigins {
  /**
  * Origin volume SVM
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/data-sources/flexcaches#svm DataNetappOntapFlexcaches#svm}
  */
  readonly svm: DataNetappOntapFlexcachesStorageFlexcachesOriginsSvm;
  /**
  * Origin volume
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/data-sources/flexcaches#volume DataNetappOntapFlexcaches#volume}
  */
  readonly volume: DataNetappOntapFlexcachesStorageFlexcachesOriginsVolume;
}

export function dataNetappOntapFlexcachesStorageFlexcachesOriginsToTerraform(struct?: DataNetappOntapFlexcachesStorageFlexcachesOrigins): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    svm: dataNetappOntapFlexcachesStorageFlexcachesOriginsSvmToTerraform(struct!.svm),
    volume: dataNetappOntapFlexcachesStorageFlexcachesOriginsVolumeToTerraform(struct!.volume),
  }
}


export function dataNetappOntapFlexcachesStorageFlexcachesOriginsToHclTerraform(struct?: DataNetappOntapFlexcachesStorageFlexcachesOrigins): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    svm: {
      value: dataNetappOntapFlexcachesStorageFlexcachesOriginsSvmToHclTerraform(struct!.svm),
      isBlock: true,
      type: "struct",
      storageClassType: "DataNetappOntapFlexcachesStorageFlexcachesOriginsSvm",
    },
    volume: {
      value: dataNetappOntapFlexcachesStorageFlexcachesOriginsVolumeToHclTerraform(struct!.volume),
      isBlock: true,
      type: "struct",
      storageClassType: "DataNetappOntapFlexcachesStorageFlexcachesOriginsVolume",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataNetappOntapFlexcachesStorageFlexcachesOriginsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNetappOntapFlexcachesStorageFlexcachesOrigins | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._svm?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.svm = this._svm?.internalValue;
    }
    if (this._volume?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.volume = this._volume?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNetappOntapFlexcachesStorageFlexcachesOrigins | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._svm.internalValue = undefined;
      this._volume.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._svm.internalValue = value.svm;
      this._volume.internalValue = value.volume;
    }
  }

  // svm - computed: true, optional: false, required: true
  private _svm = new DataNetappOntapFlexcachesStorageFlexcachesOriginsSvmOutputReference(this, "svm");
  public get svm() {
    return this._svm;
  }
  public putSvm(value: DataNetappOntapFlexcachesStorageFlexcachesOriginsSvm) {
    this._svm.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get svmInput() {
    return this._svm.internalValue;
  }

  // volume - computed: true, optional: false, required: true
  private _volume = new DataNetappOntapFlexcachesStorageFlexcachesOriginsVolumeOutputReference(this, "volume");
  public get volume() {
    return this._volume;
  }
  public putVolume(value: DataNetappOntapFlexcachesStorageFlexcachesOriginsVolume) {
    this._volume.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeInput() {
    return this._volume.internalValue;
  }
}

export class DataNetappOntapFlexcachesStorageFlexcachesOriginsList extends cdktf.ComplexList {
  public internalValue? : DataNetappOntapFlexcachesStorageFlexcachesOrigins[] | cdktf.IResolvable

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
  public get(index: number): DataNetappOntapFlexcachesStorageFlexcachesOriginsOutputReference {
    return new DataNetappOntapFlexcachesStorageFlexcachesOriginsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNetappOntapFlexcachesStorageFlexcaches {
  /**
  * Connection profile name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/data-sources/flexcaches#cx_profile_name DataNetappOntapFlexcaches#cx_profile_name}
  */
  readonly cxProfileName: string;
  /**
  * The name of the flexcache volume to manage
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/data-sources/flexcaches#name DataNetappOntapFlexcaches#name}
  */
  readonly name: string;
  /**
  * Name of the svm to use
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/data-sources/flexcaches#svm_name DataNetappOntapFlexcaches#svm_name}
  */
  readonly svmName: string;
}

export function dataNetappOntapFlexcachesStorageFlexcachesToTerraform(struct?: DataNetappOntapFlexcachesStorageFlexcaches): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cx_profile_name: cdktf.stringToTerraform(struct!.cxProfileName),
    name: cdktf.stringToTerraform(struct!.name),
    svm_name: cdktf.stringToTerraform(struct!.svmName),
  }
}


export function dataNetappOntapFlexcachesStorageFlexcachesToHclTerraform(struct?: DataNetappOntapFlexcachesStorageFlexcaches): any {
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

export class DataNetappOntapFlexcachesStorageFlexcachesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNetappOntapFlexcachesStorageFlexcaches | undefined {
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
    if (this._svmName !== undefined) {
      hasAnyValues = true;
      internalValueResult.svmName = this._svmName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNetappOntapFlexcachesStorageFlexcaches | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cxProfileName = undefined;
      this._name = undefined;
      this._svmName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cxProfileName = value.cxProfileName;
      this._name = value.name;
      this._svmName = value.svmName;
    }
  }

  // aggregates - computed: true, optional: false, required: false
  private _aggregates = new DataNetappOntapFlexcachesStorageFlexcachesAggregatesList(this, "aggregates", true);
  public get aggregates() {
    return this._aggregates;
  }

  // constituents_per_aggregate - computed: true, optional: false, required: false
  public get constituentsPerAggregate() {
    return this.getNumberAttribute('constituents_per_aggregate');
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

  // dr_cache - computed: true, optional: false, required: false
  public get drCache() {
    return this.getBooleanAttribute('dr_cache');
  }

  // global_file_locking_enabled - computed: true, optional: false, required: false
  public get globalFileLockingEnabled() {
    return this.getBooleanAttribute('global_file_locking_enabled');
  }

  // guarantee - computed: true, optional: false, required: false
  private _guarantee = new DataNetappOntapFlexcachesStorageFlexcachesGuaranteeOutputReference(this, "guarantee");
  public get guarantee() {
    return this._guarantee;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // junction_path - computed: true, optional: false, required: false
  public get junctionPath() {
    return this.getStringAttribute('junction_path');
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

  // origins - computed: true, optional: false, required: false
  private _origins = new DataNetappOntapFlexcachesStorageFlexcachesOriginsList(this, "origins", true);
  public get origins() {
    return this._origins;
  }

  // size - computed: true, optional: false, required: false
  public get size() {
    return this.getNumberAttribute('size');
  }

  // size_unit - computed: true, optional: false, required: false
  public get sizeUnit() {
    return this.getStringAttribute('size_unit');
  }

  // svm_name - computed: true, optional: false, required: true
  private _svmName?: string; 
  public get svmName() {
    return this.getStringAttribute('svm_name');
  }
  public set svmName(value: string) {
    this._svmName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get svmNameInput() {
    return this._svmName;
  }

  // use_tiered_aggregate - computed: true, optional: false, required: false
  public get useTieredAggregate() {
    return this.getBooleanAttribute('use_tiered_aggregate');
  }
}

export class DataNetappOntapFlexcachesStorageFlexcachesList extends cdktf.ComplexList {
  public internalValue? : DataNetappOntapFlexcachesStorageFlexcaches[] | cdktf.IResolvable

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
  public get(index: number): DataNetappOntapFlexcachesStorageFlexcachesOutputReference {
    return new DataNetappOntapFlexcachesStorageFlexcachesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/data-sources/flexcaches netapp-ontap_flexcaches}
*/
export class DataNetappOntapFlexcaches extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "netapp-ontap_flexcaches";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataNetappOntapFlexcaches resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataNetappOntapFlexcaches to import
  * @param importFromId The id of the existing DataNetappOntapFlexcaches that should be imported. Refer to the {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/data-sources/flexcaches#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataNetappOntapFlexcaches to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "netapp-ontap_flexcaches", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/data-sources/flexcaches netapp-ontap_flexcaches} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataNetappOntapFlexcachesConfig
  */
  public constructor(scope: Construct, id: string, config: DataNetappOntapFlexcachesConfig) {
    super(scope, id, {
      terraformResourceType: 'netapp-ontap_flexcaches',
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
  private _filter = new DataNetappOntapFlexcachesFilterOutputReference(this, "filter");
  public get filter() {
    return this._filter;
  }
  public putFilter(value: DataNetappOntapFlexcachesFilter) {
    this._filter.internalValue = value;
  }
  public resetFilter() {
    this._filter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter.internalValue;
  }

  // storage_flexcaches - computed: true, optional: false, required: false
  private _storageFlexcaches = new DataNetappOntapFlexcachesStorageFlexcachesList(this, "storage_flexcaches", false);
  public get storageFlexcaches() {
    return this._storageFlexcaches;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cx_profile_name: cdktf.stringToTerraform(this._cxProfileName),
      filter: dataNetappOntapFlexcachesFilterToTerraform(this._filter.internalValue),
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
        value: dataNetappOntapFlexcachesFilterToHclTerraform(this._filter.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataNetappOntapFlexcachesFilter",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
