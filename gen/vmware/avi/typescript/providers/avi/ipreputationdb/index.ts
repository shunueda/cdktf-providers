// https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/ipreputationdb
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IpreputationdbConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/ipreputationdb#base_file_refs Ipreputationdb#base_file_refs}
  */
  readonly baseFileRefs?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/ipreputationdb#base_file_v6_refs Ipreputationdb#base_file_v6_refs}
  */
  readonly baseFileV6Refs?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/ipreputationdb#description Ipreputationdb#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/ipreputationdb#id Ipreputationdb#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/ipreputationdb#incremental_file_refs Ipreputationdb#incremental_file_refs}
  */
  readonly incrementalFileRefs?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/ipreputationdb#incremental_file_v6_refs Ipreputationdb#incremental_file_v6_refs}
  */
  readonly incrementalFileV6Refs?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/ipreputationdb#name Ipreputationdb#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/ipreputationdb#tenant_ref Ipreputationdb#tenant_ref}
  */
  readonly tenantRef?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/ipreputationdb#uuid Ipreputationdb#uuid}
  */
  readonly uuid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/ipreputationdb#v6_version Ipreputationdb#v6_version}
  */
  readonly v6Version?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/ipreputationdb#vendor Ipreputationdb#vendor}
  */
  readonly vendor: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/ipreputationdb#version Ipreputationdb#version}
  */
  readonly version?: string;
  /**
  * configpb_attributes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/ipreputationdb#configpb_attributes Ipreputationdb#configpb_attributes}
  */
  readonly configpbAttributes?: IpreputationdbConfigpbAttributes[] | cdktf.IResolvable;
  /**
  * markers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/ipreputationdb#markers Ipreputationdb#markers}
  */
  readonly markers?: IpreputationdbMarkers[] | cdktf.IResolvable;
  /**
  * service_status block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/ipreputationdb#service_status Ipreputationdb#service_status}
  */
  readonly serviceStatus?: IpreputationdbServiceStatus[] | cdktf.IResolvable;
}
export interface IpreputationdbConfigpbAttributes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/ipreputationdb#version Ipreputationdb#version}
  */
  readonly version?: string;
}

export function ipreputationdbConfigpbAttributesToTerraform(struct?: IpreputationdbConfigpbAttributes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    version: cdktf.stringToTerraform(struct!.version),
  }
}


export function ipreputationdbConfigpbAttributesToHclTerraform(struct?: IpreputationdbConfigpbAttributes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    version: {
      value: cdktf.stringToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IpreputationdbConfigpbAttributesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IpreputationdbConfigpbAttributes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IpreputationdbConfigpbAttributes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._version = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._version = value.version;
    }
  }

  // version - computed: true, optional: true, required: false
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }
}

export class IpreputationdbConfigpbAttributesList extends cdktf.ComplexList {
  public internalValue? : IpreputationdbConfigpbAttributes[] | cdktf.IResolvable

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
  public get(index: number): IpreputationdbConfigpbAttributesOutputReference {
    return new IpreputationdbConfigpbAttributesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IpreputationdbMarkers {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/ipreputationdb#key Ipreputationdb#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/ipreputationdb#values Ipreputationdb#values}
  */
  readonly values?: string[];
}

export function ipreputationdbMarkersToTerraform(struct?: IpreputationdbMarkers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function ipreputationdbMarkersToHclTerraform(struct?: IpreputationdbMarkers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IpreputationdbMarkersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IpreputationdbMarkers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IpreputationdbMarkers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._values = value.values;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class IpreputationdbMarkersList extends cdktf.ComplexList {
  public internalValue? : IpreputationdbMarkers[] | cdktf.IResolvable

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
  public get(index: number): IpreputationdbMarkersOutputReference {
    return new IpreputationdbMarkersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IpreputationdbServiceStatusLastSuccessfulUpdateCheck {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/ipreputationdb#secs Ipreputationdb#secs}
  */
  readonly secs: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/ipreputationdb#usecs Ipreputationdb#usecs}
  */
  readonly usecs: string;
}

export function ipreputationdbServiceStatusLastSuccessfulUpdateCheckToTerraform(struct?: IpreputationdbServiceStatusLastSuccessfulUpdateCheck | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    secs: cdktf.stringToTerraform(struct!.secs),
    usecs: cdktf.stringToTerraform(struct!.usecs),
  }
}


export function ipreputationdbServiceStatusLastSuccessfulUpdateCheckToHclTerraform(struct?: IpreputationdbServiceStatusLastSuccessfulUpdateCheck | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    secs: {
      value: cdktf.stringToHclTerraform(struct!.secs),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    usecs: {
      value: cdktf.stringToHclTerraform(struct!.usecs),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IpreputationdbServiceStatusLastSuccessfulUpdateCheckOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IpreputationdbServiceStatusLastSuccessfulUpdateCheck | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._secs !== undefined) {
      hasAnyValues = true;
      internalValueResult.secs = this._secs;
    }
    if (this._usecs !== undefined) {
      hasAnyValues = true;
      internalValueResult.usecs = this._usecs;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IpreputationdbServiceStatusLastSuccessfulUpdateCheck | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._secs = undefined;
      this._usecs = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._secs = value.secs;
      this._usecs = value.usecs;
    }
  }

  // secs - computed: false, optional: false, required: true
  private _secs?: string; 
  public get secs() {
    return this.getStringAttribute('secs');
  }
  public set secs(value: string) {
    this._secs = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secsInput() {
    return this._secs;
  }

  // usecs - computed: false, optional: false, required: true
  private _usecs?: string; 
  public get usecs() {
    return this.getStringAttribute('usecs');
  }
  public set usecs(value: string) {
    this._usecs = value;
  }
  // Temporarily expose input value. Use with caution.
  public get usecsInput() {
    return this._usecs;
  }
}

export class IpreputationdbServiceStatusLastSuccessfulUpdateCheckList extends cdktf.ComplexList {
  public internalValue? : IpreputationdbServiceStatusLastSuccessfulUpdateCheck[] | cdktf.IResolvable

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
  public get(index: number): IpreputationdbServiceStatusLastSuccessfulUpdateCheckOutputReference {
    return new IpreputationdbServiceStatusLastSuccessfulUpdateCheckOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IpreputationdbServiceStatus {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/ipreputationdb#error Ipreputationdb#error}
  */
  readonly error?: string;
  /**
  * last_successful_update_check block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/ipreputationdb#last_successful_update_check Ipreputationdb#last_successful_update_check}
  */
  readonly lastSuccessfulUpdateCheck?: IpreputationdbServiceStatusLastSuccessfulUpdateCheck[] | cdktf.IResolvable;
}

export function ipreputationdbServiceStatusToTerraform(struct?: IpreputationdbServiceStatus | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    error: cdktf.stringToTerraform(struct!.error),
    last_successful_update_check: cdktf.listMapper(ipreputationdbServiceStatusLastSuccessfulUpdateCheckToTerraform, true)(struct!.lastSuccessfulUpdateCheck),
  }
}


export function ipreputationdbServiceStatusToHclTerraform(struct?: IpreputationdbServiceStatus | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    error: {
      value: cdktf.stringToHclTerraform(struct!.error),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    last_successful_update_check: {
      value: cdktf.listMapperHcl(ipreputationdbServiceStatusLastSuccessfulUpdateCheckToHclTerraform, true)(struct!.lastSuccessfulUpdateCheck),
      isBlock: true,
      type: "set",
      storageClassType: "IpreputationdbServiceStatusLastSuccessfulUpdateCheckList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IpreputationdbServiceStatusOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IpreputationdbServiceStatus | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._error !== undefined) {
      hasAnyValues = true;
      internalValueResult.error = this._error;
    }
    if (this._lastSuccessfulUpdateCheck?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.lastSuccessfulUpdateCheck = this._lastSuccessfulUpdateCheck?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IpreputationdbServiceStatus | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._error = undefined;
      this._lastSuccessfulUpdateCheck.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._error = value.error;
      this._lastSuccessfulUpdateCheck.internalValue = value.lastSuccessfulUpdateCheck;
    }
  }

  // error - computed: true, optional: true, required: false
  private _error?: string; 
  public get error() {
    return this.getStringAttribute('error');
  }
  public set error(value: string) {
    this._error = value;
  }
  public resetError() {
    this._error = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorInput() {
    return this._error;
  }

  // last_successful_update_check - computed: false, optional: true, required: false
  private _lastSuccessfulUpdateCheck = new IpreputationdbServiceStatusLastSuccessfulUpdateCheckList(this, "last_successful_update_check", true);
  public get lastSuccessfulUpdateCheck() {
    return this._lastSuccessfulUpdateCheck;
  }
  public putLastSuccessfulUpdateCheck(value: IpreputationdbServiceStatusLastSuccessfulUpdateCheck[] | cdktf.IResolvable) {
    this._lastSuccessfulUpdateCheck.internalValue = value;
  }
  public resetLastSuccessfulUpdateCheck() {
    this._lastSuccessfulUpdateCheck.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lastSuccessfulUpdateCheckInput() {
    return this._lastSuccessfulUpdateCheck.internalValue;
  }
}

export class IpreputationdbServiceStatusList extends cdktf.ComplexList {
  public internalValue? : IpreputationdbServiceStatus[] | cdktf.IResolvable

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
  public get(index: number): IpreputationdbServiceStatusOutputReference {
    return new IpreputationdbServiceStatusOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/ipreputationdb avi_ipreputationdb}
*/
export class Ipreputationdb extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "avi_ipreputationdb";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Ipreputationdb resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Ipreputationdb to import
  * @param importFromId The id of the existing Ipreputationdb that should be imported. Refer to the {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/ipreputationdb#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Ipreputationdb to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "avi_ipreputationdb", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/ipreputationdb avi_ipreputationdb} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IpreputationdbConfig
  */
  public constructor(scope: Construct, id: string, config: IpreputationdbConfig) {
    super(scope, id, {
      terraformResourceType: 'avi_ipreputationdb',
      terraformGeneratorMetadata: {
        providerName: 'avi',
        providerVersion: '31.1.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._baseFileRefs = config.baseFileRefs;
    this._baseFileV6Refs = config.baseFileV6Refs;
    this._description = config.description;
    this._id = config.id;
    this._incrementalFileRefs = config.incrementalFileRefs;
    this._incrementalFileV6Refs = config.incrementalFileV6Refs;
    this._name = config.name;
    this._tenantRef = config.tenantRef;
    this._uuid = config.uuid;
    this._v6Version = config.v6Version;
    this._vendor = config.vendor;
    this._version = config.version;
    this._configpbAttributes.internalValue = config.configpbAttributes;
    this._markers.internalValue = config.markers;
    this._serviceStatus.internalValue = config.serviceStatus;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // base_file_refs - computed: false, optional: true, required: false
  private _baseFileRefs?: string[]; 
  public get baseFileRefs() {
    return this.getListAttribute('base_file_refs');
  }
  public set baseFileRefs(value: string[]) {
    this._baseFileRefs = value;
  }
  public resetBaseFileRefs() {
    this._baseFileRefs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get baseFileRefsInput() {
    return this._baseFileRefs;
  }

  // base_file_v6_refs - computed: false, optional: true, required: false
  private _baseFileV6Refs?: string[]; 
  public get baseFileV6Refs() {
    return this.getListAttribute('base_file_v6_refs');
  }
  public set baseFileV6Refs(value: string[]) {
    this._baseFileV6Refs = value;
  }
  public resetBaseFileV6Refs() {
    this._baseFileV6Refs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get baseFileV6RefsInput() {
    return this._baseFileV6Refs;
  }

  // description - computed: true, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
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

  // incremental_file_refs - computed: false, optional: true, required: false
  private _incrementalFileRefs?: string[]; 
  public get incrementalFileRefs() {
    return this.getListAttribute('incremental_file_refs');
  }
  public set incrementalFileRefs(value: string[]) {
    this._incrementalFileRefs = value;
  }
  public resetIncrementalFileRefs() {
    this._incrementalFileRefs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get incrementalFileRefsInput() {
    return this._incrementalFileRefs;
  }

  // incremental_file_v6_refs - computed: false, optional: true, required: false
  private _incrementalFileV6Refs?: string[]; 
  public get incrementalFileV6Refs() {
    return this.getListAttribute('incremental_file_v6_refs');
  }
  public set incrementalFileV6Refs(value: string[]) {
    this._incrementalFileV6Refs = value;
  }
  public resetIncrementalFileV6Refs() {
    this._incrementalFileV6Refs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get incrementalFileV6RefsInput() {
    return this._incrementalFileV6Refs;
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

  // tenant_ref - computed: true, optional: true, required: false
  private _tenantRef?: string; 
  public get tenantRef() {
    return this.getStringAttribute('tenant_ref');
  }
  public set tenantRef(value: string) {
    this._tenantRef = value;
  }
  public resetTenantRef() {
    this._tenantRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantRefInput() {
    return this._tenantRef;
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }

  // v6_version - computed: true, optional: true, required: false
  private _v6Version?: string; 
  public get v6Version() {
    return this.getStringAttribute('v6_version');
  }
  public set v6Version(value: string) {
    this._v6Version = value;
  }
  public resetV6Version() {
    this._v6Version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get v6VersionInput() {
    return this._v6Version;
  }

  // vendor - computed: false, optional: false, required: true
  private _vendor?: string; 
  public get vendor() {
    return this.getStringAttribute('vendor');
  }
  public set vendor(value: string) {
    this._vendor = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vendorInput() {
    return this._vendor;
  }

  // version - computed: true, optional: true, required: false
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }

  // configpb_attributes - computed: false, optional: true, required: false
  private _configpbAttributes = new IpreputationdbConfigpbAttributesList(this, "configpb_attributes", true);
  public get configpbAttributes() {
    return this._configpbAttributes;
  }
  public putConfigpbAttributes(value: IpreputationdbConfigpbAttributes[] | cdktf.IResolvable) {
    this._configpbAttributes.internalValue = value;
  }
  public resetConfigpbAttributes() {
    this._configpbAttributes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configpbAttributesInput() {
    return this._configpbAttributes.internalValue;
  }

  // markers - computed: false, optional: true, required: false
  private _markers = new IpreputationdbMarkersList(this, "markers", false);
  public get markers() {
    return this._markers;
  }
  public putMarkers(value: IpreputationdbMarkers[] | cdktf.IResolvable) {
    this._markers.internalValue = value;
  }
  public resetMarkers() {
    this._markers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get markersInput() {
    return this._markers.internalValue;
  }

  // service_status - computed: false, optional: true, required: false
  private _serviceStatus = new IpreputationdbServiceStatusList(this, "service_status", true);
  public get serviceStatus() {
    return this._serviceStatus;
  }
  public putServiceStatus(value: IpreputationdbServiceStatus[] | cdktf.IResolvable) {
    this._serviceStatus.internalValue = value;
  }
  public resetServiceStatus() {
    this._serviceStatus.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceStatusInput() {
    return this._serviceStatus.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      base_file_refs: cdktf.listMapper(cdktf.stringToTerraform, false)(this._baseFileRefs),
      base_file_v6_refs: cdktf.listMapper(cdktf.stringToTerraform, false)(this._baseFileV6Refs),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      incremental_file_refs: cdktf.listMapper(cdktf.stringToTerraform, false)(this._incrementalFileRefs),
      incremental_file_v6_refs: cdktf.listMapper(cdktf.stringToTerraform, false)(this._incrementalFileV6Refs),
      name: cdktf.stringToTerraform(this._name),
      tenant_ref: cdktf.stringToTerraform(this._tenantRef),
      uuid: cdktf.stringToTerraform(this._uuid),
      v6_version: cdktf.stringToTerraform(this._v6Version),
      vendor: cdktf.stringToTerraform(this._vendor),
      version: cdktf.stringToTerraform(this._version),
      configpb_attributes: cdktf.listMapper(ipreputationdbConfigpbAttributesToTerraform, true)(this._configpbAttributes.internalValue),
      markers: cdktf.listMapper(ipreputationdbMarkersToTerraform, true)(this._markers.internalValue),
      service_status: cdktf.listMapper(ipreputationdbServiceStatusToTerraform, true)(this._serviceStatus.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      base_file_refs: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._baseFileRefs),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      base_file_v6_refs: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._baseFileV6Refs),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      incremental_file_refs: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._incrementalFileRefs),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      incremental_file_v6_refs: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._incrementalFileV6Refs),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tenant_ref: {
        value: cdktf.stringToHclTerraform(this._tenantRef),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      uuid: {
        value: cdktf.stringToHclTerraform(this._uuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      v6_version: {
        value: cdktf.stringToHclTerraform(this._v6Version),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vendor: {
        value: cdktf.stringToHclTerraform(this._vendor),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      version: {
        value: cdktf.stringToHclTerraform(this._version),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      configpb_attributes: {
        value: cdktf.listMapperHcl(ipreputationdbConfigpbAttributesToHclTerraform, true)(this._configpbAttributes.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "IpreputationdbConfigpbAttributesList",
      },
      markers: {
        value: cdktf.listMapperHcl(ipreputationdbMarkersToHclTerraform, true)(this._markers.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "IpreputationdbMarkersList",
      },
      service_status: {
        value: cdktf.listMapperHcl(ipreputationdbServiceStatusToHclTerraform, true)(this._serviceStatus.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "IpreputationdbServiceStatusList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
