// https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/dnspolicy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DnspolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/dnspolicy#created_by Dnspolicy#created_by}
  */
  readonly createdBy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/dnspolicy#description Dnspolicy#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/dnspolicy#id Dnspolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/dnspolicy#internal Dnspolicy#internal}
  */
  readonly internal?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/dnspolicy#name Dnspolicy#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/dnspolicy#tenant_ref Dnspolicy#tenant_ref}
  */
  readonly tenantRef?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/dnspolicy#uuid Dnspolicy#uuid}
  */
  readonly uuid?: string;
  /**
  * configpb_attributes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/dnspolicy#configpb_attributes Dnspolicy#configpb_attributes}
  */
  readonly configpbAttributes?: DnspolicyConfigpbAttributes[] | cdktf.IResolvable;
  /**
  * markers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/dnspolicy#markers Dnspolicy#markers}
  */
  readonly markers?: DnspolicyMarkers[] | cdktf.IResolvable;
  /**
  * rule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/dnspolicy#rule Dnspolicy#rule}
  */
  readonly rule?: DnspolicyRule[] | cdktf.IResolvable;
}
export interface DnspolicyConfigpbAttributes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/dnspolicy#version Dnspolicy#version}
  */
  readonly version?: string;
}

export function dnspolicyConfigpbAttributesToTerraform(struct?: DnspolicyConfigpbAttributes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    version: cdktf.stringToTerraform(struct!.version),
  }
}


export function dnspolicyConfigpbAttributesToHclTerraform(struct?: DnspolicyConfigpbAttributes | cdktf.IResolvable): any {
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

export class DnspolicyConfigpbAttributesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DnspolicyConfigpbAttributes | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DnspolicyConfigpbAttributes | cdktf.IResolvable | undefined) {
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

export class DnspolicyConfigpbAttributesList extends cdktf.ComplexList {
  public internalValue? : DnspolicyConfigpbAttributes[] | cdktf.IResolvable

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
  public get(index: number): DnspolicyConfigpbAttributesOutputReference {
    return new DnspolicyConfigpbAttributesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DnspolicyMarkers {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/dnspolicy#key Dnspolicy#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/dnspolicy#values Dnspolicy#values}
  */
  readonly values?: string[];
}

export function dnspolicyMarkersToTerraform(struct?: DnspolicyMarkers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function dnspolicyMarkersToHclTerraform(struct?: DnspolicyMarkers | cdktf.IResolvable): any {
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

export class DnspolicyMarkersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DnspolicyMarkers | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DnspolicyMarkers | cdktf.IResolvable | undefined) {
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

export class DnspolicyMarkersList extends cdktf.ComplexList {
  public internalValue? : DnspolicyMarkers[] | cdktf.IResolvable

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
  public get(index: number): DnspolicyMarkersOutputReference {
    return new DnspolicyMarkersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DnspolicyRuleActionAllow {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/dnspolicy#allow Dnspolicy#allow}
  */
  readonly allow?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/dnspolicy#reset_conn Dnspolicy#reset_conn}
  */
  readonly resetConn?: string;
}

export function dnspolicyRuleActionAllowToTerraform(struct?: DnspolicyRuleActionAllow | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow: cdktf.stringToTerraform(struct!.allow),
    reset_conn: cdktf.stringToTerraform(struct!.resetConn),
  }
}


export function dnspolicyRuleActionAllowToHclTerraform(struct?: DnspolicyRuleActionAllow | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow: {
      value: cdktf.stringToHclTerraform(struct!.allow),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    reset_conn: {
      value: cdktf.stringToHclTerraform(struct!.resetConn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DnspolicyRuleActionAllowOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DnspolicyRuleActionAllow | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allow !== undefined) {
      hasAnyValues = true;
      internalValueResult.allow = this._allow;
    }
    if (this._resetConn !== undefined) {
      hasAnyValues = true;
      internalValueResult.resetConn = this._resetConn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DnspolicyRuleActionAllow | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allow = undefined;
      this._resetConn = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allow = value.allow;
      this._resetConn = value.resetConn;
    }
  }

  // allow - computed: false, optional: true, required: false
  private _allow?: string; 
  public get allow() {
    return this.getStringAttribute('allow');
  }
  public set allow(value: string) {
    this._allow = value;
  }
  public resetAllow() {
    this._allow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowInput() {
    return this._allow;
  }

  // reset_conn - computed: false, optional: true, required: false
  private _resetConn?: string; 
  public get resetConn() {
    return this.getStringAttribute('reset_conn');
  }
  public set resetConn(value: string) {
    this._resetConn = value;
  }
  public resetResetConn() {
    this._resetConn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resetConnInput() {
    return this._resetConn;
  }
}

export class DnspolicyRuleActionAllowList extends cdktf.ComplexList {
  public internalValue? : DnspolicyRuleActionAllow[] | cdktf.IResolvable

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
  public get(index: number): DnspolicyRuleActionAllowOutputReference {
    return new DnspolicyRuleActionAllowOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DnspolicyRuleActionDnsRateLimiterAction {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/dnspolicy#type Dnspolicy#type}
  */
  readonly type?: string;
}

export function dnspolicyRuleActionDnsRateLimiterActionToTerraform(struct?: DnspolicyRuleActionDnsRateLimiterAction | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dnspolicyRuleActionDnsRateLimiterActionToHclTerraform(struct?: DnspolicyRuleActionDnsRateLimiterAction | cdktf.IResolvable): any {
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

export class DnspolicyRuleActionDnsRateLimiterActionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DnspolicyRuleActionDnsRateLimiterAction | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DnspolicyRuleActionDnsRateLimiterAction | cdktf.IResolvable | undefined) {
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

  // type - computed: false, optional: true, required: false
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

export class DnspolicyRuleActionDnsRateLimiterActionList extends cdktf.ComplexList {
  public internalValue? : DnspolicyRuleActionDnsRateLimiterAction[] | cdktf.IResolvable

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
  public get(index: number): DnspolicyRuleActionDnsRateLimiterActionOutputReference {
    return new DnspolicyRuleActionDnsRateLimiterActionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DnspolicyRuleActionDnsRateLimiterRateLimiterObject {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/dnspolicy#burst_sz Dnspolicy#burst_sz}
  */
  readonly burstSz?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/dnspolicy#count Dnspolicy#count}
  */
  readonly count?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/dnspolicy#name Dnspolicy#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/dnspolicy#period Dnspolicy#period}
  */
  readonly period?: string;
}

export function dnspolicyRuleActionDnsRateLimiterRateLimiterObjectToTerraform(struct?: DnspolicyRuleActionDnsRateLimiterRateLimiterObject | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    burst_sz: cdktf.stringToTerraform(struct!.burstSz),
    count: cdktf.stringToTerraform(struct!.count),
    name: cdktf.stringToTerraform(struct!.name),
    period: cdktf.stringToTerraform(struct!.period),
  }
}


export function dnspolicyRuleActionDnsRateLimiterRateLimiterObjectToHclTerraform(struct?: DnspolicyRuleActionDnsRateLimiterRateLimiterObject | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    burst_sz: {
      value: cdktf.stringToHclTerraform(struct!.burstSz),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    count: {
      value: cdktf.stringToHclTerraform(struct!.count),
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
    period: {
      value: cdktf.stringToHclTerraform(struct!.period),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DnspolicyRuleActionDnsRateLimiterRateLimiterObjectOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DnspolicyRuleActionDnsRateLimiterRateLimiterObject | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._burstSz !== undefined) {
      hasAnyValues = true;
      internalValueResult.burstSz = this._burstSz;
    }
    if (this._count !== undefined) {
      hasAnyValues = true;
      internalValueResult.count = this._count;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._period !== undefined) {
      hasAnyValues = true;
      internalValueResult.period = this._period;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DnspolicyRuleActionDnsRateLimiterRateLimiterObject | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._burstSz = undefined;
      this._count = undefined;
      this._name = undefined;
      this._period = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._burstSz = value.burstSz;
      this._count = value.count;
      this._name = value.name;
      this._period = value.period;
    }
  }

  // burst_sz - computed: false, optional: true, required: false
  private _burstSz?: string; 
  public get burstSz() {
    return this.getStringAttribute('burst_sz');
  }
  public set burstSz(value: string) {
    this._burstSz = value;
  }
  public resetBurstSz() {
    this._burstSz = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get burstSzInput() {
    return this._burstSz;
  }

  // count - computed: false, optional: true, required: false
  private _count?: string; 
  public get count() {
    return this.getStringAttribute('count');
  }
  public set count(value: string) {
    this._count = value;
  }
  public resetCount() {
    this._count = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get countInput() {
    return this._count;
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

  // period - computed: false, optional: true, required: false
  private _period?: string; 
  public get period() {
    return this.getStringAttribute('period');
  }
  public set period(value: string) {
    this._period = value;
  }
  public resetPeriod() {
    this._period = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get periodInput() {
    return this._period;
  }
}

export class DnspolicyRuleActionDnsRateLimiterRateLimiterObjectList extends cdktf.ComplexList {
  public internalValue? : DnspolicyRuleActionDnsRateLimiterRateLimiterObject[] | cdktf.IResolvable

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
  public get(index: number): DnspolicyRuleActionDnsRateLimiterRateLimiterObjectOutputReference {
    return new DnspolicyRuleActionDnsRateLimiterRateLimiterObjectOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DnspolicyRuleActionDnsRateLimiter {
  /**
  * action block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/dnspolicy#action Dnspolicy#action}
  */
  readonly action: DnspolicyRuleActionDnsRateLimiterAction[] | cdktf.IResolvable;
  /**
  * rate_limiter_object block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/dnspolicy#rate_limiter_object Dnspolicy#rate_limiter_object}
  */
  readonly rateLimiterObject: DnspolicyRuleActionDnsRateLimiterRateLimiterObject[] | cdktf.IResolvable;
}

export function dnspolicyRuleActionDnsRateLimiterToTerraform(struct?: DnspolicyRuleActionDnsRateLimiter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.listMapper(dnspolicyRuleActionDnsRateLimiterActionToTerraform, true)(struct!.action),
    rate_limiter_object: cdktf.listMapper(dnspolicyRuleActionDnsRateLimiterRateLimiterObjectToTerraform, true)(struct!.rateLimiterObject),
  }
}


export function dnspolicyRuleActionDnsRateLimiterToHclTerraform(struct?: DnspolicyRuleActionDnsRateLimiter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.listMapperHcl(dnspolicyRuleActionDnsRateLimiterActionToHclTerraform, true)(struct!.action),
      isBlock: true,
      type: "set",
      storageClassType: "DnspolicyRuleActionDnsRateLimiterActionList",
    },
    rate_limiter_object: {
      value: cdktf.listMapperHcl(dnspolicyRuleActionDnsRateLimiterRateLimiterObjectToHclTerraform, true)(struct!.rateLimiterObject),
      isBlock: true,
      type: "set",
      storageClassType: "DnspolicyRuleActionDnsRateLimiterRateLimiterObjectList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DnspolicyRuleActionDnsRateLimiterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DnspolicyRuleActionDnsRateLimiter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action?.internalValue;
    }
    if (this._rateLimiterObject?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rateLimiterObject = this._rateLimiterObject?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DnspolicyRuleActionDnsRateLimiter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action.internalValue = undefined;
      this._rateLimiterObject.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action.internalValue = value.action;
      this._rateLimiterObject.internalValue = value.rateLimiterObject;
    }
  }

  // action - computed: false, optional: false, required: true
  private _action = new DnspolicyRuleActionDnsRateLimiterActionList(this, "action", true);
  public get action() {
    return this._action;
  }
  public putAction(value: DnspolicyRuleActionDnsRateLimiterAction[] | cdktf.IResolvable) {
    this._action.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action.internalValue;
  }

  // rate_limiter_object - computed: false, optional: false, required: true
  private _rateLimiterObject = new DnspolicyRuleActionDnsRateLimiterRateLimiterObjectList(this, "rate_limiter_object", true);
  public get rateLimiterObject() {
    return this._rateLimiterObject;
  }
  public putRateLimiterObject(value: DnspolicyRuleActionDnsRateLimiterRateLimiterObject[] | cdktf.IResolvable) {
    this._rateLimiterObject.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rateLimiterObjectInput() {
    return this._rateLimiterObject.internalValue;
  }
}

export class DnspolicyRuleActionDnsRateLimiterList extends cdktf.ComplexList {
  public internalValue? : DnspolicyRuleActionDnsRateLimiter[] | cdktf.IResolvable

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
  public get(index: number): DnspolicyRuleActionDnsRateLimiterOutputReference {
    return new DnspolicyRuleActionDnsRateLimiterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DnspolicyRuleActionGsGroupSelection {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/dnspolicy#group_name Dnspolicy#group_name}
  */
  readonly groupName: string;
}

export function dnspolicyRuleActionGsGroupSelectionToTerraform(struct?: DnspolicyRuleActionGsGroupSelection | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    group_name: cdktf.stringToTerraform(struct!.groupName),
  }
}


export function dnspolicyRuleActionGsGroupSelectionToHclTerraform(struct?: DnspolicyRuleActionGsGroupSelection | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    group_name: {
      value: cdktf.stringToHclTerraform(struct!.groupName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DnspolicyRuleActionGsGroupSelectionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DnspolicyRuleActionGsGroupSelection | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._groupName !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupName = this._groupName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DnspolicyRuleActionGsGroupSelection | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._groupName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._groupName = value.groupName;
    }
  }

  // group_name - computed: false, optional: false, required: true
  private _groupName?: string; 
  public get groupName() {
    return this.getStringAttribute('group_name');
  }
  public set groupName(value: string) {
    this._groupName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get groupNameInput() {
    return this._groupName;
  }
}

export class DnspolicyRuleActionGsGroupSelectionList extends cdktf.ComplexList {
  public internalValue? : DnspolicyRuleActionGsGroupSelection[] | cdktf.IResolvable

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
  public get(index: number): DnspolicyRuleActionGsGroupSelectionOutputReference {
    return new DnspolicyRuleActionGsGroupSelectionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DnspolicyRuleActionGslbSiteSelection {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/dnspolicy#fallback_site_names Dnspolicy#fallback_site_names}
  */
  readonly fallbackSiteNames?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/dnspolicy#is_site_preferred Dnspolicy#is_site_preferred}
  */
  readonly isSitePreferred?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/dnspolicy#site_name Dnspolicy#site_name}
  */
  readonly siteName: string;
}

export function dnspolicyRuleActionGslbSiteSelectionToTerraform(struct?: DnspolicyRuleActionGslbSiteSelection | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fallback_site_names: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.fallbackSiteNames),
    is_site_preferred: cdktf.stringToTerraform(struct!.isSitePreferred),
    site_name: cdktf.stringToTerraform(struct!.siteName),
  }
}


export function dnspolicyRuleActionGslbSiteSelectionToHclTerraform(struct?: DnspolicyRuleActionGslbSiteSelection | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    fallback_site_names: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.fallbackSiteNames),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    is_site_preferred: {
      value: cdktf.stringToHclTerraform(struct!.isSitePreferred),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    site_name: {
      value: cdktf.stringToHclTerraform(struct!.siteName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DnspolicyRuleActionGslbSiteSelectionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DnspolicyRuleActionGslbSiteSelection | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fallbackSiteNames !== undefined) {
      hasAnyValues = true;
      internalValueResult.fallbackSiteNames = this._fallbackSiteNames;
    }
    if (this._isSitePreferred !== undefined) {
      hasAnyValues = true;
      internalValueResult.isSitePreferred = this._isSitePreferred;
    }
    if (this._siteName !== undefined) {
      hasAnyValues = true;
      internalValueResult.siteName = this._siteName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DnspolicyRuleActionGslbSiteSelection | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fallbackSiteNames = undefined;
      this._isSitePreferred = undefined;
      this._siteName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fallbackSiteNames = value.fallbackSiteNames;
      this._isSitePreferred = value.isSitePreferred;
      this._siteName = value.siteName;
    }
  }

  // fallback_site_names - computed: false, optional: true, required: false
  private _fallbackSiteNames?: string[]; 
  public get fallbackSiteNames() {
    return this.getListAttribute('fallback_site_names');
  }
  public set fallbackSiteNames(value: string[]) {
    this._fallbackSiteNames = value;
  }
  public resetFallbackSiteNames() {
    this._fallbackSiteNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fallbackSiteNamesInput() {
    return this._fallbackSiteNames;
  }

  // is_site_preferred - computed: false, optional: true, required: false
  private _isSitePreferred?: string; 
  public get isSitePreferred() {
    return this.getStringAttribute('is_site_preferred');
  }
  public set isSitePreferred(value: string) {
    this._isSitePreferred = value;
  }
  public resetIsSitePreferred() {
    this._isSitePreferred = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isSitePreferredInput() {
    return this._isSitePreferred;
  }

  // site_name - computed: false, optional: false, required: true
  private _siteName?: string; 
  public get siteName() {
    return this.getStringAttribute('site_name');
  }
  public set siteName(value: string) {
    this._siteName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get siteNameInput() {
    return this._siteName;
  }
}

export class DnspolicyRuleActionGslbSiteSelectionList extends cdktf.ComplexList {
  public internalValue? : DnspolicyRuleActionGslbSiteSelection[] | cdktf.IResolvable

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
  public get(index: number): DnspolicyRuleActionGslbSiteSelectionOutputReference {
    return new DnspolicyRuleActionGslbSiteSelectionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DnspolicyRuleActionPoolSwitching {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/dnspolicy#pool_group_ref Dnspolicy#pool_group_ref}
  */
  readonly poolGroupRef?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/dnspolicy#pool_ref Dnspolicy#pool_ref}
  */
  readonly poolRef?: string;
}

export function dnspolicyRuleActionPoolSwitchingToTerraform(struct?: DnspolicyRuleActionPoolSwitching | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    pool_group_ref: cdktf.stringToTerraform(struct!.poolGroupRef),
    pool_ref: cdktf.stringToTerraform(struct!.poolRef),
  }
}


export function dnspolicyRuleActionPoolSwitchingToHclTerraform(struct?: DnspolicyRuleActionPoolSwitching | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    pool_group_ref: {
      value: cdktf.stringToHclTerraform(struct!.poolGroupRef),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pool_ref: {
      value: cdktf.stringToHclTerraform(struct!.poolRef),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DnspolicyRuleActionPoolSwitchingOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DnspolicyRuleActionPoolSwitching | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._poolGroupRef !== undefined) {
      hasAnyValues = true;
      internalValueResult.poolGroupRef = this._poolGroupRef;
    }
    if (this._poolRef !== undefined) {
      hasAnyValues = true;
      internalValueResult.poolRef = this._poolRef;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DnspolicyRuleActionPoolSwitching | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._poolGroupRef = undefined;
      this._poolRef = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._poolGroupRef = value.poolGroupRef;
      this._poolRef = value.poolRef;
    }
  }

  // pool_group_ref - computed: true, optional: true, required: false
  private _poolGroupRef?: string; 
  public get poolGroupRef() {
    return this.getStringAttribute('pool_group_ref');
  }
  public set poolGroupRef(value: string) {
    this._poolGroupRef = value;
  }
  public resetPoolGroupRef() {
    this._poolGroupRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get poolGroupRefInput() {
    return this._poolGroupRef;
  }

  // pool_ref - computed: true, optional: true, required: false
  private _poolRef?: string; 
  public get poolRef() {
    return this.getStringAttribute('pool_ref');
  }
  public set poolRef(value: string) {
    this._poolRef = value;
  }
  public resetPoolRef() {
    this._poolRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get poolRefInput() {
    return this._poolRef;
  }
}

export class DnspolicyRuleActionPoolSwitchingList extends cdktf.ComplexList {
  public internalValue? : DnspolicyRuleActionPoolSwitching[] | cdktf.IResolvable

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
  public get(index: number): DnspolicyRuleActionPoolSwitchingOutputReference {
    return new DnspolicyRuleActionPoolSwitchingOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DnspolicyRuleActionResponseResourceRecordSetsResourceRecordSetCname {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/dnspolicy#cname Dnspolicy#cname}
  */
  readonly cname: string;
}

export function dnspolicyRuleActionResponseResourceRecordSetsResourceRecordSetCnameToTerraform(struct?: DnspolicyRuleActionResponseResourceRecordSetsResourceRecordSetCname | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cname: cdktf.stringToTerraform(struct!.cname),
  }
}


export function dnspolicyRuleActionResponseResourceRecordSetsResourceRecordSetCnameToHclTerraform(struct?: DnspolicyRuleActionResponseResourceRecordSetsResourceRecordSetCname | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cname: {
      value: cdktf.stringToHclTerraform(struct!.cname),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DnspolicyRuleActionResponseResourceRecordSetsResourceRecordSetCnameOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DnspolicyRuleActionResponseResourceRecordSetsResourceRecordSetCname | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cname !== undefined) {
      hasAnyValues = true;
      internalValueResult.cname = this._cname;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DnspolicyRuleActionResponseResourceRecordSetsResourceRecordSetCname | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cname = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cname = value.cname;
    }
  }

  // cname - computed: false, optional: false, required: true
  private _cname?: string; 
  public get cname() {
    return this.getStringAttribute('cname');
  }
  public set cname(value: string) {
    this._cname = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cnameInput() {
    return this._cname;
  }
}

export class DnspolicyRuleActionResponseResourceRecordSetsResourceRecordSetCnameList extends cdktf.ComplexList {
  public internalValue? : DnspolicyRuleActionResponseResourceRecordSetsResourceRecordSetCname[] | cdktf.IResolvable

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
  public get(index: number): DnspolicyRuleActionResponseResourceRecordSetsResourceRecordSetCnameOutputReference {
    return new DnspolicyRuleActionResponseResourceRecordSetsResourceRecordSetCnameOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DnspolicyRuleActionResponseResourceRecordSetsResourceRecordSetIp6AddressesIp6Address {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/dnspolicy#addr Dnspolicy#addr}
  */
  readonly addr: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/dnspolicy#type Dnspolicy#type}
  */
  readonly type: string;
}

export function dnspolicyRuleActionResponseResourceRecordSetsResourceRecordSetIp6AddressesIp6AddressToTerraform(struct?: DnspolicyRuleActionResponseResourceRecordSetsResourceRecordSetIp6AddressesIp6Address | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    addr: cdktf.stringToTerraform(struct!.addr),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dnspolicyRuleActionResponseResourceRecordSetsResourceRecordSetIp6AddressesIp6AddressToHclTerraform(struct?: DnspolicyRuleActionResponseResourceRecordSetsResourceRecordSetIp6AddressesIp6Address | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    addr: {
      value: cdktf.stringToHclTerraform(struct!.addr),
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

export class DnspolicyRuleActionResponseResourceRecordSetsResourceRecordSetIp6AddressesIp6AddressOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DnspolicyRuleActionResponseResourceRecordSetsResourceRecordSetIp6AddressesIp6Address | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addr !== undefined) {
      hasAnyValues = true;
      internalValueResult.addr = this._addr;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DnspolicyRuleActionResponseResourceRecordSetsResourceRecordSetIp6AddressesIp6Address | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._addr = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._addr = value.addr;
      this._type = value.type;
    }
  }

  // addr - computed: false, optional: false, required: true
  private _addr?: string; 
  public get addr() {
    return this.getStringAttribute('addr');
  }
  public set addr(value: string) {
    this._addr = value;
  }
  // Temporarily expose input value. Use with caution.
  public get addrInput() {
    return this._addr;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

export class DnspolicyRuleActionResponseResourceRecordSetsResourceRecordSetIp6AddressesIp6AddressList extends cdktf.ComplexList {
  public internalValue? : DnspolicyRuleActionResponseResourceRecordSetsResourceRecordSetIp6AddressesIp6Address[] | cdktf.IResolvable

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
  public get(index: number): DnspolicyRuleActionResponseResourceRecordSetsResourceRecordSetIp6AddressesIp6AddressOutputReference {
    return new DnspolicyRuleActionResponseResourceRecordSetsResourceRecordSetIp6AddressesIp6AddressOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DnspolicyRuleActionResponseResourceRecordSetsResourceRecordSetIp6Addresses {
  /**
  * ip6_address block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/dnspolicy#ip6_address Dnspolicy#ip6_address}
  */
  readonly ip6Address: DnspolicyRuleActionResponseResourceRecordSetsResourceRecordSetIp6AddressesIp6Address[] | cdktf.IResolvable;
}

export function dnspolicyRuleActionResponseResourceRecordSetsResourceRecordSetIp6AddressesToTerraform(struct?: DnspolicyRuleActionResponseResourceRecordSetsResourceRecordSetIp6Addresses | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip6_address: cdktf.listMapper(dnspolicyRuleActionResponseResourceRecordSetsResourceRecordSetIp6AddressesIp6AddressToTerraform, true)(struct!.ip6Address),
  }
}


export function dnspolicyRuleActionResponseResourceRecordSetsResourceRecordSetIp6AddressesToHclTerraform(struct?: DnspolicyRuleActionResponseResourceRecordSetsResourceRecordSetIp6Addresses | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ip6_address: {
      value: cdktf.listMapperHcl(dnspolicyRuleActionResponseResourceRecordSetsResourceRecordSetIp6AddressesIp6AddressToHclTerraform, true)(struct!.ip6Address),
      isBlock: true,
      type: "set",
      storageClassType: "DnspolicyRuleActionResponseResourceRecordSetsResourceRecordSetIp6AddressesIp6AddressList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DnspolicyRuleActionResponseResourceRecordSetsResourceRecordSetIp6AddressesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DnspolicyRuleActionResponseResourceRecordSetsResourceRecordSetIp6Addresses | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ip6Address?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip6Address = this._ip6Address?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DnspolicyRuleActionResponseResourceRecordSetsResourceRecordSetIp6Addresses | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ip6Address.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ip6Address.internalValue = value.ip6Address;
    }
  }

  // ip6_address - computed: false, optional: false, required: true
  private _ip6Address = new DnspolicyRuleActionResponseResourceRecordSetsResourceRecordSetIp6AddressesIp6AddressList(this, "ip6_address", true);
  public get ip6Address() {
    return this._ip6Address;
  }
  public putIp6Address(value: DnspolicyRuleActionResponseResourceRecordSetsResourceRecordSetIp6AddressesIp6Address[] | cdktf.IResolvable) {
    this._ip6Address.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ip6AddressInput() {
    return this._ip6Address.internalValue;
  }
}

export class DnspolicyRuleActionResponseResourceRecordSetsResourceRecordSetIp6AddressesList extends cdktf.ComplexList {
  public internalValue? : DnspolicyRuleActionResponseResourceRecordSetsResourceRecordSetIp6Addresses[] | cdktf.IResolvable

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
  public get(index: number): DnspolicyRuleActionResponseResourceRecordSetsResourceRecordSetIp6AddressesOutputReference {
    return new DnspolicyRuleActionResponseResourceRecordSetsResourceRecordSetIp6AddressesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DnspolicyRuleActionResponseResourceRecordSetsResourceRecordSetIpAddressesIpAddress {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/dnspolicy#addr Dnspolicy#addr}
  */
  readonly addr: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/dnspolicy#type Dnspolicy#type}
  */
  readonly type: string;
}

export function dnspolicyRuleActionResponseResourceRecordSetsResourceRecordSetIpAddressesIpAddressToTerraform(struct?: DnspolicyRuleActionResponseResourceRecordSetsResourceRecordSetIpAddressesIpAddress | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    addr: cdktf.stringToTerraform(struct!.addr),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dnspolicyRuleActionResponseResourceRecordSetsResourceRecordSetIpAddressesIpAddressToHclTerraform(struct?: DnspolicyRuleActionResponseResourceRecordSetsResourceRecordSetIpAddressesIpAddress | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    addr: {
      value: cdktf.stringToHclTerraform(struct!.addr),
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

export class DnspolicyRuleActionResponseResourceRecordSetsResourceRecordSetIpAddressesIpAddressOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DnspolicyRuleActionResponseResourceRecordSetsResourceRecordSetIpAddressesIpAddress | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addr !== undefined) {
      hasAnyValues = true;
      internalValueResult.addr = this._addr;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DnspolicyRuleActionResponseResourceRecordSetsResourceRecordSetIpAddressesIpAddress | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._addr = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._addr = value.addr;
      this._type = value.type;
    }
  }

  // addr - computed: false, optional: false, required: true
  private _addr?: string; 
  public get addr() {
    return this.getStringAttribute('addr');
  }
  public set addr(value: string) {
    this._addr = value;
  }
  // Temporarily expose input value. Use with caution.
  public get addrInput() {
    return this._addr;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

export class DnspolicyRuleActionResponseResourceRecordSetsResourceRecordSetIpAddressesIpAddressList extends cdktf.ComplexList {
  public internalValue? : DnspolicyRuleActionResponseResourceRecordSetsResourceRecordSetIpAddressesIpAddress[] | cdktf.IResolvable

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
  public get(index: number): DnspolicyRuleActionResponseResourceRecordSetsResourceRecordSetIpAddressesIpAddressOutputReference {
    return new DnspolicyRuleActionResponseResourceRecordSetsResourceRecordSetIpAddressesIpAddressOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DnspolicyRuleActionResponseResourceRecordSetsResourceRecordSetIpAddresses {
  /**
  * ip_address block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/dnspolicy#ip_address Dnspolicy#ip_address}
  */
  readonly ipAddress: DnspolicyRuleActionResponseResourceRecordSetsResourceRecordSetIpAddressesIpAddress[] | cdktf.IResolvable;
}

export function dnspolicyRuleActionResponseResourceRecordSetsResourceRecordSetIpAddressesToTerraform(struct?: DnspolicyRuleActionResponseResourceRecordSetsResourceRecordSetIpAddresses | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip_address: cdktf.listMapper(dnspolicyRuleActionResponseResourceRecordSetsResourceRecordSetIpAddressesIpAddressToTerraform, true)(struct!.ipAddress),
  }
}


export function dnspolicyRuleActionResponseResourceRecordSetsResourceRecordSetIpAddressesToHclTerraform(struct?: DnspolicyRuleActionResponseResourceRecordSetsResourceRecordSetIpAddresses | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ip_address: {
      value: cdktf.listMapperHcl(dnspolicyRuleActionResponseResourceRecordSetsResourceRecordSetIpAddressesIpAddressToHclTerraform, true)(struct!.ipAddress),
      isBlock: true,
      type: "set",
      storageClassType: "DnspolicyRuleActionResponseResourceRecordSetsResourceRecordSetIpAddressesIpAddressList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DnspolicyRuleActionResponseResourceRecordSetsResourceRecordSetIpAddressesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DnspolicyRuleActionResponseResourceRecordSetsResourceRecordSetIpAddresses | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipAddress?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddress = this._ipAddress?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DnspolicyRuleActionResponseResourceRecordSetsResourceRecordSetIpAddresses | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ipAddress.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ipAddress.internalValue = value.ipAddress;
    }
  }

  // ip_address - computed: false, optional: false, required: true
  private _ipAddress = new DnspolicyRuleActionResponseResourceRecordSetsResourceRecordSetIpAddressesIpAddressList(this, "ip_address", true);
  public get ipAddress() {
    return this._ipAddress;
  }
  public putIpAddress(value: DnspolicyRuleActionResponseResourceRecordSetsResourceRecordSetIpAddressesIpAddress[] | cdktf.IResolvable) {
    this._ipAddress.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressInput() {
    return this._ipAddress.internalValue;
  }
}

export class DnspolicyRuleActionResponseResourceRecordSetsResourceRecordSetIpAddressesList extends cdktf.ComplexList {
  public internalValue? : DnspolicyRuleActionResponseResourceRecordSetsResourceRecordSetIpAddresses[] | cdktf.IResolvable

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
  public get(index: number): DnspolicyRuleActionResponseResourceRecordSetsResourceRecordSetIpAddressesOutputReference {
    return new DnspolicyRuleActionResponseResourceRecordSetsResourceRecordSetIpAddressesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DnspolicyRuleActionResponseResourceRecordSetsResourceRecordSetNsesIp6Address {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/dnspolicy#addr Dnspolicy#addr}
  */
  readonly addr: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/dnspolicy#type Dnspolicy#type}
  */
  readonly type: string;
}

export function dnspolicyRuleActionResponseResourceRecordSetsResourceRecordSetNsesIp6AddressToTerraform(struct?: DnspolicyRuleActionResponseResourceRecordSetsResourceRecordSetNsesIp6Address | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    addr: cdktf.stringToTerraform(struct!.addr),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dnspolicyRuleActionResponseResourceRecordSetsResourceRecordSetNsesIp6AddressToHclTerraform(struct?: DnspolicyRuleActionResponseResourceRecordSetsResourceRecordSetNsesIp6Address | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    addr: {
      value: cdktf.stringToHclTerraform(struct!.addr),
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

export class DnspolicyRuleActionResponseResourceRecordSetsResourceRecordSetNsesIp6AddressOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DnspolicyRuleActionResponseResourceRecordSetsResourceRecordSetNsesIp6Address | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addr !== undefined) {
      hasAnyValues = true;
      internalValueResult.addr = this._addr;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DnspolicyRuleActionResponseResourceRecordSetsResourceRecordSetNsesIp6Address | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._addr = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._addr = value.addr;
      this._type = value.type;
    }
  }

  // addr - computed: false, optional: false, required: true
  private _addr?: string; 
  public get addr() {
    return this.getStringAttribute('addr');
  }
  public set addr(value: string) {
    this._addr = value;
  }
  // Temporarily expose input value. Use with caution.
  public get addrInput() {
    return this._addr;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

export class DnspolicyRuleActionResponseResourceRecordSetsResourceRecordSetNsesIp6AddressList extends cdktf.ComplexList {
  public internalValue? : DnspolicyRuleActionResponseResourceRecordSetsResourceRecordSetNsesIp6Address[] | cdktf.IResolvable

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
  public get(index: number): DnspolicyRuleActionResponseResourceRecordSetsResourceRecordSetNsesIp6AddressOutputReference {
    return new DnspolicyRuleActionResponseResourceRecordSetsResourceRecordSetNsesIp6AddressOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DnspolicyRuleActionResponseResourceRecordSetsResourceRecordSetNsesIpAddress {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/dnspolicy#addr Dnspolicy#addr}
  */
  readonly addr: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/dnspolicy#type Dnspolicy#type}
  */
  readonly type: string;
}

export function dnspolicyRuleActionResponseResourceRecordSetsResourceRecordSetNsesIpAddressToTerraform(struct?: DnspolicyRuleActionResponseResourceRecordSetsResourceRecordSetNsesIpAddress | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    addr: cdktf.stringToTerraform(struct!.addr),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dnspolicyRuleActionResponseResourceRecordSetsResourceRecordSetNsesIpAddressToHclTerraform(struct?: DnspolicyRuleActionResponseResourceRecordSetsResourceRecordSetNsesIpAddress | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    addr: {
      value: cdktf.stringToHclTerraform(struct!.addr),
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

export class DnspolicyRuleActionResponseResourceRecordSetsResourceRecordSetNsesIpAddressOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DnspolicyRuleActionResponseResourceRecordSetsResourceRecordSetNsesIpAddress | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addr !== undefined) {
      hasAnyValues = true;
      internalValueResult.addr = this._addr;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DnspolicyRuleActionResponseResourceRecordSetsResourceRecordSetNsesIpAddress | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._addr = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._addr = value.addr;
      this._type = value.type;
    }
  }

  // addr - computed: false, optional: false, required: true
  private _addr?: string; 
  public get addr() {
    return this.getStringAttribute('addr');
  }
  public set addr(value: string) {
    this._addr = value;
  }
  // Temporarily expose input value. Use with caution.
  public get addrInput() {
    return this._addr;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

export class DnspolicyRuleActionResponseResourceRecordSetsResourceRecordSetNsesIpAddressList extends cdktf.ComplexList {
  public internalValue? : DnspolicyRuleActionResponseResourceRecordSetsResourceRecordSetNsesIpAddress[] | cdktf.IResolvable

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
  public get(index: number): DnspolicyRuleActionResponseResourceRecordSetsResourceRecordSetNsesIpAddressOutputReference {
    return new DnspolicyRuleActionResponseResourceRecordSetsResourceRecordSetNsesIpAddressOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DnspolicyRuleActionResponseResourceRecordSetsResourceRecordSetNses {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/dnspolicy#nsname Dnspolicy#nsname}
  */
  readonly nsname: string;
  /**
  * ip6_address block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/dnspolicy#ip6_address Dnspolicy#ip6_address}
  */
  readonly ip6Address?: DnspolicyRuleActionResponseResourceRecordSetsResourceRecordSetNsesIp6Address[] | cdktf.IResolvable;
  /**
  * ip_address block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/dnspolicy#ip_address Dnspolicy#ip_address}
  */
  readonly ipAddress?: DnspolicyRuleActionResponseResourceRecordSetsResourceRecordSetNsesIpAddress[] | cdktf.IResolvable;
}

export function dnspolicyRuleActionResponseResourceRecordSetsResourceRecordSetNsesToTerraform(struct?: DnspolicyRuleActionResponseResourceRecordSetsResourceRecordSetNses | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    nsname: cdktf.stringToTerraform(struct!.nsname),
    ip6_address: cdktf.listMapper(dnspolicyRuleActionResponseResourceRecordSetsResourceRecordSetNsesIp6AddressToTerraform, true)(struct!.ip6Address),
    ip_address: cdktf.listMapper(dnspolicyRuleActionResponseResourceRecordSetsResourceRecordSetNsesIpAddressToTerraform, true)(struct!.ipAddress),
  }
}


export function dnspolicyRuleActionResponseResourceRecordSetsResourceRecordSetNsesToHclTerraform(struct?: DnspolicyRuleActionResponseResourceRecordSetsResourceRecordSetNses | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    nsname: {
      value: cdktf.stringToHclTerraform(struct!.nsname),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip6_address: {
      value: cdktf.listMapperHcl(dnspolicyRuleActionResponseResourceRecordSetsResourceRecordSetNsesIp6AddressToHclTerraform, true)(struct!.ip6Address),
      isBlock: true,
      type: "set",
      storageClassType: "DnspolicyRuleActionResponseResourceRecordSetsResourceRecordSetNsesIp6AddressList",
    },
    ip_address: {
      value: cdktf.listMapperHcl(dnspolicyRuleActionResponseResourceRecordSetsResourceRecordSetNsesIpAddressToHclTerraform, true)(struct!.ipAddress),
      isBlock: true,
      type: "set",
      storageClassType: "DnspolicyRuleActionResponseResourceRecordSetsResourceRecordSetNsesIpAddressList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DnspolicyRuleActionResponseResourceRecordSetsResourceRecordSetNsesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DnspolicyRuleActionResponseResourceRecordSetsResourceRecordSetNses | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nsname !== undefined) {
      hasAnyValues = true;
      internalValueResult.nsname = this._nsname;
    }
    if (this._ip6Address?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip6Address = this._ip6Address?.internalValue;
    }
    if (this._ipAddress?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddress = this._ipAddress?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DnspolicyRuleActionResponseResourceRecordSetsResourceRecordSetNses | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._nsname = undefined;
      this._ip6Address.internalValue = undefined;
      this._ipAddress.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._nsname = value.nsname;
      this._ip6Address.internalValue = value.ip6Address;
      this._ipAddress.internalValue = value.ipAddress;
    }
  }

  // nsname - computed: false, optional: false, required: true
  private _nsname?: string; 
  public get nsname() {
    return this.getStringAttribute('nsname');
  }
  public set nsname(value: string) {
    this._nsname = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nsnameInput() {
    return this._nsname;
  }

  // ip6_address - computed: false, optional: true, required: false
  private _ip6Address = new DnspolicyRuleActionResponseResourceRecordSetsResourceRecordSetNsesIp6AddressList(this, "ip6_address", true);
  public get ip6Address() {
    return this._ip6Address;
  }
  public putIp6Address(value: DnspolicyRuleActionResponseResourceRecordSetsResourceRecordSetNsesIp6Address[] | cdktf.IResolvable) {
    this._ip6Address.internalValue = value;
  }
  public resetIp6Address() {
    this._ip6Address.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ip6AddressInput() {
    return this._ip6Address.internalValue;
  }

  // ip_address - computed: false, optional: true, required: false
  private _ipAddress = new DnspolicyRuleActionResponseResourceRecordSetsResourceRecordSetNsesIpAddressList(this, "ip_address", true);
  public get ipAddress() {
    return this._ipAddress;
  }
  public putIpAddress(value: DnspolicyRuleActionResponseResourceRecordSetsResourceRecordSetNsesIpAddress[] | cdktf.IResolvable) {
    this._ipAddress.internalValue = value;
  }
  public resetIpAddress() {
    this._ipAddress.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressInput() {
    return this._ipAddress.internalValue;
  }
}

export class DnspolicyRuleActionResponseResourceRecordSetsResourceRecordSetNsesList extends cdktf.ComplexList {
  public internalValue? : DnspolicyRuleActionResponseResourceRecordSetsResourceRecordSetNses[] | cdktf.IResolvable

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
  public get(index: number): DnspolicyRuleActionResponseResourceRecordSetsResourceRecordSetNsesOutputReference {
    return new DnspolicyRuleActionResponseResourceRecordSetsResourceRecordSetNsesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DnspolicyRuleActionResponseResourceRecordSetsResourceRecordSet {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/dnspolicy#fqdn Dnspolicy#fqdn}
  */
  readonly fqdn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/dnspolicy#ttl Dnspolicy#ttl}
  */
  readonly ttl: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/dnspolicy#type Dnspolicy#type}
  */
  readonly type: string;
  /**
  * cname block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/dnspolicy#cname Dnspolicy#cname}
  */
  readonly cname?: DnspolicyRuleActionResponseResourceRecordSetsResourceRecordSetCname[] | cdktf.IResolvable;
  /**
  * ip6_addresses block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/dnspolicy#ip6_addresses Dnspolicy#ip6_addresses}
  */
  readonly ip6Addresses?: DnspolicyRuleActionResponseResourceRecordSetsResourceRecordSetIp6Addresses[] | cdktf.IResolvable;
  /**
  * ip_addresses block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/dnspolicy#ip_addresses Dnspolicy#ip_addresses}
  */
  readonly ipAddresses?: DnspolicyRuleActionResponseResourceRecordSetsResourceRecordSetIpAddresses[] | cdktf.IResolvable;
  /**
  * nses block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/dnspolicy#nses Dnspolicy#nses}
  */
  readonly nses?: DnspolicyRuleActionResponseResourceRecordSetsResourceRecordSetNses[] | cdktf.IResolvable;
}

export function dnspolicyRuleActionResponseResourceRecordSetsResourceRecordSetToTerraform(struct?: DnspolicyRuleActionResponseResourceRecordSetsResourceRecordSet | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fqdn: cdktf.stringToTerraform(struct!.fqdn),
    ttl: cdktf.stringToTerraform(struct!.ttl),
    type: cdktf.stringToTerraform(struct!.type),
    cname: cdktf.listMapper(dnspolicyRuleActionResponseResourceRecordSetsResourceRecordSetCnameToTerraform, true)(struct!.cname),
    ip6_addresses: cdktf.listMapper(dnspolicyRuleActionResponseResourceRecordSetsResourceRecordSetIp6AddressesToTerraform, true)(struct!.ip6Addresses),
    ip_addresses: cdktf.listMapper(dnspolicyRuleActionResponseResourceRecordSetsResourceRecordSetIpAddressesToTerraform, true)(struct!.ipAddresses),
    nses: cdktf.listMapper(dnspolicyRuleActionResponseResourceRecordSetsResourceRecordSetNsesToTerraform, true)(struct!.nses),
  }
}


export function dnspolicyRuleActionResponseResourceRecordSetsResourceRecordSetToHclTerraform(struct?: DnspolicyRuleActionResponseResourceRecordSetsResourceRecordSet | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    fqdn: {
      value: cdktf.stringToHclTerraform(struct!.fqdn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ttl: {
      value: cdktf.stringToHclTerraform(struct!.ttl),
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
    cname: {
      value: cdktf.listMapperHcl(dnspolicyRuleActionResponseResourceRecordSetsResourceRecordSetCnameToHclTerraform, true)(struct!.cname),
      isBlock: true,
      type: "set",
      storageClassType: "DnspolicyRuleActionResponseResourceRecordSetsResourceRecordSetCnameList",
    },
    ip6_addresses: {
      value: cdktf.listMapperHcl(dnspolicyRuleActionResponseResourceRecordSetsResourceRecordSetIp6AddressesToHclTerraform, true)(struct!.ip6Addresses),
      isBlock: true,
      type: "list",
      storageClassType: "DnspolicyRuleActionResponseResourceRecordSetsResourceRecordSetIp6AddressesList",
    },
    ip_addresses: {
      value: cdktf.listMapperHcl(dnspolicyRuleActionResponseResourceRecordSetsResourceRecordSetIpAddressesToHclTerraform, true)(struct!.ipAddresses),
      isBlock: true,
      type: "list",
      storageClassType: "DnspolicyRuleActionResponseResourceRecordSetsResourceRecordSetIpAddressesList",
    },
    nses: {
      value: cdktf.listMapperHcl(dnspolicyRuleActionResponseResourceRecordSetsResourceRecordSetNsesToHclTerraform, true)(struct!.nses),
      isBlock: true,
      type: "list",
      storageClassType: "DnspolicyRuleActionResponseResourceRecordSetsResourceRecordSetNsesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DnspolicyRuleActionResponseResourceRecordSetsResourceRecordSetOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DnspolicyRuleActionResponseResourceRecordSetsResourceRecordSet | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fqdn !== undefined) {
      hasAnyValues = true;
      internalValueResult.fqdn = this._fqdn;
    }
    if (this._ttl !== undefined) {
      hasAnyValues = true;
      internalValueResult.ttl = this._ttl;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._cname?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cname = this._cname?.internalValue;
    }
    if (this._ip6Addresses?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip6Addresses = this._ip6Addresses?.internalValue;
    }
    if (this._ipAddresses?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddresses = this._ipAddresses?.internalValue;
    }
    if (this._nses?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nses = this._nses?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DnspolicyRuleActionResponseResourceRecordSetsResourceRecordSet | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fqdn = undefined;
      this._ttl = undefined;
      this._type = undefined;
      this._cname.internalValue = undefined;
      this._ip6Addresses.internalValue = undefined;
      this._ipAddresses.internalValue = undefined;
      this._nses.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fqdn = value.fqdn;
      this._ttl = value.ttl;
      this._type = value.type;
      this._cname.internalValue = value.cname;
      this._ip6Addresses.internalValue = value.ip6Addresses;
      this._ipAddresses.internalValue = value.ipAddresses;
      this._nses.internalValue = value.nses;
    }
  }

  // fqdn - computed: false, optional: false, required: true
  private _fqdn?: string; 
  public get fqdn() {
    return this.getStringAttribute('fqdn');
  }
  public set fqdn(value: string) {
    this._fqdn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fqdnInput() {
    return this._fqdn;
  }

  // ttl - computed: false, optional: false, required: true
  private _ttl?: string; 
  public get ttl() {
    return this.getStringAttribute('ttl');
  }
  public set ttl(value: string) {
    this._ttl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ttlInput() {
    return this._ttl;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // cname - computed: false, optional: true, required: false
  private _cname = new DnspolicyRuleActionResponseResourceRecordSetsResourceRecordSetCnameList(this, "cname", true);
  public get cname() {
    return this._cname;
  }
  public putCname(value: DnspolicyRuleActionResponseResourceRecordSetsResourceRecordSetCname[] | cdktf.IResolvable) {
    this._cname.internalValue = value;
  }
  public resetCname() {
    this._cname.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cnameInput() {
    return this._cname.internalValue;
  }

  // ip6_addresses - computed: false, optional: true, required: false
  private _ip6Addresses = new DnspolicyRuleActionResponseResourceRecordSetsResourceRecordSetIp6AddressesList(this, "ip6_addresses", false);
  public get ip6Addresses() {
    return this._ip6Addresses;
  }
  public putIp6Addresses(value: DnspolicyRuleActionResponseResourceRecordSetsResourceRecordSetIp6Addresses[] | cdktf.IResolvable) {
    this._ip6Addresses.internalValue = value;
  }
  public resetIp6Addresses() {
    this._ip6Addresses.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ip6AddressesInput() {
    return this._ip6Addresses.internalValue;
  }

  // ip_addresses - computed: false, optional: true, required: false
  private _ipAddresses = new DnspolicyRuleActionResponseResourceRecordSetsResourceRecordSetIpAddressesList(this, "ip_addresses", false);
  public get ipAddresses() {
    return this._ipAddresses;
  }
  public putIpAddresses(value: DnspolicyRuleActionResponseResourceRecordSetsResourceRecordSetIpAddresses[] | cdktf.IResolvable) {
    this._ipAddresses.internalValue = value;
  }
  public resetIpAddresses() {
    this._ipAddresses.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressesInput() {
    return this._ipAddresses.internalValue;
  }

  // nses - computed: false, optional: true, required: false
  private _nses = new DnspolicyRuleActionResponseResourceRecordSetsResourceRecordSetNsesList(this, "nses", false);
  public get nses() {
    return this._nses;
  }
  public putNses(value: DnspolicyRuleActionResponseResourceRecordSetsResourceRecordSetNses[] | cdktf.IResolvable) {
    this._nses.internalValue = value;
  }
  public resetNses() {
    this._nses.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nsesInput() {
    return this._nses.internalValue;
  }
}

export class DnspolicyRuleActionResponseResourceRecordSetsResourceRecordSetList extends cdktf.ComplexList {
  public internalValue? : DnspolicyRuleActionResponseResourceRecordSetsResourceRecordSet[] | cdktf.IResolvable

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
  public get(index: number): DnspolicyRuleActionResponseResourceRecordSetsResourceRecordSetOutputReference {
    return new DnspolicyRuleActionResponseResourceRecordSetsResourceRecordSetOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DnspolicyRuleActionResponseResourceRecordSets {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/dnspolicy#section Dnspolicy#section}
  */
  readonly section?: string;
  /**
  * resource_record_set block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/dnspolicy#resource_record_set Dnspolicy#resource_record_set}
  */
  readonly resourceRecordSet: DnspolicyRuleActionResponseResourceRecordSetsResourceRecordSet[] | cdktf.IResolvable;
}

export function dnspolicyRuleActionResponseResourceRecordSetsToTerraform(struct?: DnspolicyRuleActionResponseResourceRecordSets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    section: cdktf.stringToTerraform(struct!.section),
    resource_record_set: cdktf.listMapper(dnspolicyRuleActionResponseResourceRecordSetsResourceRecordSetToTerraform, true)(struct!.resourceRecordSet),
  }
}


export function dnspolicyRuleActionResponseResourceRecordSetsToHclTerraform(struct?: DnspolicyRuleActionResponseResourceRecordSets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    section: {
      value: cdktf.stringToHclTerraform(struct!.section),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource_record_set: {
      value: cdktf.listMapperHcl(dnspolicyRuleActionResponseResourceRecordSetsResourceRecordSetToHclTerraform, true)(struct!.resourceRecordSet),
      isBlock: true,
      type: "set",
      storageClassType: "DnspolicyRuleActionResponseResourceRecordSetsResourceRecordSetList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DnspolicyRuleActionResponseResourceRecordSetsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DnspolicyRuleActionResponseResourceRecordSets | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._section !== undefined) {
      hasAnyValues = true;
      internalValueResult.section = this._section;
    }
    if (this._resourceRecordSet?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceRecordSet = this._resourceRecordSet?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DnspolicyRuleActionResponseResourceRecordSets | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._section = undefined;
      this._resourceRecordSet.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._section = value.section;
      this._resourceRecordSet.internalValue = value.resourceRecordSet;
    }
  }

  // section - computed: false, optional: true, required: false
  private _section?: string; 
  public get section() {
    return this.getStringAttribute('section');
  }
  public set section(value: string) {
    this._section = value;
  }
  public resetSection() {
    this._section = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sectionInput() {
    return this._section;
  }

  // resource_record_set - computed: false, optional: false, required: true
  private _resourceRecordSet = new DnspolicyRuleActionResponseResourceRecordSetsResourceRecordSetList(this, "resource_record_set", true);
  public get resourceRecordSet() {
    return this._resourceRecordSet;
  }
  public putResourceRecordSet(value: DnspolicyRuleActionResponseResourceRecordSetsResourceRecordSet[] | cdktf.IResolvable) {
    this._resourceRecordSet.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceRecordSetInput() {
    return this._resourceRecordSet.internalValue;
  }
}

export class DnspolicyRuleActionResponseResourceRecordSetsList extends cdktf.ComplexList {
  public internalValue? : DnspolicyRuleActionResponseResourceRecordSets[] | cdktf.IResolvable

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
  public get(index: number): DnspolicyRuleActionResponseResourceRecordSetsOutputReference {
    return new DnspolicyRuleActionResponseResourceRecordSetsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DnspolicyRuleActionResponse {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/dnspolicy#authoritative Dnspolicy#authoritative}
  */
  readonly authoritative?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/dnspolicy#rcode Dnspolicy#rcode}
  */
  readonly rcode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/dnspolicy#truncation Dnspolicy#truncation}
  */
  readonly truncation?: string;
  /**
  * resource_record_sets block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/dnspolicy#resource_record_sets Dnspolicy#resource_record_sets}
  */
  readonly resourceRecordSets?: DnspolicyRuleActionResponseResourceRecordSets[] | cdktf.IResolvable;
}

export function dnspolicyRuleActionResponseToTerraform(struct?: DnspolicyRuleActionResponse | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    authoritative: cdktf.stringToTerraform(struct!.authoritative),
    rcode: cdktf.stringToTerraform(struct!.rcode),
    truncation: cdktf.stringToTerraform(struct!.truncation),
    resource_record_sets: cdktf.listMapper(dnspolicyRuleActionResponseResourceRecordSetsToTerraform, true)(struct!.resourceRecordSets),
  }
}


export function dnspolicyRuleActionResponseToHclTerraform(struct?: DnspolicyRuleActionResponse | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    authoritative: {
      value: cdktf.stringToHclTerraform(struct!.authoritative),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rcode: {
      value: cdktf.stringToHclTerraform(struct!.rcode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    truncation: {
      value: cdktf.stringToHclTerraform(struct!.truncation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource_record_sets: {
      value: cdktf.listMapperHcl(dnspolicyRuleActionResponseResourceRecordSetsToHclTerraform, true)(struct!.resourceRecordSets),
      isBlock: true,
      type: "list",
      storageClassType: "DnspolicyRuleActionResponseResourceRecordSetsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DnspolicyRuleActionResponseOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DnspolicyRuleActionResponse | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authoritative !== undefined) {
      hasAnyValues = true;
      internalValueResult.authoritative = this._authoritative;
    }
    if (this._rcode !== undefined) {
      hasAnyValues = true;
      internalValueResult.rcode = this._rcode;
    }
    if (this._truncation !== undefined) {
      hasAnyValues = true;
      internalValueResult.truncation = this._truncation;
    }
    if (this._resourceRecordSets?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceRecordSets = this._resourceRecordSets?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DnspolicyRuleActionResponse | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._authoritative = undefined;
      this._rcode = undefined;
      this._truncation = undefined;
      this._resourceRecordSets.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._authoritative = value.authoritative;
      this._rcode = value.rcode;
      this._truncation = value.truncation;
      this._resourceRecordSets.internalValue = value.resourceRecordSets;
    }
  }

  // authoritative - computed: false, optional: true, required: false
  private _authoritative?: string; 
  public get authoritative() {
    return this.getStringAttribute('authoritative');
  }
  public set authoritative(value: string) {
    this._authoritative = value;
  }
  public resetAuthoritative() {
    this._authoritative = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authoritativeInput() {
    return this._authoritative;
  }

  // rcode - computed: false, optional: true, required: false
  private _rcode?: string; 
  public get rcode() {
    return this.getStringAttribute('rcode');
  }
  public set rcode(value: string) {
    this._rcode = value;
  }
  public resetRcode() {
    this._rcode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rcodeInput() {
    return this._rcode;
  }

  // truncation - computed: false, optional: true, required: false
  private _truncation?: string; 
  public get truncation() {
    return this.getStringAttribute('truncation');
  }
  public set truncation(value: string) {
    this._truncation = value;
  }
  public resetTruncation() {
    this._truncation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get truncationInput() {
    return this._truncation;
  }

  // resource_record_sets - computed: false, optional: true, required: false
  private _resourceRecordSets = new DnspolicyRuleActionResponseResourceRecordSetsList(this, "resource_record_sets", false);
  public get resourceRecordSets() {
    return this._resourceRecordSets;
  }
  public putResourceRecordSets(value: DnspolicyRuleActionResponseResourceRecordSets[] | cdktf.IResolvable) {
    this._resourceRecordSets.internalValue = value;
  }
  public resetResourceRecordSets() {
    this._resourceRecordSets.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceRecordSetsInput() {
    return this._resourceRecordSets.internalValue;
  }
}

export class DnspolicyRuleActionResponseList extends cdktf.ComplexList {
  public internalValue? : DnspolicyRuleActionResponse[] | cdktf.IResolvable

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
  public get(index: number): DnspolicyRuleActionResponseOutputReference {
    return new DnspolicyRuleActionResponseOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DnspolicyRuleAction {
  /**
  * allow block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/dnspolicy#allow Dnspolicy#allow}
  */
  readonly allow?: DnspolicyRuleActionAllow[] | cdktf.IResolvable;
  /**
  * dns_rate_limiter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/dnspolicy#dns_rate_limiter Dnspolicy#dns_rate_limiter}
  */
  readonly dnsRateLimiter?: DnspolicyRuleActionDnsRateLimiter[] | cdktf.IResolvable;
  /**
  * gs_group_selection block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/dnspolicy#gs_group_selection Dnspolicy#gs_group_selection}
  */
  readonly gsGroupSelection?: DnspolicyRuleActionGsGroupSelection[] | cdktf.IResolvable;
  /**
  * gslb_site_selection block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/dnspolicy#gslb_site_selection Dnspolicy#gslb_site_selection}
  */
  readonly gslbSiteSelection?: DnspolicyRuleActionGslbSiteSelection[] | cdktf.IResolvable;
  /**
  * pool_switching block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/dnspolicy#pool_switching Dnspolicy#pool_switching}
  */
  readonly poolSwitching?: DnspolicyRuleActionPoolSwitching[] | cdktf.IResolvable;
  /**
  * response block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/dnspolicy#response Dnspolicy#response}
  */
  readonly response?: DnspolicyRuleActionResponse[] | cdktf.IResolvable;
}

export function dnspolicyRuleActionToTerraform(struct?: DnspolicyRuleAction | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow: cdktf.listMapper(dnspolicyRuleActionAllowToTerraform, true)(struct!.allow),
    dns_rate_limiter: cdktf.listMapper(dnspolicyRuleActionDnsRateLimiterToTerraform, true)(struct!.dnsRateLimiter),
    gs_group_selection: cdktf.listMapper(dnspolicyRuleActionGsGroupSelectionToTerraform, true)(struct!.gsGroupSelection),
    gslb_site_selection: cdktf.listMapper(dnspolicyRuleActionGslbSiteSelectionToTerraform, true)(struct!.gslbSiteSelection),
    pool_switching: cdktf.listMapper(dnspolicyRuleActionPoolSwitchingToTerraform, true)(struct!.poolSwitching),
    response: cdktf.listMapper(dnspolicyRuleActionResponseToTerraform, true)(struct!.response),
  }
}


export function dnspolicyRuleActionToHclTerraform(struct?: DnspolicyRuleAction | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow: {
      value: cdktf.listMapperHcl(dnspolicyRuleActionAllowToHclTerraform, true)(struct!.allow),
      isBlock: true,
      type: "set",
      storageClassType: "DnspolicyRuleActionAllowList",
    },
    dns_rate_limiter: {
      value: cdktf.listMapperHcl(dnspolicyRuleActionDnsRateLimiterToHclTerraform, true)(struct!.dnsRateLimiter),
      isBlock: true,
      type: "set",
      storageClassType: "DnspolicyRuleActionDnsRateLimiterList",
    },
    gs_group_selection: {
      value: cdktf.listMapperHcl(dnspolicyRuleActionGsGroupSelectionToHclTerraform, true)(struct!.gsGroupSelection),
      isBlock: true,
      type: "set",
      storageClassType: "DnspolicyRuleActionGsGroupSelectionList",
    },
    gslb_site_selection: {
      value: cdktf.listMapperHcl(dnspolicyRuleActionGslbSiteSelectionToHclTerraform, true)(struct!.gslbSiteSelection),
      isBlock: true,
      type: "set",
      storageClassType: "DnspolicyRuleActionGslbSiteSelectionList",
    },
    pool_switching: {
      value: cdktf.listMapperHcl(dnspolicyRuleActionPoolSwitchingToHclTerraform, true)(struct!.poolSwitching),
      isBlock: true,
      type: "set",
      storageClassType: "DnspolicyRuleActionPoolSwitchingList",
    },
    response: {
      value: cdktf.listMapperHcl(dnspolicyRuleActionResponseToHclTerraform, true)(struct!.response),
      isBlock: true,
      type: "set",
      storageClassType: "DnspolicyRuleActionResponseList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DnspolicyRuleActionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DnspolicyRuleAction | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allow?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.allow = this._allow?.internalValue;
    }
    if (this._dnsRateLimiter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsRateLimiter = this._dnsRateLimiter?.internalValue;
    }
    if (this._gsGroupSelection?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gsGroupSelection = this._gsGroupSelection?.internalValue;
    }
    if (this._gslbSiteSelection?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gslbSiteSelection = this._gslbSiteSelection?.internalValue;
    }
    if (this._poolSwitching?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.poolSwitching = this._poolSwitching?.internalValue;
    }
    if (this._response?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.response = this._response?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DnspolicyRuleAction | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allow.internalValue = undefined;
      this._dnsRateLimiter.internalValue = undefined;
      this._gsGroupSelection.internalValue = undefined;
      this._gslbSiteSelection.internalValue = undefined;
      this._poolSwitching.internalValue = undefined;
      this._response.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allow.internalValue = value.allow;
      this._dnsRateLimiter.internalValue = value.dnsRateLimiter;
      this._gsGroupSelection.internalValue = value.gsGroupSelection;
      this._gslbSiteSelection.internalValue = value.gslbSiteSelection;
      this._poolSwitching.internalValue = value.poolSwitching;
      this._response.internalValue = value.response;
    }
  }

  // allow - computed: false, optional: true, required: false
  private _allow = new DnspolicyRuleActionAllowList(this, "allow", true);
  public get allow() {
    return this._allow;
  }
  public putAllow(value: DnspolicyRuleActionAllow[] | cdktf.IResolvable) {
    this._allow.internalValue = value;
  }
  public resetAllow() {
    this._allow.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowInput() {
    return this._allow.internalValue;
  }

  // dns_rate_limiter - computed: false, optional: true, required: false
  private _dnsRateLimiter = new DnspolicyRuleActionDnsRateLimiterList(this, "dns_rate_limiter", true);
  public get dnsRateLimiter() {
    return this._dnsRateLimiter;
  }
  public putDnsRateLimiter(value: DnspolicyRuleActionDnsRateLimiter[] | cdktf.IResolvable) {
    this._dnsRateLimiter.internalValue = value;
  }
  public resetDnsRateLimiter() {
    this._dnsRateLimiter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsRateLimiterInput() {
    return this._dnsRateLimiter.internalValue;
  }

  // gs_group_selection - computed: false, optional: true, required: false
  private _gsGroupSelection = new DnspolicyRuleActionGsGroupSelectionList(this, "gs_group_selection", true);
  public get gsGroupSelection() {
    return this._gsGroupSelection;
  }
  public putGsGroupSelection(value: DnspolicyRuleActionGsGroupSelection[] | cdktf.IResolvable) {
    this._gsGroupSelection.internalValue = value;
  }
  public resetGsGroupSelection() {
    this._gsGroupSelection.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gsGroupSelectionInput() {
    return this._gsGroupSelection.internalValue;
  }

  // gslb_site_selection - computed: false, optional: true, required: false
  private _gslbSiteSelection = new DnspolicyRuleActionGslbSiteSelectionList(this, "gslb_site_selection", true);
  public get gslbSiteSelection() {
    return this._gslbSiteSelection;
  }
  public putGslbSiteSelection(value: DnspolicyRuleActionGslbSiteSelection[] | cdktf.IResolvable) {
    this._gslbSiteSelection.internalValue = value;
  }
  public resetGslbSiteSelection() {
    this._gslbSiteSelection.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gslbSiteSelectionInput() {
    return this._gslbSiteSelection.internalValue;
  }

  // pool_switching - computed: false, optional: true, required: false
  private _poolSwitching = new DnspolicyRuleActionPoolSwitchingList(this, "pool_switching", true);
  public get poolSwitching() {
    return this._poolSwitching;
  }
  public putPoolSwitching(value: DnspolicyRuleActionPoolSwitching[] | cdktf.IResolvable) {
    this._poolSwitching.internalValue = value;
  }
  public resetPoolSwitching() {
    this._poolSwitching.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get poolSwitchingInput() {
    return this._poolSwitching.internalValue;
  }

  // response - computed: false, optional: true, required: false
  private _response = new DnspolicyRuleActionResponseList(this, "response", true);
  public get response() {
    return this._response;
  }
  public putResponse(value: DnspolicyRuleActionResponse[] | cdktf.IResolvable) {
    this._response.internalValue = value;
  }
  public resetResponse() {
    this._response.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseInput() {
    return this._response.internalValue;
  }
}

export class DnspolicyRuleActionList extends cdktf.ComplexList {
  public internalValue? : DnspolicyRuleAction[] | cdktf.IResolvable

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
  public get(index: number): DnspolicyRuleActionOutputReference {
    return new DnspolicyRuleActionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DnspolicyRuleMatchClientIpAddressClientIpAddrs {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/dnspolicy#addr Dnspolicy#addr}
  */
  readonly addr: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/dnspolicy#type Dnspolicy#type}
  */
  readonly type: string;
}

export function dnspolicyRuleMatchClientIpAddressClientIpAddrsToTerraform(struct?: DnspolicyRuleMatchClientIpAddressClientIpAddrs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    addr: cdktf.stringToTerraform(struct!.addr),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dnspolicyRuleMatchClientIpAddressClientIpAddrsToHclTerraform(struct?: DnspolicyRuleMatchClientIpAddressClientIpAddrs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    addr: {
      value: cdktf.stringToHclTerraform(struct!.addr),
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

export class DnspolicyRuleMatchClientIpAddressClientIpAddrsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DnspolicyRuleMatchClientIpAddressClientIpAddrs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addr !== undefined) {
      hasAnyValues = true;
      internalValueResult.addr = this._addr;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DnspolicyRuleMatchClientIpAddressClientIpAddrs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._addr = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._addr = value.addr;
      this._type = value.type;
    }
  }

  // addr - computed: false, optional: false, required: true
  private _addr?: string; 
  public get addr() {
    return this.getStringAttribute('addr');
  }
  public set addr(value: string) {
    this._addr = value;
  }
  // Temporarily expose input value. Use with caution.
  public get addrInput() {
    return this._addr;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

export class DnspolicyRuleMatchClientIpAddressClientIpAddrsList extends cdktf.ComplexList {
  public internalValue? : DnspolicyRuleMatchClientIpAddressClientIpAddrs[] | cdktf.IResolvable

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
  public get(index: number): DnspolicyRuleMatchClientIpAddressClientIpAddrsOutputReference {
    return new DnspolicyRuleMatchClientIpAddressClientIpAddrsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DnspolicyRuleMatchClientIpAddressClientIpPrefixesIpAddr {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/dnspolicy#addr Dnspolicy#addr}
  */
  readonly addr: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/dnspolicy#type Dnspolicy#type}
  */
  readonly type: string;
}

export function dnspolicyRuleMatchClientIpAddressClientIpPrefixesIpAddrToTerraform(struct?: DnspolicyRuleMatchClientIpAddressClientIpPrefixesIpAddr | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    addr: cdktf.stringToTerraform(struct!.addr),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dnspolicyRuleMatchClientIpAddressClientIpPrefixesIpAddrToHclTerraform(struct?: DnspolicyRuleMatchClientIpAddressClientIpPrefixesIpAddr | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    addr: {
      value: cdktf.stringToHclTerraform(struct!.addr),
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

export class DnspolicyRuleMatchClientIpAddressClientIpPrefixesIpAddrOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DnspolicyRuleMatchClientIpAddressClientIpPrefixesIpAddr | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addr !== undefined) {
      hasAnyValues = true;
      internalValueResult.addr = this._addr;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DnspolicyRuleMatchClientIpAddressClientIpPrefixesIpAddr | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._addr = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._addr = value.addr;
      this._type = value.type;
    }
  }

  // addr - computed: false, optional: false, required: true
  private _addr?: string; 
  public get addr() {
    return this.getStringAttribute('addr');
  }
  public set addr(value: string) {
    this._addr = value;
  }
  // Temporarily expose input value. Use with caution.
  public get addrInput() {
    return this._addr;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

export class DnspolicyRuleMatchClientIpAddressClientIpPrefixesIpAddrList extends cdktf.ComplexList {
  public internalValue? : DnspolicyRuleMatchClientIpAddressClientIpPrefixesIpAddr[] | cdktf.IResolvable

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
  public get(index: number): DnspolicyRuleMatchClientIpAddressClientIpPrefixesIpAddrOutputReference {
    return new DnspolicyRuleMatchClientIpAddressClientIpPrefixesIpAddrOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DnspolicyRuleMatchClientIpAddressClientIpPrefixes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/dnspolicy#mask Dnspolicy#mask}
  */
  readonly mask: string;
  /**
  * ip_addr block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/dnspolicy#ip_addr Dnspolicy#ip_addr}
  */
  readonly ipAddr: DnspolicyRuleMatchClientIpAddressClientIpPrefixesIpAddr[] | cdktf.IResolvable;
}

export function dnspolicyRuleMatchClientIpAddressClientIpPrefixesToTerraform(struct?: DnspolicyRuleMatchClientIpAddressClientIpPrefixes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mask: cdktf.stringToTerraform(struct!.mask),
    ip_addr: cdktf.listMapper(dnspolicyRuleMatchClientIpAddressClientIpPrefixesIpAddrToTerraform, true)(struct!.ipAddr),
  }
}


export function dnspolicyRuleMatchClientIpAddressClientIpPrefixesToHclTerraform(struct?: DnspolicyRuleMatchClientIpAddressClientIpPrefixes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    mask: {
      value: cdktf.stringToHclTerraform(struct!.mask),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip_addr: {
      value: cdktf.listMapperHcl(dnspolicyRuleMatchClientIpAddressClientIpPrefixesIpAddrToHclTerraform, true)(struct!.ipAddr),
      isBlock: true,
      type: "set",
      storageClassType: "DnspolicyRuleMatchClientIpAddressClientIpPrefixesIpAddrList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DnspolicyRuleMatchClientIpAddressClientIpPrefixesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DnspolicyRuleMatchClientIpAddressClientIpPrefixes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mask !== undefined) {
      hasAnyValues = true;
      internalValueResult.mask = this._mask;
    }
    if (this._ipAddr?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddr = this._ipAddr?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DnspolicyRuleMatchClientIpAddressClientIpPrefixes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._mask = undefined;
      this._ipAddr.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._mask = value.mask;
      this._ipAddr.internalValue = value.ipAddr;
    }
  }

  // mask - computed: false, optional: false, required: true
  private _mask?: string; 
  public get mask() {
    return this.getStringAttribute('mask');
  }
  public set mask(value: string) {
    this._mask = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maskInput() {
    return this._mask;
  }

  // ip_addr - computed: false, optional: false, required: true
  private _ipAddr = new DnspolicyRuleMatchClientIpAddressClientIpPrefixesIpAddrList(this, "ip_addr", true);
  public get ipAddr() {
    return this._ipAddr;
  }
  public putIpAddr(value: DnspolicyRuleMatchClientIpAddressClientIpPrefixesIpAddr[] | cdktf.IResolvable) {
    this._ipAddr.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddrInput() {
    return this._ipAddr.internalValue;
  }
}

export class DnspolicyRuleMatchClientIpAddressClientIpPrefixesList extends cdktf.ComplexList {
  public internalValue? : DnspolicyRuleMatchClientIpAddressClientIpPrefixes[] | cdktf.IResolvable

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
  public get(index: number): DnspolicyRuleMatchClientIpAddressClientIpPrefixesOutputReference {
    return new DnspolicyRuleMatchClientIpAddressClientIpPrefixesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DnspolicyRuleMatchClientIpAddressClientIpRangesBegin {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/dnspolicy#addr Dnspolicy#addr}
  */
  readonly addr: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/dnspolicy#type Dnspolicy#type}
  */
  readonly type: string;
}

export function dnspolicyRuleMatchClientIpAddressClientIpRangesBeginToTerraform(struct?: DnspolicyRuleMatchClientIpAddressClientIpRangesBegin | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    addr: cdktf.stringToTerraform(struct!.addr),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dnspolicyRuleMatchClientIpAddressClientIpRangesBeginToHclTerraform(struct?: DnspolicyRuleMatchClientIpAddressClientIpRangesBegin | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    addr: {
      value: cdktf.stringToHclTerraform(struct!.addr),
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

export class DnspolicyRuleMatchClientIpAddressClientIpRangesBeginOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DnspolicyRuleMatchClientIpAddressClientIpRangesBegin | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addr !== undefined) {
      hasAnyValues = true;
      internalValueResult.addr = this._addr;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DnspolicyRuleMatchClientIpAddressClientIpRangesBegin | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._addr = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._addr = value.addr;
      this._type = value.type;
    }
  }

  // addr - computed: false, optional: false, required: true
  private _addr?: string; 
  public get addr() {
    return this.getStringAttribute('addr');
  }
  public set addr(value: string) {
    this._addr = value;
  }
  // Temporarily expose input value. Use with caution.
  public get addrInput() {
    return this._addr;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

export class DnspolicyRuleMatchClientIpAddressClientIpRangesBeginList extends cdktf.ComplexList {
  public internalValue? : DnspolicyRuleMatchClientIpAddressClientIpRangesBegin[] | cdktf.IResolvable

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
  public get(index: number): DnspolicyRuleMatchClientIpAddressClientIpRangesBeginOutputReference {
    return new DnspolicyRuleMatchClientIpAddressClientIpRangesBeginOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DnspolicyRuleMatchClientIpAddressClientIpRangesEnd {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/dnspolicy#addr Dnspolicy#addr}
  */
  readonly addr: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/dnspolicy#type Dnspolicy#type}
  */
  readonly type: string;
}

export function dnspolicyRuleMatchClientIpAddressClientIpRangesEndToTerraform(struct?: DnspolicyRuleMatchClientIpAddressClientIpRangesEnd | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    addr: cdktf.stringToTerraform(struct!.addr),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dnspolicyRuleMatchClientIpAddressClientIpRangesEndToHclTerraform(struct?: DnspolicyRuleMatchClientIpAddressClientIpRangesEnd | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    addr: {
      value: cdktf.stringToHclTerraform(struct!.addr),
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

export class DnspolicyRuleMatchClientIpAddressClientIpRangesEndOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DnspolicyRuleMatchClientIpAddressClientIpRangesEnd | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addr !== undefined) {
      hasAnyValues = true;
      internalValueResult.addr = this._addr;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DnspolicyRuleMatchClientIpAddressClientIpRangesEnd | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._addr = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._addr = value.addr;
      this._type = value.type;
    }
  }

  // addr - computed: false, optional: false, required: true
  private _addr?: string; 
  public get addr() {
    return this.getStringAttribute('addr');
  }
  public set addr(value: string) {
    this._addr = value;
  }
  // Temporarily expose input value. Use with caution.
  public get addrInput() {
    return this._addr;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

export class DnspolicyRuleMatchClientIpAddressClientIpRangesEndList extends cdktf.ComplexList {
  public internalValue? : DnspolicyRuleMatchClientIpAddressClientIpRangesEnd[] | cdktf.IResolvable

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
  public get(index: number): DnspolicyRuleMatchClientIpAddressClientIpRangesEndOutputReference {
    return new DnspolicyRuleMatchClientIpAddressClientIpRangesEndOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DnspolicyRuleMatchClientIpAddressClientIpRanges {
  /**
  * begin block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/dnspolicy#begin Dnspolicy#begin}
  */
  readonly begin: DnspolicyRuleMatchClientIpAddressClientIpRangesBegin[] | cdktf.IResolvable;
  /**
  * end block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/dnspolicy#end Dnspolicy#end}
  */
  readonly end: DnspolicyRuleMatchClientIpAddressClientIpRangesEnd[] | cdktf.IResolvable;
}

export function dnspolicyRuleMatchClientIpAddressClientIpRangesToTerraform(struct?: DnspolicyRuleMatchClientIpAddressClientIpRanges | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    begin: cdktf.listMapper(dnspolicyRuleMatchClientIpAddressClientIpRangesBeginToTerraform, true)(struct!.begin),
    end: cdktf.listMapper(dnspolicyRuleMatchClientIpAddressClientIpRangesEndToTerraform, true)(struct!.end),
  }
}


export function dnspolicyRuleMatchClientIpAddressClientIpRangesToHclTerraform(struct?: DnspolicyRuleMatchClientIpAddressClientIpRanges | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    begin: {
      value: cdktf.listMapperHcl(dnspolicyRuleMatchClientIpAddressClientIpRangesBeginToHclTerraform, true)(struct!.begin),
      isBlock: true,
      type: "set",
      storageClassType: "DnspolicyRuleMatchClientIpAddressClientIpRangesBeginList",
    },
    end: {
      value: cdktf.listMapperHcl(dnspolicyRuleMatchClientIpAddressClientIpRangesEndToHclTerraform, true)(struct!.end),
      isBlock: true,
      type: "set",
      storageClassType: "DnspolicyRuleMatchClientIpAddressClientIpRangesEndList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DnspolicyRuleMatchClientIpAddressClientIpRangesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DnspolicyRuleMatchClientIpAddressClientIpRanges | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._begin?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.begin = this._begin?.internalValue;
    }
    if (this._end?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.end = this._end?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DnspolicyRuleMatchClientIpAddressClientIpRanges | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._begin.internalValue = undefined;
      this._end.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._begin.internalValue = value.begin;
      this._end.internalValue = value.end;
    }
  }

  // begin - computed: false, optional: false, required: true
  private _begin = new DnspolicyRuleMatchClientIpAddressClientIpRangesBeginList(this, "begin", true);
  public get begin() {
    return this._begin;
  }
  public putBegin(value: DnspolicyRuleMatchClientIpAddressClientIpRangesBegin[] | cdktf.IResolvable) {
    this._begin.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get beginInput() {
    return this._begin.internalValue;
  }

  // end - computed: false, optional: false, required: true
  private _end = new DnspolicyRuleMatchClientIpAddressClientIpRangesEndList(this, "end", true);
  public get end() {
    return this._end;
  }
  public putEnd(value: DnspolicyRuleMatchClientIpAddressClientIpRangesEnd[] | cdktf.IResolvable) {
    this._end.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endInput() {
    return this._end.internalValue;
  }
}

export class DnspolicyRuleMatchClientIpAddressClientIpRangesList extends cdktf.ComplexList {
  public internalValue? : DnspolicyRuleMatchClientIpAddressClientIpRanges[] | cdktf.IResolvable

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
  public get(index: number): DnspolicyRuleMatchClientIpAddressClientIpRangesOutputReference {
    return new DnspolicyRuleMatchClientIpAddressClientIpRangesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DnspolicyRuleMatchClientIpAddressClientIp {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/dnspolicy#group_refs Dnspolicy#group_refs}
  */
  readonly groupRefs?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/dnspolicy#match_criteria Dnspolicy#match_criteria}
  */
  readonly matchCriteria: string;
  /**
  * addrs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/dnspolicy#addrs Dnspolicy#addrs}
  */
  readonly addrs?: DnspolicyRuleMatchClientIpAddressClientIpAddrs[] | cdktf.IResolvable;
  /**
  * prefixes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/dnspolicy#prefixes Dnspolicy#prefixes}
  */
  readonly prefixes?: DnspolicyRuleMatchClientIpAddressClientIpPrefixes[] | cdktf.IResolvable;
  /**
  * ranges block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/dnspolicy#ranges Dnspolicy#ranges}
  */
  readonly ranges?: DnspolicyRuleMatchClientIpAddressClientIpRanges[] | cdktf.IResolvable;
}

export function dnspolicyRuleMatchClientIpAddressClientIpToTerraform(struct?: DnspolicyRuleMatchClientIpAddressClientIp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    group_refs: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.groupRefs),
    match_criteria: cdktf.stringToTerraform(struct!.matchCriteria),
    addrs: cdktf.listMapper(dnspolicyRuleMatchClientIpAddressClientIpAddrsToTerraform, true)(struct!.addrs),
    prefixes: cdktf.listMapper(dnspolicyRuleMatchClientIpAddressClientIpPrefixesToTerraform, true)(struct!.prefixes),
    ranges: cdktf.listMapper(dnspolicyRuleMatchClientIpAddressClientIpRangesToTerraform, true)(struct!.ranges),
  }
}


export function dnspolicyRuleMatchClientIpAddressClientIpToHclTerraform(struct?: DnspolicyRuleMatchClientIpAddressClientIp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    group_refs: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.groupRefs),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    match_criteria: {
      value: cdktf.stringToHclTerraform(struct!.matchCriteria),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    addrs: {
      value: cdktf.listMapperHcl(dnspolicyRuleMatchClientIpAddressClientIpAddrsToHclTerraform, true)(struct!.addrs),
      isBlock: true,
      type: "list",
      storageClassType: "DnspolicyRuleMatchClientIpAddressClientIpAddrsList",
    },
    prefixes: {
      value: cdktf.listMapperHcl(dnspolicyRuleMatchClientIpAddressClientIpPrefixesToHclTerraform, true)(struct!.prefixes),
      isBlock: true,
      type: "list",
      storageClassType: "DnspolicyRuleMatchClientIpAddressClientIpPrefixesList",
    },
    ranges: {
      value: cdktf.listMapperHcl(dnspolicyRuleMatchClientIpAddressClientIpRangesToHclTerraform, true)(struct!.ranges),
      isBlock: true,
      type: "list",
      storageClassType: "DnspolicyRuleMatchClientIpAddressClientIpRangesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DnspolicyRuleMatchClientIpAddressClientIpOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DnspolicyRuleMatchClientIpAddressClientIp | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._groupRefs !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupRefs = this._groupRefs;
    }
    if (this._matchCriteria !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchCriteria = this._matchCriteria;
    }
    if (this._addrs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.addrs = this._addrs?.internalValue;
    }
    if (this._prefixes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixes = this._prefixes?.internalValue;
    }
    if (this._ranges?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ranges = this._ranges?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DnspolicyRuleMatchClientIpAddressClientIp | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._groupRefs = undefined;
      this._matchCriteria = undefined;
      this._addrs.internalValue = undefined;
      this._prefixes.internalValue = undefined;
      this._ranges.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._groupRefs = value.groupRefs;
      this._matchCriteria = value.matchCriteria;
      this._addrs.internalValue = value.addrs;
      this._prefixes.internalValue = value.prefixes;
      this._ranges.internalValue = value.ranges;
    }
  }

  // group_refs - computed: false, optional: true, required: false
  private _groupRefs?: string[]; 
  public get groupRefs() {
    return this.getListAttribute('group_refs');
  }
  public set groupRefs(value: string[]) {
    this._groupRefs = value;
  }
  public resetGroupRefs() {
    this._groupRefs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupRefsInput() {
    return this._groupRefs;
  }

  // match_criteria - computed: false, optional: false, required: true
  private _matchCriteria?: string; 
  public get matchCriteria() {
    return this.getStringAttribute('match_criteria');
  }
  public set matchCriteria(value: string) {
    this._matchCriteria = value;
  }
  // Temporarily expose input value. Use with caution.
  public get matchCriteriaInput() {
    return this._matchCriteria;
  }

  // addrs - computed: false, optional: true, required: false
  private _addrs = new DnspolicyRuleMatchClientIpAddressClientIpAddrsList(this, "addrs", false);
  public get addrs() {
    return this._addrs;
  }
  public putAddrs(value: DnspolicyRuleMatchClientIpAddressClientIpAddrs[] | cdktf.IResolvable) {
    this._addrs.internalValue = value;
  }
  public resetAddrs() {
    this._addrs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addrsInput() {
    return this._addrs.internalValue;
  }

  // prefixes - computed: false, optional: true, required: false
  private _prefixes = new DnspolicyRuleMatchClientIpAddressClientIpPrefixesList(this, "prefixes", false);
  public get prefixes() {
    return this._prefixes;
  }
  public putPrefixes(value: DnspolicyRuleMatchClientIpAddressClientIpPrefixes[] | cdktf.IResolvable) {
    this._prefixes.internalValue = value;
  }
  public resetPrefixes() {
    this._prefixes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixesInput() {
    return this._prefixes.internalValue;
  }

  // ranges - computed: false, optional: true, required: false
  private _ranges = new DnspolicyRuleMatchClientIpAddressClientIpRangesList(this, "ranges", false);
  public get ranges() {
    return this._ranges;
  }
  public putRanges(value: DnspolicyRuleMatchClientIpAddressClientIpRanges[] | cdktf.IResolvable) {
    this._ranges.internalValue = value;
  }
  public resetRanges() {
    this._ranges.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rangesInput() {
    return this._ranges.internalValue;
  }
}

export class DnspolicyRuleMatchClientIpAddressClientIpList extends cdktf.ComplexList {
  public internalValue? : DnspolicyRuleMatchClientIpAddressClientIp[] | cdktf.IResolvable

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
  public get(index: number): DnspolicyRuleMatchClientIpAddressClientIpOutputReference {
    return new DnspolicyRuleMatchClientIpAddressClientIpOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DnspolicyRuleMatchClientIpAddress {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/dnspolicy#use_edns_client_subnet_ip Dnspolicy#use_edns_client_subnet_ip}
  */
  readonly useEdnsClientSubnetIp?: string;
  /**
  * client_ip block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/dnspolicy#client_ip Dnspolicy#client_ip}
  */
  readonly clientIp: DnspolicyRuleMatchClientIpAddressClientIp[] | cdktf.IResolvable;
}

export function dnspolicyRuleMatchClientIpAddressToTerraform(struct?: DnspolicyRuleMatchClientIpAddress | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    use_edns_client_subnet_ip: cdktf.stringToTerraform(struct!.useEdnsClientSubnetIp),
    client_ip: cdktf.listMapper(dnspolicyRuleMatchClientIpAddressClientIpToTerraform, true)(struct!.clientIp),
  }
}


export function dnspolicyRuleMatchClientIpAddressToHclTerraform(struct?: DnspolicyRuleMatchClientIpAddress | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    use_edns_client_subnet_ip: {
      value: cdktf.stringToHclTerraform(struct!.useEdnsClientSubnetIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_ip: {
      value: cdktf.listMapperHcl(dnspolicyRuleMatchClientIpAddressClientIpToHclTerraform, true)(struct!.clientIp),
      isBlock: true,
      type: "set",
      storageClassType: "DnspolicyRuleMatchClientIpAddressClientIpList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DnspolicyRuleMatchClientIpAddressOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DnspolicyRuleMatchClientIpAddress | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._useEdnsClientSubnetIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.useEdnsClientSubnetIp = this._useEdnsClientSubnetIp;
    }
    if (this._clientIp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientIp = this._clientIp?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DnspolicyRuleMatchClientIpAddress | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._useEdnsClientSubnetIp = undefined;
      this._clientIp.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._useEdnsClientSubnetIp = value.useEdnsClientSubnetIp;
      this._clientIp.internalValue = value.clientIp;
    }
  }

  // use_edns_client_subnet_ip - computed: false, optional: true, required: false
  private _useEdnsClientSubnetIp?: string; 
  public get useEdnsClientSubnetIp() {
    return this.getStringAttribute('use_edns_client_subnet_ip');
  }
  public set useEdnsClientSubnetIp(value: string) {
    this._useEdnsClientSubnetIp = value;
  }
  public resetUseEdnsClientSubnetIp() {
    this._useEdnsClientSubnetIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useEdnsClientSubnetIpInput() {
    return this._useEdnsClientSubnetIp;
  }

  // client_ip - computed: false, optional: false, required: true
  private _clientIp = new DnspolicyRuleMatchClientIpAddressClientIpList(this, "client_ip", true);
  public get clientIp() {
    return this._clientIp;
  }
  public putClientIp(value: DnspolicyRuleMatchClientIpAddressClientIp[] | cdktf.IResolvable) {
    this._clientIp.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIpInput() {
    return this._clientIp.internalValue;
  }
}

export class DnspolicyRuleMatchClientIpAddressList extends cdktf.ComplexList {
  public internalValue? : DnspolicyRuleMatchClientIpAddress[] | cdktf.IResolvable

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
  public get(index: number): DnspolicyRuleMatchClientIpAddressOutputReference {
    return new DnspolicyRuleMatchClientIpAddressOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DnspolicyRuleMatchClientPortNumbersClientPortsRanges {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/dnspolicy#end Dnspolicy#end}
  */
  readonly end: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/dnspolicy#start Dnspolicy#start}
  */
  readonly start: string;
}

export function dnspolicyRuleMatchClientPortNumbersClientPortsRangesToTerraform(struct?: DnspolicyRuleMatchClientPortNumbersClientPortsRanges | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    end: cdktf.stringToTerraform(struct!.end),
    start: cdktf.stringToTerraform(struct!.start),
  }
}


export function dnspolicyRuleMatchClientPortNumbersClientPortsRangesToHclTerraform(struct?: DnspolicyRuleMatchClientPortNumbersClientPortsRanges | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    end: {
      value: cdktf.stringToHclTerraform(struct!.end),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    start: {
      value: cdktf.stringToHclTerraform(struct!.start),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DnspolicyRuleMatchClientPortNumbersClientPortsRangesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DnspolicyRuleMatchClientPortNumbersClientPortsRanges | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._end !== undefined) {
      hasAnyValues = true;
      internalValueResult.end = this._end;
    }
    if (this._start !== undefined) {
      hasAnyValues = true;
      internalValueResult.start = this._start;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DnspolicyRuleMatchClientPortNumbersClientPortsRanges | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._end = undefined;
      this._start = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._end = value.end;
      this._start = value.start;
    }
  }

  // end - computed: false, optional: false, required: true
  private _end?: string; 
  public get end() {
    return this.getStringAttribute('end');
  }
  public set end(value: string) {
    this._end = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endInput() {
    return this._end;
  }

  // start - computed: false, optional: false, required: true
  private _start?: string; 
  public get start() {
    return this.getStringAttribute('start');
  }
  public set start(value: string) {
    this._start = value;
  }
  // Temporarily expose input value. Use with caution.
  public get startInput() {
    return this._start;
  }
}

export class DnspolicyRuleMatchClientPortNumbersClientPortsRangesList extends cdktf.ComplexList {
  public internalValue? : DnspolicyRuleMatchClientPortNumbersClientPortsRanges[] | cdktf.IResolvable

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
  public get(index: number): DnspolicyRuleMatchClientPortNumbersClientPortsRangesOutputReference {
    return new DnspolicyRuleMatchClientPortNumbersClientPortsRangesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DnspolicyRuleMatchClientPortNumbersClientPorts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/dnspolicy#match_criteria Dnspolicy#match_criteria}
  */
  readonly matchCriteria: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/dnspolicy#ports Dnspolicy#ports}
  */
  readonly ports?: number[];
  /**
  * ranges block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/dnspolicy#ranges Dnspolicy#ranges}
  */
  readonly ranges?: DnspolicyRuleMatchClientPortNumbersClientPortsRanges[] | cdktf.IResolvable;
}

export function dnspolicyRuleMatchClientPortNumbersClientPortsToTerraform(struct?: DnspolicyRuleMatchClientPortNumbersClientPorts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_criteria: cdktf.stringToTerraform(struct!.matchCriteria),
    ports: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.ports),
    ranges: cdktf.listMapper(dnspolicyRuleMatchClientPortNumbersClientPortsRangesToTerraform, true)(struct!.ranges),
  }
}


export function dnspolicyRuleMatchClientPortNumbersClientPortsToHclTerraform(struct?: DnspolicyRuleMatchClientPortNumbersClientPorts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_criteria: {
      value: cdktf.stringToHclTerraform(struct!.matchCriteria),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ports: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.ports),
      isBlock: false,
      type: "list",
      storageClassType: "numberList",
    },
    ranges: {
      value: cdktf.listMapperHcl(dnspolicyRuleMatchClientPortNumbersClientPortsRangesToHclTerraform, true)(struct!.ranges),
      isBlock: true,
      type: "list",
      storageClassType: "DnspolicyRuleMatchClientPortNumbersClientPortsRangesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DnspolicyRuleMatchClientPortNumbersClientPortsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DnspolicyRuleMatchClientPortNumbersClientPorts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchCriteria !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchCriteria = this._matchCriteria;
    }
    if (this._ports !== undefined) {
      hasAnyValues = true;
      internalValueResult.ports = this._ports;
    }
    if (this._ranges?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ranges = this._ranges?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DnspolicyRuleMatchClientPortNumbersClientPorts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._matchCriteria = undefined;
      this._ports = undefined;
      this._ranges.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._matchCriteria = value.matchCriteria;
      this._ports = value.ports;
      this._ranges.internalValue = value.ranges;
    }
  }

  // match_criteria - computed: false, optional: false, required: true
  private _matchCriteria?: string; 
  public get matchCriteria() {
    return this.getStringAttribute('match_criteria');
  }
  public set matchCriteria(value: string) {
    this._matchCriteria = value;
  }
  // Temporarily expose input value. Use with caution.
  public get matchCriteriaInput() {
    return this._matchCriteria;
  }

  // ports - computed: false, optional: true, required: false
  private _ports?: number[]; 
  public get ports() {
    return this.getNumberListAttribute('ports');
  }
  public set ports(value: number[]) {
    this._ports = value;
  }
  public resetPorts() {
    this._ports = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portsInput() {
    return this._ports;
  }

  // ranges - computed: false, optional: true, required: false
  private _ranges = new DnspolicyRuleMatchClientPortNumbersClientPortsRangesList(this, "ranges", false);
  public get ranges() {
    return this._ranges;
  }
  public putRanges(value: DnspolicyRuleMatchClientPortNumbersClientPortsRanges[] | cdktf.IResolvable) {
    this._ranges.internalValue = value;
  }
  public resetRanges() {
    this._ranges.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rangesInput() {
    return this._ranges.internalValue;
  }
}

export class DnspolicyRuleMatchClientPortNumbersClientPortsList extends cdktf.ComplexList {
  public internalValue? : DnspolicyRuleMatchClientPortNumbersClientPorts[] | cdktf.IResolvable

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
  public get(index: number): DnspolicyRuleMatchClientPortNumbersClientPortsOutputReference {
    return new DnspolicyRuleMatchClientPortNumbersClientPortsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DnspolicyRuleMatchClientPortNumbers {
  /**
  * client_ports block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/dnspolicy#client_ports Dnspolicy#client_ports}
  */
  readonly clientPorts: DnspolicyRuleMatchClientPortNumbersClientPorts[] | cdktf.IResolvable;
}

export function dnspolicyRuleMatchClientPortNumbersToTerraform(struct?: DnspolicyRuleMatchClientPortNumbers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    client_ports: cdktf.listMapper(dnspolicyRuleMatchClientPortNumbersClientPortsToTerraform, true)(struct!.clientPorts),
  }
}


export function dnspolicyRuleMatchClientPortNumbersToHclTerraform(struct?: DnspolicyRuleMatchClientPortNumbers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    client_ports: {
      value: cdktf.listMapperHcl(dnspolicyRuleMatchClientPortNumbersClientPortsToHclTerraform, true)(struct!.clientPorts),
      isBlock: true,
      type: "set",
      storageClassType: "DnspolicyRuleMatchClientPortNumbersClientPortsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DnspolicyRuleMatchClientPortNumbersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DnspolicyRuleMatchClientPortNumbers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clientPorts?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientPorts = this._clientPorts?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DnspolicyRuleMatchClientPortNumbers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clientPorts.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._clientPorts.internalValue = value.clientPorts;
    }
  }

  // client_ports - computed: false, optional: false, required: true
  private _clientPorts = new DnspolicyRuleMatchClientPortNumbersClientPortsList(this, "client_ports", true);
  public get clientPorts() {
    return this._clientPorts;
  }
  public putClientPorts(value: DnspolicyRuleMatchClientPortNumbersClientPorts[] | cdktf.IResolvable) {
    this._clientPorts.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientPortsInput() {
    return this._clientPorts.internalValue;
  }
}

export class DnspolicyRuleMatchClientPortNumbersList extends cdktf.ComplexList {
  public internalValue? : DnspolicyRuleMatchClientPortNumbers[] | cdktf.IResolvable

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
  public get(index: number): DnspolicyRuleMatchClientPortNumbersOutputReference {
    return new DnspolicyRuleMatchClientPortNumbersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DnspolicyRuleMatchGeoLocation {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/dnspolicy#geolocation_name Dnspolicy#geolocation_name}
  */
  readonly geolocationName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/dnspolicy#geolocation_tag Dnspolicy#geolocation_tag}
  */
  readonly geolocationTag?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/dnspolicy#match_criteria Dnspolicy#match_criteria}
  */
  readonly matchCriteria: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/dnspolicy#use_edns_client_subnet_ip Dnspolicy#use_edns_client_subnet_ip}
  */
  readonly useEdnsClientSubnetIp?: string;
}

export function dnspolicyRuleMatchGeoLocationToTerraform(struct?: DnspolicyRuleMatchGeoLocation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    geolocation_name: cdktf.stringToTerraform(struct!.geolocationName),
    geolocation_tag: cdktf.stringToTerraform(struct!.geolocationTag),
    match_criteria: cdktf.stringToTerraform(struct!.matchCriteria),
    use_edns_client_subnet_ip: cdktf.stringToTerraform(struct!.useEdnsClientSubnetIp),
  }
}


export function dnspolicyRuleMatchGeoLocationToHclTerraform(struct?: DnspolicyRuleMatchGeoLocation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    geolocation_name: {
      value: cdktf.stringToHclTerraform(struct!.geolocationName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    geolocation_tag: {
      value: cdktf.stringToHclTerraform(struct!.geolocationTag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    match_criteria: {
      value: cdktf.stringToHclTerraform(struct!.matchCriteria),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    use_edns_client_subnet_ip: {
      value: cdktf.stringToHclTerraform(struct!.useEdnsClientSubnetIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DnspolicyRuleMatchGeoLocationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DnspolicyRuleMatchGeoLocation | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._geolocationName !== undefined) {
      hasAnyValues = true;
      internalValueResult.geolocationName = this._geolocationName;
    }
    if (this._geolocationTag !== undefined) {
      hasAnyValues = true;
      internalValueResult.geolocationTag = this._geolocationTag;
    }
    if (this._matchCriteria !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchCriteria = this._matchCriteria;
    }
    if (this._useEdnsClientSubnetIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.useEdnsClientSubnetIp = this._useEdnsClientSubnetIp;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DnspolicyRuleMatchGeoLocation | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._geolocationName = undefined;
      this._geolocationTag = undefined;
      this._matchCriteria = undefined;
      this._useEdnsClientSubnetIp = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._geolocationName = value.geolocationName;
      this._geolocationTag = value.geolocationTag;
      this._matchCriteria = value.matchCriteria;
      this._useEdnsClientSubnetIp = value.useEdnsClientSubnetIp;
    }
  }

  // geolocation_name - computed: true, optional: true, required: false
  private _geolocationName?: string; 
  public get geolocationName() {
    return this.getStringAttribute('geolocation_name');
  }
  public set geolocationName(value: string) {
    this._geolocationName = value;
  }
  public resetGeolocationName() {
    this._geolocationName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get geolocationNameInput() {
    return this._geolocationName;
  }

  // geolocation_tag - computed: true, optional: true, required: false
  private _geolocationTag?: string; 
  public get geolocationTag() {
    return this.getStringAttribute('geolocation_tag');
  }
  public set geolocationTag(value: string) {
    this._geolocationTag = value;
  }
  public resetGeolocationTag() {
    this._geolocationTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get geolocationTagInput() {
    return this._geolocationTag;
  }

  // match_criteria - computed: false, optional: false, required: true
  private _matchCriteria?: string; 
  public get matchCriteria() {
    return this.getStringAttribute('match_criteria');
  }
  public set matchCriteria(value: string) {
    this._matchCriteria = value;
  }
  // Temporarily expose input value. Use with caution.
  public get matchCriteriaInput() {
    return this._matchCriteria;
  }

  // use_edns_client_subnet_ip - computed: false, optional: true, required: false
  private _useEdnsClientSubnetIp?: string; 
  public get useEdnsClientSubnetIp() {
    return this.getStringAttribute('use_edns_client_subnet_ip');
  }
  public set useEdnsClientSubnetIp(value: string) {
    this._useEdnsClientSubnetIp = value;
  }
  public resetUseEdnsClientSubnetIp() {
    this._useEdnsClientSubnetIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useEdnsClientSubnetIpInput() {
    return this._useEdnsClientSubnetIp;
  }
}

export class DnspolicyRuleMatchGeoLocationList extends cdktf.ComplexList {
  public internalValue? : DnspolicyRuleMatchGeoLocation[] | cdktf.IResolvable

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
  public get(index: number): DnspolicyRuleMatchGeoLocationOutputReference {
    return new DnspolicyRuleMatchGeoLocationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DnspolicyRuleMatchProtocol {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/dnspolicy#match_criteria Dnspolicy#match_criteria}
  */
  readonly matchCriteria: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/dnspolicy#protocol Dnspolicy#protocol}
  */
  readonly protocol: string;
}

export function dnspolicyRuleMatchProtocolToTerraform(struct?: DnspolicyRuleMatchProtocol | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_criteria: cdktf.stringToTerraform(struct!.matchCriteria),
    protocol: cdktf.stringToTerraform(struct!.protocol),
  }
}


export function dnspolicyRuleMatchProtocolToHclTerraform(struct?: DnspolicyRuleMatchProtocol | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_criteria: {
      value: cdktf.stringToHclTerraform(struct!.matchCriteria),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    protocol: {
      value: cdktf.stringToHclTerraform(struct!.protocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DnspolicyRuleMatchProtocolOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DnspolicyRuleMatchProtocol | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchCriteria !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchCriteria = this._matchCriteria;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DnspolicyRuleMatchProtocol | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._matchCriteria = undefined;
      this._protocol = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._matchCriteria = value.matchCriteria;
      this._protocol = value.protocol;
    }
  }

  // match_criteria - computed: false, optional: false, required: true
  private _matchCriteria?: string; 
  public get matchCriteria() {
    return this.getStringAttribute('match_criteria');
  }
  public set matchCriteria(value: string) {
    this._matchCriteria = value;
  }
  // Temporarily expose input value. Use with caution.
  public get matchCriteriaInput() {
    return this._matchCriteria;
  }

  // protocol - computed: false, optional: false, required: true
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }
}

export class DnspolicyRuleMatchProtocolList extends cdktf.ComplexList {
  public internalValue? : DnspolicyRuleMatchProtocol[] | cdktf.IResolvable

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
  public get(index: number): DnspolicyRuleMatchProtocolOutputReference {
    return new DnspolicyRuleMatchProtocolOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DnspolicyRuleMatchQueryName {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/dnspolicy#match_criteria Dnspolicy#match_criteria}
  */
  readonly matchCriteria: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/dnspolicy#query_domain_names Dnspolicy#query_domain_names}
  */
  readonly queryDomainNames?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/dnspolicy#string_group_refs Dnspolicy#string_group_refs}
  */
  readonly stringGroupRefs?: string[];
}

export function dnspolicyRuleMatchQueryNameToTerraform(struct?: DnspolicyRuleMatchQueryName | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_criteria: cdktf.stringToTerraform(struct!.matchCriteria),
    query_domain_names: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.queryDomainNames),
    string_group_refs: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.stringGroupRefs),
  }
}


export function dnspolicyRuleMatchQueryNameToHclTerraform(struct?: DnspolicyRuleMatchQueryName | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_criteria: {
      value: cdktf.stringToHclTerraform(struct!.matchCriteria),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    query_domain_names: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.queryDomainNames),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    string_group_refs: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.stringGroupRefs),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DnspolicyRuleMatchQueryNameOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DnspolicyRuleMatchQueryName | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchCriteria !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchCriteria = this._matchCriteria;
    }
    if (this._queryDomainNames !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryDomainNames = this._queryDomainNames;
    }
    if (this._stringGroupRefs !== undefined) {
      hasAnyValues = true;
      internalValueResult.stringGroupRefs = this._stringGroupRefs;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DnspolicyRuleMatchQueryName | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._matchCriteria = undefined;
      this._queryDomainNames = undefined;
      this._stringGroupRefs = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._matchCriteria = value.matchCriteria;
      this._queryDomainNames = value.queryDomainNames;
      this._stringGroupRefs = value.stringGroupRefs;
    }
  }

  // match_criteria - computed: false, optional: false, required: true
  private _matchCriteria?: string; 
  public get matchCriteria() {
    return this.getStringAttribute('match_criteria');
  }
  public set matchCriteria(value: string) {
    this._matchCriteria = value;
  }
  // Temporarily expose input value. Use with caution.
  public get matchCriteriaInput() {
    return this._matchCriteria;
  }

  // query_domain_names - computed: false, optional: true, required: false
  private _queryDomainNames?: string[]; 
  public get queryDomainNames() {
    return this.getListAttribute('query_domain_names');
  }
  public set queryDomainNames(value: string[]) {
    this._queryDomainNames = value;
  }
  public resetQueryDomainNames() {
    this._queryDomainNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryDomainNamesInput() {
    return this._queryDomainNames;
  }

  // string_group_refs - computed: false, optional: true, required: false
  private _stringGroupRefs?: string[]; 
  public get stringGroupRefs() {
    return this.getListAttribute('string_group_refs');
  }
  public set stringGroupRefs(value: string[]) {
    this._stringGroupRefs = value;
  }
  public resetStringGroupRefs() {
    this._stringGroupRefs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stringGroupRefsInput() {
    return this._stringGroupRefs;
  }
}

export class DnspolicyRuleMatchQueryNameList extends cdktf.ComplexList {
  public internalValue? : DnspolicyRuleMatchQueryName[] | cdktf.IResolvable

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
  public get(index: number): DnspolicyRuleMatchQueryNameOutputReference {
    return new DnspolicyRuleMatchQueryNameOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DnspolicyRuleMatchQueryType {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/dnspolicy#match_criteria Dnspolicy#match_criteria}
  */
  readonly matchCriteria: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/dnspolicy#query_type Dnspolicy#query_type}
  */
  readonly queryType?: string[];
}

export function dnspolicyRuleMatchQueryTypeToTerraform(struct?: DnspolicyRuleMatchQueryType | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_criteria: cdktf.stringToTerraform(struct!.matchCriteria),
    query_type: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.queryType),
  }
}


export function dnspolicyRuleMatchQueryTypeToHclTerraform(struct?: DnspolicyRuleMatchQueryType | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_criteria: {
      value: cdktf.stringToHclTerraform(struct!.matchCriteria),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    query_type: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.queryType),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DnspolicyRuleMatchQueryTypeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DnspolicyRuleMatchQueryType | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchCriteria !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchCriteria = this._matchCriteria;
    }
    if (this._queryType !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryType = this._queryType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DnspolicyRuleMatchQueryType | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._matchCriteria = undefined;
      this._queryType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._matchCriteria = value.matchCriteria;
      this._queryType = value.queryType;
    }
  }

  // match_criteria - computed: false, optional: false, required: true
  private _matchCriteria?: string; 
  public get matchCriteria() {
    return this.getStringAttribute('match_criteria');
  }
  public set matchCriteria(value: string) {
    this._matchCriteria = value;
  }
  // Temporarily expose input value. Use with caution.
  public get matchCriteriaInput() {
    return this._matchCriteria;
  }

  // query_type - computed: false, optional: true, required: false
  private _queryType?: string[]; 
  public get queryType() {
    return this.getListAttribute('query_type');
  }
  public set queryType(value: string[]) {
    this._queryType = value;
  }
  public resetQueryType() {
    this._queryType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryTypeInput() {
    return this._queryType;
  }
}

export class DnspolicyRuleMatchQueryTypeList extends cdktf.ComplexList {
  public internalValue? : DnspolicyRuleMatchQueryType[] | cdktf.IResolvable

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
  public get(index: number): DnspolicyRuleMatchQueryTypeOutputReference {
    return new DnspolicyRuleMatchQueryTypeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DnspolicyRuleMatch {
  /**
  * client_ip_address block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/dnspolicy#client_ip_address Dnspolicy#client_ip_address}
  */
  readonly clientIpAddress?: DnspolicyRuleMatchClientIpAddress[] | cdktf.IResolvable;
  /**
  * client_port_numbers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/dnspolicy#client_port_numbers Dnspolicy#client_port_numbers}
  */
  readonly clientPortNumbers?: DnspolicyRuleMatchClientPortNumbers[] | cdktf.IResolvable;
  /**
  * geo_location block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/dnspolicy#geo_location Dnspolicy#geo_location}
  */
  readonly geoLocation?: DnspolicyRuleMatchGeoLocation[] | cdktf.IResolvable;
  /**
  * protocol block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/dnspolicy#protocol Dnspolicy#protocol}
  */
  readonly protocol?: DnspolicyRuleMatchProtocol[] | cdktf.IResolvable;
  /**
  * query_name block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/dnspolicy#query_name Dnspolicy#query_name}
  */
  readonly queryName?: DnspolicyRuleMatchQueryName[] | cdktf.IResolvable;
  /**
  * query_type block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/dnspolicy#query_type Dnspolicy#query_type}
  */
  readonly queryType?: DnspolicyRuleMatchQueryType[] | cdktf.IResolvable;
}

export function dnspolicyRuleMatchToTerraform(struct?: DnspolicyRuleMatch | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    client_ip_address: cdktf.listMapper(dnspolicyRuleMatchClientIpAddressToTerraform, true)(struct!.clientIpAddress),
    client_port_numbers: cdktf.listMapper(dnspolicyRuleMatchClientPortNumbersToTerraform, true)(struct!.clientPortNumbers),
    geo_location: cdktf.listMapper(dnspolicyRuleMatchGeoLocationToTerraform, true)(struct!.geoLocation),
    protocol: cdktf.listMapper(dnspolicyRuleMatchProtocolToTerraform, true)(struct!.protocol),
    query_name: cdktf.listMapper(dnspolicyRuleMatchQueryNameToTerraform, true)(struct!.queryName),
    query_type: cdktf.listMapper(dnspolicyRuleMatchQueryTypeToTerraform, true)(struct!.queryType),
  }
}


export function dnspolicyRuleMatchToHclTerraform(struct?: DnspolicyRuleMatch | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    client_ip_address: {
      value: cdktf.listMapperHcl(dnspolicyRuleMatchClientIpAddressToHclTerraform, true)(struct!.clientIpAddress),
      isBlock: true,
      type: "set",
      storageClassType: "DnspolicyRuleMatchClientIpAddressList",
    },
    client_port_numbers: {
      value: cdktf.listMapperHcl(dnspolicyRuleMatchClientPortNumbersToHclTerraform, true)(struct!.clientPortNumbers),
      isBlock: true,
      type: "set",
      storageClassType: "DnspolicyRuleMatchClientPortNumbersList",
    },
    geo_location: {
      value: cdktf.listMapperHcl(dnspolicyRuleMatchGeoLocationToHclTerraform, true)(struct!.geoLocation),
      isBlock: true,
      type: "set",
      storageClassType: "DnspolicyRuleMatchGeoLocationList",
    },
    protocol: {
      value: cdktf.listMapperHcl(dnspolicyRuleMatchProtocolToHclTerraform, true)(struct!.protocol),
      isBlock: true,
      type: "set",
      storageClassType: "DnspolicyRuleMatchProtocolList",
    },
    query_name: {
      value: cdktf.listMapperHcl(dnspolicyRuleMatchQueryNameToHclTerraform, true)(struct!.queryName),
      isBlock: true,
      type: "set",
      storageClassType: "DnspolicyRuleMatchQueryNameList",
    },
    query_type: {
      value: cdktf.listMapperHcl(dnspolicyRuleMatchQueryTypeToHclTerraform, true)(struct!.queryType),
      isBlock: true,
      type: "set",
      storageClassType: "DnspolicyRuleMatchQueryTypeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DnspolicyRuleMatchOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DnspolicyRuleMatch | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clientIpAddress?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientIpAddress = this._clientIpAddress?.internalValue;
    }
    if (this._clientPortNumbers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientPortNumbers = this._clientPortNumbers?.internalValue;
    }
    if (this._geoLocation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.geoLocation = this._geoLocation?.internalValue;
    }
    if (this._protocol?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol?.internalValue;
    }
    if (this._queryName?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryName = this._queryName?.internalValue;
    }
    if (this._queryType?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryType = this._queryType?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DnspolicyRuleMatch | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clientIpAddress.internalValue = undefined;
      this._clientPortNumbers.internalValue = undefined;
      this._geoLocation.internalValue = undefined;
      this._protocol.internalValue = undefined;
      this._queryName.internalValue = undefined;
      this._queryType.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._clientIpAddress.internalValue = value.clientIpAddress;
      this._clientPortNumbers.internalValue = value.clientPortNumbers;
      this._geoLocation.internalValue = value.geoLocation;
      this._protocol.internalValue = value.protocol;
      this._queryName.internalValue = value.queryName;
      this._queryType.internalValue = value.queryType;
    }
  }

  // client_ip_address - computed: false, optional: true, required: false
  private _clientIpAddress = new DnspolicyRuleMatchClientIpAddressList(this, "client_ip_address", true);
  public get clientIpAddress() {
    return this._clientIpAddress;
  }
  public putClientIpAddress(value: DnspolicyRuleMatchClientIpAddress[] | cdktf.IResolvable) {
    this._clientIpAddress.internalValue = value;
  }
  public resetClientIpAddress() {
    this._clientIpAddress.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIpAddressInput() {
    return this._clientIpAddress.internalValue;
  }

  // client_port_numbers - computed: false, optional: true, required: false
  private _clientPortNumbers = new DnspolicyRuleMatchClientPortNumbersList(this, "client_port_numbers", true);
  public get clientPortNumbers() {
    return this._clientPortNumbers;
  }
  public putClientPortNumbers(value: DnspolicyRuleMatchClientPortNumbers[] | cdktf.IResolvable) {
    this._clientPortNumbers.internalValue = value;
  }
  public resetClientPortNumbers() {
    this._clientPortNumbers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientPortNumbersInput() {
    return this._clientPortNumbers.internalValue;
  }

  // geo_location - computed: false, optional: true, required: false
  private _geoLocation = new DnspolicyRuleMatchGeoLocationList(this, "geo_location", true);
  public get geoLocation() {
    return this._geoLocation;
  }
  public putGeoLocation(value: DnspolicyRuleMatchGeoLocation[] | cdktf.IResolvable) {
    this._geoLocation.internalValue = value;
  }
  public resetGeoLocation() {
    this._geoLocation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get geoLocationInput() {
    return this._geoLocation.internalValue;
  }

  // protocol - computed: false, optional: true, required: false
  private _protocol = new DnspolicyRuleMatchProtocolList(this, "protocol", true);
  public get protocol() {
    return this._protocol;
  }
  public putProtocol(value: DnspolicyRuleMatchProtocol[] | cdktf.IResolvable) {
    this._protocol.internalValue = value;
  }
  public resetProtocol() {
    this._protocol.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol.internalValue;
  }

  // query_name - computed: false, optional: true, required: false
  private _queryName = new DnspolicyRuleMatchQueryNameList(this, "query_name", true);
  public get queryName() {
    return this._queryName;
  }
  public putQueryName(value: DnspolicyRuleMatchQueryName[] | cdktf.IResolvable) {
    this._queryName.internalValue = value;
  }
  public resetQueryName() {
    this._queryName.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryNameInput() {
    return this._queryName.internalValue;
  }

  // query_type - computed: false, optional: true, required: false
  private _queryType = new DnspolicyRuleMatchQueryTypeList(this, "query_type", true);
  public get queryType() {
    return this._queryType;
  }
  public putQueryType(value: DnspolicyRuleMatchQueryType[] | cdktf.IResolvable) {
    this._queryType.internalValue = value;
  }
  public resetQueryType() {
    this._queryType.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryTypeInput() {
    return this._queryType.internalValue;
  }
}

export class DnspolicyRuleMatchList extends cdktf.ComplexList {
  public internalValue? : DnspolicyRuleMatch[] | cdktf.IResolvable

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
  public get(index: number): DnspolicyRuleMatchOutputReference {
    return new DnspolicyRuleMatchOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DnspolicyRule {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/dnspolicy#enable Dnspolicy#enable}
  */
  readonly enable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/dnspolicy#index Dnspolicy#index}
  */
  readonly index: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/dnspolicy#log Dnspolicy#log}
  */
  readonly log?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/dnspolicy#name Dnspolicy#name}
  */
  readonly name: string;
  /**
  * action block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/dnspolicy#action Dnspolicy#action}
  */
  readonly action?: DnspolicyRuleAction[] | cdktf.IResolvable;
  /**
  * match block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/dnspolicy#match Dnspolicy#match}
  */
  readonly match?: DnspolicyRuleMatch[] | cdktf.IResolvable;
}

export function dnspolicyRuleToTerraform(struct?: DnspolicyRule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable: cdktf.stringToTerraform(struct!.enable),
    index: cdktf.stringToTerraform(struct!.index),
    log: cdktf.stringToTerraform(struct!.log),
    name: cdktf.stringToTerraform(struct!.name),
    action: cdktf.listMapper(dnspolicyRuleActionToTerraform, true)(struct!.action),
    match: cdktf.listMapper(dnspolicyRuleMatchToTerraform, true)(struct!.match),
  }
}


export function dnspolicyRuleToHclTerraform(struct?: DnspolicyRule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable: {
      value: cdktf.stringToHclTerraform(struct!.enable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    index: {
      value: cdktf.stringToHclTerraform(struct!.index),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    log: {
      value: cdktf.stringToHclTerraform(struct!.log),
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
    action: {
      value: cdktf.listMapperHcl(dnspolicyRuleActionToHclTerraform, true)(struct!.action),
      isBlock: true,
      type: "set",
      storageClassType: "DnspolicyRuleActionList",
    },
    match: {
      value: cdktf.listMapperHcl(dnspolicyRuleMatchToHclTerraform, true)(struct!.match),
      isBlock: true,
      type: "set",
      storageClassType: "DnspolicyRuleMatchList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DnspolicyRuleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DnspolicyRule | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enable !== undefined) {
      hasAnyValues = true;
      internalValueResult.enable = this._enable;
    }
    if (this._index !== undefined) {
      hasAnyValues = true;
      internalValueResult.index = this._index;
    }
    if (this._log !== undefined) {
      hasAnyValues = true;
      internalValueResult.log = this._log;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._action?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action?.internalValue;
    }
    if (this._match?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.match = this._match?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DnspolicyRule | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enable = undefined;
      this._index = undefined;
      this._log = undefined;
      this._name = undefined;
      this._action.internalValue = undefined;
      this._match.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enable = value.enable;
      this._index = value.index;
      this._log = value.log;
      this._name = value.name;
      this._action.internalValue = value.action;
      this._match.internalValue = value.match;
    }
  }

  // enable - computed: false, optional: true, required: false
  private _enable?: string; 
  public get enable() {
    return this.getStringAttribute('enable');
  }
  public set enable(value: string) {
    this._enable = value;
  }
  public resetEnable() {
    this._enable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInput() {
    return this._enable;
  }

  // index - computed: false, optional: false, required: true
  private _index?: string; 
  public get index() {
    return this.getStringAttribute('index');
  }
  public set index(value: string) {
    this._index = value;
  }
  // Temporarily expose input value. Use with caution.
  public get indexInput() {
    return this._index;
  }

  // log - computed: true, optional: true, required: false
  private _log?: string; 
  public get log() {
    return this.getStringAttribute('log');
  }
  public set log(value: string) {
    this._log = value;
  }
  public resetLog() {
    this._log = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logInput() {
    return this._log;
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

  // action - computed: false, optional: true, required: false
  private _action = new DnspolicyRuleActionList(this, "action", true);
  public get action() {
    return this._action;
  }
  public putAction(value: DnspolicyRuleAction[] | cdktf.IResolvable) {
    this._action.internalValue = value;
  }
  public resetAction() {
    this._action.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action.internalValue;
  }

  // match - computed: false, optional: true, required: false
  private _match = new DnspolicyRuleMatchList(this, "match", true);
  public get match() {
    return this._match;
  }
  public putMatch(value: DnspolicyRuleMatch[] | cdktf.IResolvable) {
    this._match.internalValue = value;
  }
  public resetMatch() {
    this._match.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchInput() {
    return this._match.internalValue;
  }
}

export class DnspolicyRuleList extends cdktf.ComplexList {
  public internalValue? : DnspolicyRule[] | cdktf.IResolvable

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
  public get(index: number): DnspolicyRuleOutputReference {
    return new DnspolicyRuleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/dnspolicy avi_dnspolicy}
*/
export class Dnspolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "avi_dnspolicy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Dnspolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Dnspolicy to import
  * @param importFromId The id of the existing Dnspolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/dnspolicy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Dnspolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "avi_dnspolicy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/dnspolicy avi_dnspolicy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DnspolicyConfig
  */
  public constructor(scope: Construct, id: string, config: DnspolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'avi_dnspolicy',
      terraformGeneratorMetadata: {
        providerName: 'avi',
        providerVersion: '30.2.5',
        providerVersionConstraint: '30.2.5'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._createdBy = config.createdBy;
    this._description = config.description;
    this._id = config.id;
    this._internal = config.internal;
    this._name = config.name;
    this._tenantRef = config.tenantRef;
    this._uuid = config.uuid;
    this._configpbAttributes.internalValue = config.configpbAttributes;
    this._markers.internalValue = config.markers;
    this._rule.internalValue = config.rule;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // created_by - computed: true, optional: true, required: false
  private _createdBy?: string; 
  public get createdBy() {
    return this.getStringAttribute('created_by');
  }
  public set createdBy(value: string) {
    this._createdBy = value;
  }
  public resetCreatedBy() {
    this._createdBy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createdByInput() {
    return this._createdBy;
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

  // internal - computed: true, optional: true, required: false
  private _internal?: string; 
  public get internal() {
    return this.getStringAttribute('internal');
  }
  public set internal(value: string) {
    this._internal = value;
  }
  public resetInternal() {
    this._internal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get internalInput() {
    return this._internal;
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

  // configpb_attributes - computed: false, optional: true, required: false
  private _configpbAttributes = new DnspolicyConfigpbAttributesList(this, "configpb_attributes", true);
  public get configpbAttributes() {
    return this._configpbAttributes;
  }
  public putConfigpbAttributes(value: DnspolicyConfigpbAttributes[] | cdktf.IResolvable) {
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
  private _markers = new DnspolicyMarkersList(this, "markers", false);
  public get markers() {
    return this._markers;
  }
  public putMarkers(value: DnspolicyMarkers[] | cdktf.IResolvable) {
    this._markers.internalValue = value;
  }
  public resetMarkers() {
    this._markers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get markersInput() {
    return this._markers.internalValue;
  }

  // rule - computed: false, optional: true, required: false
  private _rule = new DnspolicyRuleList(this, "rule", false);
  public get rule() {
    return this._rule;
  }
  public putRule(value: DnspolicyRule[] | cdktf.IResolvable) {
    this._rule.internalValue = value;
  }
  public resetRule() {
    this._rule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleInput() {
    return this._rule.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      created_by: cdktf.stringToTerraform(this._createdBy),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      internal: cdktf.stringToTerraform(this._internal),
      name: cdktf.stringToTerraform(this._name),
      tenant_ref: cdktf.stringToTerraform(this._tenantRef),
      uuid: cdktf.stringToTerraform(this._uuid),
      configpb_attributes: cdktf.listMapper(dnspolicyConfigpbAttributesToTerraform, true)(this._configpbAttributes.internalValue),
      markers: cdktf.listMapper(dnspolicyMarkersToTerraform, true)(this._markers.internalValue),
      rule: cdktf.listMapper(dnspolicyRuleToTerraform, true)(this._rule.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      created_by: {
        value: cdktf.stringToHclTerraform(this._createdBy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
      internal: {
        value: cdktf.stringToHclTerraform(this._internal),
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
      configpb_attributes: {
        value: cdktf.listMapperHcl(dnspolicyConfigpbAttributesToHclTerraform, true)(this._configpbAttributes.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DnspolicyConfigpbAttributesList",
      },
      markers: {
        value: cdktf.listMapperHcl(dnspolicyMarkersToHclTerraform, true)(this._markers.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DnspolicyMarkersList",
      },
      rule: {
        value: cdktf.listMapperHcl(dnspolicyRuleToHclTerraform, true)(this._rule.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DnspolicyRuleList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
