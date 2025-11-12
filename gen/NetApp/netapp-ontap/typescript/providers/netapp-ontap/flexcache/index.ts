// https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/resources/flexcache
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface FlexcacheConfig extends cdktf.TerraformMetaArguments {
  /**
  * Set of the aggregates to use
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/resources/flexcache#aggregates Flexcache#aggregates}
  */
  readonly aggregates?: FlexcacheAggregates[] | cdktf.IResolvable;
  /**
  * The number of constituents per aggregate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/resources/flexcache#constituents_per_aggregate Flexcache#constituents_per_aggregate}
  */
  readonly constituentsPerAggregate?: number;
  /**
  * Connection profile name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/resources/flexcache#cx_profile_name Flexcache#cx_profile_name}
  */
  readonly cxProfileName: string;
  /**
  * The state of the dr cache
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/resources/flexcache#dr_cache Flexcache#dr_cache}
  */
  readonly drCache?: boolean | cdktf.IResolvable;
  /**
  * The state of the global file locking
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/resources/flexcache#global_file_locking_enabled Flexcache#global_file_locking_enabled}
  */
  readonly globalFileLockingEnabled?: boolean | cdktf.IResolvable;
  /**
  * The guarantee of the volume
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/resources/flexcache#guarantee Flexcache#guarantee}
  */
  readonly guarantee?: FlexcacheGuarantee;
  /**
  * Name of the junction path. Path to mount the FlexCache volume
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/resources/flexcache#junction_path Flexcache#junction_path}
  */
  readonly junctionPath?: string;
  /**
  * The name of the flexcache volume to manage
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/resources/flexcache#name Flexcache#name}
  */
  readonly name: string;
  /**
  * Set of the origin volumes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/resources/flexcache#origins Flexcache#origins}
  */
  readonly origins: FlexcacheOrigins[] | cdktf.IResolvable;
  /**
  * The size of the flexcache volume
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/resources/flexcache#size Flexcache#size}
  */
  readonly size?: number;
  /**
  * The unit used to interpret the size parameter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/resources/flexcache#size_unit Flexcache#size_unit}
  */
  readonly sizeUnit?: string;
  /**
  * Name of the svm to use
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/resources/flexcache#svm_name Flexcache#svm_name}
  */
  readonly svmName: string;
  /**
  * The state of the use tiered aggregates
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/resources/flexcache#use_tiered_aggregate Flexcache#use_tiered_aggregate}
  */
  readonly useTieredAggregate?: boolean | cdktf.IResolvable;
}
export interface FlexcacheAggregates {
  /**
  * UUID of the aggregate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/resources/flexcache#id Flexcache#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name of the aggregate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/resources/flexcache#name Flexcache#name}
  */
  readonly name?: string;
}

export function flexcacheAggregatesToTerraform(struct?: FlexcacheAggregates | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function flexcacheAggregatesToHclTerraform(struct?: FlexcacheAggregates | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
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

export class FlexcacheAggregatesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): FlexcacheAggregates | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FlexcacheAggregates | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._name = value.name;
    }
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // name - computed: true, optional: true, required: false
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

export class FlexcacheAggregatesList extends cdktf.ComplexList {
  public internalValue? : FlexcacheAggregates[] | cdktf.IResolvable

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
  public get(index: number): FlexcacheAggregatesOutputReference {
    return new FlexcacheAggregatesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FlexcacheGuarantee {
  /**
  * The type of guarantee
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/resources/flexcache#type Flexcache#type}
  */
  readonly type?: string;
}

export function flexcacheGuaranteeToTerraform(struct?: FlexcacheGuarantee | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function flexcacheGuaranteeToHclTerraform(struct?: FlexcacheGuarantee | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FlexcacheGuaranteeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): FlexcacheGuarantee | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FlexcacheGuarantee | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._type = value.type;
    }
  }

  // type - computed: true, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}
export interface FlexcacheOriginsSvm {
  /**
  * ID of the origin volume SVM
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/resources/flexcache#id Flexcache#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name of the origin volume SVM
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/resources/flexcache#name Flexcache#name}
  */
  readonly name?: string;
}

export function flexcacheOriginsSvmToTerraform(struct?: FlexcacheOriginsSvm | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function flexcacheOriginsSvmToHclTerraform(struct?: FlexcacheOriginsSvm | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
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

export class FlexcacheOriginsSvmOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): FlexcacheOriginsSvm | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FlexcacheOriginsSvm | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._name = value.name;
    }
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // name - computed: true, optional: true, required: false
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
export interface FlexcacheOriginsVolume {
  /**
  * ID of the origin volume
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/resources/flexcache#id Flexcache#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name of the origin volume
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/resources/flexcache#name Flexcache#name}
  */
  readonly name?: string;
}

export function flexcacheOriginsVolumeToTerraform(struct?: FlexcacheOriginsVolume | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function flexcacheOriginsVolumeToHclTerraform(struct?: FlexcacheOriginsVolume | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
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

export class FlexcacheOriginsVolumeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): FlexcacheOriginsVolume | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FlexcacheOriginsVolume | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._name = value.name;
    }
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // name - computed: true, optional: true, required: false
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
export interface FlexcacheOrigins {
  /**
  * origin volume SVM
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/resources/flexcache#svm Flexcache#svm}
  */
  readonly svm: FlexcacheOriginsSvm;
  /**
  * origin volume
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/resources/flexcache#volume Flexcache#volume}
  */
  readonly volume: FlexcacheOriginsVolume;
}

export function flexcacheOriginsToTerraform(struct?: FlexcacheOrigins | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    svm: flexcacheOriginsSvmToTerraform(struct!.svm),
    volume: flexcacheOriginsVolumeToTerraform(struct!.volume),
  }
}


export function flexcacheOriginsToHclTerraform(struct?: FlexcacheOrigins | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    svm: {
      value: flexcacheOriginsSvmToHclTerraform(struct!.svm),
      isBlock: true,
      type: "struct",
      storageClassType: "FlexcacheOriginsSvm",
    },
    volume: {
      value: flexcacheOriginsVolumeToHclTerraform(struct!.volume),
      isBlock: true,
      type: "struct",
      storageClassType: "FlexcacheOriginsVolume",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FlexcacheOriginsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): FlexcacheOrigins | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
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

  public set internalValue(value: FlexcacheOrigins | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._svm.internalValue = undefined;
      this._volume.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._svm.internalValue = value.svm;
      this._volume.internalValue = value.volume;
    }
  }

  // svm - computed: false, optional: false, required: true
  private _svm = new FlexcacheOriginsSvmOutputReference(this, "svm");
  public get svm() {
    return this._svm;
  }
  public putSvm(value: FlexcacheOriginsSvm) {
    this._svm.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get svmInput() {
    return this._svm.internalValue;
  }

  // volume - computed: false, optional: false, required: true
  private _volume = new FlexcacheOriginsVolumeOutputReference(this, "volume");
  public get volume() {
    return this._volume;
  }
  public putVolume(value: FlexcacheOriginsVolume) {
    this._volume.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeInput() {
    return this._volume.internalValue;
  }
}

export class FlexcacheOriginsList extends cdktf.ComplexList {
  public internalValue? : FlexcacheOrigins[] | cdktf.IResolvable

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
  public get(index: number): FlexcacheOriginsOutputReference {
    return new FlexcacheOriginsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/resources/flexcache netapp-ontap_flexcache}
*/
export class Flexcache extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "netapp-ontap_flexcache";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Flexcache resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Flexcache to import
  * @param importFromId The id of the existing Flexcache that should be imported. Refer to the {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/resources/flexcache#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Flexcache to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "netapp-ontap_flexcache", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/resources/flexcache netapp-ontap_flexcache} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FlexcacheConfig
  */
  public constructor(scope: Construct, id: string, config: FlexcacheConfig) {
    super(scope, id, {
      terraformResourceType: 'netapp-ontap_flexcache',
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
    this._aggregates.internalValue = config.aggregates;
    this._constituentsPerAggregate = config.constituentsPerAggregate;
    this._cxProfileName = config.cxProfileName;
    this._drCache = config.drCache;
    this._globalFileLockingEnabled = config.globalFileLockingEnabled;
    this._guarantee.internalValue = config.guarantee;
    this._junctionPath = config.junctionPath;
    this._name = config.name;
    this._origins.internalValue = config.origins;
    this._size = config.size;
    this._sizeUnit = config.sizeUnit;
    this._svmName = config.svmName;
    this._useTieredAggregate = config.useTieredAggregate;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // aggregates - computed: true, optional: true, required: false
  private _aggregates = new FlexcacheAggregatesList(this, "aggregates", true);
  public get aggregates() {
    return this._aggregates;
  }
  public putAggregates(value: FlexcacheAggregates[] | cdktf.IResolvable) {
    this._aggregates.internalValue = value;
  }
  public resetAggregates() {
    this._aggregates.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aggregatesInput() {
    return this._aggregates.internalValue;
  }

  // constituents_per_aggregate - computed: true, optional: true, required: false
  private _constituentsPerAggregate?: number; 
  public get constituentsPerAggregate() {
    return this.getNumberAttribute('constituents_per_aggregate');
  }
  public set constituentsPerAggregate(value: number) {
    this._constituentsPerAggregate = value;
  }
  public resetConstituentsPerAggregate() {
    this._constituentsPerAggregate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get constituentsPerAggregateInput() {
    return this._constituentsPerAggregate;
  }

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

  // dr_cache - computed: true, optional: true, required: false
  private _drCache?: boolean | cdktf.IResolvable; 
  public get drCache() {
    return this.getBooleanAttribute('dr_cache');
  }
  public set drCache(value: boolean | cdktf.IResolvable) {
    this._drCache = value;
  }
  public resetDrCache() {
    this._drCache = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get drCacheInput() {
    return this._drCache;
  }

  // global_file_locking_enabled - computed: true, optional: true, required: false
  private _globalFileLockingEnabled?: boolean | cdktf.IResolvable; 
  public get globalFileLockingEnabled() {
    return this.getBooleanAttribute('global_file_locking_enabled');
  }
  public set globalFileLockingEnabled(value: boolean | cdktf.IResolvable) {
    this._globalFileLockingEnabled = value;
  }
  public resetGlobalFileLockingEnabled() {
    this._globalFileLockingEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get globalFileLockingEnabledInput() {
    return this._globalFileLockingEnabled;
  }

  // guarantee - computed: true, optional: true, required: false
  private _guarantee = new FlexcacheGuaranteeOutputReference(this, "guarantee");
  public get guarantee() {
    return this._guarantee;
  }
  public putGuarantee(value: FlexcacheGuarantee) {
    this._guarantee.internalValue = value;
  }
  public resetGuarantee() {
    this._guarantee.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get guaranteeInput() {
    return this._guarantee.internalValue;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // junction_path - computed: true, optional: true, required: false
  private _junctionPath?: string; 
  public get junctionPath() {
    return this.getStringAttribute('junction_path');
  }
  public set junctionPath(value: string) {
    this._junctionPath = value;
  }
  public resetJunctionPath() {
    this._junctionPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get junctionPathInput() {
    return this._junctionPath;
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

  // origins - computed: false, optional: false, required: true
  private _origins = new FlexcacheOriginsList(this, "origins", true);
  public get origins() {
    return this._origins;
  }
  public putOrigins(value: FlexcacheOrigins[] | cdktf.IResolvable) {
    this._origins.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get originsInput() {
    return this._origins.internalValue;
  }

  // size - computed: true, optional: true, required: false
  private _size?: number; 
  public get size() {
    return this.getNumberAttribute('size');
  }
  public set size(value: number) {
    this._size = value;
  }
  public resetSize() {
    this._size = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeInput() {
    return this._size;
  }

  // size_unit - computed: true, optional: true, required: false
  private _sizeUnit?: string; 
  public get sizeUnit() {
    return this.getStringAttribute('size_unit');
  }
  public set sizeUnit(value: string) {
    this._sizeUnit = value;
  }
  public resetSizeUnit() {
    this._sizeUnit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeUnitInput() {
    return this._sizeUnit;
  }

  // svm_name - computed: false, optional: false, required: true
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

  // use_tiered_aggregate - computed: true, optional: true, required: false
  private _useTieredAggregate?: boolean | cdktf.IResolvable; 
  public get useTieredAggregate() {
    return this.getBooleanAttribute('use_tiered_aggregate');
  }
  public set useTieredAggregate(value: boolean | cdktf.IResolvable) {
    this._useTieredAggregate = value;
  }
  public resetUseTieredAggregate() {
    this._useTieredAggregate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useTieredAggregateInput() {
    return this._useTieredAggregate;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      aggregates: cdktf.listMapper(flexcacheAggregatesToTerraform, false)(this._aggregates.internalValue),
      constituents_per_aggregate: cdktf.numberToTerraform(this._constituentsPerAggregate),
      cx_profile_name: cdktf.stringToTerraform(this._cxProfileName),
      dr_cache: cdktf.booleanToTerraform(this._drCache),
      global_file_locking_enabled: cdktf.booleanToTerraform(this._globalFileLockingEnabled),
      guarantee: flexcacheGuaranteeToTerraform(this._guarantee.internalValue),
      junction_path: cdktf.stringToTerraform(this._junctionPath),
      name: cdktf.stringToTerraform(this._name),
      origins: cdktf.listMapper(flexcacheOriginsToTerraform, false)(this._origins.internalValue),
      size: cdktf.numberToTerraform(this._size),
      size_unit: cdktf.stringToTerraform(this._sizeUnit),
      svm_name: cdktf.stringToTerraform(this._svmName),
      use_tiered_aggregate: cdktf.booleanToTerraform(this._useTieredAggregate),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      aggregates: {
        value: cdktf.listMapperHcl(flexcacheAggregatesToHclTerraform, false)(this._aggregates.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "FlexcacheAggregatesList",
      },
      constituents_per_aggregate: {
        value: cdktf.numberToHclTerraform(this._constituentsPerAggregate),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      cx_profile_name: {
        value: cdktf.stringToHclTerraform(this._cxProfileName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dr_cache: {
        value: cdktf.booleanToHclTerraform(this._drCache),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      global_file_locking_enabled: {
        value: cdktf.booleanToHclTerraform(this._globalFileLockingEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      guarantee: {
        value: flexcacheGuaranteeToHclTerraform(this._guarantee.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "FlexcacheGuarantee",
      },
      junction_path: {
        value: cdktf.stringToHclTerraform(this._junctionPath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      origins: {
        value: cdktf.listMapperHcl(flexcacheOriginsToHclTerraform, false)(this._origins.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "FlexcacheOriginsList",
      },
      size: {
        value: cdktf.numberToHclTerraform(this._size),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      size_unit: {
        value: cdktf.stringToHclTerraform(this._sizeUnit),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      svm_name: {
        value: cdktf.stringToHclTerraform(this._svmName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      use_tiered_aggregate: {
        value: cdktf.booleanToHclTerraform(this._useTieredAggregate),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
