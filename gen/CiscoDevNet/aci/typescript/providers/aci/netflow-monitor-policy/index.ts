// https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/netflow_monitor_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NetflowMonitorPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * The annotation of the NetFlow Monitor Policy object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/netflow_monitor_policy#annotation NetflowMonitorPolicy#annotation}
  */
  readonly annotation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/netflow_monitor_policy#annotations NetflowMonitorPolicy#annotations}
  */
  readonly annotations?: NetflowMonitorPolicyAnnotations[] | cdktf.IResolvable;
  /**
  * The description of the NetFlow Monitor Policy object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/netflow_monitor_policy#description NetflowMonitorPolicy#description}
  */
  readonly description?: string;
  /**
  * The name of the NetFlow Monitor Policy object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/netflow_monitor_policy#name NetflowMonitorPolicy#name}
  */
  readonly name: string;
  /**
  * The name alias of the NetFlow Monitor Policy object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/netflow_monitor_policy#name_alias NetflowMonitorPolicy#name_alias}
  */
  readonly nameAlias?: string;
  /**
  * The key for enabling clients to own their data for entity correlation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/netflow_monitor_policy#owner_key NetflowMonitorPolicy#owner_key}
  */
  readonly ownerKey?: string;
  /**
  * A tag for enabling clients to add their own data. For example, to indicate who created this object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/netflow_monitor_policy#owner_tag NetflowMonitorPolicy#owner_tag}
  */
  readonly ownerTag?: string;
  /**
  * The distinguished name (DN) of the parent object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/netflow_monitor_policy#parent_dn NetflowMonitorPolicy#parent_dn}
  */
  readonly parentDn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/netflow_monitor_policy#relation_to_netflow_exporters NetflowMonitorPolicy#relation_to_netflow_exporters}
  */
  readonly relationToNetflowExporters?: NetflowMonitorPolicyRelationToNetflowExporters[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/netflow_monitor_policy#relation_to_netflow_record NetflowMonitorPolicy#relation_to_netflow_record}
  */
  readonly relationToNetflowRecord?: NetflowMonitorPolicyRelationToNetflowRecord;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/netflow_monitor_policy#tags NetflowMonitorPolicy#tags}
  */
  readonly tags?: NetflowMonitorPolicyTags[] | cdktf.IResolvable;
}
export interface NetflowMonitorPolicyAnnotations {
  /**
  * The key used to uniquely identify this configuration object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/netflow_monitor_policy#key NetflowMonitorPolicy#key}
  */
  readonly key: string;
  /**
  * The value of the property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/netflow_monitor_policy#value NetflowMonitorPolicy#value}
  */
  readonly value: string;
}

export function netflowMonitorPolicyAnnotationsToTerraform(struct?: NetflowMonitorPolicyAnnotations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function netflowMonitorPolicyAnnotationsToHclTerraform(struct?: NetflowMonitorPolicyAnnotations | cdktf.IResolvable): any {
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
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetflowMonitorPolicyAnnotationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NetflowMonitorPolicyAnnotations | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetflowMonitorPolicyAnnotations | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // key - computed: true, optional: false, required: true
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

  // value - computed: true, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class NetflowMonitorPolicyAnnotationsList extends cdktf.ComplexList {
  public internalValue? : NetflowMonitorPolicyAnnotations[] | cdktf.IResolvable

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
  public get(index: number): NetflowMonitorPolicyAnnotationsOutputReference {
    return new NetflowMonitorPolicyAnnotationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NetflowMonitorPolicyRelationToNetflowExportersAnnotations {
  /**
  * The key used to uniquely identify this configuration object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/netflow_monitor_policy#key NetflowMonitorPolicy#key}
  */
  readonly key: string;
  /**
  * The value of the property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/netflow_monitor_policy#value NetflowMonitorPolicy#value}
  */
  readonly value: string;
}

export function netflowMonitorPolicyRelationToNetflowExportersAnnotationsToTerraform(struct?: NetflowMonitorPolicyRelationToNetflowExportersAnnotations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function netflowMonitorPolicyRelationToNetflowExportersAnnotationsToHclTerraform(struct?: NetflowMonitorPolicyRelationToNetflowExportersAnnotations | cdktf.IResolvable): any {
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
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetflowMonitorPolicyRelationToNetflowExportersAnnotationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NetflowMonitorPolicyRelationToNetflowExportersAnnotations | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetflowMonitorPolicyRelationToNetflowExportersAnnotations | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // key - computed: true, optional: false, required: true
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

  // value - computed: true, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class NetflowMonitorPolicyRelationToNetflowExportersAnnotationsList extends cdktf.ComplexList {
  public internalValue? : NetflowMonitorPolicyRelationToNetflowExportersAnnotations[] | cdktf.IResolvable

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
  public get(index: number): NetflowMonitorPolicyRelationToNetflowExportersAnnotationsOutputReference {
    return new NetflowMonitorPolicyRelationToNetflowExportersAnnotationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NetflowMonitorPolicyRelationToNetflowExportersTags {
  /**
  * The key used to uniquely identify this configuration object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/netflow_monitor_policy#key NetflowMonitorPolicy#key}
  */
  readonly key: string;
  /**
  * The value of the property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/netflow_monitor_policy#value NetflowMonitorPolicy#value}
  */
  readonly value: string;
}

export function netflowMonitorPolicyRelationToNetflowExportersTagsToTerraform(struct?: NetflowMonitorPolicyRelationToNetflowExportersTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function netflowMonitorPolicyRelationToNetflowExportersTagsToHclTerraform(struct?: NetflowMonitorPolicyRelationToNetflowExportersTags | cdktf.IResolvable): any {
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
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetflowMonitorPolicyRelationToNetflowExportersTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NetflowMonitorPolicyRelationToNetflowExportersTags | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetflowMonitorPolicyRelationToNetflowExportersTags | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // key - computed: true, optional: false, required: true
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

  // value - computed: true, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class NetflowMonitorPolicyRelationToNetflowExportersTagsList extends cdktf.ComplexList {
  public internalValue? : NetflowMonitorPolicyRelationToNetflowExportersTags[] | cdktf.IResolvable

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
  public get(index: number): NetflowMonitorPolicyRelationToNetflowExportersTagsOutputReference {
    return new NetflowMonitorPolicyRelationToNetflowExportersTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NetflowMonitorPolicyRelationToNetflowExporters {
  /**
  * The annotation of the Relation To NetFlow Exporter object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/netflow_monitor_policy#annotation NetflowMonitorPolicy#annotation}
  */
  readonly annotation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/netflow_monitor_policy#annotations NetflowMonitorPolicy#annotations}
  */
  readonly annotations?: NetflowMonitorPolicyRelationToNetflowExportersAnnotations[] | cdktf.IResolvable;
  /**
  * Name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/netflow_monitor_policy#netflow_exporter_policy_name NetflowMonitorPolicy#netflow_exporter_policy_name}
  */
  readonly netflowExporterPolicyName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/netflow_monitor_policy#tags NetflowMonitorPolicy#tags}
  */
  readonly tags?: NetflowMonitorPolicyRelationToNetflowExportersTags[] | cdktf.IResolvable;
}

export function netflowMonitorPolicyRelationToNetflowExportersToTerraform(struct?: NetflowMonitorPolicyRelationToNetflowExporters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    annotation: cdktf.stringToTerraform(struct!.annotation),
    annotations: cdktf.listMapper(netflowMonitorPolicyRelationToNetflowExportersAnnotationsToTerraform, false)(struct!.annotations),
    netflow_exporter_policy_name: cdktf.stringToTerraform(struct!.netflowExporterPolicyName),
    tags: cdktf.listMapper(netflowMonitorPolicyRelationToNetflowExportersTagsToTerraform, false)(struct!.tags),
  }
}


export function netflowMonitorPolicyRelationToNetflowExportersToHclTerraform(struct?: NetflowMonitorPolicyRelationToNetflowExporters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    annotation: {
      value: cdktf.stringToHclTerraform(struct!.annotation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    annotations: {
      value: cdktf.listMapperHcl(netflowMonitorPolicyRelationToNetflowExportersAnnotationsToHclTerraform, false)(struct!.annotations),
      isBlock: true,
      type: "set",
      storageClassType: "NetflowMonitorPolicyRelationToNetflowExportersAnnotationsList",
    },
    netflow_exporter_policy_name: {
      value: cdktf.stringToHclTerraform(struct!.netflowExporterPolicyName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tags: {
      value: cdktf.listMapperHcl(netflowMonitorPolicyRelationToNetflowExportersTagsToHclTerraform, false)(struct!.tags),
      isBlock: true,
      type: "set",
      storageClassType: "NetflowMonitorPolicyRelationToNetflowExportersTagsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetflowMonitorPolicyRelationToNetflowExportersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NetflowMonitorPolicyRelationToNetflowExporters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._annotation !== undefined) {
      hasAnyValues = true;
      internalValueResult.annotation = this._annotation;
    }
    if (this._annotations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.annotations = this._annotations?.internalValue;
    }
    if (this._netflowExporterPolicyName !== undefined) {
      hasAnyValues = true;
      internalValueResult.netflowExporterPolicyName = this._netflowExporterPolicyName;
    }
    if (this._tags?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetflowMonitorPolicyRelationToNetflowExporters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._annotation = undefined;
      this._annotations.internalValue = undefined;
      this._netflowExporterPolicyName = undefined;
      this._tags.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._annotation = value.annotation;
      this._annotations.internalValue = value.annotations;
      this._netflowExporterPolicyName = value.netflowExporterPolicyName;
      this._tags.internalValue = value.tags;
    }
  }

  // annotation - computed: true, optional: true, required: false
  private _annotation?: string; 
  public get annotation() {
    return this.getStringAttribute('annotation');
  }
  public set annotation(value: string) {
    this._annotation = value;
  }
  public resetAnnotation() {
    this._annotation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get annotationInput() {
    return this._annotation;
  }

  // annotations - computed: true, optional: true, required: false
  private _annotations = new NetflowMonitorPolicyRelationToNetflowExportersAnnotationsList(this, "annotations", true);
  public get annotations() {
    return this._annotations;
  }
  public putAnnotations(value: NetflowMonitorPolicyRelationToNetflowExportersAnnotations[] | cdktf.IResolvable) {
    this._annotations.internalValue = value;
  }
  public resetAnnotations() {
    this._annotations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get annotationsInput() {
    return this._annotations.internalValue;
  }

  // netflow_exporter_policy_name - computed: true, optional: false, required: true
  private _netflowExporterPolicyName?: string; 
  public get netflowExporterPolicyName() {
    return this.getStringAttribute('netflow_exporter_policy_name');
  }
  public set netflowExporterPolicyName(value: string) {
    this._netflowExporterPolicyName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get netflowExporterPolicyNameInput() {
    return this._netflowExporterPolicyName;
  }

  // tags - computed: true, optional: true, required: false
  private _tags = new NetflowMonitorPolicyRelationToNetflowExportersTagsList(this, "tags", true);
  public get tags() {
    return this._tags;
  }
  public putTags(value: NetflowMonitorPolicyRelationToNetflowExportersTags[] | cdktf.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }
}

export class NetflowMonitorPolicyRelationToNetflowExportersList extends cdktf.ComplexList {
  public internalValue? : NetflowMonitorPolicyRelationToNetflowExporters[] | cdktf.IResolvable

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
  public get(index: number): NetflowMonitorPolicyRelationToNetflowExportersOutputReference {
    return new NetflowMonitorPolicyRelationToNetflowExportersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NetflowMonitorPolicyRelationToNetflowRecordAnnotations {
  /**
  * The key used to uniquely identify this configuration object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/netflow_monitor_policy#key NetflowMonitorPolicy#key}
  */
  readonly key: string;
  /**
  * The value of the property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/netflow_monitor_policy#value NetflowMonitorPolicy#value}
  */
  readonly value: string;
}

export function netflowMonitorPolicyRelationToNetflowRecordAnnotationsToTerraform(struct?: NetflowMonitorPolicyRelationToNetflowRecordAnnotations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function netflowMonitorPolicyRelationToNetflowRecordAnnotationsToHclTerraform(struct?: NetflowMonitorPolicyRelationToNetflowRecordAnnotations | cdktf.IResolvable): any {
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
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetflowMonitorPolicyRelationToNetflowRecordAnnotationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NetflowMonitorPolicyRelationToNetflowRecordAnnotations | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetflowMonitorPolicyRelationToNetflowRecordAnnotations | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // key - computed: true, optional: false, required: true
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

  // value - computed: true, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class NetflowMonitorPolicyRelationToNetflowRecordAnnotationsList extends cdktf.ComplexList {
  public internalValue? : NetflowMonitorPolicyRelationToNetflowRecordAnnotations[] | cdktf.IResolvable

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
  public get(index: number): NetflowMonitorPolicyRelationToNetflowRecordAnnotationsOutputReference {
    return new NetflowMonitorPolicyRelationToNetflowRecordAnnotationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NetflowMonitorPolicyRelationToNetflowRecordTags {
  /**
  * The key used to uniquely identify this configuration object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/netflow_monitor_policy#key NetflowMonitorPolicy#key}
  */
  readonly key: string;
  /**
  * The value of the property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/netflow_monitor_policy#value NetflowMonitorPolicy#value}
  */
  readonly value: string;
}

export function netflowMonitorPolicyRelationToNetflowRecordTagsToTerraform(struct?: NetflowMonitorPolicyRelationToNetflowRecordTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function netflowMonitorPolicyRelationToNetflowRecordTagsToHclTerraform(struct?: NetflowMonitorPolicyRelationToNetflowRecordTags | cdktf.IResolvable): any {
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
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetflowMonitorPolicyRelationToNetflowRecordTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NetflowMonitorPolicyRelationToNetflowRecordTags | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetflowMonitorPolicyRelationToNetflowRecordTags | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // key - computed: true, optional: false, required: true
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

  // value - computed: true, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class NetflowMonitorPolicyRelationToNetflowRecordTagsList extends cdktf.ComplexList {
  public internalValue? : NetflowMonitorPolicyRelationToNetflowRecordTags[] | cdktf.IResolvable

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
  public get(index: number): NetflowMonitorPolicyRelationToNetflowRecordTagsOutputReference {
    return new NetflowMonitorPolicyRelationToNetflowRecordTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NetflowMonitorPolicyRelationToNetflowRecord {
  /**
  * The annotation of the Relation To NetFlow Record object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/netflow_monitor_policy#annotation NetflowMonitorPolicy#annotation}
  */
  readonly annotation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/netflow_monitor_policy#annotations NetflowMonitorPolicy#annotations}
  */
  readonly annotations?: NetflowMonitorPolicyRelationToNetflowRecordAnnotations[] | cdktf.IResolvable;
  /**
  * Name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/netflow_monitor_policy#netflow_record_policy_name NetflowMonitorPolicy#netflow_record_policy_name}
  */
  readonly netflowRecordPolicyName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/netflow_monitor_policy#tags NetflowMonitorPolicy#tags}
  */
  readonly tags?: NetflowMonitorPolicyRelationToNetflowRecordTags[] | cdktf.IResolvable;
}

export function netflowMonitorPolicyRelationToNetflowRecordToTerraform(struct?: NetflowMonitorPolicyRelationToNetflowRecord | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    annotation: cdktf.stringToTerraform(struct!.annotation),
    annotations: cdktf.listMapper(netflowMonitorPolicyRelationToNetflowRecordAnnotationsToTerraform, false)(struct!.annotations),
    netflow_record_policy_name: cdktf.stringToTerraform(struct!.netflowRecordPolicyName),
    tags: cdktf.listMapper(netflowMonitorPolicyRelationToNetflowRecordTagsToTerraform, false)(struct!.tags),
  }
}


export function netflowMonitorPolicyRelationToNetflowRecordToHclTerraform(struct?: NetflowMonitorPolicyRelationToNetflowRecord | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    annotation: {
      value: cdktf.stringToHclTerraform(struct!.annotation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    annotations: {
      value: cdktf.listMapperHcl(netflowMonitorPolicyRelationToNetflowRecordAnnotationsToHclTerraform, false)(struct!.annotations),
      isBlock: true,
      type: "set",
      storageClassType: "NetflowMonitorPolicyRelationToNetflowRecordAnnotationsList",
    },
    netflow_record_policy_name: {
      value: cdktf.stringToHclTerraform(struct!.netflowRecordPolicyName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tags: {
      value: cdktf.listMapperHcl(netflowMonitorPolicyRelationToNetflowRecordTagsToHclTerraform, false)(struct!.tags),
      isBlock: true,
      type: "set",
      storageClassType: "NetflowMonitorPolicyRelationToNetflowRecordTagsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetflowMonitorPolicyRelationToNetflowRecordOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): NetflowMonitorPolicyRelationToNetflowRecord | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._annotation !== undefined) {
      hasAnyValues = true;
      internalValueResult.annotation = this._annotation;
    }
    if (this._annotations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.annotations = this._annotations?.internalValue;
    }
    if (this._netflowRecordPolicyName !== undefined) {
      hasAnyValues = true;
      internalValueResult.netflowRecordPolicyName = this._netflowRecordPolicyName;
    }
    if (this._tags?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetflowMonitorPolicyRelationToNetflowRecord | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._annotation = undefined;
      this._annotations.internalValue = undefined;
      this._netflowRecordPolicyName = undefined;
      this._tags.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._annotation = value.annotation;
      this._annotations.internalValue = value.annotations;
      this._netflowRecordPolicyName = value.netflowRecordPolicyName;
      this._tags.internalValue = value.tags;
    }
  }

  // annotation - computed: true, optional: true, required: false
  private _annotation?: string; 
  public get annotation() {
    return this.getStringAttribute('annotation');
  }
  public set annotation(value: string) {
    this._annotation = value;
  }
  public resetAnnotation() {
    this._annotation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get annotationInput() {
    return this._annotation;
  }

  // annotations - computed: true, optional: true, required: false
  private _annotations = new NetflowMonitorPolicyRelationToNetflowRecordAnnotationsList(this, "annotations", true);
  public get annotations() {
    return this._annotations;
  }
  public putAnnotations(value: NetflowMonitorPolicyRelationToNetflowRecordAnnotations[] | cdktf.IResolvable) {
    this._annotations.internalValue = value;
  }
  public resetAnnotations() {
    this._annotations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get annotationsInput() {
    return this._annotations.internalValue;
  }

  // netflow_record_policy_name - computed: true, optional: true, required: false
  private _netflowRecordPolicyName?: string; 
  public get netflowRecordPolicyName() {
    return this.getStringAttribute('netflow_record_policy_name');
  }
  public set netflowRecordPolicyName(value: string) {
    this._netflowRecordPolicyName = value;
  }
  public resetNetflowRecordPolicyName() {
    this._netflowRecordPolicyName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get netflowRecordPolicyNameInput() {
    return this._netflowRecordPolicyName;
  }

  // tags - computed: true, optional: true, required: false
  private _tags = new NetflowMonitorPolicyRelationToNetflowRecordTagsList(this, "tags", true);
  public get tags() {
    return this._tags;
  }
  public putTags(value: NetflowMonitorPolicyRelationToNetflowRecordTags[] | cdktf.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }
}
export interface NetflowMonitorPolicyTags {
  /**
  * The key used to uniquely identify this configuration object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/netflow_monitor_policy#key NetflowMonitorPolicy#key}
  */
  readonly key: string;
  /**
  * The value of the property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/netflow_monitor_policy#value NetflowMonitorPolicy#value}
  */
  readonly value: string;
}

export function netflowMonitorPolicyTagsToTerraform(struct?: NetflowMonitorPolicyTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function netflowMonitorPolicyTagsToHclTerraform(struct?: NetflowMonitorPolicyTags | cdktf.IResolvable): any {
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
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetflowMonitorPolicyTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NetflowMonitorPolicyTags | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetflowMonitorPolicyTags | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // key - computed: true, optional: false, required: true
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

  // value - computed: true, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class NetflowMonitorPolicyTagsList extends cdktf.ComplexList {
  public internalValue? : NetflowMonitorPolicyTags[] | cdktf.IResolvable

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
  public get(index: number): NetflowMonitorPolicyTagsOutputReference {
    return new NetflowMonitorPolicyTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/netflow_monitor_policy aci_netflow_monitor_policy}
*/
export class NetflowMonitorPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aci_netflow_monitor_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a NetflowMonitorPolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the NetflowMonitorPolicy to import
  * @param importFromId The id of the existing NetflowMonitorPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/netflow_monitor_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the NetflowMonitorPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aci_netflow_monitor_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/netflow_monitor_policy aci_netflow_monitor_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NetflowMonitorPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: NetflowMonitorPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'aci_netflow_monitor_policy',
      terraformGeneratorMetadata: {
        providerName: 'aci',
        providerVersion: '2.18.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._annotation = config.annotation;
    this._annotations.internalValue = config.annotations;
    this._description = config.description;
    this._name = config.name;
    this._nameAlias = config.nameAlias;
    this._ownerKey = config.ownerKey;
    this._ownerTag = config.ownerTag;
    this._parentDn = config.parentDn;
    this._relationToNetflowExporters.internalValue = config.relationToNetflowExporters;
    this._relationToNetflowRecord.internalValue = config.relationToNetflowRecord;
    this._tags.internalValue = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // annotation - computed: true, optional: true, required: false
  private _annotation?: string; 
  public get annotation() {
    return this.getStringAttribute('annotation');
  }
  public set annotation(value: string) {
    this._annotation = value;
  }
  public resetAnnotation() {
    this._annotation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get annotationInput() {
    return this._annotation;
  }

  // annotations - computed: true, optional: true, required: false
  private _annotations = new NetflowMonitorPolicyAnnotationsList(this, "annotations", true);
  public get annotations() {
    return this._annotations;
  }
  public putAnnotations(value: NetflowMonitorPolicyAnnotations[] | cdktf.IResolvable) {
    this._annotations.internalValue = value;
  }
  public resetAnnotations() {
    this._annotations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get annotationsInput() {
    return this._annotations.internalValue;
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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // name_alias - computed: true, optional: true, required: false
  private _nameAlias?: string; 
  public get nameAlias() {
    return this.getStringAttribute('name_alias');
  }
  public set nameAlias(value: string) {
    this._nameAlias = value;
  }
  public resetNameAlias() {
    this._nameAlias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameAliasInput() {
    return this._nameAlias;
  }

  // owner_key - computed: true, optional: true, required: false
  private _ownerKey?: string; 
  public get ownerKey() {
    return this.getStringAttribute('owner_key');
  }
  public set ownerKey(value: string) {
    this._ownerKey = value;
  }
  public resetOwnerKey() {
    this._ownerKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ownerKeyInput() {
    return this._ownerKey;
  }

  // owner_tag - computed: true, optional: true, required: false
  private _ownerTag?: string; 
  public get ownerTag() {
    return this.getStringAttribute('owner_tag');
  }
  public set ownerTag(value: string) {
    this._ownerTag = value;
  }
  public resetOwnerTag() {
    this._ownerTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ownerTagInput() {
    return this._ownerTag;
  }

  // parent_dn - computed: true, optional: true, required: false
  private _parentDn?: string; 
  public get parentDn() {
    return this.getStringAttribute('parent_dn');
  }
  public set parentDn(value: string) {
    this._parentDn = value;
  }
  public resetParentDn() {
    this._parentDn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parentDnInput() {
    return this._parentDn;
  }

  // relation_to_netflow_exporters - computed: true, optional: true, required: false
  private _relationToNetflowExporters = new NetflowMonitorPolicyRelationToNetflowExportersList(this, "relation_to_netflow_exporters", true);
  public get relationToNetflowExporters() {
    return this._relationToNetflowExporters;
  }
  public putRelationToNetflowExporters(value: NetflowMonitorPolicyRelationToNetflowExporters[] | cdktf.IResolvable) {
    this._relationToNetflowExporters.internalValue = value;
  }
  public resetRelationToNetflowExporters() {
    this._relationToNetflowExporters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relationToNetflowExportersInput() {
    return this._relationToNetflowExporters.internalValue;
  }

  // relation_to_netflow_record - computed: true, optional: true, required: false
  private _relationToNetflowRecord = new NetflowMonitorPolicyRelationToNetflowRecordOutputReference(this, "relation_to_netflow_record");
  public get relationToNetflowRecord() {
    return this._relationToNetflowRecord;
  }
  public putRelationToNetflowRecord(value: NetflowMonitorPolicyRelationToNetflowRecord) {
    this._relationToNetflowRecord.internalValue = value;
  }
  public resetRelationToNetflowRecord() {
    this._relationToNetflowRecord.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relationToNetflowRecordInput() {
    return this._relationToNetflowRecord.internalValue;
  }

  // tags - computed: true, optional: true, required: false
  private _tags = new NetflowMonitorPolicyTagsList(this, "tags", true);
  public get tags() {
    return this._tags;
  }
  public putTags(value: NetflowMonitorPolicyTags[] | cdktf.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      annotation: cdktf.stringToTerraform(this._annotation),
      annotations: cdktf.listMapper(netflowMonitorPolicyAnnotationsToTerraform, false)(this._annotations.internalValue),
      description: cdktf.stringToTerraform(this._description),
      name: cdktf.stringToTerraform(this._name),
      name_alias: cdktf.stringToTerraform(this._nameAlias),
      owner_key: cdktf.stringToTerraform(this._ownerKey),
      owner_tag: cdktf.stringToTerraform(this._ownerTag),
      parent_dn: cdktf.stringToTerraform(this._parentDn),
      relation_to_netflow_exporters: cdktf.listMapper(netflowMonitorPolicyRelationToNetflowExportersToTerraform, false)(this._relationToNetflowExporters.internalValue),
      relation_to_netflow_record: netflowMonitorPolicyRelationToNetflowRecordToTerraform(this._relationToNetflowRecord.internalValue),
      tags: cdktf.listMapper(netflowMonitorPolicyTagsToTerraform, false)(this._tags.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      annotation: {
        value: cdktf.stringToHclTerraform(this._annotation),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      annotations: {
        value: cdktf.listMapperHcl(netflowMonitorPolicyAnnotationsToHclTerraform, false)(this._annotations.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "NetflowMonitorPolicyAnnotationsList",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
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
      name_alias: {
        value: cdktf.stringToHclTerraform(this._nameAlias),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      owner_key: {
        value: cdktf.stringToHclTerraform(this._ownerKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      owner_tag: {
        value: cdktf.stringToHclTerraform(this._ownerTag),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      parent_dn: {
        value: cdktf.stringToHclTerraform(this._parentDn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      relation_to_netflow_exporters: {
        value: cdktf.listMapperHcl(netflowMonitorPolicyRelationToNetflowExportersToHclTerraform, false)(this._relationToNetflowExporters.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "NetflowMonitorPolicyRelationToNetflowExportersList",
      },
      relation_to_netflow_record: {
        value: netflowMonitorPolicyRelationToNetflowRecordToHclTerraform(this._relationToNetflowRecord.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "NetflowMonitorPolicyRelationToNetflowRecord",
      },
      tags: {
        value: cdktf.listMapperHcl(netflowMonitorPolicyTagsToHclTerraform, false)(this._tags.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "NetflowMonitorPolicyTagsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
