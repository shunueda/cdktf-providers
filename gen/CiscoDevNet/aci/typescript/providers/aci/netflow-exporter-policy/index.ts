// https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/netflow_exporter_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NetflowExporterPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * The annotation of the NetFlow Exporter Policy object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/netflow_exporter_policy#annotation NetflowExporterPolicy#annotation}
  */
  readonly annotation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/netflow_exporter_policy#annotations NetflowExporterPolicy#annotations}
  */
  readonly annotations?: NetflowExporterPolicyAnnotations[] | cdktf.IResolvable;
  /**
  * The description of the NetFlow Exporter Policy object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/netflow_exporter_policy#description NetflowExporterPolicy#description}
  */
  readonly description?: string;
  /**
  * The destination IP address of the remote node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/netflow_exporter_policy#destination_ip_address NetflowExporterPolicy#destination_ip_address}
  */
  readonly destinationIpAddress: string;
  /**
  * The destination port of the remote node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/netflow_exporter_policy#destination_port NetflowExporterPolicy#destination_port}
  */
  readonly destinationPort: string;
  /**
  * The name of the NetFlow Exporter Policy object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/netflow_exporter_policy#name NetflowExporterPolicy#name}
  */
  readonly name: string;
  /**
  * The name alias of the NetFlow Exporter Policy object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/netflow_exporter_policy#name_alias NetflowExporterPolicy#name_alias}
  */
  readonly nameAlias?: string;
  /**
  * The key for enabling clients to own their data for entity correlation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/netflow_exporter_policy#owner_key NetflowExporterPolicy#owner_key}
  */
  readonly ownerKey?: string;
  /**
  * A tag for enabling clients to add their own data. For example, to indicate who created this object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/netflow_exporter_policy#owner_tag NetflowExporterPolicy#owner_tag}
  */
  readonly ownerTag?: string;
  /**
  * The distinguished name (DN) of the parent object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/netflow_exporter_policy#parent_dn NetflowExporterPolicy#parent_dn}
  */
  readonly parentDn?: string;
  /**
  * The DSCP value of the NetFlow Exporter Policy object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/netflow_exporter_policy#qos_dscp_value NetflowExporterPolicy#qos_dscp_value}
  */
  readonly qosDscpValue?: string;
  /**
  * Points to the EPg behind which the Netflow Exporter Resides
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/netflow_exporter_policy#relation_to_epg NetflowExporterPolicy#relation_to_epg}
  */
  readonly relationToEpg?: NetflowExporterPolicyRelationToEpg;
  /**
  * Points to the Ctx behind which the Netflow Exporter Resides
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/netflow_exporter_policy#relation_to_vrf NetflowExporterPolicy#relation_to_vrf}
  */
  readonly relationToVrf?: NetflowExporterPolicyRelationToVrf;
  /**
  * The source IP address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/netflow_exporter_policy#source_ip_address NetflowExporterPolicy#source_ip_address}
  */
  readonly sourceIpAddress?: string;
  /**
  * The type of the source IP address for the NetFlow Exporter Policy object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/netflow_exporter_policy#source_ip_type NetflowExporterPolicy#source_ip_type}
  */
  readonly sourceIpType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/netflow_exporter_policy#tags NetflowExporterPolicy#tags}
  */
  readonly tags?: NetflowExporterPolicyTags[] | cdktf.IResolvable;
  /**
  * The NetFlow Exporter Version of the NetFlow Exporter Policy object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/netflow_exporter_policy#version NetflowExporterPolicy#version}
  */
  readonly version?: string;
}
export interface NetflowExporterPolicyAnnotations {
  /**
  * The key used to uniquely identify this configuration object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/netflow_exporter_policy#key NetflowExporterPolicy#key}
  */
  readonly key: string;
  /**
  * The value of the property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/netflow_exporter_policy#value NetflowExporterPolicy#value}
  */
  readonly value: string;
}

export function netflowExporterPolicyAnnotationsToTerraform(struct?: NetflowExporterPolicyAnnotations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function netflowExporterPolicyAnnotationsToHclTerraform(struct?: NetflowExporterPolicyAnnotations | cdktf.IResolvable): any {
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

export class NetflowExporterPolicyAnnotationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NetflowExporterPolicyAnnotations | cdktf.IResolvable | undefined {
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

  public set internalValue(value: NetflowExporterPolicyAnnotations | cdktf.IResolvable | undefined) {
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

export class NetflowExporterPolicyAnnotationsList extends cdktf.ComplexList {
  public internalValue? : NetflowExporterPolicyAnnotations[] | cdktf.IResolvable

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
  public get(index: number): NetflowExporterPolicyAnnotationsOutputReference {
    return new NetflowExporterPolicyAnnotationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NetflowExporterPolicyRelationToEpgAnnotations {
  /**
  * The key used to uniquely identify this configuration object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/netflow_exporter_policy#key NetflowExporterPolicy#key}
  */
  readonly key: string;
  /**
  * The value of the property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/netflow_exporter_policy#value NetflowExporterPolicy#value}
  */
  readonly value: string;
}

export function netflowExporterPolicyRelationToEpgAnnotationsToTerraform(struct?: NetflowExporterPolicyRelationToEpgAnnotations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function netflowExporterPolicyRelationToEpgAnnotationsToHclTerraform(struct?: NetflowExporterPolicyRelationToEpgAnnotations | cdktf.IResolvable): any {
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

export class NetflowExporterPolicyRelationToEpgAnnotationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NetflowExporterPolicyRelationToEpgAnnotations | cdktf.IResolvable | undefined {
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

  public set internalValue(value: NetflowExporterPolicyRelationToEpgAnnotations | cdktf.IResolvable | undefined) {
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

export class NetflowExporterPolicyRelationToEpgAnnotationsList extends cdktf.ComplexList {
  public internalValue? : NetflowExporterPolicyRelationToEpgAnnotations[] | cdktf.IResolvable

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
  public get(index: number): NetflowExporterPolicyRelationToEpgAnnotationsOutputReference {
    return new NetflowExporterPolicyRelationToEpgAnnotationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NetflowExporterPolicyRelationToEpgTags {
  /**
  * The key used to uniquely identify this configuration object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/netflow_exporter_policy#key NetflowExporterPolicy#key}
  */
  readonly key: string;
  /**
  * The value of the property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/netflow_exporter_policy#value NetflowExporterPolicy#value}
  */
  readonly value: string;
}

export function netflowExporterPolicyRelationToEpgTagsToTerraform(struct?: NetflowExporterPolicyRelationToEpgTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function netflowExporterPolicyRelationToEpgTagsToHclTerraform(struct?: NetflowExporterPolicyRelationToEpgTags | cdktf.IResolvable): any {
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

export class NetflowExporterPolicyRelationToEpgTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NetflowExporterPolicyRelationToEpgTags | cdktf.IResolvable | undefined {
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

  public set internalValue(value: NetflowExporterPolicyRelationToEpgTags | cdktf.IResolvable | undefined) {
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

export class NetflowExporterPolicyRelationToEpgTagsList extends cdktf.ComplexList {
  public internalValue? : NetflowExporterPolicyRelationToEpgTags[] | cdktf.IResolvable

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
  public get(index: number): NetflowExporterPolicyRelationToEpgTagsOutputReference {
    return new NetflowExporterPolicyRelationToEpgTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NetflowExporterPolicyRelationToEpg {
  /**
  * The annotation of the Relation From NetFlow Exporter To EPG object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/netflow_exporter_policy#annotation NetflowExporterPolicy#annotation}
  */
  readonly annotation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/netflow_exporter_policy#annotations NetflowExporterPolicy#annotations}
  */
  readonly annotations?: NetflowExporterPolicyRelationToEpgAnnotations[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/netflow_exporter_policy#tags NetflowExporterPolicy#tags}
  */
  readonly tags?: NetflowExporterPolicyRelationToEpgTags[] | cdktf.IResolvable;
  /**
  * The distinguished name of the target.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/netflow_exporter_policy#target_dn NetflowExporterPolicy#target_dn}
  */
  readonly targetDn?: string;
}

export function netflowExporterPolicyRelationToEpgToTerraform(struct?: NetflowExporterPolicyRelationToEpg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    annotation: cdktf.stringToTerraform(struct!.annotation),
    annotations: cdktf.listMapper(netflowExporterPolicyRelationToEpgAnnotationsToTerraform, false)(struct!.annotations),
    tags: cdktf.listMapper(netflowExporterPolicyRelationToEpgTagsToTerraform, false)(struct!.tags),
    target_dn: cdktf.stringToTerraform(struct!.targetDn),
  }
}


export function netflowExporterPolicyRelationToEpgToHclTerraform(struct?: NetflowExporterPolicyRelationToEpg | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(netflowExporterPolicyRelationToEpgAnnotationsToHclTerraform, false)(struct!.annotations),
      isBlock: true,
      type: "set",
      storageClassType: "NetflowExporterPolicyRelationToEpgAnnotationsList",
    },
    tags: {
      value: cdktf.listMapperHcl(netflowExporterPolicyRelationToEpgTagsToHclTerraform, false)(struct!.tags),
      isBlock: true,
      type: "set",
      storageClassType: "NetflowExporterPolicyRelationToEpgTagsList",
    },
    target_dn: {
      value: cdktf.stringToHclTerraform(struct!.targetDn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetflowExporterPolicyRelationToEpgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): NetflowExporterPolicyRelationToEpg | cdktf.IResolvable | undefined {
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
    if (this._tags?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags?.internalValue;
    }
    if (this._targetDn !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetDn = this._targetDn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetflowExporterPolicyRelationToEpg | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._annotation = undefined;
      this._annotations.internalValue = undefined;
      this._tags.internalValue = undefined;
      this._targetDn = undefined;
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
      this._tags.internalValue = value.tags;
      this._targetDn = value.targetDn;
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
  private _annotations = new NetflowExporterPolicyRelationToEpgAnnotationsList(this, "annotations", true);
  public get annotations() {
    return this._annotations;
  }
  public putAnnotations(value: NetflowExporterPolicyRelationToEpgAnnotations[] | cdktf.IResolvable) {
    this._annotations.internalValue = value;
  }
  public resetAnnotations() {
    this._annotations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get annotationsInput() {
    return this._annotations.internalValue;
  }

  // tags - computed: true, optional: true, required: false
  private _tags = new NetflowExporterPolicyRelationToEpgTagsList(this, "tags", true);
  public get tags() {
    return this._tags;
  }
  public putTags(value: NetflowExporterPolicyRelationToEpgTags[] | cdktf.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }

  // target_dn - computed: true, optional: true, required: false
  private _targetDn?: string; 
  public get targetDn() {
    return this.getStringAttribute('target_dn');
  }
  public set targetDn(value: string) {
    this._targetDn = value;
  }
  public resetTargetDn() {
    this._targetDn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetDnInput() {
    return this._targetDn;
  }
}
export interface NetflowExporterPolicyRelationToVrfAnnotations {
  /**
  * The key used to uniquely identify this configuration object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/netflow_exporter_policy#key NetflowExporterPolicy#key}
  */
  readonly key: string;
  /**
  * The value of the property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/netflow_exporter_policy#value NetflowExporterPolicy#value}
  */
  readonly value: string;
}

export function netflowExporterPolicyRelationToVrfAnnotationsToTerraform(struct?: NetflowExporterPolicyRelationToVrfAnnotations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function netflowExporterPolicyRelationToVrfAnnotationsToHclTerraform(struct?: NetflowExporterPolicyRelationToVrfAnnotations | cdktf.IResolvable): any {
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

export class NetflowExporterPolicyRelationToVrfAnnotationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NetflowExporterPolicyRelationToVrfAnnotations | cdktf.IResolvable | undefined {
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

  public set internalValue(value: NetflowExporterPolicyRelationToVrfAnnotations | cdktf.IResolvable | undefined) {
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

export class NetflowExporterPolicyRelationToVrfAnnotationsList extends cdktf.ComplexList {
  public internalValue? : NetflowExporterPolicyRelationToVrfAnnotations[] | cdktf.IResolvable

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
  public get(index: number): NetflowExporterPolicyRelationToVrfAnnotationsOutputReference {
    return new NetflowExporterPolicyRelationToVrfAnnotationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NetflowExporterPolicyRelationToVrfTags {
  /**
  * The key used to uniquely identify this configuration object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/netflow_exporter_policy#key NetflowExporterPolicy#key}
  */
  readonly key: string;
  /**
  * The value of the property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/netflow_exporter_policy#value NetflowExporterPolicy#value}
  */
  readonly value: string;
}

export function netflowExporterPolicyRelationToVrfTagsToTerraform(struct?: NetflowExporterPolicyRelationToVrfTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function netflowExporterPolicyRelationToVrfTagsToHclTerraform(struct?: NetflowExporterPolicyRelationToVrfTags | cdktf.IResolvable): any {
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

export class NetflowExporterPolicyRelationToVrfTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NetflowExporterPolicyRelationToVrfTags | cdktf.IResolvable | undefined {
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

  public set internalValue(value: NetflowExporterPolicyRelationToVrfTags | cdktf.IResolvable | undefined) {
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

export class NetflowExporterPolicyRelationToVrfTagsList extends cdktf.ComplexList {
  public internalValue? : NetflowExporterPolicyRelationToVrfTags[] | cdktf.IResolvable

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
  public get(index: number): NetflowExporterPolicyRelationToVrfTagsOutputReference {
    return new NetflowExporterPolicyRelationToVrfTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NetflowExporterPolicyRelationToVrf {
  /**
  * The annotation of the Relation From NetFlow Exporter To VRF object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/netflow_exporter_policy#annotation NetflowExporterPolicy#annotation}
  */
  readonly annotation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/netflow_exporter_policy#annotations NetflowExporterPolicy#annotations}
  */
  readonly annotations?: NetflowExporterPolicyRelationToVrfAnnotations[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/netflow_exporter_policy#tags NetflowExporterPolicy#tags}
  */
  readonly tags?: NetflowExporterPolicyRelationToVrfTags[] | cdktf.IResolvable;
  /**
  * The distinguished name of the target.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/netflow_exporter_policy#target_dn NetflowExporterPolicy#target_dn}
  */
  readonly targetDn?: string;
}

export function netflowExporterPolicyRelationToVrfToTerraform(struct?: NetflowExporterPolicyRelationToVrf | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    annotation: cdktf.stringToTerraform(struct!.annotation),
    annotations: cdktf.listMapper(netflowExporterPolicyRelationToVrfAnnotationsToTerraform, false)(struct!.annotations),
    tags: cdktf.listMapper(netflowExporterPolicyRelationToVrfTagsToTerraform, false)(struct!.tags),
    target_dn: cdktf.stringToTerraform(struct!.targetDn),
  }
}


export function netflowExporterPolicyRelationToVrfToHclTerraform(struct?: NetflowExporterPolicyRelationToVrf | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(netflowExporterPolicyRelationToVrfAnnotationsToHclTerraform, false)(struct!.annotations),
      isBlock: true,
      type: "set",
      storageClassType: "NetflowExporterPolicyRelationToVrfAnnotationsList",
    },
    tags: {
      value: cdktf.listMapperHcl(netflowExporterPolicyRelationToVrfTagsToHclTerraform, false)(struct!.tags),
      isBlock: true,
      type: "set",
      storageClassType: "NetflowExporterPolicyRelationToVrfTagsList",
    },
    target_dn: {
      value: cdktf.stringToHclTerraform(struct!.targetDn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetflowExporterPolicyRelationToVrfOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): NetflowExporterPolicyRelationToVrf | cdktf.IResolvable | undefined {
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
    if (this._tags?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags?.internalValue;
    }
    if (this._targetDn !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetDn = this._targetDn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetflowExporterPolicyRelationToVrf | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._annotation = undefined;
      this._annotations.internalValue = undefined;
      this._tags.internalValue = undefined;
      this._targetDn = undefined;
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
      this._tags.internalValue = value.tags;
      this._targetDn = value.targetDn;
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
  private _annotations = new NetflowExporterPolicyRelationToVrfAnnotationsList(this, "annotations", true);
  public get annotations() {
    return this._annotations;
  }
  public putAnnotations(value: NetflowExporterPolicyRelationToVrfAnnotations[] | cdktf.IResolvable) {
    this._annotations.internalValue = value;
  }
  public resetAnnotations() {
    this._annotations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get annotationsInput() {
    return this._annotations.internalValue;
  }

  // tags - computed: true, optional: true, required: false
  private _tags = new NetflowExporterPolicyRelationToVrfTagsList(this, "tags", true);
  public get tags() {
    return this._tags;
  }
  public putTags(value: NetflowExporterPolicyRelationToVrfTags[] | cdktf.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }

  // target_dn - computed: true, optional: true, required: false
  private _targetDn?: string; 
  public get targetDn() {
    return this.getStringAttribute('target_dn');
  }
  public set targetDn(value: string) {
    this._targetDn = value;
  }
  public resetTargetDn() {
    this._targetDn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetDnInput() {
    return this._targetDn;
  }
}
export interface NetflowExporterPolicyTags {
  /**
  * The key used to uniquely identify this configuration object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/netflow_exporter_policy#key NetflowExporterPolicy#key}
  */
  readonly key: string;
  /**
  * The value of the property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/netflow_exporter_policy#value NetflowExporterPolicy#value}
  */
  readonly value: string;
}

export function netflowExporterPolicyTagsToTerraform(struct?: NetflowExporterPolicyTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function netflowExporterPolicyTagsToHclTerraform(struct?: NetflowExporterPolicyTags | cdktf.IResolvable): any {
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

export class NetflowExporterPolicyTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NetflowExporterPolicyTags | cdktf.IResolvable | undefined {
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

  public set internalValue(value: NetflowExporterPolicyTags | cdktf.IResolvable | undefined) {
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

export class NetflowExporterPolicyTagsList extends cdktf.ComplexList {
  public internalValue? : NetflowExporterPolicyTags[] | cdktf.IResolvable

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
  public get(index: number): NetflowExporterPolicyTagsOutputReference {
    return new NetflowExporterPolicyTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/netflow_exporter_policy aci_netflow_exporter_policy}
*/
export class NetflowExporterPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aci_netflow_exporter_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a NetflowExporterPolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the NetflowExporterPolicy to import
  * @param importFromId The id of the existing NetflowExporterPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/netflow_exporter_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the NetflowExporterPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aci_netflow_exporter_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/netflow_exporter_policy aci_netflow_exporter_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NetflowExporterPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: NetflowExporterPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'aci_netflow_exporter_policy',
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
    this._destinationIpAddress = config.destinationIpAddress;
    this._destinationPort = config.destinationPort;
    this._name = config.name;
    this._nameAlias = config.nameAlias;
    this._ownerKey = config.ownerKey;
    this._ownerTag = config.ownerTag;
    this._parentDn = config.parentDn;
    this._qosDscpValue = config.qosDscpValue;
    this._relationToEpg.internalValue = config.relationToEpg;
    this._relationToVrf.internalValue = config.relationToVrf;
    this._sourceIpAddress = config.sourceIpAddress;
    this._sourceIpType = config.sourceIpType;
    this._tags.internalValue = config.tags;
    this._version = config.version;
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
  private _annotations = new NetflowExporterPolicyAnnotationsList(this, "annotations", true);
  public get annotations() {
    return this._annotations;
  }
  public putAnnotations(value: NetflowExporterPolicyAnnotations[] | cdktf.IResolvable) {
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

  // destination_ip_address - computed: false, optional: false, required: true
  private _destinationIpAddress?: string; 
  public get destinationIpAddress() {
    return this.getStringAttribute('destination_ip_address');
  }
  public set destinationIpAddress(value: string) {
    this._destinationIpAddress = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationIpAddressInput() {
    return this._destinationIpAddress;
  }

  // destination_port - computed: false, optional: false, required: true
  private _destinationPort?: string; 
  public get destinationPort() {
    return this.getStringAttribute('destination_port');
  }
  public set destinationPort(value: string) {
    this._destinationPort = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationPortInput() {
    return this._destinationPort;
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

  // qos_dscp_value - computed: true, optional: true, required: false
  private _qosDscpValue?: string; 
  public get qosDscpValue() {
    return this.getStringAttribute('qos_dscp_value');
  }
  public set qosDscpValue(value: string) {
    this._qosDscpValue = value;
  }
  public resetQosDscpValue() {
    this._qosDscpValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get qosDscpValueInput() {
    return this._qosDscpValue;
  }

  // relation_to_epg - computed: true, optional: true, required: false
  private _relationToEpg = new NetflowExporterPolicyRelationToEpgOutputReference(this, "relation_to_epg");
  public get relationToEpg() {
    return this._relationToEpg;
  }
  public putRelationToEpg(value: NetflowExporterPolicyRelationToEpg) {
    this._relationToEpg.internalValue = value;
  }
  public resetRelationToEpg() {
    this._relationToEpg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relationToEpgInput() {
    return this._relationToEpg.internalValue;
  }

  // relation_to_vrf - computed: true, optional: true, required: false
  private _relationToVrf = new NetflowExporterPolicyRelationToVrfOutputReference(this, "relation_to_vrf");
  public get relationToVrf() {
    return this._relationToVrf;
  }
  public putRelationToVrf(value: NetflowExporterPolicyRelationToVrf) {
    this._relationToVrf.internalValue = value;
  }
  public resetRelationToVrf() {
    this._relationToVrf.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relationToVrfInput() {
    return this._relationToVrf.internalValue;
  }

  // source_ip_address - computed: true, optional: true, required: false
  private _sourceIpAddress?: string; 
  public get sourceIpAddress() {
    return this.getStringAttribute('source_ip_address');
  }
  public set sourceIpAddress(value: string) {
    this._sourceIpAddress = value;
  }
  public resetSourceIpAddress() {
    this._sourceIpAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceIpAddressInput() {
    return this._sourceIpAddress;
  }

  // source_ip_type - computed: true, optional: true, required: false
  private _sourceIpType?: string; 
  public get sourceIpType() {
    return this.getStringAttribute('source_ip_type');
  }
  public set sourceIpType(value: string) {
    this._sourceIpType = value;
  }
  public resetSourceIpType() {
    this._sourceIpType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceIpTypeInput() {
    return this._sourceIpType;
  }

  // tags - computed: true, optional: true, required: false
  private _tags = new NetflowExporterPolicyTagsList(this, "tags", true);
  public get tags() {
    return this._tags;
  }
  public putTags(value: NetflowExporterPolicyTags[] | cdktf.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      annotation: cdktf.stringToTerraform(this._annotation),
      annotations: cdktf.listMapper(netflowExporterPolicyAnnotationsToTerraform, false)(this._annotations.internalValue),
      description: cdktf.stringToTerraform(this._description),
      destination_ip_address: cdktf.stringToTerraform(this._destinationIpAddress),
      destination_port: cdktf.stringToTerraform(this._destinationPort),
      name: cdktf.stringToTerraform(this._name),
      name_alias: cdktf.stringToTerraform(this._nameAlias),
      owner_key: cdktf.stringToTerraform(this._ownerKey),
      owner_tag: cdktf.stringToTerraform(this._ownerTag),
      parent_dn: cdktf.stringToTerraform(this._parentDn),
      qos_dscp_value: cdktf.stringToTerraform(this._qosDscpValue),
      relation_to_epg: netflowExporterPolicyRelationToEpgToTerraform(this._relationToEpg.internalValue),
      relation_to_vrf: netflowExporterPolicyRelationToVrfToTerraform(this._relationToVrf.internalValue),
      source_ip_address: cdktf.stringToTerraform(this._sourceIpAddress),
      source_ip_type: cdktf.stringToTerraform(this._sourceIpType),
      tags: cdktf.listMapper(netflowExporterPolicyTagsToTerraform, false)(this._tags.internalValue),
      version: cdktf.stringToTerraform(this._version),
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
        value: cdktf.listMapperHcl(netflowExporterPolicyAnnotationsToHclTerraform, false)(this._annotations.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "NetflowExporterPolicyAnnotationsList",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      destination_ip_address: {
        value: cdktf.stringToHclTerraform(this._destinationIpAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      destination_port: {
        value: cdktf.stringToHclTerraform(this._destinationPort),
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
      qos_dscp_value: {
        value: cdktf.stringToHclTerraform(this._qosDscpValue),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      relation_to_epg: {
        value: netflowExporterPolicyRelationToEpgToHclTerraform(this._relationToEpg.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "NetflowExporterPolicyRelationToEpg",
      },
      relation_to_vrf: {
        value: netflowExporterPolicyRelationToVrfToHclTerraform(this._relationToVrf.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "NetflowExporterPolicyRelationToVrf",
      },
      source_ip_address: {
        value: cdktf.stringToHclTerraform(this._sourceIpAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source_ip_type: {
        value: cdktf.stringToHclTerraform(this._sourceIpType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.listMapperHcl(netflowExporterPolicyTagsToHclTerraform, false)(this._tags.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "NetflowExporterPolicyTagsList",
      },
      version: {
        value: cdktf.stringToHclTerraform(this._version),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
