// https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/neighbor_discovery_interface_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NeighborDiscoveryInterfacePolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * The annotation of the Neighbor Discovery Interface Policy object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/neighbor_discovery_interface_policy#annotation NeighborDiscoveryInterfacePolicy#annotation}
  */
  readonly annotation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/neighbor_discovery_interface_policy#annotations NeighborDiscoveryInterfacePolicy#annotations}
  */
  readonly annotations?: NeighborDiscoveryInterfacePolicyAnnotations[] | cdktf.IResolvable;
  /**
  * The controls for the Neighbor Discovery Interface Policy object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/neighbor_discovery_interface_policy#controller_state NeighborDiscoveryInterfacePolicy#controller_state}
  */
  readonly controllerState?: string[];
  /**
  * The description of the Neighbor Discovery Interface Policy object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/neighbor_discovery_interface_policy#description NeighborDiscoveryInterfacePolicy#description}
  */
  readonly description?: string;
  /**
  * The hop limit of the Neighbor Discovery Interface Policy object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/neighbor_discovery_interface_policy#hop_limit NeighborDiscoveryInterfacePolicy#hop_limit}
  */
  readonly hopLimit?: string;
  /**
  * The maximum transmission unit (MTU) of the Neighbor Discovery Interface Policy object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/neighbor_discovery_interface_policy#mtu NeighborDiscoveryInterfacePolicy#mtu}
  */
  readonly mtu?: string;
  /**
  * The name of the Neighbor Discovery Interface Policy object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/neighbor_discovery_interface_policy#name NeighborDiscoveryInterfacePolicy#name}
  */
  readonly name: string;
  /**
  * The name alias of the Neighbor Discovery Interface Policy object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/neighbor_discovery_interface_policy#name_alias NeighborDiscoveryInterfacePolicy#name_alias}
  */
  readonly nameAlias?: string;
  /**
  * The interval (milliseconds) for sending neighbor solicitation (NS) messages.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/neighbor_discovery_interface_policy#neighbor_solicitation_interval NeighborDiscoveryInterfacePolicy#neighbor_solicitation_interval}
  */
  readonly neighborSolicitationInterval?: string;
  /**
  * The retransmission count for sending neighbor solicitation (NS) messages.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/neighbor_discovery_interface_policy#neighbor_solicitation_retries NeighborDiscoveryInterfacePolicy#neighbor_solicitation_retries}
  */
  readonly neighborSolicitationRetries?: string;
  /**
  * The retransmission base value for neighbor unreachability detection (NUD).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/neighbor_discovery_interface_policy#nud_retry_base NeighborDiscoveryInterfacePolicy#nud_retry_base}
  */
  readonly nudRetryBase?: string;
  /**
  * The retransmission interval (milliseconds) for neighbor unreachability detection (NUD).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/neighbor_discovery_interface_policy#nud_retry_interval NeighborDiscoveryInterfacePolicy#nud_retry_interval}
  */
  readonly nudRetryInterval?: string;
  /**
  * The maximum number of retransmission attempts for neighbor unreachability detection (NUD).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/neighbor_discovery_interface_policy#nud_retry_max_attempts NeighborDiscoveryInterfacePolicy#nud_retry_max_attempts}
  */
  readonly nudRetryMaxAttempts?: string;
  /**
  * The key for enabling clients to own their data for entity correlation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/neighbor_discovery_interface_policy#owner_key NeighborDiscoveryInterfacePolicy#owner_key}
  */
  readonly ownerKey?: string;
  /**
  * A tag for enabling clients to add their own data. For example, to indicate who created this object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/neighbor_discovery_interface_policy#owner_tag NeighborDiscoveryInterfacePolicy#owner_tag}
  */
  readonly ownerTag?: string;
  /**
  * The distinguished name (DN) of the parent object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/neighbor_discovery_interface_policy#parent_dn NeighborDiscoveryInterfacePolicy#parent_dn}
  */
  readonly parentDn: string;
  /**
  * The time (milliseconds) for which a neighbor is considered reachable after receiving reachability confirmation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/neighbor_discovery_interface_policy#reachable_time NeighborDiscoveryInterfacePolicy#reachable_time}
  */
  readonly reachableTime?: string;
  /**
  * The retransmission time (milliseconds) for sending neighbor solicitation messages.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/neighbor_discovery_interface_policy#retransmit_timer NeighborDiscoveryInterfacePolicy#retransmit_timer}
  */
  readonly retransmitTimer?: string;
  /**
  * The interval (seconds) for sending route advertisement messages.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/neighbor_discovery_interface_policy#router_advertisement_interval NeighborDiscoveryInterfacePolicy#router_advertisement_interval}
  */
  readonly routerAdvertisementInterval?: string;
  /**
  * The default router lifetime (seconds).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/neighbor_discovery_interface_policy#router_advertisement_lifetime NeighborDiscoveryInterfacePolicy#router_advertisement_lifetime}
  */
  readonly routerAdvertisementLifetime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/neighbor_discovery_interface_policy#tags NeighborDiscoveryInterfacePolicy#tags}
  */
  readonly tags?: NeighborDiscoveryInterfacePolicyTags[] | cdktf.IResolvable;
}
export interface NeighborDiscoveryInterfacePolicyAnnotations {
  /**
  * The key used to uniquely identify this configuration object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/neighbor_discovery_interface_policy#key NeighborDiscoveryInterfacePolicy#key}
  */
  readonly key: string;
  /**
  * The value of the property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/neighbor_discovery_interface_policy#value NeighborDiscoveryInterfacePolicy#value}
  */
  readonly value: string;
}

export function neighborDiscoveryInterfacePolicyAnnotationsToTerraform(struct?: NeighborDiscoveryInterfacePolicyAnnotations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function neighborDiscoveryInterfacePolicyAnnotationsToHclTerraform(struct?: NeighborDiscoveryInterfacePolicyAnnotations | cdktf.IResolvable): any {
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

export class NeighborDiscoveryInterfacePolicyAnnotationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NeighborDiscoveryInterfacePolicyAnnotations | cdktf.IResolvable | undefined {
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

  public set internalValue(value: NeighborDiscoveryInterfacePolicyAnnotations | cdktf.IResolvable | undefined) {
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

export class NeighborDiscoveryInterfacePolicyAnnotationsList extends cdktf.ComplexList {
  public internalValue? : NeighborDiscoveryInterfacePolicyAnnotations[] | cdktf.IResolvable

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
  public get(index: number): NeighborDiscoveryInterfacePolicyAnnotationsOutputReference {
    return new NeighborDiscoveryInterfacePolicyAnnotationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NeighborDiscoveryInterfacePolicyTags {
  /**
  * The key used to uniquely identify this configuration object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/neighbor_discovery_interface_policy#key NeighborDiscoveryInterfacePolicy#key}
  */
  readonly key: string;
  /**
  * The value of the property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/neighbor_discovery_interface_policy#value NeighborDiscoveryInterfacePolicy#value}
  */
  readonly value: string;
}

export function neighborDiscoveryInterfacePolicyTagsToTerraform(struct?: NeighborDiscoveryInterfacePolicyTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function neighborDiscoveryInterfacePolicyTagsToHclTerraform(struct?: NeighborDiscoveryInterfacePolicyTags | cdktf.IResolvable): any {
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

export class NeighborDiscoveryInterfacePolicyTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NeighborDiscoveryInterfacePolicyTags | cdktf.IResolvable | undefined {
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

  public set internalValue(value: NeighborDiscoveryInterfacePolicyTags | cdktf.IResolvable | undefined) {
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

export class NeighborDiscoveryInterfacePolicyTagsList extends cdktf.ComplexList {
  public internalValue? : NeighborDiscoveryInterfacePolicyTags[] | cdktf.IResolvable

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
  public get(index: number): NeighborDiscoveryInterfacePolicyTagsOutputReference {
    return new NeighborDiscoveryInterfacePolicyTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/neighbor_discovery_interface_policy aci_neighbor_discovery_interface_policy}
*/
export class NeighborDiscoveryInterfacePolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aci_neighbor_discovery_interface_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a NeighborDiscoveryInterfacePolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the NeighborDiscoveryInterfacePolicy to import
  * @param importFromId The id of the existing NeighborDiscoveryInterfacePolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/neighbor_discovery_interface_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the NeighborDiscoveryInterfacePolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aci_neighbor_discovery_interface_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/neighbor_discovery_interface_policy aci_neighbor_discovery_interface_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NeighborDiscoveryInterfacePolicyConfig
  */
  public constructor(scope: Construct, id: string, config: NeighborDiscoveryInterfacePolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'aci_neighbor_discovery_interface_policy',
      terraformGeneratorMetadata: {
        providerName: 'aci',
        providerVersion: '2.18.0',
        providerVersionConstraint: '2.18.0'
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
    this._controllerState = config.controllerState;
    this._description = config.description;
    this._hopLimit = config.hopLimit;
    this._mtu = config.mtu;
    this._name = config.name;
    this._nameAlias = config.nameAlias;
    this._neighborSolicitationInterval = config.neighborSolicitationInterval;
    this._neighborSolicitationRetries = config.neighborSolicitationRetries;
    this._nudRetryBase = config.nudRetryBase;
    this._nudRetryInterval = config.nudRetryInterval;
    this._nudRetryMaxAttempts = config.nudRetryMaxAttempts;
    this._ownerKey = config.ownerKey;
    this._ownerTag = config.ownerTag;
    this._parentDn = config.parentDn;
    this._reachableTime = config.reachableTime;
    this._retransmitTimer = config.retransmitTimer;
    this._routerAdvertisementInterval = config.routerAdvertisementInterval;
    this._routerAdvertisementLifetime = config.routerAdvertisementLifetime;
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
  private _annotations = new NeighborDiscoveryInterfacePolicyAnnotationsList(this, "annotations", true);
  public get annotations() {
    return this._annotations;
  }
  public putAnnotations(value: NeighborDiscoveryInterfacePolicyAnnotations[] | cdktf.IResolvable) {
    this._annotations.internalValue = value;
  }
  public resetAnnotations() {
    this._annotations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get annotationsInput() {
    return this._annotations.internalValue;
  }

  // controller_state - computed: true, optional: true, required: false
  private _controllerState?: string[]; 
  public get controllerState() {
    return cdktf.Fn.tolist(this.getListAttribute('controller_state'));
  }
  public set controllerState(value: string[]) {
    this._controllerState = value;
  }
  public resetControllerState() {
    this._controllerState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get controllerStateInput() {
    return this._controllerState;
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

  // hop_limit - computed: true, optional: true, required: false
  private _hopLimit?: string; 
  public get hopLimit() {
    return this.getStringAttribute('hop_limit');
  }
  public set hopLimit(value: string) {
    this._hopLimit = value;
  }
  public resetHopLimit() {
    this._hopLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hopLimitInput() {
    return this._hopLimit;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // mtu - computed: true, optional: true, required: false
  private _mtu?: string; 
  public get mtu() {
    return this.getStringAttribute('mtu');
  }
  public set mtu(value: string) {
    this._mtu = value;
  }
  public resetMtu() {
    this._mtu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mtuInput() {
    return this._mtu;
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

  // neighbor_solicitation_interval - computed: true, optional: true, required: false
  private _neighborSolicitationInterval?: string; 
  public get neighborSolicitationInterval() {
    return this.getStringAttribute('neighbor_solicitation_interval');
  }
  public set neighborSolicitationInterval(value: string) {
    this._neighborSolicitationInterval = value;
  }
  public resetNeighborSolicitationInterval() {
    this._neighborSolicitationInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get neighborSolicitationIntervalInput() {
    return this._neighborSolicitationInterval;
  }

  // neighbor_solicitation_retries - computed: true, optional: true, required: false
  private _neighborSolicitationRetries?: string; 
  public get neighborSolicitationRetries() {
    return this.getStringAttribute('neighbor_solicitation_retries');
  }
  public set neighborSolicitationRetries(value: string) {
    this._neighborSolicitationRetries = value;
  }
  public resetNeighborSolicitationRetries() {
    this._neighborSolicitationRetries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get neighborSolicitationRetriesInput() {
    return this._neighborSolicitationRetries;
  }

  // nud_retry_base - computed: true, optional: true, required: false
  private _nudRetryBase?: string; 
  public get nudRetryBase() {
    return this.getStringAttribute('nud_retry_base');
  }
  public set nudRetryBase(value: string) {
    this._nudRetryBase = value;
  }
  public resetNudRetryBase() {
    this._nudRetryBase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nudRetryBaseInput() {
    return this._nudRetryBase;
  }

  // nud_retry_interval - computed: true, optional: true, required: false
  private _nudRetryInterval?: string; 
  public get nudRetryInterval() {
    return this.getStringAttribute('nud_retry_interval');
  }
  public set nudRetryInterval(value: string) {
    this._nudRetryInterval = value;
  }
  public resetNudRetryInterval() {
    this._nudRetryInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nudRetryIntervalInput() {
    return this._nudRetryInterval;
  }

  // nud_retry_max_attempts - computed: true, optional: true, required: false
  private _nudRetryMaxAttempts?: string; 
  public get nudRetryMaxAttempts() {
    return this.getStringAttribute('nud_retry_max_attempts');
  }
  public set nudRetryMaxAttempts(value: string) {
    this._nudRetryMaxAttempts = value;
  }
  public resetNudRetryMaxAttempts() {
    this._nudRetryMaxAttempts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nudRetryMaxAttemptsInput() {
    return this._nudRetryMaxAttempts;
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

  // reachable_time - computed: true, optional: true, required: false
  private _reachableTime?: string; 
  public get reachableTime() {
    return this.getStringAttribute('reachable_time');
  }
  public set reachableTime(value: string) {
    this._reachableTime = value;
  }
  public resetReachableTime() {
    this._reachableTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reachableTimeInput() {
    return this._reachableTime;
  }

  // retransmit_timer - computed: true, optional: true, required: false
  private _retransmitTimer?: string; 
  public get retransmitTimer() {
    return this.getStringAttribute('retransmit_timer');
  }
  public set retransmitTimer(value: string) {
    this._retransmitTimer = value;
  }
  public resetRetransmitTimer() {
    this._retransmitTimer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retransmitTimerInput() {
    return this._retransmitTimer;
  }

  // router_advertisement_interval - computed: true, optional: true, required: false
  private _routerAdvertisementInterval?: string; 
  public get routerAdvertisementInterval() {
    return this.getStringAttribute('router_advertisement_interval');
  }
  public set routerAdvertisementInterval(value: string) {
    this._routerAdvertisementInterval = value;
  }
  public resetRouterAdvertisementInterval() {
    this._routerAdvertisementInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routerAdvertisementIntervalInput() {
    return this._routerAdvertisementInterval;
  }

  // router_advertisement_lifetime - computed: true, optional: true, required: false
  private _routerAdvertisementLifetime?: string; 
  public get routerAdvertisementLifetime() {
    return this.getStringAttribute('router_advertisement_lifetime');
  }
  public set routerAdvertisementLifetime(value: string) {
    this._routerAdvertisementLifetime = value;
  }
  public resetRouterAdvertisementLifetime() {
    this._routerAdvertisementLifetime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routerAdvertisementLifetimeInput() {
    return this._routerAdvertisementLifetime;
  }

  // tags - computed: true, optional: true, required: false
  private _tags = new NeighborDiscoveryInterfacePolicyTagsList(this, "tags", true);
  public get tags() {
    return this._tags;
  }
  public putTags(value: NeighborDiscoveryInterfacePolicyTags[] | cdktf.IResolvable) {
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
      annotations: cdktf.listMapper(neighborDiscoveryInterfacePolicyAnnotationsToTerraform, false)(this._annotations.internalValue),
      controller_state: cdktf.listMapper(cdktf.stringToTerraform, false)(this._controllerState),
      description: cdktf.stringToTerraform(this._description),
      hop_limit: cdktf.stringToTerraform(this._hopLimit),
      mtu: cdktf.stringToTerraform(this._mtu),
      name: cdktf.stringToTerraform(this._name),
      name_alias: cdktf.stringToTerraform(this._nameAlias),
      neighbor_solicitation_interval: cdktf.stringToTerraform(this._neighborSolicitationInterval),
      neighbor_solicitation_retries: cdktf.stringToTerraform(this._neighborSolicitationRetries),
      nud_retry_base: cdktf.stringToTerraform(this._nudRetryBase),
      nud_retry_interval: cdktf.stringToTerraform(this._nudRetryInterval),
      nud_retry_max_attempts: cdktf.stringToTerraform(this._nudRetryMaxAttempts),
      owner_key: cdktf.stringToTerraform(this._ownerKey),
      owner_tag: cdktf.stringToTerraform(this._ownerTag),
      parent_dn: cdktf.stringToTerraform(this._parentDn),
      reachable_time: cdktf.stringToTerraform(this._reachableTime),
      retransmit_timer: cdktf.stringToTerraform(this._retransmitTimer),
      router_advertisement_interval: cdktf.stringToTerraform(this._routerAdvertisementInterval),
      router_advertisement_lifetime: cdktf.stringToTerraform(this._routerAdvertisementLifetime),
      tags: cdktf.listMapper(neighborDiscoveryInterfacePolicyTagsToTerraform, false)(this._tags.internalValue),
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
        value: cdktf.listMapperHcl(neighborDiscoveryInterfacePolicyAnnotationsToHclTerraform, false)(this._annotations.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "NeighborDiscoveryInterfacePolicyAnnotationsList",
      },
      controller_state: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._controllerState),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hop_limit: {
        value: cdktf.stringToHclTerraform(this._hopLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mtu: {
        value: cdktf.stringToHclTerraform(this._mtu),
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
      neighbor_solicitation_interval: {
        value: cdktf.stringToHclTerraform(this._neighborSolicitationInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      neighbor_solicitation_retries: {
        value: cdktf.stringToHclTerraform(this._neighborSolicitationRetries),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      nud_retry_base: {
        value: cdktf.stringToHclTerraform(this._nudRetryBase),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      nud_retry_interval: {
        value: cdktf.stringToHclTerraform(this._nudRetryInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      nud_retry_max_attempts: {
        value: cdktf.stringToHclTerraform(this._nudRetryMaxAttempts),
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
      reachable_time: {
        value: cdktf.stringToHclTerraform(this._reachableTime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      retransmit_timer: {
        value: cdktf.stringToHclTerraform(this._retransmitTimer),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      router_advertisement_interval: {
        value: cdktf.stringToHclTerraform(this._routerAdvertisementInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      router_advertisement_lifetime: {
        value: cdktf.stringToHclTerraform(this._routerAdvertisementLifetime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.listMapperHcl(neighborDiscoveryInterfacePolicyTagsToHclTerraform, false)(this._tags.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "NeighborDiscoveryInterfacePolicyTagsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
