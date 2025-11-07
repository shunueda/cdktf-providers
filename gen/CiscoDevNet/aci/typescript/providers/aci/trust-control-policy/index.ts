// https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/trust_control_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TrustControlPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * The annotation of the Trust Control Policy object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/trust_control_policy#annotation TrustControlPolicy#annotation}
  */
  readonly annotation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/trust_control_policy#annotations TrustControlPolicy#annotations}
  */
  readonly annotations?: TrustControlPolicyAnnotations[] | cdktf.IResolvable;
  /**
  * The description of the Trust Control Policy object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/trust_control_policy#description TrustControlPolicy#description}
  */
  readonly description?: string;
  /**
  * The Trust Control Policy object contains DHCPv4 servers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/trust_control_policy#has_dhcpv4_server TrustControlPolicy#has_dhcpv4_server}
  */
  readonly hasDhcpv4Server?: string;
  /**
  * The Trust Control Policy object contains DHCPv6 servers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/trust_control_policy#has_dhcpv6_server TrustControlPolicy#has_dhcpv6_server}
  */
  readonly hasDhcpv6Server?: string;
  /**
  * The Trust Control Policy object contains IPv6 routers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/trust_control_policy#has_ipv6_router TrustControlPolicy#has_ipv6_router}
  */
  readonly hasIpv6Router?: string;
  /**
  * The name of the Trust Control Policy object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/trust_control_policy#name TrustControlPolicy#name}
  */
  readonly name: string;
  /**
  * The name alias of the Trust Control Policy object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/trust_control_policy#name_alias TrustControlPolicy#name_alias}
  */
  readonly nameAlias?: string;
  /**
  * The key for enabling clients to own their data for entity correlation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/trust_control_policy#owner_key TrustControlPolicy#owner_key}
  */
  readonly ownerKey?: string;
  /**
  * A tag for enabling clients to add their own data. For example, to indicate who created this object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/trust_control_policy#owner_tag TrustControlPolicy#owner_tag}
  */
  readonly ownerTag?: string;
  /**
  * The distinguished name (DN) of the parent object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/trust_control_policy#parent_dn TrustControlPolicy#parent_dn}
  */
  readonly parentDn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/trust_control_policy#tags TrustControlPolicy#tags}
  */
  readonly tags?: TrustControlPolicyTags[] | cdktf.IResolvable;
  /**
  * The address resolution protocol (ARP) trust status of the Trust Control Policy object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/trust_control_policy#trust_arp TrustControlPolicy#trust_arp}
  */
  readonly trustArp?: string;
  /**
  * The neighbor discovery (ND) trust status of the Trust Control Policy object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/trust_control_policy#trust_nd TrustControlPolicy#trust_nd}
  */
  readonly trustNd?: string;
  /**
  * The router advertisement (RA) trust status of the Trust Control Policy object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/trust_control_policy#trust_ra TrustControlPolicy#trust_ra}
  */
  readonly trustRa?: string;
}
export interface TrustControlPolicyAnnotations {
  /**
  * The key used to uniquely identify this configuration object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/trust_control_policy#key TrustControlPolicy#key}
  */
  readonly key: string;
  /**
  * The value of the property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/trust_control_policy#value TrustControlPolicy#value}
  */
  readonly value: string;
}

export function trustControlPolicyAnnotationsToTerraform(struct?: TrustControlPolicyAnnotations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function trustControlPolicyAnnotationsToHclTerraform(struct?: TrustControlPolicyAnnotations | cdktf.IResolvable): any {
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

export class TrustControlPolicyAnnotationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TrustControlPolicyAnnotations | cdktf.IResolvable | undefined {
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

  public set internalValue(value: TrustControlPolicyAnnotations | cdktf.IResolvable | undefined) {
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

export class TrustControlPolicyAnnotationsList extends cdktf.ComplexList {
  public internalValue? : TrustControlPolicyAnnotations[] | cdktf.IResolvable

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
  public get(index: number): TrustControlPolicyAnnotationsOutputReference {
    return new TrustControlPolicyAnnotationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TrustControlPolicyTags {
  /**
  * The key used to uniquely identify this configuration object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/trust_control_policy#key TrustControlPolicy#key}
  */
  readonly key: string;
  /**
  * The value of the property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/trust_control_policy#value TrustControlPolicy#value}
  */
  readonly value: string;
}

export function trustControlPolicyTagsToTerraform(struct?: TrustControlPolicyTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function trustControlPolicyTagsToHclTerraform(struct?: TrustControlPolicyTags | cdktf.IResolvable): any {
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

export class TrustControlPolicyTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TrustControlPolicyTags | cdktf.IResolvable | undefined {
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

  public set internalValue(value: TrustControlPolicyTags | cdktf.IResolvable | undefined) {
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

export class TrustControlPolicyTagsList extends cdktf.ComplexList {
  public internalValue? : TrustControlPolicyTags[] | cdktf.IResolvable

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
  public get(index: number): TrustControlPolicyTagsOutputReference {
    return new TrustControlPolicyTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/trust_control_policy aci_trust_control_policy}
*/
export class TrustControlPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aci_trust_control_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a TrustControlPolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TrustControlPolicy to import
  * @param importFromId The id of the existing TrustControlPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/trust_control_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TrustControlPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aci_trust_control_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/trust_control_policy aci_trust_control_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TrustControlPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: TrustControlPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'aci_trust_control_policy',
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
    this._hasDhcpv4Server = config.hasDhcpv4Server;
    this._hasDhcpv6Server = config.hasDhcpv6Server;
    this._hasIpv6Router = config.hasIpv6Router;
    this._name = config.name;
    this._nameAlias = config.nameAlias;
    this._ownerKey = config.ownerKey;
    this._ownerTag = config.ownerTag;
    this._parentDn = config.parentDn;
    this._tags.internalValue = config.tags;
    this._trustArp = config.trustArp;
    this._trustNd = config.trustNd;
    this._trustRa = config.trustRa;
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
  private _annotations = new TrustControlPolicyAnnotationsList(this, "annotations", true);
  public get annotations() {
    return this._annotations;
  }
  public putAnnotations(value: TrustControlPolicyAnnotations[] | cdktf.IResolvable) {
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

  // has_dhcpv4_server - computed: true, optional: true, required: false
  private _hasDhcpv4Server?: string; 
  public get hasDhcpv4Server() {
    return this.getStringAttribute('has_dhcpv4_server');
  }
  public set hasDhcpv4Server(value: string) {
    this._hasDhcpv4Server = value;
  }
  public resetHasDhcpv4Server() {
    this._hasDhcpv4Server = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hasDhcpv4ServerInput() {
    return this._hasDhcpv4Server;
  }

  // has_dhcpv6_server - computed: true, optional: true, required: false
  private _hasDhcpv6Server?: string; 
  public get hasDhcpv6Server() {
    return this.getStringAttribute('has_dhcpv6_server');
  }
  public set hasDhcpv6Server(value: string) {
    this._hasDhcpv6Server = value;
  }
  public resetHasDhcpv6Server() {
    this._hasDhcpv6Server = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hasDhcpv6ServerInput() {
    return this._hasDhcpv6Server;
  }

  // has_ipv6_router - computed: true, optional: true, required: false
  private _hasIpv6Router?: string; 
  public get hasIpv6Router() {
    return this.getStringAttribute('has_ipv6_router');
  }
  public set hasIpv6Router(value: string) {
    this._hasIpv6Router = value;
  }
  public resetHasIpv6Router() {
    this._hasIpv6Router = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hasIpv6RouterInput() {
    return this._hasIpv6Router;
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

  // parent_dn - computed: false, optional: false, required: true
  private _parentDn?: string; 
  public get parentDn() {
    return this.getStringAttribute('parent_dn');
  }
  public set parentDn(value: string) {
    this._parentDn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get parentDnInput() {
    return this._parentDn;
  }

  // tags - computed: true, optional: true, required: false
  private _tags = new TrustControlPolicyTagsList(this, "tags", true);
  public get tags() {
    return this._tags;
  }
  public putTags(value: TrustControlPolicyTags[] | cdktf.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }

  // trust_arp - computed: true, optional: true, required: false
  private _trustArp?: string; 
  public get trustArp() {
    return this.getStringAttribute('trust_arp');
  }
  public set trustArp(value: string) {
    this._trustArp = value;
  }
  public resetTrustArp() {
    this._trustArp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trustArpInput() {
    return this._trustArp;
  }

  // trust_nd - computed: true, optional: true, required: false
  private _trustNd?: string; 
  public get trustNd() {
    return this.getStringAttribute('trust_nd');
  }
  public set trustNd(value: string) {
    this._trustNd = value;
  }
  public resetTrustNd() {
    this._trustNd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trustNdInput() {
    return this._trustNd;
  }

  // trust_ra - computed: true, optional: true, required: false
  private _trustRa?: string; 
  public get trustRa() {
    return this.getStringAttribute('trust_ra');
  }
  public set trustRa(value: string) {
    this._trustRa = value;
  }
  public resetTrustRa() {
    this._trustRa = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trustRaInput() {
    return this._trustRa;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      annotation: cdktf.stringToTerraform(this._annotation),
      annotations: cdktf.listMapper(trustControlPolicyAnnotationsToTerraform, false)(this._annotations.internalValue),
      description: cdktf.stringToTerraform(this._description),
      has_dhcpv4_server: cdktf.stringToTerraform(this._hasDhcpv4Server),
      has_dhcpv6_server: cdktf.stringToTerraform(this._hasDhcpv6Server),
      has_ipv6_router: cdktf.stringToTerraform(this._hasIpv6Router),
      name: cdktf.stringToTerraform(this._name),
      name_alias: cdktf.stringToTerraform(this._nameAlias),
      owner_key: cdktf.stringToTerraform(this._ownerKey),
      owner_tag: cdktf.stringToTerraform(this._ownerTag),
      parent_dn: cdktf.stringToTerraform(this._parentDn),
      tags: cdktf.listMapper(trustControlPolicyTagsToTerraform, false)(this._tags.internalValue),
      trust_arp: cdktf.stringToTerraform(this._trustArp),
      trust_nd: cdktf.stringToTerraform(this._trustNd),
      trust_ra: cdktf.stringToTerraform(this._trustRa),
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
        value: cdktf.listMapperHcl(trustControlPolicyAnnotationsToHclTerraform, false)(this._annotations.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "TrustControlPolicyAnnotationsList",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      has_dhcpv4_server: {
        value: cdktf.stringToHclTerraform(this._hasDhcpv4Server),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      has_dhcpv6_server: {
        value: cdktf.stringToHclTerraform(this._hasDhcpv6Server),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      has_ipv6_router: {
        value: cdktf.stringToHclTerraform(this._hasIpv6Router),
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
      tags: {
        value: cdktf.listMapperHcl(trustControlPolicyTagsToHclTerraform, false)(this._tags.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "TrustControlPolicyTagsList",
      },
      trust_arp: {
        value: cdktf.stringToHclTerraform(this._trustArp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      trust_nd: {
        value: cdktf.stringToHclTerraform(this._trustNd),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      trust_ra: {
        value: cdktf.stringToHclTerraform(this._trustRa),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
