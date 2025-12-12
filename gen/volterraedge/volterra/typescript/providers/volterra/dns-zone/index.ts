// https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/dns_zone
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DnsZoneConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/dns_zone#annotations DnsZone#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/dns_zone#description DnsZone#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/dns_zone#disable DnsZone#disable}
  */
  readonly disable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/dns_zone#id DnsZone#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/dns_zone#labels DnsZone#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/dns_zone#name DnsZone#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/dns_zone#namespace DnsZone#namespace}
  */
  readonly namespace: string;
  /**
  * primary block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/dns_zone#primary DnsZone#primary}
  */
  readonly primary?: DnsZonePrimary;
  /**
  * secondary block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/dns_zone#secondary DnsZone#secondary}
  */
  readonly secondary?: DnsZoneSecondary;
}
export interface DnsZonePrimaryDefaultRrSetGroupARecord {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/dns_zone#name DnsZone#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/dns_zone#values DnsZone#values}
  */
  readonly values: string[];
}

export function dnsZonePrimaryDefaultRrSetGroupARecordToTerraform(struct?: DnsZonePrimaryDefaultRrSetGroupARecordOutputReference | DnsZonePrimaryDefaultRrSetGroupARecord): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function dnsZonePrimaryDefaultRrSetGroupARecordToHclTerraform(struct?: DnsZonePrimaryDefaultRrSetGroupARecordOutputReference | DnsZonePrimaryDefaultRrSetGroupARecord): any {
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
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DnsZonePrimaryDefaultRrSetGroupARecordOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DnsZonePrimaryDefaultRrSetGroupARecord | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DnsZonePrimaryDefaultRrSetGroupARecord | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._values = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._values = value.values;
    }
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

  // values - computed: false, optional: false, required: true
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}
export interface DnsZonePrimaryDefaultRrSetGroupAaaaRecord {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/dns_zone#name DnsZone#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/dns_zone#values DnsZone#values}
  */
  readonly values: string[];
}

export function dnsZonePrimaryDefaultRrSetGroupAaaaRecordToTerraform(struct?: DnsZonePrimaryDefaultRrSetGroupAaaaRecordOutputReference | DnsZonePrimaryDefaultRrSetGroupAaaaRecord): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function dnsZonePrimaryDefaultRrSetGroupAaaaRecordToHclTerraform(struct?: DnsZonePrimaryDefaultRrSetGroupAaaaRecordOutputReference | DnsZonePrimaryDefaultRrSetGroupAaaaRecord): any {
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
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DnsZonePrimaryDefaultRrSetGroupAaaaRecordOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DnsZonePrimaryDefaultRrSetGroupAaaaRecord | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DnsZonePrimaryDefaultRrSetGroupAaaaRecord | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._values = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._values = value.values;
    }
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

  // values - computed: false, optional: false, required: true
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}
export interface DnsZonePrimaryDefaultRrSetGroupAfsdbRecordValues {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/dns_zone#hostname DnsZone#hostname}
  */
  readonly hostname: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/dns_zone#subtype DnsZone#subtype}
  */
  readonly subtype: string;
}

export function dnsZonePrimaryDefaultRrSetGroupAfsdbRecordValuesToTerraform(struct?: DnsZonePrimaryDefaultRrSetGroupAfsdbRecordValues | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hostname: cdktf.stringToTerraform(struct!.hostname),
    subtype: cdktf.stringToTerraform(struct!.subtype),
  }
}


export function dnsZonePrimaryDefaultRrSetGroupAfsdbRecordValuesToHclTerraform(struct?: DnsZonePrimaryDefaultRrSetGroupAfsdbRecordValues | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    hostname: {
      value: cdktf.stringToHclTerraform(struct!.hostname),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subtype: {
      value: cdktf.stringToHclTerraform(struct!.subtype),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DnsZonePrimaryDefaultRrSetGroupAfsdbRecordValuesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DnsZonePrimaryDefaultRrSetGroupAfsdbRecordValues | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hostname !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostname = this._hostname;
    }
    if (this._subtype !== undefined) {
      hasAnyValues = true;
      internalValueResult.subtype = this._subtype;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DnsZonePrimaryDefaultRrSetGroupAfsdbRecordValues | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._hostname = undefined;
      this._subtype = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._hostname = value.hostname;
      this._subtype = value.subtype;
    }
  }

  // hostname - computed: false, optional: false, required: true
  private _hostname?: string; 
  public get hostname() {
    return this.getStringAttribute('hostname');
  }
  public set hostname(value: string) {
    this._hostname = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnameInput() {
    return this._hostname;
  }

  // subtype - computed: false, optional: false, required: true
  private _subtype?: string; 
  public get subtype() {
    return this.getStringAttribute('subtype');
  }
  public set subtype(value: string) {
    this._subtype = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subtypeInput() {
    return this._subtype;
  }
}

export class DnsZonePrimaryDefaultRrSetGroupAfsdbRecordValuesList extends cdktf.ComplexList {
  public internalValue? : DnsZonePrimaryDefaultRrSetGroupAfsdbRecordValues[] | cdktf.IResolvable

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
  public get(index: number): DnsZonePrimaryDefaultRrSetGroupAfsdbRecordValuesOutputReference {
    return new DnsZonePrimaryDefaultRrSetGroupAfsdbRecordValuesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DnsZonePrimaryDefaultRrSetGroupAfsdbRecord {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/dns_zone#name DnsZone#name}
  */
  readonly name?: string;
  /**
  * values block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/dns_zone#values DnsZone#values}
  */
  readonly values: DnsZonePrimaryDefaultRrSetGroupAfsdbRecordValues[] | cdktf.IResolvable;
}

export function dnsZonePrimaryDefaultRrSetGroupAfsdbRecordToTerraform(struct?: DnsZonePrimaryDefaultRrSetGroupAfsdbRecordOutputReference | DnsZonePrimaryDefaultRrSetGroupAfsdbRecord): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    values: cdktf.listMapper(dnsZonePrimaryDefaultRrSetGroupAfsdbRecordValuesToTerraform, true)(struct!.values),
  }
}


export function dnsZonePrimaryDefaultRrSetGroupAfsdbRecordToHclTerraform(struct?: DnsZonePrimaryDefaultRrSetGroupAfsdbRecordOutputReference | DnsZonePrimaryDefaultRrSetGroupAfsdbRecord): any {
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
    values: {
      value: cdktf.listMapperHcl(dnsZonePrimaryDefaultRrSetGroupAfsdbRecordValuesToHclTerraform, true)(struct!.values),
      isBlock: true,
      type: "list",
      storageClassType: "DnsZonePrimaryDefaultRrSetGroupAfsdbRecordValuesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DnsZonePrimaryDefaultRrSetGroupAfsdbRecordOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DnsZonePrimaryDefaultRrSetGroupAfsdbRecord | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._values?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DnsZonePrimaryDefaultRrSetGroupAfsdbRecord | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._values.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._values.internalValue = value.values;
    }
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

  // values - computed: false, optional: false, required: true
  private _values = new DnsZonePrimaryDefaultRrSetGroupAfsdbRecordValuesList(this, "values", false);
  public get values() {
    return this._values;
  }
  public putValues(value: DnsZonePrimaryDefaultRrSetGroupAfsdbRecordValues[] | cdktf.IResolvable) {
    this._values.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values.internalValue;
  }
}
export interface DnsZonePrimaryDefaultRrSetGroupAliasRecord {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/dns_zone#name DnsZone#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/dns_zone#value DnsZone#value}
  */
  readonly value?: string;
}

export function dnsZonePrimaryDefaultRrSetGroupAliasRecordToTerraform(struct?: DnsZonePrimaryDefaultRrSetGroupAliasRecordOutputReference | DnsZonePrimaryDefaultRrSetGroupAliasRecord): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dnsZonePrimaryDefaultRrSetGroupAliasRecordToHclTerraform(struct?: DnsZonePrimaryDefaultRrSetGroupAliasRecordOutputReference | DnsZonePrimaryDefaultRrSetGroupAliasRecord): any {
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

export class DnsZonePrimaryDefaultRrSetGroupAliasRecordOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DnsZonePrimaryDefaultRrSetGroupAliasRecord | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DnsZonePrimaryDefaultRrSetGroupAliasRecord | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._value = value.value;
    }
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

  // value - computed: false, optional: true, required: false
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
export interface DnsZonePrimaryDefaultRrSetGroupCaaRecordValues {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/dns_zone#flags DnsZone#flags}
  */
  readonly flags?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/dns_zone#tag DnsZone#tag}
  */
  readonly tag?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/dns_zone#value DnsZone#value}
  */
  readonly value?: string;
}

export function dnsZonePrimaryDefaultRrSetGroupCaaRecordValuesToTerraform(struct?: DnsZonePrimaryDefaultRrSetGroupCaaRecordValues | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    flags: cdktf.numberToTerraform(struct!.flags),
    tag: cdktf.stringToTerraform(struct!.tag),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dnsZonePrimaryDefaultRrSetGroupCaaRecordValuesToHclTerraform(struct?: DnsZonePrimaryDefaultRrSetGroupCaaRecordValues | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    flags: {
      value: cdktf.numberToHclTerraform(struct!.flags),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tag: {
      value: cdktf.stringToHclTerraform(struct!.tag),
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

export class DnsZonePrimaryDefaultRrSetGroupCaaRecordValuesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DnsZonePrimaryDefaultRrSetGroupCaaRecordValues | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._flags !== undefined) {
      hasAnyValues = true;
      internalValueResult.flags = this._flags;
    }
    if (this._tag !== undefined) {
      hasAnyValues = true;
      internalValueResult.tag = this._tag;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DnsZonePrimaryDefaultRrSetGroupCaaRecordValues | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._flags = undefined;
      this._tag = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._flags = value.flags;
      this._tag = value.tag;
      this._value = value.value;
    }
  }

  // flags - computed: false, optional: true, required: false
  private _flags?: number; 
  public get flags() {
    return this.getNumberAttribute('flags');
  }
  public set flags(value: number) {
    this._flags = value;
  }
  public resetFlags() {
    this._flags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get flagsInput() {
    return this._flags;
  }

  // tag - computed: false, optional: true, required: false
  private _tag?: string; 
  public get tag() {
    return this.getStringAttribute('tag');
  }
  public set tag(value: string) {
    this._tag = value;
  }
  public resetTag() {
    this._tag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagInput() {
    return this._tag;
  }

  // value - computed: false, optional: true, required: false
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

export class DnsZonePrimaryDefaultRrSetGroupCaaRecordValuesList extends cdktf.ComplexList {
  public internalValue? : DnsZonePrimaryDefaultRrSetGroupCaaRecordValues[] | cdktf.IResolvable

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
  public get(index: number): DnsZonePrimaryDefaultRrSetGroupCaaRecordValuesOutputReference {
    return new DnsZonePrimaryDefaultRrSetGroupCaaRecordValuesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DnsZonePrimaryDefaultRrSetGroupCaaRecord {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/dns_zone#name DnsZone#name}
  */
  readonly name?: string;
  /**
  * values block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/dns_zone#values DnsZone#values}
  */
  readonly values?: DnsZonePrimaryDefaultRrSetGroupCaaRecordValues[] | cdktf.IResolvable;
}

export function dnsZonePrimaryDefaultRrSetGroupCaaRecordToTerraform(struct?: DnsZonePrimaryDefaultRrSetGroupCaaRecordOutputReference | DnsZonePrimaryDefaultRrSetGroupCaaRecord): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    values: cdktf.listMapper(dnsZonePrimaryDefaultRrSetGroupCaaRecordValuesToTerraform, true)(struct!.values),
  }
}


export function dnsZonePrimaryDefaultRrSetGroupCaaRecordToHclTerraform(struct?: DnsZonePrimaryDefaultRrSetGroupCaaRecordOutputReference | DnsZonePrimaryDefaultRrSetGroupCaaRecord): any {
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
    values: {
      value: cdktf.listMapperHcl(dnsZonePrimaryDefaultRrSetGroupCaaRecordValuesToHclTerraform, true)(struct!.values),
      isBlock: true,
      type: "list",
      storageClassType: "DnsZonePrimaryDefaultRrSetGroupCaaRecordValuesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DnsZonePrimaryDefaultRrSetGroupCaaRecordOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DnsZonePrimaryDefaultRrSetGroupCaaRecord | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._values?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DnsZonePrimaryDefaultRrSetGroupCaaRecord | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._values.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._values.internalValue = value.values;
    }
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

  // values - computed: false, optional: true, required: false
  private _values = new DnsZonePrimaryDefaultRrSetGroupCaaRecordValuesList(this, "values", false);
  public get values() {
    return this._values;
  }
  public putValues(value: DnsZonePrimaryDefaultRrSetGroupCaaRecordValues[] | cdktf.IResolvable) {
    this._values.internalValue = value;
  }
  public resetValues() {
    this._values.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values.internalValue;
  }
}
export interface DnsZonePrimaryDefaultRrSetGroupCdsRecordValuesSha1Digest {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/dns_zone#digest DnsZone#digest}
  */
  readonly digest: string;
}

export function dnsZonePrimaryDefaultRrSetGroupCdsRecordValuesSha1DigestToTerraform(struct?: DnsZonePrimaryDefaultRrSetGroupCdsRecordValuesSha1DigestOutputReference | DnsZonePrimaryDefaultRrSetGroupCdsRecordValuesSha1Digest): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    digest: cdktf.stringToTerraform(struct!.digest),
  }
}


export function dnsZonePrimaryDefaultRrSetGroupCdsRecordValuesSha1DigestToHclTerraform(struct?: DnsZonePrimaryDefaultRrSetGroupCdsRecordValuesSha1DigestOutputReference | DnsZonePrimaryDefaultRrSetGroupCdsRecordValuesSha1Digest): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    digest: {
      value: cdktf.stringToHclTerraform(struct!.digest),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DnsZonePrimaryDefaultRrSetGroupCdsRecordValuesSha1DigestOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DnsZonePrimaryDefaultRrSetGroupCdsRecordValuesSha1Digest | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._digest !== undefined) {
      hasAnyValues = true;
      internalValueResult.digest = this._digest;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DnsZonePrimaryDefaultRrSetGroupCdsRecordValuesSha1Digest | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._digest = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._digest = value.digest;
    }
  }

  // digest - computed: false, optional: false, required: true
  private _digest?: string; 
  public get digest() {
    return this.getStringAttribute('digest');
  }
  public set digest(value: string) {
    this._digest = value;
  }
  // Temporarily expose input value. Use with caution.
  public get digestInput() {
    return this._digest;
  }
}
export interface DnsZonePrimaryDefaultRrSetGroupCdsRecordValuesSha256Digest {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/dns_zone#digest DnsZone#digest}
  */
  readonly digest: string;
}

export function dnsZonePrimaryDefaultRrSetGroupCdsRecordValuesSha256DigestToTerraform(struct?: DnsZonePrimaryDefaultRrSetGroupCdsRecordValuesSha256DigestOutputReference | DnsZonePrimaryDefaultRrSetGroupCdsRecordValuesSha256Digest): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    digest: cdktf.stringToTerraform(struct!.digest),
  }
}


export function dnsZonePrimaryDefaultRrSetGroupCdsRecordValuesSha256DigestToHclTerraform(struct?: DnsZonePrimaryDefaultRrSetGroupCdsRecordValuesSha256DigestOutputReference | DnsZonePrimaryDefaultRrSetGroupCdsRecordValuesSha256Digest): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    digest: {
      value: cdktf.stringToHclTerraform(struct!.digest),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DnsZonePrimaryDefaultRrSetGroupCdsRecordValuesSha256DigestOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DnsZonePrimaryDefaultRrSetGroupCdsRecordValuesSha256Digest | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._digest !== undefined) {
      hasAnyValues = true;
      internalValueResult.digest = this._digest;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DnsZonePrimaryDefaultRrSetGroupCdsRecordValuesSha256Digest | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._digest = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._digest = value.digest;
    }
  }

  // digest - computed: false, optional: false, required: true
  private _digest?: string; 
  public get digest() {
    return this.getStringAttribute('digest');
  }
  public set digest(value: string) {
    this._digest = value;
  }
  // Temporarily expose input value. Use with caution.
  public get digestInput() {
    return this._digest;
  }
}
export interface DnsZonePrimaryDefaultRrSetGroupCdsRecordValuesSha384Digest {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/dns_zone#digest DnsZone#digest}
  */
  readonly digest: string;
}

export function dnsZonePrimaryDefaultRrSetGroupCdsRecordValuesSha384DigestToTerraform(struct?: DnsZonePrimaryDefaultRrSetGroupCdsRecordValuesSha384DigestOutputReference | DnsZonePrimaryDefaultRrSetGroupCdsRecordValuesSha384Digest): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    digest: cdktf.stringToTerraform(struct!.digest),
  }
}


export function dnsZonePrimaryDefaultRrSetGroupCdsRecordValuesSha384DigestToHclTerraform(struct?: DnsZonePrimaryDefaultRrSetGroupCdsRecordValuesSha384DigestOutputReference | DnsZonePrimaryDefaultRrSetGroupCdsRecordValuesSha384Digest): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    digest: {
      value: cdktf.stringToHclTerraform(struct!.digest),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DnsZonePrimaryDefaultRrSetGroupCdsRecordValuesSha384DigestOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DnsZonePrimaryDefaultRrSetGroupCdsRecordValuesSha384Digest | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._digest !== undefined) {
      hasAnyValues = true;
      internalValueResult.digest = this._digest;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DnsZonePrimaryDefaultRrSetGroupCdsRecordValuesSha384Digest | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._digest = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._digest = value.digest;
    }
  }

  // digest - computed: false, optional: false, required: true
  private _digest?: string; 
  public get digest() {
    return this.getStringAttribute('digest');
  }
  public set digest(value: string) {
    this._digest = value;
  }
  // Temporarily expose input value. Use with caution.
  public get digestInput() {
    return this._digest;
  }
}
export interface DnsZonePrimaryDefaultRrSetGroupCdsRecordValues {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/dns_zone#ds_key_algorithm DnsZone#ds_key_algorithm}
  */
  readonly dsKeyAlgorithm: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/dns_zone#key_tag DnsZone#key_tag}
  */
  readonly keyTag: number;
  /**
  * sha1_digest block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/dns_zone#sha1_digest DnsZone#sha1_digest}
  */
  readonly sha1Digest?: DnsZonePrimaryDefaultRrSetGroupCdsRecordValuesSha1Digest;
  /**
  * sha256_digest block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/dns_zone#sha256_digest DnsZone#sha256_digest}
  */
  readonly sha256Digest?: DnsZonePrimaryDefaultRrSetGroupCdsRecordValuesSha256Digest;
  /**
  * sha384_digest block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/dns_zone#sha384_digest DnsZone#sha384_digest}
  */
  readonly sha384Digest?: DnsZonePrimaryDefaultRrSetGroupCdsRecordValuesSha384Digest;
}

export function dnsZonePrimaryDefaultRrSetGroupCdsRecordValuesToTerraform(struct?: DnsZonePrimaryDefaultRrSetGroupCdsRecordValues | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ds_key_algorithm: cdktf.stringToTerraform(struct!.dsKeyAlgorithm),
    key_tag: cdktf.numberToTerraform(struct!.keyTag),
    sha1_digest: dnsZonePrimaryDefaultRrSetGroupCdsRecordValuesSha1DigestToTerraform(struct!.sha1Digest),
    sha256_digest: dnsZonePrimaryDefaultRrSetGroupCdsRecordValuesSha256DigestToTerraform(struct!.sha256Digest),
    sha384_digest: dnsZonePrimaryDefaultRrSetGroupCdsRecordValuesSha384DigestToTerraform(struct!.sha384Digest),
  }
}


export function dnsZonePrimaryDefaultRrSetGroupCdsRecordValuesToHclTerraform(struct?: DnsZonePrimaryDefaultRrSetGroupCdsRecordValues | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ds_key_algorithm: {
      value: cdktf.stringToHclTerraform(struct!.dsKeyAlgorithm),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key_tag: {
      value: cdktf.numberToHclTerraform(struct!.keyTag),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sha1_digest: {
      value: dnsZonePrimaryDefaultRrSetGroupCdsRecordValuesSha1DigestToHclTerraform(struct!.sha1Digest),
      isBlock: true,
      type: "list",
      storageClassType: "DnsZonePrimaryDefaultRrSetGroupCdsRecordValuesSha1DigestList",
    },
    sha256_digest: {
      value: dnsZonePrimaryDefaultRrSetGroupCdsRecordValuesSha256DigestToHclTerraform(struct!.sha256Digest),
      isBlock: true,
      type: "list",
      storageClassType: "DnsZonePrimaryDefaultRrSetGroupCdsRecordValuesSha256DigestList",
    },
    sha384_digest: {
      value: dnsZonePrimaryDefaultRrSetGroupCdsRecordValuesSha384DigestToHclTerraform(struct!.sha384Digest),
      isBlock: true,
      type: "list",
      storageClassType: "DnsZonePrimaryDefaultRrSetGroupCdsRecordValuesSha384DigestList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DnsZonePrimaryDefaultRrSetGroupCdsRecordValuesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DnsZonePrimaryDefaultRrSetGroupCdsRecordValues | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dsKeyAlgorithm !== undefined) {
      hasAnyValues = true;
      internalValueResult.dsKeyAlgorithm = this._dsKeyAlgorithm;
    }
    if (this._keyTag !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyTag = this._keyTag;
    }
    if (this._sha1Digest?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sha1Digest = this._sha1Digest?.internalValue;
    }
    if (this._sha256Digest?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sha256Digest = this._sha256Digest?.internalValue;
    }
    if (this._sha384Digest?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sha384Digest = this._sha384Digest?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DnsZonePrimaryDefaultRrSetGroupCdsRecordValues | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dsKeyAlgorithm = undefined;
      this._keyTag = undefined;
      this._sha1Digest.internalValue = undefined;
      this._sha256Digest.internalValue = undefined;
      this._sha384Digest.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dsKeyAlgorithm = value.dsKeyAlgorithm;
      this._keyTag = value.keyTag;
      this._sha1Digest.internalValue = value.sha1Digest;
      this._sha256Digest.internalValue = value.sha256Digest;
      this._sha384Digest.internalValue = value.sha384Digest;
    }
  }

  // ds_key_algorithm - computed: false, optional: false, required: true
  private _dsKeyAlgorithm?: string; 
  public get dsKeyAlgorithm() {
    return this.getStringAttribute('ds_key_algorithm');
  }
  public set dsKeyAlgorithm(value: string) {
    this._dsKeyAlgorithm = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dsKeyAlgorithmInput() {
    return this._dsKeyAlgorithm;
  }

  // key_tag - computed: false, optional: false, required: true
  private _keyTag?: number; 
  public get keyTag() {
    return this.getNumberAttribute('key_tag');
  }
  public set keyTag(value: number) {
    this._keyTag = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyTagInput() {
    return this._keyTag;
  }

  // sha1_digest - computed: false, optional: true, required: false
  private _sha1Digest = new DnsZonePrimaryDefaultRrSetGroupCdsRecordValuesSha1DigestOutputReference(this, "sha1_digest");
  public get sha1Digest() {
    return this._sha1Digest;
  }
  public putSha1Digest(value: DnsZonePrimaryDefaultRrSetGroupCdsRecordValuesSha1Digest) {
    this._sha1Digest.internalValue = value;
  }
  public resetSha1Digest() {
    this._sha1Digest.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sha1DigestInput() {
    return this._sha1Digest.internalValue;
  }

  // sha256_digest - computed: false, optional: true, required: false
  private _sha256Digest = new DnsZonePrimaryDefaultRrSetGroupCdsRecordValuesSha256DigestOutputReference(this, "sha256_digest");
  public get sha256Digest() {
    return this._sha256Digest;
  }
  public putSha256Digest(value: DnsZonePrimaryDefaultRrSetGroupCdsRecordValuesSha256Digest) {
    this._sha256Digest.internalValue = value;
  }
  public resetSha256Digest() {
    this._sha256Digest.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sha256DigestInput() {
    return this._sha256Digest.internalValue;
  }

  // sha384_digest - computed: false, optional: true, required: false
  private _sha384Digest = new DnsZonePrimaryDefaultRrSetGroupCdsRecordValuesSha384DigestOutputReference(this, "sha384_digest");
  public get sha384Digest() {
    return this._sha384Digest;
  }
  public putSha384Digest(value: DnsZonePrimaryDefaultRrSetGroupCdsRecordValuesSha384Digest) {
    this._sha384Digest.internalValue = value;
  }
  public resetSha384Digest() {
    this._sha384Digest.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sha384DigestInput() {
    return this._sha384Digest.internalValue;
  }
}

export class DnsZonePrimaryDefaultRrSetGroupCdsRecordValuesList extends cdktf.ComplexList {
  public internalValue? : DnsZonePrimaryDefaultRrSetGroupCdsRecordValues[] | cdktf.IResolvable

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
  public get(index: number): DnsZonePrimaryDefaultRrSetGroupCdsRecordValuesOutputReference {
    return new DnsZonePrimaryDefaultRrSetGroupCdsRecordValuesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DnsZonePrimaryDefaultRrSetGroupCdsRecord {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/dns_zone#name DnsZone#name}
  */
  readonly name?: string;
  /**
  * values block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/dns_zone#values DnsZone#values}
  */
  readonly values: DnsZonePrimaryDefaultRrSetGroupCdsRecordValues[] | cdktf.IResolvable;
}

export function dnsZonePrimaryDefaultRrSetGroupCdsRecordToTerraform(struct?: DnsZonePrimaryDefaultRrSetGroupCdsRecordOutputReference | DnsZonePrimaryDefaultRrSetGroupCdsRecord): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    values: cdktf.listMapper(dnsZonePrimaryDefaultRrSetGroupCdsRecordValuesToTerraform, true)(struct!.values),
  }
}


export function dnsZonePrimaryDefaultRrSetGroupCdsRecordToHclTerraform(struct?: DnsZonePrimaryDefaultRrSetGroupCdsRecordOutputReference | DnsZonePrimaryDefaultRrSetGroupCdsRecord): any {
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
    values: {
      value: cdktf.listMapperHcl(dnsZonePrimaryDefaultRrSetGroupCdsRecordValuesToHclTerraform, true)(struct!.values),
      isBlock: true,
      type: "list",
      storageClassType: "DnsZonePrimaryDefaultRrSetGroupCdsRecordValuesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DnsZonePrimaryDefaultRrSetGroupCdsRecordOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DnsZonePrimaryDefaultRrSetGroupCdsRecord | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._values?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DnsZonePrimaryDefaultRrSetGroupCdsRecord | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._values.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._values.internalValue = value.values;
    }
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

  // values - computed: false, optional: false, required: true
  private _values = new DnsZonePrimaryDefaultRrSetGroupCdsRecordValuesList(this, "values", false);
  public get values() {
    return this._values;
  }
  public putValues(value: DnsZonePrimaryDefaultRrSetGroupCdsRecordValues[] | cdktf.IResolvable) {
    this._values.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values.internalValue;
  }
}
export interface DnsZonePrimaryDefaultRrSetGroupCertRecordValues {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/dns_zone#algorithm DnsZone#algorithm}
  */
  readonly algorithm: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/dns_zone#cert_key_tag DnsZone#cert_key_tag}
  */
  readonly certKeyTag: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/dns_zone#cert_type DnsZone#cert_type}
  */
  readonly certType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/dns_zone#certificate DnsZone#certificate}
  */
  readonly certificate: string;
}

export function dnsZonePrimaryDefaultRrSetGroupCertRecordValuesToTerraform(struct?: DnsZonePrimaryDefaultRrSetGroupCertRecordValues | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    algorithm: cdktf.stringToTerraform(struct!.algorithm),
    cert_key_tag: cdktf.numberToTerraform(struct!.certKeyTag),
    cert_type: cdktf.stringToTerraform(struct!.certType),
    certificate: cdktf.stringToTerraform(struct!.certificate),
  }
}


export function dnsZonePrimaryDefaultRrSetGroupCertRecordValuesToHclTerraform(struct?: DnsZonePrimaryDefaultRrSetGroupCertRecordValues | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    algorithm: {
      value: cdktf.stringToHclTerraform(struct!.algorithm),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cert_key_tag: {
      value: cdktf.numberToHclTerraform(struct!.certKeyTag),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cert_type: {
      value: cdktf.stringToHclTerraform(struct!.certType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    certificate: {
      value: cdktf.stringToHclTerraform(struct!.certificate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DnsZonePrimaryDefaultRrSetGroupCertRecordValuesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DnsZonePrimaryDefaultRrSetGroupCertRecordValues | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._algorithm !== undefined) {
      hasAnyValues = true;
      internalValueResult.algorithm = this._algorithm;
    }
    if (this._certKeyTag !== undefined) {
      hasAnyValues = true;
      internalValueResult.certKeyTag = this._certKeyTag;
    }
    if (this._certType !== undefined) {
      hasAnyValues = true;
      internalValueResult.certType = this._certType;
    }
    if (this._certificate !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificate = this._certificate;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DnsZonePrimaryDefaultRrSetGroupCertRecordValues | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._algorithm = undefined;
      this._certKeyTag = undefined;
      this._certType = undefined;
      this._certificate = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._algorithm = value.algorithm;
      this._certKeyTag = value.certKeyTag;
      this._certType = value.certType;
      this._certificate = value.certificate;
    }
  }

  // algorithm - computed: false, optional: false, required: true
  private _algorithm?: string; 
  public get algorithm() {
    return this.getStringAttribute('algorithm');
  }
  public set algorithm(value: string) {
    this._algorithm = value;
  }
  // Temporarily expose input value. Use with caution.
  public get algorithmInput() {
    return this._algorithm;
  }

  // cert_key_tag - computed: false, optional: false, required: true
  private _certKeyTag?: number; 
  public get certKeyTag() {
    return this.getNumberAttribute('cert_key_tag');
  }
  public set certKeyTag(value: number) {
    this._certKeyTag = value;
  }
  // Temporarily expose input value. Use with caution.
  public get certKeyTagInput() {
    return this._certKeyTag;
  }

  // cert_type - computed: false, optional: false, required: true
  private _certType?: string; 
  public get certType() {
    return this.getStringAttribute('cert_type');
  }
  public set certType(value: string) {
    this._certType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get certTypeInput() {
    return this._certType;
  }

  // certificate - computed: false, optional: false, required: true
  private _certificate?: string; 
  public get certificate() {
    return this.getStringAttribute('certificate');
  }
  public set certificate(value: string) {
    this._certificate = value;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateInput() {
    return this._certificate;
  }
}

export class DnsZonePrimaryDefaultRrSetGroupCertRecordValuesList extends cdktf.ComplexList {
  public internalValue? : DnsZonePrimaryDefaultRrSetGroupCertRecordValues[] | cdktf.IResolvable

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
  public get(index: number): DnsZonePrimaryDefaultRrSetGroupCertRecordValuesOutputReference {
    return new DnsZonePrimaryDefaultRrSetGroupCertRecordValuesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DnsZonePrimaryDefaultRrSetGroupCertRecord {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/dns_zone#name DnsZone#name}
  */
  readonly name?: string;
  /**
  * values block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/dns_zone#values DnsZone#values}
  */
  readonly values: DnsZonePrimaryDefaultRrSetGroupCertRecordValues[] | cdktf.IResolvable;
}

export function dnsZonePrimaryDefaultRrSetGroupCertRecordToTerraform(struct?: DnsZonePrimaryDefaultRrSetGroupCertRecordOutputReference | DnsZonePrimaryDefaultRrSetGroupCertRecord): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    values: cdktf.listMapper(dnsZonePrimaryDefaultRrSetGroupCertRecordValuesToTerraform, true)(struct!.values),
  }
}


export function dnsZonePrimaryDefaultRrSetGroupCertRecordToHclTerraform(struct?: DnsZonePrimaryDefaultRrSetGroupCertRecordOutputReference | DnsZonePrimaryDefaultRrSetGroupCertRecord): any {
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
    values: {
      value: cdktf.listMapperHcl(dnsZonePrimaryDefaultRrSetGroupCertRecordValuesToHclTerraform, true)(struct!.values),
      isBlock: true,
      type: "list",
      storageClassType: "DnsZonePrimaryDefaultRrSetGroupCertRecordValuesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DnsZonePrimaryDefaultRrSetGroupCertRecordOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DnsZonePrimaryDefaultRrSetGroupCertRecord | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._values?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DnsZonePrimaryDefaultRrSetGroupCertRecord | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._values.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._values.internalValue = value.values;
    }
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

  // values - computed: false, optional: false, required: true
  private _values = new DnsZonePrimaryDefaultRrSetGroupCertRecordValuesList(this, "values", false);
  public get values() {
    return this._values;
  }
  public putValues(value: DnsZonePrimaryDefaultRrSetGroupCertRecordValues[] | cdktf.IResolvable) {
    this._values.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values.internalValue;
  }
}
export interface DnsZonePrimaryDefaultRrSetGroupCnameRecord {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/dns_zone#name DnsZone#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/dns_zone#value DnsZone#value}
  */
  readonly value?: string;
}

export function dnsZonePrimaryDefaultRrSetGroupCnameRecordToTerraform(struct?: DnsZonePrimaryDefaultRrSetGroupCnameRecordOutputReference | DnsZonePrimaryDefaultRrSetGroupCnameRecord): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dnsZonePrimaryDefaultRrSetGroupCnameRecordToHclTerraform(struct?: DnsZonePrimaryDefaultRrSetGroupCnameRecordOutputReference | DnsZonePrimaryDefaultRrSetGroupCnameRecord): any {
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

export class DnsZonePrimaryDefaultRrSetGroupCnameRecordOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DnsZonePrimaryDefaultRrSetGroupCnameRecord | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DnsZonePrimaryDefaultRrSetGroupCnameRecord | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._value = value.value;
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

  // value - computed: false, optional: true, required: false
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
export interface DnsZonePrimaryDefaultRrSetGroupDlvRecordValuesSha1Digest {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/dns_zone#digest DnsZone#digest}
  */
  readonly digest: string;
}

export function dnsZonePrimaryDefaultRrSetGroupDlvRecordValuesSha1DigestToTerraform(struct?: DnsZonePrimaryDefaultRrSetGroupDlvRecordValuesSha1DigestOutputReference | DnsZonePrimaryDefaultRrSetGroupDlvRecordValuesSha1Digest): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    digest: cdktf.stringToTerraform(struct!.digest),
  }
}


export function dnsZonePrimaryDefaultRrSetGroupDlvRecordValuesSha1DigestToHclTerraform(struct?: DnsZonePrimaryDefaultRrSetGroupDlvRecordValuesSha1DigestOutputReference | DnsZonePrimaryDefaultRrSetGroupDlvRecordValuesSha1Digest): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    digest: {
      value: cdktf.stringToHclTerraform(struct!.digest),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DnsZonePrimaryDefaultRrSetGroupDlvRecordValuesSha1DigestOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DnsZonePrimaryDefaultRrSetGroupDlvRecordValuesSha1Digest | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._digest !== undefined) {
      hasAnyValues = true;
      internalValueResult.digest = this._digest;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DnsZonePrimaryDefaultRrSetGroupDlvRecordValuesSha1Digest | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._digest = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._digest = value.digest;
    }
  }

  // digest - computed: false, optional: false, required: true
  private _digest?: string; 
  public get digest() {
    return this.getStringAttribute('digest');
  }
  public set digest(value: string) {
    this._digest = value;
  }
  // Temporarily expose input value. Use with caution.
  public get digestInput() {
    return this._digest;
  }
}
export interface DnsZonePrimaryDefaultRrSetGroupDlvRecordValuesSha256Digest {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/dns_zone#digest DnsZone#digest}
  */
  readonly digest: string;
}

export function dnsZonePrimaryDefaultRrSetGroupDlvRecordValuesSha256DigestToTerraform(struct?: DnsZonePrimaryDefaultRrSetGroupDlvRecordValuesSha256DigestOutputReference | DnsZonePrimaryDefaultRrSetGroupDlvRecordValuesSha256Digest): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    digest: cdktf.stringToTerraform(struct!.digest),
  }
}


export function dnsZonePrimaryDefaultRrSetGroupDlvRecordValuesSha256DigestToHclTerraform(struct?: DnsZonePrimaryDefaultRrSetGroupDlvRecordValuesSha256DigestOutputReference | DnsZonePrimaryDefaultRrSetGroupDlvRecordValuesSha256Digest): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    digest: {
      value: cdktf.stringToHclTerraform(struct!.digest),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DnsZonePrimaryDefaultRrSetGroupDlvRecordValuesSha256DigestOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DnsZonePrimaryDefaultRrSetGroupDlvRecordValuesSha256Digest | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._digest !== undefined) {
      hasAnyValues = true;
      internalValueResult.digest = this._digest;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DnsZonePrimaryDefaultRrSetGroupDlvRecordValuesSha256Digest | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._digest = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._digest = value.digest;
    }
  }

  // digest - computed: false, optional: false, required: true
  private _digest?: string; 
  public get digest() {
    return this.getStringAttribute('digest');
  }
  public set digest(value: string) {
    this._digest = value;
  }
  // Temporarily expose input value. Use with caution.
  public get digestInput() {
    return this._digest;
  }
}
export interface DnsZonePrimaryDefaultRrSetGroupDlvRecordValuesSha384Digest {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/dns_zone#digest DnsZone#digest}
  */
  readonly digest: string;
}

export function dnsZonePrimaryDefaultRrSetGroupDlvRecordValuesSha384DigestToTerraform(struct?: DnsZonePrimaryDefaultRrSetGroupDlvRecordValuesSha384DigestOutputReference | DnsZonePrimaryDefaultRrSetGroupDlvRecordValuesSha384Digest): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    digest: cdktf.stringToTerraform(struct!.digest),
  }
}


export function dnsZonePrimaryDefaultRrSetGroupDlvRecordValuesSha384DigestToHclTerraform(struct?: DnsZonePrimaryDefaultRrSetGroupDlvRecordValuesSha384DigestOutputReference | DnsZonePrimaryDefaultRrSetGroupDlvRecordValuesSha384Digest): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    digest: {
      value: cdktf.stringToHclTerraform(struct!.digest),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DnsZonePrimaryDefaultRrSetGroupDlvRecordValuesSha384DigestOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DnsZonePrimaryDefaultRrSetGroupDlvRecordValuesSha384Digest | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._digest !== undefined) {
      hasAnyValues = true;
      internalValueResult.digest = this._digest;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DnsZonePrimaryDefaultRrSetGroupDlvRecordValuesSha384Digest | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._digest = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._digest = value.digest;
    }
  }

  // digest - computed: false, optional: false, required: true
  private _digest?: string; 
  public get digest() {
    return this.getStringAttribute('digest');
  }
  public set digest(value: string) {
    this._digest = value;
  }
  // Temporarily expose input value. Use with caution.
  public get digestInput() {
    return this._digest;
  }
}
export interface DnsZonePrimaryDefaultRrSetGroupDlvRecordValues {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/dns_zone#ds_key_algorithm DnsZone#ds_key_algorithm}
  */
  readonly dsKeyAlgorithm: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/dns_zone#key_tag DnsZone#key_tag}
  */
  readonly keyTag: number;
  /**
  * sha1_digest block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/dns_zone#sha1_digest DnsZone#sha1_digest}
  */
  readonly sha1Digest?: DnsZonePrimaryDefaultRrSetGroupDlvRecordValuesSha1Digest;
  /**
  * sha256_digest block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/dns_zone#sha256_digest DnsZone#sha256_digest}
  */
  readonly sha256Digest?: DnsZonePrimaryDefaultRrSetGroupDlvRecordValuesSha256Digest;
  /**
  * sha384_digest block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/dns_zone#sha384_digest DnsZone#sha384_digest}
  */
  readonly sha384Digest?: DnsZonePrimaryDefaultRrSetGroupDlvRecordValuesSha384Digest;
}

export function dnsZonePrimaryDefaultRrSetGroupDlvRecordValuesToTerraform(struct?: DnsZonePrimaryDefaultRrSetGroupDlvRecordValues | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ds_key_algorithm: cdktf.stringToTerraform(struct!.dsKeyAlgorithm),
    key_tag: cdktf.numberToTerraform(struct!.keyTag),
    sha1_digest: dnsZonePrimaryDefaultRrSetGroupDlvRecordValuesSha1DigestToTerraform(struct!.sha1Digest),
    sha256_digest: dnsZonePrimaryDefaultRrSetGroupDlvRecordValuesSha256DigestToTerraform(struct!.sha256Digest),
    sha384_digest: dnsZonePrimaryDefaultRrSetGroupDlvRecordValuesSha384DigestToTerraform(struct!.sha384Digest),
  }
}


export function dnsZonePrimaryDefaultRrSetGroupDlvRecordValuesToHclTerraform(struct?: DnsZonePrimaryDefaultRrSetGroupDlvRecordValues | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ds_key_algorithm: {
      value: cdktf.stringToHclTerraform(struct!.dsKeyAlgorithm),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key_tag: {
      value: cdktf.numberToHclTerraform(struct!.keyTag),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sha1_digest: {
      value: dnsZonePrimaryDefaultRrSetGroupDlvRecordValuesSha1DigestToHclTerraform(struct!.sha1Digest),
      isBlock: true,
      type: "list",
      storageClassType: "DnsZonePrimaryDefaultRrSetGroupDlvRecordValuesSha1DigestList",
    },
    sha256_digest: {
      value: dnsZonePrimaryDefaultRrSetGroupDlvRecordValuesSha256DigestToHclTerraform(struct!.sha256Digest),
      isBlock: true,
      type: "list",
      storageClassType: "DnsZonePrimaryDefaultRrSetGroupDlvRecordValuesSha256DigestList",
    },
    sha384_digest: {
      value: dnsZonePrimaryDefaultRrSetGroupDlvRecordValuesSha384DigestToHclTerraform(struct!.sha384Digest),
      isBlock: true,
      type: "list",
      storageClassType: "DnsZonePrimaryDefaultRrSetGroupDlvRecordValuesSha384DigestList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DnsZonePrimaryDefaultRrSetGroupDlvRecordValuesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DnsZonePrimaryDefaultRrSetGroupDlvRecordValues | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dsKeyAlgorithm !== undefined) {
      hasAnyValues = true;
      internalValueResult.dsKeyAlgorithm = this._dsKeyAlgorithm;
    }
    if (this._keyTag !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyTag = this._keyTag;
    }
    if (this._sha1Digest?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sha1Digest = this._sha1Digest?.internalValue;
    }
    if (this._sha256Digest?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sha256Digest = this._sha256Digest?.internalValue;
    }
    if (this._sha384Digest?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sha384Digest = this._sha384Digest?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DnsZonePrimaryDefaultRrSetGroupDlvRecordValues | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dsKeyAlgorithm = undefined;
      this._keyTag = undefined;
      this._sha1Digest.internalValue = undefined;
      this._sha256Digest.internalValue = undefined;
      this._sha384Digest.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dsKeyAlgorithm = value.dsKeyAlgorithm;
      this._keyTag = value.keyTag;
      this._sha1Digest.internalValue = value.sha1Digest;
      this._sha256Digest.internalValue = value.sha256Digest;
      this._sha384Digest.internalValue = value.sha384Digest;
    }
  }

  // ds_key_algorithm - computed: false, optional: false, required: true
  private _dsKeyAlgorithm?: string; 
  public get dsKeyAlgorithm() {
    return this.getStringAttribute('ds_key_algorithm');
  }
  public set dsKeyAlgorithm(value: string) {
    this._dsKeyAlgorithm = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dsKeyAlgorithmInput() {
    return this._dsKeyAlgorithm;
  }

  // key_tag - computed: false, optional: false, required: true
  private _keyTag?: number; 
  public get keyTag() {
    return this.getNumberAttribute('key_tag');
  }
  public set keyTag(value: number) {
    this._keyTag = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyTagInput() {
    return this._keyTag;
  }

  // sha1_digest - computed: false, optional: true, required: false
  private _sha1Digest = new DnsZonePrimaryDefaultRrSetGroupDlvRecordValuesSha1DigestOutputReference(this, "sha1_digest");
  public get sha1Digest() {
    return this._sha1Digest;
  }
  public putSha1Digest(value: DnsZonePrimaryDefaultRrSetGroupDlvRecordValuesSha1Digest) {
    this._sha1Digest.internalValue = value;
  }
  public resetSha1Digest() {
    this._sha1Digest.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sha1DigestInput() {
    return this._sha1Digest.internalValue;
  }

  // sha256_digest - computed: false, optional: true, required: false
  private _sha256Digest = new DnsZonePrimaryDefaultRrSetGroupDlvRecordValuesSha256DigestOutputReference(this, "sha256_digest");
  public get sha256Digest() {
    return this._sha256Digest;
  }
  public putSha256Digest(value: DnsZonePrimaryDefaultRrSetGroupDlvRecordValuesSha256Digest) {
    this._sha256Digest.internalValue = value;
  }
  public resetSha256Digest() {
    this._sha256Digest.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sha256DigestInput() {
    return this._sha256Digest.internalValue;
  }

  // sha384_digest - computed: false, optional: true, required: false
  private _sha384Digest = new DnsZonePrimaryDefaultRrSetGroupDlvRecordValuesSha384DigestOutputReference(this, "sha384_digest");
  public get sha384Digest() {
    return this._sha384Digest;
  }
  public putSha384Digest(value: DnsZonePrimaryDefaultRrSetGroupDlvRecordValuesSha384Digest) {
    this._sha384Digest.internalValue = value;
  }
  public resetSha384Digest() {
    this._sha384Digest.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sha384DigestInput() {
    return this._sha384Digest.internalValue;
  }
}

export class DnsZonePrimaryDefaultRrSetGroupDlvRecordValuesList extends cdktf.ComplexList {
  public internalValue? : DnsZonePrimaryDefaultRrSetGroupDlvRecordValues[] | cdktf.IResolvable

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
  public get(index: number): DnsZonePrimaryDefaultRrSetGroupDlvRecordValuesOutputReference {
    return new DnsZonePrimaryDefaultRrSetGroupDlvRecordValuesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DnsZonePrimaryDefaultRrSetGroupDlvRecord {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/dns_zone#name DnsZone#name}
  */
  readonly name?: string;
  /**
  * values block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/dns_zone#values DnsZone#values}
  */
  readonly values: DnsZonePrimaryDefaultRrSetGroupDlvRecordValues[] | cdktf.IResolvable;
}

export function dnsZonePrimaryDefaultRrSetGroupDlvRecordToTerraform(struct?: DnsZonePrimaryDefaultRrSetGroupDlvRecordOutputReference | DnsZonePrimaryDefaultRrSetGroupDlvRecord): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    values: cdktf.listMapper(dnsZonePrimaryDefaultRrSetGroupDlvRecordValuesToTerraform, true)(struct!.values),
  }
}


export function dnsZonePrimaryDefaultRrSetGroupDlvRecordToHclTerraform(struct?: DnsZonePrimaryDefaultRrSetGroupDlvRecordOutputReference | DnsZonePrimaryDefaultRrSetGroupDlvRecord): any {
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
    values: {
      value: cdktf.listMapperHcl(dnsZonePrimaryDefaultRrSetGroupDlvRecordValuesToHclTerraform, true)(struct!.values),
      isBlock: true,
      type: "list",
      storageClassType: "DnsZonePrimaryDefaultRrSetGroupDlvRecordValuesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DnsZonePrimaryDefaultRrSetGroupDlvRecordOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DnsZonePrimaryDefaultRrSetGroupDlvRecord | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._values?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DnsZonePrimaryDefaultRrSetGroupDlvRecord | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._values.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._values.internalValue = value.values;
    }
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

  // values - computed: false, optional: false, required: true
  private _values = new DnsZonePrimaryDefaultRrSetGroupDlvRecordValuesList(this, "values", false);
  public get values() {
    return this._values;
  }
  public putValues(value: DnsZonePrimaryDefaultRrSetGroupDlvRecordValues[] | cdktf.IResolvable) {
    this._values.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values.internalValue;
  }
}
export interface DnsZonePrimaryDefaultRrSetGroupDsRecordValuesSha1Digest {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/dns_zone#digest DnsZone#digest}
  */
  readonly digest: string;
}

export function dnsZonePrimaryDefaultRrSetGroupDsRecordValuesSha1DigestToTerraform(struct?: DnsZonePrimaryDefaultRrSetGroupDsRecordValuesSha1DigestOutputReference | DnsZonePrimaryDefaultRrSetGroupDsRecordValuesSha1Digest): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    digest: cdktf.stringToTerraform(struct!.digest),
  }
}


export function dnsZonePrimaryDefaultRrSetGroupDsRecordValuesSha1DigestToHclTerraform(struct?: DnsZonePrimaryDefaultRrSetGroupDsRecordValuesSha1DigestOutputReference | DnsZonePrimaryDefaultRrSetGroupDsRecordValuesSha1Digest): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    digest: {
      value: cdktf.stringToHclTerraform(struct!.digest),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DnsZonePrimaryDefaultRrSetGroupDsRecordValuesSha1DigestOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DnsZonePrimaryDefaultRrSetGroupDsRecordValuesSha1Digest | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._digest !== undefined) {
      hasAnyValues = true;
      internalValueResult.digest = this._digest;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DnsZonePrimaryDefaultRrSetGroupDsRecordValuesSha1Digest | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._digest = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._digest = value.digest;
    }
  }

  // digest - computed: false, optional: false, required: true
  private _digest?: string; 
  public get digest() {
    return this.getStringAttribute('digest');
  }
  public set digest(value: string) {
    this._digest = value;
  }
  // Temporarily expose input value. Use with caution.
  public get digestInput() {
    return this._digest;
  }
}
export interface DnsZonePrimaryDefaultRrSetGroupDsRecordValuesSha256Digest {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/dns_zone#digest DnsZone#digest}
  */
  readonly digest: string;
}

export function dnsZonePrimaryDefaultRrSetGroupDsRecordValuesSha256DigestToTerraform(struct?: DnsZonePrimaryDefaultRrSetGroupDsRecordValuesSha256DigestOutputReference | DnsZonePrimaryDefaultRrSetGroupDsRecordValuesSha256Digest): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    digest: cdktf.stringToTerraform(struct!.digest),
  }
}


export function dnsZonePrimaryDefaultRrSetGroupDsRecordValuesSha256DigestToHclTerraform(struct?: DnsZonePrimaryDefaultRrSetGroupDsRecordValuesSha256DigestOutputReference | DnsZonePrimaryDefaultRrSetGroupDsRecordValuesSha256Digest): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    digest: {
      value: cdktf.stringToHclTerraform(struct!.digest),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DnsZonePrimaryDefaultRrSetGroupDsRecordValuesSha256DigestOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DnsZonePrimaryDefaultRrSetGroupDsRecordValuesSha256Digest | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._digest !== undefined) {
      hasAnyValues = true;
      internalValueResult.digest = this._digest;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DnsZonePrimaryDefaultRrSetGroupDsRecordValuesSha256Digest | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._digest = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._digest = value.digest;
    }
  }

  // digest - computed: false, optional: false, required: true
  private _digest?: string; 
  public get digest() {
    return this.getStringAttribute('digest');
  }
  public set digest(value: string) {
    this._digest = value;
  }
  // Temporarily expose input value. Use with caution.
  public get digestInput() {
    return this._digest;
  }
}
export interface DnsZonePrimaryDefaultRrSetGroupDsRecordValuesSha384Digest {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/dns_zone#digest DnsZone#digest}
  */
  readonly digest: string;
}

export function dnsZonePrimaryDefaultRrSetGroupDsRecordValuesSha384DigestToTerraform(struct?: DnsZonePrimaryDefaultRrSetGroupDsRecordValuesSha384DigestOutputReference | DnsZonePrimaryDefaultRrSetGroupDsRecordValuesSha384Digest): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    digest: cdktf.stringToTerraform(struct!.digest),
  }
}


export function dnsZonePrimaryDefaultRrSetGroupDsRecordValuesSha384DigestToHclTerraform(struct?: DnsZonePrimaryDefaultRrSetGroupDsRecordValuesSha384DigestOutputReference | DnsZonePrimaryDefaultRrSetGroupDsRecordValuesSha384Digest): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    digest: {
      value: cdktf.stringToHclTerraform(struct!.digest),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DnsZonePrimaryDefaultRrSetGroupDsRecordValuesSha384DigestOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DnsZonePrimaryDefaultRrSetGroupDsRecordValuesSha384Digest | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._digest !== undefined) {
      hasAnyValues = true;
      internalValueResult.digest = this._digest;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DnsZonePrimaryDefaultRrSetGroupDsRecordValuesSha384Digest | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._digest = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._digest = value.digest;
    }
  }

  // digest - computed: false, optional: false, required: true
  private _digest?: string; 
  public get digest() {
    return this.getStringAttribute('digest');
  }
  public set digest(value: string) {
    this._digest = value;
  }
  // Temporarily expose input value. Use with caution.
  public get digestInput() {
    return this._digest;
  }
}
export interface DnsZonePrimaryDefaultRrSetGroupDsRecordValues {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/dns_zone#ds_key_algorithm DnsZone#ds_key_algorithm}
  */
  readonly dsKeyAlgorithm: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/dns_zone#key_tag DnsZone#key_tag}
  */
  readonly keyTag: number;
  /**
  * sha1_digest block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/dns_zone#sha1_digest DnsZone#sha1_digest}
  */
  readonly sha1Digest?: DnsZonePrimaryDefaultRrSetGroupDsRecordValuesSha1Digest;
  /**
  * sha256_digest block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/dns_zone#sha256_digest DnsZone#sha256_digest}
  */
  readonly sha256Digest?: DnsZonePrimaryDefaultRrSetGroupDsRecordValuesSha256Digest;
  /**
  * sha384_digest block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/dns_zone#sha384_digest DnsZone#sha384_digest}
  */
  readonly sha384Digest?: DnsZonePrimaryDefaultRrSetGroupDsRecordValuesSha384Digest;
}

export function dnsZonePrimaryDefaultRrSetGroupDsRecordValuesToTerraform(struct?: DnsZonePrimaryDefaultRrSetGroupDsRecordValues | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ds_key_algorithm: cdktf.stringToTerraform(struct!.dsKeyAlgorithm),
    key_tag: cdktf.numberToTerraform(struct!.keyTag),
    sha1_digest: dnsZonePrimaryDefaultRrSetGroupDsRecordValuesSha1DigestToTerraform(struct!.sha1Digest),
    sha256_digest: dnsZonePrimaryDefaultRrSetGroupDsRecordValuesSha256DigestToTerraform(struct!.sha256Digest),
    sha384_digest: dnsZonePrimaryDefaultRrSetGroupDsRecordValuesSha384DigestToTerraform(struct!.sha384Digest),
  }
}


export function dnsZonePrimaryDefaultRrSetGroupDsRecordValuesToHclTerraform(struct?: DnsZonePrimaryDefaultRrSetGroupDsRecordValues | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ds_key_algorithm: {
      value: cdktf.stringToHclTerraform(struct!.dsKeyAlgorithm),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key_tag: {
      value: cdktf.numberToHclTerraform(struct!.keyTag),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sha1_digest: {
      value: dnsZonePrimaryDefaultRrSetGroupDsRecordValuesSha1DigestToHclTerraform(struct!.sha1Digest),
      isBlock: true,
      type: "list",
      storageClassType: "DnsZonePrimaryDefaultRrSetGroupDsRecordValuesSha1DigestList",
    },
    sha256_digest: {
      value: dnsZonePrimaryDefaultRrSetGroupDsRecordValuesSha256DigestToHclTerraform(struct!.sha256Digest),
      isBlock: true,
      type: "list",
      storageClassType: "DnsZonePrimaryDefaultRrSetGroupDsRecordValuesSha256DigestList",
    },
    sha384_digest: {
      value: dnsZonePrimaryDefaultRrSetGroupDsRecordValuesSha384DigestToHclTerraform(struct!.sha384Digest),
      isBlock: true,
      type: "list",
      storageClassType: "DnsZonePrimaryDefaultRrSetGroupDsRecordValuesSha384DigestList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DnsZonePrimaryDefaultRrSetGroupDsRecordValuesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DnsZonePrimaryDefaultRrSetGroupDsRecordValues | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dsKeyAlgorithm !== undefined) {
      hasAnyValues = true;
      internalValueResult.dsKeyAlgorithm = this._dsKeyAlgorithm;
    }
    if (this._keyTag !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyTag = this._keyTag;
    }
    if (this._sha1Digest?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sha1Digest = this._sha1Digest?.internalValue;
    }
    if (this._sha256Digest?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sha256Digest = this._sha256Digest?.internalValue;
    }
    if (this._sha384Digest?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sha384Digest = this._sha384Digest?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DnsZonePrimaryDefaultRrSetGroupDsRecordValues | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dsKeyAlgorithm = undefined;
      this._keyTag = undefined;
      this._sha1Digest.internalValue = undefined;
      this._sha256Digest.internalValue = undefined;
      this._sha384Digest.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dsKeyAlgorithm = value.dsKeyAlgorithm;
      this._keyTag = value.keyTag;
      this._sha1Digest.internalValue = value.sha1Digest;
      this._sha256Digest.internalValue = value.sha256Digest;
      this._sha384Digest.internalValue = value.sha384Digest;
    }
  }

  // ds_key_algorithm - computed: false, optional: false, required: true
  private _dsKeyAlgorithm?: string; 
  public get dsKeyAlgorithm() {
    return this.getStringAttribute('ds_key_algorithm');
  }
  public set dsKeyAlgorithm(value: string) {
    this._dsKeyAlgorithm = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dsKeyAlgorithmInput() {
    return this._dsKeyAlgorithm;
  }

  // key_tag - computed: false, optional: false, required: true
  private _keyTag?: number; 
  public get keyTag() {
    return this.getNumberAttribute('key_tag');
  }
  public set keyTag(value: number) {
    this._keyTag = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyTagInput() {
    return this._keyTag;
  }

  // sha1_digest - computed: false, optional: true, required: false
  private _sha1Digest = new DnsZonePrimaryDefaultRrSetGroupDsRecordValuesSha1DigestOutputReference(this, "sha1_digest");
  public get sha1Digest() {
    return this._sha1Digest;
  }
  public putSha1Digest(value: DnsZonePrimaryDefaultRrSetGroupDsRecordValuesSha1Digest) {
    this._sha1Digest.internalValue = value;
  }
  public resetSha1Digest() {
    this._sha1Digest.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sha1DigestInput() {
    return this._sha1Digest.internalValue;
  }

  // sha256_digest - computed: false, optional: true, required: false
  private _sha256Digest = new DnsZonePrimaryDefaultRrSetGroupDsRecordValuesSha256DigestOutputReference(this, "sha256_digest");
  public get sha256Digest() {
    return this._sha256Digest;
  }
  public putSha256Digest(value: DnsZonePrimaryDefaultRrSetGroupDsRecordValuesSha256Digest) {
    this._sha256Digest.internalValue = value;
  }
  public resetSha256Digest() {
    this._sha256Digest.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sha256DigestInput() {
    return this._sha256Digest.internalValue;
  }

  // sha384_digest - computed: false, optional: true, required: false
  private _sha384Digest = new DnsZonePrimaryDefaultRrSetGroupDsRecordValuesSha384DigestOutputReference(this, "sha384_digest");
  public get sha384Digest() {
    return this._sha384Digest;
  }
  public putSha384Digest(value: DnsZonePrimaryDefaultRrSetGroupDsRecordValuesSha384Digest) {
    this._sha384Digest.internalValue = value;
  }
  public resetSha384Digest() {
    this._sha384Digest.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sha384DigestInput() {
    return this._sha384Digest.internalValue;
  }
}

export class DnsZonePrimaryDefaultRrSetGroupDsRecordValuesList extends cdktf.ComplexList {
  public internalValue? : DnsZonePrimaryDefaultRrSetGroupDsRecordValues[] | cdktf.IResolvable

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
  public get(index: number): DnsZonePrimaryDefaultRrSetGroupDsRecordValuesOutputReference {
    return new DnsZonePrimaryDefaultRrSetGroupDsRecordValuesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DnsZonePrimaryDefaultRrSetGroupDsRecord {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/dns_zone#name DnsZone#name}
  */
  readonly name?: string;
  /**
  * values block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/dns_zone#values DnsZone#values}
  */
  readonly values: DnsZonePrimaryDefaultRrSetGroupDsRecordValues[] | cdktf.IResolvable;
}

export function dnsZonePrimaryDefaultRrSetGroupDsRecordToTerraform(struct?: DnsZonePrimaryDefaultRrSetGroupDsRecordOutputReference | DnsZonePrimaryDefaultRrSetGroupDsRecord): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    values: cdktf.listMapper(dnsZonePrimaryDefaultRrSetGroupDsRecordValuesToTerraform, true)(struct!.values),
  }
}


export function dnsZonePrimaryDefaultRrSetGroupDsRecordToHclTerraform(struct?: DnsZonePrimaryDefaultRrSetGroupDsRecordOutputReference | DnsZonePrimaryDefaultRrSetGroupDsRecord): any {
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
    values: {
      value: cdktf.listMapperHcl(dnsZonePrimaryDefaultRrSetGroupDsRecordValuesToHclTerraform, true)(struct!.values),
      isBlock: true,
      type: "list",
      storageClassType: "DnsZonePrimaryDefaultRrSetGroupDsRecordValuesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DnsZonePrimaryDefaultRrSetGroupDsRecordOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DnsZonePrimaryDefaultRrSetGroupDsRecord | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._values?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DnsZonePrimaryDefaultRrSetGroupDsRecord | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._values.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._values.internalValue = value.values;
    }
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

  // values - computed: false, optional: false, required: true
  private _values = new DnsZonePrimaryDefaultRrSetGroupDsRecordValuesList(this, "values", false);
  public get values() {
    return this._values;
  }
  public putValues(value: DnsZonePrimaryDefaultRrSetGroupDsRecordValues[] | cdktf.IResolvable) {
    this._values.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values.internalValue;
  }
}
export interface DnsZonePrimaryDefaultRrSetGroupEui48Record {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/dns_zone#name DnsZone#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/dns_zone#value DnsZone#value}
  */
  readonly value: string;
}

export function dnsZonePrimaryDefaultRrSetGroupEui48RecordToTerraform(struct?: DnsZonePrimaryDefaultRrSetGroupEui48RecordOutputReference | DnsZonePrimaryDefaultRrSetGroupEui48Record): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dnsZonePrimaryDefaultRrSetGroupEui48RecordToHclTerraform(struct?: DnsZonePrimaryDefaultRrSetGroupEui48RecordOutputReference | DnsZonePrimaryDefaultRrSetGroupEui48Record): any {
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

export class DnsZonePrimaryDefaultRrSetGroupEui48RecordOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DnsZonePrimaryDefaultRrSetGroupEui48Record | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DnsZonePrimaryDefaultRrSetGroupEui48Record | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._value = value.value;
    }
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

  // value - computed: false, optional: false, required: true
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
export interface DnsZonePrimaryDefaultRrSetGroupEui64Record {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/dns_zone#name DnsZone#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/dns_zone#value DnsZone#value}
  */
  readonly value: string;
}

export function dnsZonePrimaryDefaultRrSetGroupEui64RecordToTerraform(struct?: DnsZonePrimaryDefaultRrSetGroupEui64RecordOutputReference | DnsZonePrimaryDefaultRrSetGroupEui64Record): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dnsZonePrimaryDefaultRrSetGroupEui64RecordToHclTerraform(struct?: DnsZonePrimaryDefaultRrSetGroupEui64RecordOutputReference | DnsZonePrimaryDefaultRrSetGroupEui64Record): any {
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

export class DnsZonePrimaryDefaultRrSetGroupEui64RecordOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DnsZonePrimaryDefaultRrSetGroupEui64Record | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DnsZonePrimaryDefaultRrSetGroupEui64Record | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._value = value.value;
    }
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

  // value - computed: false, optional: false, required: true
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
export interface DnsZonePrimaryDefaultRrSetGroupLbRecordValue {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/dns_zone#name DnsZone#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/dns_zone#namespace DnsZone#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/dns_zone#tenant DnsZone#tenant}
  */
  readonly tenant?: string;
}

export function dnsZonePrimaryDefaultRrSetGroupLbRecordValueToTerraform(struct?: DnsZonePrimaryDefaultRrSetGroupLbRecordValueOutputReference | DnsZonePrimaryDefaultRrSetGroupLbRecordValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    tenant: cdktf.stringToTerraform(struct!.tenant),
  }
}


export function dnsZonePrimaryDefaultRrSetGroupLbRecordValueToHclTerraform(struct?: DnsZonePrimaryDefaultRrSetGroupLbRecordValueOutputReference | DnsZonePrimaryDefaultRrSetGroupLbRecordValue): any {
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
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tenant: {
      value: cdktf.stringToHclTerraform(struct!.tenant),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DnsZonePrimaryDefaultRrSetGroupLbRecordValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DnsZonePrimaryDefaultRrSetGroupLbRecordValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._tenant !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenant = this._tenant;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DnsZonePrimaryDefaultRrSetGroupLbRecordValue | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._namespace = undefined;
      this._tenant = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._namespace = value.namespace;
      this._tenant = value.tenant;
    }
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

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // tenant - computed: false, optional: true, required: false
  private _tenant?: string; 
  public get tenant() {
    return this.getStringAttribute('tenant');
  }
  public set tenant(value: string) {
    this._tenant = value;
  }
  public resetTenant() {
    this._tenant = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantInput() {
    return this._tenant;
  }
}
export interface DnsZonePrimaryDefaultRrSetGroupLbRecord {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/dns_zone#name DnsZone#name}
  */
  readonly name?: string;
  /**
  * value block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/dns_zone#value DnsZone#value}
  */
  readonly value?: DnsZonePrimaryDefaultRrSetGroupLbRecordValue;
}

export function dnsZonePrimaryDefaultRrSetGroupLbRecordToTerraform(struct?: DnsZonePrimaryDefaultRrSetGroupLbRecordOutputReference | DnsZonePrimaryDefaultRrSetGroupLbRecord): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: dnsZonePrimaryDefaultRrSetGroupLbRecordValueToTerraform(struct!.value),
  }
}


export function dnsZonePrimaryDefaultRrSetGroupLbRecordToHclTerraform(struct?: DnsZonePrimaryDefaultRrSetGroupLbRecordOutputReference | DnsZonePrimaryDefaultRrSetGroupLbRecord): any {
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
    value: {
      value: dnsZonePrimaryDefaultRrSetGroupLbRecordValueToHclTerraform(struct!.value),
      isBlock: true,
      type: "list",
      storageClassType: "DnsZonePrimaryDefaultRrSetGroupLbRecordValueList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DnsZonePrimaryDefaultRrSetGroupLbRecordOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DnsZonePrimaryDefaultRrSetGroupLbRecord | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DnsZonePrimaryDefaultRrSetGroupLbRecord | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._value.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._value.internalValue = value.value;
    }
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

  // value - computed: false, optional: true, required: false
  private _value = new DnsZonePrimaryDefaultRrSetGroupLbRecordValueOutputReference(this, "value");
  public get value() {
    return this._value;
  }
  public putValue(value: DnsZonePrimaryDefaultRrSetGroupLbRecordValue) {
    this._value.internalValue = value;
  }
  public resetValue() {
    this._value.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value.internalValue;
  }
}
export interface DnsZonePrimaryDefaultRrSetGroupLocRecordValues {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/dns_zone#altitude DnsZone#altitude}
  */
  readonly altitude: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/dns_zone#horizontal_precision DnsZone#horizontal_precision}
  */
  readonly horizontalPrecision?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/dns_zone#latitude_degree DnsZone#latitude_degree}
  */
  readonly latitudeDegree: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/dns_zone#latitude_hemisphere DnsZone#latitude_hemisphere}
  */
  readonly latitudeHemisphere: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/dns_zone#latitude_minute DnsZone#latitude_minute}
  */
  readonly latitudeMinute?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/dns_zone#latitude_second DnsZone#latitude_second}
  */
  readonly latitudeSecond?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/dns_zone#location_diameter DnsZone#location_diameter}
  */
  readonly locationDiameter?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/dns_zone#longitude_degree DnsZone#longitude_degree}
  */
  readonly longitudeDegree: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/dns_zone#longitude_hemisphere DnsZone#longitude_hemisphere}
  */
  readonly longitudeHemisphere: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/dns_zone#longitude_minute DnsZone#longitude_minute}
  */
  readonly longitudeMinute?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/dns_zone#longitude_second DnsZone#longitude_second}
  */
  readonly longitudeSecond?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/dns_zone#vertical_precision DnsZone#vertical_precision}
  */
  readonly verticalPrecision?: number;
}

export function dnsZonePrimaryDefaultRrSetGroupLocRecordValuesToTerraform(struct?: DnsZonePrimaryDefaultRrSetGroupLocRecordValues | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    altitude: cdktf.numberToTerraform(struct!.altitude),
    horizontal_precision: cdktf.numberToTerraform(struct!.horizontalPrecision),
    latitude_degree: cdktf.numberToTerraform(struct!.latitudeDegree),
    latitude_hemisphere: cdktf.stringToTerraform(struct!.latitudeHemisphere),
    latitude_minute: cdktf.numberToTerraform(struct!.latitudeMinute),
    latitude_second: cdktf.numberToTerraform(struct!.latitudeSecond),
    location_diameter: cdktf.numberToTerraform(struct!.locationDiameter),
    longitude_degree: cdktf.numberToTerraform(struct!.longitudeDegree),
    longitude_hemisphere: cdktf.stringToTerraform(struct!.longitudeHemisphere),
    longitude_minute: cdktf.numberToTerraform(struct!.longitudeMinute),
    longitude_second: cdktf.numberToTerraform(struct!.longitudeSecond),
    vertical_precision: cdktf.numberToTerraform(struct!.verticalPrecision),
  }
}


export function dnsZonePrimaryDefaultRrSetGroupLocRecordValuesToHclTerraform(struct?: DnsZonePrimaryDefaultRrSetGroupLocRecordValues | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    altitude: {
      value: cdktf.numberToHclTerraform(struct!.altitude),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    horizontal_precision: {
      value: cdktf.numberToHclTerraform(struct!.horizontalPrecision),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    latitude_degree: {
      value: cdktf.numberToHclTerraform(struct!.latitudeDegree),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    latitude_hemisphere: {
      value: cdktf.stringToHclTerraform(struct!.latitudeHemisphere),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    latitude_minute: {
      value: cdktf.numberToHclTerraform(struct!.latitudeMinute),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    latitude_second: {
      value: cdktf.numberToHclTerraform(struct!.latitudeSecond),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    location_diameter: {
      value: cdktf.numberToHclTerraform(struct!.locationDiameter),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    longitude_degree: {
      value: cdktf.numberToHclTerraform(struct!.longitudeDegree),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    longitude_hemisphere: {
      value: cdktf.stringToHclTerraform(struct!.longitudeHemisphere),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    longitude_minute: {
      value: cdktf.numberToHclTerraform(struct!.longitudeMinute),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    longitude_second: {
      value: cdktf.numberToHclTerraform(struct!.longitudeSecond),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    vertical_precision: {
      value: cdktf.numberToHclTerraform(struct!.verticalPrecision),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DnsZonePrimaryDefaultRrSetGroupLocRecordValuesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DnsZonePrimaryDefaultRrSetGroupLocRecordValues | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._altitude !== undefined) {
      hasAnyValues = true;
      internalValueResult.altitude = this._altitude;
    }
    if (this._horizontalPrecision !== undefined) {
      hasAnyValues = true;
      internalValueResult.horizontalPrecision = this._horizontalPrecision;
    }
    if (this._latitudeDegree !== undefined) {
      hasAnyValues = true;
      internalValueResult.latitudeDegree = this._latitudeDegree;
    }
    if (this._latitudeHemisphere !== undefined) {
      hasAnyValues = true;
      internalValueResult.latitudeHemisphere = this._latitudeHemisphere;
    }
    if (this._latitudeMinute !== undefined) {
      hasAnyValues = true;
      internalValueResult.latitudeMinute = this._latitudeMinute;
    }
    if (this._latitudeSecond !== undefined) {
      hasAnyValues = true;
      internalValueResult.latitudeSecond = this._latitudeSecond;
    }
    if (this._locationDiameter !== undefined) {
      hasAnyValues = true;
      internalValueResult.locationDiameter = this._locationDiameter;
    }
    if (this._longitudeDegree !== undefined) {
      hasAnyValues = true;
      internalValueResult.longitudeDegree = this._longitudeDegree;
    }
    if (this._longitudeHemisphere !== undefined) {
      hasAnyValues = true;
      internalValueResult.longitudeHemisphere = this._longitudeHemisphere;
    }
    if (this._longitudeMinute !== undefined) {
      hasAnyValues = true;
      internalValueResult.longitudeMinute = this._longitudeMinute;
    }
    if (this._longitudeSecond !== undefined) {
      hasAnyValues = true;
      internalValueResult.longitudeSecond = this._longitudeSecond;
    }
    if (this._verticalPrecision !== undefined) {
      hasAnyValues = true;
      internalValueResult.verticalPrecision = this._verticalPrecision;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DnsZonePrimaryDefaultRrSetGroupLocRecordValues | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._altitude = undefined;
      this._horizontalPrecision = undefined;
      this._latitudeDegree = undefined;
      this._latitudeHemisphere = undefined;
      this._latitudeMinute = undefined;
      this._latitudeSecond = undefined;
      this._locationDiameter = undefined;
      this._longitudeDegree = undefined;
      this._longitudeHemisphere = undefined;
      this._longitudeMinute = undefined;
      this._longitudeSecond = undefined;
      this._verticalPrecision = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._altitude = value.altitude;
      this._horizontalPrecision = value.horizontalPrecision;
      this._latitudeDegree = value.latitudeDegree;
      this._latitudeHemisphere = value.latitudeHemisphere;
      this._latitudeMinute = value.latitudeMinute;
      this._latitudeSecond = value.latitudeSecond;
      this._locationDiameter = value.locationDiameter;
      this._longitudeDegree = value.longitudeDegree;
      this._longitudeHemisphere = value.longitudeHemisphere;
      this._longitudeMinute = value.longitudeMinute;
      this._longitudeSecond = value.longitudeSecond;
      this._verticalPrecision = value.verticalPrecision;
    }
  }

  // altitude - computed: false, optional: false, required: true
  private _altitude?: number; 
  public get altitude() {
    return this.getNumberAttribute('altitude');
  }
  public set altitude(value: number) {
    this._altitude = value;
  }
  // Temporarily expose input value. Use with caution.
  public get altitudeInput() {
    return this._altitude;
  }

  // horizontal_precision - computed: false, optional: true, required: false
  private _horizontalPrecision?: number; 
  public get horizontalPrecision() {
    return this.getNumberAttribute('horizontal_precision');
  }
  public set horizontalPrecision(value: number) {
    this._horizontalPrecision = value;
  }
  public resetHorizontalPrecision() {
    this._horizontalPrecision = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get horizontalPrecisionInput() {
    return this._horizontalPrecision;
  }

  // latitude_degree - computed: false, optional: false, required: true
  private _latitudeDegree?: number; 
  public get latitudeDegree() {
    return this.getNumberAttribute('latitude_degree');
  }
  public set latitudeDegree(value: number) {
    this._latitudeDegree = value;
  }
  // Temporarily expose input value. Use with caution.
  public get latitudeDegreeInput() {
    return this._latitudeDegree;
  }

  // latitude_hemisphere - computed: false, optional: false, required: true
  private _latitudeHemisphere?: string; 
  public get latitudeHemisphere() {
    return this.getStringAttribute('latitude_hemisphere');
  }
  public set latitudeHemisphere(value: string) {
    this._latitudeHemisphere = value;
  }
  // Temporarily expose input value. Use with caution.
  public get latitudeHemisphereInput() {
    return this._latitudeHemisphere;
  }

  // latitude_minute - computed: false, optional: true, required: false
  private _latitudeMinute?: number; 
  public get latitudeMinute() {
    return this.getNumberAttribute('latitude_minute');
  }
  public set latitudeMinute(value: number) {
    this._latitudeMinute = value;
  }
  public resetLatitudeMinute() {
    this._latitudeMinute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get latitudeMinuteInput() {
    return this._latitudeMinute;
  }

  // latitude_second - computed: false, optional: true, required: false
  private _latitudeSecond?: number; 
  public get latitudeSecond() {
    return this.getNumberAttribute('latitude_second');
  }
  public set latitudeSecond(value: number) {
    this._latitudeSecond = value;
  }
  public resetLatitudeSecond() {
    this._latitudeSecond = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get latitudeSecondInput() {
    return this._latitudeSecond;
  }

  // location_diameter - computed: false, optional: true, required: false
  private _locationDiameter?: number; 
  public get locationDiameter() {
    return this.getNumberAttribute('location_diameter');
  }
  public set locationDiameter(value: number) {
    this._locationDiameter = value;
  }
  public resetLocationDiameter() {
    this._locationDiameter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locationDiameterInput() {
    return this._locationDiameter;
  }

  // longitude_degree - computed: false, optional: false, required: true
  private _longitudeDegree?: number; 
  public get longitudeDegree() {
    return this.getNumberAttribute('longitude_degree');
  }
  public set longitudeDegree(value: number) {
    this._longitudeDegree = value;
  }
  // Temporarily expose input value. Use with caution.
  public get longitudeDegreeInput() {
    return this._longitudeDegree;
  }

  // longitude_hemisphere - computed: false, optional: false, required: true
  private _longitudeHemisphere?: string; 
  public get longitudeHemisphere() {
    return this.getStringAttribute('longitude_hemisphere');
  }
  public set longitudeHemisphere(value: string) {
    this._longitudeHemisphere = value;
  }
  // Temporarily expose input value. Use with caution.
  public get longitudeHemisphereInput() {
    return this._longitudeHemisphere;
  }

  // longitude_minute - computed: false, optional: true, required: false
  private _longitudeMinute?: number; 
  public get longitudeMinute() {
    return this.getNumberAttribute('longitude_minute');
  }
  public set longitudeMinute(value: number) {
    this._longitudeMinute = value;
  }
  public resetLongitudeMinute() {
    this._longitudeMinute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get longitudeMinuteInput() {
    return this._longitudeMinute;
  }

  // longitude_second - computed: false, optional: true, required: false
  private _longitudeSecond?: number; 
  public get longitudeSecond() {
    return this.getNumberAttribute('longitude_second');
  }
  public set longitudeSecond(value: number) {
    this._longitudeSecond = value;
  }
  public resetLongitudeSecond() {
    this._longitudeSecond = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get longitudeSecondInput() {
    return this._longitudeSecond;
  }

  // vertical_precision - computed: false, optional: true, required: false
  private _verticalPrecision?: number; 
  public get verticalPrecision() {
    return this.getNumberAttribute('vertical_precision');
  }
  public set verticalPrecision(value: number) {
    this._verticalPrecision = value;
  }
  public resetVerticalPrecision() {
    this._verticalPrecision = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get verticalPrecisionInput() {
    return this._verticalPrecision;
  }
}

export class DnsZonePrimaryDefaultRrSetGroupLocRecordValuesList extends cdktf.ComplexList {
  public internalValue? : DnsZonePrimaryDefaultRrSetGroupLocRecordValues[] | cdktf.IResolvable

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
  public get(index: number): DnsZonePrimaryDefaultRrSetGroupLocRecordValuesOutputReference {
    return new DnsZonePrimaryDefaultRrSetGroupLocRecordValuesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DnsZonePrimaryDefaultRrSetGroupLocRecord {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/dns_zone#name DnsZone#name}
  */
  readonly name?: string;
  /**
  * values block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/dns_zone#values DnsZone#values}
  */
  readonly values: DnsZonePrimaryDefaultRrSetGroupLocRecordValues[] | cdktf.IResolvable;
}

export function dnsZonePrimaryDefaultRrSetGroupLocRecordToTerraform(struct?: DnsZonePrimaryDefaultRrSetGroupLocRecordOutputReference | DnsZonePrimaryDefaultRrSetGroupLocRecord): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    values: cdktf.listMapper(dnsZonePrimaryDefaultRrSetGroupLocRecordValuesToTerraform, true)(struct!.values),
  }
}


export function dnsZonePrimaryDefaultRrSetGroupLocRecordToHclTerraform(struct?: DnsZonePrimaryDefaultRrSetGroupLocRecordOutputReference | DnsZonePrimaryDefaultRrSetGroupLocRecord): any {
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
    values: {
      value: cdktf.listMapperHcl(dnsZonePrimaryDefaultRrSetGroupLocRecordValuesToHclTerraform, true)(struct!.values),
      isBlock: true,
      type: "list",
      storageClassType: "DnsZonePrimaryDefaultRrSetGroupLocRecordValuesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DnsZonePrimaryDefaultRrSetGroupLocRecordOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DnsZonePrimaryDefaultRrSetGroupLocRecord | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._values?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DnsZonePrimaryDefaultRrSetGroupLocRecord | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._values.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._values.internalValue = value.values;
    }
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

  // values - computed: false, optional: false, required: true
  private _values = new DnsZonePrimaryDefaultRrSetGroupLocRecordValuesList(this, "values", false);
  public get values() {
    return this._values;
  }
  public putValues(value: DnsZonePrimaryDefaultRrSetGroupLocRecordValues[] | cdktf.IResolvable) {
    this._values.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values.internalValue;
  }
}
export interface DnsZonePrimaryDefaultRrSetGroupMxRecordValues {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/dns_zone#domain DnsZone#domain}
  */
  readonly domain?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/dns_zone#priority DnsZone#priority}
  */
  readonly priority?: number;
}

export function dnsZonePrimaryDefaultRrSetGroupMxRecordValuesToTerraform(struct?: DnsZonePrimaryDefaultRrSetGroupMxRecordValues | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    domain: cdktf.stringToTerraform(struct!.domain),
    priority: cdktf.numberToTerraform(struct!.priority),
  }
}


export function dnsZonePrimaryDefaultRrSetGroupMxRecordValuesToHclTerraform(struct?: DnsZonePrimaryDefaultRrSetGroupMxRecordValues | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    domain: {
      value: cdktf.stringToHclTerraform(struct!.domain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    priority: {
      value: cdktf.numberToHclTerraform(struct!.priority),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DnsZonePrimaryDefaultRrSetGroupMxRecordValuesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DnsZonePrimaryDefaultRrSetGroupMxRecordValues | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._domain !== undefined) {
      hasAnyValues = true;
      internalValueResult.domain = this._domain;
    }
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DnsZonePrimaryDefaultRrSetGroupMxRecordValues | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._domain = undefined;
      this._priority = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._domain = value.domain;
      this._priority = value.priority;
    }
  }

  // domain - computed: false, optional: true, required: false
  private _domain?: string; 
  public get domain() {
    return this.getStringAttribute('domain');
  }
  public set domain(value: string) {
    this._domain = value;
  }
  public resetDomain() {
    this._domain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainInput() {
    return this._domain;
  }

  // priority - computed: false, optional: true, required: false
  private _priority?: number; 
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number) {
    this._priority = value;
  }
  public resetPriority() {
    this._priority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }
}

export class DnsZonePrimaryDefaultRrSetGroupMxRecordValuesList extends cdktf.ComplexList {
  public internalValue? : DnsZonePrimaryDefaultRrSetGroupMxRecordValues[] | cdktf.IResolvable

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
  public get(index: number): DnsZonePrimaryDefaultRrSetGroupMxRecordValuesOutputReference {
    return new DnsZonePrimaryDefaultRrSetGroupMxRecordValuesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DnsZonePrimaryDefaultRrSetGroupMxRecord {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/dns_zone#name DnsZone#name}
  */
  readonly name?: string;
  /**
  * values block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/dns_zone#values DnsZone#values}
  */
  readonly values: DnsZonePrimaryDefaultRrSetGroupMxRecordValues[] | cdktf.IResolvable;
}

export function dnsZonePrimaryDefaultRrSetGroupMxRecordToTerraform(struct?: DnsZonePrimaryDefaultRrSetGroupMxRecordOutputReference | DnsZonePrimaryDefaultRrSetGroupMxRecord): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    values: cdktf.listMapper(dnsZonePrimaryDefaultRrSetGroupMxRecordValuesToTerraform, true)(struct!.values),
  }
}


export function dnsZonePrimaryDefaultRrSetGroupMxRecordToHclTerraform(struct?: DnsZonePrimaryDefaultRrSetGroupMxRecordOutputReference | DnsZonePrimaryDefaultRrSetGroupMxRecord): any {
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
    values: {
      value: cdktf.listMapperHcl(dnsZonePrimaryDefaultRrSetGroupMxRecordValuesToHclTerraform, true)(struct!.values),
      isBlock: true,
      type: "list",
      storageClassType: "DnsZonePrimaryDefaultRrSetGroupMxRecordValuesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DnsZonePrimaryDefaultRrSetGroupMxRecordOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DnsZonePrimaryDefaultRrSetGroupMxRecord | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._values?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DnsZonePrimaryDefaultRrSetGroupMxRecord | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._values.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._values.internalValue = value.values;
    }
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

  // values - computed: false, optional: false, required: true
  private _values = new DnsZonePrimaryDefaultRrSetGroupMxRecordValuesList(this, "values", false);
  public get values() {
    return this._values;
  }
  public putValues(value: DnsZonePrimaryDefaultRrSetGroupMxRecordValues[] | cdktf.IResolvable) {
    this._values.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values.internalValue;
  }
}
export interface DnsZonePrimaryDefaultRrSetGroupNaptrRecordValues {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/dns_zone#flags DnsZone#flags}
  */
  readonly flags: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/dns_zone#order DnsZone#order}
  */
  readonly order: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/dns_zone#preference DnsZone#preference}
  */
  readonly preference: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/dns_zone#regexp DnsZone#regexp}
  */
  readonly regexp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/dns_zone#replacement DnsZone#replacement}
  */
  readonly replacement?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/dns_zone#service DnsZone#service}
  */
  readonly service?: string;
}

export function dnsZonePrimaryDefaultRrSetGroupNaptrRecordValuesToTerraform(struct?: DnsZonePrimaryDefaultRrSetGroupNaptrRecordValues | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    flags: cdktf.stringToTerraform(struct!.flags),
    order: cdktf.numberToTerraform(struct!.order),
    preference: cdktf.numberToTerraform(struct!.preference),
    regexp: cdktf.stringToTerraform(struct!.regexp),
    replacement: cdktf.stringToTerraform(struct!.replacement),
    service: cdktf.stringToTerraform(struct!.service),
  }
}


export function dnsZonePrimaryDefaultRrSetGroupNaptrRecordValuesToHclTerraform(struct?: DnsZonePrimaryDefaultRrSetGroupNaptrRecordValues | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    flags: {
      value: cdktf.stringToHclTerraform(struct!.flags),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    order: {
      value: cdktf.numberToHclTerraform(struct!.order),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    preference: {
      value: cdktf.numberToHclTerraform(struct!.preference),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    regexp: {
      value: cdktf.stringToHclTerraform(struct!.regexp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    replacement: {
      value: cdktf.stringToHclTerraform(struct!.replacement),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service: {
      value: cdktf.stringToHclTerraform(struct!.service),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DnsZonePrimaryDefaultRrSetGroupNaptrRecordValuesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DnsZonePrimaryDefaultRrSetGroupNaptrRecordValues | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._flags !== undefined) {
      hasAnyValues = true;
      internalValueResult.flags = this._flags;
    }
    if (this._order !== undefined) {
      hasAnyValues = true;
      internalValueResult.order = this._order;
    }
    if (this._preference !== undefined) {
      hasAnyValues = true;
      internalValueResult.preference = this._preference;
    }
    if (this._regexp !== undefined) {
      hasAnyValues = true;
      internalValueResult.regexp = this._regexp;
    }
    if (this._replacement !== undefined) {
      hasAnyValues = true;
      internalValueResult.replacement = this._replacement;
    }
    if (this._service !== undefined) {
      hasAnyValues = true;
      internalValueResult.service = this._service;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DnsZonePrimaryDefaultRrSetGroupNaptrRecordValues | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._flags = undefined;
      this._order = undefined;
      this._preference = undefined;
      this._regexp = undefined;
      this._replacement = undefined;
      this._service = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._flags = value.flags;
      this._order = value.order;
      this._preference = value.preference;
      this._regexp = value.regexp;
      this._replacement = value.replacement;
      this._service = value.service;
    }
  }

  // flags - computed: false, optional: false, required: true
  private _flags?: string; 
  public get flags() {
    return this.getStringAttribute('flags');
  }
  public set flags(value: string) {
    this._flags = value;
  }
  // Temporarily expose input value. Use with caution.
  public get flagsInput() {
    return this._flags;
  }

  // order - computed: false, optional: false, required: true
  private _order?: number; 
  public get order() {
    return this.getNumberAttribute('order');
  }
  public set order(value: number) {
    this._order = value;
  }
  // Temporarily expose input value. Use with caution.
  public get orderInput() {
    return this._order;
  }

  // preference - computed: false, optional: false, required: true
  private _preference?: number; 
  public get preference() {
    return this.getNumberAttribute('preference');
  }
  public set preference(value: number) {
    this._preference = value;
  }
  // Temporarily expose input value. Use with caution.
  public get preferenceInput() {
    return this._preference;
  }

  // regexp - computed: false, optional: true, required: false
  private _regexp?: string; 
  public get regexp() {
    return this.getStringAttribute('regexp');
  }
  public set regexp(value: string) {
    this._regexp = value;
  }
  public resetRegexp() {
    this._regexp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexpInput() {
    return this._regexp;
  }

  // replacement - computed: false, optional: true, required: false
  private _replacement?: string; 
  public get replacement() {
    return this.getStringAttribute('replacement');
  }
  public set replacement(value: string) {
    this._replacement = value;
  }
  public resetReplacement() {
    this._replacement = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replacementInput() {
    return this._replacement;
  }

  // service - computed: false, optional: true, required: false
  private _service?: string; 
  public get service() {
    return this.getStringAttribute('service');
  }
  public set service(value: string) {
    this._service = value;
  }
  public resetService() {
    this._service = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceInput() {
    return this._service;
  }
}

export class DnsZonePrimaryDefaultRrSetGroupNaptrRecordValuesList extends cdktf.ComplexList {
  public internalValue? : DnsZonePrimaryDefaultRrSetGroupNaptrRecordValues[] | cdktf.IResolvable

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
  public get(index: number): DnsZonePrimaryDefaultRrSetGroupNaptrRecordValuesOutputReference {
    return new DnsZonePrimaryDefaultRrSetGroupNaptrRecordValuesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DnsZonePrimaryDefaultRrSetGroupNaptrRecord {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/dns_zone#name DnsZone#name}
  */
  readonly name?: string;
  /**
  * values block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/dns_zone#values DnsZone#values}
  */
  readonly values: DnsZonePrimaryDefaultRrSetGroupNaptrRecordValues[] | cdktf.IResolvable;
}

export function dnsZonePrimaryDefaultRrSetGroupNaptrRecordToTerraform(struct?: DnsZonePrimaryDefaultRrSetGroupNaptrRecordOutputReference | DnsZonePrimaryDefaultRrSetGroupNaptrRecord): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    values: cdktf.listMapper(dnsZonePrimaryDefaultRrSetGroupNaptrRecordValuesToTerraform, true)(struct!.values),
  }
}


export function dnsZonePrimaryDefaultRrSetGroupNaptrRecordToHclTerraform(struct?: DnsZonePrimaryDefaultRrSetGroupNaptrRecordOutputReference | DnsZonePrimaryDefaultRrSetGroupNaptrRecord): any {
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
    values: {
      value: cdktf.listMapperHcl(dnsZonePrimaryDefaultRrSetGroupNaptrRecordValuesToHclTerraform, true)(struct!.values),
      isBlock: true,
      type: "list",
      storageClassType: "DnsZonePrimaryDefaultRrSetGroupNaptrRecordValuesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DnsZonePrimaryDefaultRrSetGroupNaptrRecordOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DnsZonePrimaryDefaultRrSetGroupNaptrRecord | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._values?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DnsZonePrimaryDefaultRrSetGroupNaptrRecord | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._values.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._values.internalValue = value.values;
    }
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

  // values - computed: false, optional: false, required: true
  private _values = new DnsZonePrimaryDefaultRrSetGroupNaptrRecordValuesList(this, "values", false);
  public get values() {
    return this._values;
  }
  public putValues(value: DnsZonePrimaryDefaultRrSetGroupNaptrRecordValues[] | cdktf.IResolvable) {
    this._values.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values.internalValue;
  }
}
export interface DnsZonePrimaryDefaultRrSetGroupNsRecord {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/dns_zone#name DnsZone#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/dns_zone#values DnsZone#values}
  */
  readonly values: string[];
}

export function dnsZonePrimaryDefaultRrSetGroupNsRecordToTerraform(struct?: DnsZonePrimaryDefaultRrSetGroupNsRecordOutputReference | DnsZonePrimaryDefaultRrSetGroupNsRecord): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function dnsZonePrimaryDefaultRrSetGroupNsRecordToHclTerraform(struct?: DnsZonePrimaryDefaultRrSetGroupNsRecordOutputReference | DnsZonePrimaryDefaultRrSetGroupNsRecord): any {
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
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DnsZonePrimaryDefaultRrSetGroupNsRecordOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DnsZonePrimaryDefaultRrSetGroupNsRecord | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DnsZonePrimaryDefaultRrSetGroupNsRecord | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._values = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._values = value.values;
    }
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

  // values - computed: false, optional: false, required: true
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}
export interface DnsZonePrimaryDefaultRrSetGroupPtrRecord {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/dns_zone#name DnsZone#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/dns_zone#values DnsZone#values}
  */
  readonly values: string[];
}

export function dnsZonePrimaryDefaultRrSetGroupPtrRecordToTerraform(struct?: DnsZonePrimaryDefaultRrSetGroupPtrRecordOutputReference | DnsZonePrimaryDefaultRrSetGroupPtrRecord): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function dnsZonePrimaryDefaultRrSetGroupPtrRecordToHclTerraform(struct?: DnsZonePrimaryDefaultRrSetGroupPtrRecordOutputReference | DnsZonePrimaryDefaultRrSetGroupPtrRecord): any {
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
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DnsZonePrimaryDefaultRrSetGroupPtrRecordOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DnsZonePrimaryDefaultRrSetGroupPtrRecord | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DnsZonePrimaryDefaultRrSetGroupPtrRecord | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._values = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._values = value.values;
    }
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

  // values - computed: false, optional: false, required: true
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}
export interface DnsZonePrimaryDefaultRrSetGroupSrvRecordValues {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/dns_zone#port DnsZone#port}
  */
  readonly port?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/dns_zone#priority DnsZone#priority}
  */
  readonly priority?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/dns_zone#target DnsZone#target}
  */
  readonly target?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/dns_zone#weight DnsZone#weight}
  */
  readonly weight?: number;
}

export function dnsZonePrimaryDefaultRrSetGroupSrvRecordValuesToTerraform(struct?: DnsZonePrimaryDefaultRrSetGroupSrvRecordValues | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    port: cdktf.numberToTerraform(struct!.port),
    priority: cdktf.numberToTerraform(struct!.priority),
    target: cdktf.stringToTerraform(struct!.target),
    weight: cdktf.numberToTerraform(struct!.weight),
  }
}


export function dnsZonePrimaryDefaultRrSetGroupSrvRecordValuesToHclTerraform(struct?: DnsZonePrimaryDefaultRrSetGroupSrvRecordValues | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    priority: {
      value: cdktf.numberToHclTerraform(struct!.priority),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    target: {
      value: cdktf.stringToHclTerraform(struct!.target),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    weight: {
      value: cdktf.numberToHclTerraform(struct!.weight),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DnsZonePrimaryDefaultRrSetGroupSrvRecordValuesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DnsZonePrimaryDefaultRrSetGroupSrvRecordValues | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    if (this._target !== undefined) {
      hasAnyValues = true;
      internalValueResult.target = this._target;
    }
    if (this._weight !== undefined) {
      hasAnyValues = true;
      internalValueResult.weight = this._weight;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DnsZonePrimaryDefaultRrSetGroupSrvRecordValues | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._port = undefined;
      this._priority = undefined;
      this._target = undefined;
      this._weight = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._port = value.port;
      this._priority = value.priority;
      this._target = value.target;
      this._weight = value.weight;
    }
  }

  // port - computed: false, optional: true, required: false
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

  // priority - computed: false, optional: true, required: false
  private _priority?: number; 
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number) {
    this._priority = value;
  }
  public resetPriority() {
    this._priority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }

  // target - computed: false, optional: true, required: false
  private _target?: string; 
  public get target() {
    return this.getStringAttribute('target');
  }
  public set target(value: string) {
    this._target = value;
  }
  public resetTarget() {
    this._target = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target;
  }

  // weight - computed: false, optional: true, required: false
  private _weight?: number; 
  public get weight() {
    return this.getNumberAttribute('weight');
  }
  public set weight(value: number) {
    this._weight = value;
  }
  public resetWeight() {
    this._weight = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weightInput() {
    return this._weight;
  }
}

export class DnsZonePrimaryDefaultRrSetGroupSrvRecordValuesList extends cdktf.ComplexList {
  public internalValue? : DnsZonePrimaryDefaultRrSetGroupSrvRecordValues[] | cdktf.IResolvable

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
  public get(index: number): DnsZonePrimaryDefaultRrSetGroupSrvRecordValuesOutputReference {
    return new DnsZonePrimaryDefaultRrSetGroupSrvRecordValuesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DnsZonePrimaryDefaultRrSetGroupSrvRecord {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/dns_zone#name DnsZone#name}
  */
  readonly name: string;
  /**
  * values block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/dns_zone#values DnsZone#values}
  */
  readonly values: DnsZonePrimaryDefaultRrSetGroupSrvRecordValues[] | cdktf.IResolvable;
}

export function dnsZonePrimaryDefaultRrSetGroupSrvRecordToTerraform(struct?: DnsZonePrimaryDefaultRrSetGroupSrvRecordOutputReference | DnsZonePrimaryDefaultRrSetGroupSrvRecord): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    values: cdktf.listMapper(dnsZonePrimaryDefaultRrSetGroupSrvRecordValuesToTerraform, true)(struct!.values),
  }
}


export function dnsZonePrimaryDefaultRrSetGroupSrvRecordToHclTerraform(struct?: DnsZonePrimaryDefaultRrSetGroupSrvRecordOutputReference | DnsZonePrimaryDefaultRrSetGroupSrvRecord): any {
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
    values: {
      value: cdktf.listMapperHcl(dnsZonePrimaryDefaultRrSetGroupSrvRecordValuesToHclTerraform, true)(struct!.values),
      isBlock: true,
      type: "list",
      storageClassType: "DnsZonePrimaryDefaultRrSetGroupSrvRecordValuesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DnsZonePrimaryDefaultRrSetGroupSrvRecordOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DnsZonePrimaryDefaultRrSetGroupSrvRecord | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._values?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DnsZonePrimaryDefaultRrSetGroupSrvRecord | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._values.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._values.internalValue = value.values;
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

  // values - computed: false, optional: false, required: true
  private _values = new DnsZonePrimaryDefaultRrSetGroupSrvRecordValuesList(this, "values", false);
  public get values() {
    return this._values;
  }
  public putValues(value: DnsZonePrimaryDefaultRrSetGroupSrvRecordValues[] | cdktf.IResolvable) {
    this._values.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values.internalValue;
  }
}
export interface DnsZonePrimaryDefaultRrSetGroupSshfpRecordValuesSha1Fingerprint {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/dns_zone#fingerprint DnsZone#fingerprint}
  */
  readonly fingerprint: string;
}

export function dnsZonePrimaryDefaultRrSetGroupSshfpRecordValuesSha1FingerprintToTerraform(struct?: DnsZonePrimaryDefaultRrSetGroupSshfpRecordValuesSha1FingerprintOutputReference | DnsZonePrimaryDefaultRrSetGroupSshfpRecordValuesSha1Fingerprint): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fingerprint: cdktf.stringToTerraform(struct!.fingerprint),
  }
}


export function dnsZonePrimaryDefaultRrSetGroupSshfpRecordValuesSha1FingerprintToHclTerraform(struct?: DnsZonePrimaryDefaultRrSetGroupSshfpRecordValuesSha1FingerprintOutputReference | DnsZonePrimaryDefaultRrSetGroupSshfpRecordValuesSha1Fingerprint): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    fingerprint: {
      value: cdktf.stringToHclTerraform(struct!.fingerprint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DnsZonePrimaryDefaultRrSetGroupSshfpRecordValuesSha1FingerprintOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DnsZonePrimaryDefaultRrSetGroupSshfpRecordValuesSha1Fingerprint | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fingerprint !== undefined) {
      hasAnyValues = true;
      internalValueResult.fingerprint = this._fingerprint;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DnsZonePrimaryDefaultRrSetGroupSshfpRecordValuesSha1Fingerprint | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._fingerprint = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._fingerprint = value.fingerprint;
    }
  }

  // fingerprint - computed: false, optional: false, required: true
  private _fingerprint?: string; 
  public get fingerprint() {
    return this.getStringAttribute('fingerprint');
  }
  public set fingerprint(value: string) {
    this._fingerprint = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fingerprintInput() {
    return this._fingerprint;
  }
}
export interface DnsZonePrimaryDefaultRrSetGroupSshfpRecordValuesSha256Fingerprint {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/dns_zone#fingerprint DnsZone#fingerprint}
  */
  readonly fingerprint: string;
}

export function dnsZonePrimaryDefaultRrSetGroupSshfpRecordValuesSha256FingerprintToTerraform(struct?: DnsZonePrimaryDefaultRrSetGroupSshfpRecordValuesSha256FingerprintOutputReference | DnsZonePrimaryDefaultRrSetGroupSshfpRecordValuesSha256Fingerprint): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fingerprint: cdktf.stringToTerraform(struct!.fingerprint),
  }
}


export function dnsZonePrimaryDefaultRrSetGroupSshfpRecordValuesSha256FingerprintToHclTerraform(struct?: DnsZonePrimaryDefaultRrSetGroupSshfpRecordValuesSha256FingerprintOutputReference | DnsZonePrimaryDefaultRrSetGroupSshfpRecordValuesSha256Fingerprint): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    fingerprint: {
      value: cdktf.stringToHclTerraform(struct!.fingerprint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DnsZonePrimaryDefaultRrSetGroupSshfpRecordValuesSha256FingerprintOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DnsZonePrimaryDefaultRrSetGroupSshfpRecordValuesSha256Fingerprint | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fingerprint !== undefined) {
      hasAnyValues = true;
      internalValueResult.fingerprint = this._fingerprint;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DnsZonePrimaryDefaultRrSetGroupSshfpRecordValuesSha256Fingerprint | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._fingerprint = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._fingerprint = value.fingerprint;
    }
  }

  // fingerprint - computed: false, optional: false, required: true
  private _fingerprint?: string; 
  public get fingerprint() {
    return this.getStringAttribute('fingerprint');
  }
  public set fingerprint(value: string) {
    this._fingerprint = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fingerprintInput() {
    return this._fingerprint;
  }
}
export interface DnsZonePrimaryDefaultRrSetGroupSshfpRecordValues {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/dns_zone#algorithm DnsZone#algorithm}
  */
  readonly algorithm: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/dns_zone#fingerprint DnsZone#fingerprint}
  */
  readonly fingerprint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/dns_zone#fingerprinttype DnsZone#fingerprinttype}
  */
  readonly fingerprinttype: string;
  /**
  * sha1_fingerprint block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/dns_zone#sha1_fingerprint DnsZone#sha1_fingerprint}
  */
  readonly sha1Fingerprint?: DnsZonePrimaryDefaultRrSetGroupSshfpRecordValuesSha1Fingerprint;
  /**
  * sha256_fingerprint block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/dns_zone#sha256_fingerprint DnsZone#sha256_fingerprint}
  */
  readonly sha256Fingerprint?: DnsZonePrimaryDefaultRrSetGroupSshfpRecordValuesSha256Fingerprint;
}

export function dnsZonePrimaryDefaultRrSetGroupSshfpRecordValuesToTerraform(struct?: DnsZonePrimaryDefaultRrSetGroupSshfpRecordValues | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    algorithm: cdktf.stringToTerraform(struct!.algorithm),
    fingerprint: cdktf.stringToTerraform(struct!.fingerprint),
    fingerprinttype: cdktf.stringToTerraform(struct!.fingerprinttype),
    sha1_fingerprint: dnsZonePrimaryDefaultRrSetGroupSshfpRecordValuesSha1FingerprintToTerraform(struct!.sha1Fingerprint),
    sha256_fingerprint: dnsZonePrimaryDefaultRrSetGroupSshfpRecordValuesSha256FingerprintToTerraform(struct!.sha256Fingerprint),
  }
}


export function dnsZonePrimaryDefaultRrSetGroupSshfpRecordValuesToHclTerraform(struct?: DnsZonePrimaryDefaultRrSetGroupSshfpRecordValues | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    algorithm: {
      value: cdktf.stringToHclTerraform(struct!.algorithm),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fingerprint: {
      value: cdktf.stringToHclTerraform(struct!.fingerprint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fingerprinttype: {
      value: cdktf.stringToHclTerraform(struct!.fingerprinttype),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sha1_fingerprint: {
      value: dnsZonePrimaryDefaultRrSetGroupSshfpRecordValuesSha1FingerprintToHclTerraform(struct!.sha1Fingerprint),
      isBlock: true,
      type: "list",
      storageClassType: "DnsZonePrimaryDefaultRrSetGroupSshfpRecordValuesSha1FingerprintList",
    },
    sha256_fingerprint: {
      value: dnsZonePrimaryDefaultRrSetGroupSshfpRecordValuesSha256FingerprintToHclTerraform(struct!.sha256Fingerprint),
      isBlock: true,
      type: "list",
      storageClassType: "DnsZonePrimaryDefaultRrSetGroupSshfpRecordValuesSha256FingerprintList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DnsZonePrimaryDefaultRrSetGroupSshfpRecordValuesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DnsZonePrimaryDefaultRrSetGroupSshfpRecordValues | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._algorithm !== undefined) {
      hasAnyValues = true;
      internalValueResult.algorithm = this._algorithm;
    }
    if (this._fingerprint !== undefined) {
      hasAnyValues = true;
      internalValueResult.fingerprint = this._fingerprint;
    }
    if (this._fingerprinttype !== undefined) {
      hasAnyValues = true;
      internalValueResult.fingerprinttype = this._fingerprinttype;
    }
    if (this._sha1Fingerprint?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sha1Fingerprint = this._sha1Fingerprint?.internalValue;
    }
    if (this._sha256Fingerprint?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sha256Fingerprint = this._sha256Fingerprint?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DnsZonePrimaryDefaultRrSetGroupSshfpRecordValues | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._algorithm = undefined;
      this._fingerprint = undefined;
      this._fingerprinttype = undefined;
      this._sha1Fingerprint.internalValue = undefined;
      this._sha256Fingerprint.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._algorithm = value.algorithm;
      this._fingerprint = value.fingerprint;
      this._fingerprinttype = value.fingerprinttype;
      this._sha1Fingerprint.internalValue = value.sha1Fingerprint;
      this._sha256Fingerprint.internalValue = value.sha256Fingerprint;
    }
  }

  // algorithm - computed: false, optional: false, required: true
  private _algorithm?: string; 
  public get algorithm() {
    return this.getStringAttribute('algorithm');
  }
  public set algorithm(value: string) {
    this._algorithm = value;
  }
  // Temporarily expose input value. Use with caution.
  public get algorithmInput() {
    return this._algorithm;
  }

  // fingerprint - computed: false, optional: true, required: false
  private _fingerprint?: string; 
  public get fingerprint() {
    return this.getStringAttribute('fingerprint');
  }
  public set fingerprint(value: string) {
    this._fingerprint = value;
  }
  public resetFingerprint() {
    this._fingerprint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fingerprintInput() {
    return this._fingerprint;
  }

  // fingerprinttype - computed: false, optional: false, required: true
  private _fingerprinttype?: string; 
  public get fingerprinttype() {
    return this.getStringAttribute('fingerprinttype');
  }
  public set fingerprinttype(value: string) {
    this._fingerprinttype = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fingerprinttypeInput() {
    return this._fingerprinttype;
  }

  // sha1_fingerprint - computed: false, optional: true, required: false
  private _sha1Fingerprint = new DnsZonePrimaryDefaultRrSetGroupSshfpRecordValuesSha1FingerprintOutputReference(this, "sha1_fingerprint");
  public get sha1Fingerprint() {
    return this._sha1Fingerprint;
  }
  public putSha1Fingerprint(value: DnsZonePrimaryDefaultRrSetGroupSshfpRecordValuesSha1Fingerprint) {
    this._sha1Fingerprint.internalValue = value;
  }
  public resetSha1Fingerprint() {
    this._sha1Fingerprint.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sha1FingerprintInput() {
    return this._sha1Fingerprint.internalValue;
  }

  // sha256_fingerprint - computed: false, optional: true, required: false
  private _sha256Fingerprint = new DnsZonePrimaryDefaultRrSetGroupSshfpRecordValuesSha256FingerprintOutputReference(this, "sha256_fingerprint");
  public get sha256Fingerprint() {
    return this._sha256Fingerprint;
  }
  public putSha256Fingerprint(value: DnsZonePrimaryDefaultRrSetGroupSshfpRecordValuesSha256Fingerprint) {
    this._sha256Fingerprint.internalValue = value;
  }
  public resetSha256Fingerprint() {
    this._sha256Fingerprint.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sha256FingerprintInput() {
    return this._sha256Fingerprint.internalValue;
  }
}

export class DnsZonePrimaryDefaultRrSetGroupSshfpRecordValuesList extends cdktf.ComplexList {
  public internalValue? : DnsZonePrimaryDefaultRrSetGroupSshfpRecordValues[] | cdktf.IResolvable

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
  public get(index: number): DnsZonePrimaryDefaultRrSetGroupSshfpRecordValuesOutputReference {
    return new DnsZonePrimaryDefaultRrSetGroupSshfpRecordValuesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DnsZonePrimaryDefaultRrSetGroupSshfpRecord {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/dns_zone#name DnsZone#name}
  */
  readonly name?: string;
  /**
  * values block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/dns_zone#values DnsZone#values}
  */
  readonly values: DnsZonePrimaryDefaultRrSetGroupSshfpRecordValues[] | cdktf.IResolvable;
}

export function dnsZonePrimaryDefaultRrSetGroupSshfpRecordToTerraform(struct?: DnsZonePrimaryDefaultRrSetGroupSshfpRecordOutputReference | DnsZonePrimaryDefaultRrSetGroupSshfpRecord): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    values: cdktf.listMapper(dnsZonePrimaryDefaultRrSetGroupSshfpRecordValuesToTerraform, true)(struct!.values),
  }
}


export function dnsZonePrimaryDefaultRrSetGroupSshfpRecordToHclTerraform(struct?: DnsZonePrimaryDefaultRrSetGroupSshfpRecordOutputReference | DnsZonePrimaryDefaultRrSetGroupSshfpRecord): any {
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
    values: {
      value: cdktf.listMapperHcl(dnsZonePrimaryDefaultRrSetGroupSshfpRecordValuesToHclTerraform, true)(struct!.values),
      isBlock: true,
      type: "list",
      storageClassType: "DnsZonePrimaryDefaultRrSetGroupSshfpRecordValuesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DnsZonePrimaryDefaultRrSetGroupSshfpRecordOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DnsZonePrimaryDefaultRrSetGroupSshfpRecord | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._values?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DnsZonePrimaryDefaultRrSetGroupSshfpRecord | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._values.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._values.internalValue = value.values;
    }
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

  // values - computed: false, optional: false, required: true
  private _values = new DnsZonePrimaryDefaultRrSetGroupSshfpRecordValuesList(this, "values", false);
  public get values() {
    return this._values;
  }
  public putValues(value: DnsZonePrimaryDefaultRrSetGroupSshfpRecordValues[] | cdktf.IResolvable) {
    this._values.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values.internalValue;
  }
}
export interface DnsZonePrimaryDefaultRrSetGroupTlsaRecordValues {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/dns_zone#certificate_association_data DnsZone#certificate_association_data}
  */
  readonly certificateAssociationData: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/dns_zone#certificate_usage DnsZone#certificate_usage}
  */
  readonly certificateUsage: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/dns_zone#matching_type DnsZone#matching_type}
  */
  readonly matchingType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/dns_zone#selector DnsZone#selector}
  */
  readonly selector: string;
}

export function dnsZonePrimaryDefaultRrSetGroupTlsaRecordValuesToTerraform(struct?: DnsZonePrimaryDefaultRrSetGroupTlsaRecordValues | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    certificate_association_data: cdktf.stringToTerraform(struct!.certificateAssociationData),
    certificate_usage: cdktf.stringToTerraform(struct!.certificateUsage),
    matching_type: cdktf.stringToTerraform(struct!.matchingType),
    selector: cdktf.stringToTerraform(struct!.selector),
  }
}


export function dnsZonePrimaryDefaultRrSetGroupTlsaRecordValuesToHclTerraform(struct?: DnsZonePrimaryDefaultRrSetGroupTlsaRecordValues | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    certificate_association_data: {
      value: cdktf.stringToHclTerraform(struct!.certificateAssociationData),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    certificate_usage: {
      value: cdktf.stringToHclTerraform(struct!.certificateUsage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    matching_type: {
      value: cdktf.stringToHclTerraform(struct!.matchingType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    selector: {
      value: cdktf.stringToHclTerraform(struct!.selector),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DnsZonePrimaryDefaultRrSetGroupTlsaRecordValuesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DnsZonePrimaryDefaultRrSetGroupTlsaRecordValues | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._certificateAssociationData !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificateAssociationData = this._certificateAssociationData;
    }
    if (this._certificateUsage !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificateUsage = this._certificateUsage;
    }
    if (this._matchingType !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchingType = this._matchingType;
    }
    if (this._selector !== undefined) {
      hasAnyValues = true;
      internalValueResult.selector = this._selector;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DnsZonePrimaryDefaultRrSetGroupTlsaRecordValues | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._certificateAssociationData = undefined;
      this._certificateUsage = undefined;
      this._matchingType = undefined;
      this._selector = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._certificateAssociationData = value.certificateAssociationData;
      this._certificateUsage = value.certificateUsage;
      this._matchingType = value.matchingType;
      this._selector = value.selector;
    }
  }

  // certificate_association_data - computed: false, optional: false, required: true
  private _certificateAssociationData?: string; 
  public get certificateAssociationData() {
    return this.getStringAttribute('certificate_association_data');
  }
  public set certificateAssociationData(value: string) {
    this._certificateAssociationData = value;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateAssociationDataInput() {
    return this._certificateAssociationData;
  }

  // certificate_usage - computed: false, optional: false, required: true
  private _certificateUsage?: string; 
  public get certificateUsage() {
    return this.getStringAttribute('certificate_usage');
  }
  public set certificateUsage(value: string) {
    this._certificateUsage = value;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateUsageInput() {
    return this._certificateUsage;
  }

  // matching_type - computed: false, optional: false, required: true
  private _matchingType?: string; 
  public get matchingType() {
    return this.getStringAttribute('matching_type');
  }
  public set matchingType(value: string) {
    this._matchingType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get matchingTypeInput() {
    return this._matchingType;
  }

  // selector - computed: false, optional: false, required: true
  private _selector?: string; 
  public get selector() {
    return this.getStringAttribute('selector');
  }
  public set selector(value: string) {
    this._selector = value;
  }
  // Temporarily expose input value. Use with caution.
  public get selectorInput() {
    return this._selector;
  }
}

export class DnsZonePrimaryDefaultRrSetGroupTlsaRecordValuesList extends cdktf.ComplexList {
  public internalValue? : DnsZonePrimaryDefaultRrSetGroupTlsaRecordValues[] | cdktf.IResolvable

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
  public get(index: number): DnsZonePrimaryDefaultRrSetGroupTlsaRecordValuesOutputReference {
    return new DnsZonePrimaryDefaultRrSetGroupTlsaRecordValuesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DnsZonePrimaryDefaultRrSetGroupTlsaRecord {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/dns_zone#name DnsZone#name}
  */
  readonly name?: string;
  /**
  * values block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/dns_zone#values DnsZone#values}
  */
  readonly values: DnsZonePrimaryDefaultRrSetGroupTlsaRecordValues[] | cdktf.IResolvable;
}

export function dnsZonePrimaryDefaultRrSetGroupTlsaRecordToTerraform(struct?: DnsZonePrimaryDefaultRrSetGroupTlsaRecordOutputReference | DnsZonePrimaryDefaultRrSetGroupTlsaRecord): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    values: cdktf.listMapper(dnsZonePrimaryDefaultRrSetGroupTlsaRecordValuesToTerraform, true)(struct!.values),
  }
}


export function dnsZonePrimaryDefaultRrSetGroupTlsaRecordToHclTerraform(struct?: DnsZonePrimaryDefaultRrSetGroupTlsaRecordOutputReference | DnsZonePrimaryDefaultRrSetGroupTlsaRecord): any {
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
    values: {
      value: cdktf.listMapperHcl(dnsZonePrimaryDefaultRrSetGroupTlsaRecordValuesToHclTerraform, true)(struct!.values),
      isBlock: true,
      type: "list",
      storageClassType: "DnsZonePrimaryDefaultRrSetGroupTlsaRecordValuesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DnsZonePrimaryDefaultRrSetGroupTlsaRecordOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DnsZonePrimaryDefaultRrSetGroupTlsaRecord | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._values?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DnsZonePrimaryDefaultRrSetGroupTlsaRecord | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._values.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._values.internalValue = value.values;
    }
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

  // values - computed: false, optional: false, required: true
  private _values = new DnsZonePrimaryDefaultRrSetGroupTlsaRecordValuesList(this, "values", false);
  public get values() {
    return this._values;
  }
  public putValues(value: DnsZonePrimaryDefaultRrSetGroupTlsaRecordValues[] | cdktf.IResolvable) {
    this._values.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values.internalValue;
  }
}
export interface DnsZonePrimaryDefaultRrSetGroupTxtRecord {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/dns_zone#name DnsZone#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/dns_zone#values DnsZone#values}
  */
  readonly values: string[];
}

export function dnsZonePrimaryDefaultRrSetGroupTxtRecordToTerraform(struct?: DnsZonePrimaryDefaultRrSetGroupTxtRecordOutputReference | DnsZonePrimaryDefaultRrSetGroupTxtRecord): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function dnsZonePrimaryDefaultRrSetGroupTxtRecordToHclTerraform(struct?: DnsZonePrimaryDefaultRrSetGroupTxtRecordOutputReference | DnsZonePrimaryDefaultRrSetGroupTxtRecord): any {
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
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DnsZonePrimaryDefaultRrSetGroupTxtRecordOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DnsZonePrimaryDefaultRrSetGroupTxtRecord | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DnsZonePrimaryDefaultRrSetGroupTxtRecord | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._values = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._values = value.values;
    }
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

  // values - computed: false, optional: false, required: true
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}
export interface DnsZonePrimaryDefaultRrSetGroup {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/dns_zone#description DnsZone#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/dns_zone#ttl DnsZone#ttl}
  */
  readonly ttl?: number;
  /**
  * a_record block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/dns_zone#a_record DnsZone#a_record}
  */
  readonly aRecord?: DnsZonePrimaryDefaultRrSetGroupARecord;
  /**
  * aaaa_record block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/dns_zone#aaaa_record DnsZone#aaaa_record}
  */
  readonly aaaaRecord?: DnsZonePrimaryDefaultRrSetGroupAaaaRecord;
  /**
  * afsdb_record block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/dns_zone#afsdb_record DnsZone#afsdb_record}
  */
  readonly afsdbRecord?: DnsZonePrimaryDefaultRrSetGroupAfsdbRecord;
  /**
  * alias_record block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/dns_zone#alias_record DnsZone#alias_record}
  */
  readonly aliasRecord?: DnsZonePrimaryDefaultRrSetGroupAliasRecord;
  /**
  * caa_record block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/dns_zone#caa_record DnsZone#caa_record}
  */
  readonly caaRecord?: DnsZonePrimaryDefaultRrSetGroupCaaRecord;
  /**
  * cds_record block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/dns_zone#cds_record DnsZone#cds_record}
  */
  readonly cdsRecord?: DnsZonePrimaryDefaultRrSetGroupCdsRecord;
  /**
  * cert_record block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/dns_zone#cert_record DnsZone#cert_record}
  */
  readonly certRecord?: DnsZonePrimaryDefaultRrSetGroupCertRecord;
  /**
  * cname_record block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/dns_zone#cname_record DnsZone#cname_record}
  */
  readonly cnameRecord?: DnsZonePrimaryDefaultRrSetGroupCnameRecord;
  /**
  * dlv_record block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/dns_zone#dlv_record DnsZone#dlv_record}
  */
  readonly dlvRecord?: DnsZonePrimaryDefaultRrSetGroupDlvRecord;
  /**
  * ds_record block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/dns_zone#ds_record DnsZone#ds_record}
  */
  readonly dsRecord?: DnsZonePrimaryDefaultRrSetGroupDsRecord;
  /**
  * eui48_record block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/dns_zone#eui48_record DnsZone#eui48_record}
  */
  readonly eui48Record?: DnsZonePrimaryDefaultRrSetGroupEui48Record;
  /**
  * eui64_record block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/dns_zone#eui64_record DnsZone#eui64_record}
  */
  readonly eui64Record?: DnsZonePrimaryDefaultRrSetGroupEui64Record;
  /**
  * lb_record block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/dns_zone#lb_record DnsZone#lb_record}
  */
  readonly lbRecord?: DnsZonePrimaryDefaultRrSetGroupLbRecord;
  /**
  * loc_record block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/dns_zone#loc_record DnsZone#loc_record}
  */
  readonly locRecord?: DnsZonePrimaryDefaultRrSetGroupLocRecord;
  /**
  * mx_record block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/dns_zone#mx_record DnsZone#mx_record}
  */
  readonly mxRecord?: DnsZonePrimaryDefaultRrSetGroupMxRecord;
  /**
  * naptr_record block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/dns_zone#naptr_record DnsZone#naptr_record}
  */
  readonly naptrRecord?: DnsZonePrimaryDefaultRrSetGroupNaptrRecord;
  /**
  * ns_record block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/dns_zone#ns_record DnsZone#ns_record}
  */
  readonly nsRecord?: DnsZonePrimaryDefaultRrSetGroupNsRecord;
  /**
  * ptr_record block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/dns_zone#ptr_record DnsZone#ptr_record}
  */
  readonly ptrRecord?: DnsZonePrimaryDefaultRrSetGroupPtrRecord;
  /**
  * srv_record block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/dns_zone#srv_record DnsZone#srv_record}
  */
  readonly srvRecord?: DnsZonePrimaryDefaultRrSetGroupSrvRecord;
  /**
  * sshfp_record block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/dns_zone#sshfp_record DnsZone#sshfp_record}
  */
  readonly sshfpRecord?: DnsZonePrimaryDefaultRrSetGroupSshfpRecord;
  /**
  * tlsa_record block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/dns_zone#tlsa_record DnsZone#tlsa_record}
  */
  readonly tlsaRecord?: DnsZonePrimaryDefaultRrSetGroupTlsaRecord;
  /**
  * txt_record block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/dns_zone#txt_record DnsZone#txt_record}
  */
  readonly txtRecord?: DnsZonePrimaryDefaultRrSetGroupTxtRecord;
}

export function dnsZonePrimaryDefaultRrSetGroupToTerraform(struct?: DnsZonePrimaryDefaultRrSetGroup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    ttl: cdktf.numberToTerraform(struct!.ttl),
    a_record: dnsZonePrimaryDefaultRrSetGroupARecordToTerraform(struct!.aRecord),
    aaaa_record: dnsZonePrimaryDefaultRrSetGroupAaaaRecordToTerraform(struct!.aaaaRecord),
    afsdb_record: dnsZonePrimaryDefaultRrSetGroupAfsdbRecordToTerraform(struct!.afsdbRecord),
    alias_record: dnsZonePrimaryDefaultRrSetGroupAliasRecordToTerraform(struct!.aliasRecord),
    caa_record: dnsZonePrimaryDefaultRrSetGroupCaaRecordToTerraform(struct!.caaRecord),
    cds_record: dnsZonePrimaryDefaultRrSetGroupCdsRecordToTerraform(struct!.cdsRecord),
    cert_record: dnsZonePrimaryDefaultRrSetGroupCertRecordToTerraform(struct!.certRecord),
    cname_record: dnsZonePrimaryDefaultRrSetGroupCnameRecordToTerraform(struct!.cnameRecord),
    dlv_record: dnsZonePrimaryDefaultRrSetGroupDlvRecordToTerraform(struct!.dlvRecord),
    ds_record: dnsZonePrimaryDefaultRrSetGroupDsRecordToTerraform(struct!.dsRecord),
    eui48_record: dnsZonePrimaryDefaultRrSetGroupEui48RecordToTerraform(struct!.eui48Record),
    eui64_record: dnsZonePrimaryDefaultRrSetGroupEui64RecordToTerraform(struct!.eui64Record),
    lb_record: dnsZonePrimaryDefaultRrSetGroupLbRecordToTerraform(struct!.lbRecord),
    loc_record: dnsZonePrimaryDefaultRrSetGroupLocRecordToTerraform(struct!.locRecord),
    mx_record: dnsZonePrimaryDefaultRrSetGroupMxRecordToTerraform(struct!.mxRecord),
    naptr_record: dnsZonePrimaryDefaultRrSetGroupNaptrRecordToTerraform(struct!.naptrRecord),
    ns_record: dnsZonePrimaryDefaultRrSetGroupNsRecordToTerraform(struct!.nsRecord),
    ptr_record: dnsZonePrimaryDefaultRrSetGroupPtrRecordToTerraform(struct!.ptrRecord),
    srv_record: dnsZonePrimaryDefaultRrSetGroupSrvRecordToTerraform(struct!.srvRecord),
    sshfp_record: dnsZonePrimaryDefaultRrSetGroupSshfpRecordToTerraform(struct!.sshfpRecord),
    tlsa_record: dnsZonePrimaryDefaultRrSetGroupTlsaRecordToTerraform(struct!.tlsaRecord),
    txt_record: dnsZonePrimaryDefaultRrSetGroupTxtRecordToTerraform(struct!.txtRecord),
  }
}


export function dnsZonePrimaryDefaultRrSetGroupToHclTerraform(struct?: DnsZonePrimaryDefaultRrSetGroup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ttl: {
      value: cdktf.numberToHclTerraform(struct!.ttl),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    a_record: {
      value: dnsZonePrimaryDefaultRrSetGroupARecordToHclTerraform(struct!.aRecord),
      isBlock: true,
      type: "list",
      storageClassType: "DnsZonePrimaryDefaultRrSetGroupARecordList",
    },
    aaaa_record: {
      value: dnsZonePrimaryDefaultRrSetGroupAaaaRecordToHclTerraform(struct!.aaaaRecord),
      isBlock: true,
      type: "list",
      storageClassType: "DnsZonePrimaryDefaultRrSetGroupAaaaRecordList",
    },
    afsdb_record: {
      value: dnsZonePrimaryDefaultRrSetGroupAfsdbRecordToHclTerraform(struct!.afsdbRecord),
      isBlock: true,
      type: "list",
      storageClassType: "DnsZonePrimaryDefaultRrSetGroupAfsdbRecordList",
    },
    alias_record: {
      value: dnsZonePrimaryDefaultRrSetGroupAliasRecordToHclTerraform(struct!.aliasRecord),
      isBlock: true,
      type: "list",
      storageClassType: "DnsZonePrimaryDefaultRrSetGroupAliasRecordList",
    },
    caa_record: {
      value: dnsZonePrimaryDefaultRrSetGroupCaaRecordToHclTerraform(struct!.caaRecord),
      isBlock: true,
      type: "list",
      storageClassType: "DnsZonePrimaryDefaultRrSetGroupCaaRecordList",
    },
    cds_record: {
      value: dnsZonePrimaryDefaultRrSetGroupCdsRecordToHclTerraform(struct!.cdsRecord),
      isBlock: true,
      type: "list",
      storageClassType: "DnsZonePrimaryDefaultRrSetGroupCdsRecordList",
    },
    cert_record: {
      value: dnsZonePrimaryDefaultRrSetGroupCertRecordToHclTerraform(struct!.certRecord),
      isBlock: true,
      type: "list",
      storageClassType: "DnsZonePrimaryDefaultRrSetGroupCertRecordList",
    },
    cname_record: {
      value: dnsZonePrimaryDefaultRrSetGroupCnameRecordToHclTerraform(struct!.cnameRecord),
      isBlock: true,
      type: "list",
      storageClassType: "DnsZonePrimaryDefaultRrSetGroupCnameRecordList",
    },
    dlv_record: {
      value: dnsZonePrimaryDefaultRrSetGroupDlvRecordToHclTerraform(struct!.dlvRecord),
      isBlock: true,
      type: "list",
      storageClassType: "DnsZonePrimaryDefaultRrSetGroupDlvRecordList",
    },
    ds_record: {
      value: dnsZonePrimaryDefaultRrSetGroupDsRecordToHclTerraform(struct!.dsRecord),
      isBlock: true,
      type: "list",
      storageClassType: "DnsZonePrimaryDefaultRrSetGroupDsRecordList",
    },
    eui48_record: {
      value: dnsZonePrimaryDefaultRrSetGroupEui48RecordToHclTerraform(struct!.eui48Record),
      isBlock: true,
      type: "list",
      storageClassType: "DnsZonePrimaryDefaultRrSetGroupEui48RecordList",
    },
    eui64_record: {
      value: dnsZonePrimaryDefaultRrSetGroupEui64RecordToHclTerraform(struct!.eui64Record),
      isBlock: true,
      type: "list",
      storageClassType: "DnsZonePrimaryDefaultRrSetGroupEui64RecordList",
    },
    lb_record: {
      value: dnsZonePrimaryDefaultRrSetGroupLbRecordToHclTerraform(struct!.lbRecord),
      isBlock: true,
      type: "list",
      storageClassType: "DnsZonePrimaryDefaultRrSetGroupLbRecordList",
    },
    loc_record: {
      value: dnsZonePrimaryDefaultRrSetGroupLocRecordToHclTerraform(struct!.locRecord),
      isBlock: true,
      type: "list",
      storageClassType: "DnsZonePrimaryDefaultRrSetGroupLocRecordList",
    },
    mx_record: {
      value: dnsZonePrimaryDefaultRrSetGroupMxRecordToHclTerraform(struct!.mxRecord),
      isBlock: true,
      type: "list",
      storageClassType: "DnsZonePrimaryDefaultRrSetGroupMxRecordList",
    },
    naptr_record: {
      value: dnsZonePrimaryDefaultRrSetGroupNaptrRecordToHclTerraform(struct!.naptrRecord),
      isBlock: true,
      type: "list",
      storageClassType: "DnsZonePrimaryDefaultRrSetGroupNaptrRecordList",
    },
    ns_record: {
      value: dnsZonePrimaryDefaultRrSetGroupNsRecordToHclTerraform(struct!.nsRecord),
      isBlock: true,
      type: "list",
      storageClassType: "DnsZonePrimaryDefaultRrSetGroupNsRecordList",
    },
    ptr_record: {
      value: dnsZonePrimaryDefaultRrSetGroupPtrRecordToHclTerraform(struct!.ptrRecord),
      isBlock: true,
      type: "list",
      storageClassType: "DnsZonePrimaryDefaultRrSetGroupPtrRecordList",
    },
    srv_record: {
      value: dnsZonePrimaryDefaultRrSetGroupSrvRecordToHclTerraform(struct!.srvRecord),
      isBlock: true,
      type: "list",
      storageClassType: "DnsZonePrimaryDefaultRrSetGroupSrvRecordList",
    },
    sshfp_record: {
      value: dnsZonePrimaryDefaultRrSetGroupSshfpRecordToHclTerraform(struct!.sshfpRecord),
      isBlock: true,
      type: "list",
      storageClassType: "DnsZonePrimaryDefaultRrSetGroupSshfpRecordList",
    },
    tlsa_record: {
      value: dnsZonePrimaryDefaultRrSetGroupTlsaRecordToHclTerraform(struct!.tlsaRecord),
      isBlock: true,
      type: "list",
      storageClassType: "DnsZonePrimaryDefaultRrSetGroupTlsaRecordList",
    },
    txt_record: {
      value: dnsZonePrimaryDefaultRrSetGroupTxtRecordToHclTerraform(struct!.txtRecord),
      isBlock: true,
      type: "list",
      storageClassType: "DnsZonePrimaryDefaultRrSetGroupTxtRecordList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DnsZonePrimaryDefaultRrSetGroupOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DnsZonePrimaryDefaultRrSetGroup | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._ttl !== undefined) {
      hasAnyValues = true;
      internalValueResult.ttl = this._ttl;
    }
    if (this._aRecord?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.aRecord = this._aRecord?.internalValue;
    }
    if (this._aaaaRecord?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.aaaaRecord = this._aaaaRecord?.internalValue;
    }
    if (this._afsdbRecord?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.afsdbRecord = this._afsdbRecord?.internalValue;
    }
    if (this._aliasRecord?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.aliasRecord = this._aliasRecord?.internalValue;
    }
    if (this._caaRecord?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.caaRecord = this._caaRecord?.internalValue;
    }
    if (this._cdsRecord?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cdsRecord = this._cdsRecord?.internalValue;
    }
    if (this._certRecord?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.certRecord = this._certRecord?.internalValue;
    }
    if (this._cnameRecord?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cnameRecord = this._cnameRecord?.internalValue;
    }
    if (this._dlvRecord?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dlvRecord = this._dlvRecord?.internalValue;
    }
    if (this._dsRecord?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dsRecord = this._dsRecord?.internalValue;
    }
    if (this._eui48Record?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.eui48Record = this._eui48Record?.internalValue;
    }
    if (this._eui64Record?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.eui64Record = this._eui64Record?.internalValue;
    }
    if (this._lbRecord?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.lbRecord = this._lbRecord?.internalValue;
    }
    if (this._locRecord?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.locRecord = this._locRecord?.internalValue;
    }
    if (this._mxRecord?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mxRecord = this._mxRecord?.internalValue;
    }
    if (this._naptrRecord?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.naptrRecord = this._naptrRecord?.internalValue;
    }
    if (this._nsRecord?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nsRecord = this._nsRecord?.internalValue;
    }
    if (this._ptrRecord?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ptrRecord = this._ptrRecord?.internalValue;
    }
    if (this._srvRecord?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.srvRecord = this._srvRecord?.internalValue;
    }
    if (this._sshfpRecord?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sshfpRecord = this._sshfpRecord?.internalValue;
    }
    if (this._tlsaRecord?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlsaRecord = this._tlsaRecord?.internalValue;
    }
    if (this._txtRecord?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.txtRecord = this._txtRecord?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DnsZonePrimaryDefaultRrSetGroup | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._ttl = undefined;
      this._aRecord.internalValue = undefined;
      this._aaaaRecord.internalValue = undefined;
      this._afsdbRecord.internalValue = undefined;
      this._aliasRecord.internalValue = undefined;
      this._caaRecord.internalValue = undefined;
      this._cdsRecord.internalValue = undefined;
      this._certRecord.internalValue = undefined;
      this._cnameRecord.internalValue = undefined;
      this._dlvRecord.internalValue = undefined;
      this._dsRecord.internalValue = undefined;
      this._eui48Record.internalValue = undefined;
      this._eui64Record.internalValue = undefined;
      this._lbRecord.internalValue = undefined;
      this._locRecord.internalValue = undefined;
      this._mxRecord.internalValue = undefined;
      this._naptrRecord.internalValue = undefined;
      this._nsRecord.internalValue = undefined;
      this._ptrRecord.internalValue = undefined;
      this._srvRecord.internalValue = undefined;
      this._sshfpRecord.internalValue = undefined;
      this._tlsaRecord.internalValue = undefined;
      this._txtRecord.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._ttl = value.ttl;
      this._aRecord.internalValue = value.aRecord;
      this._aaaaRecord.internalValue = value.aaaaRecord;
      this._afsdbRecord.internalValue = value.afsdbRecord;
      this._aliasRecord.internalValue = value.aliasRecord;
      this._caaRecord.internalValue = value.caaRecord;
      this._cdsRecord.internalValue = value.cdsRecord;
      this._certRecord.internalValue = value.certRecord;
      this._cnameRecord.internalValue = value.cnameRecord;
      this._dlvRecord.internalValue = value.dlvRecord;
      this._dsRecord.internalValue = value.dsRecord;
      this._eui48Record.internalValue = value.eui48Record;
      this._eui64Record.internalValue = value.eui64Record;
      this._lbRecord.internalValue = value.lbRecord;
      this._locRecord.internalValue = value.locRecord;
      this._mxRecord.internalValue = value.mxRecord;
      this._naptrRecord.internalValue = value.naptrRecord;
      this._nsRecord.internalValue = value.nsRecord;
      this._ptrRecord.internalValue = value.ptrRecord;
      this._srvRecord.internalValue = value.srvRecord;
      this._sshfpRecord.internalValue = value.sshfpRecord;
      this._tlsaRecord.internalValue = value.tlsaRecord;
      this._txtRecord.internalValue = value.txtRecord;
    }
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

  // ttl - computed: false, optional: true, required: false
  private _ttl?: number; 
  public get ttl() {
    return this.getNumberAttribute('ttl');
  }
  public set ttl(value: number) {
    this._ttl = value;
  }
  public resetTtl() {
    this._ttl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ttlInput() {
    return this._ttl;
  }

  // a_record - computed: false, optional: true, required: false
  private _aRecord = new DnsZonePrimaryDefaultRrSetGroupARecordOutputReference(this, "a_record");
  public get aRecord() {
    return this._aRecord;
  }
  public putARecord(value: DnsZonePrimaryDefaultRrSetGroupARecord) {
    this._aRecord.internalValue = value;
  }
  public resetARecord() {
    this._aRecord.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aRecordInput() {
    return this._aRecord.internalValue;
  }

  // aaaa_record - computed: false, optional: true, required: false
  private _aaaaRecord = new DnsZonePrimaryDefaultRrSetGroupAaaaRecordOutputReference(this, "aaaa_record");
  public get aaaaRecord() {
    return this._aaaaRecord;
  }
  public putAaaaRecord(value: DnsZonePrimaryDefaultRrSetGroupAaaaRecord) {
    this._aaaaRecord.internalValue = value;
  }
  public resetAaaaRecord() {
    this._aaaaRecord.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aaaaRecordInput() {
    return this._aaaaRecord.internalValue;
  }

  // afsdb_record - computed: false, optional: true, required: false
  private _afsdbRecord = new DnsZonePrimaryDefaultRrSetGroupAfsdbRecordOutputReference(this, "afsdb_record");
  public get afsdbRecord() {
    return this._afsdbRecord;
  }
  public putAfsdbRecord(value: DnsZonePrimaryDefaultRrSetGroupAfsdbRecord) {
    this._afsdbRecord.internalValue = value;
  }
  public resetAfsdbRecord() {
    this._afsdbRecord.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get afsdbRecordInput() {
    return this._afsdbRecord.internalValue;
  }

  // alias_record - computed: false, optional: true, required: false
  private _aliasRecord = new DnsZonePrimaryDefaultRrSetGroupAliasRecordOutputReference(this, "alias_record");
  public get aliasRecord() {
    return this._aliasRecord;
  }
  public putAliasRecord(value: DnsZonePrimaryDefaultRrSetGroupAliasRecord) {
    this._aliasRecord.internalValue = value;
  }
  public resetAliasRecord() {
    this._aliasRecord.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aliasRecordInput() {
    return this._aliasRecord.internalValue;
  }

  // caa_record - computed: false, optional: true, required: false
  private _caaRecord = new DnsZonePrimaryDefaultRrSetGroupCaaRecordOutputReference(this, "caa_record");
  public get caaRecord() {
    return this._caaRecord;
  }
  public putCaaRecord(value: DnsZonePrimaryDefaultRrSetGroupCaaRecord) {
    this._caaRecord.internalValue = value;
  }
  public resetCaaRecord() {
    this._caaRecord.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caaRecordInput() {
    return this._caaRecord.internalValue;
  }

  // cds_record - computed: false, optional: true, required: false
  private _cdsRecord = new DnsZonePrimaryDefaultRrSetGroupCdsRecordOutputReference(this, "cds_record");
  public get cdsRecord() {
    return this._cdsRecord;
  }
  public putCdsRecord(value: DnsZonePrimaryDefaultRrSetGroupCdsRecord) {
    this._cdsRecord.internalValue = value;
  }
  public resetCdsRecord() {
    this._cdsRecord.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cdsRecordInput() {
    return this._cdsRecord.internalValue;
  }

  // cert_record - computed: false, optional: true, required: false
  private _certRecord = new DnsZonePrimaryDefaultRrSetGroupCertRecordOutputReference(this, "cert_record");
  public get certRecord() {
    return this._certRecord;
  }
  public putCertRecord(value: DnsZonePrimaryDefaultRrSetGroupCertRecord) {
    this._certRecord.internalValue = value;
  }
  public resetCertRecord() {
    this._certRecord.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certRecordInput() {
    return this._certRecord.internalValue;
  }

  // cname_record - computed: false, optional: true, required: false
  private _cnameRecord = new DnsZonePrimaryDefaultRrSetGroupCnameRecordOutputReference(this, "cname_record");
  public get cnameRecord() {
    return this._cnameRecord;
  }
  public putCnameRecord(value: DnsZonePrimaryDefaultRrSetGroupCnameRecord) {
    this._cnameRecord.internalValue = value;
  }
  public resetCnameRecord() {
    this._cnameRecord.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cnameRecordInput() {
    return this._cnameRecord.internalValue;
  }

  // dlv_record - computed: false, optional: true, required: false
  private _dlvRecord = new DnsZonePrimaryDefaultRrSetGroupDlvRecordOutputReference(this, "dlv_record");
  public get dlvRecord() {
    return this._dlvRecord;
  }
  public putDlvRecord(value: DnsZonePrimaryDefaultRrSetGroupDlvRecord) {
    this._dlvRecord.internalValue = value;
  }
  public resetDlvRecord() {
    this._dlvRecord.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dlvRecordInput() {
    return this._dlvRecord.internalValue;
  }

  // ds_record - computed: false, optional: true, required: false
  private _dsRecord = new DnsZonePrimaryDefaultRrSetGroupDsRecordOutputReference(this, "ds_record");
  public get dsRecord() {
    return this._dsRecord;
  }
  public putDsRecord(value: DnsZonePrimaryDefaultRrSetGroupDsRecord) {
    this._dsRecord.internalValue = value;
  }
  public resetDsRecord() {
    this._dsRecord.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dsRecordInput() {
    return this._dsRecord.internalValue;
  }

  // eui48_record - computed: false, optional: true, required: false
  private _eui48Record = new DnsZonePrimaryDefaultRrSetGroupEui48RecordOutputReference(this, "eui48_record");
  public get eui48Record() {
    return this._eui48Record;
  }
  public putEui48Record(value: DnsZonePrimaryDefaultRrSetGroupEui48Record) {
    this._eui48Record.internalValue = value;
  }
  public resetEui48Record() {
    this._eui48Record.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eui48RecordInput() {
    return this._eui48Record.internalValue;
  }

  // eui64_record - computed: false, optional: true, required: false
  private _eui64Record = new DnsZonePrimaryDefaultRrSetGroupEui64RecordOutputReference(this, "eui64_record");
  public get eui64Record() {
    return this._eui64Record;
  }
  public putEui64Record(value: DnsZonePrimaryDefaultRrSetGroupEui64Record) {
    this._eui64Record.internalValue = value;
  }
  public resetEui64Record() {
    this._eui64Record.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eui64RecordInput() {
    return this._eui64Record.internalValue;
  }

  // lb_record - computed: false, optional: true, required: false
  private _lbRecord = new DnsZonePrimaryDefaultRrSetGroupLbRecordOutputReference(this, "lb_record");
  public get lbRecord() {
    return this._lbRecord;
  }
  public putLbRecord(value: DnsZonePrimaryDefaultRrSetGroupLbRecord) {
    this._lbRecord.internalValue = value;
  }
  public resetLbRecord() {
    this._lbRecord.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lbRecordInput() {
    return this._lbRecord.internalValue;
  }

  // loc_record - computed: false, optional: true, required: false
  private _locRecord = new DnsZonePrimaryDefaultRrSetGroupLocRecordOutputReference(this, "loc_record");
  public get locRecord() {
    return this._locRecord;
  }
  public putLocRecord(value: DnsZonePrimaryDefaultRrSetGroupLocRecord) {
    this._locRecord.internalValue = value;
  }
  public resetLocRecord() {
    this._locRecord.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locRecordInput() {
    return this._locRecord.internalValue;
  }

  // mx_record - computed: false, optional: true, required: false
  private _mxRecord = new DnsZonePrimaryDefaultRrSetGroupMxRecordOutputReference(this, "mx_record");
  public get mxRecord() {
    return this._mxRecord;
  }
  public putMxRecord(value: DnsZonePrimaryDefaultRrSetGroupMxRecord) {
    this._mxRecord.internalValue = value;
  }
  public resetMxRecord() {
    this._mxRecord.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mxRecordInput() {
    return this._mxRecord.internalValue;
  }

  // naptr_record - computed: false, optional: true, required: false
  private _naptrRecord = new DnsZonePrimaryDefaultRrSetGroupNaptrRecordOutputReference(this, "naptr_record");
  public get naptrRecord() {
    return this._naptrRecord;
  }
  public putNaptrRecord(value: DnsZonePrimaryDefaultRrSetGroupNaptrRecord) {
    this._naptrRecord.internalValue = value;
  }
  public resetNaptrRecord() {
    this._naptrRecord.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get naptrRecordInput() {
    return this._naptrRecord.internalValue;
  }

  // ns_record - computed: false, optional: true, required: false
  private _nsRecord = new DnsZonePrimaryDefaultRrSetGroupNsRecordOutputReference(this, "ns_record");
  public get nsRecord() {
    return this._nsRecord;
  }
  public putNsRecord(value: DnsZonePrimaryDefaultRrSetGroupNsRecord) {
    this._nsRecord.internalValue = value;
  }
  public resetNsRecord() {
    this._nsRecord.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nsRecordInput() {
    return this._nsRecord.internalValue;
  }

  // ptr_record - computed: false, optional: true, required: false
  private _ptrRecord = new DnsZonePrimaryDefaultRrSetGroupPtrRecordOutputReference(this, "ptr_record");
  public get ptrRecord() {
    return this._ptrRecord;
  }
  public putPtrRecord(value: DnsZonePrimaryDefaultRrSetGroupPtrRecord) {
    this._ptrRecord.internalValue = value;
  }
  public resetPtrRecord() {
    this._ptrRecord.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ptrRecordInput() {
    return this._ptrRecord.internalValue;
  }

  // srv_record - computed: false, optional: true, required: false
  private _srvRecord = new DnsZonePrimaryDefaultRrSetGroupSrvRecordOutputReference(this, "srv_record");
  public get srvRecord() {
    return this._srvRecord;
  }
  public putSrvRecord(value: DnsZonePrimaryDefaultRrSetGroupSrvRecord) {
    this._srvRecord.internalValue = value;
  }
  public resetSrvRecord() {
    this._srvRecord.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srvRecordInput() {
    return this._srvRecord.internalValue;
  }

  // sshfp_record - computed: false, optional: true, required: false
  private _sshfpRecord = new DnsZonePrimaryDefaultRrSetGroupSshfpRecordOutputReference(this, "sshfp_record");
  public get sshfpRecord() {
    return this._sshfpRecord;
  }
  public putSshfpRecord(value: DnsZonePrimaryDefaultRrSetGroupSshfpRecord) {
    this._sshfpRecord.internalValue = value;
  }
  public resetSshfpRecord() {
    this._sshfpRecord.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sshfpRecordInput() {
    return this._sshfpRecord.internalValue;
  }

  // tlsa_record - computed: false, optional: true, required: false
  private _tlsaRecord = new DnsZonePrimaryDefaultRrSetGroupTlsaRecordOutputReference(this, "tlsa_record");
  public get tlsaRecord() {
    return this._tlsaRecord;
  }
  public putTlsaRecord(value: DnsZonePrimaryDefaultRrSetGroupTlsaRecord) {
    this._tlsaRecord.internalValue = value;
  }
  public resetTlsaRecord() {
    this._tlsaRecord.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsaRecordInput() {
    return this._tlsaRecord.internalValue;
  }

  // txt_record - computed: false, optional: true, required: false
  private _txtRecord = new DnsZonePrimaryDefaultRrSetGroupTxtRecordOutputReference(this, "txt_record");
  public get txtRecord() {
    return this._txtRecord;
  }
  public putTxtRecord(value: DnsZonePrimaryDefaultRrSetGroupTxtRecord) {
    this._txtRecord.internalValue = value;
  }
  public resetTxtRecord() {
    this._txtRecord.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get txtRecordInput() {
    return this._txtRecord.internalValue;
  }
}

export class DnsZonePrimaryDefaultRrSetGroupList extends cdktf.ComplexList {
  public internalValue? : DnsZonePrimaryDefaultRrSetGroup[] | cdktf.IResolvable

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
  public get(index: number): DnsZonePrimaryDefaultRrSetGroupOutputReference {
    return new DnsZonePrimaryDefaultRrSetGroupOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DnsZonePrimaryDnssecModeEnable {
}

export function dnsZonePrimaryDnssecModeEnableToTerraform(struct?: DnsZonePrimaryDnssecModeEnableOutputReference | DnsZonePrimaryDnssecModeEnable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dnsZonePrimaryDnssecModeEnableToHclTerraform(struct?: DnsZonePrimaryDnssecModeEnableOutputReference | DnsZonePrimaryDnssecModeEnable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DnsZonePrimaryDnssecModeEnableOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DnsZonePrimaryDnssecModeEnable | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DnsZonePrimaryDnssecModeEnable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface DnsZonePrimaryDnssecMode {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/dns_zone#disable DnsZone#disable}
  */
  readonly disable?: boolean | cdktf.IResolvable;
  /**
  * enable block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/dns_zone#enable DnsZone#enable}
  */
  readonly enable?: DnsZonePrimaryDnssecModeEnable;
}

export function dnsZonePrimaryDnssecModeToTerraform(struct?: DnsZonePrimaryDnssecModeOutputReference | DnsZonePrimaryDnssecMode): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disable: cdktf.booleanToTerraform(struct!.disable),
    enable: dnsZonePrimaryDnssecModeEnableToTerraform(struct!.enable),
  }
}


export function dnsZonePrimaryDnssecModeToHclTerraform(struct?: DnsZonePrimaryDnssecModeOutputReference | DnsZonePrimaryDnssecMode): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disable: {
      value: cdktf.booleanToHclTerraform(struct!.disable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable: {
      value: dnsZonePrimaryDnssecModeEnableToHclTerraform(struct!.enable),
      isBlock: true,
      type: "list",
      storageClassType: "DnsZonePrimaryDnssecModeEnableList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DnsZonePrimaryDnssecModeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DnsZonePrimaryDnssecMode | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disable !== undefined) {
      hasAnyValues = true;
      internalValueResult.disable = this._disable;
    }
    if (this._enable?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.enable = this._enable?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DnsZonePrimaryDnssecMode | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._disable = undefined;
      this._enable.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._disable = value.disable;
      this._enable.internalValue = value.enable;
    }
  }

  // disable - computed: false, optional: true, required: false
  private _disable?: boolean | cdktf.IResolvable; 
  public get disable() {
    return this.getBooleanAttribute('disable');
  }
  public set disable(value: boolean | cdktf.IResolvable) {
    this._disable = value;
  }
  public resetDisable() {
    this._disable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableInput() {
    return this._disable;
  }

  // enable - computed: false, optional: true, required: false
  private _enable = new DnsZonePrimaryDnssecModeEnableOutputReference(this, "enable");
  public get enable() {
    return this._enable;
  }
  public putEnable(value: DnsZonePrimaryDnssecModeEnable) {
    this._enable.internalValue = value;
  }
  public resetEnable() {
    this._enable.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInput() {
    return this._enable.internalValue;
  }
}
export interface DnsZonePrimaryRrSetGroupMetadata {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/dns_zone#description DnsZone#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/dns_zone#disable DnsZone#disable}
  */
  readonly disable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/dns_zone#name DnsZone#name}
  */
  readonly name: string;
}

export function dnsZonePrimaryRrSetGroupMetadataToTerraform(struct?: DnsZonePrimaryRrSetGroupMetadataOutputReference | DnsZonePrimaryRrSetGroupMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    disable: cdktf.booleanToTerraform(struct!.disable),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dnsZonePrimaryRrSetGroupMetadataToHclTerraform(struct?: DnsZonePrimaryRrSetGroupMetadataOutputReference | DnsZonePrimaryRrSetGroupMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    disable: {
      value: cdktf.booleanToHclTerraform(struct!.disable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
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

export class DnsZonePrimaryRrSetGroupMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DnsZonePrimaryRrSetGroupMetadata | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._disable !== undefined) {
      hasAnyValues = true;
      internalValueResult.disable = this._disable;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DnsZonePrimaryRrSetGroupMetadata | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._description = undefined;
      this._disable = undefined;
      this._name = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._description = value.description;
      this._disable = value.disable;
      this._name = value.name;
    }
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

  // disable - computed: false, optional: true, required: false
  private _disable?: boolean | cdktf.IResolvable; 
  public get disable() {
    return this.getBooleanAttribute('disable');
  }
  public set disable(value: boolean | cdktf.IResolvable) {
    this._disable = value;
  }
  public resetDisable() {
    this._disable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableInput() {
    return this._disable;
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
export interface DnsZonePrimaryRrSetGroupRrSetARecord {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/dns_zone#name DnsZone#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/dns_zone#values DnsZone#values}
  */
  readonly values: string[];
}

export function dnsZonePrimaryRrSetGroupRrSetARecordToTerraform(struct?: DnsZonePrimaryRrSetGroupRrSetARecordOutputReference | DnsZonePrimaryRrSetGroupRrSetARecord): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function dnsZonePrimaryRrSetGroupRrSetARecordToHclTerraform(struct?: DnsZonePrimaryRrSetGroupRrSetARecordOutputReference | DnsZonePrimaryRrSetGroupRrSetARecord): any {
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
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DnsZonePrimaryRrSetGroupRrSetARecordOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DnsZonePrimaryRrSetGroupRrSetARecord | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DnsZonePrimaryRrSetGroupRrSetARecord | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._values = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._values = value.values;
    }
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

  // values - computed: false, optional: false, required: true
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}
export interface DnsZonePrimaryRrSetGroupRrSetAaaaRecord {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/dns_zone#name DnsZone#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/dns_zone#values DnsZone#values}
  */
  readonly values: string[];
}

export function dnsZonePrimaryRrSetGroupRrSetAaaaRecordToTerraform(struct?: DnsZonePrimaryRrSetGroupRrSetAaaaRecordOutputReference | DnsZonePrimaryRrSetGroupRrSetAaaaRecord): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function dnsZonePrimaryRrSetGroupRrSetAaaaRecordToHclTerraform(struct?: DnsZonePrimaryRrSetGroupRrSetAaaaRecordOutputReference | DnsZonePrimaryRrSetGroupRrSetAaaaRecord): any {
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
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DnsZonePrimaryRrSetGroupRrSetAaaaRecordOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DnsZonePrimaryRrSetGroupRrSetAaaaRecord | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DnsZonePrimaryRrSetGroupRrSetAaaaRecord | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._values = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._values = value.values;
    }
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

  // values - computed: false, optional: false, required: true
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}
export interface DnsZonePrimaryRrSetGroupRrSetAfsdbRecordValues {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/dns_zone#hostname DnsZone#hostname}
  */
  readonly hostname: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/dns_zone#subtype DnsZone#subtype}
  */
  readonly subtype: string;
}

export function dnsZonePrimaryRrSetGroupRrSetAfsdbRecordValuesToTerraform(struct?: DnsZonePrimaryRrSetGroupRrSetAfsdbRecordValues | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hostname: cdktf.stringToTerraform(struct!.hostname),
    subtype: cdktf.stringToTerraform(struct!.subtype),
  }
}


export function dnsZonePrimaryRrSetGroupRrSetAfsdbRecordValuesToHclTerraform(struct?: DnsZonePrimaryRrSetGroupRrSetAfsdbRecordValues | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    hostname: {
      value: cdktf.stringToHclTerraform(struct!.hostname),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subtype: {
      value: cdktf.stringToHclTerraform(struct!.subtype),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DnsZonePrimaryRrSetGroupRrSetAfsdbRecordValuesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DnsZonePrimaryRrSetGroupRrSetAfsdbRecordValues | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hostname !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostname = this._hostname;
    }
    if (this._subtype !== undefined) {
      hasAnyValues = true;
      internalValueResult.subtype = this._subtype;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DnsZonePrimaryRrSetGroupRrSetAfsdbRecordValues | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._hostname = undefined;
      this._subtype = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._hostname = value.hostname;
      this._subtype = value.subtype;
    }
  }

  // hostname - computed: false, optional: false, required: true
  private _hostname?: string; 
  public get hostname() {
    return this.getStringAttribute('hostname');
  }
  public set hostname(value: string) {
    this._hostname = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnameInput() {
    return this._hostname;
  }

  // subtype - computed: false, optional: false, required: true
  private _subtype?: string; 
  public get subtype() {
    return this.getStringAttribute('subtype');
  }
  public set subtype(value: string) {
    this._subtype = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subtypeInput() {
    return this._subtype;
  }
}

export class DnsZonePrimaryRrSetGroupRrSetAfsdbRecordValuesList extends cdktf.ComplexList {
  public internalValue? : DnsZonePrimaryRrSetGroupRrSetAfsdbRecordValues[] | cdktf.IResolvable

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
  public get(index: number): DnsZonePrimaryRrSetGroupRrSetAfsdbRecordValuesOutputReference {
    return new DnsZonePrimaryRrSetGroupRrSetAfsdbRecordValuesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DnsZonePrimaryRrSetGroupRrSetAfsdbRecord {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/dns_zone#name DnsZone#name}
  */
  readonly name?: string;
  /**
  * values block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/dns_zone#values DnsZone#values}
  */
  readonly values: DnsZonePrimaryRrSetGroupRrSetAfsdbRecordValues[] | cdktf.IResolvable;
}

export function dnsZonePrimaryRrSetGroupRrSetAfsdbRecordToTerraform(struct?: DnsZonePrimaryRrSetGroupRrSetAfsdbRecordOutputReference | DnsZonePrimaryRrSetGroupRrSetAfsdbRecord): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    values: cdktf.listMapper(dnsZonePrimaryRrSetGroupRrSetAfsdbRecordValuesToTerraform, true)(struct!.values),
  }
}


export function dnsZonePrimaryRrSetGroupRrSetAfsdbRecordToHclTerraform(struct?: DnsZonePrimaryRrSetGroupRrSetAfsdbRecordOutputReference | DnsZonePrimaryRrSetGroupRrSetAfsdbRecord): any {
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
    values: {
      value: cdktf.listMapperHcl(dnsZonePrimaryRrSetGroupRrSetAfsdbRecordValuesToHclTerraform, true)(struct!.values),
      isBlock: true,
      type: "list",
      storageClassType: "DnsZonePrimaryRrSetGroupRrSetAfsdbRecordValuesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DnsZonePrimaryRrSetGroupRrSetAfsdbRecordOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DnsZonePrimaryRrSetGroupRrSetAfsdbRecord | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._values?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DnsZonePrimaryRrSetGroupRrSetAfsdbRecord | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._values.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._values.internalValue = value.values;
    }
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

  // values - computed: false, optional: false, required: true
  private _values = new DnsZonePrimaryRrSetGroupRrSetAfsdbRecordValuesList(this, "values", false);
  public get values() {
    return this._values;
  }
  public putValues(value: DnsZonePrimaryRrSetGroupRrSetAfsdbRecordValues[] | cdktf.IResolvable) {
    this._values.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values.internalValue;
  }
}
export interface DnsZonePrimaryRrSetGroupRrSetAliasRecord {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/dns_zone#name DnsZone#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/dns_zone#value DnsZone#value}
  */
  readonly value?: string;
}

export function dnsZonePrimaryRrSetGroupRrSetAliasRecordToTerraform(struct?: DnsZonePrimaryRrSetGroupRrSetAliasRecordOutputReference | DnsZonePrimaryRrSetGroupRrSetAliasRecord): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dnsZonePrimaryRrSetGroupRrSetAliasRecordToHclTerraform(struct?: DnsZonePrimaryRrSetGroupRrSetAliasRecordOutputReference | DnsZonePrimaryRrSetGroupRrSetAliasRecord): any {
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

export class DnsZonePrimaryRrSetGroupRrSetAliasRecordOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DnsZonePrimaryRrSetGroupRrSetAliasRecord | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DnsZonePrimaryRrSetGroupRrSetAliasRecord | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._value = value.value;
    }
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

  // value - computed: false, optional: true, required: false
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
export interface DnsZonePrimaryRrSetGroupRrSetCaaRecordValues {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/dns_zone#flags DnsZone#flags}
  */
  readonly flags?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/dns_zone#tag DnsZone#tag}
  */
  readonly tag?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/dns_zone#value DnsZone#value}
  */
  readonly value?: string;
}

export function dnsZonePrimaryRrSetGroupRrSetCaaRecordValuesToTerraform(struct?: DnsZonePrimaryRrSetGroupRrSetCaaRecordValues | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    flags: cdktf.numberToTerraform(struct!.flags),
    tag: cdktf.stringToTerraform(struct!.tag),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dnsZonePrimaryRrSetGroupRrSetCaaRecordValuesToHclTerraform(struct?: DnsZonePrimaryRrSetGroupRrSetCaaRecordValues | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    flags: {
      value: cdktf.numberToHclTerraform(struct!.flags),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tag: {
      value: cdktf.stringToHclTerraform(struct!.tag),
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

export class DnsZonePrimaryRrSetGroupRrSetCaaRecordValuesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DnsZonePrimaryRrSetGroupRrSetCaaRecordValues | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._flags !== undefined) {
      hasAnyValues = true;
      internalValueResult.flags = this._flags;
    }
    if (this._tag !== undefined) {
      hasAnyValues = true;
      internalValueResult.tag = this._tag;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DnsZonePrimaryRrSetGroupRrSetCaaRecordValues | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._flags = undefined;
      this._tag = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._flags = value.flags;
      this._tag = value.tag;
      this._value = value.value;
    }
  }

  // flags - computed: false, optional: true, required: false
  private _flags?: number; 
  public get flags() {
    return this.getNumberAttribute('flags');
  }
  public set flags(value: number) {
    this._flags = value;
  }
  public resetFlags() {
    this._flags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get flagsInput() {
    return this._flags;
  }

  // tag - computed: false, optional: true, required: false
  private _tag?: string; 
  public get tag() {
    return this.getStringAttribute('tag');
  }
  public set tag(value: string) {
    this._tag = value;
  }
  public resetTag() {
    this._tag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagInput() {
    return this._tag;
  }

  // value - computed: false, optional: true, required: false
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

export class DnsZonePrimaryRrSetGroupRrSetCaaRecordValuesList extends cdktf.ComplexList {
  public internalValue? : DnsZonePrimaryRrSetGroupRrSetCaaRecordValues[] | cdktf.IResolvable

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
  public get(index: number): DnsZonePrimaryRrSetGroupRrSetCaaRecordValuesOutputReference {
    return new DnsZonePrimaryRrSetGroupRrSetCaaRecordValuesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DnsZonePrimaryRrSetGroupRrSetCaaRecord {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/dns_zone#name DnsZone#name}
  */
  readonly name?: string;
  /**
  * values block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/dns_zone#values DnsZone#values}
  */
  readonly values?: DnsZonePrimaryRrSetGroupRrSetCaaRecordValues[] | cdktf.IResolvable;
}

export function dnsZonePrimaryRrSetGroupRrSetCaaRecordToTerraform(struct?: DnsZonePrimaryRrSetGroupRrSetCaaRecordOutputReference | DnsZonePrimaryRrSetGroupRrSetCaaRecord): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    values: cdktf.listMapper(dnsZonePrimaryRrSetGroupRrSetCaaRecordValuesToTerraform, true)(struct!.values),
  }
}


export function dnsZonePrimaryRrSetGroupRrSetCaaRecordToHclTerraform(struct?: DnsZonePrimaryRrSetGroupRrSetCaaRecordOutputReference | DnsZonePrimaryRrSetGroupRrSetCaaRecord): any {
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
    values: {
      value: cdktf.listMapperHcl(dnsZonePrimaryRrSetGroupRrSetCaaRecordValuesToHclTerraform, true)(struct!.values),
      isBlock: true,
      type: "list",
      storageClassType: "DnsZonePrimaryRrSetGroupRrSetCaaRecordValuesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DnsZonePrimaryRrSetGroupRrSetCaaRecordOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DnsZonePrimaryRrSetGroupRrSetCaaRecord | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._values?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DnsZonePrimaryRrSetGroupRrSetCaaRecord | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._values.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._values.internalValue = value.values;
    }
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

  // values - computed: false, optional: true, required: false
  private _values = new DnsZonePrimaryRrSetGroupRrSetCaaRecordValuesList(this, "values", false);
  public get values() {
    return this._values;
  }
  public putValues(value: DnsZonePrimaryRrSetGroupRrSetCaaRecordValues[] | cdktf.IResolvable) {
    this._values.internalValue = value;
  }
  public resetValues() {
    this._values.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values.internalValue;
  }
}
export interface DnsZonePrimaryRrSetGroupRrSetCdsRecordValuesSha1Digest {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/dns_zone#digest DnsZone#digest}
  */
  readonly digest: string;
}

export function dnsZonePrimaryRrSetGroupRrSetCdsRecordValuesSha1DigestToTerraform(struct?: DnsZonePrimaryRrSetGroupRrSetCdsRecordValuesSha1DigestOutputReference | DnsZonePrimaryRrSetGroupRrSetCdsRecordValuesSha1Digest): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    digest: cdktf.stringToTerraform(struct!.digest),
  }
}


export function dnsZonePrimaryRrSetGroupRrSetCdsRecordValuesSha1DigestToHclTerraform(struct?: DnsZonePrimaryRrSetGroupRrSetCdsRecordValuesSha1DigestOutputReference | DnsZonePrimaryRrSetGroupRrSetCdsRecordValuesSha1Digest): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    digest: {
      value: cdktf.stringToHclTerraform(struct!.digest),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DnsZonePrimaryRrSetGroupRrSetCdsRecordValuesSha1DigestOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DnsZonePrimaryRrSetGroupRrSetCdsRecordValuesSha1Digest | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._digest !== undefined) {
      hasAnyValues = true;
      internalValueResult.digest = this._digest;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DnsZonePrimaryRrSetGroupRrSetCdsRecordValuesSha1Digest | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._digest = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._digest = value.digest;
    }
  }

  // digest - computed: false, optional: false, required: true
  private _digest?: string; 
  public get digest() {
    return this.getStringAttribute('digest');
  }
  public set digest(value: string) {
    this._digest = value;
  }
  // Temporarily expose input value. Use with caution.
  public get digestInput() {
    return this._digest;
  }
}
export interface DnsZonePrimaryRrSetGroupRrSetCdsRecordValuesSha256Digest {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/dns_zone#digest DnsZone#digest}
  */
  readonly digest: string;
}

export function dnsZonePrimaryRrSetGroupRrSetCdsRecordValuesSha256DigestToTerraform(struct?: DnsZonePrimaryRrSetGroupRrSetCdsRecordValuesSha256DigestOutputReference | DnsZonePrimaryRrSetGroupRrSetCdsRecordValuesSha256Digest): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    digest: cdktf.stringToTerraform(struct!.digest),
  }
}


export function dnsZonePrimaryRrSetGroupRrSetCdsRecordValuesSha256DigestToHclTerraform(struct?: DnsZonePrimaryRrSetGroupRrSetCdsRecordValuesSha256DigestOutputReference | DnsZonePrimaryRrSetGroupRrSetCdsRecordValuesSha256Digest): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    digest: {
      value: cdktf.stringToHclTerraform(struct!.digest),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DnsZonePrimaryRrSetGroupRrSetCdsRecordValuesSha256DigestOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DnsZonePrimaryRrSetGroupRrSetCdsRecordValuesSha256Digest | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._digest !== undefined) {
      hasAnyValues = true;
      internalValueResult.digest = this._digest;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DnsZonePrimaryRrSetGroupRrSetCdsRecordValuesSha256Digest | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._digest = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._digest = value.digest;
    }
  }

  // digest - computed: false, optional: false, required: true
  private _digest?: string; 
  public get digest() {
    return this.getStringAttribute('digest');
  }
  public set digest(value: string) {
    this._digest = value;
  }
  // Temporarily expose input value. Use with caution.
  public get digestInput() {
    return this._digest;
  }
}
export interface DnsZonePrimaryRrSetGroupRrSetCdsRecordValuesSha384Digest {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/dns_zone#digest DnsZone#digest}
  */
  readonly digest: string;
}

export function dnsZonePrimaryRrSetGroupRrSetCdsRecordValuesSha384DigestToTerraform(struct?: DnsZonePrimaryRrSetGroupRrSetCdsRecordValuesSha384DigestOutputReference | DnsZonePrimaryRrSetGroupRrSetCdsRecordValuesSha384Digest): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    digest: cdktf.stringToTerraform(struct!.digest),
  }
}


export function dnsZonePrimaryRrSetGroupRrSetCdsRecordValuesSha384DigestToHclTerraform(struct?: DnsZonePrimaryRrSetGroupRrSetCdsRecordValuesSha384DigestOutputReference | DnsZonePrimaryRrSetGroupRrSetCdsRecordValuesSha384Digest): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    digest: {
      value: cdktf.stringToHclTerraform(struct!.digest),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DnsZonePrimaryRrSetGroupRrSetCdsRecordValuesSha384DigestOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DnsZonePrimaryRrSetGroupRrSetCdsRecordValuesSha384Digest | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._digest !== undefined) {
      hasAnyValues = true;
      internalValueResult.digest = this._digest;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DnsZonePrimaryRrSetGroupRrSetCdsRecordValuesSha384Digest | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._digest = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._digest = value.digest;
    }
  }

  // digest - computed: false, optional: false, required: true
  private _digest?: string; 
  public get digest() {
    return this.getStringAttribute('digest');
  }
  public set digest(value: string) {
    this._digest = value;
  }
  // Temporarily expose input value. Use with caution.
  public get digestInput() {
    return this._digest;
  }
}
export interface DnsZonePrimaryRrSetGroupRrSetCdsRecordValues {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/dns_zone#ds_key_algorithm DnsZone#ds_key_algorithm}
  */
  readonly dsKeyAlgorithm: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/dns_zone#key_tag DnsZone#key_tag}
  */
  readonly keyTag: number;
  /**
  * sha1_digest block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/dns_zone#sha1_digest DnsZone#sha1_digest}
  */
  readonly sha1Digest?: DnsZonePrimaryRrSetGroupRrSetCdsRecordValuesSha1Digest;
  /**
  * sha256_digest block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/dns_zone#sha256_digest DnsZone#sha256_digest}
  */
  readonly sha256Digest?: DnsZonePrimaryRrSetGroupRrSetCdsRecordValuesSha256Digest;
  /**
  * sha384_digest block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/dns_zone#sha384_digest DnsZone#sha384_digest}
  */
  readonly sha384Digest?: DnsZonePrimaryRrSetGroupRrSetCdsRecordValuesSha384Digest;
}

export function dnsZonePrimaryRrSetGroupRrSetCdsRecordValuesToTerraform(struct?: DnsZonePrimaryRrSetGroupRrSetCdsRecordValues | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ds_key_algorithm: cdktf.stringToTerraform(struct!.dsKeyAlgorithm),
    key_tag: cdktf.numberToTerraform(struct!.keyTag),
    sha1_digest: dnsZonePrimaryRrSetGroupRrSetCdsRecordValuesSha1DigestToTerraform(struct!.sha1Digest),
    sha256_digest: dnsZonePrimaryRrSetGroupRrSetCdsRecordValuesSha256DigestToTerraform(struct!.sha256Digest),
    sha384_digest: dnsZonePrimaryRrSetGroupRrSetCdsRecordValuesSha384DigestToTerraform(struct!.sha384Digest),
  }
}


export function dnsZonePrimaryRrSetGroupRrSetCdsRecordValuesToHclTerraform(struct?: DnsZonePrimaryRrSetGroupRrSetCdsRecordValues | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ds_key_algorithm: {
      value: cdktf.stringToHclTerraform(struct!.dsKeyAlgorithm),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key_tag: {
      value: cdktf.numberToHclTerraform(struct!.keyTag),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sha1_digest: {
      value: dnsZonePrimaryRrSetGroupRrSetCdsRecordValuesSha1DigestToHclTerraform(struct!.sha1Digest),
      isBlock: true,
      type: "list",
      storageClassType: "DnsZonePrimaryRrSetGroupRrSetCdsRecordValuesSha1DigestList",
    },
    sha256_digest: {
      value: dnsZonePrimaryRrSetGroupRrSetCdsRecordValuesSha256DigestToHclTerraform(struct!.sha256Digest),
      isBlock: true,
      type: "list",
      storageClassType: "DnsZonePrimaryRrSetGroupRrSetCdsRecordValuesSha256DigestList",
    },
    sha384_digest: {
      value: dnsZonePrimaryRrSetGroupRrSetCdsRecordValuesSha384DigestToHclTerraform(struct!.sha384Digest),
      isBlock: true,
      type: "list",
      storageClassType: "DnsZonePrimaryRrSetGroupRrSetCdsRecordValuesSha384DigestList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DnsZonePrimaryRrSetGroupRrSetCdsRecordValuesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DnsZonePrimaryRrSetGroupRrSetCdsRecordValues | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dsKeyAlgorithm !== undefined) {
      hasAnyValues = true;
      internalValueResult.dsKeyAlgorithm = this._dsKeyAlgorithm;
    }
    if (this._keyTag !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyTag = this._keyTag;
    }
    if (this._sha1Digest?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sha1Digest = this._sha1Digest?.internalValue;
    }
    if (this._sha256Digest?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sha256Digest = this._sha256Digest?.internalValue;
    }
    if (this._sha384Digest?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sha384Digest = this._sha384Digest?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DnsZonePrimaryRrSetGroupRrSetCdsRecordValues | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dsKeyAlgorithm = undefined;
      this._keyTag = undefined;
      this._sha1Digest.internalValue = undefined;
      this._sha256Digest.internalValue = undefined;
      this._sha384Digest.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dsKeyAlgorithm = value.dsKeyAlgorithm;
      this._keyTag = value.keyTag;
      this._sha1Digest.internalValue = value.sha1Digest;
      this._sha256Digest.internalValue = value.sha256Digest;
      this._sha384Digest.internalValue = value.sha384Digest;
    }
  }

  // ds_key_algorithm - computed: false, optional: false, required: true
  private _dsKeyAlgorithm?: string; 
  public get dsKeyAlgorithm() {
    return this.getStringAttribute('ds_key_algorithm');
  }
  public set dsKeyAlgorithm(value: string) {
    this._dsKeyAlgorithm = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dsKeyAlgorithmInput() {
    return this._dsKeyAlgorithm;
  }

  // key_tag - computed: false, optional: false, required: true
  private _keyTag?: number; 
  public get keyTag() {
    return this.getNumberAttribute('key_tag');
  }
  public set keyTag(value: number) {
    this._keyTag = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyTagInput() {
    return this._keyTag;
  }

  // sha1_digest - computed: false, optional: true, required: false
  private _sha1Digest = new DnsZonePrimaryRrSetGroupRrSetCdsRecordValuesSha1DigestOutputReference(this, "sha1_digest");
  public get sha1Digest() {
    return this._sha1Digest;
  }
  public putSha1Digest(value: DnsZonePrimaryRrSetGroupRrSetCdsRecordValuesSha1Digest) {
    this._sha1Digest.internalValue = value;
  }
  public resetSha1Digest() {
    this._sha1Digest.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sha1DigestInput() {
    return this._sha1Digest.internalValue;
  }

  // sha256_digest - computed: false, optional: true, required: false
  private _sha256Digest = new DnsZonePrimaryRrSetGroupRrSetCdsRecordValuesSha256DigestOutputReference(this, "sha256_digest");
  public get sha256Digest() {
    return this._sha256Digest;
  }
  public putSha256Digest(value: DnsZonePrimaryRrSetGroupRrSetCdsRecordValuesSha256Digest) {
    this._sha256Digest.internalValue = value;
  }
  public resetSha256Digest() {
    this._sha256Digest.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sha256DigestInput() {
    return this._sha256Digest.internalValue;
  }

  // sha384_digest - computed: false, optional: true, required: false
  private _sha384Digest = new DnsZonePrimaryRrSetGroupRrSetCdsRecordValuesSha384DigestOutputReference(this, "sha384_digest");
  public get sha384Digest() {
    return this._sha384Digest;
  }
  public putSha384Digest(value: DnsZonePrimaryRrSetGroupRrSetCdsRecordValuesSha384Digest) {
    this._sha384Digest.internalValue = value;
  }
  public resetSha384Digest() {
    this._sha384Digest.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sha384DigestInput() {
    return this._sha384Digest.internalValue;
  }
}

export class DnsZonePrimaryRrSetGroupRrSetCdsRecordValuesList extends cdktf.ComplexList {
  public internalValue? : DnsZonePrimaryRrSetGroupRrSetCdsRecordValues[] | cdktf.IResolvable

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
  public get(index: number): DnsZonePrimaryRrSetGroupRrSetCdsRecordValuesOutputReference {
    return new DnsZonePrimaryRrSetGroupRrSetCdsRecordValuesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DnsZonePrimaryRrSetGroupRrSetCdsRecord {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/dns_zone#name DnsZone#name}
  */
  readonly name?: string;
  /**
  * values block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/dns_zone#values DnsZone#values}
  */
  readonly values: DnsZonePrimaryRrSetGroupRrSetCdsRecordValues[] | cdktf.IResolvable;
}

export function dnsZonePrimaryRrSetGroupRrSetCdsRecordToTerraform(struct?: DnsZonePrimaryRrSetGroupRrSetCdsRecordOutputReference | DnsZonePrimaryRrSetGroupRrSetCdsRecord): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    values: cdktf.listMapper(dnsZonePrimaryRrSetGroupRrSetCdsRecordValuesToTerraform, true)(struct!.values),
  }
}


export function dnsZonePrimaryRrSetGroupRrSetCdsRecordToHclTerraform(struct?: DnsZonePrimaryRrSetGroupRrSetCdsRecordOutputReference | DnsZonePrimaryRrSetGroupRrSetCdsRecord): any {
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
    values: {
      value: cdktf.listMapperHcl(dnsZonePrimaryRrSetGroupRrSetCdsRecordValuesToHclTerraform, true)(struct!.values),
      isBlock: true,
      type: "list",
      storageClassType: "DnsZonePrimaryRrSetGroupRrSetCdsRecordValuesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DnsZonePrimaryRrSetGroupRrSetCdsRecordOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DnsZonePrimaryRrSetGroupRrSetCdsRecord | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._values?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DnsZonePrimaryRrSetGroupRrSetCdsRecord | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._values.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._values.internalValue = value.values;
    }
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

  // values - computed: false, optional: false, required: true
  private _values = new DnsZonePrimaryRrSetGroupRrSetCdsRecordValuesList(this, "values", false);
  public get values() {
    return this._values;
  }
  public putValues(value: DnsZonePrimaryRrSetGroupRrSetCdsRecordValues[] | cdktf.IResolvable) {
    this._values.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values.internalValue;
  }
}
export interface DnsZonePrimaryRrSetGroupRrSetCertRecordValues {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/dns_zone#algorithm DnsZone#algorithm}
  */
  readonly algorithm: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/dns_zone#cert_key_tag DnsZone#cert_key_tag}
  */
  readonly certKeyTag: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/dns_zone#cert_type DnsZone#cert_type}
  */
  readonly certType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/dns_zone#certificate DnsZone#certificate}
  */
  readonly certificate: string;
}

export function dnsZonePrimaryRrSetGroupRrSetCertRecordValuesToTerraform(struct?: DnsZonePrimaryRrSetGroupRrSetCertRecordValues | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    algorithm: cdktf.stringToTerraform(struct!.algorithm),
    cert_key_tag: cdktf.numberToTerraform(struct!.certKeyTag),
    cert_type: cdktf.stringToTerraform(struct!.certType),
    certificate: cdktf.stringToTerraform(struct!.certificate),
  }
}


export function dnsZonePrimaryRrSetGroupRrSetCertRecordValuesToHclTerraform(struct?: DnsZonePrimaryRrSetGroupRrSetCertRecordValues | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    algorithm: {
      value: cdktf.stringToHclTerraform(struct!.algorithm),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cert_key_tag: {
      value: cdktf.numberToHclTerraform(struct!.certKeyTag),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cert_type: {
      value: cdktf.stringToHclTerraform(struct!.certType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    certificate: {
      value: cdktf.stringToHclTerraform(struct!.certificate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DnsZonePrimaryRrSetGroupRrSetCertRecordValuesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DnsZonePrimaryRrSetGroupRrSetCertRecordValues | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._algorithm !== undefined) {
      hasAnyValues = true;
      internalValueResult.algorithm = this._algorithm;
    }
    if (this._certKeyTag !== undefined) {
      hasAnyValues = true;
      internalValueResult.certKeyTag = this._certKeyTag;
    }
    if (this._certType !== undefined) {
      hasAnyValues = true;
      internalValueResult.certType = this._certType;
    }
    if (this._certificate !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificate = this._certificate;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DnsZonePrimaryRrSetGroupRrSetCertRecordValues | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._algorithm = undefined;
      this._certKeyTag = undefined;
      this._certType = undefined;
      this._certificate = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._algorithm = value.algorithm;
      this._certKeyTag = value.certKeyTag;
      this._certType = value.certType;
      this._certificate = value.certificate;
    }
  }

  // algorithm - computed: false, optional: false, required: true
  private _algorithm?: string; 
  public get algorithm() {
    return this.getStringAttribute('algorithm');
  }
  public set algorithm(value: string) {
    this._algorithm = value;
  }
  // Temporarily expose input value. Use with caution.
  public get algorithmInput() {
    return this._algorithm;
  }

  // cert_key_tag - computed: false, optional: false, required: true
  private _certKeyTag?: number; 
  public get certKeyTag() {
    return this.getNumberAttribute('cert_key_tag');
  }
  public set certKeyTag(value: number) {
    this._certKeyTag = value;
  }
  // Temporarily expose input value. Use with caution.
  public get certKeyTagInput() {
    return this._certKeyTag;
  }

  // cert_type - computed: false, optional: false, required: true
  private _certType?: string; 
  public get certType() {
    return this.getStringAttribute('cert_type');
  }
  public set certType(value: string) {
    this._certType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get certTypeInput() {
    return this._certType;
  }

  // certificate - computed: false, optional: false, required: true
  private _certificate?: string; 
  public get certificate() {
    return this.getStringAttribute('certificate');
  }
  public set certificate(value: string) {
    this._certificate = value;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateInput() {
    return this._certificate;
  }
}

export class DnsZonePrimaryRrSetGroupRrSetCertRecordValuesList extends cdktf.ComplexList {
  public internalValue? : DnsZonePrimaryRrSetGroupRrSetCertRecordValues[] | cdktf.IResolvable

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
  public get(index: number): DnsZonePrimaryRrSetGroupRrSetCertRecordValuesOutputReference {
    return new DnsZonePrimaryRrSetGroupRrSetCertRecordValuesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DnsZonePrimaryRrSetGroupRrSetCertRecord {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/dns_zone#name DnsZone#name}
  */
  readonly name?: string;
  /**
  * values block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/dns_zone#values DnsZone#values}
  */
  readonly values: DnsZonePrimaryRrSetGroupRrSetCertRecordValues[] | cdktf.IResolvable;
}

export function dnsZonePrimaryRrSetGroupRrSetCertRecordToTerraform(struct?: DnsZonePrimaryRrSetGroupRrSetCertRecordOutputReference | DnsZonePrimaryRrSetGroupRrSetCertRecord): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    values: cdktf.listMapper(dnsZonePrimaryRrSetGroupRrSetCertRecordValuesToTerraform, true)(struct!.values),
  }
}


export function dnsZonePrimaryRrSetGroupRrSetCertRecordToHclTerraform(struct?: DnsZonePrimaryRrSetGroupRrSetCertRecordOutputReference | DnsZonePrimaryRrSetGroupRrSetCertRecord): any {
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
    values: {
      value: cdktf.listMapperHcl(dnsZonePrimaryRrSetGroupRrSetCertRecordValuesToHclTerraform, true)(struct!.values),
      isBlock: true,
      type: "list",
      storageClassType: "DnsZonePrimaryRrSetGroupRrSetCertRecordValuesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DnsZonePrimaryRrSetGroupRrSetCertRecordOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DnsZonePrimaryRrSetGroupRrSetCertRecord | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._values?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DnsZonePrimaryRrSetGroupRrSetCertRecord | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._values.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._values.internalValue = value.values;
    }
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

  // values - computed: false, optional: false, required: true
  private _values = new DnsZonePrimaryRrSetGroupRrSetCertRecordValuesList(this, "values", false);
  public get values() {
    return this._values;
  }
  public putValues(value: DnsZonePrimaryRrSetGroupRrSetCertRecordValues[] | cdktf.IResolvable) {
    this._values.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values.internalValue;
  }
}
export interface DnsZonePrimaryRrSetGroupRrSetCnameRecord {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/dns_zone#name DnsZone#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/dns_zone#value DnsZone#value}
  */
  readonly value?: string;
}

export function dnsZonePrimaryRrSetGroupRrSetCnameRecordToTerraform(struct?: DnsZonePrimaryRrSetGroupRrSetCnameRecordOutputReference | DnsZonePrimaryRrSetGroupRrSetCnameRecord): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dnsZonePrimaryRrSetGroupRrSetCnameRecordToHclTerraform(struct?: DnsZonePrimaryRrSetGroupRrSetCnameRecordOutputReference | DnsZonePrimaryRrSetGroupRrSetCnameRecord): any {
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

export class DnsZonePrimaryRrSetGroupRrSetCnameRecordOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DnsZonePrimaryRrSetGroupRrSetCnameRecord | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DnsZonePrimaryRrSetGroupRrSetCnameRecord | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._value = value.value;
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

  // value - computed: false, optional: true, required: false
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
export interface DnsZonePrimaryRrSetGroupRrSetDlvRecordValuesSha1Digest {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/dns_zone#digest DnsZone#digest}
  */
  readonly digest: string;
}

export function dnsZonePrimaryRrSetGroupRrSetDlvRecordValuesSha1DigestToTerraform(struct?: DnsZonePrimaryRrSetGroupRrSetDlvRecordValuesSha1DigestOutputReference | DnsZonePrimaryRrSetGroupRrSetDlvRecordValuesSha1Digest): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    digest: cdktf.stringToTerraform(struct!.digest),
  }
}


export function dnsZonePrimaryRrSetGroupRrSetDlvRecordValuesSha1DigestToHclTerraform(struct?: DnsZonePrimaryRrSetGroupRrSetDlvRecordValuesSha1DigestOutputReference | DnsZonePrimaryRrSetGroupRrSetDlvRecordValuesSha1Digest): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    digest: {
      value: cdktf.stringToHclTerraform(struct!.digest),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DnsZonePrimaryRrSetGroupRrSetDlvRecordValuesSha1DigestOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DnsZonePrimaryRrSetGroupRrSetDlvRecordValuesSha1Digest | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._digest !== undefined) {
      hasAnyValues = true;
      internalValueResult.digest = this._digest;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DnsZonePrimaryRrSetGroupRrSetDlvRecordValuesSha1Digest | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._digest = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._digest = value.digest;
    }
  }

  // digest - computed: false, optional: false, required: true
  private _digest?: string; 
  public get digest() {
    return this.getStringAttribute('digest');
  }
  public set digest(value: string) {
    this._digest = value;
  }
  // Temporarily expose input value. Use with caution.
  public get digestInput() {
    return this._digest;
  }
}
export interface DnsZonePrimaryRrSetGroupRrSetDlvRecordValuesSha256Digest {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/dns_zone#digest DnsZone#digest}
  */
  readonly digest: string;
}

export function dnsZonePrimaryRrSetGroupRrSetDlvRecordValuesSha256DigestToTerraform(struct?: DnsZonePrimaryRrSetGroupRrSetDlvRecordValuesSha256DigestOutputReference | DnsZonePrimaryRrSetGroupRrSetDlvRecordValuesSha256Digest): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    digest: cdktf.stringToTerraform(struct!.digest),
  }
}


export function dnsZonePrimaryRrSetGroupRrSetDlvRecordValuesSha256DigestToHclTerraform(struct?: DnsZonePrimaryRrSetGroupRrSetDlvRecordValuesSha256DigestOutputReference | DnsZonePrimaryRrSetGroupRrSetDlvRecordValuesSha256Digest): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    digest: {
      value: cdktf.stringToHclTerraform(struct!.digest),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DnsZonePrimaryRrSetGroupRrSetDlvRecordValuesSha256DigestOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DnsZonePrimaryRrSetGroupRrSetDlvRecordValuesSha256Digest | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._digest !== undefined) {
      hasAnyValues = true;
      internalValueResult.digest = this._digest;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DnsZonePrimaryRrSetGroupRrSetDlvRecordValuesSha256Digest | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._digest = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._digest = value.digest;
    }
  }

  // digest - computed: false, optional: false, required: true
  private _digest?: string; 
  public get digest() {
    return this.getStringAttribute('digest');
  }
  public set digest(value: string) {
    this._digest = value;
  }
  // Temporarily expose input value. Use with caution.
  public get digestInput() {
    return this._digest;
  }
}
export interface DnsZonePrimaryRrSetGroupRrSetDlvRecordValuesSha384Digest {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/dns_zone#digest DnsZone#digest}
  */
  readonly digest: string;
}

export function dnsZonePrimaryRrSetGroupRrSetDlvRecordValuesSha384DigestToTerraform(struct?: DnsZonePrimaryRrSetGroupRrSetDlvRecordValuesSha384DigestOutputReference | DnsZonePrimaryRrSetGroupRrSetDlvRecordValuesSha384Digest): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    digest: cdktf.stringToTerraform(struct!.digest),
  }
}


export function dnsZonePrimaryRrSetGroupRrSetDlvRecordValuesSha384DigestToHclTerraform(struct?: DnsZonePrimaryRrSetGroupRrSetDlvRecordValuesSha384DigestOutputReference | DnsZonePrimaryRrSetGroupRrSetDlvRecordValuesSha384Digest): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    digest: {
      value: cdktf.stringToHclTerraform(struct!.digest),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DnsZonePrimaryRrSetGroupRrSetDlvRecordValuesSha384DigestOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DnsZonePrimaryRrSetGroupRrSetDlvRecordValuesSha384Digest | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._digest !== undefined) {
      hasAnyValues = true;
      internalValueResult.digest = this._digest;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DnsZonePrimaryRrSetGroupRrSetDlvRecordValuesSha384Digest | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._digest = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._digest = value.digest;
    }
  }

  // digest - computed: false, optional: false, required: true
  private _digest?: string; 
  public get digest() {
    return this.getStringAttribute('digest');
  }
  public set digest(value: string) {
    this._digest = value;
  }
  // Temporarily expose input value. Use with caution.
  public get digestInput() {
    return this._digest;
  }
}
export interface DnsZonePrimaryRrSetGroupRrSetDlvRecordValues {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/dns_zone#ds_key_algorithm DnsZone#ds_key_algorithm}
  */
  readonly dsKeyAlgorithm: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/dns_zone#key_tag DnsZone#key_tag}
  */
  readonly keyTag: number;
  /**
  * sha1_digest block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/dns_zone#sha1_digest DnsZone#sha1_digest}
  */
  readonly sha1Digest?: DnsZonePrimaryRrSetGroupRrSetDlvRecordValuesSha1Digest;
  /**
  * sha256_digest block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/dns_zone#sha256_digest DnsZone#sha256_digest}
  */
  readonly sha256Digest?: DnsZonePrimaryRrSetGroupRrSetDlvRecordValuesSha256Digest;
  /**
  * sha384_digest block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/dns_zone#sha384_digest DnsZone#sha384_digest}
  */
  readonly sha384Digest?: DnsZonePrimaryRrSetGroupRrSetDlvRecordValuesSha384Digest;
}

export function dnsZonePrimaryRrSetGroupRrSetDlvRecordValuesToTerraform(struct?: DnsZonePrimaryRrSetGroupRrSetDlvRecordValues | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ds_key_algorithm: cdktf.stringToTerraform(struct!.dsKeyAlgorithm),
    key_tag: cdktf.numberToTerraform(struct!.keyTag),
    sha1_digest: dnsZonePrimaryRrSetGroupRrSetDlvRecordValuesSha1DigestToTerraform(struct!.sha1Digest),
    sha256_digest: dnsZonePrimaryRrSetGroupRrSetDlvRecordValuesSha256DigestToTerraform(struct!.sha256Digest),
    sha384_digest: dnsZonePrimaryRrSetGroupRrSetDlvRecordValuesSha384DigestToTerraform(struct!.sha384Digest),
  }
}


export function dnsZonePrimaryRrSetGroupRrSetDlvRecordValuesToHclTerraform(struct?: DnsZonePrimaryRrSetGroupRrSetDlvRecordValues | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ds_key_algorithm: {
      value: cdktf.stringToHclTerraform(struct!.dsKeyAlgorithm),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key_tag: {
      value: cdktf.numberToHclTerraform(struct!.keyTag),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sha1_digest: {
      value: dnsZonePrimaryRrSetGroupRrSetDlvRecordValuesSha1DigestToHclTerraform(struct!.sha1Digest),
      isBlock: true,
      type: "list",
      storageClassType: "DnsZonePrimaryRrSetGroupRrSetDlvRecordValuesSha1DigestList",
    },
    sha256_digest: {
      value: dnsZonePrimaryRrSetGroupRrSetDlvRecordValuesSha256DigestToHclTerraform(struct!.sha256Digest),
      isBlock: true,
      type: "list",
      storageClassType: "DnsZonePrimaryRrSetGroupRrSetDlvRecordValuesSha256DigestList",
    },
    sha384_digest: {
      value: dnsZonePrimaryRrSetGroupRrSetDlvRecordValuesSha384DigestToHclTerraform(struct!.sha384Digest),
      isBlock: true,
      type: "list",
      storageClassType: "DnsZonePrimaryRrSetGroupRrSetDlvRecordValuesSha384DigestList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DnsZonePrimaryRrSetGroupRrSetDlvRecordValuesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DnsZonePrimaryRrSetGroupRrSetDlvRecordValues | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dsKeyAlgorithm !== undefined) {
      hasAnyValues = true;
      internalValueResult.dsKeyAlgorithm = this._dsKeyAlgorithm;
    }
    if (this._keyTag !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyTag = this._keyTag;
    }
    if (this._sha1Digest?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sha1Digest = this._sha1Digest?.internalValue;
    }
    if (this._sha256Digest?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sha256Digest = this._sha256Digest?.internalValue;
    }
    if (this._sha384Digest?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sha384Digest = this._sha384Digest?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DnsZonePrimaryRrSetGroupRrSetDlvRecordValues | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dsKeyAlgorithm = undefined;
      this._keyTag = undefined;
      this._sha1Digest.internalValue = undefined;
      this._sha256Digest.internalValue = undefined;
      this._sha384Digest.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dsKeyAlgorithm = value.dsKeyAlgorithm;
      this._keyTag = value.keyTag;
      this._sha1Digest.internalValue = value.sha1Digest;
      this._sha256Digest.internalValue = value.sha256Digest;
      this._sha384Digest.internalValue = value.sha384Digest;
    }
  }

  // ds_key_algorithm - computed: false, optional: false, required: true
  private _dsKeyAlgorithm?: string; 
  public get dsKeyAlgorithm() {
    return this.getStringAttribute('ds_key_algorithm');
  }
  public set dsKeyAlgorithm(value: string) {
    this._dsKeyAlgorithm = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dsKeyAlgorithmInput() {
    return this._dsKeyAlgorithm;
  }

  // key_tag - computed: false, optional: false, required: true
  private _keyTag?: number; 
  public get keyTag() {
    return this.getNumberAttribute('key_tag');
  }
  public set keyTag(value: number) {
    this._keyTag = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyTagInput() {
    return this._keyTag;
  }

  // sha1_digest - computed: false, optional: true, required: false
  private _sha1Digest = new DnsZonePrimaryRrSetGroupRrSetDlvRecordValuesSha1DigestOutputReference(this, "sha1_digest");
  public get sha1Digest() {
    return this._sha1Digest;
  }
  public putSha1Digest(value: DnsZonePrimaryRrSetGroupRrSetDlvRecordValuesSha1Digest) {
    this._sha1Digest.internalValue = value;
  }
  public resetSha1Digest() {
    this._sha1Digest.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sha1DigestInput() {
    return this._sha1Digest.internalValue;
  }

  // sha256_digest - computed: false, optional: true, required: false
  private _sha256Digest = new DnsZonePrimaryRrSetGroupRrSetDlvRecordValuesSha256DigestOutputReference(this, "sha256_digest");
  public get sha256Digest() {
    return this._sha256Digest;
  }
  public putSha256Digest(value: DnsZonePrimaryRrSetGroupRrSetDlvRecordValuesSha256Digest) {
    this._sha256Digest.internalValue = value;
  }
  public resetSha256Digest() {
    this._sha256Digest.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sha256DigestInput() {
    return this._sha256Digest.internalValue;
  }

  // sha384_digest - computed: false, optional: true, required: false
  private _sha384Digest = new DnsZonePrimaryRrSetGroupRrSetDlvRecordValuesSha384DigestOutputReference(this, "sha384_digest");
  public get sha384Digest() {
    return this._sha384Digest;
  }
  public putSha384Digest(value: DnsZonePrimaryRrSetGroupRrSetDlvRecordValuesSha384Digest) {
    this._sha384Digest.internalValue = value;
  }
  public resetSha384Digest() {
    this._sha384Digest.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sha384DigestInput() {
    return this._sha384Digest.internalValue;
  }
}

export class DnsZonePrimaryRrSetGroupRrSetDlvRecordValuesList extends cdktf.ComplexList {
  public internalValue? : DnsZonePrimaryRrSetGroupRrSetDlvRecordValues[] | cdktf.IResolvable

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
  public get(index: number): DnsZonePrimaryRrSetGroupRrSetDlvRecordValuesOutputReference {
    return new DnsZonePrimaryRrSetGroupRrSetDlvRecordValuesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DnsZonePrimaryRrSetGroupRrSetDlvRecord {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/dns_zone#name DnsZone#name}
  */
  readonly name?: string;
  /**
  * values block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/dns_zone#values DnsZone#values}
  */
  readonly values: DnsZonePrimaryRrSetGroupRrSetDlvRecordValues[] | cdktf.IResolvable;
}

export function dnsZonePrimaryRrSetGroupRrSetDlvRecordToTerraform(struct?: DnsZonePrimaryRrSetGroupRrSetDlvRecordOutputReference | DnsZonePrimaryRrSetGroupRrSetDlvRecord): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    values: cdktf.listMapper(dnsZonePrimaryRrSetGroupRrSetDlvRecordValuesToTerraform, true)(struct!.values),
  }
}


export function dnsZonePrimaryRrSetGroupRrSetDlvRecordToHclTerraform(struct?: DnsZonePrimaryRrSetGroupRrSetDlvRecordOutputReference | DnsZonePrimaryRrSetGroupRrSetDlvRecord): any {
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
    values: {
      value: cdktf.listMapperHcl(dnsZonePrimaryRrSetGroupRrSetDlvRecordValuesToHclTerraform, true)(struct!.values),
      isBlock: true,
      type: "list",
      storageClassType: "DnsZonePrimaryRrSetGroupRrSetDlvRecordValuesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DnsZonePrimaryRrSetGroupRrSetDlvRecordOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DnsZonePrimaryRrSetGroupRrSetDlvRecord | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._values?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DnsZonePrimaryRrSetGroupRrSetDlvRecord | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._values.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._values.internalValue = value.values;
    }
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

  // values - computed: false, optional: false, required: true
  private _values = new DnsZonePrimaryRrSetGroupRrSetDlvRecordValuesList(this, "values", false);
  public get values() {
    return this._values;
  }
  public putValues(value: DnsZonePrimaryRrSetGroupRrSetDlvRecordValues[] | cdktf.IResolvable) {
    this._values.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values.internalValue;
  }
}
export interface DnsZonePrimaryRrSetGroupRrSetDsRecordValuesSha1Digest {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/dns_zone#digest DnsZone#digest}
  */
  readonly digest: string;
}

export function dnsZonePrimaryRrSetGroupRrSetDsRecordValuesSha1DigestToTerraform(struct?: DnsZonePrimaryRrSetGroupRrSetDsRecordValuesSha1DigestOutputReference | DnsZonePrimaryRrSetGroupRrSetDsRecordValuesSha1Digest): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    digest: cdktf.stringToTerraform(struct!.digest),
  }
}


export function dnsZonePrimaryRrSetGroupRrSetDsRecordValuesSha1DigestToHclTerraform(struct?: DnsZonePrimaryRrSetGroupRrSetDsRecordValuesSha1DigestOutputReference | DnsZonePrimaryRrSetGroupRrSetDsRecordValuesSha1Digest): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    digest: {
      value: cdktf.stringToHclTerraform(struct!.digest),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DnsZonePrimaryRrSetGroupRrSetDsRecordValuesSha1DigestOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DnsZonePrimaryRrSetGroupRrSetDsRecordValuesSha1Digest | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._digest !== undefined) {
      hasAnyValues = true;
      internalValueResult.digest = this._digest;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DnsZonePrimaryRrSetGroupRrSetDsRecordValuesSha1Digest | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._digest = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._digest = value.digest;
    }
  }

  // digest - computed: false, optional: false, required: true
  private _digest?: string; 
  public get digest() {
    return this.getStringAttribute('digest');
  }
  public set digest(value: string) {
    this._digest = value;
  }
  // Temporarily expose input value. Use with caution.
  public get digestInput() {
    return this._digest;
  }
}
export interface DnsZonePrimaryRrSetGroupRrSetDsRecordValuesSha256Digest {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/dns_zone#digest DnsZone#digest}
  */
  readonly digest: string;
}

export function dnsZonePrimaryRrSetGroupRrSetDsRecordValuesSha256DigestToTerraform(struct?: DnsZonePrimaryRrSetGroupRrSetDsRecordValuesSha256DigestOutputReference | DnsZonePrimaryRrSetGroupRrSetDsRecordValuesSha256Digest): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    digest: cdktf.stringToTerraform(struct!.digest),
  }
}


export function dnsZonePrimaryRrSetGroupRrSetDsRecordValuesSha256DigestToHclTerraform(struct?: DnsZonePrimaryRrSetGroupRrSetDsRecordValuesSha256DigestOutputReference | DnsZonePrimaryRrSetGroupRrSetDsRecordValuesSha256Digest): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    digest: {
      value: cdktf.stringToHclTerraform(struct!.digest),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DnsZonePrimaryRrSetGroupRrSetDsRecordValuesSha256DigestOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DnsZonePrimaryRrSetGroupRrSetDsRecordValuesSha256Digest | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._digest !== undefined) {
      hasAnyValues = true;
      internalValueResult.digest = this._digest;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DnsZonePrimaryRrSetGroupRrSetDsRecordValuesSha256Digest | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._digest = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._digest = value.digest;
    }
  }

  // digest - computed: false, optional: false, required: true
  private _digest?: string; 
  public get digest() {
    return this.getStringAttribute('digest');
  }
  public set digest(value: string) {
    this._digest = value;
  }
  // Temporarily expose input value. Use with caution.
  public get digestInput() {
    return this._digest;
  }
}
export interface DnsZonePrimaryRrSetGroupRrSetDsRecordValuesSha384Digest {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/dns_zone#digest DnsZone#digest}
  */
  readonly digest: string;
}

export function dnsZonePrimaryRrSetGroupRrSetDsRecordValuesSha384DigestToTerraform(struct?: DnsZonePrimaryRrSetGroupRrSetDsRecordValuesSha384DigestOutputReference | DnsZonePrimaryRrSetGroupRrSetDsRecordValuesSha384Digest): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    digest: cdktf.stringToTerraform(struct!.digest),
  }
}


export function dnsZonePrimaryRrSetGroupRrSetDsRecordValuesSha384DigestToHclTerraform(struct?: DnsZonePrimaryRrSetGroupRrSetDsRecordValuesSha384DigestOutputReference | DnsZonePrimaryRrSetGroupRrSetDsRecordValuesSha384Digest): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    digest: {
      value: cdktf.stringToHclTerraform(struct!.digest),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DnsZonePrimaryRrSetGroupRrSetDsRecordValuesSha384DigestOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DnsZonePrimaryRrSetGroupRrSetDsRecordValuesSha384Digest | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._digest !== undefined) {
      hasAnyValues = true;
      internalValueResult.digest = this._digest;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DnsZonePrimaryRrSetGroupRrSetDsRecordValuesSha384Digest | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._digest = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._digest = value.digest;
    }
  }

  // digest - computed: false, optional: false, required: true
  private _digest?: string; 
  public get digest() {
    return this.getStringAttribute('digest');
  }
  public set digest(value: string) {
    this._digest = value;
  }
  // Temporarily expose input value. Use with caution.
  public get digestInput() {
    return this._digest;
  }
}
export interface DnsZonePrimaryRrSetGroupRrSetDsRecordValues {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/dns_zone#ds_key_algorithm DnsZone#ds_key_algorithm}
  */
  readonly dsKeyAlgorithm: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/dns_zone#key_tag DnsZone#key_tag}
  */
  readonly keyTag: number;
  /**
  * sha1_digest block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/dns_zone#sha1_digest DnsZone#sha1_digest}
  */
  readonly sha1Digest?: DnsZonePrimaryRrSetGroupRrSetDsRecordValuesSha1Digest;
  /**
  * sha256_digest block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/dns_zone#sha256_digest DnsZone#sha256_digest}
  */
  readonly sha256Digest?: DnsZonePrimaryRrSetGroupRrSetDsRecordValuesSha256Digest;
  /**
  * sha384_digest block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/dns_zone#sha384_digest DnsZone#sha384_digest}
  */
  readonly sha384Digest?: DnsZonePrimaryRrSetGroupRrSetDsRecordValuesSha384Digest;
}

export function dnsZonePrimaryRrSetGroupRrSetDsRecordValuesToTerraform(struct?: DnsZonePrimaryRrSetGroupRrSetDsRecordValues | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ds_key_algorithm: cdktf.stringToTerraform(struct!.dsKeyAlgorithm),
    key_tag: cdktf.numberToTerraform(struct!.keyTag),
    sha1_digest: dnsZonePrimaryRrSetGroupRrSetDsRecordValuesSha1DigestToTerraform(struct!.sha1Digest),
    sha256_digest: dnsZonePrimaryRrSetGroupRrSetDsRecordValuesSha256DigestToTerraform(struct!.sha256Digest),
    sha384_digest: dnsZonePrimaryRrSetGroupRrSetDsRecordValuesSha384DigestToTerraform(struct!.sha384Digest),
  }
}


export function dnsZonePrimaryRrSetGroupRrSetDsRecordValuesToHclTerraform(struct?: DnsZonePrimaryRrSetGroupRrSetDsRecordValues | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ds_key_algorithm: {
      value: cdktf.stringToHclTerraform(struct!.dsKeyAlgorithm),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key_tag: {
      value: cdktf.numberToHclTerraform(struct!.keyTag),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sha1_digest: {
      value: dnsZonePrimaryRrSetGroupRrSetDsRecordValuesSha1DigestToHclTerraform(struct!.sha1Digest),
      isBlock: true,
      type: "list",
      storageClassType: "DnsZonePrimaryRrSetGroupRrSetDsRecordValuesSha1DigestList",
    },
    sha256_digest: {
      value: dnsZonePrimaryRrSetGroupRrSetDsRecordValuesSha256DigestToHclTerraform(struct!.sha256Digest),
      isBlock: true,
      type: "list",
      storageClassType: "DnsZonePrimaryRrSetGroupRrSetDsRecordValuesSha256DigestList",
    },
    sha384_digest: {
      value: dnsZonePrimaryRrSetGroupRrSetDsRecordValuesSha384DigestToHclTerraform(struct!.sha384Digest),
      isBlock: true,
      type: "list",
      storageClassType: "DnsZonePrimaryRrSetGroupRrSetDsRecordValuesSha384DigestList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DnsZonePrimaryRrSetGroupRrSetDsRecordValuesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DnsZonePrimaryRrSetGroupRrSetDsRecordValues | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dsKeyAlgorithm !== undefined) {
      hasAnyValues = true;
      internalValueResult.dsKeyAlgorithm = this._dsKeyAlgorithm;
    }
    if (this._keyTag !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyTag = this._keyTag;
    }
    if (this._sha1Digest?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sha1Digest = this._sha1Digest?.internalValue;
    }
    if (this._sha256Digest?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sha256Digest = this._sha256Digest?.internalValue;
    }
    if (this._sha384Digest?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sha384Digest = this._sha384Digest?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DnsZonePrimaryRrSetGroupRrSetDsRecordValues | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dsKeyAlgorithm = undefined;
      this._keyTag = undefined;
      this._sha1Digest.internalValue = undefined;
      this._sha256Digest.internalValue = undefined;
      this._sha384Digest.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dsKeyAlgorithm = value.dsKeyAlgorithm;
      this._keyTag = value.keyTag;
      this._sha1Digest.internalValue = value.sha1Digest;
      this._sha256Digest.internalValue = value.sha256Digest;
      this._sha384Digest.internalValue = value.sha384Digest;
    }
  }

  // ds_key_algorithm - computed: false, optional: false, required: true
  private _dsKeyAlgorithm?: string; 
  public get dsKeyAlgorithm() {
    return this.getStringAttribute('ds_key_algorithm');
  }
  public set dsKeyAlgorithm(value: string) {
    this._dsKeyAlgorithm = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dsKeyAlgorithmInput() {
    return this._dsKeyAlgorithm;
  }

  // key_tag - computed: false, optional: false, required: true
  private _keyTag?: number; 
  public get keyTag() {
    return this.getNumberAttribute('key_tag');
  }
  public set keyTag(value: number) {
    this._keyTag = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyTagInput() {
    return this._keyTag;
  }

  // sha1_digest - computed: false, optional: true, required: false
  private _sha1Digest = new DnsZonePrimaryRrSetGroupRrSetDsRecordValuesSha1DigestOutputReference(this, "sha1_digest");
  public get sha1Digest() {
    return this._sha1Digest;
  }
  public putSha1Digest(value: DnsZonePrimaryRrSetGroupRrSetDsRecordValuesSha1Digest) {
    this._sha1Digest.internalValue = value;
  }
  public resetSha1Digest() {
    this._sha1Digest.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sha1DigestInput() {
    return this._sha1Digest.internalValue;
  }

  // sha256_digest - computed: false, optional: true, required: false
  private _sha256Digest = new DnsZonePrimaryRrSetGroupRrSetDsRecordValuesSha256DigestOutputReference(this, "sha256_digest");
  public get sha256Digest() {
    return this._sha256Digest;
  }
  public putSha256Digest(value: DnsZonePrimaryRrSetGroupRrSetDsRecordValuesSha256Digest) {
    this._sha256Digest.internalValue = value;
  }
  public resetSha256Digest() {
    this._sha256Digest.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sha256DigestInput() {
    return this._sha256Digest.internalValue;
  }

  // sha384_digest - computed: false, optional: true, required: false
  private _sha384Digest = new DnsZonePrimaryRrSetGroupRrSetDsRecordValuesSha384DigestOutputReference(this, "sha384_digest");
  public get sha384Digest() {
    return this._sha384Digest;
  }
  public putSha384Digest(value: DnsZonePrimaryRrSetGroupRrSetDsRecordValuesSha384Digest) {
    this._sha384Digest.internalValue = value;
  }
  public resetSha384Digest() {
    this._sha384Digest.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sha384DigestInput() {
    return this._sha384Digest.internalValue;
  }
}

export class DnsZonePrimaryRrSetGroupRrSetDsRecordValuesList extends cdktf.ComplexList {
  public internalValue? : DnsZonePrimaryRrSetGroupRrSetDsRecordValues[] | cdktf.IResolvable

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
  public get(index: number): DnsZonePrimaryRrSetGroupRrSetDsRecordValuesOutputReference {
    return new DnsZonePrimaryRrSetGroupRrSetDsRecordValuesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DnsZonePrimaryRrSetGroupRrSetDsRecord {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/dns_zone#name DnsZone#name}
  */
  readonly name?: string;
  /**
  * values block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/dns_zone#values DnsZone#values}
  */
  readonly values: DnsZonePrimaryRrSetGroupRrSetDsRecordValues[] | cdktf.IResolvable;
}

export function dnsZonePrimaryRrSetGroupRrSetDsRecordToTerraform(struct?: DnsZonePrimaryRrSetGroupRrSetDsRecordOutputReference | DnsZonePrimaryRrSetGroupRrSetDsRecord): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    values: cdktf.listMapper(dnsZonePrimaryRrSetGroupRrSetDsRecordValuesToTerraform, true)(struct!.values),
  }
}


export function dnsZonePrimaryRrSetGroupRrSetDsRecordToHclTerraform(struct?: DnsZonePrimaryRrSetGroupRrSetDsRecordOutputReference | DnsZonePrimaryRrSetGroupRrSetDsRecord): any {
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
    values: {
      value: cdktf.listMapperHcl(dnsZonePrimaryRrSetGroupRrSetDsRecordValuesToHclTerraform, true)(struct!.values),
      isBlock: true,
      type: "list",
      storageClassType: "DnsZonePrimaryRrSetGroupRrSetDsRecordValuesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DnsZonePrimaryRrSetGroupRrSetDsRecordOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DnsZonePrimaryRrSetGroupRrSetDsRecord | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._values?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DnsZonePrimaryRrSetGroupRrSetDsRecord | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._values.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._values.internalValue = value.values;
    }
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

  // values - computed: false, optional: false, required: true
  private _values = new DnsZonePrimaryRrSetGroupRrSetDsRecordValuesList(this, "values", false);
  public get values() {
    return this._values;
  }
  public putValues(value: DnsZonePrimaryRrSetGroupRrSetDsRecordValues[] | cdktf.IResolvable) {
    this._values.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values.internalValue;
  }
}
export interface DnsZonePrimaryRrSetGroupRrSetEui48Record {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/dns_zone#name DnsZone#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/dns_zone#value DnsZone#value}
  */
  readonly value: string;
}

export function dnsZonePrimaryRrSetGroupRrSetEui48RecordToTerraform(struct?: DnsZonePrimaryRrSetGroupRrSetEui48RecordOutputReference | DnsZonePrimaryRrSetGroupRrSetEui48Record): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dnsZonePrimaryRrSetGroupRrSetEui48RecordToHclTerraform(struct?: DnsZonePrimaryRrSetGroupRrSetEui48RecordOutputReference | DnsZonePrimaryRrSetGroupRrSetEui48Record): any {
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

export class DnsZonePrimaryRrSetGroupRrSetEui48RecordOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DnsZonePrimaryRrSetGroupRrSetEui48Record | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DnsZonePrimaryRrSetGroupRrSetEui48Record | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._value = value.value;
    }
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

  // value - computed: false, optional: false, required: true
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
export interface DnsZonePrimaryRrSetGroupRrSetEui64Record {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/dns_zone#name DnsZone#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/dns_zone#value DnsZone#value}
  */
  readonly value: string;
}

export function dnsZonePrimaryRrSetGroupRrSetEui64RecordToTerraform(struct?: DnsZonePrimaryRrSetGroupRrSetEui64RecordOutputReference | DnsZonePrimaryRrSetGroupRrSetEui64Record): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dnsZonePrimaryRrSetGroupRrSetEui64RecordToHclTerraform(struct?: DnsZonePrimaryRrSetGroupRrSetEui64RecordOutputReference | DnsZonePrimaryRrSetGroupRrSetEui64Record): any {
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

export class DnsZonePrimaryRrSetGroupRrSetEui64RecordOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DnsZonePrimaryRrSetGroupRrSetEui64Record | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DnsZonePrimaryRrSetGroupRrSetEui64Record | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._value = value.value;
    }
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

  // value - computed: false, optional: false, required: true
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
export interface DnsZonePrimaryRrSetGroupRrSetLbRecordValue {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/dns_zone#name DnsZone#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/dns_zone#namespace DnsZone#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/dns_zone#tenant DnsZone#tenant}
  */
  readonly tenant?: string;
}

export function dnsZonePrimaryRrSetGroupRrSetLbRecordValueToTerraform(struct?: DnsZonePrimaryRrSetGroupRrSetLbRecordValueOutputReference | DnsZonePrimaryRrSetGroupRrSetLbRecordValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    tenant: cdktf.stringToTerraform(struct!.tenant),
  }
}


export function dnsZonePrimaryRrSetGroupRrSetLbRecordValueToHclTerraform(struct?: DnsZonePrimaryRrSetGroupRrSetLbRecordValueOutputReference | DnsZonePrimaryRrSetGroupRrSetLbRecordValue): any {
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
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tenant: {
      value: cdktf.stringToHclTerraform(struct!.tenant),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DnsZonePrimaryRrSetGroupRrSetLbRecordValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DnsZonePrimaryRrSetGroupRrSetLbRecordValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._tenant !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenant = this._tenant;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DnsZonePrimaryRrSetGroupRrSetLbRecordValue | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._namespace = undefined;
      this._tenant = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._namespace = value.namespace;
      this._tenant = value.tenant;
    }
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

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // tenant - computed: false, optional: true, required: false
  private _tenant?: string; 
  public get tenant() {
    return this.getStringAttribute('tenant');
  }
  public set tenant(value: string) {
    this._tenant = value;
  }
  public resetTenant() {
    this._tenant = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantInput() {
    return this._tenant;
  }
}
export interface DnsZonePrimaryRrSetGroupRrSetLbRecord {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/dns_zone#name DnsZone#name}
  */
  readonly name?: string;
  /**
  * value block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/dns_zone#value DnsZone#value}
  */
  readonly value?: DnsZonePrimaryRrSetGroupRrSetLbRecordValue;
}

export function dnsZonePrimaryRrSetGroupRrSetLbRecordToTerraform(struct?: DnsZonePrimaryRrSetGroupRrSetLbRecordOutputReference | DnsZonePrimaryRrSetGroupRrSetLbRecord): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: dnsZonePrimaryRrSetGroupRrSetLbRecordValueToTerraform(struct!.value),
  }
}


export function dnsZonePrimaryRrSetGroupRrSetLbRecordToHclTerraform(struct?: DnsZonePrimaryRrSetGroupRrSetLbRecordOutputReference | DnsZonePrimaryRrSetGroupRrSetLbRecord): any {
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
    value: {
      value: dnsZonePrimaryRrSetGroupRrSetLbRecordValueToHclTerraform(struct!.value),
      isBlock: true,
      type: "list",
      storageClassType: "DnsZonePrimaryRrSetGroupRrSetLbRecordValueList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DnsZonePrimaryRrSetGroupRrSetLbRecordOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DnsZonePrimaryRrSetGroupRrSetLbRecord | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DnsZonePrimaryRrSetGroupRrSetLbRecord | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._value.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._value.internalValue = value.value;
    }
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

  // value - computed: false, optional: true, required: false
  private _value = new DnsZonePrimaryRrSetGroupRrSetLbRecordValueOutputReference(this, "value");
  public get value() {
    return this._value;
  }
  public putValue(value: DnsZonePrimaryRrSetGroupRrSetLbRecordValue) {
    this._value.internalValue = value;
  }
  public resetValue() {
    this._value.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value.internalValue;
  }
}
export interface DnsZonePrimaryRrSetGroupRrSetLocRecordValues {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/dns_zone#altitude DnsZone#altitude}
  */
  readonly altitude: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/dns_zone#horizontal_precision DnsZone#horizontal_precision}
  */
  readonly horizontalPrecision?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/dns_zone#latitude_degree DnsZone#latitude_degree}
  */
  readonly latitudeDegree: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/dns_zone#latitude_hemisphere DnsZone#latitude_hemisphere}
  */
  readonly latitudeHemisphere: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/dns_zone#latitude_minute DnsZone#latitude_minute}
  */
  readonly latitudeMinute?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/dns_zone#latitude_second DnsZone#latitude_second}
  */
  readonly latitudeSecond?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/dns_zone#location_diameter DnsZone#location_diameter}
  */
  readonly locationDiameter?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/dns_zone#longitude_degree DnsZone#longitude_degree}
  */
  readonly longitudeDegree: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/dns_zone#longitude_hemisphere DnsZone#longitude_hemisphere}
  */
  readonly longitudeHemisphere: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/dns_zone#longitude_minute DnsZone#longitude_minute}
  */
  readonly longitudeMinute?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/dns_zone#longitude_second DnsZone#longitude_second}
  */
  readonly longitudeSecond?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/dns_zone#vertical_precision DnsZone#vertical_precision}
  */
  readonly verticalPrecision?: number;
}

export function dnsZonePrimaryRrSetGroupRrSetLocRecordValuesToTerraform(struct?: DnsZonePrimaryRrSetGroupRrSetLocRecordValues | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    altitude: cdktf.numberToTerraform(struct!.altitude),
    horizontal_precision: cdktf.numberToTerraform(struct!.horizontalPrecision),
    latitude_degree: cdktf.numberToTerraform(struct!.latitudeDegree),
    latitude_hemisphere: cdktf.stringToTerraform(struct!.latitudeHemisphere),
    latitude_minute: cdktf.numberToTerraform(struct!.latitudeMinute),
    latitude_second: cdktf.numberToTerraform(struct!.latitudeSecond),
    location_diameter: cdktf.numberToTerraform(struct!.locationDiameter),
    longitude_degree: cdktf.numberToTerraform(struct!.longitudeDegree),
    longitude_hemisphere: cdktf.stringToTerraform(struct!.longitudeHemisphere),
    longitude_minute: cdktf.numberToTerraform(struct!.longitudeMinute),
    longitude_second: cdktf.numberToTerraform(struct!.longitudeSecond),
    vertical_precision: cdktf.numberToTerraform(struct!.verticalPrecision),
  }
}


export function dnsZonePrimaryRrSetGroupRrSetLocRecordValuesToHclTerraform(struct?: DnsZonePrimaryRrSetGroupRrSetLocRecordValues | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    altitude: {
      value: cdktf.numberToHclTerraform(struct!.altitude),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    horizontal_precision: {
      value: cdktf.numberToHclTerraform(struct!.horizontalPrecision),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    latitude_degree: {
      value: cdktf.numberToHclTerraform(struct!.latitudeDegree),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    latitude_hemisphere: {
      value: cdktf.stringToHclTerraform(struct!.latitudeHemisphere),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    latitude_minute: {
      value: cdktf.numberToHclTerraform(struct!.latitudeMinute),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    latitude_second: {
      value: cdktf.numberToHclTerraform(struct!.latitudeSecond),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    location_diameter: {
      value: cdktf.numberToHclTerraform(struct!.locationDiameter),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    longitude_degree: {
      value: cdktf.numberToHclTerraform(struct!.longitudeDegree),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    longitude_hemisphere: {
      value: cdktf.stringToHclTerraform(struct!.longitudeHemisphere),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    longitude_minute: {
      value: cdktf.numberToHclTerraform(struct!.longitudeMinute),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    longitude_second: {
      value: cdktf.numberToHclTerraform(struct!.longitudeSecond),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    vertical_precision: {
      value: cdktf.numberToHclTerraform(struct!.verticalPrecision),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DnsZonePrimaryRrSetGroupRrSetLocRecordValuesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DnsZonePrimaryRrSetGroupRrSetLocRecordValues | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._altitude !== undefined) {
      hasAnyValues = true;
      internalValueResult.altitude = this._altitude;
    }
    if (this._horizontalPrecision !== undefined) {
      hasAnyValues = true;
      internalValueResult.horizontalPrecision = this._horizontalPrecision;
    }
    if (this._latitudeDegree !== undefined) {
      hasAnyValues = true;
      internalValueResult.latitudeDegree = this._latitudeDegree;
    }
    if (this._latitudeHemisphere !== undefined) {
      hasAnyValues = true;
      internalValueResult.latitudeHemisphere = this._latitudeHemisphere;
    }
    if (this._latitudeMinute !== undefined) {
      hasAnyValues = true;
      internalValueResult.latitudeMinute = this._latitudeMinute;
    }
    if (this._latitudeSecond !== undefined) {
      hasAnyValues = true;
      internalValueResult.latitudeSecond = this._latitudeSecond;
    }
    if (this._locationDiameter !== undefined) {
      hasAnyValues = true;
      internalValueResult.locationDiameter = this._locationDiameter;
    }
    if (this._longitudeDegree !== undefined) {
      hasAnyValues = true;
      internalValueResult.longitudeDegree = this._longitudeDegree;
    }
    if (this._longitudeHemisphere !== undefined) {
      hasAnyValues = true;
      internalValueResult.longitudeHemisphere = this._longitudeHemisphere;
    }
    if (this._longitudeMinute !== undefined) {
      hasAnyValues = true;
      internalValueResult.longitudeMinute = this._longitudeMinute;
    }
    if (this._longitudeSecond !== undefined) {
      hasAnyValues = true;
      internalValueResult.longitudeSecond = this._longitudeSecond;
    }
    if (this._verticalPrecision !== undefined) {
      hasAnyValues = true;
      internalValueResult.verticalPrecision = this._verticalPrecision;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DnsZonePrimaryRrSetGroupRrSetLocRecordValues | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._altitude = undefined;
      this._horizontalPrecision = undefined;
      this._latitudeDegree = undefined;
      this._latitudeHemisphere = undefined;
      this._latitudeMinute = undefined;
      this._latitudeSecond = undefined;
      this._locationDiameter = undefined;
      this._longitudeDegree = undefined;
      this._longitudeHemisphere = undefined;
      this._longitudeMinute = undefined;
      this._longitudeSecond = undefined;
      this._verticalPrecision = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._altitude = value.altitude;
      this._horizontalPrecision = value.horizontalPrecision;
      this._latitudeDegree = value.latitudeDegree;
      this._latitudeHemisphere = value.latitudeHemisphere;
      this._latitudeMinute = value.latitudeMinute;
      this._latitudeSecond = value.latitudeSecond;
      this._locationDiameter = value.locationDiameter;
      this._longitudeDegree = value.longitudeDegree;
      this._longitudeHemisphere = value.longitudeHemisphere;
      this._longitudeMinute = value.longitudeMinute;
      this._longitudeSecond = value.longitudeSecond;
      this._verticalPrecision = value.verticalPrecision;
    }
  }

  // altitude - computed: false, optional: false, required: true
  private _altitude?: number; 
  public get altitude() {
    return this.getNumberAttribute('altitude');
  }
  public set altitude(value: number) {
    this._altitude = value;
  }
  // Temporarily expose input value. Use with caution.
  public get altitudeInput() {
    return this._altitude;
  }

  // horizontal_precision - computed: false, optional: true, required: false
  private _horizontalPrecision?: number; 
  public get horizontalPrecision() {
    return this.getNumberAttribute('horizontal_precision');
  }
  public set horizontalPrecision(value: number) {
    this._horizontalPrecision = value;
  }
  public resetHorizontalPrecision() {
    this._horizontalPrecision = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get horizontalPrecisionInput() {
    return this._horizontalPrecision;
  }

  // latitude_degree - computed: false, optional: false, required: true
  private _latitudeDegree?: number; 
  public get latitudeDegree() {
    return this.getNumberAttribute('latitude_degree');
  }
  public set latitudeDegree(value: number) {
    this._latitudeDegree = value;
  }
  // Temporarily expose input value. Use with caution.
  public get latitudeDegreeInput() {
    return this._latitudeDegree;
  }

  // latitude_hemisphere - computed: false, optional: false, required: true
  private _latitudeHemisphere?: string; 
  public get latitudeHemisphere() {
    return this.getStringAttribute('latitude_hemisphere');
  }
  public set latitudeHemisphere(value: string) {
    this._latitudeHemisphere = value;
  }
  // Temporarily expose input value. Use with caution.
  public get latitudeHemisphereInput() {
    return this._latitudeHemisphere;
  }

  // latitude_minute - computed: false, optional: true, required: false
  private _latitudeMinute?: number; 
  public get latitudeMinute() {
    return this.getNumberAttribute('latitude_minute');
  }
  public set latitudeMinute(value: number) {
    this._latitudeMinute = value;
  }
  public resetLatitudeMinute() {
    this._latitudeMinute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get latitudeMinuteInput() {
    return this._latitudeMinute;
  }

  // latitude_second - computed: false, optional: true, required: false
  private _latitudeSecond?: number; 
  public get latitudeSecond() {
    return this.getNumberAttribute('latitude_second');
  }
  public set latitudeSecond(value: number) {
    this._latitudeSecond = value;
  }
  public resetLatitudeSecond() {
    this._latitudeSecond = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get latitudeSecondInput() {
    return this._latitudeSecond;
  }

  // location_diameter - computed: false, optional: true, required: false
  private _locationDiameter?: number; 
  public get locationDiameter() {
    return this.getNumberAttribute('location_diameter');
  }
  public set locationDiameter(value: number) {
    this._locationDiameter = value;
  }
  public resetLocationDiameter() {
    this._locationDiameter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locationDiameterInput() {
    return this._locationDiameter;
  }

  // longitude_degree - computed: false, optional: false, required: true
  private _longitudeDegree?: number; 
  public get longitudeDegree() {
    return this.getNumberAttribute('longitude_degree');
  }
  public set longitudeDegree(value: number) {
    this._longitudeDegree = value;
  }
  // Temporarily expose input value. Use with caution.
  public get longitudeDegreeInput() {
    return this._longitudeDegree;
  }

  // longitude_hemisphere - computed: false, optional: false, required: true
  private _longitudeHemisphere?: string; 
  public get longitudeHemisphere() {
    return this.getStringAttribute('longitude_hemisphere');
  }
  public set longitudeHemisphere(value: string) {
    this._longitudeHemisphere = value;
  }
  // Temporarily expose input value. Use with caution.
  public get longitudeHemisphereInput() {
    return this._longitudeHemisphere;
  }

  // longitude_minute - computed: false, optional: true, required: false
  private _longitudeMinute?: number; 
  public get longitudeMinute() {
    return this.getNumberAttribute('longitude_minute');
  }
  public set longitudeMinute(value: number) {
    this._longitudeMinute = value;
  }
  public resetLongitudeMinute() {
    this._longitudeMinute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get longitudeMinuteInput() {
    return this._longitudeMinute;
  }

  // longitude_second - computed: false, optional: true, required: false
  private _longitudeSecond?: number; 
  public get longitudeSecond() {
    return this.getNumberAttribute('longitude_second');
  }
  public set longitudeSecond(value: number) {
    this._longitudeSecond = value;
  }
  public resetLongitudeSecond() {
    this._longitudeSecond = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get longitudeSecondInput() {
    return this._longitudeSecond;
  }

  // vertical_precision - computed: false, optional: true, required: false
  private _verticalPrecision?: number; 
  public get verticalPrecision() {
    return this.getNumberAttribute('vertical_precision');
  }
  public set verticalPrecision(value: number) {
    this._verticalPrecision = value;
  }
  public resetVerticalPrecision() {
    this._verticalPrecision = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get verticalPrecisionInput() {
    return this._verticalPrecision;
  }
}

export class DnsZonePrimaryRrSetGroupRrSetLocRecordValuesList extends cdktf.ComplexList {
  public internalValue? : DnsZonePrimaryRrSetGroupRrSetLocRecordValues[] | cdktf.IResolvable

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
  public get(index: number): DnsZonePrimaryRrSetGroupRrSetLocRecordValuesOutputReference {
    return new DnsZonePrimaryRrSetGroupRrSetLocRecordValuesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DnsZonePrimaryRrSetGroupRrSetLocRecord {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/dns_zone#name DnsZone#name}
  */
  readonly name?: string;
  /**
  * values block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/dns_zone#values DnsZone#values}
  */
  readonly values: DnsZonePrimaryRrSetGroupRrSetLocRecordValues[] | cdktf.IResolvable;
}

export function dnsZonePrimaryRrSetGroupRrSetLocRecordToTerraform(struct?: DnsZonePrimaryRrSetGroupRrSetLocRecordOutputReference | DnsZonePrimaryRrSetGroupRrSetLocRecord): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    values: cdktf.listMapper(dnsZonePrimaryRrSetGroupRrSetLocRecordValuesToTerraform, true)(struct!.values),
  }
}


export function dnsZonePrimaryRrSetGroupRrSetLocRecordToHclTerraform(struct?: DnsZonePrimaryRrSetGroupRrSetLocRecordOutputReference | DnsZonePrimaryRrSetGroupRrSetLocRecord): any {
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
    values: {
      value: cdktf.listMapperHcl(dnsZonePrimaryRrSetGroupRrSetLocRecordValuesToHclTerraform, true)(struct!.values),
      isBlock: true,
      type: "list",
      storageClassType: "DnsZonePrimaryRrSetGroupRrSetLocRecordValuesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DnsZonePrimaryRrSetGroupRrSetLocRecordOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DnsZonePrimaryRrSetGroupRrSetLocRecord | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._values?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DnsZonePrimaryRrSetGroupRrSetLocRecord | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._values.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._values.internalValue = value.values;
    }
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

  // values - computed: false, optional: false, required: true
  private _values = new DnsZonePrimaryRrSetGroupRrSetLocRecordValuesList(this, "values", false);
  public get values() {
    return this._values;
  }
  public putValues(value: DnsZonePrimaryRrSetGroupRrSetLocRecordValues[] | cdktf.IResolvable) {
    this._values.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values.internalValue;
  }
}
export interface DnsZonePrimaryRrSetGroupRrSetMxRecordValues {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/dns_zone#domain DnsZone#domain}
  */
  readonly domain?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/dns_zone#priority DnsZone#priority}
  */
  readonly priority?: number;
}

export function dnsZonePrimaryRrSetGroupRrSetMxRecordValuesToTerraform(struct?: DnsZonePrimaryRrSetGroupRrSetMxRecordValues | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    domain: cdktf.stringToTerraform(struct!.domain),
    priority: cdktf.numberToTerraform(struct!.priority),
  }
}


export function dnsZonePrimaryRrSetGroupRrSetMxRecordValuesToHclTerraform(struct?: DnsZonePrimaryRrSetGroupRrSetMxRecordValues | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    domain: {
      value: cdktf.stringToHclTerraform(struct!.domain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    priority: {
      value: cdktf.numberToHclTerraform(struct!.priority),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DnsZonePrimaryRrSetGroupRrSetMxRecordValuesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DnsZonePrimaryRrSetGroupRrSetMxRecordValues | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._domain !== undefined) {
      hasAnyValues = true;
      internalValueResult.domain = this._domain;
    }
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DnsZonePrimaryRrSetGroupRrSetMxRecordValues | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._domain = undefined;
      this._priority = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._domain = value.domain;
      this._priority = value.priority;
    }
  }

  // domain - computed: false, optional: true, required: false
  private _domain?: string; 
  public get domain() {
    return this.getStringAttribute('domain');
  }
  public set domain(value: string) {
    this._domain = value;
  }
  public resetDomain() {
    this._domain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainInput() {
    return this._domain;
  }

  // priority - computed: false, optional: true, required: false
  private _priority?: number; 
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number) {
    this._priority = value;
  }
  public resetPriority() {
    this._priority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }
}

export class DnsZonePrimaryRrSetGroupRrSetMxRecordValuesList extends cdktf.ComplexList {
  public internalValue? : DnsZonePrimaryRrSetGroupRrSetMxRecordValues[] | cdktf.IResolvable

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
  public get(index: number): DnsZonePrimaryRrSetGroupRrSetMxRecordValuesOutputReference {
    return new DnsZonePrimaryRrSetGroupRrSetMxRecordValuesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DnsZonePrimaryRrSetGroupRrSetMxRecord {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/dns_zone#name DnsZone#name}
  */
  readonly name?: string;
  /**
  * values block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/dns_zone#values DnsZone#values}
  */
  readonly values: DnsZonePrimaryRrSetGroupRrSetMxRecordValues[] | cdktf.IResolvable;
}

export function dnsZonePrimaryRrSetGroupRrSetMxRecordToTerraform(struct?: DnsZonePrimaryRrSetGroupRrSetMxRecordOutputReference | DnsZonePrimaryRrSetGroupRrSetMxRecord): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    values: cdktf.listMapper(dnsZonePrimaryRrSetGroupRrSetMxRecordValuesToTerraform, true)(struct!.values),
  }
}


export function dnsZonePrimaryRrSetGroupRrSetMxRecordToHclTerraform(struct?: DnsZonePrimaryRrSetGroupRrSetMxRecordOutputReference | DnsZonePrimaryRrSetGroupRrSetMxRecord): any {
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
    values: {
      value: cdktf.listMapperHcl(dnsZonePrimaryRrSetGroupRrSetMxRecordValuesToHclTerraform, true)(struct!.values),
      isBlock: true,
      type: "list",
      storageClassType: "DnsZonePrimaryRrSetGroupRrSetMxRecordValuesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DnsZonePrimaryRrSetGroupRrSetMxRecordOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DnsZonePrimaryRrSetGroupRrSetMxRecord | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._values?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DnsZonePrimaryRrSetGroupRrSetMxRecord | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._values.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._values.internalValue = value.values;
    }
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

  // values - computed: false, optional: false, required: true
  private _values = new DnsZonePrimaryRrSetGroupRrSetMxRecordValuesList(this, "values", false);
  public get values() {
    return this._values;
  }
  public putValues(value: DnsZonePrimaryRrSetGroupRrSetMxRecordValues[] | cdktf.IResolvable) {
    this._values.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values.internalValue;
  }
}
export interface DnsZonePrimaryRrSetGroupRrSetNaptrRecordValues {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/dns_zone#flags DnsZone#flags}
  */
  readonly flags: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/dns_zone#order DnsZone#order}
  */
  readonly order: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/dns_zone#preference DnsZone#preference}
  */
  readonly preference: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/dns_zone#regexp DnsZone#regexp}
  */
  readonly regexp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/dns_zone#replacement DnsZone#replacement}
  */
  readonly replacement?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/dns_zone#service DnsZone#service}
  */
  readonly service?: string;
}

export function dnsZonePrimaryRrSetGroupRrSetNaptrRecordValuesToTerraform(struct?: DnsZonePrimaryRrSetGroupRrSetNaptrRecordValues | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    flags: cdktf.stringToTerraform(struct!.flags),
    order: cdktf.numberToTerraform(struct!.order),
    preference: cdktf.numberToTerraform(struct!.preference),
    regexp: cdktf.stringToTerraform(struct!.regexp),
    replacement: cdktf.stringToTerraform(struct!.replacement),
    service: cdktf.stringToTerraform(struct!.service),
  }
}


export function dnsZonePrimaryRrSetGroupRrSetNaptrRecordValuesToHclTerraform(struct?: DnsZonePrimaryRrSetGroupRrSetNaptrRecordValues | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    flags: {
      value: cdktf.stringToHclTerraform(struct!.flags),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    order: {
      value: cdktf.numberToHclTerraform(struct!.order),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    preference: {
      value: cdktf.numberToHclTerraform(struct!.preference),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    regexp: {
      value: cdktf.stringToHclTerraform(struct!.regexp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    replacement: {
      value: cdktf.stringToHclTerraform(struct!.replacement),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service: {
      value: cdktf.stringToHclTerraform(struct!.service),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DnsZonePrimaryRrSetGroupRrSetNaptrRecordValuesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DnsZonePrimaryRrSetGroupRrSetNaptrRecordValues | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._flags !== undefined) {
      hasAnyValues = true;
      internalValueResult.flags = this._flags;
    }
    if (this._order !== undefined) {
      hasAnyValues = true;
      internalValueResult.order = this._order;
    }
    if (this._preference !== undefined) {
      hasAnyValues = true;
      internalValueResult.preference = this._preference;
    }
    if (this._regexp !== undefined) {
      hasAnyValues = true;
      internalValueResult.regexp = this._regexp;
    }
    if (this._replacement !== undefined) {
      hasAnyValues = true;
      internalValueResult.replacement = this._replacement;
    }
    if (this._service !== undefined) {
      hasAnyValues = true;
      internalValueResult.service = this._service;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DnsZonePrimaryRrSetGroupRrSetNaptrRecordValues | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._flags = undefined;
      this._order = undefined;
      this._preference = undefined;
      this._regexp = undefined;
      this._replacement = undefined;
      this._service = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._flags = value.flags;
      this._order = value.order;
      this._preference = value.preference;
      this._regexp = value.regexp;
      this._replacement = value.replacement;
      this._service = value.service;
    }
  }

  // flags - computed: false, optional: false, required: true
  private _flags?: string; 
  public get flags() {
    return this.getStringAttribute('flags');
  }
  public set flags(value: string) {
    this._flags = value;
  }
  // Temporarily expose input value. Use with caution.
  public get flagsInput() {
    return this._flags;
  }

  // order - computed: false, optional: false, required: true
  private _order?: number; 
  public get order() {
    return this.getNumberAttribute('order');
  }
  public set order(value: number) {
    this._order = value;
  }
  // Temporarily expose input value. Use with caution.
  public get orderInput() {
    return this._order;
  }

  // preference - computed: false, optional: false, required: true
  private _preference?: number; 
  public get preference() {
    return this.getNumberAttribute('preference');
  }
  public set preference(value: number) {
    this._preference = value;
  }
  // Temporarily expose input value. Use with caution.
  public get preferenceInput() {
    return this._preference;
  }

  // regexp - computed: false, optional: true, required: false
  private _regexp?: string; 
  public get regexp() {
    return this.getStringAttribute('regexp');
  }
  public set regexp(value: string) {
    this._regexp = value;
  }
  public resetRegexp() {
    this._regexp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexpInput() {
    return this._regexp;
  }

  // replacement - computed: false, optional: true, required: false
  private _replacement?: string; 
  public get replacement() {
    return this.getStringAttribute('replacement');
  }
  public set replacement(value: string) {
    this._replacement = value;
  }
  public resetReplacement() {
    this._replacement = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replacementInput() {
    return this._replacement;
  }

  // service - computed: false, optional: true, required: false
  private _service?: string; 
  public get service() {
    return this.getStringAttribute('service');
  }
  public set service(value: string) {
    this._service = value;
  }
  public resetService() {
    this._service = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceInput() {
    return this._service;
  }
}

export class DnsZonePrimaryRrSetGroupRrSetNaptrRecordValuesList extends cdktf.ComplexList {
  public internalValue? : DnsZonePrimaryRrSetGroupRrSetNaptrRecordValues[] | cdktf.IResolvable

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
  public get(index: number): DnsZonePrimaryRrSetGroupRrSetNaptrRecordValuesOutputReference {
    return new DnsZonePrimaryRrSetGroupRrSetNaptrRecordValuesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DnsZonePrimaryRrSetGroupRrSetNaptrRecord {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/dns_zone#name DnsZone#name}
  */
  readonly name?: string;
  /**
  * values block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/dns_zone#values DnsZone#values}
  */
  readonly values: DnsZonePrimaryRrSetGroupRrSetNaptrRecordValues[] | cdktf.IResolvable;
}

export function dnsZonePrimaryRrSetGroupRrSetNaptrRecordToTerraform(struct?: DnsZonePrimaryRrSetGroupRrSetNaptrRecordOutputReference | DnsZonePrimaryRrSetGroupRrSetNaptrRecord): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    values: cdktf.listMapper(dnsZonePrimaryRrSetGroupRrSetNaptrRecordValuesToTerraform, true)(struct!.values),
  }
}


export function dnsZonePrimaryRrSetGroupRrSetNaptrRecordToHclTerraform(struct?: DnsZonePrimaryRrSetGroupRrSetNaptrRecordOutputReference | DnsZonePrimaryRrSetGroupRrSetNaptrRecord): any {
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
    values: {
      value: cdktf.listMapperHcl(dnsZonePrimaryRrSetGroupRrSetNaptrRecordValuesToHclTerraform, true)(struct!.values),
      isBlock: true,
      type: "list",
      storageClassType: "DnsZonePrimaryRrSetGroupRrSetNaptrRecordValuesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DnsZonePrimaryRrSetGroupRrSetNaptrRecordOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DnsZonePrimaryRrSetGroupRrSetNaptrRecord | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._values?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DnsZonePrimaryRrSetGroupRrSetNaptrRecord | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._values.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._values.internalValue = value.values;
    }
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

  // values - computed: false, optional: false, required: true
  private _values = new DnsZonePrimaryRrSetGroupRrSetNaptrRecordValuesList(this, "values", false);
  public get values() {
    return this._values;
  }
  public putValues(value: DnsZonePrimaryRrSetGroupRrSetNaptrRecordValues[] | cdktf.IResolvable) {
    this._values.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values.internalValue;
  }
}
export interface DnsZonePrimaryRrSetGroupRrSetNsRecord {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/dns_zone#name DnsZone#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/dns_zone#values DnsZone#values}
  */
  readonly values: string[];
}

export function dnsZonePrimaryRrSetGroupRrSetNsRecordToTerraform(struct?: DnsZonePrimaryRrSetGroupRrSetNsRecordOutputReference | DnsZonePrimaryRrSetGroupRrSetNsRecord): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function dnsZonePrimaryRrSetGroupRrSetNsRecordToHclTerraform(struct?: DnsZonePrimaryRrSetGroupRrSetNsRecordOutputReference | DnsZonePrimaryRrSetGroupRrSetNsRecord): any {
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
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DnsZonePrimaryRrSetGroupRrSetNsRecordOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DnsZonePrimaryRrSetGroupRrSetNsRecord | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DnsZonePrimaryRrSetGroupRrSetNsRecord | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._values = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._values = value.values;
    }
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

  // values - computed: false, optional: false, required: true
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}
export interface DnsZonePrimaryRrSetGroupRrSetPtrRecord {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/dns_zone#name DnsZone#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/dns_zone#values DnsZone#values}
  */
  readonly values: string[];
}

export function dnsZonePrimaryRrSetGroupRrSetPtrRecordToTerraform(struct?: DnsZonePrimaryRrSetGroupRrSetPtrRecordOutputReference | DnsZonePrimaryRrSetGroupRrSetPtrRecord): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function dnsZonePrimaryRrSetGroupRrSetPtrRecordToHclTerraform(struct?: DnsZonePrimaryRrSetGroupRrSetPtrRecordOutputReference | DnsZonePrimaryRrSetGroupRrSetPtrRecord): any {
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
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DnsZonePrimaryRrSetGroupRrSetPtrRecordOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DnsZonePrimaryRrSetGroupRrSetPtrRecord | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DnsZonePrimaryRrSetGroupRrSetPtrRecord | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._values = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._values = value.values;
    }
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

  // values - computed: false, optional: false, required: true
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}
export interface DnsZonePrimaryRrSetGroupRrSetSrvRecordValues {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/dns_zone#port DnsZone#port}
  */
  readonly port?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/dns_zone#priority DnsZone#priority}
  */
  readonly priority?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/dns_zone#target DnsZone#target}
  */
  readonly target?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/dns_zone#weight DnsZone#weight}
  */
  readonly weight?: number;
}

export function dnsZonePrimaryRrSetGroupRrSetSrvRecordValuesToTerraform(struct?: DnsZonePrimaryRrSetGroupRrSetSrvRecordValues | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    port: cdktf.numberToTerraform(struct!.port),
    priority: cdktf.numberToTerraform(struct!.priority),
    target: cdktf.stringToTerraform(struct!.target),
    weight: cdktf.numberToTerraform(struct!.weight),
  }
}


export function dnsZonePrimaryRrSetGroupRrSetSrvRecordValuesToHclTerraform(struct?: DnsZonePrimaryRrSetGroupRrSetSrvRecordValues | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    priority: {
      value: cdktf.numberToHclTerraform(struct!.priority),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    target: {
      value: cdktf.stringToHclTerraform(struct!.target),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    weight: {
      value: cdktf.numberToHclTerraform(struct!.weight),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DnsZonePrimaryRrSetGroupRrSetSrvRecordValuesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DnsZonePrimaryRrSetGroupRrSetSrvRecordValues | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    if (this._target !== undefined) {
      hasAnyValues = true;
      internalValueResult.target = this._target;
    }
    if (this._weight !== undefined) {
      hasAnyValues = true;
      internalValueResult.weight = this._weight;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DnsZonePrimaryRrSetGroupRrSetSrvRecordValues | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._port = undefined;
      this._priority = undefined;
      this._target = undefined;
      this._weight = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._port = value.port;
      this._priority = value.priority;
      this._target = value.target;
      this._weight = value.weight;
    }
  }

  // port - computed: false, optional: true, required: false
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

  // priority - computed: false, optional: true, required: false
  private _priority?: number; 
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number) {
    this._priority = value;
  }
  public resetPriority() {
    this._priority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }

  // target - computed: false, optional: true, required: false
  private _target?: string; 
  public get target() {
    return this.getStringAttribute('target');
  }
  public set target(value: string) {
    this._target = value;
  }
  public resetTarget() {
    this._target = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target;
  }

  // weight - computed: false, optional: true, required: false
  private _weight?: number; 
  public get weight() {
    return this.getNumberAttribute('weight');
  }
  public set weight(value: number) {
    this._weight = value;
  }
  public resetWeight() {
    this._weight = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weightInput() {
    return this._weight;
  }
}

export class DnsZonePrimaryRrSetGroupRrSetSrvRecordValuesList extends cdktf.ComplexList {
  public internalValue? : DnsZonePrimaryRrSetGroupRrSetSrvRecordValues[] | cdktf.IResolvable

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
  public get(index: number): DnsZonePrimaryRrSetGroupRrSetSrvRecordValuesOutputReference {
    return new DnsZonePrimaryRrSetGroupRrSetSrvRecordValuesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DnsZonePrimaryRrSetGroupRrSetSrvRecord {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/dns_zone#name DnsZone#name}
  */
  readonly name: string;
  /**
  * values block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/dns_zone#values DnsZone#values}
  */
  readonly values: DnsZonePrimaryRrSetGroupRrSetSrvRecordValues[] | cdktf.IResolvable;
}

export function dnsZonePrimaryRrSetGroupRrSetSrvRecordToTerraform(struct?: DnsZonePrimaryRrSetGroupRrSetSrvRecordOutputReference | DnsZonePrimaryRrSetGroupRrSetSrvRecord): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    values: cdktf.listMapper(dnsZonePrimaryRrSetGroupRrSetSrvRecordValuesToTerraform, true)(struct!.values),
  }
}


export function dnsZonePrimaryRrSetGroupRrSetSrvRecordToHclTerraform(struct?: DnsZonePrimaryRrSetGroupRrSetSrvRecordOutputReference | DnsZonePrimaryRrSetGroupRrSetSrvRecord): any {
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
    values: {
      value: cdktf.listMapperHcl(dnsZonePrimaryRrSetGroupRrSetSrvRecordValuesToHclTerraform, true)(struct!.values),
      isBlock: true,
      type: "list",
      storageClassType: "DnsZonePrimaryRrSetGroupRrSetSrvRecordValuesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DnsZonePrimaryRrSetGroupRrSetSrvRecordOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DnsZonePrimaryRrSetGroupRrSetSrvRecord | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._values?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DnsZonePrimaryRrSetGroupRrSetSrvRecord | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._values.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._values.internalValue = value.values;
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

  // values - computed: false, optional: false, required: true
  private _values = new DnsZonePrimaryRrSetGroupRrSetSrvRecordValuesList(this, "values", false);
  public get values() {
    return this._values;
  }
  public putValues(value: DnsZonePrimaryRrSetGroupRrSetSrvRecordValues[] | cdktf.IResolvable) {
    this._values.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values.internalValue;
  }
}
export interface DnsZonePrimaryRrSetGroupRrSetSshfpRecordValuesSha1Fingerprint {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/dns_zone#fingerprint DnsZone#fingerprint}
  */
  readonly fingerprint: string;
}

export function dnsZonePrimaryRrSetGroupRrSetSshfpRecordValuesSha1FingerprintToTerraform(struct?: DnsZonePrimaryRrSetGroupRrSetSshfpRecordValuesSha1FingerprintOutputReference | DnsZonePrimaryRrSetGroupRrSetSshfpRecordValuesSha1Fingerprint): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fingerprint: cdktf.stringToTerraform(struct!.fingerprint),
  }
}


export function dnsZonePrimaryRrSetGroupRrSetSshfpRecordValuesSha1FingerprintToHclTerraform(struct?: DnsZonePrimaryRrSetGroupRrSetSshfpRecordValuesSha1FingerprintOutputReference | DnsZonePrimaryRrSetGroupRrSetSshfpRecordValuesSha1Fingerprint): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    fingerprint: {
      value: cdktf.stringToHclTerraform(struct!.fingerprint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DnsZonePrimaryRrSetGroupRrSetSshfpRecordValuesSha1FingerprintOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DnsZonePrimaryRrSetGroupRrSetSshfpRecordValuesSha1Fingerprint | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fingerprint !== undefined) {
      hasAnyValues = true;
      internalValueResult.fingerprint = this._fingerprint;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DnsZonePrimaryRrSetGroupRrSetSshfpRecordValuesSha1Fingerprint | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._fingerprint = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._fingerprint = value.fingerprint;
    }
  }

  // fingerprint - computed: false, optional: false, required: true
  private _fingerprint?: string; 
  public get fingerprint() {
    return this.getStringAttribute('fingerprint');
  }
  public set fingerprint(value: string) {
    this._fingerprint = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fingerprintInput() {
    return this._fingerprint;
  }
}
export interface DnsZonePrimaryRrSetGroupRrSetSshfpRecordValuesSha256Fingerprint {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/dns_zone#fingerprint DnsZone#fingerprint}
  */
  readonly fingerprint: string;
}

export function dnsZonePrimaryRrSetGroupRrSetSshfpRecordValuesSha256FingerprintToTerraform(struct?: DnsZonePrimaryRrSetGroupRrSetSshfpRecordValuesSha256FingerprintOutputReference | DnsZonePrimaryRrSetGroupRrSetSshfpRecordValuesSha256Fingerprint): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fingerprint: cdktf.stringToTerraform(struct!.fingerprint),
  }
}


export function dnsZonePrimaryRrSetGroupRrSetSshfpRecordValuesSha256FingerprintToHclTerraform(struct?: DnsZonePrimaryRrSetGroupRrSetSshfpRecordValuesSha256FingerprintOutputReference | DnsZonePrimaryRrSetGroupRrSetSshfpRecordValuesSha256Fingerprint): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    fingerprint: {
      value: cdktf.stringToHclTerraform(struct!.fingerprint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DnsZonePrimaryRrSetGroupRrSetSshfpRecordValuesSha256FingerprintOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DnsZonePrimaryRrSetGroupRrSetSshfpRecordValuesSha256Fingerprint | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fingerprint !== undefined) {
      hasAnyValues = true;
      internalValueResult.fingerprint = this._fingerprint;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DnsZonePrimaryRrSetGroupRrSetSshfpRecordValuesSha256Fingerprint | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._fingerprint = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._fingerprint = value.fingerprint;
    }
  }

  // fingerprint - computed: false, optional: false, required: true
  private _fingerprint?: string; 
  public get fingerprint() {
    return this.getStringAttribute('fingerprint');
  }
  public set fingerprint(value: string) {
    this._fingerprint = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fingerprintInput() {
    return this._fingerprint;
  }
}
export interface DnsZonePrimaryRrSetGroupRrSetSshfpRecordValues {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/dns_zone#algorithm DnsZone#algorithm}
  */
  readonly algorithm: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/dns_zone#fingerprint DnsZone#fingerprint}
  */
  readonly fingerprint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/dns_zone#fingerprinttype DnsZone#fingerprinttype}
  */
  readonly fingerprinttype: string;
  /**
  * sha1_fingerprint block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/dns_zone#sha1_fingerprint DnsZone#sha1_fingerprint}
  */
  readonly sha1Fingerprint?: DnsZonePrimaryRrSetGroupRrSetSshfpRecordValuesSha1Fingerprint;
  /**
  * sha256_fingerprint block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/dns_zone#sha256_fingerprint DnsZone#sha256_fingerprint}
  */
  readonly sha256Fingerprint?: DnsZonePrimaryRrSetGroupRrSetSshfpRecordValuesSha256Fingerprint;
}

export function dnsZonePrimaryRrSetGroupRrSetSshfpRecordValuesToTerraform(struct?: DnsZonePrimaryRrSetGroupRrSetSshfpRecordValues | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    algorithm: cdktf.stringToTerraform(struct!.algorithm),
    fingerprint: cdktf.stringToTerraform(struct!.fingerprint),
    fingerprinttype: cdktf.stringToTerraform(struct!.fingerprinttype),
    sha1_fingerprint: dnsZonePrimaryRrSetGroupRrSetSshfpRecordValuesSha1FingerprintToTerraform(struct!.sha1Fingerprint),
    sha256_fingerprint: dnsZonePrimaryRrSetGroupRrSetSshfpRecordValuesSha256FingerprintToTerraform(struct!.sha256Fingerprint),
  }
}


export function dnsZonePrimaryRrSetGroupRrSetSshfpRecordValuesToHclTerraform(struct?: DnsZonePrimaryRrSetGroupRrSetSshfpRecordValues | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    algorithm: {
      value: cdktf.stringToHclTerraform(struct!.algorithm),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fingerprint: {
      value: cdktf.stringToHclTerraform(struct!.fingerprint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fingerprinttype: {
      value: cdktf.stringToHclTerraform(struct!.fingerprinttype),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sha1_fingerprint: {
      value: dnsZonePrimaryRrSetGroupRrSetSshfpRecordValuesSha1FingerprintToHclTerraform(struct!.sha1Fingerprint),
      isBlock: true,
      type: "list",
      storageClassType: "DnsZonePrimaryRrSetGroupRrSetSshfpRecordValuesSha1FingerprintList",
    },
    sha256_fingerprint: {
      value: dnsZonePrimaryRrSetGroupRrSetSshfpRecordValuesSha256FingerprintToHclTerraform(struct!.sha256Fingerprint),
      isBlock: true,
      type: "list",
      storageClassType: "DnsZonePrimaryRrSetGroupRrSetSshfpRecordValuesSha256FingerprintList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DnsZonePrimaryRrSetGroupRrSetSshfpRecordValuesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DnsZonePrimaryRrSetGroupRrSetSshfpRecordValues | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._algorithm !== undefined) {
      hasAnyValues = true;
      internalValueResult.algorithm = this._algorithm;
    }
    if (this._fingerprint !== undefined) {
      hasAnyValues = true;
      internalValueResult.fingerprint = this._fingerprint;
    }
    if (this._fingerprinttype !== undefined) {
      hasAnyValues = true;
      internalValueResult.fingerprinttype = this._fingerprinttype;
    }
    if (this._sha1Fingerprint?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sha1Fingerprint = this._sha1Fingerprint?.internalValue;
    }
    if (this._sha256Fingerprint?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sha256Fingerprint = this._sha256Fingerprint?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DnsZonePrimaryRrSetGroupRrSetSshfpRecordValues | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._algorithm = undefined;
      this._fingerprint = undefined;
      this._fingerprinttype = undefined;
      this._sha1Fingerprint.internalValue = undefined;
      this._sha256Fingerprint.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._algorithm = value.algorithm;
      this._fingerprint = value.fingerprint;
      this._fingerprinttype = value.fingerprinttype;
      this._sha1Fingerprint.internalValue = value.sha1Fingerprint;
      this._sha256Fingerprint.internalValue = value.sha256Fingerprint;
    }
  }

  // algorithm - computed: false, optional: false, required: true
  private _algorithm?: string; 
  public get algorithm() {
    return this.getStringAttribute('algorithm');
  }
  public set algorithm(value: string) {
    this._algorithm = value;
  }
  // Temporarily expose input value. Use with caution.
  public get algorithmInput() {
    return this._algorithm;
  }

  // fingerprint - computed: false, optional: true, required: false
  private _fingerprint?: string; 
  public get fingerprint() {
    return this.getStringAttribute('fingerprint');
  }
  public set fingerprint(value: string) {
    this._fingerprint = value;
  }
  public resetFingerprint() {
    this._fingerprint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fingerprintInput() {
    return this._fingerprint;
  }

  // fingerprinttype - computed: false, optional: false, required: true
  private _fingerprinttype?: string; 
  public get fingerprinttype() {
    return this.getStringAttribute('fingerprinttype');
  }
  public set fingerprinttype(value: string) {
    this._fingerprinttype = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fingerprinttypeInput() {
    return this._fingerprinttype;
  }

  // sha1_fingerprint - computed: false, optional: true, required: false
  private _sha1Fingerprint = new DnsZonePrimaryRrSetGroupRrSetSshfpRecordValuesSha1FingerprintOutputReference(this, "sha1_fingerprint");
  public get sha1Fingerprint() {
    return this._sha1Fingerprint;
  }
  public putSha1Fingerprint(value: DnsZonePrimaryRrSetGroupRrSetSshfpRecordValuesSha1Fingerprint) {
    this._sha1Fingerprint.internalValue = value;
  }
  public resetSha1Fingerprint() {
    this._sha1Fingerprint.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sha1FingerprintInput() {
    return this._sha1Fingerprint.internalValue;
  }

  // sha256_fingerprint - computed: false, optional: true, required: false
  private _sha256Fingerprint = new DnsZonePrimaryRrSetGroupRrSetSshfpRecordValuesSha256FingerprintOutputReference(this, "sha256_fingerprint");
  public get sha256Fingerprint() {
    return this._sha256Fingerprint;
  }
  public putSha256Fingerprint(value: DnsZonePrimaryRrSetGroupRrSetSshfpRecordValuesSha256Fingerprint) {
    this._sha256Fingerprint.internalValue = value;
  }
  public resetSha256Fingerprint() {
    this._sha256Fingerprint.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sha256FingerprintInput() {
    return this._sha256Fingerprint.internalValue;
  }
}

export class DnsZonePrimaryRrSetGroupRrSetSshfpRecordValuesList extends cdktf.ComplexList {
  public internalValue? : DnsZonePrimaryRrSetGroupRrSetSshfpRecordValues[] | cdktf.IResolvable

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
  public get(index: number): DnsZonePrimaryRrSetGroupRrSetSshfpRecordValuesOutputReference {
    return new DnsZonePrimaryRrSetGroupRrSetSshfpRecordValuesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DnsZonePrimaryRrSetGroupRrSetSshfpRecord {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/dns_zone#name DnsZone#name}
  */
  readonly name?: string;
  /**
  * values block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/dns_zone#values DnsZone#values}
  */
  readonly values: DnsZonePrimaryRrSetGroupRrSetSshfpRecordValues[] | cdktf.IResolvable;
}

export function dnsZonePrimaryRrSetGroupRrSetSshfpRecordToTerraform(struct?: DnsZonePrimaryRrSetGroupRrSetSshfpRecordOutputReference | DnsZonePrimaryRrSetGroupRrSetSshfpRecord): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    values: cdktf.listMapper(dnsZonePrimaryRrSetGroupRrSetSshfpRecordValuesToTerraform, true)(struct!.values),
  }
}


export function dnsZonePrimaryRrSetGroupRrSetSshfpRecordToHclTerraform(struct?: DnsZonePrimaryRrSetGroupRrSetSshfpRecordOutputReference | DnsZonePrimaryRrSetGroupRrSetSshfpRecord): any {
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
    values: {
      value: cdktf.listMapperHcl(dnsZonePrimaryRrSetGroupRrSetSshfpRecordValuesToHclTerraform, true)(struct!.values),
      isBlock: true,
      type: "list",
      storageClassType: "DnsZonePrimaryRrSetGroupRrSetSshfpRecordValuesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DnsZonePrimaryRrSetGroupRrSetSshfpRecordOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DnsZonePrimaryRrSetGroupRrSetSshfpRecord | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._values?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DnsZonePrimaryRrSetGroupRrSetSshfpRecord | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._values.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._values.internalValue = value.values;
    }
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

  // values - computed: false, optional: false, required: true
  private _values = new DnsZonePrimaryRrSetGroupRrSetSshfpRecordValuesList(this, "values", false);
  public get values() {
    return this._values;
  }
  public putValues(value: DnsZonePrimaryRrSetGroupRrSetSshfpRecordValues[] | cdktf.IResolvable) {
    this._values.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values.internalValue;
  }
}
export interface DnsZonePrimaryRrSetGroupRrSetTlsaRecordValues {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/dns_zone#certificate_association_data DnsZone#certificate_association_data}
  */
  readonly certificateAssociationData: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/dns_zone#certificate_usage DnsZone#certificate_usage}
  */
  readonly certificateUsage: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/dns_zone#matching_type DnsZone#matching_type}
  */
  readonly matchingType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/dns_zone#selector DnsZone#selector}
  */
  readonly selector: string;
}

export function dnsZonePrimaryRrSetGroupRrSetTlsaRecordValuesToTerraform(struct?: DnsZonePrimaryRrSetGroupRrSetTlsaRecordValues | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    certificate_association_data: cdktf.stringToTerraform(struct!.certificateAssociationData),
    certificate_usage: cdktf.stringToTerraform(struct!.certificateUsage),
    matching_type: cdktf.stringToTerraform(struct!.matchingType),
    selector: cdktf.stringToTerraform(struct!.selector),
  }
}


export function dnsZonePrimaryRrSetGroupRrSetTlsaRecordValuesToHclTerraform(struct?: DnsZonePrimaryRrSetGroupRrSetTlsaRecordValues | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    certificate_association_data: {
      value: cdktf.stringToHclTerraform(struct!.certificateAssociationData),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    certificate_usage: {
      value: cdktf.stringToHclTerraform(struct!.certificateUsage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    matching_type: {
      value: cdktf.stringToHclTerraform(struct!.matchingType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    selector: {
      value: cdktf.stringToHclTerraform(struct!.selector),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DnsZonePrimaryRrSetGroupRrSetTlsaRecordValuesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DnsZonePrimaryRrSetGroupRrSetTlsaRecordValues | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._certificateAssociationData !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificateAssociationData = this._certificateAssociationData;
    }
    if (this._certificateUsage !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificateUsage = this._certificateUsage;
    }
    if (this._matchingType !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchingType = this._matchingType;
    }
    if (this._selector !== undefined) {
      hasAnyValues = true;
      internalValueResult.selector = this._selector;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DnsZonePrimaryRrSetGroupRrSetTlsaRecordValues | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._certificateAssociationData = undefined;
      this._certificateUsage = undefined;
      this._matchingType = undefined;
      this._selector = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._certificateAssociationData = value.certificateAssociationData;
      this._certificateUsage = value.certificateUsage;
      this._matchingType = value.matchingType;
      this._selector = value.selector;
    }
  }

  // certificate_association_data - computed: false, optional: false, required: true
  private _certificateAssociationData?: string; 
  public get certificateAssociationData() {
    return this.getStringAttribute('certificate_association_data');
  }
  public set certificateAssociationData(value: string) {
    this._certificateAssociationData = value;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateAssociationDataInput() {
    return this._certificateAssociationData;
  }

  // certificate_usage - computed: false, optional: false, required: true
  private _certificateUsage?: string; 
  public get certificateUsage() {
    return this.getStringAttribute('certificate_usage');
  }
  public set certificateUsage(value: string) {
    this._certificateUsage = value;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateUsageInput() {
    return this._certificateUsage;
  }

  // matching_type - computed: false, optional: false, required: true
  private _matchingType?: string; 
  public get matchingType() {
    return this.getStringAttribute('matching_type');
  }
  public set matchingType(value: string) {
    this._matchingType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get matchingTypeInput() {
    return this._matchingType;
  }

  // selector - computed: false, optional: false, required: true
  private _selector?: string; 
  public get selector() {
    return this.getStringAttribute('selector');
  }
  public set selector(value: string) {
    this._selector = value;
  }
  // Temporarily expose input value. Use with caution.
  public get selectorInput() {
    return this._selector;
  }
}

export class DnsZonePrimaryRrSetGroupRrSetTlsaRecordValuesList extends cdktf.ComplexList {
  public internalValue? : DnsZonePrimaryRrSetGroupRrSetTlsaRecordValues[] | cdktf.IResolvable

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
  public get(index: number): DnsZonePrimaryRrSetGroupRrSetTlsaRecordValuesOutputReference {
    return new DnsZonePrimaryRrSetGroupRrSetTlsaRecordValuesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DnsZonePrimaryRrSetGroupRrSetTlsaRecord {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/dns_zone#name DnsZone#name}
  */
  readonly name?: string;
  /**
  * values block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/dns_zone#values DnsZone#values}
  */
  readonly values: DnsZonePrimaryRrSetGroupRrSetTlsaRecordValues[] | cdktf.IResolvable;
}

export function dnsZonePrimaryRrSetGroupRrSetTlsaRecordToTerraform(struct?: DnsZonePrimaryRrSetGroupRrSetTlsaRecordOutputReference | DnsZonePrimaryRrSetGroupRrSetTlsaRecord): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    values: cdktf.listMapper(dnsZonePrimaryRrSetGroupRrSetTlsaRecordValuesToTerraform, true)(struct!.values),
  }
}


export function dnsZonePrimaryRrSetGroupRrSetTlsaRecordToHclTerraform(struct?: DnsZonePrimaryRrSetGroupRrSetTlsaRecordOutputReference | DnsZonePrimaryRrSetGroupRrSetTlsaRecord): any {
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
    values: {
      value: cdktf.listMapperHcl(dnsZonePrimaryRrSetGroupRrSetTlsaRecordValuesToHclTerraform, true)(struct!.values),
      isBlock: true,
      type: "list",
      storageClassType: "DnsZonePrimaryRrSetGroupRrSetTlsaRecordValuesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DnsZonePrimaryRrSetGroupRrSetTlsaRecordOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DnsZonePrimaryRrSetGroupRrSetTlsaRecord | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._values?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DnsZonePrimaryRrSetGroupRrSetTlsaRecord | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._values.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._values.internalValue = value.values;
    }
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

  // values - computed: false, optional: false, required: true
  private _values = new DnsZonePrimaryRrSetGroupRrSetTlsaRecordValuesList(this, "values", false);
  public get values() {
    return this._values;
  }
  public putValues(value: DnsZonePrimaryRrSetGroupRrSetTlsaRecordValues[] | cdktf.IResolvable) {
    this._values.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values.internalValue;
  }
}
export interface DnsZonePrimaryRrSetGroupRrSetTxtRecord {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/dns_zone#name DnsZone#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/dns_zone#values DnsZone#values}
  */
  readonly values: string[];
}

export function dnsZonePrimaryRrSetGroupRrSetTxtRecordToTerraform(struct?: DnsZonePrimaryRrSetGroupRrSetTxtRecordOutputReference | DnsZonePrimaryRrSetGroupRrSetTxtRecord): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function dnsZonePrimaryRrSetGroupRrSetTxtRecordToHclTerraform(struct?: DnsZonePrimaryRrSetGroupRrSetTxtRecordOutputReference | DnsZonePrimaryRrSetGroupRrSetTxtRecord): any {
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
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DnsZonePrimaryRrSetGroupRrSetTxtRecordOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DnsZonePrimaryRrSetGroupRrSetTxtRecord | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DnsZonePrimaryRrSetGroupRrSetTxtRecord | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._values = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._values = value.values;
    }
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

  // values - computed: false, optional: false, required: true
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}
export interface DnsZonePrimaryRrSetGroupRrSet {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/dns_zone#description DnsZone#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/dns_zone#ttl DnsZone#ttl}
  */
  readonly ttl?: number;
  /**
  * a_record block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/dns_zone#a_record DnsZone#a_record}
  */
  readonly aRecord?: DnsZonePrimaryRrSetGroupRrSetARecord;
  /**
  * aaaa_record block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/dns_zone#aaaa_record DnsZone#aaaa_record}
  */
  readonly aaaaRecord?: DnsZonePrimaryRrSetGroupRrSetAaaaRecord;
  /**
  * afsdb_record block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/dns_zone#afsdb_record DnsZone#afsdb_record}
  */
  readonly afsdbRecord?: DnsZonePrimaryRrSetGroupRrSetAfsdbRecord;
  /**
  * alias_record block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/dns_zone#alias_record DnsZone#alias_record}
  */
  readonly aliasRecord?: DnsZonePrimaryRrSetGroupRrSetAliasRecord;
  /**
  * caa_record block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/dns_zone#caa_record DnsZone#caa_record}
  */
  readonly caaRecord?: DnsZonePrimaryRrSetGroupRrSetCaaRecord;
  /**
  * cds_record block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/dns_zone#cds_record DnsZone#cds_record}
  */
  readonly cdsRecord?: DnsZonePrimaryRrSetGroupRrSetCdsRecord;
  /**
  * cert_record block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/dns_zone#cert_record DnsZone#cert_record}
  */
  readonly certRecord?: DnsZonePrimaryRrSetGroupRrSetCertRecord;
  /**
  * cname_record block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/dns_zone#cname_record DnsZone#cname_record}
  */
  readonly cnameRecord?: DnsZonePrimaryRrSetGroupRrSetCnameRecord;
  /**
  * dlv_record block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/dns_zone#dlv_record DnsZone#dlv_record}
  */
  readonly dlvRecord?: DnsZonePrimaryRrSetGroupRrSetDlvRecord;
  /**
  * ds_record block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/dns_zone#ds_record DnsZone#ds_record}
  */
  readonly dsRecord?: DnsZonePrimaryRrSetGroupRrSetDsRecord;
  /**
  * eui48_record block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/dns_zone#eui48_record DnsZone#eui48_record}
  */
  readonly eui48Record?: DnsZonePrimaryRrSetGroupRrSetEui48Record;
  /**
  * eui64_record block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/dns_zone#eui64_record DnsZone#eui64_record}
  */
  readonly eui64Record?: DnsZonePrimaryRrSetGroupRrSetEui64Record;
  /**
  * lb_record block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/dns_zone#lb_record DnsZone#lb_record}
  */
  readonly lbRecord?: DnsZonePrimaryRrSetGroupRrSetLbRecord;
  /**
  * loc_record block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/dns_zone#loc_record DnsZone#loc_record}
  */
  readonly locRecord?: DnsZonePrimaryRrSetGroupRrSetLocRecord;
  /**
  * mx_record block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/dns_zone#mx_record DnsZone#mx_record}
  */
  readonly mxRecord?: DnsZonePrimaryRrSetGroupRrSetMxRecord;
  /**
  * naptr_record block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/dns_zone#naptr_record DnsZone#naptr_record}
  */
  readonly naptrRecord?: DnsZonePrimaryRrSetGroupRrSetNaptrRecord;
  /**
  * ns_record block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/dns_zone#ns_record DnsZone#ns_record}
  */
  readonly nsRecord?: DnsZonePrimaryRrSetGroupRrSetNsRecord;
  /**
  * ptr_record block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/dns_zone#ptr_record DnsZone#ptr_record}
  */
  readonly ptrRecord?: DnsZonePrimaryRrSetGroupRrSetPtrRecord;
  /**
  * srv_record block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/dns_zone#srv_record DnsZone#srv_record}
  */
  readonly srvRecord?: DnsZonePrimaryRrSetGroupRrSetSrvRecord;
  /**
  * sshfp_record block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/dns_zone#sshfp_record DnsZone#sshfp_record}
  */
  readonly sshfpRecord?: DnsZonePrimaryRrSetGroupRrSetSshfpRecord;
  /**
  * tlsa_record block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/dns_zone#tlsa_record DnsZone#tlsa_record}
  */
  readonly tlsaRecord?: DnsZonePrimaryRrSetGroupRrSetTlsaRecord;
  /**
  * txt_record block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/dns_zone#txt_record DnsZone#txt_record}
  */
  readonly txtRecord?: DnsZonePrimaryRrSetGroupRrSetTxtRecord;
}

export function dnsZonePrimaryRrSetGroupRrSetToTerraform(struct?: DnsZonePrimaryRrSetGroupRrSet | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    ttl: cdktf.numberToTerraform(struct!.ttl),
    a_record: dnsZonePrimaryRrSetGroupRrSetARecordToTerraform(struct!.aRecord),
    aaaa_record: dnsZonePrimaryRrSetGroupRrSetAaaaRecordToTerraform(struct!.aaaaRecord),
    afsdb_record: dnsZonePrimaryRrSetGroupRrSetAfsdbRecordToTerraform(struct!.afsdbRecord),
    alias_record: dnsZonePrimaryRrSetGroupRrSetAliasRecordToTerraform(struct!.aliasRecord),
    caa_record: dnsZonePrimaryRrSetGroupRrSetCaaRecordToTerraform(struct!.caaRecord),
    cds_record: dnsZonePrimaryRrSetGroupRrSetCdsRecordToTerraform(struct!.cdsRecord),
    cert_record: dnsZonePrimaryRrSetGroupRrSetCertRecordToTerraform(struct!.certRecord),
    cname_record: dnsZonePrimaryRrSetGroupRrSetCnameRecordToTerraform(struct!.cnameRecord),
    dlv_record: dnsZonePrimaryRrSetGroupRrSetDlvRecordToTerraform(struct!.dlvRecord),
    ds_record: dnsZonePrimaryRrSetGroupRrSetDsRecordToTerraform(struct!.dsRecord),
    eui48_record: dnsZonePrimaryRrSetGroupRrSetEui48RecordToTerraform(struct!.eui48Record),
    eui64_record: dnsZonePrimaryRrSetGroupRrSetEui64RecordToTerraform(struct!.eui64Record),
    lb_record: dnsZonePrimaryRrSetGroupRrSetLbRecordToTerraform(struct!.lbRecord),
    loc_record: dnsZonePrimaryRrSetGroupRrSetLocRecordToTerraform(struct!.locRecord),
    mx_record: dnsZonePrimaryRrSetGroupRrSetMxRecordToTerraform(struct!.mxRecord),
    naptr_record: dnsZonePrimaryRrSetGroupRrSetNaptrRecordToTerraform(struct!.naptrRecord),
    ns_record: dnsZonePrimaryRrSetGroupRrSetNsRecordToTerraform(struct!.nsRecord),
    ptr_record: dnsZonePrimaryRrSetGroupRrSetPtrRecordToTerraform(struct!.ptrRecord),
    srv_record: dnsZonePrimaryRrSetGroupRrSetSrvRecordToTerraform(struct!.srvRecord),
    sshfp_record: dnsZonePrimaryRrSetGroupRrSetSshfpRecordToTerraform(struct!.sshfpRecord),
    tlsa_record: dnsZonePrimaryRrSetGroupRrSetTlsaRecordToTerraform(struct!.tlsaRecord),
    txt_record: dnsZonePrimaryRrSetGroupRrSetTxtRecordToTerraform(struct!.txtRecord),
  }
}


export function dnsZonePrimaryRrSetGroupRrSetToHclTerraform(struct?: DnsZonePrimaryRrSetGroupRrSet | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ttl: {
      value: cdktf.numberToHclTerraform(struct!.ttl),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    a_record: {
      value: dnsZonePrimaryRrSetGroupRrSetARecordToHclTerraform(struct!.aRecord),
      isBlock: true,
      type: "list",
      storageClassType: "DnsZonePrimaryRrSetGroupRrSetARecordList",
    },
    aaaa_record: {
      value: dnsZonePrimaryRrSetGroupRrSetAaaaRecordToHclTerraform(struct!.aaaaRecord),
      isBlock: true,
      type: "list",
      storageClassType: "DnsZonePrimaryRrSetGroupRrSetAaaaRecordList",
    },
    afsdb_record: {
      value: dnsZonePrimaryRrSetGroupRrSetAfsdbRecordToHclTerraform(struct!.afsdbRecord),
      isBlock: true,
      type: "list",
      storageClassType: "DnsZonePrimaryRrSetGroupRrSetAfsdbRecordList",
    },
    alias_record: {
      value: dnsZonePrimaryRrSetGroupRrSetAliasRecordToHclTerraform(struct!.aliasRecord),
      isBlock: true,
      type: "list",
      storageClassType: "DnsZonePrimaryRrSetGroupRrSetAliasRecordList",
    },
    caa_record: {
      value: dnsZonePrimaryRrSetGroupRrSetCaaRecordToHclTerraform(struct!.caaRecord),
      isBlock: true,
      type: "list",
      storageClassType: "DnsZonePrimaryRrSetGroupRrSetCaaRecordList",
    },
    cds_record: {
      value: dnsZonePrimaryRrSetGroupRrSetCdsRecordToHclTerraform(struct!.cdsRecord),
      isBlock: true,
      type: "list",
      storageClassType: "DnsZonePrimaryRrSetGroupRrSetCdsRecordList",
    },
    cert_record: {
      value: dnsZonePrimaryRrSetGroupRrSetCertRecordToHclTerraform(struct!.certRecord),
      isBlock: true,
      type: "list",
      storageClassType: "DnsZonePrimaryRrSetGroupRrSetCertRecordList",
    },
    cname_record: {
      value: dnsZonePrimaryRrSetGroupRrSetCnameRecordToHclTerraform(struct!.cnameRecord),
      isBlock: true,
      type: "list",
      storageClassType: "DnsZonePrimaryRrSetGroupRrSetCnameRecordList",
    },
    dlv_record: {
      value: dnsZonePrimaryRrSetGroupRrSetDlvRecordToHclTerraform(struct!.dlvRecord),
      isBlock: true,
      type: "list",
      storageClassType: "DnsZonePrimaryRrSetGroupRrSetDlvRecordList",
    },
    ds_record: {
      value: dnsZonePrimaryRrSetGroupRrSetDsRecordToHclTerraform(struct!.dsRecord),
      isBlock: true,
      type: "list",
      storageClassType: "DnsZonePrimaryRrSetGroupRrSetDsRecordList",
    },
    eui48_record: {
      value: dnsZonePrimaryRrSetGroupRrSetEui48RecordToHclTerraform(struct!.eui48Record),
      isBlock: true,
      type: "list",
      storageClassType: "DnsZonePrimaryRrSetGroupRrSetEui48RecordList",
    },
    eui64_record: {
      value: dnsZonePrimaryRrSetGroupRrSetEui64RecordToHclTerraform(struct!.eui64Record),
      isBlock: true,
      type: "list",
      storageClassType: "DnsZonePrimaryRrSetGroupRrSetEui64RecordList",
    },
    lb_record: {
      value: dnsZonePrimaryRrSetGroupRrSetLbRecordToHclTerraform(struct!.lbRecord),
      isBlock: true,
      type: "list",
      storageClassType: "DnsZonePrimaryRrSetGroupRrSetLbRecordList",
    },
    loc_record: {
      value: dnsZonePrimaryRrSetGroupRrSetLocRecordToHclTerraform(struct!.locRecord),
      isBlock: true,
      type: "list",
      storageClassType: "DnsZonePrimaryRrSetGroupRrSetLocRecordList",
    },
    mx_record: {
      value: dnsZonePrimaryRrSetGroupRrSetMxRecordToHclTerraform(struct!.mxRecord),
      isBlock: true,
      type: "list",
      storageClassType: "DnsZonePrimaryRrSetGroupRrSetMxRecordList",
    },
    naptr_record: {
      value: dnsZonePrimaryRrSetGroupRrSetNaptrRecordToHclTerraform(struct!.naptrRecord),
      isBlock: true,
      type: "list",
      storageClassType: "DnsZonePrimaryRrSetGroupRrSetNaptrRecordList",
    },
    ns_record: {
      value: dnsZonePrimaryRrSetGroupRrSetNsRecordToHclTerraform(struct!.nsRecord),
      isBlock: true,
      type: "list",
      storageClassType: "DnsZonePrimaryRrSetGroupRrSetNsRecordList",
    },
    ptr_record: {
      value: dnsZonePrimaryRrSetGroupRrSetPtrRecordToHclTerraform(struct!.ptrRecord),
      isBlock: true,
      type: "list",
      storageClassType: "DnsZonePrimaryRrSetGroupRrSetPtrRecordList",
    },
    srv_record: {
      value: dnsZonePrimaryRrSetGroupRrSetSrvRecordToHclTerraform(struct!.srvRecord),
      isBlock: true,
      type: "list",
      storageClassType: "DnsZonePrimaryRrSetGroupRrSetSrvRecordList",
    },
    sshfp_record: {
      value: dnsZonePrimaryRrSetGroupRrSetSshfpRecordToHclTerraform(struct!.sshfpRecord),
      isBlock: true,
      type: "list",
      storageClassType: "DnsZonePrimaryRrSetGroupRrSetSshfpRecordList",
    },
    tlsa_record: {
      value: dnsZonePrimaryRrSetGroupRrSetTlsaRecordToHclTerraform(struct!.tlsaRecord),
      isBlock: true,
      type: "list",
      storageClassType: "DnsZonePrimaryRrSetGroupRrSetTlsaRecordList",
    },
    txt_record: {
      value: dnsZonePrimaryRrSetGroupRrSetTxtRecordToHclTerraform(struct!.txtRecord),
      isBlock: true,
      type: "list",
      storageClassType: "DnsZonePrimaryRrSetGroupRrSetTxtRecordList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DnsZonePrimaryRrSetGroupRrSetOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DnsZonePrimaryRrSetGroupRrSet | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._ttl !== undefined) {
      hasAnyValues = true;
      internalValueResult.ttl = this._ttl;
    }
    if (this._aRecord?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.aRecord = this._aRecord?.internalValue;
    }
    if (this._aaaaRecord?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.aaaaRecord = this._aaaaRecord?.internalValue;
    }
    if (this._afsdbRecord?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.afsdbRecord = this._afsdbRecord?.internalValue;
    }
    if (this._aliasRecord?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.aliasRecord = this._aliasRecord?.internalValue;
    }
    if (this._caaRecord?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.caaRecord = this._caaRecord?.internalValue;
    }
    if (this._cdsRecord?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cdsRecord = this._cdsRecord?.internalValue;
    }
    if (this._certRecord?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.certRecord = this._certRecord?.internalValue;
    }
    if (this._cnameRecord?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cnameRecord = this._cnameRecord?.internalValue;
    }
    if (this._dlvRecord?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dlvRecord = this._dlvRecord?.internalValue;
    }
    if (this._dsRecord?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dsRecord = this._dsRecord?.internalValue;
    }
    if (this._eui48Record?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.eui48Record = this._eui48Record?.internalValue;
    }
    if (this._eui64Record?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.eui64Record = this._eui64Record?.internalValue;
    }
    if (this._lbRecord?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.lbRecord = this._lbRecord?.internalValue;
    }
    if (this._locRecord?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.locRecord = this._locRecord?.internalValue;
    }
    if (this._mxRecord?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mxRecord = this._mxRecord?.internalValue;
    }
    if (this._naptrRecord?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.naptrRecord = this._naptrRecord?.internalValue;
    }
    if (this._nsRecord?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nsRecord = this._nsRecord?.internalValue;
    }
    if (this._ptrRecord?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ptrRecord = this._ptrRecord?.internalValue;
    }
    if (this._srvRecord?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.srvRecord = this._srvRecord?.internalValue;
    }
    if (this._sshfpRecord?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sshfpRecord = this._sshfpRecord?.internalValue;
    }
    if (this._tlsaRecord?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlsaRecord = this._tlsaRecord?.internalValue;
    }
    if (this._txtRecord?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.txtRecord = this._txtRecord?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DnsZonePrimaryRrSetGroupRrSet | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._ttl = undefined;
      this._aRecord.internalValue = undefined;
      this._aaaaRecord.internalValue = undefined;
      this._afsdbRecord.internalValue = undefined;
      this._aliasRecord.internalValue = undefined;
      this._caaRecord.internalValue = undefined;
      this._cdsRecord.internalValue = undefined;
      this._certRecord.internalValue = undefined;
      this._cnameRecord.internalValue = undefined;
      this._dlvRecord.internalValue = undefined;
      this._dsRecord.internalValue = undefined;
      this._eui48Record.internalValue = undefined;
      this._eui64Record.internalValue = undefined;
      this._lbRecord.internalValue = undefined;
      this._locRecord.internalValue = undefined;
      this._mxRecord.internalValue = undefined;
      this._naptrRecord.internalValue = undefined;
      this._nsRecord.internalValue = undefined;
      this._ptrRecord.internalValue = undefined;
      this._srvRecord.internalValue = undefined;
      this._sshfpRecord.internalValue = undefined;
      this._tlsaRecord.internalValue = undefined;
      this._txtRecord.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._ttl = value.ttl;
      this._aRecord.internalValue = value.aRecord;
      this._aaaaRecord.internalValue = value.aaaaRecord;
      this._afsdbRecord.internalValue = value.afsdbRecord;
      this._aliasRecord.internalValue = value.aliasRecord;
      this._caaRecord.internalValue = value.caaRecord;
      this._cdsRecord.internalValue = value.cdsRecord;
      this._certRecord.internalValue = value.certRecord;
      this._cnameRecord.internalValue = value.cnameRecord;
      this._dlvRecord.internalValue = value.dlvRecord;
      this._dsRecord.internalValue = value.dsRecord;
      this._eui48Record.internalValue = value.eui48Record;
      this._eui64Record.internalValue = value.eui64Record;
      this._lbRecord.internalValue = value.lbRecord;
      this._locRecord.internalValue = value.locRecord;
      this._mxRecord.internalValue = value.mxRecord;
      this._naptrRecord.internalValue = value.naptrRecord;
      this._nsRecord.internalValue = value.nsRecord;
      this._ptrRecord.internalValue = value.ptrRecord;
      this._srvRecord.internalValue = value.srvRecord;
      this._sshfpRecord.internalValue = value.sshfpRecord;
      this._tlsaRecord.internalValue = value.tlsaRecord;
      this._txtRecord.internalValue = value.txtRecord;
    }
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

  // ttl - computed: false, optional: true, required: false
  private _ttl?: number; 
  public get ttl() {
    return this.getNumberAttribute('ttl');
  }
  public set ttl(value: number) {
    this._ttl = value;
  }
  public resetTtl() {
    this._ttl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ttlInput() {
    return this._ttl;
  }

  // a_record - computed: false, optional: true, required: false
  private _aRecord = new DnsZonePrimaryRrSetGroupRrSetARecordOutputReference(this, "a_record");
  public get aRecord() {
    return this._aRecord;
  }
  public putARecord(value: DnsZonePrimaryRrSetGroupRrSetARecord) {
    this._aRecord.internalValue = value;
  }
  public resetARecord() {
    this._aRecord.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aRecordInput() {
    return this._aRecord.internalValue;
  }

  // aaaa_record - computed: false, optional: true, required: false
  private _aaaaRecord = new DnsZonePrimaryRrSetGroupRrSetAaaaRecordOutputReference(this, "aaaa_record");
  public get aaaaRecord() {
    return this._aaaaRecord;
  }
  public putAaaaRecord(value: DnsZonePrimaryRrSetGroupRrSetAaaaRecord) {
    this._aaaaRecord.internalValue = value;
  }
  public resetAaaaRecord() {
    this._aaaaRecord.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aaaaRecordInput() {
    return this._aaaaRecord.internalValue;
  }

  // afsdb_record - computed: false, optional: true, required: false
  private _afsdbRecord = new DnsZonePrimaryRrSetGroupRrSetAfsdbRecordOutputReference(this, "afsdb_record");
  public get afsdbRecord() {
    return this._afsdbRecord;
  }
  public putAfsdbRecord(value: DnsZonePrimaryRrSetGroupRrSetAfsdbRecord) {
    this._afsdbRecord.internalValue = value;
  }
  public resetAfsdbRecord() {
    this._afsdbRecord.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get afsdbRecordInput() {
    return this._afsdbRecord.internalValue;
  }

  // alias_record - computed: false, optional: true, required: false
  private _aliasRecord = new DnsZonePrimaryRrSetGroupRrSetAliasRecordOutputReference(this, "alias_record");
  public get aliasRecord() {
    return this._aliasRecord;
  }
  public putAliasRecord(value: DnsZonePrimaryRrSetGroupRrSetAliasRecord) {
    this._aliasRecord.internalValue = value;
  }
  public resetAliasRecord() {
    this._aliasRecord.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aliasRecordInput() {
    return this._aliasRecord.internalValue;
  }

  // caa_record - computed: false, optional: true, required: false
  private _caaRecord = new DnsZonePrimaryRrSetGroupRrSetCaaRecordOutputReference(this, "caa_record");
  public get caaRecord() {
    return this._caaRecord;
  }
  public putCaaRecord(value: DnsZonePrimaryRrSetGroupRrSetCaaRecord) {
    this._caaRecord.internalValue = value;
  }
  public resetCaaRecord() {
    this._caaRecord.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caaRecordInput() {
    return this._caaRecord.internalValue;
  }

  // cds_record - computed: false, optional: true, required: false
  private _cdsRecord = new DnsZonePrimaryRrSetGroupRrSetCdsRecordOutputReference(this, "cds_record");
  public get cdsRecord() {
    return this._cdsRecord;
  }
  public putCdsRecord(value: DnsZonePrimaryRrSetGroupRrSetCdsRecord) {
    this._cdsRecord.internalValue = value;
  }
  public resetCdsRecord() {
    this._cdsRecord.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cdsRecordInput() {
    return this._cdsRecord.internalValue;
  }

  // cert_record - computed: false, optional: true, required: false
  private _certRecord = new DnsZonePrimaryRrSetGroupRrSetCertRecordOutputReference(this, "cert_record");
  public get certRecord() {
    return this._certRecord;
  }
  public putCertRecord(value: DnsZonePrimaryRrSetGroupRrSetCertRecord) {
    this._certRecord.internalValue = value;
  }
  public resetCertRecord() {
    this._certRecord.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certRecordInput() {
    return this._certRecord.internalValue;
  }

  // cname_record - computed: false, optional: true, required: false
  private _cnameRecord = new DnsZonePrimaryRrSetGroupRrSetCnameRecordOutputReference(this, "cname_record");
  public get cnameRecord() {
    return this._cnameRecord;
  }
  public putCnameRecord(value: DnsZonePrimaryRrSetGroupRrSetCnameRecord) {
    this._cnameRecord.internalValue = value;
  }
  public resetCnameRecord() {
    this._cnameRecord.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cnameRecordInput() {
    return this._cnameRecord.internalValue;
  }

  // dlv_record - computed: false, optional: true, required: false
  private _dlvRecord = new DnsZonePrimaryRrSetGroupRrSetDlvRecordOutputReference(this, "dlv_record");
  public get dlvRecord() {
    return this._dlvRecord;
  }
  public putDlvRecord(value: DnsZonePrimaryRrSetGroupRrSetDlvRecord) {
    this._dlvRecord.internalValue = value;
  }
  public resetDlvRecord() {
    this._dlvRecord.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dlvRecordInput() {
    return this._dlvRecord.internalValue;
  }

  // ds_record - computed: false, optional: true, required: false
  private _dsRecord = new DnsZonePrimaryRrSetGroupRrSetDsRecordOutputReference(this, "ds_record");
  public get dsRecord() {
    return this._dsRecord;
  }
  public putDsRecord(value: DnsZonePrimaryRrSetGroupRrSetDsRecord) {
    this._dsRecord.internalValue = value;
  }
  public resetDsRecord() {
    this._dsRecord.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dsRecordInput() {
    return this._dsRecord.internalValue;
  }

  // eui48_record - computed: false, optional: true, required: false
  private _eui48Record = new DnsZonePrimaryRrSetGroupRrSetEui48RecordOutputReference(this, "eui48_record");
  public get eui48Record() {
    return this._eui48Record;
  }
  public putEui48Record(value: DnsZonePrimaryRrSetGroupRrSetEui48Record) {
    this._eui48Record.internalValue = value;
  }
  public resetEui48Record() {
    this._eui48Record.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eui48RecordInput() {
    return this._eui48Record.internalValue;
  }

  // eui64_record - computed: false, optional: true, required: false
  private _eui64Record = new DnsZonePrimaryRrSetGroupRrSetEui64RecordOutputReference(this, "eui64_record");
  public get eui64Record() {
    return this._eui64Record;
  }
  public putEui64Record(value: DnsZonePrimaryRrSetGroupRrSetEui64Record) {
    this._eui64Record.internalValue = value;
  }
  public resetEui64Record() {
    this._eui64Record.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eui64RecordInput() {
    return this._eui64Record.internalValue;
  }

  // lb_record - computed: false, optional: true, required: false
  private _lbRecord = new DnsZonePrimaryRrSetGroupRrSetLbRecordOutputReference(this, "lb_record");
  public get lbRecord() {
    return this._lbRecord;
  }
  public putLbRecord(value: DnsZonePrimaryRrSetGroupRrSetLbRecord) {
    this._lbRecord.internalValue = value;
  }
  public resetLbRecord() {
    this._lbRecord.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lbRecordInput() {
    return this._lbRecord.internalValue;
  }

  // loc_record - computed: false, optional: true, required: false
  private _locRecord = new DnsZonePrimaryRrSetGroupRrSetLocRecordOutputReference(this, "loc_record");
  public get locRecord() {
    return this._locRecord;
  }
  public putLocRecord(value: DnsZonePrimaryRrSetGroupRrSetLocRecord) {
    this._locRecord.internalValue = value;
  }
  public resetLocRecord() {
    this._locRecord.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locRecordInput() {
    return this._locRecord.internalValue;
  }

  // mx_record - computed: false, optional: true, required: false
  private _mxRecord = new DnsZonePrimaryRrSetGroupRrSetMxRecordOutputReference(this, "mx_record");
  public get mxRecord() {
    return this._mxRecord;
  }
  public putMxRecord(value: DnsZonePrimaryRrSetGroupRrSetMxRecord) {
    this._mxRecord.internalValue = value;
  }
  public resetMxRecord() {
    this._mxRecord.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mxRecordInput() {
    return this._mxRecord.internalValue;
  }

  // naptr_record - computed: false, optional: true, required: false
  private _naptrRecord = new DnsZonePrimaryRrSetGroupRrSetNaptrRecordOutputReference(this, "naptr_record");
  public get naptrRecord() {
    return this._naptrRecord;
  }
  public putNaptrRecord(value: DnsZonePrimaryRrSetGroupRrSetNaptrRecord) {
    this._naptrRecord.internalValue = value;
  }
  public resetNaptrRecord() {
    this._naptrRecord.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get naptrRecordInput() {
    return this._naptrRecord.internalValue;
  }

  // ns_record - computed: false, optional: true, required: false
  private _nsRecord = new DnsZonePrimaryRrSetGroupRrSetNsRecordOutputReference(this, "ns_record");
  public get nsRecord() {
    return this._nsRecord;
  }
  public putNsRecord(value: DnsZonePrimaryRrSetGroupRrSetNsRecord) {
    this._nsRecord.internalValue = value;
  }
  public resetNsRecord() {
    this._nsRecord.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nsRecordInput() {
    return this._nsRecord.internalValue;
  }

  // ptr_record - computed: false, optional: true, required: false
  private _ptrRecord = new DnsZonePrimaryRrSetGroupRrSetPtrRecordOutputReference(this, "ptr_record");
  public get ptrRecord() {
    return this._ptrRecord;
  }
  public putPtrRecord(value: DnsZonePrimaryRrSetGroupRrSetPtrRecord) {
    this._ptrRecord.internalValue = value;
  }
  public resetPtrRecord() {
    this._ptrRecord.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ptrRecordInput() {
    return this._ptrRecord.internalValue;
  }

  // srv_record - computed: false, optional: true, required: false
  private _srvRecord = new DnsZonePrimaryRrSetGroupRrSetSrvRecordOutputReference(this, "srv_record");
  public get srvRecord() {
    return this._srvRecord;
  }
  public putSrvRecord(value: DnsZonePrimaryRrSetGroupRrSetSrvRecord) {
    this._srvRecord.internalValue = value;
  }
  public resetSrvRecord() {
    this._srvRecord.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srvRecordInput() {
    return this._srvRecord.internalValue;
  }

  // sshfp_record - computed: false, optional: true, required: false
  private _sshfpRecord = new DnsZonePrimaryRrSetGroupRrSetSshfpRecordOutputReference(this, "sshfp_record");
  public get sshfpRecord() {
    return this._sshfpRecord;
  }
  public putSshfpRecord(value: DnsZonePrimaryRrSetGroupRrSetSshfpRecord) {
    this._sshfpRecord.internalValue = value;
  }
  public resetSshfpRecord() {
    this._sshfpRecord.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sshfpRecordInput() {
    return this._sshfpRecord.internalValue;
  }

  // tlsa_record - computed: false, optional: true, required: false
  private _tlsaRecord = new DnsZonePrimaryRrSetGroupRrSetTlsaRecordOutputReference(this, "tlsa_record");
  public get tlsaRecord() {
    return this._tlsaRecord;
  }
  public putTlsaRecord(value: DnsZonePrimaryRrSetGroupRrSetTlsaRecord) {
    this._tlsaRecord.internalValue = value;
  }
  public resetTlsaRecord() {
    this._tlsaRecord.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsaRecordInput() {
    return this._tlsaRecord.internalValue;
  }

  // txt_record - computed: false, optional: true, required: false
  private _txtRecord = new DnsZonePrimaryRrSetGroupRrSetTxtRecordOutputReference(this, "txt_record");
  public get txtRecord() {
    return this._txtRecord;
  }
  public putTxtRecord(value: DnsZonePrimaryRrSetGroupRrSetTxtRecord) {
    this._txtRecord.internalValue = value;
  }
  public resetTxtRecord() {
    this._txtRecord.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get txtRecordInput() {
    return this._txtRecord.internalValue;
  }
}

export class DnsZonePrimaryRrSetGroupRrSetList extends cdktf.ComplexList {
  public internalValue? : DnsZonePrimaryRrSetGroupRrSet[] | cdktf.IResolvable

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
  public get(index: number): DnsZonePrimaryRrSetGroupRrSetOutputReference {
    return new DnsZonePrimaryRrSetGroupRrSetOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DnsZonePrimaryRrSetGroup {
  /**
  * metadata block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/dns_zone#metadata DnsZone#metadata}
  */
  readonly metadata: DnsZonePrimaryRrSetGroupMetadata;
  /**
  * rr_set block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/dns_zone#rr_set DnsZone#rr_set}
  */
  readonly rrSet?: DnsZonePrimaryRrSetGroupRrSet[] | cdktf.IResolvable;
}

export function dnsZonePrimaryRrSetGroupToTerraform(struct?: DnsZonePrimaryRrSetGroup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    metadata: dnsZonePrimaryRrSetGroupMetadataToTerraform(struct!.metadata),
    rr_set: cdktf.listMapper(dnsZonePrimaryRrSetGroupRrSetToTerraform, true)(struct!.rrSet),
  }
}


export function dnsZonePrimaryRrSetGroupToHclTerraform(struct?: DnsZonePrimaryRrSetGroup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    metadata: {
      value: dnsZonePrimaryRrSetGroupMetadataToHclTerraform(struct!.metadata),
      isBlock: true,
      type: "list",
      storageClassType: "DnsZonePrimaryRrSetGroupMetadataList",
    },
    rr_set: {
      value: cdktf.listMapperHcl(dnsZonePrimaryRrSetGroupRrSetToHclTerraform, true)(struct!.rrSet),
      isBlock: true,
      type: "list",
      storageClassType: "DnsZonePrimaryRrSetGroupRrSetList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DnsZonePrimaryRrSetGroupOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DnsZonePrimaryRrSetGroup | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metadata?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadata = this._metadata?.internalValue;
    }
    if (this._rrSet?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rrSet = this._rrSet?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DnsZonePrimaryRrSetGroup | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._metadata.internalValue = undefined;
      this._rrSet.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._metadata.internalValue = value.metadata;
      this._rrSet.internalValue = value.rrSet;
    }
  }

  // metadata - computed: false, optional: false, required: true
  private _metadata = new DnsZonePrimaryRrSetGroupMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DnsZonePrimaryRrSetGroupMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // rr_set - computed: false, optional: true, required: false
  private _rrSet = new DnsZonePrimaryRrSetGroupRrSetList(this, "rr_set", false);
  public get rrSet() {
    return this._rrSet;
  }
  public putRrSet(value: DnsZonePrimaryRrSetGroupRrSet[] | cdktf.IResolvable) {
    this._rrSet.internalValue = value;
  }
  public resetRrSet() {
    this._rrSet.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rrSetInput() {
    return this._rrSet.internalValue;
  }
}

export class DnsZonePrimaryRrSetGroupList extends cdktf.ComplexList {
  public internalValue? : DnsZonePrimaryRrSetGroup[] | cdktf.IResolvable

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
  public get(index: number): DnsZonePrimaryRrSetGroupOutputReference {
    return new DnsZonePrimaryRrSetGroupOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DnsZonePrimarySoaParameters {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/dns_zone#expire DnsZone#expire}
  */
  readonly expire?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/dns_zone#negative_ttl DnsZone#negative_ttl}
  */
  readonly negativeTtl?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/dns_zone#refresh DnsZone#refresh}
  */
  readonly refresh?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/dns_zone#retry DnsZone#retry}
  */
  readonly retry?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/dns_zone#ttl DnsZone#ttl}
  */
  readonly ttl?: number;
}

export function dnsZonePrimarySoaParametersToTerraform(struct?: DnsZonePrimarySoaParametersOutputReference | DnsZonePrimarySoaParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    expire: cdktf.numberToTerraform(struct!.expire),
    negative_ttl: cdktf.numberToTerraform(struct!.negativeTtl),
    refresh: cdktf.numberToTerraform(struct!.refresh),
    retry: cdktf.numberToTerraform(struct!.retry),
    ttl: cdktf.numberToTerraform(struct!.ttl),
  }
}


export function dnsZonePrimarySoaParametersToHclTerraform(struct?: DnsZonePrimarySoaParametersOutputReference | DnsZonePrimarySoaParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    expire: {
      value: cdktf.numberToHclTerraform(struct!.expire),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    negative_ttl: {
      value: cdktf.numberToHclTerraform(struct!.negativeTtl),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    refresh: {
      value: cdktf.numberToHclTerraform(struct!.refresh),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    retry: {
      value: cdktf.numberToHclTerraform(struct!.retry),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ttl: {
      value: cdktf.numberToHclTerraform(struct!.ttl),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DnsZonePrimarySoaParametersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DnsZonePrimarySoaParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._expire !== undefined) {
      hasAnyValues = true;
      internalValueResult.expire = this._expire;
    }
    if (this._negativeTtl !== undefined) {
      hasAnyValues = true;
      internalValueResult.negativeTtl = this._negativeTtl;
    }
    if (this._refresh !== undefined) {
      hasAnyValues = true;
      internalValueResult.refresh = this._refresh;
    }
    if (this._retry !== undefined) {
      hasAnyValues = true;
      internalValueResult.retry = this._retry;
    }
    if (this._ttl !== undefined) {
      hasAnyValues = true;
      internalValueResult.ttl = this._ttl;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DnsZonePrimarySoaParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._expire = undefined;
      this._negativeTtl = undefined;
      this._refresh = undefined;
      this._retry = undefined;
      this._ttl = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._expire = value.expire;
      this._negativeTtl = value.negativeTtl;
      this._refresh = value.refresh;
      this._retry = value.retry;
      this._ttl = value.ttl;
    }
  }

  // expire - computed: false, optional: true, required: false
  private _expire?: number; 
  public get expire() {
    return this.getNumberAttribute('expire');
  }
  public set expire(value: number) {
    this._expire = value;
  }
  public resetExpire() {
    this._expire = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expireInput() {
    return this._expire;
  }

  // negative_ttl - computed: false, optional: true, required: false
  private _negativeTtl?: number; 
  public get negativeTtl() {
    return this.getNumberAttribute('negative_ttl');
  }
  public set negativeTtl(value: number) {
    this._negativeTtl = value;
  }
  public resetNegativeTtl() {
    this._negativeTtl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get negativeTtlInput() {
    return this._negativeTtl;
  }

  // refresh - computed: false, optional: true, required: false
  private _refresh?: number; 
  public get refresh() {
    return this.getNumberAttribute('refresh');
  }
  public set refresh(value: number) {
    this._refresh = value;
  }
  public resetRefresh() {
    this._refresh = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get refreshInput() {
    return this._refresh;
  }

  // retry - computed: false, optional: true, required: false
  private _retry?: number; 
  public get retry() {
    return this.getNumberAttribute('retry');
  }
  public set retry(value: number) {
    this._retry = value;
  }
  public resetRetry() {
    this._retry = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryInput() {
    return this._retry;
  }

  // ttl - computed: false, optional: true, required: false
  private _ttl?: number; 
  public get ttl() {
    return this.getNumberAttribute('ttl');
  }
  public set ttl(value: number) {
    this._ttl = value;
  }
  public resetTtl() {
    this._ttl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ttlInput() {
    return this._ttl;
  }
}
export interface DnsZonePrimary {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/dns_zone#allow_http_lb_managed_records DnsZone#allow_http_lb_managed_records}
  */
  readonly allowHttpLbManagedRecords?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/dns_zone#default_soa_parameters DnsZone#default_soa_parameters}
  */
  readonly defaultSoaParameters?: boolean | cdktf.IResolvable;
  /**
  * default_rr_set_group block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/dns_zone#default_rr_set_group DnsZone#default_rr_set_group}
  */
  readonly defaultRrSetGroup?: DnsZonePrimaryDefaultRrSetGroup[] | cdktf.IResolvable;
  /**
  * dnssec_mode block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/dns_zone#dnssec_mode DnsZone#dnssec_mode}
  */
  readonly dnssecMode?: DnsZonePrimaryDnssecMode;
  /**
  * rr_set_group block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/dns_zone#rr_set_group DnsZone#rr_set_group}
  */
  readonly rrSetGroup?: DnsZonePrimaryRrSetGroup[] | cdktf.IResolvable;
  /**
  * soa_parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/dns_zone#soa_parameters DnsZone#soa_parameters}
  */
  readonly soaParameters?: DnsZonePrimarySoaParameters;
}

export function dnsZonePrimaryToTerraform(struct?: DnsZonePrimaryOutputReference | DnsZonePrimary): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_http_lb_managed_records: cdktf.booleanToTerraform(struct!.allowHttpLbManagedRecords),
    default_soa_parameters: cdktf.booleanToTerraform(struct!.defaultSoaParameters),
    default_rr_set_group: cdktf.listMapper(dnsZonePrimaryDefaultRrSetGroupToTerraform, true)(struct!.defaultRrSetGroup),
    dnssec_mode: dnsZonePrimaryDnssecModeToTerraform(struct!.dnssecMode),
    rr_set_group: cdktf.listMapper(dnsZonePrimaryRrSetGroupToTerraform, true)(struct!.rrSetGroup),
    soa_parameters: dnsZonePrimarySoaParametersToTerraform(struct!.soaParameters),
  }
}


export function dnsZonePrimaryToHclTerraform(struct?: DnsZonePrimaryOutputReference | DnsZonePrimary): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow_http_lb_managed_records: {
      value: cdktf.booleanToHclTerraform(struct!.allowHttpLbManagedRecords),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    default_soa_parameters: {
      value: cdktf.booleanToHclTerraform(struct!.defaultSoaParameters),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    default_rr_set_group: {
      value: cdktf.listMapperHcl(dnsZonePrimaryDefaultRrSetGroupToHclTerraform, true)(struct!.defaultRrSetGroup),
      isBlock: true,
      type: "list",
      storageClassType: "DnsZonePrimaryDefaultRrSetGroupList",
    },
    dnssec_mode: {
      value: dnsZonePrimaryDnssecModeToHclTerraform(struct!.dnssecMode),
      isBlock: true,
      type: "list",
      storageClassType: "DnsZonePrimaryDnssecModeList",
    },
    rr_set_group: {
      value: cdktf.listMapperHcl(dnsZonePrimaryRrSetGroupToHclTerraform, true)(struct!.rrSetGroup),
      isBlock: true,
      type: "list",
      storageClassType: "DnsZonePrimaryRrSetGroupList",
    },
    soa_parameters: {
      value: dnsZonePrimarySoaParametersToHclTerraform(struct!.soaParameters),
      isBlock: true,
      type: "list",
      storageClassType: "DnsZonePrimarySoaParametersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DnsZonePrimaryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DnsZonePrimary | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowHttpLbManagedRecords !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowHttpLbManagedRecords = this._allowHttpLbManagedRecords;
    }
    if (this._defaultSoaParameters !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultSoaParameters = this._defaultSoaParameters;
    }
    if (this._defaultRrSetGroup?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultRrSetGroup = this._defaultRrSetGroup?.internalValue;
    }
    if (this._dnssecMode?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnssecMode = this._dnssecMode?.internalValue;
    }
    if (this._rrSetGroup?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rrSetGroup = this._rrSetGroup?.internalValue;
    }
    if (this._soaParameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.soaParameters = this._soaParameters?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DnsZonePrimary | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allowHttpLbManagedRecords = undefined;
      this._defaultSoaParameters = undefined;
      this._defaultRrSetGroup.internalValue = undefined;
      this._dnssecMode.internalValue = undefined;
      this._rrSetGroup.internalValue = undefined;
      this._soaParameters.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allowHttpLbManagedRecords = value.allowHttpLbManagedRecords;
      this._defaultSoaParameters = value.defaultSoaParameters;
      this._defaultRrSetGroup.internalValue = value.defaultRrSetGroup;
      this._dnssecMode.internalValue = value.dnssecMode;
      this._rrSetGroup.internalValue = value.rrSetGroup;
      this._soaParameters.internalValue = value.soaParameters;
    }
  }

  // allow_http_lb_managed_records - computed: false, optional: true, required: false
  private _allowHttpLbManagedRecords?: boolean | cdktf.IResolvable; 
  public get allowHttpLbManagedRecords() {
    return this.getBooleanAttribute('allow_http_lb_managed_records');
  }
  public set allowHttpLbManagedRecords(value: boolean | cdktf.IResolvable) {
    this._allowHttpLbManagedRecords = value;
  }
  public resetAllowHttpLbManagedRecords() {
    this._allowHttpLbManagedRecords = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowHttpLbManagedRecordsInput() {
    return this._allowHttpLbManagedRecords;
  }

  // default_soa_parameters - computed: false, optional: true, required: false
  private _defaultSoaParameters?: boolean | cdktf.IResolvable; 
  public get defaultSoaParameters() {
    return this.getBooleanAttribute('default_soa_parameters');
  }
  public set defaultSoaParameters(value: boolean | cdktf.IResolvable) {
    this._defaultSoaParameters = value;
  }
  public resetDefaultSoaParameters() {
    this._defaultSoaParameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultSoaParametersInput() {
    return this._defaultSoaParameters;
  }

  // default_rr_set_group - computed: false, optional: true, required: false
  private _defaultRrSetGroup = new DnsZonePrimaryDefaultRrSetGroupList(this, "default_rr_set_group", false);
  public get defaultRrSetGroup() {
    return this._defaultRrSetGroup;
  }
  public putDefaultRrSetGroup(value: DnsZonePrimaryDefaultRrSetGroup[] | cdktf.IResolvable) {
    this._defaultRrSetGroup.internalValue = value;
  }
  public resetDefaultRrSetGroup() {
    this._defaultRrSetGroup.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultRrSetGroupInput() {
    return this._defaultRrSetGroup.internalValue;
  }

  // dnssec_mode - computed: false, optional: true, required: false
  private _dnssecMode = new DnsZonePrimaryDnssecModeOutputReference(this, "dnssec_mode");
  public get dnssecMode() {
    return this._dnssecMode;
  }
  public putDnssecMode(value: DnsZonePrimaryDnssecMode) {
    this._dnssecMode.internalValue = value;
  }
  public resetDnssecMode() {
    this._dnssecMode.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnssecModeInput() {
    return this._dnssecMode.internalValue;
  }

  // rr_set_group - computed: false, optional: true, required: false
  private _rrSetGroup = new DnsZonePrimaryRrSetGroupList(this, "rr_set_group", false);
  public get rrSetGroup() {
    return this._rrSetGroup;
  }
  public putRrSetGroup(value: DnsZonePrimaryRrSetGroup[] | cdktf.IResolvable) {
    this._rrSetGroup.internalValue = value;
  }
  public resetRrSetGroup() {
    this._rrSetGroup.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rrSetGroupInput() {
    return this._rrSetGroup.internalValue;
  }

  // soa_parameters - computed: false, optional: true, required: false
  private _soaParameters = new DnsZonePrimarySoaParametersOutputReference(this, "soa_parameters");
  public get soaParameters() {
    return this._soaParameters;
  }
  public putSoaParameters(value: DnsZonePrimarySoaParameters) {
    this._soaParameters.internalValue = value;
  }
  public resetSoaParameters() {
    this._soaParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get soaParametersInput() {
    return this._soaParameters.internalValue;
  }
}
export interface DnsZoneSecondaryTsigKeyValueBlindfoldSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/dns_zone#decryption_provider DnsZone#decryption_provider}
  */
  readonly decryptionProvider?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/dns_zone#location DnsZone#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/dns_zone#store_provider DnsZone#store_provider}
  */
  readonly storeProvider?: string;
}

export function dnsZoneSecondaryTsigKeyValueBlindfoldSecretInfoToTerraform(struct?: DnsZoneSecondaryTsigKeyValueBlindfoldSecretInfoOutputReference | DnsZoneSecondaryTsigKeyValueBlindfoldSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    decryption_provider: cdktf.stringToTerraform(struct!.decryptionProvider),
    location: cdktf.stringToTerraform(struct!.location),
    store_provider: cdktf.stringToTerraform(struct!.storeProvider),
  }
}


export function dnsZoneSecondaryTsigKeyValueBlindfoldSecretInfoToHclTerraform(struct?: DnsZoneSecondaryTsigKeyValueBlindfoldSecretInfoOutputReference | DnsZoneSecondaryTsigKeyValueBlindfoldSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    decryption_provider: {
      value: cdktf.stringToHclTerraform(struct!.decryptionProvider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    location: {
      value: cdktf.stringToHclTerraform(struct!.location),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    store_provider: {
      value: cdktf.stringToHclTerraform(struct!.storeProvider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DnsZoneSecondaryTsigKeyValueBlindfoldSecretInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DnsZoneSecondaryTsigKeyValueBlindfoldSecretInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._decryptionProvider !== undefined) {
      hasAnyValues = true;
      internalValueResult.decryptionProvider = this._decryptionProvider;
    }
    if (this._location !== undefined) {
      hasAnyValues = true;
      internalValueResult.location = this._location;
    }
    if (this._storeProvider !== undefined) {
      hasAnyValues = true;
      internalValueResult.storeProvider = this._storeProvider;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DnsZoneSecondaryTsigKeyValueBlindfoldSecretInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._decryptionProvider = undefined;
      this._location = undefined;
      this._storeProvider = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._decryptionProvider = value.decryptionProvider;
      this._location = value.location;
      this._storeProvider = value.storeProvider;
    }
  }

  // decryption_provider - computed: false, optional: true, required: false
  private _decryptionProvider?: string; 
  public get decryptionProvider() {
    return this.getStringAttribute('decryption_provider');
  }
  public set decryptionProvider(value: string) {
    this._decryptionProvider = value;
  }
  public resetDecryptionProvider() {
    this._decryptionProvider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get decryptionProviderInput() {
    return this._decryptionProvider;
  }

  // location - computed: false, optional: false, required: true
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
  }

  // store_provider - computed: false, optional: true, required: false
  private _storeProvider?: string; 
  public get storeProvider() {
    return this.getStringAttribute('store_provider');
  }
  public set storeProvider(value: string) {
    this._storeProvider = value;
  }
  public resetStoreProvider() {
    this._storeProvider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storeProviderInput() {
    return this._storeProvider;
  }
}
export interface DnsZoneSecondaryTsigKeyValueBlindfoldSecretInfoInternal {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/dns_zone#decryption_provider DnsZone#decryption_provider}
  */
  readonly decryptionProvider?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/dns_zone#location DnsZone#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/dns_zone#store_provider DnsZone#store_provider}
  */
  readonly storeProvider?: string;
}

export function dnsZoneSecondaryTsigKeyValueBlindfoldSecretInfoInternalToTerraform(struct?: DnsZoneSecondaryTsigKeyValueBlindfoldSecretInfoInternalOutputReference | DnsZoneSecondaryTsigKeyValueBlindfoldSecretInfoInternal): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    decryption_provider: cdktf.stringToTerraform(struct!.decryptionProvider),
    location: cdktf.stringToTerraform(struct!.location),
    store_provider: cdktf.stringToTerraform(struct!.storeProvider),
  }
}


export function dnsZoneSecondaryTsigKeyValueBlindfoldSecretInfoInternalToHclTerraform(struct?: DnsZoneSecondaryTsigKeyValueBlindfoldSecretInfoInternalOutputReference | DnsZoneSecondaryTsigKeyValueBlindfoldSecretInfoInternal): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    decryption_provider: {
      value: cdktf.stringToHclTerraform(struct!.decryptionProvider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    location: {
      value: cdktf.stringToHclTerraform(struct!.location),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    store_provider: {
      value: cdktf.stringToHclTerraform(struct!.storeProvider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DnsZoneSecondaryTsigKeyValueBlindfoldSecretInfoInternalOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DnsZoneSecondaryTsigKeyValueBlindfoldSecretInfoInternal | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._decryptionProvider !== undefined) {
      hasAnyValues = true;
      internalValueResult.decryptionProvider = this._decryptionProvider;
    }
    if (this._location !== undefined) {
      hasAnyValues = true;
      internalValueResult.location = this._location;
    }
    if (this._storeProvider !== undefined) {
      hasAnyValues = true;
      internalValueResult.storeProvider = this._storeProvider;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DnsZoneSecondaryTsigKeyValueBlindfoldSecretInfoInternal | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._decryptionProvider = undefined;
      this._location = undefined;
      this._storeProvider = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._decryptionProvider = value.decryptionProvider;
      this._location = value.location;
      this._storeProvider = value.storeProvider;
    }
  }

  // decryption_provider - computed: false, optional: true, required: false
  private _decryptionProvider?: string; 
  public get decryptionProvider() {
    return this.getStringAttribute('decryption_provider');
  }
  public set decryptionProvider(value: string) {
    this._decryptionProvider = value;
  }
  public resetDecryptionProvider() {
    this._decryptionProvider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get decryptionProviderInput() {
    return this._decryptionProvider;
  }

  // location - computed: false, optional: false, required: true
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
  }

  // store_provider - computed: false, optional: true, required: false
  private _storeProvider?: string; 
  public get storeProvider() {
    return this.getStringAttribute('store_provider');
  }
  public set storeProvider(value: string) {
    this._storeProvider = value;
  }
  public resetStoreProvider() {
    this._storeProvider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storeProviderInput() {
    return this._storeProvider;
  }
}
export interface DnsZoneSecondaryTsigKeyValueClearSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/dns_zone#provider DnsZone#provider}
  */
  readonly provider?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/dns_zone#url DnsZone#url}
  */
  readonly url: string;
}

export function dnsZoneSecondaryTsigKeyValueClearSecretInfoToTerraform(struct?: DnsZoneSecondaryTsigKeyValueClearSecretInfoOutputReference | DnsZoneSecondaryTsigKeyValueClearSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    provider: cdktf.stringToTerraform(struct!.provider),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function dnsZoneSecondaryTsigKeyValueClearSecretInfoToHclTerraform(struct?: DnsZoneSecondaryTsigKeyValueClearSecretInfoOutputReference | DnsZoneSecondaryTsigKeyValueClearSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    provider: {
      value: cdktf.stringToHclTerraform(struct!.provider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DnsZoneSecondaryTsigKeyValueClearSecretInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DnsZoneSecondaryTsigKeyValueClearSecretInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._provider !== undefined) {
      hasAnyValues = true;
      internalValueResult.provider = this._provider;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DnsZoneSecondaryTsigKeyValueClearSecretInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._provider = undefined;
      this._url = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._provider = value.provider;
      this._url = value.url;
    }
  }

  // provider - computed: false, optional: true, required: false
  private _provider?: string; 
  public get provider() {
    return this.getStringAttribute('provider');
  }
  public set provider(value: string) {
    this._provider = value;
  }
  public resetProvider() {
    this._provider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get providerInput() {
    return this._provider;
  }

  // url - computed: false, optional: false, required: true
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }
}
export interface DnsZoneSecondaryTsigKeyValueVaultSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/dns_zone#key DnsZone#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/dns_zone#location DnsZone#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/dns_zone#provider DnsZone#provider}
  */
  readonly provider: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/dns_zone#secret_encoding DnsZone#secret_encoding}
  */
  readonly secretEncoding?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/dns_zone#version DnsZone#version}
  */
  readonly version?: number;
}

export function dnsZoneSecondaryTsigKeyValueVaultSecretInfoToTerraform(struct?: DnsZoneSecondaryTsigKeyValueVaultSecretInfoOutputReference | DnsZoneSecondaryTsigKeyValueVaultSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    location: cdktf.stringToTerraform(struct!.location),
    provider: cdktf.stringToTerraform(struct!.provider),
    secret_encoding: cdktf.stringToTerraform(struct!.secretEncoding),
    version: cdktf.numberToTerraform(struct!.version),
  }
}


export function dnsZoneSecondaryTsigKeyValueVaultSecretInfoToHclTerraform(struct?: DnsZoneSecondaryTsigKeyValueVaultSecretInfoOutputReference | DnsZoneSecondaryTsigKeyValueVaultSecretInfo): any {
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
    location: {
      value: cdktf.stringToHclTerraform(struct!.location),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    provider: {
      value: cdktf.stringToHclTerraform(struct!.provider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret_encoding: {
      value: cdktf.stringToHclTerraform(struct!.secretEncoding),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    version: {
      value: cdktf.numberToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DnsZoneSecondaryTsigKeyValueVaultSecretInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DnsZoneSecondaryTsigKeyValueVaultSecretInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._location !== undefined) {
      hasAnyValues = true;
      internalValueResult.location = this._location;
    }
    if (this._provider !== undefined) {
      hasAnyValues = true;
      internalValueResult.provider = this._provider;
    }
    if (this._secretEncoding !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretEncoding = this._secretEncoding;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DnsZoneSecondaryTsigKeyValueVaultSecretInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._key = undefined;
      this._location = undefined;
      this._provider = undefined;
      this._secretEncoding = undefined;
      this._version = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._key = value.key;
      this._location = value.location;
      this._provider = value.provider;
      this._secretEncoding = value.secretEncoding;
      this._version = value.version;
    }
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // location - computed: false, optional: false, required: true
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
  }

  // provider - computed: false, optional: false, required: true
  private _provider?: string; 
  public get provider() {
    return this.getStringAttribute('provider');
  }
  public set provider(value: string) {
    this._provider = value;
  }
  // Temporarily expose input value. Use with caution.
  public get providerInput() {
    return this._provider;
  }

  // secret_encoding - computed: false, optional: true, required: false
  private _secretEncoding?: string; 
  public get secretEncoding() {
    return this.getStringAttribute('secret_encoding');
  }
  public set secretEncoding(value: string) {
    this._secretEncoding = value;
  }
  public resetSecretEncoding() {
    this._secretEncoding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretEncodingInput() {
    return this._secretEncoding;
  }

  // version - computed: false, optional: true, required: false
  private _version?: number; 
  public get version() {
    return this.getNumberAttribute('version');
  }
  public set version(value: number) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }
}
export interface DnsZoneSecondaryTsigKeyValueWingmanSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/dns_zone#name DnsZone#name}
  */
  readonly name: string;
}

export function dnsZoneSecondaryTsigKeyValueWingmanSecretInfoToTerraform(struct?: DnsZoneSecondaryTsigKeyValueWingmanSecretInfoOutputReference | DnsZoneSecondaryTsigKeyValueWingmanSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dnsZoneSecondaryTsigKeyValueWingmanSecretInfoToHclTerraform(struct?: DnsZoneSecondaryTsigKeyValueWingmanSecretInfoOutputReference | DnsZoneSecondaryTsigKeyValueWingmanSecretInfo): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DnsZoneSecondaryTsigKeyValueWingmanSecretInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DnsZoneSecondaryTsigKeyValueWingmanSecretInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DnsZoneSecondaryTsigKeyValueWingmanSecretInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
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
}
export interface DnsZoneSecondaryTsigKeyValue {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/dns_zone#secret_encoding_type DnsZone#secret_encoding_type}
  */
  readonly secretEncodingType?: string;
  /**
  * blindfold_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/dns_zone#blindfold_secret_info DnsZone#blindfold_secret_info}
  */
  readonly blindfoldSecretInfo?: DnsZoneSecondaryTsigKeyValueBlindfoldSecretInfo;
  /**
  * blindfold_secret_info_internal block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/dns_zone#blindfold_secret_info_internal DnsZone#blindfold_secret_info_internal}
  */
  readonly blindfoldSecretInfoInternal?: DnsZoneSecondaryTsigKeyValueBlindfoldSecretInfoInternal;
  /**
  * clear_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/dns_zone#clear_secret_info DnsZone#clear_secret_info}
  */
  readonly clearSecretInfo?: DnsZoneSecondaryTsigKeyValueClearSecretInfo;
  /**
  * vault_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/dns_zone#vault_secret_info DnsZone#vault_secret_info}
  */
  readonly vaultSecretInfo?: DnsZoneSecondaryTsigKeyValueVaultSecretInfo;
  /**
  * wingman_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/dns_zone#wingman_secret_info DnsZone#wingman_secret_info}
  */
  readonly wingmanSecretInfo?: DnsZoneSecondaryTsigKeyValueWingmanSecretInfo;
}

export function dnsZoneSecondaryTsigKeyValueToTerraform(struct?: DnsZoneSecondaryTsigKeyValueOutputReference | DnsZoneSecondaryTsigKeyValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    secret_encoding_type: cdktf.stringToTerraform(struct!.secretEncodingType),
    blindfold_secret_info: dnsZoneSecondaryTsigKeyValueBlindfoldSecretInfoToTerraform(struct!.blindfoldSecretInfo),
    blindfold_secret_info_internal: dnsZoneSecondaryTsigKeyValueBlindfoldSecretInfoInternalToTerraform(struct!.blindfoldSecretInfoInternal),
    clear_secret_info: dnsZoneSecondaryTsigKeyValueClearSecretInfoToTerraform(struct!.clearSecretInfo),
    vault_secret_info: dnsZoneSecondaryTsigKeyValueVaultSecretInfoToTerraform(struct!.vaultSecretInfo),
    wingman_secret_info: dnsZoneSecondaryTsigKeyValueWingmanSecretInfoToTerraform(struct!.wingmanSecretInfo),
  }
}


export function dnsZoneSecondaryTsigKeyValueToHclTerraform(struct?: DnsZoneSecondaryTsigKeyValueOutputReference | DnsZoneSecondaryTsigKeyValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    secret_encoding_type: {
      value: cdktf.stringToHclTerraform(struct!.secretEncodingType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    blindfold_secret_info: {
      value: dnsZoneSecondaryTsigKeyValueBlindfoldSecretInfoToHclTerraform(struct!.blindfoldSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "DnsZoneSecondaryTsigKeyValueBlindfoldSecretInfoList",
    },
    blindfold_secret_info_internal: {
      value: dnsZoneSecondaryTsigKeyValueBlindfoldSecretInfoInternalToHclTerraform(struct!.blindfoldSecretInfoInternal),
      isBlock: true,
      type: "list",
      storageClassType: "DnsZoneSecondaryTsigKeyValueBlindfoldSecretInfoInternalList",
    },
    clear_secret_info: {
      value: dnsZoneSecondaryTsigKeyValueClearSecretInfoToHclTerraform(struct!.clearSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "DnsZoneSecondaryTsigKeyValueClearSecretInfoList",
    },
    vault_secret_info: {
      value: dnsZoneSecondaryTsigKeyValueVaultSecretInfoToHclTerraform(struct!.vaultSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "DnsZoneSecondaryTsigKeyValueVaultSecretInfoList",
    },
    wingman_secret_info: {
      value: dnsZoneSecondaryTsigKeyValueWingmanSecretInfoToHclTerraform(struct!.wingmanSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "DnsZoneSecondaryTsigKeyValueWingmanSecretInfoList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DnsZoneSecondaryTsigKeyValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DnsZoneSecondaryTsigKeyValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._secretEncodingType !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretEncodingType = this._secretEncodingType;
    }
    if (this._blindfoldSecretInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.blindfoldSecretInfo = this._blindfoldSecretInfo?.internalValue;
    }
    if (this._blindfoldSecretInfoInternal?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.blindfoldSecretInfoInternal = this._blindfoldSecretInfoInternal?.internalValue;
    }
    if (this._clearSecretInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clearSecretInfo = this._clearSecretInfo?.internalValue;
    }
    if (this._vaultSecretInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vaultSecretInfo = this._vaultSecretInfo?.internalValue;
    }
    if (this._wingmanSecretInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.wingmanSecretInfo = this._wingmanSecretInfo?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DnsZoneSecondaryTsigKeyValue | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._secretEncodingType = undefined;
      this._blindfoldSecretInfo.internalValue = undefined;
      this._blindfoldSecretInfoInternal.internalValue = undefined;
      this._clearSecretInfo.internalValue = undefined;
      this._vaultSecretInfo.internalValue = undefined;
      this._wingmanSecretInfo.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._secretEncodingType = value.secretEncodingType;
      this._blindfoldSecretInfo.internalValue = value.blindfoldSecretInfo;
      this._blindfoldSecretInfoInternal.internalValue = value.blindfoldSecretInfoInternal;
      this._clearSecretInfo.internalValue = value.clearSecretInfo;
      this._vaultSecretInfo.internalValue = value.vaultSecretInfo;
      this._wingmanSecretInfo.internalValue = value.wingmanSecretInfo;
    }
  }

  // secret_encoding_type - computed: false, optional: true, required: false
  private _secretEncodingType?: string; 
  public get secretEncodingType() {
    return this.getStringAttribute('secret_encoding_type');
  }
  public set secretEncodingType(value: string) {
    this._secretEncodingType = value;
  }
  public resetSecretEncodingType() {
    this._secretEncodingType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretEncodingTypeInput() {
    return this._secretEncodingType;
  }

  // blindfold_secret_info - computed: false, optional: true, required: false
  private _blindfoldSecretInfo = new DnsZoneSecondaryTsigKeyValueBlindfoldSecretInfoOutputReference(this, "blindfold_secret_info");
  public get blindfoldSecretInfo() {
    return this._blindfoldSecretInfo;
  }
  public putBlindfoldSecretInfo(value: DnsZoneSecondaryTsigKeyValueBlindfoldSecretInfo) {
    this._blindfoldSecretInfo.internalValue = value;
  }
  public resetBlindfoldSecretInfo() {
    this._blindfoldSecretInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blindfoldSecretInfoInput() {
    return this._blindfoldSecretInfo.internalValue;
  }

  // blindfold_secret_info_internal - computed: false, optional: true, required: false
  private _blindfoldSecretInfoInternal = new DnsZoneSecondaryTsigKeyValueBlindfoldSecretInfoInternalOutputReference(this, "blindfold_secret_info_internal");
  public get blindfoldSecretInfoInternal() {
    return this._blindfoldSecretInfoInternal;
  }
  public putBlindfoldSecretInfoInternal(value: DnsZoneSecondaryTsigKeyValueBlindfoldSecretInfoInternal) {
    this._blindfoldSecretInfoInternal.internalValue = value;
  }
  public resetBlindfoldSecretInfoInternal() {
    this._blindfoldSecretInfoInternal.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blindfoldSecretInfoInternalInput() {
    return this._blindfoldSecretInfoInternal.internalValue;
  }

  // clear_secret_info - computed: false, optional: true, required: false
  private _clearSecretInfo = new DnsZoneSecondaryTsigKeyValueClearSecretInfoOutputReference(this, "clear_secret_info");
  public get clearSecretInfo() {
    return this._clearSecretInfo;
  }
  public putClearSecretInfo(value: DnsZoneSecondaryTsigKeyValueClearSecretInfo) {
    this._clearSecretInfo.internalValue = value;
  }
  public resetClearSecretInfo() {
    this._clearSecretInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clearSecretInfoInput() {
    return this._clearSecretInfo.internalValue;
  }

  // vault_secret_info - computed: false, optional: true, required: false
  private _vaultSecretInfo = new DnsZoneSecondaryTsigKeyValueVaultSecretInfoOutputReference(this, "vault_secret_info");
  public get vaultSecretInfo() {
    return this._vaultSecretInfo;
  }
  public putVaultSecretInfo(value: DnsZoneSecondaryTsigKeyValueVaultSecretInfo) {
    this._vaultSecretInfo.internalValue = value;
  }
  public resetVaultSecretInfo() {
    this._vaultSecretInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vaultSecretInfoInput() {
    return this._vaultSecretInfo.internalValue;
  }

  // wingman_secret_info - computed: false, optional: true, required: false
  private _wingmanSecretInfo = new DnsZoneSecondaryTsigKeyValueWingmanSecretInfoOutputReference(this, "wingman_secret_info");
  public get wingmanSecretInfo() {
    return this._wingmanSecretInfo;
  }
  public putWingmanSecretInfo(value: DnsZoneSecondaryTsigKeyValueWingmanSecretInfo) {
    this._wingmanSecretInfo.internalValue = value;
  }
  public resetWingmanSecretInfo() {
    this._wingmanSecretInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wingmanSecretInfoInput() {
    return this._wingmanSecretInfo.internalValue;
  }
}
export interface DnsZoneSecondary {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/dns_zone#primary_servers DnsZone#primary_servers}
  */
  readonly primaryServers: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/dns_zone#tsig_key_algorithm DnsZone#tsig_key_algorithm}
  */
  readonly tsigKeyAlgorithm?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/dns_zone#tsig_key_name DnsZone#tsig_key_name}
  */
  readonly tsigKeyName?: string;
  /**
  * tsig_key_value block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/dns_zone#tsig_key_value DnsZone#tsig_key_value}
  */
  readonly tsigKeyValue?: DnsZoneSecondaryTsigKeyValue;
}

export function dnsZoneSecondaryToTerraform(struct?: DnsZoneSecondaryOutputReference | DnsZoneSecondary): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    primary_servers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.primaryServers),
    tsig_key_algorithm: cdktf.stringToTerraform(struct!.tsigKeyAlgorithm),
    tsig_key_name: cdktf.stringToTerraform(struct!.tsigKeyName),
    tsig_key_value: dnsZoneSecondaryTsigKeyValueToTerraform(struct!.tsigKeyValue),
  }
}


export function dnsZoneSecondaryToHclTerraform(struct?: DnsZoneSecondaryOutputReference | DnsZoneSecondary): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    primary_servers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.primaryServers),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    tsig_key_algorithm: {
      value: cdktf.stringToHclTerraform(struct!.tsigKeyAlgorithm),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tsig_key_name: {
      value: cdktf.stringToHclTerraform(struct!.tsigKeyName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tsig_key_value: {
      value: dnsZoneSecondaryTsigKeyValueToHclTerraform(struct!.tsigKeyValue),
      isBlock: true,
      type: "list",
      storageClassType: "DnsZoneSecondaryTsigKeyValueList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DnsZoneSecondaryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DnsZoneSecondary | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._primaryServers !== undefined) {
      hasAnyValues = true;
      internalValueResult.primaryServers = this._primaryServers;
    }
    if (this._tsigKeyAlgorithm !== undefined) {
      hasAnyValues = true;
      internalValueResult.tsigKeyAlgorithm = this._tsigKeyAlgorithm;
    }
    if (this._tsigKeyName !== undefined) {
      hasAnyValues = true;
      internalValueResult.tsigKeyName = this._tsigKeyName;
    }
    if (this._tsigKeyValue?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tsigKeyValue = this._tsigKeyValue?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DnsZoneSecondary | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._primaryServers = undefined;
      this._tsigKeyAlgorithm = undefined;
      this._tsigKeyName = undefined;
      this._tsigKeyValue.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._primaryServers = value.primaryServers;
      this._tsigKeyAlgorithm = value.tsigKeyAlgorithm;
      this._tsigKeyName = value.tsigKeyName;
      this._tsigKeyValue.internalValue = value.tsigKeyValue;
    }
  }

  // primary_servers - computed: false, optional: false, required: true
  private _primaryServers?: string[]; 
  public get primaryServers() {
    return this.getListAttribute('primary_servers');
  }
  public set primaryServers(value: string[]) {
    this._primaryServers = value;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryServersInput() {
    return this._primaryServers;
  }

  // tsig_key_algorithm - computed: false, optional: true, required: false
  private _tsigKeyAlgorithm?: string; 
  public get tsigKeyAlgorithm() {
    return this.getStringAttribute('tsig_key_algorithm');
  }
  public set tsigKeyAlgorithm(value: string) {
    this._tsigKeyAlgorithm = value;
  }
  public resetTsigKeyAlgorithm() {
    this._tsigKeyAlgorithm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tsigKeyAlgorithmInput() {
    return this._tsigKeyAlgorithm;
  }

  // tsig_key_name - computed: false, optional: true, required: false
  private _tsigKeyName?: string; 
  public get tsigKeyName() {
    return this.getStringAttribute('tsig_key_name');
  }
  public set tsigKeyName(value: string) {
    this._tsigKeyName = value;
  }
  public resetTsigKeyName() {
    this._tsigKeyName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tsigKeyNameInput() {
    return this._tsigKeyName;
  }

  // tsig_key_value - computed: false, optional: true, required: false
  private _tsigKeyValue = new DnsZoneSecondaryTsigKeyValueOutputReference(this, "tsig_key_value");
  public get tsigKeyValue() {
    return this._tsigKeyValue;
  }
  public putTsigKeyValue(value: DnsZoneSecondaryTsigKeyValue) {
    this._tsigKeyValue.internalValue = value;
  }
  public resetTsigKeyValue() {
    this._tsigKeyValue.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tsigKeyValueInput() {
    return this._tsigKeyValue.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/dns_zone volterra_dns_zone}
*/
export class DnsZone extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "volterra_dns_zone";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DnsZone resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DnsZone to import
  * @param importFromId The id of the existing DnsZone that should be imported. Refer to the {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/dns_zone#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DnsZone to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "volterra_dns_zone", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/dns_zone volterra_dns_zone} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DnsZoneConfig
  */
  public constructor(scope: Construct, id: string, config: DnsZoneConfig) {
    super(scope, id, {
      terraformResourceType: 'volterra_dns_zone',
      terraformGeneratorMetadata: {
        providerName: 'volterra',
        providerVersion: '0.11.46',
        providerVersionConstraint: '0.11.46'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._annotations = config.annotations;
    this._description = config.description;
    this._disable = config.disable;
    this._id = config.id;
    this._labels = config.labels;
    this._name = config.name;
    this._namespace = config.namespace;
    this._primary.internalValue = config.primary;
    this._secondary.internalValue = config.secondary;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // annotations - computed: false, optional: true, required: false
  private _annotations?: { [key: string]: string }; 
  public get annotations() {
    return this.getStringMapAttribute('annotations');
  }
  public set annotations(value: { [key: string]: string }) {
    this._annotations = value;
  }
  public resetAnnotations() {
    this._annotations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get annotationsInput() {
    return this._annotations;
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

  // disable - computed: false, optional: true, required: false
  private _disable?: boolean | cdktf.IResolvable; 
  public get disable() {
    return this.getBooleanAttribute('disable');
  }
  public set disable(value: boolean | cdktf.IResolvable) {
    this._disable = value;
  }
  public resetDisable() {
    this._disable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableInput() {
    return this._disable;
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

  // labels - computed: false, optional: true, required: false
  private _labels?: { [key: string]: string }; 
  public get labels() {
    return this.getStringMapAttribute('labels');
  }
  public set labels(value: { [key: string]: string }) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels;
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

  // namespace - computed: false, optional: false, required: true
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // primary - computed: false, optional: true, required: false
  private _primary = new DnsZonePrimaryOutputReference(this, "primary");
  public get primary() {
    return this._primary;
  }
  public putPrimary(value: DnsZonePrimary) {
    this._primary.internalValue = value;
  }
  public resetPrimary() {
    this._primary.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryInput() {
    return this._primary.internalValue;
  }

  // secondary - computed: false, optional: true, required: false
  private _secondary = new DnsZoneSecondaryOutputReference(this, "secondary");
  public get secondary() {
    return this._secondary;
  }
  public putSecondary(value: DnsZoneSecondary) {
    this._secondary.internalValue = value;
  }
  public resetSecondary() {
    this._secondary.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secondaryInput() {
    return this._secondary.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      annotations: cdktf.hashMapper(cdktf.stringToTerraform)(this._annotations),
      description: cdktf.stringToTerraform(this._description),
      disable: cdktf.booleanToTerraform(this._disable),
      id: cdktf.stringToTerraform(this._id),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      name: cdktf.stringToTerraform(this._name),
      namespace: cdktf.stringToTerraform(this._namespace),
      primary: dnsZonePrimaryToTerraform(this._primary.internalValue),
      secondary: dnsZoneSecondaryToTerraform(this._secondary.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      annotations: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._annotations),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      disable: {
        value: cdktf.booleanToHclTerraform(this._disable),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      labels: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._labels),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      namespace: {
        value: cdktf.stringToHclTerraform(this._namespace),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      primary: {
        value: dnsZonePrimaryToHclTerraform(this._primary.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DnsZonePrimaryList",
      },
      secondary: {
        value: dnsZoneSecondaryToHclTerraform(this._secondary.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DnsZoneSecondaryList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
