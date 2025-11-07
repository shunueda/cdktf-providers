// https://registry.terraform.io/providers/dell/ome/1.2.3/docs/resources/template
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TemplateConfig extends cdktf.TerraformMetaArguments {
  /**
  * List of attributes associated with a template. This field is ignored while creating a template.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/ome/1.2.3/docs/resources/template#attributes Template#attributes}
  */
  readonly attributes?: TemplateAttributes[] | cdktf.IResolvable;
  /**
  * The XML content of template. Cannot be updated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/ome/1.2.3/docs/resources/template#content Template#content}
  */
  readonly content?: string;
  /**
  * Description of the template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/ome/1.2.3/docs/resources/template#description Template#description}
  */
  readonly description?: string;
  /**
  * OME template device type, supported types are Server, Chassis. Cannot be updated and is applicable only for importing xml. Valid values are `Server` and `Chassis`. Default value is `Server`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/ome/1.2.3/docs/resources/template#device_type Template#device_type}
  */
  readonly deviceType?: string;
  /**
  * Comma seperated values of components from a specified server. Valid values are `iDRAC`, `System`, `BIOS`, `NIC`, `LifeCycleController`, `RAID`, `EventFilters` and `All`. Default value is `All`. Cannot be updated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/ome/1.2.3/docs/resources/template#fqdds Template#fqdds}
  */
  readonly fqdds?: string;
  /**
  * Identity Pool name to be attached with template.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/ome/1.2.3/docs/resources/template#identity_pool_name Template#identity_pool_name}
  */
  readonly identityPoolName?: string;
  /**
  * Number of times the job has to be polled to get the final status of the resource. Default value is `5`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/ome/1.2.3/docs/resources/template#job_retry_count Template#job_retry_count}
  */
  readonly jobRetryCount?: number;
  /**
  * Name of the template resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/ome/1.2.3/docs/resources/template#name Template#name}
  */
  readonly name: string;
  /**
  * Target device id from which the template needs to be created. Cannot be updated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/ome/1.2.3/docs/resources/template#refdevice_id Template#refdevice_id}
  */
  readonly refdeviceId?: number;
  /**
  * Target device servicetag from which the template needs to be created. Cannot be updated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/ome/1.2.3/docs/resources/template#refdevice_servicetag Template#refdevice_servicetag}
  */
  readonly refdeviceServicetag?: string;
  /**
  * Reference Template name from which the template needs to be cloned. Cannot be updated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/ome/1.2.3/docs/resources/template#reftemplate_name Template#reftemplate_name}
  */
  readonly reftemplateName?: string;
  /**
  * Sleep time interval for job polling in seconds. Default value is `30`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/ome/1.2.3/docs/resources/template#sleep_interval Template#sleep_interval}
  */
  readonly sleepInterval?: number;
  /**
  * OME template view type. Valid values are `Deployment` and `Compliance`. Default value is `Deployment`. Cannot be updated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/ome/1.2.3/docs/resources/template#view_type Template#view_type}
  */
  readonly viewType?: string;
  /**
  * VLAN details to be attached with template.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/ome/1.2.3/docs/resources/template#vlan Template#vlan}
  */
  readonly vlan?: TemplateVlan;
}
export interface TemplateAttributes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/ome/1.2.3/docs/resources/template#attribute_id Template#attribute_id}
  */
  readonly attributeId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/ome/1.2.3/docs/resources/template#display_name Template#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/ome/1.2.3/docs/resources/template#is_ignored Template#is_ignored}
  */
  readonly isIgnored?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/ome/1.2.3/docs/resources/template#value Template#value}
  */
  readonly value?: string;
}

export function templateAttributesToTerraform(struct?: TemplateAttributes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    attribute_id: cdktf.numberToTerraform(struct!.attributeId),
    display_name: cdktf.stringToTerraform(struct!.displayName),
    is_ignored: cdktf.booleanToTerraform(struct!.isIgnored),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function templateAttributesToHclTerraform(struct?: TemplateAttributes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    attribute_id: {
      value: cdktf.numberToHclTerraform(struct!.attributeId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    display_name: {
      value: cdktf.stringToHclTerraform(struct!.displayName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    is_ignored: {
      value: cdktf.booleanToHclTerraform(struct!.isIgnored),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
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

export class TemplateAttributesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TemplateAttributes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attributeId !== undefined) {
      hasAnyValues = true;
      internalValueResult.attributeId = this._attributeId;
    }
    if (this._displayName !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayName = this._displayName;
    }
    if (this._isIgnored !== undefined) {
      hasAnyValues = true;
      internalValueResult.isIgnored = this._isIgnored;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TemplateAttributes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._attributeId = undefined;
      this._displayName = undefined;
      this._isIgnored = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._attributeId = value.attributeId;
      this._displayName = value.displayName;
      this._isIgnored = value.isIgnored;
      this._value = value.value;
    }
  }

  // attribute_id - computed: true, optional: true, required: false
  private _attributeId?: number; 
  public get attributeId() {
    return this.getNumberAttribute('attribute_id');
  }
  public set attributeId(value: number) {
    this._attributeId = value;
  }
  public resetAttributeId() {
    this._attributeId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeIdInput() {
    return this._attributeId;
  }

  // display_name - computed: true, optional: true, required: false
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // is_ignored - computed: true, optional: true, required: false
  private _isIgnored?: boolean | cdktf.IResolvable; 
  public get isIgnored() {
    return this.getBooleanAttribute('is_ignored');
  }
  public set isIgnored(value: boolean | cdktf.IResolvable) {
    this._isIgnored = value;
  }
  public resetIsIgnored() {
    this._isIgnored = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isIgnoredInput() {
    return this._isIgnored;
  }

  // value - computed: true, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class TemplateAttributesList extends cdktf.ComplexList {
  public internalValue? : TemplateAttributes[] | cdktf.IResolvable

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
  public get(index: number): TemplateAttributesOutputReference {
    return new TemplateAttributesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TemplateVlanVlanAttributes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/ome/1.2.3/docs/resources/template#is_nic_bonded Template#is_nic_bonded}
  */
  readonly isNicBonded?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/ome/1.2.3/docs/resources/template#nic_identifier Template#nic_identifier}
  */
  readonly nicIdentifier?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/ome/1.2.3/docs/resources/template#port Template#port}
  */
  readonly port?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/ome/1.2.3/docs/resources/template#tagged_networks Template#tagged_networks}
  */
  readonly taggedNetworks?: number[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/ome/1.2.3/docs/resources/template#untagged_network Template#untagged_network}
  */
  readonly untaggedNetwork?: number;
}

export function templateVlanVlanAttributesToTerraform(struct?: TemplateVlanVlanAttributes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    is_nic_bonded: cdktf.booleanToTerraform(struct!.isNicBonded),
    nic_identifier: cdktf.stringToTerraform(struct!.nicIdentifier),
    port: cdktf.numberToTerraform(struct!.port),
    tagged_networks: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.taggedNetworks),
    untagged_network: cdktf.numberToTerraform(struct!.untaggedNetwork),
  }
}


export function templateVlanVlanAttributesToHclTerraform(struct?: TemplateVlanVlanAttributes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    is_nic_bonded: {
      value: cdktf.booleanToHclTerraform(struct!.isNicBonded),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    nic_identifier: {
      value: cdktf.stringToHclTerraform(struct!.nicIdentifier),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tagged_networks: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.taggedNetworks),
      isBlock: false,
      type: "set",
      storageClassType: "numberList",
    },
    untagged_network: {
      value: cdktf.numberToHclTerraform(struct!.untaggedNetwork),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TemplateVlanVlanAttributesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TemplateVlanVlanAttributes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._isNicBonded !== undefined) {
      hasAnyValues = true;
      internalValueResult.isNicBonded = this._isNicBonded;
    }
    if (this._nicIdentifier !== undefined) {
      hasAnyValues = true;
      internalValueResult.nicIdentifier = this._nicIdentifier;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._taggedNetworks !== undefined) {
      hasAnyValues = true;
      internalValueResult.taggedNetworks = this._taggedNetworks;
    }
    if (this._untaggedNetwork !== undefined) {
      hasAnyValues = true;
      internalValueResult.untaggedNetwork = this._untaggedNetwork;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TemplateVlanVlanAttributes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._isNicBonded = undefined;
      this._nicIdentifier = undefined;
      this._port = undefined;
      this._taggedNetworks = undefined;
      this._untaggedNetwork = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._isNicBonded = value.isNicBonded;
      this._nicIdentifier = value.nicIdentifier;
      this._port = value.port;
      this._taggedNetworks = value.taggedNetworks;
      this._untaggedNetwork = value.untaggedNetwork;
    }
  }

  // is_nic_bonded - computed: true, optional: true, required: false
  private _isNicBonded?: boolean | cdktf.IResolvable; 
  public get isNicBonded() {
    return this.getBooleanAttribute('is_nic_bonded');
  }
  public set isNicBonded(value: boolean | cdktf.IResolvable) {
    this._isNicBonded = value;
  }
  public resetIsNicBonded() {
    this._isNicBonded = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isNicBondedInput() {
    return this._isNicBonded;
  }

  // nic_identifier - computed: true, optional: true, required: false
  private _nicIdentifier?: string; 
  public get nicIdentifier() {
    return this.getStringAttribute('nic_identifier');
  }
  public set nicIdentifier(value: string) {
    this._nicIdentifier = value;
  }
  public resetNicIdentifier() {
    this._nicIdentifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nicIdentifierInput() {
    return this._nicIdentifier;
  }

  // port - computed: true, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // tagged_networks - computed: true, optional: true, required: false
  private _taggedNetworks?: number[]; 
  public get taggedNetworks() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('tagged_networks')));
  }
  public set taggedNetworks(value: number[]) {
    this._taggedNetworks = value;
  }
  public resetTaggedNetworks() {
    this._taggedNetworks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get taggedNetworksInput() {
    return this._taggedNetworks;
  }

  // untagged_network - computed: true, optional: true, required: false
  private _untaggedNetwork?: number; 
  public get untaggedNetwork() {
    return this.getNumberAttribute('untagged_network');
  }
  public set untaggedNetwork(value: number) {
    this._untaggedNetwork = value;
  }
  public resetUntaggedNetwork() {
    this._untaggedNetwork = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get untaggedNetworkInput() {
    return this._untaggedNetwork;
  }
}

export class TemplateVlanVlanAttributesList extends cdktf.ComplexList {
  public internalValue? : TemplateVlanVlanAttributes[] | cdktf.IResolvable

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
  public get(index: number): TemplateVlanVlanAttributesOutputReference {
    return new TemplateVlanVlanAttributesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TemplateVlan {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/ome/1.2.3/docs/resources/template#bonding_technology Template#bonding_technology}
  */
  readonly bondingTechnology?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/ome/1.2.3/docs/resources/template#propogate_vlan Template#propogate_vlan}
  */
  readonly propogateVlan?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/ome/1.2.3/docs/resources/template#vlan_attributes Template#vlan_attributes}
  */
  readonly vlanAttributes?: TemplateVlanVlanAttributes[] | cdktf.IResolvable;
}

export function templateVlanToTerraform(struct?: TemplateVlan | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bonding_technology: cdktf.stringToTerraform(struct!.bondingTechnology),
    propogate_vlan: cdktf.booleanToTerraform(struct!.propogateVlan),
    vlan_attributes: cdktf.listMapper(templateVlanVlanAttributesToTerraform, false)(struct!.vlanAttributes),
  }
}


export function templateVlanToHclTerraform(struct?: TemplateVlan | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bonding_technology: {
      value: cdktf.stringToHclTerraform(struct!.bondingTechnology),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    propogate_vlan: {
      value: cdktf.booleanToHclTerraform(struct!.propogateVlan),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    vlan_attributes: {
      value: cdktf.listMapperHcl(templateVlanVlanAttributesToHclTerraform, false)(struct!.vlanAttributes),
      isBlock: true,
      type: "list",
      storageClassType: "TemplateVlanVlanAttributesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TemplateVlanOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): TemplateVlan | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bondingTechnology !== undefined) {
      hasAnyValues = true;
      internalValueResult.bondingTechnology = this._bondingTechnology;
    }
    if (this._propogateVlan !== undefined) {
      hasAnyValues = true;
      internalValueResult.propogateVlan = this._propogateVlan;
    }
    if (this._vlanAttributes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vlanAttributes = this._vlanAttributes?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TemplateVlan | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bondingTechnology = undefined;
      this._propogateVlan = undefined;
      this._vlanAttributes.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bondingTechnology = value.bondingTechnology;
      this._propogateVlan = value.propogateVlan;
      this._vlanAttributes.internalValue = value.vlanAttributes;
    }
  }

  // bonding_technology - computed: true, optional: true, required: false
  private _bondingTechnology?: string; 
  public get bondingTechnology() {
    return this.getStringAttribute('bonding_technology');
  }
  public set bondingTechnology(value: string) {
    this._bondingTechnology = value;
  }
  public resetBondingTechnology() {
    this._bondingTechnology = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bondingTechnologyInput() {
    return this._bondingTechnology;
  }

  // propogate_vlan - computed: true, optional: true, required: false
  private _propogateVlan?: boolean | cdktf.IResolvable; 
  public get propogateVlan() {
    return this.getBooleanAttribute('propogate_vlan');
  }
  public set propogateVlan(value: boolean | cdktf.IResolvable) {
    this._propogateVlan = value;
  }
  public resetPropogateVlan() {
    this._propogateVlan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propogateVlanInput() {
    return this._propogateVlan;
  }

  // vlan_attributes - computed: true, optional: true, required: false
  private _vlanAttributes = new TemplateVlanVlanAttributesList(this, "vlan_attributes", false);
  public get vlanAttributes() {
    return this._vlanAttributes;
  }
  public putVlanAttributes(value: TemplateVlanVlanAttributes[] | cdktf.IResolvable) {
    this._vlanAttributes.internalValue = value;
  }
  public resetVlanAttributes() {
    this._vlanAttributes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanAttributesInput() {
    return this._vlanAttributes.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/dell/ome/1.2.3/docs/resources/template ome_template}
*/
export class Template extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ome_template";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Template resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Template to import
  * @param importFromId The id of the existing Template that should be imported. Refer to the {@link https://registry.terraform.io/providers/dell/ome/1.2.3/docs/resources/template#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Template to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ome_template", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dell/ome/1.2.3/docs/resources/template ome_template} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TemplateConfig
  */
  public constructor(scope: Construct, id: string, config: TemplateConfig) {
    super(scope, id, {
      terraformResourceType: 'ome_template',
      terraformGeneratorMetadata: {
        providerName: 'ome',
        providerVersion: '1.2.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._attributes.internalValue = config.attributes;
    this._content = config.content;
    this._description = config.description;
    this._deviceType = config.deviceType;
    this._fqdds = config.fqdds;
    this._identityPoolName = config.identityPoolName;
    this._jobRetryCount = config.jobRetryCount;
    this._name = config.name;
    this._refdeviceId = config.refdeviceId;
    this._refdeviceServicetag = config.refdeviceServicetag;
    this._reftemplateName = config.reftemplateName;
    this._sleepInterval = config.sleepInterval;
    this._viewType = config.viewType;
    this._vlan.internalValue = config.vlan;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // attributes - computed: true, optional: true, required: false
  private _attributes = new TemplateAttributesList(this, "attributes", false);
  public get attributes() {
    return this._attributes;
  }
  public putAttributes(value: TemplateAttributes[] | cdktf.IResolvable) {
    this._attributes.internalValue = value;
  }
  public resetAttributes() {
    this._attributes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributesInput() {
    return this._attributes.internalValue;
  }

  // content - computed: true, optional: true, required: false
  private _content?: string; 
  public get content() {
    return this.getStringAttribute('content');
  }
  public set content(value: string) {
    this._content = value;
  }
  public resetContent() {
    this._content = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentInput() {
    return this._content;
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

  // device_type - computed: true, optional: true, required: false
  private _deviceType?: string; 
  public get deviceType() {
    return this.getStringAttribute('device_type');
  }
  public set deviceType(value: string) {
    this._deviceType = value;
  }
  public resetDeviceType() {
    this._deviceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceTypeInput() {
    return this._deviceType;
  }

  // fqdds - computed: true, optional: true, required: false
  private _fqdds?: string; 
  public get fqdds() {
    return this.getStringAttribute('fqdds');
  }
  public set fqdds(value: string) {
    this._fqdds = value;
  }
  public resetFqdds() {
    this._fqdds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fqddsInput() {
    return this._fqdds;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // identity_pool_id - computed: true, optional: false, required: false
  public get identityPoolId() {
    return this.getNumberAttribute('identity_pool_id');
  }

  // identity_pool_name - computed: true, optional: true, required: false
  private _identityPoolName?: string; 
  public get identityPoolName() {
    return this.getStringAttribute('identity_pool_name');
  }
  public set identityPoolName(value: string) {
    this._identityPoolName = value;
  }
  public resetIdentityPoolName() {
    this._identityPoolName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identityPoolNameInput() {
    return this._identityPoolName;
  }

  // job_retry_count - computed: true, optional: true, required: false
  private _jobRetryCount?: number; 
  public get jobRetryCount() {
    return this.getNumberAttribute('job_retry_count');
  }
  public set jobRetryCount(value: number) {
    this._jobRetryCount = value;
  }
  public resetJobRetryCount() {
    this._jobRetryCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jobRetryCountInput() {
    return this._jobRetryCount;
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

  // refdevice_id - computed: true, optional: true, required: false
  private _refdeviceId?: number; 
  public get refdeviceId() {
    return this.getNumberAttribute('refdevice_id');
  }
  public set refdeviceId(value: number) {
    this._refdeviceId = value;
  }
  public resetRefdeviceId() {
    this._refdeviceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get refdeviceIdInput() {
    return this._refdeviceId;
  }

  // refdevice_servicetag - computed: true, optional: true, required: false
  private _refdeviceServicetag?: string; 
  public get refdeviceServicetag() {
    return this.getStringAttribute('refdevice_servicetag');
  }
  public set refdeviceServicetag(value: string) {
    this._refdeviceServicetag = value;
  }
  public resetRefdeviceServicetag() {
    this._refdeviceServicetag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get refdeviceServicetagInput() {
    return this._refdeviceServicetag;
  }

  // reftemplate_name - computed: true, optional: true, required: false
  private _reftemplateName?: string; 
  public get reftemplateName() {
    return this.getStringAttribute('reftemplate_name');
  }
  public set reftemplateName(value: string) {
    this._reftemplateName = value;
  }
  public resetReftemplateName() {
    this._reftemplateName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reftemplateNameInput() {
    return this._reftemplateName;
  }

  // sleep_interval - computed: true, optional: true, required: false
  private _sleepInterval?: number; 
  public get sleepInterval() {
    return this.getNumberAttribute('sleep_interval');
  }
  public set sleepInterval(value: number) {
    this._sleepInterval = value;
  }
  public resetSleepInterval() {
    this._sleepInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sleepIntervalInput() {
    return this._sleepInterval;
  }

  // view_type - computed: true, optional: true, required: false
  private _viewType?: string; 
  public get viewType() {
    return this.getStringAttribute('view_type');
  }
  public set viewType(value: string) {
    this._viewType = value;
  }
  public resetViewType() {
    this._viewType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get viewTypeInput() {
    return this._viewType;
  }

  // view_type_id - computed: true, optional: false, required: false
  public get viewTypeId() {
    return this.getNumberAttribute('view_type_id');
  }

  // vlan - computed: true, optional: true, required: false
  private _vlan = new TemplateVlanOutputReference(this, "vlan");
  public get vlan() {
    return this._vlan;
  }
  public putVlan(value: TemplateVlan) {
    this._vlan.internalValue = value;
  }
  public resetVlan() {
    this._vlan.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanInput() {
    return this._vlan.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      attributes: cdktf.listMapper(templateAttributesToTerraform, false)(this._attributes.internalValue),
      content: cdktf.stringToTerraform(this._content),
      description: cdktf.stringToTerraform(this._description),
      device_type: cdktf.stringToTerraform(this._deviceType),
      fqdds: cdktf.stringToTerraform(this._fqdds),
      identity_pool_name: cdktf.stringToTerraform(this._identityPoolName),
      job_retry_count: cdktf.numberToTerraform(this._jobRetryCount),
      name: cdktf.stringToTerraform(this._name),
      refdevice_id: cdktf.numberToTerraform(this._refdeviceId),
      refdevice_servicetag: cdktf.stringToTerraform(this._refdeviceServicetag),
      reftemplate_name: cdktf.stringToTerraform(this._reftemplateName),
      sleep_interval: cdktf.numberToTerraform(this._sleepInterval),
      view_type: cdktf.stringToTerraform(this._viewType),
      vlan: templateVlanToTerraform(this._vlan.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      attributes: {
        value: cdktf.listMapperHcl(templateAttributesToHclTerraform, false)(this._attributes.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TemplateAttributesList",
      },
      content: {
        value: cdktf.stringToHclTerraform(this._content),
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
      device_type: {
        value: cdktf.stringToHclTerraform(this._deviceType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fqdds: {
        value: cdktf.stringToHclTerraform(this._fqdds),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      identity_pool_name: {
        value: cdktf.stringToHclTerraform(this._identityPoolName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      job_retry_count: {
        value: cdktf.numberToHclTerraform(this._jobRetryCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      refdevice_id: {
        value: cdktf.numberToHclTerraform(this._refdeviceId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      refdevice_servicetag: {
        value: cdktf.stringToHclTerraform(this._refdeviceServicetag),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      reftemplate_name: {
        value: cdktf.stringToHclTerraform(this._reftemplateName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sleep_interval: {
        value: cdktf.numberToHclTerraform(this._sleepInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      view_type: {
        value: cdktf.stringToHclTerraform(this._viewType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vlan: {
        value: templateVlanToHclTerraform(this._vlan.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "TemplateVlan",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
