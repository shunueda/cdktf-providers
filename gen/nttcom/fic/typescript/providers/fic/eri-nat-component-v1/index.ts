// https://registry.terraform.io/providers/nttcom/fic/0.5.6/docs/resources/eri_nat_component_v1
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface EriNatComponentV1Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/fic/0.5.6/docs/resources/eri_nat_component_v1#id EriNatComponentV1#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/fic/0.5.6/docs/resources/eri_nat_component_v1#nat_id EriNatComponentV1#nat_id}
  */
  readonly natId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/fic/0.5.6/docs/resources/eri_nat_component_v1#router_id EriNatComponentV1#router_id}
  */
  readonly routerId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/fic/0.5.6/docs/resources/eri_nat_component_v1#user_ip_addresses EriNatComponentV1#user_ip_addresses}
  */
  readonly userIpAddresses: string[];
  /**
  * destination_nat_rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/fic/0.5.6/docs/resources/eri_nat_component_v1#destination_nat_rules EriNatComponentV1#destination_nat_rules}
  */
  readonly destinationNatRules?: EriNatComponentV1DestinationNatRules[] | cdktf.IResolvable;
  /**
  * global_ip_address_sets block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/fic/0.5.6/docs/resources/eri_nat_component_v1#global_ip_address_sets EriNatComponentV1#global_ip_address_sets}
  */
  readonly globalIpAddressSets: EriNatComponentV1GlobalIpAddressSets[] | cdktf.IResolvable;
  /**
  * source_napt_rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/fic/0.5.6/docs/resources/eri_nat_component_v1#source_napt_rules EriNatComponentV1#source_napt_rules}
  */
  readonly sourceNaptRules?: EriNatComponentV1SourceNaptRules[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/fic/0.5.6/docs/resources/eri_nat_component_v1#timeouts EriNatComponentV1#timeouts}
  */
  readonly timeouts?: EriNatComponentV1Timeouts;
}
export interface EriNatComponentV1DestinationNatRulesEntries {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/fic/0.5.6/docs/resources/eri_nat_component_v1#match_destination_address EriNatComponentV1#match_destination_address}
  */
  readonly matchDestinationAddress?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/fic/0.5.6/docs/resources/eri_nat_component_v1#then EriNatComponentV1#then}
  */
  readonly then?: string;
}

export function eriNatComponentV1DestinationNatRulesEntriesToTerraform(struct?: EriNatComponentV1DestinationNatRulesEntries | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_destination_address: cdktf.stringToTerraform(struct!.matchDestinationAddress),
    then: cdktf.stringToTerraform(struct!.then),
  }
}


export function eriNatComponentV1DestinationNatRulesEntriesToHclTerraform(struct?: EriNatComponentV1DestinationNatRulesEntries | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_destination_address: {
      value: cdktf.stringToHclTerraform(struct!.matchDestinationAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    then: {
      value: cdktf.stringToHclTerraform(struct!.then),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EriNatComponentV1DestinationNatRulesEntriesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EriNatComponentV1DestinationNatRulesEntries | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchDestinationAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchDestinationAddress = this._matchDestinationAddress;
    }
    if (this._then !== undefined) {
      hasAnyValues = true;
      internalValueResult.then = this._then;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EriNatComponentV1DestinationNatRulesEntries | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._matchDestinationAddress = undefined;
      this._then = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._matchDestinationAddress = value.matchDestinationAddress;
      this._then = value.then;
    }
  }

  // match_destination_address - computed: true, optional: true, required: false
  private _matchDestinationAddress?: string; 
  public get matchDestinationAddress() {
    return this.getStringAttribute('match_destination_address');
  }
  public set matchDestinationAddress(value: string) {
    this._matchDestinationAddress = value;
  }
  public resetMatchDestinationAddress() {
    this._matchDestinationAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchDestinationAddressInput() {
    return this._matchDestinationAddress;
  }

  // then - computed: true, optional: true, required: false
  private _then?: string; 
  public get then() {
    return this.getStringAttribute('then');
  }
  public set then(value: string) {
    this._then = value;
  }
  public resetThen() {
    this._then = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thenInput() {
    return this._then;
  }
}

export class EriNatComponentV1DestinationNatRulesEntriesList extends cdktf.ComplexList {
  public internalValue? : EriNatComponentV1DestinationNatRulesEntries[] | cdktf.IResolvable

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
  public get(index: number): EriNatComponentV1DestinationNatRulesEntriesOutputReference {
    return new EriNatComponentV1DestinationNatRulesEntriesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EriNatComponentV1DestinationNatRules {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/fic/0.5.6/docs/resources/eri_nat_component_v1#from EriNatComponentV1#from}
  */
  readonly from?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/fic/0.5.6/docs/resources/eri_nat_component_v1#to EriNatComponentV1#to}
  */
  readonly to?: string;
  /**
  * entries block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/fic/0.5.6/docs/resources/eri_nat_component_v1#entries EriNatComponentV1#entries}
  */
  readonly entries: EriNatComponentV1DestinationNatRulesEntries[] | cdktf.IResolvable;
}

export function eriNatComponentV1DestinationNatRulesToTerraform(struct?: EriNatComponentV1DestinationNatRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    from: cdktf.stringToTerraform(struct!.from),
    to: cdktf.stringToTerraform(struct!.to),
    entries: cdktf.listMapper(eriNatComponentV1DestinationNatRulesEntriesToTerraform, true)(struct!.entries),
  }
}


export function eriNatComponentV1DestinationNatRulesToHclTerraform(struct?: EriNatComponentV1DestinationNatRules | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(eriNatComponentV1DestinationNatRulesEntriesToHclTerraform, true)(struct!.entries),
      isBlock: true,
      type: "list",
      storageClassType: "EriNatComponentV1DestinationNatRulesEntriesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EriNatComponentV1DestinationNatRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EriNatComponentV1DestinationNatRules | cdktf.IResolvable | undefined {
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

  public set internalValue(value: EriNatComponentV1DestinationNatRules | cdktf.IResolvable | undefined) {
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

  // from - computed: true, optional: true, required: false
  private _from?: string; 
  public get from() {
    return this.getStringAttribute('from');
  }
  public set from(value: string) {
    this._from = value;
  }
  public resetFrom() {
    this._from = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fromInput() {
    return this._from;
  }

  // to - computed: true, optional: true, required: false
  private _to?: string; 
  public get to() {
    return this.getStringAttribute('to');
  }
  public set to(value: string) {
    this._to = value;
  }
  public resetTo() {
    this._to = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get toInput() {
    return this._to;
  }

  // entries - computed: false, optional: false, required: true
  private _entries = new EriNatComponentV1DestinationNatRulesEntriesList(this, "entries", false);
  public get entries() {
    return this._entries;
  }
  public putEntries(value: EriNatComponentV1DestinationNatRulesEntries[] | cdktf.IResolvable) {
    this._entries.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get entriesInput() {
    return this._entries.internalValue;
  }
}

export class EriNatComponentV1DestinationNatRulesList extends cdktf.ComplexList {
  public internalValue? : EriNatComponentV1DestinationNatRules[] | cdktf.IResolvable

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
  public get(index: number): EriNatComponentV1DestinationNatRulesOutputReference {
    return new EriNatComponentV1DestinationNatRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EriNatComponentV1GlobalIpAddressSets {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/fic/0.5.6/docs/resources/eri_nat_component_v1#name EriNatComponentV1#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/fic/0.5.6/docs/resources/eri_nat_component_v1#number_of_addresses EriNatComponentV1#number_of_addresses}
  */
  readonly numberOfAddresses: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/fic/0.5.6/docs/resources/eri_nat_component_v1#type EriNatComponentV1#type}
  */
  readonly type: string;
}

export function eriNatComponentV1GlobalIpAddressSetsToTerraform(struct?: EriNatComponentV1GlobalIpAddressSets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    number_of_addresses: cdktf.numberToTerraform(struct!.numberOfAddresses),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function eriNatComponentV1GlobalIpAddressSetsToHclTerraform(struct?: EriNatComponentV1GlobalIpAddressSets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    number_of_addresses: {
      value: cdktf.numberToHclTerraform(struct!.numberOfAddresses),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EriNatComponentV1GlobalIpAddressSetsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EriNatComponentV1GlobalIpAddressSets | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._numberOfAddresses !== undefined) {
      hasAnyValues = true;
      internalValueResult.numberOfAddresses = this._numberOfAddresses;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EriNatComponentV1GlobalIpAddressSets | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._numberOfAddresses = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._numberOfAddresses = value.numberOfAddresses;
      this._type = value.type;
    }
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

  // number_of_addresses - computed: false, optional: false, required: true
  private _numberOfAddresses?: number; 
  public get numberOfAddresses() {
    return this.getNumberAttribute('number_of_addresses');
  }
  public set numberOfAddresses(value: number) {
    this._numberOfAddresses = value;
  }
  // Temporarily expose input value. Use with caution.
  public get numberOfAddressesInput() {
    return this._numberOfAddresses;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

export class EriNatComponentV1GlobalIpAddressSetsList extends cdktf.ComplexList {
  public internalValue? : EriNatComponentV1GlobalIpAddressSets[] | cdktf.IResolvable

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
  public get(index: number): EriNatComponentV1GlobalIpAddressSetsOutputReference {
    return new EriNatComponentV1GlobalIpAddressSetsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EriNatComponentV1SourceNaptRulesEntries {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/fic/0.5.6/docs/resources/eri_nat_component_v1#then EriNatComponentV1#then}
  */
  readonly then: string[];
}

export function eriNatComponentV1SourceNaptRulesEntriesToTerraform(struct?: EriNatComponentV1SourceNaptRulesEntries | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    then: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.then),
  }
}


export function eriNatComponentV1SourceNaptRulesEntriesToHclTerraform(struct?: EriNatComponentV1SourceNaptRulesEntries | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    then: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.then),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EriNatComponentV1SourceNaptRulesEntriesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EriNatComponentV1SourceNaptRulesEntries | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._then !== undefined) {
      hasAnyValues = true;
      internalValueResult.then = this._then;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EriNatComponentV1SourceNaptRulesEntries | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._then = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._then = value.then;
    }
  }

  // then - computed: false, optional: false, required: true
  private _then?: string[]; 
  public get then() {
    return this.getListAttribute('then');
  }
  public set then(value: string[]) {
    this._then = value;
  }
  // Temporarily expose input value. Use with caution.
  public get thenInput() {
    return this._then;
  }
}

export class EriNatComponentV1SourceNaptRulesEntriesList extends cdktf.ComplexList {
  public internalValue? : EriNatComponentV1SourceNaptRulesEntries[] | cdktf.IResolvable

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
  public get(index: number): EriNatComponentV1SourceNaptRulesEntriesOutputReference {
    return new EriNatComponentV1SourceNaptRulesEntriesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EriNatComponentV1SourceNaptRules {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/fic/0.5.6/docs/resources/eri_nat_component_v1#from EriNatComponentV1#from}
  */
  readonly from: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/fic/0.5.6/docs/resources/eri_nat_component_v1#to EriNatComponentV1#to}
  */
  readonly to?: string;
  /**
  * entries block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/fic/0.5.6/docs/resources/eri_nat_component_v1#entries EriNatComponentV1#entries}
  */
  readonly entries?: EriNatComponentV1SourceNaptRulesEntries[] | cdktf.IResolvable;
}

export function eriNatComponentV1SourceNaptRulesToTerraform(struct?: EriNatComponentV1SourceNaptRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    from: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.from),
    to: cdktf.stringToTerraform(struct!.to),
    entries: cdktf.listMapper(eriNatComponentV1SourceNaptRulesEntriesToTerraform, true)(struct!.entries),
  }
}


export function eriNatComponentV1SourceNaptRulesToHclTerraform(struct?: EriNatComponentV1SourceNaptRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    from: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.from),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    to: {
      value: cdktf.stringToHclTerraform(struct!.to),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    entries: {
      value: cdktf.listMapperHcl(eriNatComponentV1SourceNaptRulesEntriesToHclTerraform, true)(struct!.entries),
      isBlock: true,
      type: "list",
      storageClassType: "EriNatComponentV1SourceNaptRulesEntriesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EriNatComponentV1SourceNaptRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EriNatComponentV1SourceNaptRules | cdktf.IResolvable | undefined {
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

  public set internalValue(value: EriNatComponentV1SourceNaptRules | cdktf.IResolvable | undefined) {
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
  private _from?: string[]; 
  public get from() {
    return this.getListAttribute('from');
  }
  public set from(value: string[]) {
    this._from = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fromInput() {
    return this._from;
  }

  // to - computed: true, optional: true, required: false
  private _to?: string; 
  public get to() {
    return this.getStringAttribute('to');
  }
  public set to(value: string) {
    this._to = value;
  }
  public resetTo() {
    this._to = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get toInput() {
    return this._to;
  }

  // entries - computed: false, optional: true, required: false
  private _entries = new EriNatComponentV1SourceNaptRulesEntriesList(this, "entries", false);
  public get entries() {
    return this._entries;
  }
  public putEntries(value: EriNatComponentV1SourceNaptRulesEntries[] | cdktf.IResolvable) {
    this._entries.internalValue = value;
  }
  public resetEntries() {
    this._entries.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entriesInput() {
    return this._entries.internalValue;
  }
}

export class EriNatComponentV1SourceNaptRulesList extends cdktf.ComplexList {
  public internalValue? : EriNatComponentV1SourceNaptRules[] | cdktf.IResolvable

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
  public get(index: number): EriNatComponentV1SourceNaptRulesOutputReference {
    return new EriNatComponentV1SourceNaptRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EriNatComponentV1Timeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/fic/0.5.6/docs/resources/eri_nat_component_v1#create EriNatComponentV1#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/fic/0.5.6/docs/resources/eri_nat_component_v1#delete EriNatComponentV1#delete}
  */
  readonly delete?: string;
}

export function eriNatComponentV1TimeoutsToTerraform(struct?: EriNatComponentV1Timeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
  }
}


export function eriNatComponentV1TimeoutsToHclTerraform(struct?: EriNatComponentV1Timeouts | cdktf.IResolvable): any {
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

export class EriNatComponentV1TimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): EriNatComponentV1Timeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: EriNatComponentV1Timeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/nttcom/fic/0.5.6/docs/resources/eri_nat_component_v1 fic_eri_nat_component_v1}
*/
export class EriNatComponentV1 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fic_eri_nat_component_v1";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a EriNatComponentV1 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the EriNatComponentV1 to import
  * @param importFromId The id of the existing EriNatComponentV1 that should be imported. Refer to the {@link https://registry.terraform.io/providers/nttcom/fic/0.5.6/docs/resources/eri_nat_component_v1#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the EriNatComponentV1 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fic_eri_nat_component_v1", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/nttcom/fic/0.5.6/docs/resources/eri_nat_component_v1 fic_eri_nat_component_v1} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EriNatComponentV1Config
  */
  public constructor(scope: Construct, id: string, config: EriNatComponentV1Config) {
    super(scope, id, {
      terraformResourceType: 'fic_eri_nat_component_v1',
      terraformGeneratorMetadata: {
        providerName: 'fic',
        providerVersion: '0.5.6',
        providerVersionConstraint: '0.5.6'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._natId = config.natId;
    this._routerId = config.routerId;
    this._userIpAddresses = config.userIpAddresses;
    this._destinationNatRules.internalValue = config.destinationNatRules;
    this._globalIpAddressSets.internalValue = config.globalIpAddressSets;
    this._sourceNaptRules.internalValue = config.sourceNaptRules;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // nat_id - computed: false, optional: false, required: true
  private _natId?: string; 
  public get natId() {
    return this.getStringAttribute('nat_id');
  }
  public set natId(value: string) {
    this._natId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get natIdInput() {
    return this._natId;
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

  // destination_nat_rules - computed: false, optional: true, required: false
  private _destinationNatRules = new EriNatComponentV1DestinationNatRulesList(this, "destination_nat_rules", false);
  public get destinationNatRules() {
    return this._destinationNatRules;
  }
  public putDestinationNatRules(value: EriNatComponentV1DestinationNatRules[] | cdktf.IResolvable) {
    this._destinationNatRules.internalValue = value;
  }
  public resetDestinationNatRules() {
    this._destinationNatRules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationNatRulesInput() {
    return this._destinationNatRules.internalValue;
  }

  // global_ip_address_sets - computed: false, optional: false, required: true
  private _globalIpAddressSets = new EriNatComponentV1GlobalIpAddressSetsList(this, "global_ip_address_sets", false);
  public get globalIpAddressSets() {
    return this._globalIpAddressSets;
  }
  public putGlobalIpAddressSets(value: EriNatComponentV1GlobalIpAddressSets[] | cdktf.IResolvable) {
    this._globalIpAddressSets.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get globalIpAddressSetsInput() {
    return this._globalIpAddressSets.internalValue;
  }

  // source_napt_rules - computed: false, optional: true, required: false
  private _sourceNaptRules = new EriNatComponentV1SourceNaptRulesList(this, "source_napt_rules", false);
  public get sourceNaptRules() {
    return this._sourceNaptRules;
  }
  public putSourceNaptRules(value: EriNatComponentV1SourceNaptRules[] | cdktf.IResolvable) {
    this._sourceNaptRules.internalValue = value;
  }
  public resetSourceNaptRules() {
    this._sourceNaptRules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceNaptRulesInput() {
    return this._sourceNaptRules.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new EriNatComponentV1TimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: EriNatComponentV1Timeouts) {
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
      id: cdktf.stringToTerraform(this._id),
      nat_id: cdktf.stringToTerraform(this._natId),
      router_id: cdktf.stringToTerraform(this._routerId),
      user_ip_addresses: cdktf.listMapper(cdktf.stringToTerraform, false)(this._userIpAddresses),
      destination_nat_rules: cdktf.listMapper(eriNatComponentV1DestinationNatRulesToTerraform, true)(this._destinationNatRules.internalValue),
      global_ip_address_sets: cdktf.listMapper(eriNatComponentV1GlobalIpAddressSetsToTerraform, true)(this._globalIpAddressSets.internalValue),
      source_napt_rules: cdktf.listMapper(eriNatComponentV1SourceNaptRulesToTerraform, true)(this._sourceNaptRules.internalValue),
      timeouts: eriNatComponentV1TimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      nat_id: {
        value: cdktf.stringToHclTerraform(this._natId),
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
      destination_nat_rules: {
        value: cdktf.listMapperHcl(eriNatComponentV1DestinationNatRulesToHclTerraform, true)(this._destinationNatRules.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "EriNatComponentV1DestinationNatRulesList",
      },
      global_ip_address_sets: {
        value: cdktf.listMapperHcl(eriNatComponentV1GlobalIpAddressSetsToHclTerraform, true)(this._globalIpAddressSets.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "EriNatComponentV1GlobalIpAddressSetsList",
      },
      source_napt_rules: {
        value: cdktf.listMapperHcl(eriNatComponentV1SourceNaptRulesToHclTerraform, true)(this._sourceNaptRules.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "EriNatComponentV1SourceNaptRulesList",
      },
      timeouts: {
        value: eriNatComponentV1TimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "EriNatComponentV1Timeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
