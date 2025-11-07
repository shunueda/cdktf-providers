// https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/vsdatascriptset
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VsdatascriptsetConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/vsdatascriptset#created_by Vsdatascriptset#created_by}
  */
  readonly createdBy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/vsdatascriptset#description Vsdatascriptset#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/vsdatascriptset#geo_db_ref Vsdatascriptset#geo_db_ref}
  */
  readonly geoDbRef?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/vsdatascriptset#id Vsdatascriptset#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/vsdatascriptset#ip_reputation_db_ref Vsdatascriptset#ip_reputation_db_ref}
  */
  readonly ipReputationDbRef?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/vsdatascriptset#ipgroup_refs Vsdatascriptset#ipgroup_refs}
  */
  readonly ipgroupRefs?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/vsdatascriptset#name Vsdatascriptset#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/vsdatascriptset#pki_profile_refs Vsdatascriptset#pki_profile_refs}
  */
  readonly pkiProfileRefs?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/vsdatascriptset#pool_group_refs Vsdatascriptset#pool_group_refs}
  */
  readonly poolGroupRefs?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/vsdatascriptset#pool_refs Vsdatascriptset#pool_refs}
  */
  readonly poolRefs?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/vsdatascriptset#protocol_parser_refs Vsdatascriptset#protocol_parser_refs}
  */
  readonly protocolParserRefs?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/vsdatascriptset#ssl_key_certificate_refs Vsdatascriptset#ssl_key_certificate_refs}
  */
  readonly sslKeyCertificateRefs?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/vsdatascriptset#ssl_profile_refs Vsdatascriptset#ssl_profile_refs}
  */
  readonly sslProfileRefs?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/vsdatascriptset#string_group_refs Vsdatascriptset#string_group_refs}
  */
  readonly stringGroupRefs?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/vsdatascriptset#tenant_ref Vsdatascriptset#tenant_ref}
  */
  readonly tenantRef?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/vsdatascriptset#uuid Vsdatascriptset#uuid}
  */
  readonly uuid?: string;
  /**
  * configpb_attributes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/vsdatascriptset#configpb_attributes Vsdatascriptset#configpb_attributes}
  */
  readonly configpbAttributes?: VsdatascriptsetConfigpbAttributes[] | cdktf.IResolvable;
  /**
  * datascript block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/vsdatascriptset#datascript Vsdatascriptset#datascript}
  */
  readonly datascript?: VsdatascriptsetDatascript[] | cdktf.IResolvable;
  /**
  * markers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/vsdatascriptset#markers Vsdatascriptset#markers}
  */
  readonly markers?: VsdatascriptsetMarkers[] | cdktf.IResolvable;
  /**
  * rate_limiters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/vsdatascriptset#rate_limiters Vsdatascriptset#rate_limiters}
  */
  readonly rateLimiters?: VsdatascriptsetRateLimiters[] | cdktf.IResolvable;
}
export interface VsdatascriptsetConfigpbAttributes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/vsdatascriptset#version Vsdatascriptset#version}
  */
  readonly version?: string;
}

export function vsdatascriptsetConfigpbAttributesToTerraform(struct?: VsdatascriptsetConfigpbAttributes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    version: cdktf.stringToTerraform(struct!.version),
  }
}


export function vsdatascriptsetConfigpbAttributesToHclTerraform(struct?: VsdatascriptsetConfigpbAttributes | cdktf.IResolvable): any {
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

export class VsdatascriptsetConfigpbAttributesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VsdatascriptsetConfigpbAttributes | cdktf.IResolvable | undefined {
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

  public set internalValue(value: VsdatascriptsetConfigpbAttributes | cdktf.IResolvable | undefined) {
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

export class VsdatascriptsetConfigpbAttributesList extends cdktf.ComplexList {
  public internalValue? : VsdatascriptsetConfigpbAttributes[] | cdktf.IResolvable

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
  public get(index: number): VsdatascriptsetConfigpbAttributesOutputReference {
    return new VsdatascriptsetConfigpbAttributesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VsdatascriptsetDatascript {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/vsdatascriptset#evt Vsdatascriptset#evt}
  */
  readonly evt: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/vsdatascriptset#script Vsdatascriptset#script}
  */
  readonly script: string;
}

export function vsdatascriptsetDatascriptToTerraform(struct?: VsdatascriptsetDatascript | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    evt: cdktf.stringToTerraform(struct!.evt),
    script: cdktf.stringToTerraform(struct!.script),
  }
}


export function vsdatascriptsetDatascriptToHclTerraform(struct?: VsdatascriptsetDatascript | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    evt: {
      value: cdktf.stringToHclTerraform(struct!.evt),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    script: {
      value: cdktf.stringToHclTerraform(struct!.script),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VsdatascriptsetDatascriptOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VsdatascriptsetDatascript | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._evt !== undefined) {
      hasAnyValues = true;
      internalValueResult.evt = this._evt;
    }
    if (this._script !== undefined) {
      hasAnyValues = true;
      internalValueResult.script = this._script;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VsdatascriptsetDatascript | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._evt = undefined;
      this._script = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._evt = value.evt;
      this._script = value.script;
    }
  }

  // evt - computed: false, optional: false, required: true
  private _evt?: string; 
  public get evt() {
    return this.getStringAttribute('evt');
  }
  public set evt(value: string) {
    this._evt = value;
  }
  // Temporarily expose input value. Use with caution.
  public get evtInput() {
    return this._evt;
  }

  // script - computed: false, optional: false, required: true
  private _script?: string; 
  public get script() {
    return this.getStringAttribute('script');
  }
  public set script(value: string) {
    this._script = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scriptInput() {
    return this._script;
  }
}

export class VsdatascriptsetDatascriptList extends cdktf.ComplexList {
  public internalValue? : VsdatascriptsetDatascript[] | cdktf.IResolvable

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
  public get(index: number): VsdatascriptsetDatascriptOutputReference {
    return new VsdatascriptsetDatascriptOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VsdatascriptsetMarkers {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/vsdatascriptset#key Vsdatascriptset#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/vsdatascriptset#values Vsdatascriptset#values}
  */
  readonly values?: string[];
}

export function vsdatascriptsetMarkersToTerraform(struct?: VsdatascriptsetMarkers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function vsdatascriptsetMarkersToHclTerraform(struct?: VsdatascriptsetMarkers | cdktf.IResolvable): any {
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

export class VsdatascriptsetMarkersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VsdatascriptsetMarkers | cdktf.IResolvable | undefined {
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

  public set internalValue(value: VsdatascriptsetMarkers | cdktf.IResolvable | undefined) {
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

export class VsdatascriptsetMarkersList extends cdktf.ComplexList {
  public internalValue? : VsdatascriptsetMarkers[] | cdktf.IResolvable

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
  public get(index: number): VsdatascriptsetMarkersOutputReference {
    return new VsdatascriptsetMarkersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VsdatascriptsetRateLimiters {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/vsdatascriptset#burst_sz Vsdatascriptset#burst_sz}
  */
  readonly burstSz?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/vsdatascriptset#count Vsdatascriptset#count}
  */
  readonly count?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/vsdatascriptset#name Vsdatascriptset#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/vsdatascriptset#period Vsdatascriptset#period}
  */
  readonly period?: string;
}

export function vsdatascriptsetRateLimitersToTerraform(struct?: VsdatascriptsetRateLimiters | cdktf.IResolvable): any {
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


export function vsdatascriptsetRateLimitersToHclTerraform(struct?: VsdatascriptsetRateLimiters | cdktf.IResolvable): any {
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

export class VsdatascriptsetRateLimitersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VsdatascriptsetRateLimiters | cdktf.IResolvable | undefined {
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

  public set internalValue(value: VsdatascriptsetRateLimiters | cdktf.IResolvable | undefined) {
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

export class VsdatascriptsetRateLimitersList extends cdktf.ComplexList {
  public internalValue? : VsdatascriptsetRateLimiters[] | cdktf.IResolvable

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
  public get(index: number): VsdatascriptsetRateLimitersOutputReference {
    return new VsdatascriptsetRateLimitersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/vsdatascriptset avi_vsdatascriptset}
*/
export class Vsdatascriptset extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "avi_vsdatascriptset";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Vsdatascriptset resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Vsdatascriptset to import
  * @param importFromId The id of the existing Vsdatascriptset that should be imported. Refer to the {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/vsdatascriptset#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Vsdatascriptset to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "avi_vsdatascriptset", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/vsdatascriptset avi_vsdatascriptset} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VsdatascriptsetConfig
  */
  public constructor(scope: Construct, id: string, config: VsdatascriptsetConfig) {
    super(scope, id, {
      terraformResourceType: 'avi_vsdatascriptset',
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
    this._createdBy = config.createdBy;
    this._description = config.description;
    this._geoDbRef = config.geoDbRef;
    this._id = config.id;
    this._ipReputationDbRef = config.ipReputationDbRef;
    this._ipgroupRefs = config.ipgroupRefs;
    this._name = config.name;
    this._pkiProfileRefs = config.pkiProfileRefs;
    this._poolGroupRefs = config.poolGroupRefs;
    this._poolRefs = config.poolRefs;
    this._protocolParserRefs = config.protocolParserRefs;
    this._sslKeyCertificateRefs = config.sslKeyCertificateRefs;
    this._sslProfileRefs = config.sslProfileRefs;
    this._stringGroupRefs = config.stringGroupRefs;
    this._tenantRef = config.tenantRef;
    this._uuid = config.uuid;
    this._configpbAttributes.internalValue = config.configpbAttributes;
    this._datascript.internalValue = config.datascript;
    this._markers.internalValue = config.markers;
    this._rateLimiters.internalValue = config.rateLimiters;
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

  // geo_db_ref - computed: true, optional: true, required: false
  private _geoDbRef?: string; 
  public get geoDbRef() {
    return this.getStringAttribute('geo_db_ref');
  }
  public set geoDbRef(value: string) {
    this._geoDbRef = value;
  }
  public resetGeoDbRef() {
    this._geoDbRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get geoDbRefInput() {
    return this._geoDbRef;
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

  // ip_reputation_db_ref - computed: true, optional: true, required: false
  private _ipReputationDbRef?: string; 
  public get ipReputationDbRef() {
    return this.getStringAttribute('ip_reputation_db_ref');
  }
  public set ipReputationDbRef(value: string) {
    this._ipReputationDbRef = value;
  }
  public resetIpReputationDbRef() {
    this._ipReputationDbRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipReputationDbRefInput() {
    return this._ipReputationDbRef;
  }

  // ipgroup_refs - computed: false, optional: true, required: false
  private _ipgroupRefs?: string[]; 
  public get ipgroupRefs() {
    return this.getListAttribute('ipgroup_refs');
  }
  public set ipgroupRefs(value: string[]) {
    this._ipgroupRefs = value;
  }
  public resetIpgroupRefs() {
    this._ipgroupRefs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipgroupRefsInput() {
    return this._ipgroupRefs;
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

  // pki_profile_refs - computed: false, optional: true, required: false
  private _pkiProfileRefs?: string[]; 
  public get pkiProfileRefs() {
    return this.getListAttribute('pki_profile_refs');
  }
  public set pkiProfileRefs(value: string[]) {
    this._pkiProfileRefs = value;
  }
  public resetPkiProfileRefs() {
    this._pkiProfileRefs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pkiProfileRefsInput() {
    return this._pkiProfileRefs;
  }

  // pool_group_refs - computed: false, optional: true, required: false
  private _poolGroupRefs?: string[]; 
  public get poolGroupRefs() {
    return this.getListAttribute('pool_group_refs');
  }
  public set poolGroupRefs(value: string[]) {
    this._poolGroupRefs = value;
  }
  public resetPoolGroupRefs() {
    this._poolGroupRefs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get poolGroupRefsInput() {
    return this._poolGroupRefs;
  }

  // pool_refs - computed: false, optional: true, required: false
  private _poolRefs?: string[]; 
  public get poolRefs() {
    return this.getListAttribute('pool_refs');
  }
  public set poolRefs(value: string[]) {
    this._poolRefs = value;
  }
  public resetPoolRefs() {
    this._poolRefs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get poolRefsInput() {
    return this._poolRefs;
  }

  // protocol_parser_refs - computed: false, optional: true, required: false
  private _protocolParserRefs?: string[]; 
  public get protocolParserRefs() {
    return this.getListAttribute('protocol_parser_refs');
  }
  public set protocolParserRefs(value: string[]) {
    this._protocolParserRefs = value;
  }
  public resetProtocolParserRefs() {
    this._protocolParserRefs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolParserRefsInput() {
    return this._protocolParserRefs;
  }

  // ssl_key_certificate_refs - computed: false, optional: true, required: false
  private _sslKeyCertificateRefs?: string[]; 
  public get sslKeyCertificateRefs() {
    return this.getListAttribute('ssl_key_certificate_refs');
  }
  public set sslKeyCertificateRefs(value: string[]) {
    this._sslKeyCertificateRefs = value;
  }
  public resetSslKeyCertificateRefs() {
    this._sslKeyCertificateRefs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslKeyCertificateRefsInput() {
    return this._sslKeyCertificateRefs;
  }

  // ssl_profile_refs - computed: false, optional: true, required: false
  private _sslProfileRefs?: string[]; 
  public get sslProfileRefs() {
    return this.getListAttribute('ssl_profile_refs');
  }
  public set sslProfileRefs(value: string[]) {
    this._sslProfileRefs = value;
  }
  public resetSslProfileRefs() {
    this._sslProfileRefs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslProfileRefsInput() {
    return this._sslProfileRefs;
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
  private _configpbAttributes = new VsdatascriptsetConfigpbAttributesList(this, "configpb_attributes", true);
  public get configpbAttributes() {
    return this._configpbAttributes;
  }
  public putConfigpbAttributes(value: VsdatascriptsetConfigpbAttributes[] | cdktf.IResolvable) {
    this._configpbAttributes.internalValue = value;
  }
  public resetConfigpbAttributes() {
    this._configpbAttributes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configpbAttributesInput() {
    return this._configpbAttributes.internalValue;
  }

  // datascript - computed: false, optional: true, required: false
  private _datascript = new VsdatascriptsetDatascriptList(this, "datascript", false);
  public get datascript() {
    return this._datascript;
  }
  public putDatascript(value: VsdatascriptsetDatascript[] | cdktf.IResolvable) {
    this._datascript.internalValue = value;
  }
  public resetDatascript() {
    this._datascript.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datascriptInput() {
    return this._datascript.internalValue;
  }

  // markers - computed: false, optional: true, required: false
  private _markers = new VsdatascriptsetMarkersList(this, "markers", false);
  public get markers() {
    return this._markers;
  }
  public putMarkers(value: VsdatascriptsetMarkers[] | cdktf.IResolvable) {
    this._markers.internalValue = value;
  }
  public resetMarkers() {
    this._markers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get markersInput() {
    return this._markers.internalValue;
  }

  // rate_limiters - computed: false, optional: true, required: false
  private _rateLimiters = new VsdatascriptsetRateLimitersList(this, "rate_limiters", false);
  public get rateLimiters() {
    return this._rateLimiters;
  }
  public putRateLimiters(value: VsdatascriptsetRateLimiters[] | cdktf.IResolvable) {
    this._rateLimiters.internalValue = value;
  }
  public resetRateLimiters() {
    this._rateLimiters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rateLimitersInput() {
    return this._rateLimiters.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      created_by: cdktf.stringToTerraform(this._createdBy),
      description: cdktf.stringToTerraform(this._description),
      geo_db_ref: cdktf.stringToTerraform(this._geoDbRef),
      id: cdktf.stringToTerraform(this._id),
      ip_reputation_db_ref: cdktf.stringToTerraform(this._ipReputationDbRef),
      ipgroup_refs: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ipgroupRefs),
      name: cdktf.stringToTerraform(this._name),
      pki_profile_refs: cdktf.listMapper(cdktf.stringToTerraform, false)(this._pkiProfileRefs),
      pool_group_refs: cdktf.listMapper(cdktf.stringToTerraform, false)(this._poolGroupRefs),
      pool_refs: cdktf.listMapper(cdktf.stringToTerraform, false)(this._poolRefs),
      protocol_parser_refs: cdktf.listMapper(cdktf.stringToTerraform, false)(this._protocolParserRefs),
      ssl_key_certificate_refs: cdktf.listMapper(cdktf.stringToTerraform, false)(this._sslKeyCertificateRefs),
      ssl_profile_refs: cdktf.listMapper(cdktf.stringToTerraform, false)(this._sslProfileRefs),
      string_group_refs: cdktf.listMapper(cdktf.stringToTerraform, false)(this._stringGroupRefs),
      tenant_ref: cdktf.stringToTerraform(this._tenantRef),
      uuid: cdktf.stringToTerraform(this._uuid),
      configpb_attributes: cdktf.listMapper(vsdatascriptsetConfigpbAttributesToTerraform, true)(this._configpbAttributes.internalValue),
      datascript: cdktf.listMapper(vsdatascriptsetDatascriptToTerraform, true)(this._datascript.internalValue),
      markers: cdktf.listMapper(vsdatascriptsetMarkersToTerraform, true)(this._markers.internalValue),
      rate_limiters: cdktf.listMapper(vsdatascriptsetRateLimitersToTerraform, true)(this._rateLimiters.internalValue),
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
      geo_db_ref: {
        value: cdktf.stringToHclTerraform(this._geoDbRef),
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
      ip_reputation_db_ref: {
        value: cdktf.stringToHclTerraform(this._ipReputationDbRef),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipgroup_refs: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._ipgroupRefs),
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
      pki_profile_refs: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._pkiProfileRefs),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      pool_group_refs: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._poolGroupRefs),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      pool_refs: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._poolRefs),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      protocol_parser_refs: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._protocolParserRefs),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      ssl_key_certificate_refs: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._sslKeyCertificateRefs),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      ssl_profile_refs: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._sslProfileRefs),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      string_group_refs: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._stringGroupRefs),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
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
        value: cdktf.listMapperHcl(vsdatascriptsetConfigpbAttributesToHclTerraform, true)(this._configpbAttributes.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "VsdatascriptsetConfigpbAttributesList",
      },
      datascript: {
        value: cdktf.listMapperHcl(vsdatascriptsetDatascriptToHclTerraform, true)(this._datascript.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VsdatascriptsetDatascriptList",
      },
      markers: {
        value: cdktf.listMapperHcl(vsdatascriptsetMarkersToHclTerraform, true)(this._markers.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VsdatascriptsetMarkersList",
      },
      rate_limiters: {
        value: cdktf.listMapperHcl(vsdatascriptsetRateLimitersToHclTerraform, true)(this._rateLimiters.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VsdatascriptsetRateLimitersList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
