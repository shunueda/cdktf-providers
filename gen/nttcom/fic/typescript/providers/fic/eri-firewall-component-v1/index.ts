// https://registry.terraform.io/providers/nttcom/fic/0.5.6/docs/resources/eri_firewall_component_v1
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface EriFirewallComponentV1Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/fic/0.5.6/docs/resources/eri_firewall_component_v1#firewall_id EriFirewallComponentV1#firewall_id}
  */
  readonly firewallId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/fic/0.5.6/docs/resources/eri_firewall_component_v1#id EriFirewallComponentV1#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/fic/0.5.6/docs/resources/eri_firewall_component_v1#router_id EriFirewallComponentV1#router_id}
  */
  readonly routerId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/fic/0.5.6/docs/resources/eri_firewall_component_v1#user_ip_addresses EriFirewallComponentV1#user_ip_addresses}
  */
  readonly userIpAddresses: string[];
  /**
  * application_sets block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/fic/0.5.6/docs/resources/eri_firewall_component_v1#application_sets EriFirewallComponentV1#application_sets}
  */
  readonly applicationSets?: EriFirewallComponentV1ApplicationSets[] | cdktf.IResolvable;
  /**
  * custom_applications block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/fic/0.5.6/docs/resources/eri_firewall_component_v1#custom_applications EriFirewallComponentV1#custom_applications}
  */
  readonly customApplications?: EriFirewallComponentV1CustomApplications[] | cdktf.IResolvable;
  /**
  * routing_group_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/fic/0.5.6/docs/resources/eri_firewall_component_v1#routing_group_settings EriFirewallComponentV1#routing_group_settings}
  */
  readonly routingGroupSettings?: EriFirewallComponentV1RoutingGroupSettings[] | cdktf.IResolvable;
  /**
  * rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/fic/0.5.6/docs/resources/eri_firewall_component_v1#rules EriFirewallComponentV1#rules}
  */
  readonly rules?: EriFirewallComponentV1Rules[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/fic/0.5.6/docs/resources/eri_firewall_component_v1#timeouts EriFirewallComponentV1#timeouts}
  */
  readonly timeouts?: EriFirewallComponentV1Timeouts;
}
export interface EriFirewallComponentV1ApplicationSets {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/fic/0.5.6/docs/resources/eri_firewall_component_v1#applications EriFirewallComponentV1#applications}
  */
  readonly applications: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/fic/0.5.6/docs/resources/eri_firewall_component_v1#name EriFirewallComponentV1#name}
  */
  readonly name: string;
}

export function eriFirewallComponentV1ApplicationSetsToTerraform(struct?: EriFirewallComponentV1ApplicationSets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    applications: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.applications),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function eriFirewallComponentV1ApplicationSetsToHclTerraform(struct?: EriFirewallComponentV1ApplicationSets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    applications: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.applications),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EriFirewallComponentV1ApplicationSetsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EriFirewallComponentV1ApplicationSets | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._applications !== undefined) {
      hasAnyValues = true;
      internalValueResult.applications = this._applications;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EriFirewallComponentV1ApplicationSets | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._applications = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._applications = value.applications;
      this._name = value.name;
    }
  }

  // applications - computed: false, optional: false, required: true
  private _applications?: string[]; 
  public get applications() {
    return this.getListAttribute('applications');
  }
  public set applications(value: string[]) {
    this._applications = value;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationsInput() {
    return this._applications;
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
}

export class EriFirewallComponentV1ApplicationSetsList extends cdktf.ComplexList {
  public internalValue? : EriFirewallComponentV1ApplicationSets[] | cdktf.IResolvable

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
  public get(index: number): EriFirewallComponentV1ApplicationSetsOutputReference {
    return new EriFirewallComponentV1ApplicationSetsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EriFirewallComponentV1CustomApplications {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/fic/0.5.6/docs/resources/eri_firewall_component_v1#destination_port EriFirewallComponentV1#destination_port}
  */
  readonly destinationPort: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/fic/0.5.6/docs/resources/eri_firewall_component_v1#name EriFirewallComponentV1#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/fic/0.5.6/docs/resources/eri_firewall_component_v1#protocol EriFirewallComponentV1#protocol}
  */
  readonly protocol: string;
}

export function eriFirewallComponentV1CustomApplicationsToTerraform(struct?: EriFirewallComponentV1CustomApplications | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    destination_port: cdktf.stringToTerraform(struct!.destinationPort),
    name: cdktf.stringToTerraform(struct!.name),
    protocol: cdktf.stringToTerraform(struct!.protocol),
  }
}


export function eriFirewallComponentV1CustomApplicationsToHclTerraform(struct?: EriFirewallComponentV1CustomApplications | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    destination_port: {
      value: cdktf.stringToHclTerraform(struct!.destinationPort),
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

export class EriFirewallComponentV1CustomApplicationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EriFirewallComponentV1CustomApplications | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._destinationPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationPort = this._destinationPort;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EriFirewallComponentV1CustomApplications | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._destinationPort = undefined;
      this._name = undefined;
      this._protocol = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._destinationPort = value.destinationPort;
      this._name = value.name;
      this._protocol = value.protocol;
    }
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

export class EriFirewallComponentV1CustomApplicationsList extends cdktf.ComplexList {
  public internalValue? : EriFirewallComponentV1CustomApplications[] | cdktf.IResolvable

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
  public get(index: number): EriFirewallComponentV1CustomApplicationsOutputReference {
    return new EriFirewallComponentV1CustomApplicationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EriFirewallComponentV1RoutingGroupSettingsAddressSets {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/fic/0.5.6/docs/resources/eri_firewall_component_v1#addresses EriFirewallComponentV1#addresses}
  */
  readonly addresses: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/fic/0.5.6/docs/resources/eri_firewall_component_v1#name EriFirewallComponentV1#name}
  */
  readonly name: string;
}

export function eriFirewallComponentV1RoutingGroupSettingsAddressSetsToTerraform(struct?: EriFirewallComponentV1RoutingGroupSettingsAddressSets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    addresses: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.addresses),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function eriFirewallComponentV1RoutingGroupSettingsAddressSetsToHclTerraform(struct?: EriFirewallComponentV1RoutingGroupSettingsAddressSets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    addresses: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.addresses),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EriFirewallComponentV1RoutingGroupSettingsAddressSetsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EriFirewallComponentV1RoutingGroupSettingsAddressSets | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addresses !== undefined) {
      hasAnyValues = true;
      internalValueResult.addresses = this._addresses;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EriFirewallComponentV1RoutingGroupSettingsAddressSets | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._addresses = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._addresses = value.addresses;
      this._name = value.name;
    }
  }

  // addresses - computed: false, optional: false, required: true
  private _addresses?: string[]; 
  public get addresses() {
    return this.getListAttribute('addresses');
  }
  public set addresses(value: string[]) {
    this._addresses = value;
  }
  // Temporarily expose input value. Use with caution.
  public get addressesInput() {
    return this._addresses;
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
}

export class EriFirewallComponentV1RoutingGroupSettingsAddressSetsList extends cdktf.ComplexList {
  public internalValue? : EriFirewallComponentV1RoutingGroupSettingsAddressSets[] | cdktf.IResolvable

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
  public get(index: number): EriFirewallComponentV1RoutingGroupSettingsAddressSetsOutputReference {
    return new EriFirewallComponentV1RoutingGroupSettingsAddressSetsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EriFirewallComponentV1RoutingGroupSettings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/fic/0.5.6/docs/resources/eri_firewall_component_v1#group_name EriFirewallComponentV1#group_name}
  */
  readonly groupName: string;
  /**
  * address_sets block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/fic/0.5.6/docs/resources/eri_firewall_component_v1#address_sets EriFirewallComponentV1#address_sets}
  */
  readonly addressSets: EriFirewallComponentV1RoutingGroupSettingsAddressSets[] | cdktf.IResolvable;
}

export function eriFirewallComponentV1RoutingGroupSettingsToTerraform(struct?: EriFirewallComponentV1RoutingGroupSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    group_name: cdktf.stringToTerraform(struct!.groupName),
    address_sets: cdktf.listMapper(eriFirewallComponentV1RoutingGroupSettingsAddressSetsToTerraform, true)(struct!.addressSets),
  }
}


export function eriFirewallComponentV1RoutingGroupSettingsToHclTerraform(struct?: EriFirewallComponentV1RoutingGroupSettings | cdktf.IResolvable): any {
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
    address_sets: {
      value: cdktf.listMapperHcl(eriFirewallComponentV1RoutingGroupSettingsAddressSetsToHclTerraform, true)(struct!.addressSets),
      isBlock: true,
      type: "list",
      storageClassType: "EriFirewallComponentV1RoutingGroupSettingsAddressSetsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EriFirewallComponentV1RoutingGroupSettingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EriFirewallComponentV1RoutingGroupSettings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._groupName !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupName = this._groupName;
    }
    if (this._addressSets?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.addressSets = this._addressSets?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EriFirewallComponentV1RoutingGroupSettings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._groupName = undefined;
      this._addressSets.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._groupName = value.groupName;
      this._addressSets.internalValue = value.addressSets;
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

  // address_sets - computed: false, optional: false, required: true
  private _addressSets = new EriFirewallComponentV1RoutingGroupSettingsAddressSetsList(this, "address_sets", false);
  public get addressSets() {
    return this._addressSets;
  }
  public putAddressSets(value: EriFirewallComponentV1RoutingGroupSettingsAddressSets[] | cdktf.IResolvable) {
    this._addressSets.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get addressSetsInput() {
    return this._addressSets.internalValue;
  }
}

export class EriFirewallComponentV1RoutingGroupSettingsList extends cdktf.ComplexList {
  public internalValue? : EriFirewallComponentV1RoutingGroupSettings[] | cdktf.IResolvable

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
  public get(index: number): EriFirewallComponentV1RoutingGroupSettingsOutputReference {
    return new EriFirewallComponentV1RoutingGroupSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EriFirewallComponentV1RulesEntries {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/fic/0.5.6/docs/resources/eri_firewall_component_v1#action EriFirewallComponentV1#action}
  */
  readonly action: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/fic/0.5.6/docs/resources/eri_firewall_component_v1#match_application EriFirewallComponentV1#match_application}
  */
  readonly matchApplication: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/fic/0.5.6/docs/resources/eri_firewall_component_v1#match_destination_address_sets EriFirewallComponentV1#match_destination_address_sets}
  */
  readonly matchDestinationAddressSets: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/fic/0.5.6/docs/resources/eri_firewall_component_v1#match_source_address_sets EriFirewallComponentV1#match_source_address_sets}
  */
  readonly matchSourceAddressSets: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/fic/0.5.6/docs/resources/eri_firewall_component_v1#name EriFirewallComponentV1#name}
  */
  readonly name: string;
}

export function eriFirewallComponentV1RulesEntriesToTerraform(struct?: EriFirewallComponentV1RulesEntries | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    match_application: cdktf.stringToTerraform(struct!.matchApplication),
    match_destination_address_sets: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.matchDestinationAddressSets),
    match_source_address_sets: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.matchSourceAddressSets),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function eriFirewallComponentV1RulesEntriesToHclTerraform(struct?: EriFirewallComponentV1RulesEntries | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    match_application: {
      value: cdktf.stringToHclTerraform(struct!.matchApplication),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    match_destination_address_sets: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.matchDestinationAddressSets),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    match_source_address_sets: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.matchSourceAddressSets),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EriFirewallComponentV1RulesEntriesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EriFirewallComponentV1RulesEntries | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._matchApplication !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchApplication = this._matchApplication;
    }
    if (this._matchDestinationAddressSets !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchDestinationAddressSets = this._matchDestinationAddressSets;
    }
    if (this._matchSourceAddressSets !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchSourceAddressSets = this._matchSourceAddressSets;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EriFirewallComponentV1RulesEntries | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._matchApplication = undefined;
      this._matchDestinationAddressSets = undefined;
      this._matchSourceAddressSets = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._matchApplication = value.matchApplication;
      this._matchDestinationAddressSets = value.matchDestinationAddressSets;
      this._matchSourceAddressSets = value.matchSourceAddressSets;
      this._name = value.name;
    }
  }

  // action - computed: false, optional: false, required: true
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // match_application - computed: false, optional: false, required: true
  private _matchApplication?: string; 
  public get matchApplication() {
    return this.getStringAttribute('match_application');
  }
  public set matchApplication(value: string) {
    this._matchApplication = value;
  }
  // Temporarily expose input value. Use with caution.
  public get matchApplicationInput() {
    return this._matchApplication;
  }

  // match_destination_address_sets - computed: false, optional: false, required: true
  private _matchDestinationAddressSets?: string[]; 
  public get matchDestinationAddressSets() {
    return this.getListAttribute('match_destination_address_sets');
  }
  public set matchDestinationAddressSets(value: string[]) {
    this._matchDestinationAddressSets = value;
  }
  // Temporarily expose input value. Use with caution.
  public get matchDestinationAddressSetsInput() {
    return this._matchDestinationAddressSets;
  }

  // match_source_address_sets - computed: false, optional: false, required: true
  private _matchSourceAddressSets?: string[]; 
  public get matchSourceAddressSets() {
    return this.getListAttribute('match_source_address_sets');
  }
  public set matchSourceAddressSets(value: string[]) {
    this._matchSourceAddressSets = value;
  }
  // Temporarily expose input value. Use with caution.
  public get matchSourceAddressSetsInput() {
    return this._matchSourceAddressSets;
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
}

export class EriFirewallComponentV1RulesEntriesList extends cdktf.ComplexList {
  public internalValue? : EriFirewallComponentV1RulesEntries[] | cdktf.IResolvable

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
  public get(index: number): EriFirewallComponentV1RulesEntriesOutputReference {
    return new EriFirewallComponentV1RulesEntriesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EriFirewallComponentV1Rules {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/fic/0.5.6/docs/resources/eri_firewall_component_v1#from EriFirewallComponentV1#from}
  */
  readonly from: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/fic/0.5.6/docs/resources/eri_firewall_component_v1#to EriFirewallComponentV1#to}
  */
  readonly to: string;
  /**
  * entries block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/fic/0.5.6/docs/resources/eri_firewall_component_v1#entries EriFirewallComponentV1#entries}
  */
  readonly entries: EriFirewallComponentV1RulesEntries[] | cdktf.IResolvable;
}

export function eriFirewallComponentV1RulesToTerraform(struct?: EriFirewallComponentV1Rules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    from: cdktf.stringToTerraform(struct!.from),
    to: cdktf.stringToTerraform(struct!.to),
    entries: cdktf.listMapper(eriFirewallComponentV1RulesEntriesToTerraform, true)(struct!.entries),
  }
}


export function eriFirewallComponentV1RulesToHclTerraform(struct?: EriFirewallComponentV1Rules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    from: {
      value: cdktf.stringToHclTerraform(struct!.from),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    to: {
      value: cdktf.stringToHclTerraform(struct!.to),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    entries: {
      value: cdktf.listMapperHcl(eriFirewallComponentV1RulesEntriesToHclTerraform, true)(struct!.entries),
      isBlock: true,
      type: "list",
      storageClassType: "EriFirewallComponentV1RulesEntriesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EriFirewallComponentV1RulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EriFirewallComponentV1Rules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._from !== undefined) {
      hasAnyValues = true;
      internalValueResult.from = this._from;
    }
    if (this._to !== undefined) {
      hasAnyValues = true;
      internalValueResult.to = this._to;
    }
    if (this._entries?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.entries = this._entries?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EriFirewallComponentV1Rules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._from = undefined;
      this._to = undefined;
      this._entries.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._from = value.from;
      this._to = value.to;
      this._entries.internalValue = value.entries;
    }
  }

  // from - computed: false, optional: false, required: true
  private _from?: string; 
  public get from() {
    return this.getStringAttribute('from');
  }
  public set from(value: string) {
    this._from = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fromInput() {
    return this._from;
  }

  // to - computed: false, optional: false, required: true
  private _to?: string; 
  public get to() {
    return this.getStringAttribute('to');
  }
  public set to(value: string) {
    this._to = value;
  }
  // Temporarily expose input value. Use with caution.
  public get toInput() {
    return this._to;
  }

  // entries - computed: false, optional: false, required: true
  private _entries = new EriFirewallComponentV1RulesEntriesList(this, "entries", false);
  public get entries() {
    return this._entries;
  }
  public putEntries(value: EriFirewallComponentV1RulesEntries[] | cdktf.IResolvable) {
    this._entries.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get entriesInput() {
    return this._entries.internalValue;
  }
}

export class EriFirewallComponentV1RulesList extends cdktf.ComplexList {
  public internalValue? : EriFirewallComponentV1Rules[] | cdktf.IResolvable

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
  public get(index: number): EriFirewallComponentV1RulesOutputReference {
    return new EriFirewallComponentV1RulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EriFirewallComponentV1Timeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/fic/0.5.6/docs/resources/eri_firewall_component_v1#create EriFirewallComponentV1#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/fic/0.5.6/docs/resources/eri_firewall_component_v1#delete EriFirewallComponentV1#delete}
  */
  readonly delete?: string;
}

export function eriFirewallComponentV1TimeoutsToTerraform(struct?: EriFirewallComponentV1Timeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
  }
}


export function eriFirewallComponentV1TimeoutsToHclTerraform(struct?: EriFirewallComponentV1Timeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EriFirewallComponentV1TimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): EriFirewallComponentV1Timeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EriFirewallComponentV1Timeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/nttcom/fic/0.5.6/docs/resources/eri_firewall_component_v1 fic_eri_firewall_component_v1}
*/
export class EriFirewallComponentV1 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fic_eri_firewall_component_v1";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a EriFirewallComponentV1 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the EriFirewallComponentV1 to import
  * @param importFromId The id of the existing EriFirewallComponentV1 that should be imported. Refer to the {@link https://registry.terraform.io/providers/nttcom/fic/0.5.6/docs/resources/eri_firewall_component_v1#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the EriFirewallComponentV1 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fic_eri_firewall_component_v1", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/nttcom/fic/0.5.6/docs/resources/eri_firewall_component_v1 fic_eri_firewall_component_v1} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EriFirewallComponentV1Config
  */
  public constructor(scope: Construct, id: string, config: EriFirewallComponentV1Config) {
    super(scope, id, {
      terraformResourceType: 'fic_eri_firewall_component_v1',
      terraformGeneratorMetadata: {
        providerName: 'fic',
        providerVersion: '0.5.6'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._firewallId = config.firewallId;
    this._id = config.id;
    this._routerId = config.routerId;
    this._userIpAddresses = config.userIpAddresses;
    this._applicationSets.internalValue = config.applicationSets;
    this._customApplications.internalValue = config.customApplications;
    this._routingGroupSettings.internalValue = config.routingGroupSettings;
    this._rules.internalValue = config.rules;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // firewall_id - computed: false, optional: false, required: true
  private _firewallId?: string; 
  public get firewallId() {
    return this.getStringAttribute('firewall_id');
  }
  public set firewallId(value: string) {
    this._firewallId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get firewallIdInput() {
    return this._firewallId;
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

  // is_activated - computed: true, optional: false, required: false
  public get isActivated() {
    return this.getBooleanAttribute('is_activated');
  }

  // redundant - computed: true, optional: false, required: false
  public get redundant() {
    return this.getBooleanAttribute('redundant');
  }

  // router_id - computed: false, optional: false, required: true
  private _routerId?: string; 
  public get routerId() {
    return this.getStringAttribute('router_id');
  }
  public set routerId(value: string) {
    this._routerId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get routerIdInput() {
    return this._routerId;
  }

  // user_ip_addresses - computed: false, optional: false, required: true
  private _userIpAddresses?: string[]; 
  public get userIpAddresses() {
    return this.getListAttribute('user_ip_addresses');
  }
  public set userIpAddresses(value: string[]) {
    this._userIpAddresses = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userIpAddressesInput() {
    return this._userIpAddresses;
  }

  // application_sets - computed: false, optional: true, required: false
  private _applicationSets = new EriFirewallComponentV1ApplicationSetsList(this, "application_sets", false);
  public get applicationSets() {
    return this._applicationSets;
  }
  public putApplicationSets(value: EriFirewallComponentV1ApplicationSets[] | cdktf.IResolvable) {
    this._applicationSets.internalValue = value;
  }
  public resetApplicationSets() {
    this._applicationSets.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationSetsInput() {
    return this._applicationSets.internalValue;
  }

  // custom_applications - computed: false, optional: true, required: false
  private _customApplications = new EriFirewallComponentV1CustomApplicationsList(this, "custom_applications", false);
  public get customApplications() {
    return this._customApplications;
  }
  public putCustomApplications(value: EriFirewallComponentV1CustomApplications[] | cdktf.IResolvable) {
    this._customApplications.internalValue = value;
  }
  public resetCustomApplications() {
    this._customApplications.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customApplicationsInput() {
    return this._customApplications.internalValue;
  }

  // routing_group_settings - computed: false, optional: true, required: false
  private _routingGroupSettings = new EriFirewallComponentV1RoutingGroupSettingsList(this, "routing_group_settings", false);
  public get routingGroupSettings() {
    return this._routingGroupSettings;
  }
  public putRoutingGroupSettings(value: EriFirewallComponentV1RoutingGroupSettings[] | cdktf.IResolvable) {
    this._routingGroupSettings.internalValue = value;
  }
  public resetRoutingGroupSettings() {
    this._routingGroupSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routingGroupSettingsInput() {
    return this._routingGroupSettings.internalValue;
  }

  // rules - computed: false, optional: true, required: false
  private _rules = new EriFirewallComponentV1RulesList(this, "rules", false);
  public get rules() {
    return this._rules;
  }
  public putRules(value: EriFirewallComponentV1Rules[] | cdktf.IResolvable) {
    this._rules.internalValue = value;
  }
  public resetRules() {
    this._rules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rulesInput() {
    return this._rules.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new EriFirewallComponentV1TimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: EriFirewallComponentV1Timeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      firewall_id: cdktf.stringToTerraform(this._firewallId),
      id: cdktf.stringToTerraform(this._id),
      router_id: cdktf.stringToTerraform(this._routerId),
      user_ip_addresses: cdktf.listMapper(cdktf.stringToTerraform, false)(this._userIpAddresses),
      application_sets: cdktf.listMapper(eriFirewallComponentV1ApplicationSetsToTerraform, true)(this._applicationSets.internalValue),
      custom_applications: cdktf.listMapper(eriFirewallComponentV1CustomApplicationsToTerraform, true)(this._customApplications.internalValue),
      routing_group_settings: cdktf.listMapper(eriFirewallComponentV1RoutingGroupSettingsToTerraform, true)(this._routingGroupSettings.internalValue),
      rules: cdktf.listMapper(eriFirewallComponentV1RulesToTerraform, true)(this._rules.internalValue),
      timeouts: eriFirewallComponentV1TimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      firewall_id: {
        value: cdktf.stringToHclTerraform(this._firewallId),
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
      router_id: {
        value: cdktf.stringToHclTerraform(this._routerId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_ip_addresses: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._userIpAddresses),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      application_sets: {
        value: cdktf.listMapperHcl(eriFirewallComponentV1ApplicationSetsToHclTerraform, true)(this._applicationSets.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "EriFirewallComponentV1ApplicationSetsList",
      },
      custom_applications: {
        value: cdktf.listMapperHcl(eriFirewallComponentV1CustomApplicationsToHclTerraform, true)(this._customApplications.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "EriFirewallComponentV1CustomApplicationsList",
      },
      routing_group_settings: {
        value: cdktf.listMapperHcl(eriFirewallComponentV1RoutingGroupSettingsToHclTerraform, true)(this._routingGroupSettings.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "EriFirewallComponentV1RoutingGroupSettingsList",
      },
      rules: {
        value: cdktf.listMapperHcl(eriFirewallComponentV1RulesToHclTerraform, true)(this._rules.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "EriFirewallComponentV1RulesList",
      },
      timeouts: {
        value: eriFirewallComponentV1TimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "EriFirewallComponentV1Timeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
