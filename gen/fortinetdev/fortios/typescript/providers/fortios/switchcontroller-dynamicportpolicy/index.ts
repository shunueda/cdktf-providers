// https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_dynamicportpolicy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SwitchcontrollerDynamicportpolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_dynamicportpolicy#description SwitchcontrollerDynamicportpolicy#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_dynamicportpolicy#dynamic_sort_subtable SwitchcontrollerDynamicportpolicy#dynamic_sort_subtable}
  */
  readonly dynamicSortSubtable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_dynamicportpolicy#fortilink SwitchcontrollerDynamicportpolicy#fortilink}
  */
  readonly fortilink?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_dynamicportpolicy#get_all_tables SwitchcontrollerDynamicportpolicy#get_all_tables}
  */
  readonly fetchAllTables?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_dynamicportpolicy#id SwitchcontrollerDynamicportpolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_dynamicportpolicy#name SwitchcontrollerDynamicportpolicy#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_dynamicportpolicy#vdomparam SwitchcontrollerDynamicportpolicy#vdomparam}
  */
  readonly vdomparam?: string;
  /**
  * policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_dynamicportpolicy#policy SwitchcontrollerDynamicportpolicy#policy}
  */
  readonly policy?: SwitchcontrollerDynamicportpolicyPolicy[] | cdktf.IResolvable;
}
export interface SwitchcontrollerDynamicportpolicyPolicyInterfaceTags {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_dynamicportpolicy#tag_name SwitchcontrollerDynamicportpolicy#tag_name}
  */
  readonly tagName?: string;
}

export function switchcontrollerDynamicportpolicyPolicyInterfaceTagsToTerraform(struct?: SwitchcontrollerDynamicportpolicyPolicyInterfaceTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    tag_name: cdktf.stringToTerraform(struct!.tagName),
  }
}


export function switchcontrollerDynamicportpolicyPolicyInterfaceTagsToHclTerraform(struct?: SwitchcontrollerDynamicportpolicyPolicyInterfaceTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    tag_name: {
      value: cdktf.stringToHclTerraform(struct!.tagName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SwitchcontrollerDynamicportpolicyPolicyInterfaceTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SwitchcontrollerDynamicportpolicyPolicyInterfaceTags | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._tagName !== undefined) {
      hasAnyValues = true;
      internalValueResult.tagName = this._tagName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SwitchcontrollerDynamicportpolicyPolicyInterfaceTags | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._tagName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._tagName = value.tagName;
    }
  }

  // tag_name - computed: false, optional: true, required: false
  private _tagName?: string; 
  public get tagName() {
    return this.getStringAttribute('tag_name');
  }
  public set tagName(value: string) {
    this._tagName = value;
  }
  public resetTagName() {
    this._tagName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagNameInput() {
    return this._tagName;
  }
}

export class SwitchcontrollerDynamicportpolicyPolicyInterfaceTagsList extends cdktf.ComplexList {
  public internalValue? : SwitchcontrollerDynamicportpolicyPolicyInterfaceTags[] | cdktf.IResolvable

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
  public get(index: number): SwitchcontrollerDynamicportpolicyPolicyInterfaceTagsOutputReference {
    return new SwitchcontrollerDynamicportpolicyPolicyInterfaceTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SwitchcontrollerDynamicportpolicyPolicy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_dynamicportpolicy#bounce_port_duration SwitchcontrollerDynamicportpolicy#bounce_port_duration}
  */
  readonly bouncePortDuration?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_dynamicportpolicy#bounce_port_link SwitchcontrollerDynamicportpolicy#bounce_port_link}
  */
  readonly bouncePortLink?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_dynamicportpolicy#category SwitchcontrollerDynamicportpolicy#category}
  */
  readonly category?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_dynamicportpolicy#description SwitchcontrollerDynamicportpolicy#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_dynamicportpolicy#family SwitchcontrollerDynamicportpolicy#family}
  */
  readonly family?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_dynamicportpolicy#host SwitchcontrollerDynamicportpolicy#host}
  */
  readonly host?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_dynamicportpolicy#hw_vendor SwitchcontrollerDynamicportpolicy#hw_vendor}
  */
  readonly hwVendor?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_dynamicportpolicy#lldp_profile SwitchcontrollerDynamicportpolicy#lldp_profile}
  */
  readonly lldpProfile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_dynamicportpolicy#mac SwitchcontrollerDynamicportpolicy#mac}
  */
  readonly mac?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_dynamicportpolicy#match_period SwitchcontrollerDynamicportpolicy#match_period}
  */
  readonly matchPeriod?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_dynamicportpolicy#match_remove SwitchcontrollerDynamicportpolicy#match_remove}
  */
  readonly matchRemove?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_dynamicportpolicy#match_type SwitchcontrollerDynamicportpolicy#match_type}
  */
  readonly matchType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_dynamicportpolicy#n802_1x SwitchcontrollerDynamicportpolicy#n802_1x}
  */
  readonly n8021X?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_dynamicportpolicy#name SwitchcontrollerDynamicportpolicy#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_dynamicportpolicy#poe_reset SwitchcontrollerDynamicportpolicy#poe_reset}
  */
  readonly poeReset?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_dynamicportpolicy#qos_policy SwitchcontrollerDynamicportpolicy#qos_policy}
  */
  readonly qosPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_dynamicportpolicy#status SwitchcontrollerDynamicportpolicy#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_dynamicportpolicy#type SwitchcontrollerDynamicportpolicy#type}
  */
  readonly type?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_dynamicportpolicy#vlan_policy SwitchcontrollerDynamicportpolicy#vlan_policy}
  */
  readonly vlanPolicy?: string;
  /**
  * interface_tags block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_dynamicportpolicy#interface_tags SwitchcontrollerDynamicportpolicy#interface_tags}
  */
  readonly interfaceTags?: SwitchcontrollerDynamicportpolicyPolicyInterfaceTags[] | cdktf.IResolvable;
}

export function switchcontrollerDynamicportpolicyPolicyToTerraform(struct?: SwitchcontrollerDynamicportpolicyPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bounce_port_duration: cdktf.numberToTerraform(struct!.bouncePortDuration),
    bounce_port_link: cdktf.stringToTerraform(struct!.bouncePortLink),
    category: cdktf.stringToTerraform(struct!.category),
    description: cdktf.stringToTerraform(struct!.description),
    family: cdktf.stringToTerraform(struct!.family),
    host: cdktf.stringToTerraform(struct!.host),
    hw_vendor: cdktf.stringToTerraform(struct!.hwVendor),
    lldp_profile: cdktf.stringToTerraform(struct!.lldpProfile),
    mac: cdktf.stringToTerraform(struct!.mac),
    match_period: cdktf.numberToTerraform(struct!.matchPeriod),
    match_remove: cdktf.stringToTerraform(struct!.matchRemove),
    match_type: cdktf.stringToTerraform(struct!.matchType),
    n802_1x: cdktf.stringToTerraform(struct!.n8021X),
    name: cdktf.stringToTerraform(struct!.name),
    poe_reset: cdktf.stringToTerraform(struct!.poeReset),
    qos_policy: cdktf.stringToTerraform(struct!.qosPolicy),
    status: cdktf.stringToTerraform(struct!.status),
    type: cdktf.stringToTerraform(struct!.type),
    vlan_policy: cdktf.stringToTerraform(struct!.vlanPolicy),
    interface_tags: cdktf.listMapper(switchcontrollerDynamicportpolicyPolicyInterfaceTagsToTerraform, true)(struct!.interfaceTags),
  }
}


export function switchcontrollerDynamicportpolicyPolicyToHclTerraform(struct?: SwitchcontrollerDynamicportpolicyPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bounce_port_duration: {
      value: cdktf.numberToHclTerraform(struct!.bouncePortDuration),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    bounce_port_link: {
      value: cdktf.stringToHclTerraform(struct!.bouncePortLink),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    category: {
      value: cdktf.stringToHclTerraform(struct!.category),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    family: {
      value: cdktf.stringToHclTerraform(struct!.family),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    host: {
      value: cdktf.stringToHclTerraform(struct!.host),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hw_vendor: {
      value: cdktf.stringToHclTerraform(struct!.hwVendor),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    lldp_profile: {
      value: cdktf.stringToHclTerraform(struct!.lldpProfile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mac: {
      value: cdktf.stringToHclTerraform(struct!.mac),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    match_period: {
      value: cdktf.numberToHclTerraform(struct!.matchPeriod),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    match_remove: {
      value: cdktf.stringToHclTerraform(struct!.matchRemove),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    match_type: {
      value: cdktf.stringToHclTerraform(struct!.matchType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    n802_1x: {
      value: cdktf.stringToHclTerraform(struct!.n8021X),
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
    poe_reset: {
      value: cdktf.stringToHclTerraform(struct!.poeReset),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    qos_policy: {
      value: cdktf.stringToHclTerraform(struct!.qosPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    status: {
      value: cdktf.stringToHclTerraform(struct!.status),
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
    vlan_policy: {
      value: cdktf.stringToHclTerraform(struct!.vlanPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    interface_tags: {
      value: cdktf.listMapperHcl(switchcontrollerDynamicportpolicyPolicyInterfaceTagsToHclTerraform, true)(struct!.interfaceTags),
      isBlock: true,
      type: "set",
      storageClassType: "SwitchcontrollerDynamicportpolicyPolicyInterfaceTagsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SwitchcontrollerDynamicportpolicyPolicyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SwitchcontrollerDynamicportpolicyPolicy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bouncePortDuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.bouncePortDuration = this._bouncePortDuration;
    }
    if (this._bouncePortLink !== undefined) {
      hasAnyValues = true;
      internalValueResult.bouncePortLink = this._bouncePortLink;
    }
    if (this._category !== undefined) {
      hasAnyValues = true;
      internalValueResult.category = this._category;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._family !== undefined) {
      hasAnyValues = true;
      internalValueResult.family = this._family;
    }
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._hwVendor !== undefined) {
      hasAnyValues = true;
      internalValueResult.hwVendor = this._hwVendor;
    }
    if (this._lldpProfile !== undefined) {
      hasAnyValues = true;
      internalValueResult.lldpProfile = this._lldpProfile;
    }
    if (this._mac !== undefined) {
      hasAnyValues = true;
      internalValueResult.mac = this._mac;
    }
    if (this._matchPeriod !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchPeriod = this._matchPeriod;
    }
    if (this._matchRemove !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchRemove = this._matchRemove;
    }
    if (this._matchType !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchType = this._matchType;
    }
    if (this._n8021X !== undefined) {
      hasAnyValues = true;
      internalValueResult.n8021X = this._n8021X;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._poeReset !== undefined) {
      hasAnyValues = true;
      internalValueResult.poeReset = this._poeReset;
    }
    if (this._qosPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.qosPolicy = this._qosPolicy;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._vlanPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.vlanPolicy = this._vlanPolicy;
    }
    if (this._interfaceTags?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.interfaceTags = this._interfaceTags?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SwitchcontrollerDynamicportpolicyPolicy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bouncePortDuration = undefined;
      this._bouncePortLink = undefined;
      this._category = undefined;
      this._description = undefined;
      this._family = undefined;
      this._host = undefined;
      this._hwVendor = undefined;
      this._lldpProfile = undefined;
      this._mac = undefined;
      this._matchPeriod = undefined;
      this._matchRemove = undefined;
      this._matchType = undefined;
      this._n8021X = undefined;
      this._name = undefined;
      this._poeReset = undefined;
      this._qosPolicy = undefined;
      this._status = undefined;
      this._type = undefined;
      this._vlanPolicy = undefined;
      this._interfaceTags.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bouncePortDuration = value.bouncePortDuration;
      this._bouncePortLink = value.bouncePortLink;
      this._category = value.category;
      this._description = value.description;
      this._family = value.family;
      this._host = value.host;
      this._hwVendor = value.hwVendor;
      this._lldpProfile = value.lldpProfile;
      this._mac = value.mac;
      this._matchPeriod = value.matchPeriod;
      this._matchRemove = value.matchRemove;
      this._matchType = value.matchType;
      this._n8021X = value.n8021X;
      this._name = value.name;
      this._poeReset = value.poeReset;
      this._qosPolicy = value.qosPolicy;
      this._status = value.status;
      this._type = value.type;
      this._vlanPolicy = value.vlanPolicy;
      this._interfaceTags.internalValue = value.interfaceTags;
    }
  }

  // bounce_port_duration - computed: true, optional: true, required: false
  private _bouncePortDuration?: number; 
  public get bouncePortDuration() {
    return this.getNumberAttribute('bounce_port_duration');
  }
  public set bouncePortDuration(value: number) {
    this._bouncePortDuration = value;
  }
  public resetBouncePortDuration() {
    this._bouncePortDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bouncePortDurationInput() {
    return this._bouncePortDuration;
  }

  // bounce_port_link - computed: true, optional: true, required: false
  private _bouncePortLink?: string; 
  public get bouncePortLink() {
    return this.getStringAttribute('bounce_port_link');
  }
  public set bouncePortLink(value: string) {
    this._bouncePortLink = value;
  }
  public resetBouncePortLink() {
    this._bouncePortLink = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bouncePortLinkInput() {
    return this._bouncePortLink;
  }

  // category - computed: true, optional: true, required: false
  private _category?: string; 
  public get category() {
    return this.getStringAttribute('category');
  }
  public set category(value: string) {
    this._category = value;
  }
  public resetCategory() {
    this._category = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categoryInput() {
    return this._category;
  }

  // description - computed: false, optional: true, required: false
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

  // family - computed: false, optional: true, required: false
  private _family?: string; 
  public get family() {
    return this.getStringAttribute('family');
  }
  public set family(value: string) {
    this._family = value;
  }
  public resetFamily() {
    this._family = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get familyInput() {
    return this._family;
  }

  // host - computed: false, optional: true, required: false
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  public resetHost() {
    this._host = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
  }

  // hw_vendor - computed: false, optional: true, required: false
  private _hwVendor?: string; 
  public get hwVendor() {
    return this.getStringAttribute('hw_vendor');
  }
  public set hwVendor(value: string) {
    this._hwVendor = value;
  }
  public resetHwVendor() {
    this._hwVendor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hwVendorInput() {
    return this._hwVendor;
  }

  // lldp_profile - computed: false, optional: true, required: false
  private _lldpProfile?: string; 
  public get lldpProfile() {
    return this.getStringAttribute('lldp_profile');
  }
  public set lldpProfile(value: string) {
    this._lldpProfile = value;
  }
  public resetLldpProfile() {
    this._lldpProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lldpProfileInput() {
    return this._lldpProfile;
  }

  // mac - computed: false, optional: true, required: false
  private _mac?: string; 
  public get mac() {
    return this.getStringAttribute('mac');
  }
  public set mac(value: string) {
    this._mac = value;
  }
  public resetMac() {
    this._mac = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get macInput() {
    return this._mac;
  }

  // match_period - computed: false, optional: true, required: false
  private _matchPeriod?: number; 
  public get matchPeriod() {
    return this.getNumberAttribute('match_period');
  }
  public set matchPeriod(value: number) {
    this._matchPeriod = value;
  }
  public resetMatchPeriod() {
    this._matchPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchPeriodInput() {
    return this._matchPeriod;
  }

  // match_remove - computed: true, optional: true, required: false
  private _matchRemove?: string; 
  public get matchRemove() {
    return this.getStringAttribute('match_remove');
  }
  public set matchRemove(value: string) {
    this._matchRemove = value;
  }
  public resetMatchRemove() {
    this._matchRemove = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchRemoveInput() {
    return this._matchRemove;
  }

  // match_type - computed: true, optional: true, required: false
  private _matchType?: string; 
  public get matchType() {
    return this.getStringAttribute('match_type');
  }
  public set matchType(value: string) {
    this._matchType = value;
  }
  public resetMatchType() {
    this._matchType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchTypeInput() {
    return this._matchType;
  }

  // n802_1x - computed: false, optional: true, required: false
  private _n8021X?: string; 
  public get n8021X() {
    return this.getStringAttribute('n802_1x');
  }
  public set n8021X(value: string) {
    this._n8021X = value;
  }
  public resetN8021X() {
    this._n8021X = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get n8021XInput() {
    return this._n8021X;
  }

  // name - computed: false, optional: true, required: false
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

  // poe_reset - computed: true, optional: true, required: false
  private _poeReset?: string; 
  public get poeReset() {
    return this.getStringAttribute('poe_reset');
  }
  public set poeReset(value: string) {
    this._poeReset = value;
  }
  public resetPoeReset() {
    this._poeReset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get poeResetInput() {
    return this._poeReset;
  }

  // qos_policy - computed: false, optional: true, required: false
  private _qosPolicy?: string; 
  public get qosPolicy() {
    return this.getStringAttribute('qos_policy');
  }
  public set qosPolicy(value: string) {
    this._qosPolicy = value;
  }
  public resetQosPolicy() {
    this._qosPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get qosPolicyInput() {
    return this._qosPolicy;
  }

  // status - computed: true, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
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

  // vlan_policy - computed: false, optional: true, required: false
  private _vlanPolicy?: string; 
  public get vlanPolicy() {
    return this.getStringAttribute('vlan_policy');
  }
  public set vlanPolicy(value: string) {
    this._vlanPolicy = value;
  }
  public resetVlanPolicy() {
    this._vlanPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanPolicyInput() {
    return this._vlanPolicy;
  }

  // interface_tags - computed: false, optional: true, required: false
  private _interfaceTags = new SwitchcontrollerDynamicportpolicyPolicyInterfaceTagsList(this, "interface_tags", true);
  public get interfaceTags() {
    return this._interfaceTags;
  }
  public putInterfaceTags(value: SwitchcontrollerDynamicportpolicyPolicyInterfaceTags[] | cdktf.IResolvable) {
    this._interfaceTags.internalValue = value;
  }
  public resetInterfaceTags() {
    this._interfaceTags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceTagsInput() {
    return this._interfaceTags.internalValue;
  }
}

export class SwitchcontrollerDynamicportpolicyPolicyList extends cdktf.ComplexList {
  public internalValue? : SwitchcontrollerDynamicportpolicyPolicy[] | cdktf.IResolvable

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
  public get(index: number): SwitchcontrollerDynamicportpolicyPolicyOutputReference {
    return new SwitchcontrollerDynamicportpolicyPolicyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_dynamicportpolicy fortios_switchcontroller_dynamicportpolicy}
*/
export class SwitchcontrollerDynamicportpolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortios_switchcontroller_dynamicportpolicy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SwitchcontrollerDynamicportpolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SwitchcontrollerDynamicportpolicy to import
  * @param importFromId The id of the existing SwitchcontrollerDynamicportpolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_dynamicportpolicy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SwitchcontrollerDynamicportpolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortios_switchcontroller_dynamicportpolicy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_dynamicportpolicy fortios_switchcontroller_dynamicportpolicy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SwitchcontrollerDynamicportpolicyConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SwitchcontrollerDynamicportpolicyConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fortios_switchcontroller_dynamicportpolicy',
      terraformGeneratorMetadata: {
        providerName: 'fortios',
        providerVersion: '1.23.0',
        providerVersionConstraint: '1.23.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._description = config.description;
    this._dynamicSortSubtable = config.dynamicSortSubtable;
    this._fortilink = config.fortilink;
    this._getAllTables = config.fetchAllTables;
    this._id = config.id;
    this._name = config.name;
    this._vdomparam = config.vdomparam;
    this._policy.internalValue = config.policy;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: false, optional: true, required: false
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

  // dynamic_sort_subtable - computed: false, optional: true, required: false
  private _dynamicSortSubtable?: string; 
  public get dynamicSortSubtable() {
    return this.getStringAttribute('dynamic_sort_subtable');
  }
  public set dynamicSortSubtable(value: string) {
    this._dynamicSortSubtable = value;
  }
  public resetDynamicSortSubtable() {
    this._dynamicSortSubtable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamicSortSubtableInput() {
    return this._dynamicSortSubtable;
  }

  // fortilink - computed: true, optional: true, required: false
  private _fortilink?: string; 
  public get fortilink() {
    return this.getStringAttribute('fortilink');
  }
  public set fortilink(value: string) {
    this._fortilink = value;
  }
  public resetFortilink() {
    this._fortilink = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fortilinkInput() {
    return this._fortilink;
  }

  // get_all_tables - computed: false, optional: true, required: false
  private _getAllTables?: string; 
  public get fetchAllTables() {
    return this.getStringAttribute('get_all_tables');
  }
  public set fetchAllTables(value: string) {
    this._getAllTables = value;
  }
  public resetFetchAllTables() {
    this._getAllTables = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fetchAllTablesInput() {
    return this._getAllTables;
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

  // vdomparam - computed: true, optional: true, required: false
  private _vdomparam?: string; 
  public get vdomparam() {
    return this.getStringAttribute('vdomparam');
  }
  public set vdomparam(value: string) {
    this._vdomparam = value;
  }
  public resetVdomparam() {
    this._vdomparam = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vdomparamInput() {
    return this._vdomparam;
  }

  // policy - computed: false, optional: true, required: false
  private _policy = new SwitchcontrollerDynamicportpolicyPolicyList(this, "policy", false);
  public get policy() {
    return this._policy;
  }
  public putPolicy(value: SwitchcontrollerDynamicportpolicyPolicy[] | cdktf.IResolvable) {
    this._policy.internalValue = value;
  }
  public resetPolicy() {
    this._policy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyInput() {
    return this._policy.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      dynamic_sort_subtable: cdktf.stringToTerraform(this._dynamicSortSubtable),
      fortilink: cdktf.stringToTerraform(this._fortilink),
      get_all_tables: cdktf.stringToTerraform(this._getAllTables),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      vdomparam: cdktf.stringToTerraform(this._vdomparam),
      policy: cdktf.listMapper(switchcontrollerDynamicportpolicyPolicyToTerraform, true)(this._policy.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dynamic_sort_subtable: {
        value: cdktf.stringToHclTerraform(this._dynamicSortSubtable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fortilink: {
        value: cdktf.stringToHclTerraform(this._fortilink),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      get_all_tables: {
        value: cdktf.stringToHclTerraform(this._getAllTables),
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
      vdomparam: {
        value: cdktf.stringToHclTerraform(this._vdomparam),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      policy: {
        value: cdktf.listMapperHcl(switchcontrollerDynamicportpolicyPolicyToHclTerraform, true)(this._policy.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SwitchcontrollerDynamicportpolicyPolicyList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
