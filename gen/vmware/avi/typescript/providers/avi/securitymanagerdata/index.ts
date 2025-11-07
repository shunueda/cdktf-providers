// https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/securitymanagerdata
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SecuritymanagerdataConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/securitymanagerdata#id Securitymanagerdata#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/securitymanagerdata#name Securitymanagerdata#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/securitymanagerdata#tenant_ref Securitymanagerdata#tenant_ref}
  */
  readonly tenantRef?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/securitymanagerdata#uuid Securitymanagerdata#uuid}
  */
  readonly uuid?: string;
  /**
  * app_learning_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/securitymanagerdata#app_learning_info Securitymanagerdata#app_learning_info}
  */
  readonly appLearningInfo?: SecuritymanagerdataAppLearningInfo[] | cdktf.IResolvable;
}
export interface SecuritymanagerdataAppLearningInfoUriInfoParamInfoParamSizeClasses {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/securitymanagerdata#hits Securitymanagerdata#hits}
  */
  readonly hits?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/securitymanagerdata#len Securitymanagerdata#len}
  */
  readonly len?: string;
}

export function securitymanagerdataAppLearningInfoUriInfoParamInfoParamSizeClassesToTerraform(struct?: SecuritymanagerdataAppLearningInfoUriInfoParamInfoParamSizeClasses | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hits: cdktf.stringToTerraform(struct!.hits),
    len: cdktf.stringToTerraform(struct!.len),
  }
}


export function securitymanagerdataAppLearningInfoUriInfoParamInfoParamSizeClassesToHclTerraform(struct?: SecuritymanagerdataAppLearningInfoUriInfoParamInfoParamSizeClasses | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    hits: {
      value: cdktf.stringToHclTerraform(struct!.hits),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    len: {
      value: cdktf.stringToHclTerraform(struct!.len),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecuritymanagerdataAppLearningInfoUriInfoParamInfoParamSizeClassesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SecuritymanagerdataAppLearningInfoUriInfoParamInfoParamSizeClasses | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hits !== undefined) {
      hasAnyValues = true;
      internalValueResult.hits = this._hits;
    }
    if (this._len !== undefined) {
      hasAnyValues = true;
      internalValueResult.len = this._len;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecuritymanagerdataAppLearningInfoUriInfoParamInfoParamSizeClasses | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._hits = undefined;
      this._len = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._hits = value.hits;
      this._len = value.len;
    }
  }

  // hits - computed: true, optional: true, required: false
  private _hits?: string; 
  public get hits() {
    return this.getStringAttribute('hits');
  }
  public set hits(value: string) {
    this._hits = value;
  }
  public resetHits() {
    this._hits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hitsInput() {
    return this._hits;
  }

  // len - computed: true, optional: true, required: false
  private _len?: string; 
  public get len() {
    return this.getStringAttribute('len');
  }
  public set len(value: string) {
    this._len = value;
  }
  public resetLen() {
    this._len = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lenInput() {
    return this._len;
  }
}

export class SecuritymanagerdataAppLearningInfoUriInfoParamInfoParamSizeClassesList extends cdktf.ComplexList {
  public internalValue? : SecuritymanagerdataAppLearningInfoUriInfoParamInfoParamSizeClasses[] | cdktf.IResolvable

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
  public get(index: number): SecuritymanagerdataAppLearningInfoUriInfoParamInfoParamSizeClassesOutputReference {
    return new SecuritymanagerdataAppLearningInfoUriInfoParamInfoParamSizeClassesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SecuritymanagerdataAppLearningInfoUriInfoParamInfoParamTypeClasses {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/securitymanagerdata#hits Securitymanagerdata#hits}
  */
  readonly hits?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/securitymanagerdata#type Securitymanagerdata#type}
  */
  readonly type?: string;
}

export function securitymanagerdataAppLearningInfoUriInfoParamInfoParamTypeClassesToTerraform(struct?: SecuritymanagerdataAppLearningInfoUriInfoParamInfoParamTypeClasses | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hits: cdktf.stringToTerraform(struct!.hits),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function securitymanagerdataAppLearningInfoUriInfoParamInfoParamTypeClassesToHclTerraform(struct?: SecuritymanagerdataAppLearningInfoUriInfoParamInfoParamTypeClasses | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    hits: {
      value: cdktf.stringToHclTerraform(struct!.hits),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
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

export class SecuritymanagerdataAppLearningInfoUriInfoParamInfoParamTypeClassesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SecuritymanagerdataAppLearningInfoUriInfoParamInfoParamTypeClasses | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hits !== undefined) {
      hasAnyValues = true;
      internalValueResult.hits = this._hits;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecuritymanagerdataAppLearningInfoUriInfoParamInfoParamTypeClasses | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._hits = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._hits = value.hits;
      this._type = value.type;
    }
  }

  // hits - computed: true, optional: true, required: false
  private _hits?: string; 
  public get hits() {
    return this.getStringAttribute('hits');
  }
  public set hits(value: string) {
    this._hits = value;
  }
  public resetHits() {
    this._hits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hitsInput() {
    return this._hits;
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

export class SecuritymanagerdataAppLearningInfoUriInfoParamInfoParamTypeClassesList extends cdktf.ComplexList {
  public internalValue? : SecuritymanagerdataAppLearningInfoUriInfoParamInfoParamTypeClasses[] | cdktf.IResolvable

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
  public get(index: number): SecuritymanagerdataAppLearningInfoUriInfoParamInfoParamTypeClassesOutputReference {
    return new SecuritymanagerdataAppLearningInfoUriInfoParamInfoParamTypeClassesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SecuritymanagerdataAppLearningInfoUriInfoParamInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/securitymanagerdata#param_hits Securitymanagerdata#param_hits}
  */
  readonly paramHits?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/securitymanagerdata#param_key Securitymanagerdata#param_key}
  */
  readonly paramKey?: string;
  /**
  * param_size_classes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/securitymanagerdata#param_size_classes Securitymanagerdata#param_size_classes}
  */
  readonly paramSizeClasses?: SecuritymanagerdataAppLearningInfoUriInfoParamInfoParamSizeClasses[] | cdktf.IResolvable;
  /**
  * param_type_classes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/securitymanagerdata#param_type_classes Securitymanagerdata#param_type_classes}
  */
  readonly paramTypeClasses?: SecuritymanagerdataAppLearningInfoUriInfoParamInfoParamTypeClasses[] | cdktf.IResolvable;
}

export function securitymanagerdataAppLearningInfoUriInfoParamInfoToTerraform(struct?: SecuritymanagerdataAppLearningInfoUriInfoParamInfo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    param_hits: cdktf.stringToTerraform(struct!.paramHits),
    param_key: cdktf.stringToTerraform(struct!.paramKey),
    param_size_classes: cdktf.listMapper(securitymanagerdataAppLearningInfoUriInfoParamInfoParamSizeClassesToTerraform, true)(struct!.paramSizeClasses),
    param_type_classes: cdktf.listMapper(securitymanagerdataAppLearningInfoUriInfoParamInfoParamTypeClassesToTerraform, true)(struct!.paramTypeClasses),
  }
}


export function securitymanagerdataAppLearningInfoUriInfoParamInfoToHclTerraform(struct?: SecuritymanagerdataAppLearningInfoUriInfoParamInfo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    param_hits: {
      value: cdktf.stringToHclTerraform(struct!.paramHits),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    param_key: {
      value: cdktf.stringToHclTerraform(struct!.paramKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    param_size_classes: {
      value: cdktf.listMapperHcl(securitymanagerdataAppLearningInfoUriInfoParamInfoParamSizeClassesToHclTerraform, true)(struct!.paramSizeClasses),
      isBlock: true,
      type: "list",
      storageClassType: "SecuritymanagerdataAppLearningInfoUriInfoParamInfoParamSizeClassesList",
    },
    param_type_classes: {
      value: cdktf.listMapperHcl(securitymanagerdataAppLearningInfoUriInfoParamInfoParamTypeClassesToHclTerraform, true)(struct!.paramTypeClasses),
      isBlock: true,
      type: "list",
      storageClassType: "SecuritymanagerdataAppLearningInfoUriInfoParamInfoParamTypeClassesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecuritymanagerdataAppLearningInfoUriInfoParamInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SecuritymanagerdataAppLearningInfoUriInfoParamInfo | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._paramHits !== undefined) {
      hasAnyValues = true;
      internalValueResult.paramHits = this._paramHits;
    }
    if (this._paramKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.paramKey = this._paramKey;
    }
    if (this._paramSizeClasses?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.paramSizeClasses = this._paramSizeClasses?.internalValue;
    }
    if (this._paramTypeClasses?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.paramTypeClasses = this._paramTypeClasses?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecuritymanagerdataAppLearningInfoUriInfoParamInfo | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._paramHits = undefined;
      this._paramKey = undefined;
      this._paramSizeClasses.internalValue = undefined;
      this._paramTypeClasses.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._paramHits = value.paramHits;
      this._paramKey = value.paramKey;
      this._paramSizeClasses.internalValue = value.paramSizeClasses;
      this._paramTypeClasses.internalValue = value.paramTypeClasses;
    }
  }

  // param_hits - computed: true, optional: true, required: false
  private _paramHits?: string; 
  public get paramHits() {
    return this.getStringAttribute('param_hits');
  }
  public set paramHits(value: string) {
    this._paramHits = value;
  }
  public resetParamHits() {
    this._paramHits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get paramHitsInput() {
    return this._paramHits;
  }

  // param_key - computed: true, optional: true, required: false
  private _paramKey?: string; 
  public get paramKey() {
    return this.getStringAttribute('param_key');
  }
  public set paramKey(value: string) {
    this._paramKey = value;
  }
  public resetParamKey() {
    this._paramKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get paramKeyInput() {
    return this._paramKey;
  }

  // param_size_classes - computed: false, optional: true, required: false
  private _paramSizeClasses = new SecuritymanagerdataAppLearningInfoUriInfoParamInfoParamSizeClassesList(this, "param_size_classes", false);
  public get paramSizeClasses() {
    return this._paramSizeClasses;
  }
  public putParamSizeClasses(value: SecuritymanagerdataAppLearningInfoUriInfoParamInfoParamSizeClasses[] | cdktf.IResolvable) {
    this._paramSizeClasses.internalValue = value;
  }
  public resetParamSizeClasses() {
    this._paramSizeClasses.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get paramSizeClassesInput() {
    return this._paramSizeClasses.internalValue;
  }

  // param_type_classes - computed: false, optional: true, required: false
  private _paramTypeClasses = new SecuritymanagerdataAppLearningInfoUriInfoParamInfoParamTypeClassesList(this, "param_type_classes", false);
  public get paramTypeClasses() {
    return this._paramTypeClasses;
  }
  public putParamTypeClasses(value: SecuritymanagerdataAppLearningInfoUriInfoParamInfoParamTypeClasses[] | cdktf.IResolvable) {
    this._paramTypeClasses.internalValue = value;
  }
  public resetParamTypeClasses() {
    this._paramTypeClasses.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get paramTypeClassesInput() {
    return this._paramTypeClasses.internalValue;
  }
}

export class SecuritymanagerdataAppLearningInfoUriInfoParamInfoList extends cdktf.ComplexList {
  public internalValue? : SecuritymanagerdataAppLearningInfoUriInfoParamInfo[] | cdktf.IResolvable

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
  public get(index: number): SecuritymanagerdataAppLearningInfoUriInfoParamInfoOutputReference {
    return new SecuritymanagerdataAppLearningInfoUriInfoParamInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SecuritymanagerdataAppLearningInfoUriInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/securitymanagerdata#uri_hits Securitymanagerdata#uri_hits}
  */
  readonly uriHits?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/securitymanagerdata#uri_key Securitymanagerdata#uri_key}
  */
  readonly uriKey?: string;
  /**
  * param_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/securitymanagerdata#param_info Securitymanagerdata#param_info}
  */
  readonly paramInfo?: SecuritymanagerdataAppLearningInfoUriInfoParamInfo[] | cdktf.IResolvable;
}

export function securitymanagerdataAppLearningInfoUriInfoToTerraform(struct?: SecuritymanagerdataAppLearningInfoUriInfo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    uri_hits: cdktf.stringToTerraform(struct!.uriHits),
    uri_key: cdktf.stringToTerraform(struct!.uriKey),
    param_info: cdktf.listMapper(securitymanagerdataAppLearningInfoUriInfoParamInfoToTerraform, true)(struct!.paramInfo),
  }
}


export function securitymanagerdataAppLearningInfoUriInfoToHclTerraform(struct?: SecuritymanagerdataAppLearningInfoUriInfo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    uri_hits: {
      value: cdktf.stringToHclTerraform(struct!.uriHits),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uri_key: {
      value: cdktf.stringToHclTerraform(struct!.uriKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    param_info: {
      value: cdktf.listMapperHcl(securitymanagerdataAppLearningInfoUriInfoParamInfoToHclTerraform, true)(struct!.paramInfo),
      isBlock: true,
      type: "list",
      storageClassType: "SecuritymanagerdataAppLearningInfoUriInfoParamInfoList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecuritymanagerdataAppLearningInfoUriInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SecuritymanagerdataAppLearningInfoUriInfo | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._uriHits !== undefined) {
      hasAnyValues = true;
      internalValueResult.uriHits = this._uriHits;
    }
    if (this._uriKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.uriKey = this._uriKey;
    }
    if (this._paramInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.paramInfo = this._paramInfo?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecuritymanagerdataAppLearningInfoUriInfo | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._uriHits = undefined;
      this._uriKey = undefined;
      this._paramInfo.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._uriHits = value.uriHits;
      this._uriKey = value.uriKey;
      this._paramInfo.internalValue = value.paramInfo;
    }
  }

  // uri_hits - computed: true, optional: true, required: false
  private _uriHits?: string; 
  public get uriHits() {
    return this.getStringAttribute('uri_hits');
  }
  public set uriHits(value: string) {
    this._uriHits = value;
  }
  public resetUriHits() {
    this._uriHits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uriHitsInput() {
    return this._uriHits;
  }

  // uri_key - computed: true, optional: true, required: false
  private _uriKey?: string; 
  public get uriKey() {
    return this.getStringAttribute('uri_key');
  }
  public set uriKey(value: string) {
    this._uriKey = value;
  }
  public resetUriKey() {
    this._uriKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uriKeyInput() {
    return this._uriKey;
  }

  // param_info - computed: false, optional: true, required: false
  private _paramInfo = new SecuritymanagerdataAppLearningInfoUriInfoParamInfoList(this, "param_info", false);
  public get paramInfo() {
    return this._paramInfo;
  }
  public putParamInfo(value: SecuritymanagerdataAppLearningInfoUriInfoParamInfo[] | cdktf.IResolvable) {
    this._paramInfo.internalValue = value;
  }
  public resetParamInfo() {
    this._paramInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get paramInfoInput() {
    return this._paramInfo.internalValue;
  }
}

export class SecuritymanagerdataAppLearningInfoUriInfoList extends cdktf.ComplexList {
  public internalValue? : SecuritymanagerdataAppLearningInfoUriInfo[] | cdktf.IResolvable

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
  public get(index: number): SecuritymanagerdataAppLearningInfoUriInfoOutputReference {
    return new SecuritymanagerdataAppLearningInfoUriInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SecuritymanagerdataAppLearningInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/securitymanagerdata#app_id Securitymanagerdata#app_id}
  */
  readonly appId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/securitymanagerdata#vs_uuid Securitymanagerdata#vs_uuid}
  */
  readonly vsUuid?: string;
  /**
  * uri_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/securitymanagerdata#uri_info Securitymanagerdata#uri_info}
  */
  readonly uriInfo?: SecuritymanagerdataAppLearningInfoUriInfo[] | cdktf.IResolvable;
}

export function securitymanagerdataAppLearningInfoToTerraform(struct?: SecuritymanagerdataAppLearningInfo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    app_id: cdktf.stringToTerraform(struct!.appId),
    vs_uuid: cdktf.stringToTerraform(struct!.vsUuid),
    uri_info: cdktf.listMapper(securitymanagerdataAppLearningInfoUriInfoToTerraform, true)(struct!.uriInfo),
  }
}


export function securitymanagerdataAppLearningInfoToHclTerraform(struct?: SecuritymanagerdataAppLearningInfo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    app_id: {
      value: cdktf.stringToHclTerraform(struct!.appId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vs_uuid: {
      value: cdktf.stringToHclTerraform(struct!.vsUuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uri_info: {
      value: cdktf.listMapperHcl(securitymanagerdataAppLearningInfoUriInfoToHclTerraform, true)(struct!.uriInfo),
      isBlock: true,
      type: "list",
      storageClassType: "SecuritymanagerdataAppLearningInfoUriInfoList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecuritymanagerdataAppLearningInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SecuritymanagerdataAppLearningInfo | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._appId !== undefined) {
      hasAnyValues = true;
      internalValueResult.appId = this._appId;
    }
    if (this._vsUuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.vsUuid = this._vsUuid;
    }
    if (this._uriInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.uriInfo = this._uriInfo?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecuritymanagerdataAppLearningInfo | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._appId = undefined;
      this._vsUuid = undefined;
      this._uriInfo.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._appId = value.appId;
      this._vsUuid = value.vsUuid;
      this._uriInfo.internalValue = value.uriInfo;
    }
  }

  // app_id - computed: true, optional: true, required: false
  private _appId?: string; 
  public get appId() {
    return this.getStringAttribute('app_id');
  }
  public set appId(value: string) {
    this._appId = value;
  }
  public resetAppId() {
    this._appId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appIdInput() {
    return this._appId;
  }

  // vs_uuid - computed: true, optional: true, required: false
  private _vsUuid?: string; 
  public get vsUuid() {
    return this.getStringAttribute('vs_uuid');
  }
  public set vsUuid(value: string) {
    this._vsUuid = value;
  }
  public resetVsUuid() {
    this._vsUuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vsUuidInput() {
    return this._vsUuid;
  }

  // uri_info - computed: false, optional: true, required: false
  private _uriInfo = new SecuritymanagerdataAppLearningInfoUriInfoList(this, "uri_info", false);
  public get uriInfo() {
    return this._uriInfo;
  }
  public putUriInfo(value: SecuritymanagerdataAppLearningInfoUriInfo[] | cdktf.IResolvable) {
    this._uriInfo.internalValue = value;
  }
  public resetUriInfo() {
    this._uriInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uriInfoInput() {
    return this._uriInfo.internalValue;
  }
}

export class SecuritymanagerdataAppLearningInfoList extends cdktf.ComplexList {
  public internalValue? : SecuritymanagerdataAppLearningInfo[] | cdktf.IResolvable

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
  public get(index: number): SecuritymanagerdataAppLearningInfoOutputReference {
    return new SecuritymanagerdataAppLearningInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/securitymanagerdata avi_securitymanagerdata}
*/
export class Securitymanagerdata extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "avi_securitymanagerdata";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Securitymanagerdata resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Securitymanagerdata to import
  * @param importFromId The id of the existing Securitymanagerdata that should be imported. Refer to the {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/securitymanagerdata#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Securitymanagerdata to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "avi_securitymanagerdata", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/securitymanagerdata avi_securitymanagerdata} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SecuritymanagerdataConfig
  */
  public constructor(scope: Construct, id: string, config: SecuritymanagerdataConfig) {
    super(scope, id, {
      terraformResourceType: 'avi_securitymanagerdata',
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
    this._id = config.id;
    this._name = config.name;
    this._tenantRef = config.tenantRef;
    this._uuid = config.uuid;
    this._appLearningInfo.internalValue = config.appLearningInfo;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // app_learning_info - computed: false, optional: true, required: false
  private _appLearningInfo = new SecuritymanagerdataAppLearningInfoList(this, "app_learning_info", false);
  public get appLearningInfo() {
    return this._appLearningInfo;
  }
  public putAppLearningInfo(value: SecuritymanagerdataAppLearningInfo[] | cdktf.IResolvable) {
    this._appLearningInfo.internalValue = value;
  }
  public resetAppLearningInfo() {
    this._appLearningInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appLearningInfoInput() {
    return this._appLearningInfo.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      tenant_ref: cdktf.stringToTerraform(this._tenantRef),
      uuid: cdktf.stringToTerraform(this._uuid),
      app_learning_info: cdktf.listMapper(securitymanagerdataAppLearningInfoToTerraform, true)(this._appLearningInfo.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
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
      app_learning_info: {
        value: cdktf.listMapperHcl(securitymanagerdataAppLearningInfoToHclTerraform, true)(this._appLearningInfo.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SecuritymanagerdataAppLearningInfoList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
