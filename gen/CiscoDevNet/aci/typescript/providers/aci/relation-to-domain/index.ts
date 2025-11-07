// https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/relation_to_domain
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RelationToDomainConfig extends cdktf.TerraformMetaArguments {
  /**
  * The annotation of the Relation To Domain object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/relation_to_domain#annotation RelationToDomain#annotation}
  */
  readonly annotation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/relation_to_domain#annotations RelationToDomain#annotations}
  */
  readonly annotations?: RelationToDomainAnnotations[] | cdktf.IResolvable;
  /**
  * The binding type of the Relation To Domain object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/relation_to_domain#binding_type RelationToDomain#binding_type}
  */
  readonly bindingType?: string;
  /**
  * The class preference of the Relation To Domain object. Set 'useg' to allow microsegmentation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/relation_to_domain#class_preference RelationToDomain#class_preference}
  */
  readonly classPreference?: string;
  /**
  * The display name of the user configured port-group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/relation_to_domain#custom_epg_name RelationToDomain#custom_epg_name}
  */
  readonly customEpgName?: string;
  /**
  * The delimiter of the Relation To Domain object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/relation_to_domain#delimiter RelationToDomain#delimiter}
  */
  readonly delimiter?: string;
  /**
  * The deployment immediacy of the Relation To Domain object. Specifies when the policy is pushed into the hardware policy content-addressable memory (CAM).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/relation_to_domain#deployment_immediacy RelationToDomain#deployment_immediacy}
  */
  readonly deploymentImmediacy?: string;
  /**
  * The NetFlow enabled status for the Relation To Domain object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/relation_to_domain#enable_netflow RelationToDomain#enable_netflow}
  */
  readonly enableNetflow?: string;
  /**
  * The encapsulation of the Relation To Domain object. The encapsulation refers to the EPG VLAN when class preference is set to 'encap, or to the Secondary VLAN when class preference is set to 'useg'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/relation_to_domain#encapsulation RelationToDomain#encapsulation}
  */
  readonly encapsulation?: string;
  /**
  * The encapsulation mode of the Relation To Domain object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/relation_to_domain#encapsulation_mode RelationToDomain#encapsulation_mode}
  */
  readonly encapsulationMode?: string;
  /**
  * The class of service (CoS) of the Relation To Domain object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/relation_to_domain#epg_cos RelationToDomain#epg_cos}
  */
  readonly epgCos?: string;
  /**
  * The class of service (CoS) preference of the Relation To Domain object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/relation_to_domain#epg_cos_pref RelationToDomain#epg_cos_pref}
  */
  readonly epgCosPref?: string;
  /**
  * The IP address management (IPAM) DHCP override of the Relation To Domain object. Only applicable for Nutanix domains.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/relation_to_domain#ipam_dhcp_override RelationToDomain#ipam_dhcp_override}
  */
  readonly ipamDhcpOverride?: string;
  /**
  * The IP address management (IPAM) enabled status of the Relation To Domain object. Only applicable for Nutanix domains.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/relation_to_domain#ipam_enabled RelationToDomain#ipam_enabled}
  */
  readonly ipamEnabled?: string;
  /**
  * The IP address management (IPAM) gateway of the Relation To Domain object. Only applicable for Nutanix domains.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/relation_to_domain#ipam_gateway RelationToDomain#ipam_gateway}
  */
  readonly ipamGateway?: string;
  /**
  * The link aggregation group (LAG) policy name of the Relation To Domain object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/relation_to_domain#lag_policy_name RelationToDomain#lag_policy_name}
  */
  readonly lagPolicyName?: string;
  /**
  * The NetFlow monitoring direction of the Relation To Domain object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/relation_to_domain#netflow_direction RelationToDomain#netflow_direction}
  */
  readonly netflowDirection?: string;
  /**
  * The number of ports of the Relation To Domain object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/relation_to_domain#number_of_ports RelationToDomain#number_of_ports}
  */
  readonly numberOfPorts?: string;
  /**
  * The distinguished name (DN) of the parent object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/relation_to_domain#parent_dn RelationToDomain#parent_dn}
  */
  readonly parentDn: string;
  /**
  * Port allocation for ports.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/relation_to_domain#port_allocation RelationToDomain#port_allocation}
  */
  readonly portAllocation?: string;
  /**
  * The primary encapsulation of the Relation To Domain object. This is used when the class preference is set to 'useg'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/relation_to_domain#primary_encapsulation RelationToDomain#primary_encapsulation}
  */
  readonly primaryEncapsulation?: string;
  /**
  * The primary inner encapsulation of the Relation To Domain object. This is used for the portgroup at the VMWare Distributed Virtual Switch (DVS). This VLAN is internal to the DVS and is used for communication between the other VMs and the AVE VM at a host. Traffic is not forwarded to the fabric over the VLAN. Only applicable for Cisco ACI Virtual Edge (AVE) domains.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/relation_to_domain#primary_encapsulation_inner RelationToDomain#primary_encapsulation_inner}
  */
  readonly primaryEncapsulationInner?: string;
  /**
  * The resolution immediacy of the Relation To Domain object. Specifies if policies are resolved immmediately or when needed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/relation_to_domain#resolution_immediacy RelationToDomain#resolution_immediacy}
  */
  readonly resolutionImmediacy?: string;
  /**
  * The secondary inner encapsulation of the Relation To Domain object. This is used for the portgroup at the VMWare Distributed Virtual Switch (DVS). This VLAN is internal to the DVS and is used for communication between the other VMs and the AVE VM at a host. Traffic is not forwarded to the fabric over the VLAN. Only applicable for Cisco ACI Virtual Edge (AVE) domains.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/relation_to_domain#secondary_encapsulation_inner RelationToDomain#secondary_encapsulation_inner}
  */
  readonly secondaryEncapsulationInner?: string;
  /**
  * The switching mode of the Relation To Domain object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/relation_to_domain#switching_mode RelationToDomain#switching_mode}
  */
  readonly switchingMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/relation_to_domain#tags RelationToDomain#tags}
  */
  readonly tags?: RelationToDomainTags[] | cdktf.IResolvable;
  /**
  * The distinguished name of the target Domain object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/relation_to_domain#target_dn RelationToDomain#target_dn}
  */
  readonly targetDn: string;
  /**
  * The untagged status of the Relation To Domain object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/relation_to_domain#untagged RelationToDomain#untagged}
  */
  readonly untagged?: string;
}
export interface RelationToDomainAnnotations {
  /**
  * The key used to uniquely identify this configuration object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/relation_to_domain#key RelationToDomain#key}
  */
  readonly key: string;
  /**
  * The value of the property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/relation_to_domain#value RelationToDomain#value}
  */
  readonly value: string;
}

export function relationToDomainAnnotationsToTerraform(struct?: RelationToDomainAnnotations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function relationToDomainAnnotationsToHclTerraform(struct?: RelationToDomainAnnotations | cdktf.IResolvable): any {
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

export class RelationToDomainAnnotationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RelationToDomainAnnotations | cdktf.IResolvable | undefined {
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

  public set internalValue(value: RelationToDomainAnnotations | cdktf.IResolvable | undefined) {
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

export class RelationToDomainAnnotationsList extends cdktf.ComplexList {
  public internalValue? : RelationToDomainAnnotations[] | cdktf.IResolvable

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
  public get(index: number): RelationToDomainAnnotationsOutputReference {
    return new RelationToDomainAnnotationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RelationToDomainTags {
  /**
  * The key used to uniquely identify this configuration object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/relation_to_domain#key RelationToDomain#key}
  */
  readonly key: string;
  /**
  * The value of the property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/relation_to_domain#value RelationToDomain#value}
  */
  readonly value: string;
}

export function relationToDomainTagsToTerraform(struct?: RelationToDomainTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function relationToDomainTagsToHclTerraform(struct?: RelationToDomainTags | cdktf.IResolvable): any {
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

export class RelationToDomainTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RelationToDomainTags | cdktf.IResolvable | undefined {
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

  public set internalValue(value: RelationToDomainTags | cdktf.IResolvable | undefined) {
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

export class RelationToDomainTagsList extends cdktf.ComplexList {
  public internalValue? : RelationToDomainTags[] | cdktf.IResolvable

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
  public get(index: number): RelationToDomainTagsOutputReference {
    return new RelationToDomainTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/relation_to_domain aci_relation_to_domain}
*/
export class RelationToDomain extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aci_relation_to_domain";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a RelationToDomain resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the RelationToDomain to import
  * @param importFromId The id of the existing RelationToDomain that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/relation_to_domain#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the RelationToDomain to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aci_relation_to_domain", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/relation_to_domain aci_relation_to_domain} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RelationToDomainConfig
  */
  public constructor(scope: Construct, id: string, config: RelationToDomainConfig) {
    super(scope, id, {
      terraformResourceType: 'aci_relation_to_domain',
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
    this._bindingType = config.bindingType;
    this._classPreference = config.classPreference;
    this._customEpgName = config.customEpgName;
    this._delimiter = config.delimiter;
    this._deploymentImmediacy = config.deploymentImmediacy;
    this._enableNetflow = config.enableNetflow;
    this._encapsulation = config.encapsulation;
    this._encapsulationMode = config.encapsulationMode;
    this._epgCos = config.epgCos;
    this._epgCosPref = config.epgCosPref;
    this._ipamDhcpOverride = config.ipamDhcpOverride;
    this._ipamEnabled = config.ipamEnabled;
    this._ipamGateway = config.ipamGateway;
    this._lagPolicyName = config.lagPolicyName;
    this._netflowDirection = config.netflowDirection;
    this._numberOfPorts = config.numberOfPorts;
    this._parentDn = config.parentDn;
    this._portAllocation = config.portAllocation;
    this._primaryEncapsulation = config.primaryEncapsulation;
    this._primaryEncapsulationInner = config.primaryEncapsulationInner;
    this._resolutionImmediacy = config.resolutionImmediacy;
    this._secondaryEncapsulationInner = config.secondaryEncapsulationInner;
    this._switchingMode = config.switchingMode;
    this._tags.internalValue = config.tags;
    this._targetDn = config.targetDn;
    this._untagged = config.untagged;
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
  private _annotations = new RelationToDomainAnnotationsList(this, "annotations", true);
  public get annotations() {
    return this._annotations;
  }
  public putAnnotations(value: RelationToDomainAnnotations[] | cdktf.IResolvable) {
    this._annotations.internalValue = value;
  }
  public resetAnnotations() {
    this._annotations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get annotationsInput() {
    return this._annotations.internalValue;
  }

  // binding_type - computed: true, optional: true, required: false
  private _bindingType?: string; 
  public get bindingType() {
    return this.getStringAttribute('binding_type');
  }
  public set bindingType(value: string) {
    this._bindingType = value;
  }
  public resetBindingType() {
    this._bindingType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bindingTypeInput() {
    return this._bindingType;
  }

  // class_preference - computed: true, optional: true, required: false
  private _classPreference?: string; 
  public get classPreference() {
    return this.getStringAttribute('class_preference');
  }
  public set classPreference(value: string) {
    this._classPreference = value;
  }
  public resetClassPreference() {
    this._classPreference = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classPreferenceInput() {
    return this._classPreference;
  }

  // custom_epg_name - computed: true, optional: true, required: false
  private _customEpgName?: string; 
  public get customEpgName() {
    return this.getStringAttribute('custom_epg_name');
  }
  public set customEpgName(value: string) {
    this._customEpgName = value;
  }
  public resetCustomEpgName() {
    this._customEpgName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customEpgNameInput() {
    return this._customEpgName;
  }

  // delimiter - computed: true, optional: true, required: false
  private _delimiter?: string; 
  public get delimiter() {
    return this.getStringAttribute('delimiter');
  }
  public set delimiter(value: string) {
    this._delimiter = value;
  }
  public resetDelimiter() {
    this._delimiter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get delimiterInput() {
    return this._delimiter;
  }

  // deployment_immediacy - computed: true, optional: true, required: false
  private _deploymentImmediacy?: string; 
  public get deploymentImmediacy() {
    return this.getStringAttribute('deployment_immediacy');
  }
  public set deploymentImmediacy(value: string) {
    this._deploymentImmediacy = value;
  }
  public resetDeploymentImmediacy() {
    this._deploymentImmediacy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deploymentImmediacyInput() {
    return this._deploymentImmediacy;
  }

  // enable_netflow - computed: true, optional: true, required: false
  private _enableNetflow?: string; 
  public get enableNetflow() {
    return this.getStringAttribute('enable_netflow');
  }
  public set enableNetflow(value: string) {
    this._enableNetflow = value;
  }
  public resetEnableNetflow() {
    this._enableNetflow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableNetflowInput() {
    return this._enableNetflow;
  }

  // encapsulation - computed: true, optional: true, required: false
  private _encapsulation?: string; 
  public get encapsulation() {
    return this.getStringAttribute('encapsulation');
  }
  public set encapsulation(value: string) {
    this._encapsulation = value;
  }
  public resetEncapsulation() {
    this._encapsulation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encapsulationInput() {
    return this._encapsulation;
  }

  // encapsulation_mode - computed: true, optional: true, required: false
  private _encapsulationMode?: string; 
  public get encapsulationMode() {
    return this.getStringAttribute('encapsulation_mode');
  }
  public set encapsulationMode(value: string) {
    this._encapsulationMode = value;
  }
  public resetEncapsulationMode() {
    this._encapsulationMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encapsulationModeInput() {
    return this._encapsulationMode;
  }

  // epg_cos - computed: true, optional: true, required: false
  private _epgCos?: string; 
  public get epgCos() {
    return this.getStringAttribute('epg_cos');
  }
  public set epgCos(value: string) {
    this._epgCos = value;
  }
  public resetEpgCos() {
    this._epgCos = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get epgCosInput() {
    return this._epgCos;
  }

  // epg_cos_pref - computed: true, optional: true, required: false
  private _epgCosPref?: string; 
  public get epgCosPref() {
    return this.getStringAttribute('epg_cos_pref');
  }
  public set epgCosPref(value: string) {
    this._epgCosPref = value;
  }
  public resetEpgCosPref() {
    this._epgCosPref = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get epgCosPrefInput() {
    return this._epgCosPref;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ipam_dhcp_override - computed: true, optional: true, required: false
  private _ipamDhcpOverride?: string; 
  public get ipamDhcpOverride() {
    return this.getStringAttribute('ipam_dhcp_override');
  }
  public set ipamDhcpOverride(value: string) {
    this._ipamDhcpOverride = value;
  }
  public resetIpamDhcpOverride() {
    this._ipamDhcpOverride = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipamDhcpOverrideInput() {
    return this._ipamDhcpOverride;
  }

  // ipam_enabled - computed: true, optional: true, required: false
  private _ipamEnabled?: string; 
  public get ipamEnabled() {
    return this.getStringAttribute('ipam_enabled');
  }
  public set ipamEnabled(value: string) {
    this._ipamEnabled = value;
  }
  public resetIpamEnabled() {
    this._ipamEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipamEnabledInput() {
    return this._ipamEnabled;
  }

  // ipam_gateway - computed: true, optional: true, required: false
  private _ipamGateway?: string; 
  public get ipamGateway() {
    return this.getStringAttribute('ipam_gateway');
  }
  public set ipamGateway(value: string) {
    this._ipamGateway = value;
  }
  public resetIpamGateway() {
    this._ipamGateway = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipamGatewayInput() {
    return this._ipamGateway;
  }

  // lag_policy_name - computed: true, optional: true, required: false
  private _lagPolicyName?: string; 
  public get lagPolicyName() {
    return this.getStringAttribute('lag_policy_name');
  }
  public set lagPolicyName(value: string) {
    this._lagPolicyName = value;
  }
  public resetLagPolicyName() {
    this._lagPolicyName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lagPolicyNameInput() {
    return this._lagPolicyName;
  }

  // netflow_direction - computed: true, optional: true, required: false
  private _netflowDirection?: string; 
  public get netflowDirection() {
    return this.getStringAttribute('netflow_direction');
  }
  public set netflowDirection(value: string) {
    this._netflowDirection = value;
  }
  public resetNetflowDirection() {
    this._netflowDirection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get netflowDirectionInput() {
    return this._netflowDirection;
  }

  // number_of_ports - computed: true, optional: true, required: false
  private _numberOfPorts?: string; 
  public get numberOfPorts() {
    return this.getStringAttribute('number_of_ports');
  }
  public set numberOfPorts(value: string) {
    this._numberOfPorts = value;
  }
  public resetNumberOfPorts() {
    this._numberOfPorts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numberOfPortsInput() {
    return this._numberOfPorts;
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

  // port_allocation - computed: true, optional: true, required: false
  private _portAllocation?: string; 
  public get portAllocation() {
    return this.getStringAttribute('port_allocation');
  }
  public set portAllocation(value: string) {
    this._portAllocation = value;
  }
  public resetPortAllocation() {
    this._portAllocation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portAllocationInput() {
    return this._portAllocation;
  }

  // primary_encapsulation - computed: true, optional: true, required: false
  private _primaryEncapsulation?: string; 
  public get primaryEncapsulation() {
    return this.getStringAttribute('primary_encapsulation');
  }
  public set primaryEncapsulation(value: string) {
    this._primaryEncapsulation = value;
  }
  public resetPrimaryEncapsulation() {
    this._primaryEncapsulation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryEncapsulationInput() {
    return this._primaryEncapsulation;
  }

  // primary_encapsulation_inner - computed: true, optional: true, required: false
  private _primaryEncapsulationInner?: string; 
  public get primaryEncapsulationInner() {
    return this.getStringAttribute('primary_encapsulation_inner');
  }
  public set primaryEncapsulationInner(value: string) {
    this._primaryEncapsulationInner = value;
  }
  public resetPrimaryEncapsulationInner() {
    this._primaryEncapsulationInner = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryEncapsulationInnerInput() {
    return this._primaryEncapsulationInner;
  }

  // resolution_immediacy - computed: true, optional: true, required: false
  private _resolutionImmediacy?: string; 
  public get resolutionImmediacy() {
    return this.getStringAttribute('resolution_immediacy');
  }
  public set resolutionImmediacy(value: string) {
    this._resolutionImmediacy = value;
  }
  public resetResolutionImmediacy() {
    this._resolutionImmediacy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resolutionImmediacyInput() {
    return this._resolutionImmediacy;
  }

  // secondary_encapsulation_inner - computed: true, optional: true, required: false
  private _secondaryEncapsulationInner?: string; 
  public get secondaryEncapsulationInner() {
    return this.getStringAttribute('secondary_encapsulation_inner');
  }
  public set secondaryEncapsulationInner(value: string) {
    this._secondaryEncapsulationInner = value;
  }
  public resetSecondaryEncapsulationInner() {
    this._secondaryEncapsulationInner = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secondaryEncapsulationInnerInput() {
    return this._secondaryEncapsulationInner;
  }

  // switching_mode - computed: true, optional: true, required: false
  private _switchingMode?: string; 
  public get switchingMode() {
    return this.getStringAttribute('switching_mode');
  }
  public set switchingMode(value: string) {
    this._switchingMode = value;
  }
  public resetSwitchingMode() {
    this._switchingMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get switchingModeInput() {
    return this._switchingMode;
  }

  // tags - computed: true, optional: true, required: false
  private _tags = new RelationToDomainTagsList(this, "tags", true);
  public get tags() {
    return this._tags;
  }
  public putTags(value: RelationToDomainTags[] | cdktf.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }

  // target_dn - computed: false, optional: false, required: true
  private _targetDn?: string; 
  public get targetDn() {
    return this.getStringAttribute('target_dn');
  }
  public set targetDn(value: string) {
    this._targetDn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetDnInput() {
    return this._targetDn;
  }

  // untagged - computed: true, optional: true, required: false
  private _untagged?: string; 
  public get untagged() {
    return this.getStringAttribute('untagged');
  }
  public set untagged(value: string) {
    this._untagged = value;
  }
  public resetUntagged() {
    this._untagged = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get untaggedInput() {
    return this._untagged;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      annotation: cdktf.stringToTerraform(this._annotation),
      annotations: cdktf.listMapper(relationToDomainAnnotationsToTerraform, false)(this._annotations.internalValue),
      binding_type: cdktf.stringToTerraform(this._bindingType),
      class_preference: cdktf.stringToTerraform(this._classPreference),
      custom_epg_name: cdktf.stringToTerraform(this._customEpgName),
      delimiter: cdktf.stringToTerraform(this._delimiter),
      deployment_immediacy: cdktf.stringToTerraform(this._deploymentImmediacy),
      enable_netflow: cdktf.stringToTerraform(this._enableNetflow),
      encapsulation: cdktf.stringToTerraform(this._encapsulation),
      encapsulation_mode: cdktf.stringToTerraform(this._encapsulationMode),
      epg_cos: cdktf.stringToTerraform(this._epgCos),
      epg_cos_pref: cdktf.stringToTerraform(this._epgCosPref),
      ipam_dhcp_override: cdktf.stringToTerraform(this._ipamDhcpOverride),
      ipam_enabled: cdktf.stringToTerraform(this._ipamEnabled),
      ipam_gateway: cdktf.stringToTerraform(this._ipamGateway),
      lag_policy_name: cdktf.stringToTerraform(this._lagPolicyName),
      netflow_direction: cdktf.stringToTerraform(this._netflowDirection),
      number_of_ports: cdktf.stringToTerraform(this._numberOfPorts),
      parent_dn: cdktf.stringToTerraform(this._parentDn),
      port_allocation: cdktf.stringToTerraform(this._portAllocation),
      primary_encapsulation: cdktf.stringToTerraform(this._primaryEncapsulation),
      primary_encapsulation_inner: cdktf.stringToTerraform(this._primaryEncapsulationInner),
      resolution_immediacy: cdktf.stringToTerraform(this._resolutionImmediacy),
      secondary_encapsulation_inner: cdktf.stringToTerraform(this._secondaryEncapsulationInner),
      switching_mode: cdktf.stringToTerraform(this._switchingMode),
      tags: cdktf.listMapper(relationToDomainTagsToTerraform, false)(this._tags.internalValue),
      target_dn: cdktf.stringToTerraform(this._targetDn),
      untagged: cdktf.stringToTerraform(this._untagged),
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
        value: cdktf.listMapperHcl(relationToDomainAnnotationsToHclTerraform, false)(this._annotations.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "RelationToDomainAnnotationsList",
      },
      binding_type: {
        value: cdktf.stringToHclTerraform(this._bindingType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      class_preference: {
        value: cdktf.stringToHclTerraform(this._classPreference),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      custom_epg_name: {
        value: cdktf.stringToHclTerraform(this._customEpgName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      delimiter: {
        value: cdktf.stringToHclTerraform(this._delimiter),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      deployment_immediacy: {
        value: cdktf.stringToHclTerraform(this._deploymentImmediacy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enable_netflow: {
        value: cdktf.stringToHclTerraform(this._enableNetflow),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      encapsulation: {
        value: cdktf.stringToHclTerraform(this._encapsulation),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      encapsulation_mode: {
        value: cdktf.stringToHclTerraform(this._encapsulationMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      epg_cos: {
        value: cdktf.stringToHclTerraform(this._epgCos),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      epg_cos_pref: {
        value: cdktf.stringToHclTerraform(this._epgCosPref),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipam_dhcp_override: {
        value: cdktf.stringToHclTerraform(this._ipamDhcpOverride),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipam_enabled: {
        value: cdktf.stringToHclTerraform(this._ipamEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipam_gateway: {
        value: cdktf.stringToHclTerraform(this._ipamGateway),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      lag_policy_name: {
        value: cdktf.stringToHclTerraform(this._lagPolicyName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      netflow_direction: {
        value: cdktf.stringToHclTerraform(this._netflowDirection),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      number_of_ports: {
        value: cdktf.stringToHclTerraform(this._numberOfPorts),
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
      port_allocation: {
        value: cdktf.stringToHclTerraform(this._portAllocation),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      primary_encapsulation: {
        value: cdktf.stringToHclTerraform(this._primaryEncapsulation),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      primary_encapsulation_inner: {
        value: cdktf.stringToHclTerraform(this._primaryEncapsulationInner),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resolution_immediacy: {
        value: cdktf.stringToHclTerraform(this._resolutionImmediacy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      secondary_encapsulation_inner: {
        value: cdktf.stringToHclTerraform(this._secondaryEncapsulationInner),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      switching_mode: {
        value: cdktf.stringToHclTerraform(this._switchingMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.listMapperHcl(relationToDomainTagsToHclTerraform, false)(this._tags.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "RelationToDomainTagsList",
      },
      target_dn: {
        value: cdktf.stringToHclTerraform(this._targetDn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      untagged: {
        value: cdktf.stringToHclTerraform(this._untagged),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
