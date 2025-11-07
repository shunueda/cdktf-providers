// https://registry.terraform.io/providers/dell/ome/1.2.3/docs/data-sources/template_info
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOmeTemplateInfoConfig extends cdktf.TerraformMetaArguments {
  /**
  * List of attributes associated with template.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/ome/1.2.3/docs/data-sources/template_info#attributes DataOmeTemplateInfo#attributes}
  */
  readonly attributes?: DataOmeTemplateInfoAttributes[] | cdktf.IResolvable;
  /**
  * The XML content of template from which the template will be created
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/ome/1.2.3/docs/data-sources/template_info#content DataOmeTemplateInfo#content}
  */
  readonly content?: string;
  /**
  * Description for the template.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/ome/1.2.3/docs/data-sources/template_info#description DataOmeTemplateInfo#description}
  */
  readonly description?: string;
  /**
  * ID of the template data source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/ome/1.2.3/docs/data-sources/template_info#id DataOmeTemplateInfo#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name of the template.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/ome/1.2.3/docs/data-sources/template_info#name DataOmeTemplateInfo#name}
  */
  readonly name: string;
  /**
  * Target device id from which the template is created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/ome/1.2.3/docs/data-sources/template_info#refdevice_id DataOmeTemplateInfo#refdevice_id}
  */
  readonly refdeviceId?: number;
  /**
  * VLAN details to be attached with template.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/ome/1.2.3/docs/data-sources/template_info#vlan DataOmeTemplateInfo#vlan}
  */
  readonly vlan?: DataOmeTemplateInfoVlan;
}
export interface DataOmeTemplateInfoAttributes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/ome/1.2.3/docs/data-sources/template_info#attribute_id DataOmeTemplateInfo#attribute_id}
  */
  readonly attributeId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/ome/1.2.3/docs/data-sources/template_info#display_name DataOmeTemplateInfo#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/ome/1.2.3/docs/data-sources/template_info#is_ignored DataOmeTemplateInfo#is_ignored}
  */
  readonly isIgnored?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/ome/1.2.3/docs/data-sources/template_info#value DataOmeTemplateInfo#value}
  */
  readonly value?: string;
}

export function dataOmeTemplateInfoAttributesToTerraform(struct?: DataOmeTemplateInfoAttributes | cdktf.IResolvable): any {
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


export function dataOmeTemplateInfoAttributesToHclTerraform(struct?: DataOmeTemplateInfoAttributes | cdktf.IResolvable): any {
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

export class DataOmeTemplateInfoAttributesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOmeTemplateInfoAttributes | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataOmeTemplateInfoAttributes | cdktf.IResolvable | undefined) {
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

export class DataOmeTemplateInfoAttributesList extends cdktf.ComplexList {
  public internalValue? : DataOmeTemplateInfoAttributes[] | cdktf.IResolvable

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
  public get(index: number): DataOmeTemplateInfoAttributesOutputReference {
    return new DataOmeTemplateInfoAttributesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOmeTemplateInfoVlanVlanAttributes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/ome/1.2.3/docs/data-sources/template_info#is_nic_bonded DataOmeTemplateInfo#is_nic_bonded}
  */
  readonly isNicBonded?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/ome/1.2.3/docs/data-sources/template_info#nic_identifier DataOmeTemplateInfo#nic_identifier}
  */
  readonly nicIdentifier?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/ome/1.2.3/docs/data-sources/template_info#port DataOmeTemplateInfo#port}
  */
  readonly port?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/ome/1.2.3/docs/data-sources/template_info#tagged_networks DataOmeTemplateInfo#tagged_networks}
  */
  readonly taggedNetworks?: number[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/ome/1.2.3/docs/data-sources/template_info#untagged_network DataOmeTemplateInfo#untagged_network}
  */
  readonly untaggedNetwork?: number;
}

export function dataOmeTemplateInfoVlanVlanAttributesToTerraform(struct?: DataOmeTemplateInfoVlanVlanAttributes | cdktf.IResolvable): any {
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


export function dataOmeTemplateInfoVlanVlanAttributesToHclTerraform(struct?: DataOmeTemplateInfoVlanVlanAttributes | cdktf.IResolvable): any {
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
      type: "list",
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

export class DataOmeTemplateInfoVlanVlanAttributesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOmeTemplateInfoVlanVlanAttributes | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataOmeTemplateInfoVlanVlanAttributes | cdktf.IResolvable | undefined) {
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
    return this.getNumberListAttribute('tagged_networks');
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

export class DataOmeTemplateInfoVlanVlanAttributesList extends cdktf.ComplexList {
  public internalValue? : DataOmeTemplateInfoVlanVlanAttributes[] | cdktf.IResolvable

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
  public get(index: number): DataOmeTemplateInfoVlanVlanAttributesOutputReference {
    return new DataOmeTemplateInfoVlanVlanAttributesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOmeTemplateInfoVlan {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/ome/1.2.3/docs/data-sources/template_info#bonding_technology DataOmeTemplateInfo#bonding_technology}
  */
  readonly bondingTechnology?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/ome/1.2.3/docs/data-sources/template_info#propogate_vlan DataOmeTemplateInfo#propogate_vlan}
  */
  readonly propogateVlan?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/ome/1.2.3/docs/data-sources/template_info#vlan_attributes DataOmeTemplateInfo#vlan_attributes}
  */
  readonly vlanAttributes?: DataOmeTemplateInfoVlanVlanAttributes[] | cdktf.IResolvable;
}

export function dataOmeTemplateInfoVlanToTerraform(struct?: DataOmeTemplateInfoVlan | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bonding_technology: cdktf.stringToTerraform(struct!.bondingTechnology),
    propogate_vlan: cdktf.booleanToTerraform(struct!.propogateVlan),
    vlan_attributes: cdktf.listMapper(dataOmeTemplateInfoVlanVlanAttributesToTerraform, false)(struct!.vlanAttributes),
  }
}


export function dataOmeTemplateInfoVlanToHclTerraform(struct?: DataOmeTemplateInfoVlan | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(dataOmeTemplateInfoVlanVlanAttributesToHclTerraform, false)(struct!.vlanAttributes),
      isBlock: true,
      type: "list",
      storageClassType: "DataOmeTemplateInfoVlanVlanAttributesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataOmeTemplateInfoVlanOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataOmeTemplateInfoVlan | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataOmeTemplateInfoVlan | cdktf.IResolvable | undefined) {
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
  private _vlanAttributes = new DataOmeTemplateInfoVlanVlanAttributesList(this, "vlan_attributes", false);
  public get vlanAttributes() {
    return this._vlanAttributes;
  }
  public putVlanAttributes(value: DataOmeTemplateInfoVlanVlanAttributes[] | cdktf.IResolvable) {
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
* Represents a {@link https://registry.terraform.io/providers/dell/ome/1.2.3/docs/data-sources/template_info ome_template_info}
*/
export class DataOmeTemplateInfo extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ome_template_info";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOmeTemplateInfo resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOmeTemplateInfo to import
  * @param importFromId The id of the existing DataOmeTemplateInfo that should be imported. Refer to the {@link https://registry.terraform.io/providers/dell/ome/1.2.3/docs/data-sources/template_info#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOmeTemplateInfo to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ome_template_info", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dell/ome/1.2.3/docs/data-sources/template_info ome_template_info} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOmeTemplateInfoConfig
  */
  public constructor(scope: Construct, id: string, config: DataOmeTemplateInfoConfig) {
    super(scope, id, {
      terraformResourceType: 'ome_template_info',
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
    this._id = config.id;
    this._name = config.name;
    this._refdeviceId = config.refdeviceId;
    this._vlan.internalValue = config.vlan;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // attributes - computed: true, optional: true, required: false
  private _attributes = new DataOmeTemplateInfoAttributesList(this, "attributes", false);
  public get attributes() {
    return this._attributes;
  }
  public putAttributes(value: DataOmeTemplateInfoAttributes[] | cdktf.IResolvable) {
    this._attributes.internalValue = value;
  }
  public resetAttributes() {
    this._attributes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributesInput() {
    return this._attributes.internalValue;
  }

  // content - computed: false, optional: true, required: false
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

  // device_type_id - computed: true, optional: false, required: false
  public get deviceTypeId() {
    return this.getNumberAttribute('device_type_id');
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

  // identity_pool_id - computed: true, optional: false, required: false
  public get identityPoolId() {
    return this.getNumberAttribute('identity_pool_id');
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

  // view_type_id - computed: true, optional: false, required: false
  public get viewTypeId() {
    return this.getNumberAttribute('view_type_id');
  }

  // vlan - computed: true, optional: true, required: false
  private _vlan = new DataOmeTemplateInfoVlanOutputReference(this, "vlan");
  public get vlan() {
    return this._vlan;
  }
  public putVlan(value: DataOmeTemplateInfoVlan) {
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
      attributes: cdktf.listMapper(dataOmeTemplateInfoAttributesToTerraform, false)(this._attributes.internalValue),
      content: cdktf.stringToTerraform(this._content),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      refdevice_id: cdktf.numberToTerraform(this._refdeviceId),
      vlan: dataOmeTemplateInfoVlanToTerraform(this._vlan.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      attributes: {
        value: cdktf.listMapperHcl(dataOmeTemplateInfoAttributesToHclTerraform, false)(this._attributes.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataOmeTemplateInfoAttributesList",
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
      refdevice_id: {
        value: cdktf.numberToHclTerraform(this._refdeviceId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      vlan: {
        value: dataOmeTemplateInfoVlanToHclTerraform(this._vlan.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataOmeTemplateInfoVlan",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
