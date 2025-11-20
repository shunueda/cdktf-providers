// https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/dns_zone_record
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DnsZoneRecordConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/dns_zone_record#dns_zone_name DnsZoneRecord#dns_zone_name}
  */
  readonly dnsZoneName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/dns_zone_record#group_name DnsZoneRecord#group_name}
  */
  readonly groupName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/dns_zone_record#id DnsZoneRecord#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * rrset block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/dns_zone_record#rrset DnsZoneRecord#rrset}
  */
  readonly rrset?: DnsZoneRecordRrset[] | cdktf.IResolvable;
}
export interface DnsZoneRecordRrsetARecord {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/dns_zone_record#name DnsZoneRecord#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/dns_zone_record#values DnsZoneRecord#values}
  */
  readonly values: string[];
}

export function dnsZoneRecordRrsetARecordToTerraform(struct?: DnsZoneRecordRrsetARecord | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function dnsZoneRecordRrsetARecordToHclTerraform(struct?: DnsZoneRecordRrsetARecord | cdktf.IResolvable): any {
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

export class DnsZoneRecordRrsetARecordOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DnsZoneRecordRrsetARecord | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
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

  public set internalValue(value: DnsZoneRecordRrsetARecord | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
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

export class DnsZoneRecordRrsetARecordList extends cdktf.ComplexList {
  public internalValue? : DnsZoneRecordRrsetARecord[] | cdktf.IResolvable

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
  public get(index: number): DnsZoneRecordRrsetARecordOutputReference {
    return new DnsZoneRecordRrsetARecordOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DnsZoneRecordRrsetAaaaRecord {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/dns_zone_record#name DnsZoneRecord#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/dns_zone_record#values DnsZoneRecord#values}
  */
  readonly values: string[];
}

export function dnsZoneRecordRrsetAaaaRecordToTerraform(struct?: DnsZoneRecordRrsetAaaaRecord | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function dnsZoneRecordRrsetAaaaRecordToHclTerraform(struct?: DnsZoneRecordRrsetAaaaRecord | cdktf.IResolvable): any {
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

export class DnsZoneRecordRrsetAaaaRecordOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DnsZoneRecordRrsetAaaaRecord | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
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

  public set internalValue(value: DnsZoneRecordRrsetAaaaRecord | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
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

export class DnsZoneRecordRrsetAaaaRecordList extends cdktf.ComplexList {
  public internalValue? : DnsZoneRecordRrsetAaaaRecord[] | cdktf.IResolvable

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
  public get(index: number): DnsZoneRecordRrsetAaaaRecordOutputReference {
    return new DnsZoneRecordRrsetAaaaRecordOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DnsZoneRecordRrsetAfsdbRecordValues {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/dns_zone_record#hostname DnsZoneRecord#hostname}
  */
  readonly hostname: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/dns_zone_record#subtype DnsZoneRecord#subtype}
  */
  readonly subtype: string;
}

export function dnsZoneRecordRrsetAfsdbRecordValuesToTerraform(struct?: DnsZoneRecordRrsetAfsdbRecordValues | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hostname: cdktf.stringToTerraform(struct!.hostname),
    subtype: cdktf.stringToTerraform(struct!.subtype),
  }
}


export function dnsZoneRecordRrsetAfsdbRecordValuesToHclTerraform(struct?: DnsZoneRecordRrsetAfsdbRecordValues | cdktf.IResolvable): any {
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

export class DnsZoneRecordRrsetAfsdbRecordValuesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DnsZoneRecordRrsetAfsdbRecordValues | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DnsZoneRecordRrsetAfsdbRecordValues | cdktf.IResolvable | undefined) {
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

export class DnsZoneRecordRrsetAfsdbRecordValuesList extends cdktf.ComplexList {
  public internalValue? : DnsZoneRecordRrsetAfsdbRecordValues[] | cdktf.IResolvable

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
  public get(index: number): DnsZoneRecordRrsetAfsdbRecordValuesOutputReference {
    return new DnsZoneRecordRrsetAfsdbRecordValuesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DnsZoneRecordRrsetAfsdbRecord {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/dns_zone_record#name DnsZoneRecord#name}
  */
  readonly name?: string;
  /**
  * values block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/dns_zone_record#values DnsZoneRecord#values}
  */
  readonly values: DnsZoneRecordRrsetAfsdbRecordValues[] | cdktf.IResolvable;
}

export function dnsZoneRecordRrsetAfsdbRecordToTerraform(struct?: DnsZoneRecordRrsetAfsdbRecord | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    values: cdktf.listMapper(dnsZoneRecordRrsetAfsdbRecordValuesToTerraform, true)(struct!.values),
  }
}


export function dnsZoneRecordRrsetAfsdbRecordToHclTerraform(struct?: DnsZoneRecordRrsetAfsdbRecord | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(dnsZoneRecordRrsetAfsdbRecordValuesToHclTerraform, true)(struct!.values),
      isBlock: true,
      type: "list",
      storageClassType: "DnsZoneRecordRrsetAfsdbRecordValuesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DnsZoneRecordRrsetAfsdbRecordOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DnsZoneRecordRrsetAfsdbRecord | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
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

  public set internalValue(value: DnsZoneRecordRrsetAfsdbRecord | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._values.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
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
  private _values = new DnsZoneRecordRrsetAfsdbRecordValuesList(this, "values", false);
  public get values() {
    return this._values;
  }
  public putValues(value: DnsZoneRecordRrsetAfsdbRecordValues[] | cdktf.IResolvable) {
    this._values.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values.internalValue;
  }
}

export class DnsZoneRecordRrsetAfsdbRecordList extends cdktf.ComplexList {
  public internalValue? : DnsZoneRecordRrsetAfsdbRecord[] | cdktf.IResolvable

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
  public get(index: number): DnsZoneRecordRrsetAfsdbRecordOutputReference {
    return new DnsZoneRecordRrsetAfsdbRecordOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DnsZoneRecordRrsetAliasRecord {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/dns_zone_record#name DnsZoneRecord#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/dns_zone_record#value DnsZoneRecord#value}
  */
  readonly value?: string;
}

export function dnsZoneRecordRrsetAliasRecordToTerraform(struct?: DnsZoneRecordRrsetAliasRecord | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dnsZoneRecordRrsetAliasRecordToHclTerraform(struct?: DnsZoneRecordRrsetAliasRecord | cdktf.IResolvable): any {
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

export class DnsZoneRecordRrsetAliasRecordOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DnsZoneRecordRrsetAliasRecord | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
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

  public set internalValue(value: DnsZoneRecordRrsetAliasRecord | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
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

export class DnsZoneRecordRrsetAliasRecordList extends cdktf.ComplexList {
  public internalValue? : DnsZoneRecordRrsetAliasRecord[] | cdktf.IResolvable

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
  public get(index: number): DnsZoneRecordRrsetAliasRecordOutputReference {
    return new DnsZoneRecordRrsetAliasRecordOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DnsZoneRecordRrsetCaaRecordValues {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/dns_zone_record#flags DnsZoneRecord#flags}
  */
  readonly flags?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/dns_zone_record#tag DnsZoneRecord#tag}
  */
  readonly tag?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/dns_zone_record#value DnsZoneRecord#value}
  */
  readonly value?: string;
}

export function dnsZoneRecordRrsetCaaRecordValuesToTerraform(struct?: DnsZoneRecordRrsetCaaRecordValues | cdktf.IResolvable): any {
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


export function dnsZoneRecordRrsetCaaRecordValuesToHclTerraform(struct?: DnsZoneRecordRrsetCaaRecordValues | cdktf.IResolvable): any {
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

export class DnsZoneRecordRrsetCaaRecordValuesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DnsZoneRecordRrsetCaaRecordValues | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DnsZoneRecordRrsetCaaRecordValues | cdktf.IResolvable | undefined) {
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

export class DnsZoneRecordRrsetCaaRecordValuesList extends cdktf.ComplexList {
  public internalValue? : DnsZoneRecordRrsetCaaRecordValues[] | cdktf.IResolvable

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
  public get(index: number): DnsZoneRecordRrsetCaaRecordValuesOutputReference {
    return new DnsZoneRecordRrsetCaaRecordValuesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DnsZoneRecordRrsetCaaRecord {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/dns_zone_record#name DnsZoneRecord#name}
  */
  readonly name?: string;
  /**
  * values block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/dns_zone_record#values DnsZoneRecord#values}
  */
  readonly values?: DnsZoneRecordRrsetCaaRecordValues[] | cdktf.IResolvable;
}

export function dnsZoneRecordRrsetCaaRecordToTerraform(struct?: DnsZoneRecordRrsetCaaRecord | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    values: cdktf.listMapper(dnsZoneRecordRrsetCaaRecordValuesToTerraform, true)(struct!.values),
  }
}


export function dnsZoneRecordRrsetCaaRecordToHclTerraform(struct?: DnsZoneRecordRrsetCaaRecord | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(dnsZoneRecordRrsetCaaRecordValuesToHclTerraform, true)(struct!.values),
      isBlock: true,
      type: "list",
      storageClassType: "DnsZoneRecordRrsetCaaRecordValuesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DnsZoneRecordRrsetCaaRecordOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DnsZoneRecordRrsetCaaRecord | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
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

  public set internalValue(value: DnsZoneRecordRrsetCaaRecord | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._values.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
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
  private _values = new DnsZoneRecordRrsetCaaRecordValuesList(this, "values", false);
  public get values() {
    return this._values;
  }
  public putValues(value: DnsZoneRecordRrsetCaaRecordValues[] | cdktf.IResolvable) {
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

export class DnsZoneRecordRrsetCaaRecordList extends cdktf.ComplexList {
  public internalValue? : DnsZoneRecordRrsetCaaRecord[] | cdktf.IResolvable

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
  public get(index: number): DnsZoneRecordRrsetCaaRecordOutputReference {
    return new DnsZoneRecordRrsetCaaRecordOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DnsZoneRecordRrsetCdsRecordValuesSha1Digest {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/dns_zone_record#digest DnsZoneRecord#digest}
  */
  readonly digest: string;
}

export function dnsZoneRecordRrsetCdsRecordValuesSha1DigestToTerraform(struct?: DnsZoneRecordRrsetCdsRecordValuesSha1Digest | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    digest: cdktf.stringToTerraform(struct!.digest),
  }
}


export function dnsZoneRecordRrsetCdsRecordValuesSha1DigestToHclTerraform(struct?: DnsZoneRecordRrsetCdsRecordValuesSha1Digest | cdktf.IResolvable): any {
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

export class DnsZoneRecordRrsetCdsRecordValuesSha1DigestOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DnsZoneRecordRrsetCdsRecordValuesSha1Digest | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._digest !== undefined) {
      hasAnyValues = true;
      internalValueResult.digest = this._digest;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DnsZoneRecordRrsetCdsRecordValuesSha1Digest | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._digest = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
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

export class DnsZoneRecordRrsetCdsRecordValuesSha1DigestList extends cdktf.ComplexList {
  public internalValue? : DnsZoneRecordRrsetCdsRecordValuesSha1Digest[] | cdktf.IResolvable

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
  public get(index: number): DnsZoneRecordRrsetCdsRecordValuesSha1DigestOutputReference {
    return new DnsZoneRecordRrsetCdsRecordValuesSha1DigestOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DnsZoneRecordRrsetCdsRecordValuesSha256Digest {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/dns_zone_record#digest DnsZoneRecord#digest}
  */
  readonly digest: string;
}

export function dnsZoneRecordRrsetCdsRecordValuesSha256DigestToTerraform(struct?: DnsZoneRecordRrsetCdsRecordValuesSha256Digest | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    digest: cdktf.stringToTerraform(struct!.digest),
  }
}


export function dnsZoneRecordRrsetCdsRecordValuesSha256DigestToHclTerraform(struct?: DnsZoneRecordRrsetCdsRecordValuesSha256Digest | cdktf.IResolvable): any {
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

export class DnsZoneRecordRrsetCdsRecordValuesSha256DigestOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DnsZoneRecordRrsetCdsRecordValuesSha256Digest | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._digest !== undefined) {
      hasAnyValues = true;
      internalValueResult.digest = this._digest;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DnsZoneRecordRrsetCdsRecordValuesSha256Digest | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._digest = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
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

export class DnsZoneRecordRrsetCdsRecordValuesSha256DigestList extends cdktf.ComplexList {
  public internalValue? : DnsZoneRecordRrsetCdsRecordValuesSha256Digest[] | cdktf.IResolvable

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
  public get(index: number): DnsZoneRecordRrsetCdsRecordValuesSha256DigestOutputReference {
    return new DnsZoneRecordRrsetCdsRecordValuesSha256DigestOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DnsZoneRecordRrsetCdsRecordValuesSha384Digest {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/dns_zone_record#digest DnsZoneRecord#digest}
  */
  readonly digest: string;
}

export function dnsZoneRecordRrsetCdsRecordValuesSha384DigestToTerraform(struct?: DnsZoneRecordRrsetCdsRecordValuesSha384Digest | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    digest: cdktf.stringToTerraform(struct!.digest),
  }
}


export function dnsZoneRecordRrsetCdsRecordValuesSha384DigestToHclTerraform(struct?: DnsZoneRecordRrsetCdsRecordValuesSha384Digest | cdktf.IResolvable): any {
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

export class DnsZoneRecordRrsetCdsRecordValuesSha384DigestOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DnsZoneRecordRrsetCdsRecordValuesSha384Digest | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._digest !== undefined) {
      hasAnyValues = true;
      internalValueResult.digest = this._digest;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DnsZoneRecordRrsetCdsRecordValuesSha384Digest | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._digest = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
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

export class DnsZoneRecordRrsetCdsRecordValuesSha384DigestList extends cdktf.ComplexList {
  public internalValue? : DnsZoneRecordRrsetCdsRecordValuesSha384Digest[] | cdktf.IResolvable

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
  public get(index: number): DnsZoneRecordRrsetCdsRecordValuesSha384DigestOutputReference {
    return new DnsZoneRecordRrsetCdsRecordValuesSha384DigestOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DnsZoneRecordRrsetCdsRecordValues {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/dns_zone_record#ds_key_algorithm DnsZoneRecord#ds_key_algorithm}
  */
  readonly dsKeyAlgorithm: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/dns_zone_record#key_tag DnsZoneRecord#key_tag}
  */
  readonly keyTag: number;
  /**
  * sha1_digest block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/dns_zone_record#sha1_digest DnsZoneRecord#sha1_digest}
  */
  readonly sha1Digest?: DnsZoneRecordRrsetCdsRecordValuesSha1Digest[] | cdktf.IResolvable;
  /**
  * sha256_digest block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/dns_zone_record#sha256_digest DnsZoneRecord#sha256_digest}
  */
  readonly sha256Digest?: DnsZoneRecordRrsetCdsRecordValuesSha256Digest[] | cdktf.IResolvable;
  /**
  * sha384_digest block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/dns_zone_record#sha384_digest DnsZoneRecord#sha384_digest}
  */
  readonly sha384Digest?: DnsZoneRecordRrsetCdsRecordValuesSha384Digest[] | cdktf.IResolvable;
}

export function dnsZoneRecordRrsetCdsRecordValuesToTerraform(struct?: DnsZoneRecordRrsetCdsRecordValues | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ds_key_algorithm: cdktf.stringToTerraform(struct!.dsKeyAlgorithm),
    key_tag: cdktf.numberToTerraform(struct!.keyTag),
    sha1_digest: cdktf.listMapper(dnsZoneRecordRrsetCdsRecordValuesSha1DigestToTerraform, true)(struct!.sha1Digest),
    sha256_digest: cdktf.listMapper(dnsZoneRecordRrsetCdsRecordValuesSha256DigestToTerraform, true)(struct!.sha256Digest),
    sha384_digest: cdktf.listMapper(dnsZoneRecordRrsetCdsRecordValuesSha384DigestToTerraform, true)(struct!.sha384Digest),
  }
}


export function dnsZoneRecordRrsetCdsRecordValuesToHclTerraform(struct?: DnsZoneRecordRrsetCdsRecordValues | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(dnsZoneRecordRrsetCdsRecordValuesSha1DigestToHclTerraform, true)(struct!.sha1Digest),
      isBlock: true,
      type: "set",
      storageClassType: "DnsZoneRecordRrsetCdsRecordValuesSha1DigestList",
    },
    sha256_digest: {
      value: cdktf.listMapperHcl(dnsZoneRecordRrsetCdsRecordValuesSha256DigestToHclTerraform, true)(struct!.sha256Digest),
      isBlock: true,
      type: "set",
      storageClassType: "DnsZoneRecordRrsetCdsRecordValuesSha256DigestList",
    },
    sha384_digest: {
      value: cdktf.listMapperHcl(dnsZoneRecordRrsetCdsRecordValuesSha384DigestToHclTerraform, true)(struct!.sha384Digest),
      isBlock: true,
      type: "set",
      storageClassType: "DnsZoneRecordRrsetCdsRecordValuesSha384DigestList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DnsZoneRecordRrsetCdsRecordValuesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DnsZoneRecordRrsetCdsRecordValues | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DnsZoneRecordRrsetCdsRecordValues | cdktf.IResolvable | undefined) {
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
  private _sha1Digest = new DnsZoneRecordRrsetCdsRecordValuesSha1DigestList(this, "sha1_digest", true);
  public get sha1Digest() {
    return this._sha1Digest;
  }
  public putSha1Digest(value: DnsZoneRecordRrsetCdsRecordValuesSha1Digest[] | cdktf.IResolvable) {
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
  private _sha256Digest = new DnsZoneRecordRrsetCdsRecordValuesSha256DigestList(this, "sha256_digest", true);
  public get sha256Digest() {
    return this._sha256Digest;
  }
  public putSha256Digest(value: DnsZoneRecordRrsetCdsRecordValuesSha256Digest[] | cdktf.IResolvable) {
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
  private _sha384Digest = new DnsZoneRecordRrsetCdsRecordValuesSha384DigestList(this, "sha384_digest", true);
  public get sha384Digest() {
    return this._sha384Digest;
  }
  public putSha384Digest(value: DnsZoneRecordRrsetCdsRecordValuesSha384Digest[] | cdktf.IResolvable) {
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

export class DnsZoneRecordRrsetCdsRecordValuesList extends cdktf.ComplexList {
  public internalValue? : DnsZoneRecordRrsetCdsRecordValues[] | cdktf.IResolvable

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
  public get(index: number): DnsZoneRecordRrsetCdsRecordValuesOutputReference {
    return new DnsZoneRecordRrsetCdsRecordValuesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DnsZoneRecordRrsetCdsRecord {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/dns_zone_record#name DnsZoneRecord#name}
  */
  readonly name?: string;
  /**
  * values block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/dns_zone_record#values DnsZoneRecord#values}
  */
  readonly values: DnsZoneRecordRrsetCdsRecordValues[] | cdktf.IResolvable;
}

export function dnsZoneRecordRrsetCdsRecordToTerraform(struct?: DnsZoneRecordRrsetCdsRecord | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    values: cdktf.listMapper(dnsZoneRecordRrsetCdsRecordValuesToTerraform, true)(struct!.values),
  }
}


export function dnsZoneRecordRrsetCdsRecordToHclTerraform(struct?: DnsZoneRecordRrsetCdsRecord | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(dnsZoneRecordRrsetCdsRecordValuesToHclTerraform, true)(struct!.values),
      isBlock: true,
      type: "list",
      storageClassType: "DnsZoneRecordRrsetCdsRecordValuesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DnsZoneRecordRrsetCdsRecordOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DnsZoneRecordRrsetCdsRecord | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
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

  public set internalValue(value: DnsZoneRecordRrsetCdsRecord | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._values.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
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
  private _values = new DnsZoneRecordRrsetCdsRecordValuesList(this, "values", false);
  public get values() {
    return this._values;
  }
  public putValues(value: DnsZoneRecordRrsetCdsRecordValues[] | cdktf.IResolvable) {
    this._values.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values.internalValue;
  }
}

export class DnsZoneRecordRrsetCdsRecordList extends cdktf.ComplexList {
  public internalValue? : DnsZoneRecordRrsetCdsRecord[] | cdktf.IResolvable

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
  public get(index: number): DnsZoneRecordRrsetCdsRecordOutputReference {
    return new DnsZoneRecordRrsetCdsRecordOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DnsZoneRecordRrsetCertRecordValues {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/dns_zone_record#algorithm DnsZoneRecord#algorithm}
  */
  readonly algorithm: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/dns_zone_record#cert_key_tag DnsZoneRecord#cert_key_tag}
  */
  readonly certKeyTag: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/dns_zone_record#cert_type DnsZoneRecord#cert_type}
  */
  readonly certType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/dns_zone_record#certificate DnsZoneRecord#certificate}
  */
  readonly certificate: string;
}

export function dnsZoneRecordRrsetCertRecordValuesToTerraform(struct?: DnsZoneRecordRrsetCertRecordValues | cdktf.IResolvable): any {
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


export function dnsZoneRecordRrsetCertRecordValuesToHclTerraform(struct?: DnsZoneRecordRrsetCertRecordValues | cdktf.IResolvable): any {
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

export class DnsZoneRecordRrsetCertRecordValuesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DnsZoneRecordRrsetCertRecordValues | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DnsZoneRecordRrsetCertRecordValues | cdktf.IResolvable | undefined) {
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

export class DnsZoneRecordRrsetCertRecordValuesList extends cdktf.ComplexList {
  public internalValue? : DnsZoneRecordRrsetCertRecordValues[] | cdktf.IResolvable

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
  public get(index: number): DnsZoneRecordRrsetCertRecordValuesOutputReference {
    return new DnsZoneRecordRrsetCertRecordValuesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DnsZoneRecordRrsetCertRecord {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/dns_zone_record#name DnsZoneRecord#name}
  */
  readonly name?: string;
  /**
  * values block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/dns_zone_record#values DnsZoneRecord#values}
  */
  readonly values: DnsZoneRecordRrsetCertRecordValues[] | cdktf.IResolvable;
}

export function dnsZoneRecordRrsetCertRecordToTerraform(struct?: DnsZoneRecordRrsetCertRecord | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    values: cdktf.listMapper(dnsZoneRecordRrsetCertRecordValuesToTerraform, true)(struct!.values),
  }
}


export function dnsZoneRecordRrsetCertRecordToHclTerraform(struct?: DnsZoneRecordRrsetCertRecord | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(dnsZoneRecordRrsetCertRecordValuesToHclTerraform, true)(struct!.values),
      isBlock: true,
      type: "list",
      storageClassType: "DnsZoneRecordRrsetCertRecordValuesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DnsZoneRecordRrsetCertRecordOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DnsZoneRecordRrsetCertRecord | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
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

  public set internalValue(value: DnsZoneRecordRrsetCertRecord | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._values.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
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
  private _values = new DnsZoneRecordRrsetCertRecordValuesList(this, "values", false);
  public get values() {
    return this._values;
  }
  public putValues(value: DnsZoneRecordRrsetCertRecordValues[] | cdktf.IResolvable) {
    this._values.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values.internalValue;
  }
}

export class DnsZoneRecordRrsetCertRecordList extends cdktf.ComplexList {
  public internalValue? : DnsZoneRecordRrsetCertRecord[] | cdktf.IResolvable

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
  public get(index: number): DnsZoneRecordRrsetCertRecordOutputReference {
    return new DnsZoneRecordRrsetCertRecordOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DnsZoneRecordRrsetCnameRecord {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/dns_zone_record#name DnsZoneRecord#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/dns_zone_record#value DnsZoneRecord#value}
  */
  readonly value?: string;
}

export function dnsZoneRecordRrsetCnameRecordToTerraform(struct?: DnsZoneRecordRrsetCnameRecord | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dnsZoneRecordRrsetCnameRecordToHclTerraform(struct?: DnsZoneRecordRrsetCnameRecord | cdktf.IResolvable): any {
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

export class DnsZoneRecordRrsetCnameRecordOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DnsZoneRecordRrsetCnameRecord | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
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

  public set internalValue(value: DnsZoneRecordRrsetCnameRecord | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
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

export class DnsZoneRecordRrsetCnameRecordList extends cdktf.ComplexList {
  public internalValue? : DnsZoneRecordRrsetCnameRecord[] | cdktf.IResolvable

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
  public get(index: number): DnsZoneRecordRrsetCnameRecordOutputReference {
    return new DnsZoneRecordRrsetCnameRecordOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DnsZoneRecordRrsetDlvRecordValuesSha1Digest {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/dns_zone_record#digest DnsZoneRecord#digest}
  */
  readonly digest: string;
}

export function dnsZoneRecordRrsetDlvRecordValuesSha1DigestToTerraform(struct?: DnsZoneRecordRrsetDlvRecordValuesSha1Digest | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    digest: cdktf.stringToTerraform(struct!.digest),
  }
}


export function dnsZoneRecordRrsetDlvRecordValuesSha1DigestToHclTerraform(struct?: DnsZoneRecordRrsetDlvRecordValuesSha1Digest | cdktf.IResolvable): any {
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

export class DnsZoneRecordRrsetDlvRecordValuesSha1DigestOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DnsZoneRecordRrsetDlvRecordValuesSha1Digest | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._digest !== undefined) {
      hasAnyValues = true;
      internalValueResult.digest = this._digest;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DnsZoneRecordRrsetDlvRecordValuesSha1Digest | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._digest = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
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

export class DnsZoneRecordRrsetDlvRecordValuesSha1DigestList extends cdktf.ComplexList {
  public internalValue? : DnsZoneRecordRrsetDlvRecordValuesSha1Digest[] | cdktf.IResolvable

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
  public get(index: number): DnsZoneRecordRrsetDlvRecordValuesSha1DigestOutputReference {
    return new DnsZoneRecordRrsetDlvRecordValuesSha1DigestOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DnsZoneRecordRrsetDlvRecordValuesSha256Digest {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/dns_zone_record#digest DnsZoneRecord#digest}
  */
  readonly digest: string;
}

export function dnsZoneRecordRrsetDlvRecordValuesSha256DigestToTerraform(struct?: DnsZoneRecordRrsetDlvRecordValuesSha256Digest | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    digest: cdktf.stringToTerraform(struct!.digest),
  }
}


export function dnsZoneRecordRrsetDlvRecordValuesSha256DigestToHclTerraform(struct?: DnsZoneRecordRrsetDlvRecordValuesSha256Digest | cdktf.IResolvable): any {
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

export class DnsZoneRecordRrsetDlvRecordValuesSha256DigestOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DnsZoneRecordRrsetDlvRecordValuesSha256Digest | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._digest !== undefined) {
      hasAnyValues = true;
      internalValueResult.digest = this._digest;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DnsZoneRecordRrsetDlvRecordValuesSha256Digest | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._digest = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
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

export class DnsZoneRecordRrsetDlvRecordValuesSha256DigestList extends cdktf.ComplexList {
  public internalValue? : DnsZoneRecordRrsetDlvRecordValuesSha256Digest[] | cdktf.IResolvable

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
  public get(index: number): DnsZoneRecordRrsetDlvRecordValuesSha256DigestOutputReference {
    return new DnsZoneRecordRrsetDlvRecordValuesSha256DigestOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DnsZoneRecordRrsetDlvRecordValuesSha384Digest {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/dns_zone_record#digest DnsZoneRecord#digest}
  */
  readonly digest: string;
}

export function dnsZoneRecordRrsetDlvRecordValuesSha384DigestToTerraform(struct?: DnsZoneRecordRrsetDlvRecordValuesSha384Digest | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    digest: cdktf.stringToTerraform(struct!.digest),
  }
}


export function dnsZoneRecordRrsetDlvRecordValuesSha384DigestToHclTerraform(struct?: DnsZoneRecordRrsetDlvRecordValuesSha384Digest | cdktf.IResolvable): any {
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

export class DnsZoneRecordRrsetDlvRecordValuesSha384DigestOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DnsZoneRecordRrsetDlvRecordValuesSha384Digest | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._digest !== undefined) {
      hasAnyValues = true;
      internalValueResult.digest = this._digest;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DnsZoneRecordRrsetDlvRecordValuesSha384Digest | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._digest = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
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

export class DnsZoneRecordRrsetDlvRecordValuesSha384DigestList extends cdktf.ComplexList {
  public internalValue? : DnsZoneRecordRrsetDlvRecordValuesSha384Digest[] | cdktf.IResolvable

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
  public get(index: number): DnsZoneRecordRrsetDlvRecordValuesSha384DigestOutputReference {
    return new DnsZoneRecordRrsetDlvRecordValuesSha384DigestOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DnsZoneRecordRrsetDlvRecordValues {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/dns_zone_record#ds_key_algorithm DnsZoneRecord#ds_key_algorithm}
  */
  readonly dsKeyAlgorithm: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/dns_zone_record#key_tag DnsZoneRecord#key_tag}
  */
  readonly keyTag: number;
  /**
  * sha1_digest block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/dns_zone_record#sha1_digest DnsZoneRecord#sha1_digest}
  */
  readonly sha1Digest?: DnsZoneRecordRrsetDlvRecordValuesSha1Digest[] | cdktf.IResolvable;
  /**
  * sha256_digest block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/dns_zone_record#sha256_digest DnsZoneRecord#sha256_digest}
  */
  readonly sha256Digest?: DnsZoneRecordRrsetDlvRecordValuesSha256Digest[] | cdktf.IResolvable;
  /**
  * sha384_digest block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/dns_zone_record#sha384_digest DnsZoneRecord#sha384_digest}
  */
  readonly sha384Digest?: DnsZoneRecordRrsetDlvRecordValuesSha384Digest[] | cdktf.IResolvable;
}

export function dnsZoneRecordRrsetDlvRecordValuesToTerraform(struct?: DnsZoneRecordRrsetDlvRecordValues | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ds_key_algorithm: cdktf.stringToTerraform(struct!.dsKeyAlgorithm),
    key_tag: cdktf.numberToTerraform(struct!.keyTag),
    sha1_digest: cdktf.listMapper(dnsZoneRecordRrsetDlvRecordValuesSha1DigestToTerraform, true)(struct!.sha1Digest),
    sha256_digest: cdktf.listMapper(dnsZoneRecordRrsetDlvRecordValuesSha256DigestToTerraform, true)(struct!.sha256Digest),
    sha384_digest: cdktf.listMapper(dnsZoneRecordRrsetDlvRecordValuesSha384DigestToTerraform, true)(struct!.sha384Digest),
  }
}


export function dnsZoneRecordRrsetDlvRecordValuesToHclTerraform(struct?: DnsZoneRecordRrsetDlvRecordValues | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(dnsZoneRecordRrsetDlvRecordValuesSha1DigestToHclTerraform, true)(struct!.sha1Digest),
      isBlock: true,
      type: "set",
      storageClassType: "DnsZoneRecordRrsetDlvRecordValuesSha1DigestList",
    },
    sha256_digest: {
      value: cdktf.listMapperHcl(dnsZoneRecordRrsetDlvRecordValuesSha256DigestToHclTerraform, true)(struct!.sha256Digest),
      isBlock: true,
      type: "set",
      storageClassType: "DnsZoneRecordRrsetDlvRecordValuesSha256DigestList",
    },
    sha384_digest: {
      value: cdktf.listMapperHcl(dnsZoneRecordRrsetDlvRecordValuesSha384DigestToHclTerraform, true)(struct!.sha384Digest),
      isBlock: true,
      type: "set",
      storageClassType: "DnsZoneRecordRrsetDlvRecordValuesSha384DigestList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DnsZoneRecordRrsetDlvRecordValuesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DnsZoneRecordRrsetDlvRecordValues | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DnsZoneRecordRrsetDlvRecordValues | cdktf.IResolvable | undefined) {
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
  private _sha1Digest = new DnsZoneRecordRrsetDlvRecordValuesSha1DigestList(this, "sha1_digest", true);
  public get sha1Digest() {
    return this._sha1Digest;
  }
  public putSha1Digest(value: DnsZoneRecordRrsetDlvRecordValuesSha1Digest[] | cdktf.IResolvable) {
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
  private _sha256Digest = new DnsZoneRecordRrsetDlvRecordValuesSha256DigestList(this, "sha256_digest", true);
  public get sha256Digest() {
    return this._sha256Digest;
  }
  public putSha256Digest(value: DnsZoneRecordRrsetDlvRecordValuesSha256Digest[] | cdktf.IResolvable) {
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
  private _sha384Digest = new DnsZoneRecordRrsetDlvRecordValuesSha384DigestList(this, "sha384_digest", true);
  public get sha384Digest() {
    return this._sha384Digest;
  }
  public putSha384Digest(value: DnsZoneRecordRrsetDlvRecordValuesSha384Digest[] | cdktf.IResolvable) {
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

export class DnsZoneRecordRrsetDlvRecordValuesList extends cdktf.ComplexList {
  public internalValue? : DnsZoneRecordRrsetDlvRecordValues[] | cdktf.IResolvable

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
  public get(index: number): DnsZoneRecordRrsetDlvRecordValuesOutputReference {
    return new DnsZoneRecordRrsetDlvRecordValuesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DnsZoneRecordRrsetDlvRecord {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/dns_zone_record#name DnsZoneRecord#name}
  */
  readonly name?: string;
  /**
  * values block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/dns_zone_record#values DnsZoneRecord#values}
  */
  readonly values: DnsZoneRecordRrsetDlvRecordValues[] | cdktf.IResolvable;
}

export function dnsZoneRecordRrsetDlvRecordToTerraform(struct?: DnsZoneRecordRrsetDlvRecord | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    values: cdktf.listMapper(dnsZoneRecordRrsetDlvRecordValuesToTerraform, true)(struct!.values),
  }
}


export function dnsZoneRecordRrsetDlvRecordToHclTerraform(struct?: DnsZoneRecordRrsetDlvRecord | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(dnsZoneRecordRrsetDlvRecordValuesToHclTerraform, true)(struct!.values),
      isBlock: true,
      type: "list",
      storageClassType: "DnsZoneRecordRrsetDlvRecordValuesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DnsZoneRecordRrsetDlvRecordOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DnsZoneRecordRrsetDlvRecord | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
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

  public set internalValue(value: DnsZoneRecordRrsetDlvRecord | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._values.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
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
  private _values = new DnsZoneRecordRrsetDlvRecordValuesList(this, "values", false);
  public get values() {
    return this._values;
  }
  public putValues(value: DnsZoneRecordRrsetDlvRecordValues[] | cdktf.IResolvable) {
    this._values.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values.internalValue;
  }
}

export class DnsZoneRecordRrsetDlvRecordList extends cdktf.ComplexList {
  public internalValue? : DnsZoneRecordRrsetDlvRecord[] | cdktf.IResolvable

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
  public get(index: number): DnsZoneRecordRrsetDlvRecordOutputReference {
    return new DnsZoneRecordRrsetDlvRecordOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DnsZoneRecordRrsetDsRecordValuesSha1Digest {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/dns_zone_record#digest DnsZoneRecord#digest}
  */
  readonly digest: string;
}

export function dnsZoneRecordRrsetDsRecordValuesSha1DigestToTerraform(struct?: DnsZoneRecordRrsetDsRecordValuesSha1Digest | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    digest: cdktf.stringToTerraform(struct!.digest),
  }
}


export function dnsZoneRecordRrsetDsRecordValuesSha1DigestToHclTerraform(struct?: DnsZoneRecordRrsetDsRecordValuesSha1Digest | cdktf.IResolvable): any {
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

export class DnsZoneRecordRrsetDsRecordValuesSha1DigestOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DnsZoneRecordRrsetDsRecordValuesSha1Digest | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._digest !== undefined) {
      hasAnyValues = true;
      internalValueResult.digest = this._digest;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DnsZoneRecordRrsetDsRecordValuesSha1Digest | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._digest = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
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

export class DnsZoneRecordRrsetDsRecordValuesSha1DigestList extends cdktf.ComplexList {
  public internalValue? : DnsZoneRecordRrsetDsRecordValuesSha1Digest[] | cdktf.IResolvable

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
  public get(index: number): DnsZoneRecordRrsetDsRecordValuesSha1DigestOutputReference {
    return new DnsZoneRecordRrsetDsRecordValuesSha1DigestOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DnsZoneRecordRrsetDsRecordValuesSha256Digest {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/dns_zone_record#digest DnsZoneRecord#digest}
  */
  readonly digest: string;
}

export function dnsZoneRecordRrsetDsRecordValuesSha256DigestToTerraform(struct?: DnsZoneRecordRrsetDsRecordValuesSha256Digest | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    digest: cdktf.stringToTerraform(struct!.digest),
  }
}


export function dnsZoneRecordRrsetDsRecordValuesSha256DigestToHclTerraform(struct?: DnsZoneRecordRrsetDsRecordValuesSha256Digest | cdktf.IResolvable): any {
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

export class DnsZoneRecordRrsetDsRecordValuesSha256DigestOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DnsZoneRecordRrsetDsRecordValuesSha256Digest | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._digest !== undefined) {
      hasAnyValues = true;
      internalValueResult.digest = this._digest;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DnsZoneRecordRrsetDsRecordValuesSha256Digest | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._digest = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
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

export class DnsZoneRecordRrsetDsRecordValuesSha256DigestList extends cdktf.ComplexList {
  public internalValue? : DnsZoneRecordRrsetDsRecordValuesSha256Digest[] | cdktf.IResolvable

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
  public get(index: number): DnsZoneRecordRrsetDsRecordValuesSha256DigestOutputReference {
    return new DnsZoneRecordRrsetDsRecordValuesSha256DigestOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DnsZoneRecordRrsetDsRecordValuesSha384Digest {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/dns_zone_record#digest DnsZoneRecord#digest}
  */
  readonly digest: string;
}

export function dnsZoneRecordRrsetDsRecordValuesSha384DigestToTerraform(struct?: DnsZoneRecordRrsetDsRecordValuesSha384Digest | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    digest: cdktf.stringToTerraform(struct!.digest),
  }
}


export function dnsZoneRecordRrsetDsRecordValuesSha384DigestToHclTerraform(struct?: DnsZoneRecordRrsetDsRecordValuesSha384Digest | cdktf.IResolvable): any {
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

export class DnsZoneRecordRrsetDsRecordValuesSha384DigestOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DnsZoneRecordRrsetDsRecordValuesSha384Digest | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._digest !== undefined) {
      hasAnyValues = true;
      internalValueResult.digest = this._digest;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DnsZoneRecordRrsetDsRecordValuesSha384Digest | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._digest = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
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

export class DnsZoneRecordRrsetDsRecordValuesSha384DigestList extends cdktf.ComplexList {
  public internalValue? : DnsZoneRecordRrsetDsRecordValuesSha384Digest[] | cdktf.IResolvable

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
  public get(index: number): DnsZoneRecordRrsetDsRecordValuesSha384DigestOutputReference {
    return new DnsZoneRecordRrsetDsRecordValuesSha384DigestOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DnsZoneRecordRrsetDsRecordValues {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/dns_zone_record#ds_key_algorithm DnsZoneRecord#ds_key_algorithm}
  */
  readonly dsKeyAlgorithm: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/dns_zone_record#key_tag DnsZoneRecord#key_tag}
  */
  readonly keyTag: number;
  /**
  * sha1_digest block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/dns_zone_record#sha1_digest DnsZoneRecord#sha1_digest}
  */
  readonly sha1Digest?: DnsZoneRecordRrsetDsRecordValuesSha1Digest[] | cdktf.IResolvable;
  /**
  * sha256_digest block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/dns_zone_record#sha256_digest DnsZoneRecord#sha256_digest}
  */
  readonly sha256Digest?: DnsZoneRecordRrsetDsRecordValuesSha256Digest[] | cdktf.IResolvable;
  /**
  * sha384_digest block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/dns_zone_record#sha384_digest DnsZoneRecord#sha384_digest}
  */
  readonly sha384Digest?: DnsZoneRecordRrsetDsRecordValuesSha384Digest[] | cdktf.IResolvable;
}

export function dnsZoneRecordRrsetDsRecordValuesToTerraform(struct?: DnsZoneRecordRrsetDsRecordValues | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ds_key_algorithm: cdktf.stringToTerraform(struct!.dsKeyAlgorithm),
    key_tag: cdktf.numberToTerraform(struct!.keyTag),
    sha1_digest: cdktf.listMapper(dnsZoneRecordRrsetDsRecordValuesSha1DigestToTerraform, true)(struct!.sha1Digest),
    sha256_digest: cdktf.listMapper(dnsZoneRecordRrsetDsRecordValuesSha256DigestToTerraform, true)(struct!.sha256Digest),
    sha384_digest: cdktf.listMapper(dnsZoneRecordRrsetDsRecordValuesSha384DigestToTerraform, true)(struct!.sha384Digest),
  }
}


export function dnsZoneRecordRrsetDsRecordValuesToHclTerraform(struct?: DnsZoneRecordRrsetDsRecordValues | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(dnsZoneRecordRrsetDsRecordValuesSha1DigestToHclTerraform, true)(struct!.sha1Digest),
      isBlock: true,
      type: "set",
      storageClassType: "DnsZoneRecordRrsetDsRecordValuesSha1DigestList",
    },
    sha256_digest: {
      value: cdktf.listMapperHcl(dnsZoneRecordRrsetDsRecordValuesSha256DigestToHclTerraform, true)(struct!.sha256Digest),
      isBlock: true,
      type: "set",
      storageClassType: "DnsZoneRecordRrsetDsRecordValuesSha256DigestList",
    },
    sha384_digest: {
      value: cdktf.listMapperHcl(dnsZoneRecordRrsetDsRecordValuesSha384DigestToHclTerraform, true)(struct!.sha384Digest),
      isBlock: true,
      type: "set",
      storageClassType: "DnsZoneRecordRrsetDsRecordValuesSha384DigestList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DnsZoneRecordRrsetDsRecordValuesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DnsZoneRecordRrsetDsRecordValues | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DnsZoneRecordRrsetDsRecordValues | cdktf.IResolvable | undefined) {
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
  private _sha1Digest = new DnsZoneRecordRrsetDsRecordValuesSha1DigestList(this, "sha1_digest", true);
  public get sha1Digest() {
    return this._sha1Digest;
  }
  public putSha1Digest(value: DnsZoneRecordRrsetDsRecordValuesSha1Digest[] | cdktf.IResolvable) {
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
  private _sha256Digest = new DnsZoneRecordRrsetDsRecordValuesSha256DigestList(this, "sha256_digest", true);
  public get sha256Digest() {
    return this._sha256Digest;
  }
  public putSha256Digest(value: DnsZoneRecordRrsetDsRecordValuesSha256Digest[] | cdktf.IResolvable) {
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
  private _sha384Digest = new DnsZoneRecordRrsetDsRecordValuesSha384DigestList(this, "sha384_digest", true);
  public get sha384Digest() {
    return this._sha384Digest;
  }
  public putSha384Digest(value: DnsZoneRecordRrsetDsRecordValuesSha384Digest[] | cdktf.IResolvable) {
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

export class DnsZoneRecordRrsetDsRecordValuesList extends cdktf.ComplexList {
  public internalValue? : DnsZoneRecordRrsetDsRecordValues[] | cdktf.IResolvable

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
  public get(index: number): DnsZoneRecordRrsetDsRecordValuesOutputReference {
    return new DnsZoneRecordRrsetDsRecordValuesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DnsZoneRecordRrsetDsRecord {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/dns_zone_record#name DnsZoneRecord#name}
  */
  readonly name?: string;
  /**
  * values block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/dns_zone_record#values DnsZoneRecord#values}
  */
  readonly values: DnsZoneRecordRrsetDsRecordValues[] | cdktf.IResolvable;
}

export function dnsZoneRecordRrsetDsRecordToTerraform(struct?: DnsZoneRecordRrsetDsRecord | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    values: cdktf.listMapper(dnsZoneRecordRrsetDsRecordValuesToTerraform, true)(struct!.values),
  }
}


export function dnsZoneRecordRrsetDsRecordToHclTerraform(struct?: DnsZoneRecordRrsetDsRecord | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(dnsZoneRecordRrsetDsRecordValuesToHclTerraform, true)(struct!.values),
      isBlock: true,
      type: "list",
      storageClassType: "DnsZoneRecordRrsetDsRecordValuesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DnsZoneRecordRrsetDsRecordOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DnsZoneRecordRrsetDsRecord | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
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

  public set internalValue(value: DnsZoneRecordRrsetDsRecord | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._values.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
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
  private _values = new DnsZoneRecordRrsetDsRecordValuesList(this, "values", false);
  public get values() {
    return this._values;
  }
  public putValues(value: DnsZoneRecordRrsetDsRecordValues[] | cdktf.IResolvable) {
    this._values.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values.internalValue;
  }
}

export class DnsZoneRecordRrsetDsRecordList extends cdktf.ComplexList {
  public internalValue? : DnsZoneRecordRrsetDsRecord[] | cdktf.IResolvable

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
  public get(index: number): DnsZoneRecordRrsetDsRecordOutputReference {
    return new DnsZoneRecordRrsetDsRecordOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DnsZoneRecordRrsetEui48Record {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/dns_zone_record#name DnsZoneRecord#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/dns_zone_record#value DnsZoneRecord#value}
  */
  readonly value: string;
}

export function dnsZoneRecordRrsetEui48RecordToTerraform(struct?: DnsZoneRecordRrsetEui48Record | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dnsZoneRecordRrsetEui48RecordToHclTerraform(struct?: DnsZoneRecordRrsetEui48Record | cdktf.IResolvable): any {
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

export class DnsZoneRecordRrsetEui48RecordOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DnsZoneRecordRrsetEui48Record | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
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

  public set internalValue(value: DnsZoneRecordRrsetEui48Record | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
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

export class DnsZoneRecordRrsetEui48RecordList extends cdktf.ComplexList {
  public internalValue? : DnsZoneRecordRrsetEui48Record[] | cdktf.IResolvable

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
  public get(index: number): DnsZoneRecordRrsetEui48RecordOutputReference {
    return new DnsZoneRecordRrsetEui48RecordOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DnsZoneRecordRrsetEui64Record {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/dns_zone_record#name DnsZoneRecord#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/dns_zone_record#value DnsZoneRecord#value}
  */
  readonly value: string;
}

export function dnsZoneRecordRrsetEui64RecordToTerraform(struct?: DnsZoneRecordRrsetEui64Record | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dnsZoneRecordRrsetEui64RecordToHclTerraform(struct?: DnsZoneRecordRrsetEui64Record | cdktf.IResolvable): any {
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

export class DnsZoneRecordRrsetEui64RecordOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DnsZoneRecordRrsetEui64Record | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
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

  public set internalValue(value: DnsZoneRecordRrsetEui64Record | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
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

export class DnsZoneRecordRrsetEui64RecordList extends cdktf.ComplexList {
  public internalValue? : DnsZoneRecordRrsetEui64Record[] | cdktf.IResolvable

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
  public get(index: number): DnsZoneRecordRrsetEui64RecordOutputReference {
    return new DnsZoneRecordRrsetEui64RecordOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DnsZoneRecordRrsetLbRecordValue {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/dns_zone_record#name DnsZoneRecord#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/dns_zone_record#namespace DnsZoneRecord#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/dns_zone_record#tenant DnsZoneRecord#tenant}
  */
  readonly tenant?: string;
}

export function dnsZoneRecordRrsetLbRecordValueToTerraform(struct?: DnsZoneRecordRrsetLbRecordValue | cdktf.IResolvable): any {
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


export function dnsZoneRecordRrsetLbRecordValueToHclTerraform(struct?: DnsZoneRecordRrsetLbRecordValue | cdktf.IResolvable): any {
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

export class DnsZoneRecordRrsetLbRecordValueOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DnsZoneRecordRrsetLbRecordValue | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
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

  public set internalValue(value: DnsZoneRecordRrsetLbRecordValue | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._namespace = undefined;
      this._tenant = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
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

export class DnsZoneRecordRrsetLbRecordValueList extends cdktf.ComplexList {
  public internalValue? : DnsZoneRecordRrsetLbRecordValue[] | cdktf.IResolvable

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
  public get(index: number): DnsZoneRecordRrsetLbRecordValueOutputReference {
    return new DnsZoneRecordRrsetLbRecordValueOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DnsZoneRecordRrsetLbRecord {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/dns_zone_record#name DnsZoneRecord#name}
  */
  readonly name?: string;
  /**
  * value block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/dns_zone_record#value DnsZoneRecord#value}
  */
  readonly value?: DnsZoneRecordRrsetLbRecordValue[] | cdktf.IResolvable;
}

export function dnsZoneRecordRrsetLbRecordToTerraform(struct?: DnsZoneRecordRrsetLbRecord | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.listMapper(dnsZoneRecordRrsetLbRecordValueToTerraform, true)(struct!.value),
  }
}


export function dnsZoneRecordRrsetLbRecordToHclTerraform(struct?: DnsZoneRecordRrsetLbRecord | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(dnsZoneRecordRrsetLbRecordValueToHclTerraform, true)(struct!.value),
      isBlock: true,
      type: "set",
      storageClassType: "DnsZoneRecordRrsetLbRecordValueList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DnsZoneRecordRrsetLbRecordOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DnsZoneRecordRrsetLbRecord | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
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

  public set internalValue(value: DnsZoneRecordRrsetLbRecord | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._value.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
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
  private _value = new DnsZoneRecordRrsetLbRecordValueList(this, "value", true);
  public get value() {
    return this._value;
  }
  public putValue(value: DnsZoneRecordRrsetLbRecordValue[] | cdktf.IResolvable) {
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

export class DnsZoneRecordRrsetLbRecordList extends cdktf.ComplexList {
  public internalValue? : DnsZoneRecordRrsetLbRecord[] | cdktf.IResolvable

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
  public get(index: number): DnsZoneRecordRrsetLbRecordOutputReference {
    return new DnsZoneRecordRrsetLbRecordOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DnsZoneRecordRrsetLocRecordValues {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/dns_zone_record#altitude DnsZoneRecord#altitude}
  */
  readonly altitude: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/dns_zone_record#horizontal_precision DnsZoneRecord#horizontal_precision}
  */
  readonly horizontalPrecision?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/dns_zone_record#latitude_degree DnsZoneRecord#latitude_degree}
  */
  readonly latitudeDegree: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/dns_zone_record#latitude_hemisphere DnsZoneRecord#latitude_hemisphere}
  */
  readonly latitudeHemisphere: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/dns_zone_record#latitude_minute DnsZoneRecord#latitude_minute}
  */
  readonly latitudeMinute?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/dns_zone_record#latitude_second DnsZoneRecord#latitude_second}
  */
  readonly latitudeSecond?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/dns_zone_record#location_diameter DnsZoneRecord#location_diameter}
  */
  readonly locationDiameter?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/dns_zone_record#longitude_degree DnsZoneRecord#longitude_degree}
  */
  readonly longitudeDegree: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/dns_zone_record#longitude_hemisphere DnsZoneRecord#longitude_hemisphere}
  */
  readonly longitudeHemisphere: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/dns_zone_record#longitude_minute DnsZoneRecord#longitude_minute}
  */
  readonly longitudeMinute?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/dns_zone_record#longitude_second DnsZoneRecord#longitude_second}
  */
  readonly longitudeSecond?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/dns_zone_record#vertical_precision DnsZoneRecord#vertical_precision}
  */
  readonly verticalPrecision?: number;
}

export function dnsZoneRecordRrsetLocRecordValuesToTerraform(struct?: DnsZoneRecordRrsetLocRecordValues | cdktf.IResolvable): any {
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


export function dnsZoneRecordRrsetLocRecordValuesToHclTerraform(struct?: DnsZoneRecordRrsetLocRecordValues | cdktf.IResolvable): any {
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

export class DnsZoneRecordRrsetLocRecordValuesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DnsZoneRecordRrsetLocRecordValues | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DnsZoneRecordRrsetLocRecordValues | cdktf.IResolvable | undefined) {
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

export class DnsZoneRecordRrsetLocRecordValuesList extends cdktf.ComplexList {
  public internalValue? : DnsZoneRecordRrsetLocRecordValues[] | cdktf.IResolvable

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
  public get(index: number): DnsZoneRecordRrsetLocRecordValuesOutputReference {
    return new DnsZoneRecordRrsetLocRecordValuesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DnsZoneRecordRrsetLocRecord {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/dns_zone_record#name DnsZoneRecord#name}
  */
  readonly name?: string;
  /**
  * values block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/dns_zone_record#values DnsZoneRecord#values}
  */
  readonly values: DnsZoneRecordRrsetLocRecordValues[] | cdktf.IResolvable;
}

export function dnsZoneRecordRrsetLocRecordToTerraform(struct?: DnsZoneRecordRrsetLocRecord | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    values: cdktf.listMapper(dnsZoneRecordRrsetLocRecordValuesToTerraform, true)(struct!.values),
  }
}


export function dnsZoneRecordRrsetLocRecordToHclTerraform(struct?: DnsZoneRecordRrsetLocRecord | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(dnsZoneRecordRrsetLocRecordValuesToHclTerraform, true)(struct!.values),
      isBlock: true,
      type: "list",
      storageClassType: "DnsZoneRecordRrsetLocRecordValuesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DnsZoneRecordRrsetLocRecordOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DnsZoneRecordRrsetLocRecord | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
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

  public set internalValue(value: DnsZoneRecordRrsetLocRecord | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._values.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
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
  private _values = new DnsZoneRecordRrsetLocRecordValuesList(this, "values", false);
  public get values() {
    return this._values;
  }
  public putValues(value: DnsZoneRecordRrsetLocRecordValues[] | cdktf.IResolvable) {
    this._values.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values.internalValue;
  }
}

export class DnsZoneRecordRrsetLocRecordList extends cdktf.ComplexList {
  public internalValue? : DnsZoneRecordRrsetLocRecord[] | cdktf.IResolvable

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
  public get(index: number): DnsZoneRecordRrsetLocRecordOutputReference {
    return new DnsZoneRecordRrsetLocRecordOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DnsZoneRecordRrsetMxRecordValues {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/dns_zone_record#domain DnsZoneRecord#domain}
  */
  readonly domain?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/dns_zone_record#priority DnsZoneRecord#priority}
  */
  readonly priority?: number;
}

export function dnsZoneRecordRrsetMxRecordValuesToTerraform(struct?: DnsZoneRecordRrsetMxRecordValues | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    domain: cdktf.stringToTerraform(struct!.domain),
    priority: cdktf.numberToTerraform(struct!.priority),
  }
}


export function dnsZoneRecordRrsetMxRecordValuesToHclTerraform(struct?: DnsZoneRecordRrsetMxRecordValues | cdktf.IResolvable): any {
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

export class DnsZoneRecordRrsetMxRecordValuesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DnsZoneRecordRrsetMxRecordValues | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DnsZoneRecordRrsetMxRecordValues | cdktf.IResolvable | undefined) {
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

export class DnsZoneRecordRrsetMxRecordValuesList extends cdktf.ComplexList {
  public internalValue? : DnsZoneRecordRrsetMxRecordValues[] | cdktf.IResolvable

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
  public get(index: number): DnsZoneRecordRrsetMxRecordValuesOutputReference {
    return new DnsZoneRecordRrsetMxRecordValuesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DnsZoneRecordRrsetMxRecord {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/dns_zone_record#name DnsZoneRecord#name}
  */
  readonly name?: string;
  /**
  * values block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/dns_zone_record#values DnsZoneRecord#values}
  */
  readonly values: DnsZoneRecordRrsetMxRecordValues[] | cdktf.IResolvable;
}

export function dnsZoneRecordRrsetMxRecordToTerraform(struct?: DnsZoneRecordRrsetMxRecord | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    values: cdktf.listMapper(dnsZoneRecordRrsetMxRecordValuesToTerraform, true)(struct!.values),
  }
}


export function dnsZoneRecordRrsetMxRecordToHclTerraform(struct?: DnsZoneRecordRrsetMxRecord | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(dnsZoneRecordRrsetMxRecordValuesToHclTerraform, true)(struct!.values),
      isBlock: true,
      type: "list",
      storageClassType: "DnsZoneRecordRrsetMxRecordValuesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DnsZoneRecordRrsetMxRecordOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DnsZoneRecordRrsetMxRecord | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
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

  public set internalValue(value: DnsZoneRecordRrsetMxRecord | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._values.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
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
  private _values = new DnsZoneRecordRrsetMxRecordValuesList(this, "values", false);
  public get values() {
    return this._values;
  }
  public putValues(value: DnsZoneRecordRrsetMxRecordValues[] | cdktf.IResolvable) {
    this._values.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values.internalValue;
  }
}

export class DnsZoneRecordRrsetMxRecordList extends cdktf.ComplexList {
  public internalValue? : DnsZoneRecordRrsetMxRecord[] | cdktf.IResolvable

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
  public get(index: number): DnsZoneRecordRrsetMxRecordOutputReference {
    return new DnsZoneRecordRrsetMxRecordOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DnsZoneRecordRrsetNaptrRecordValues {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/dns_zone_record#flags DnsZoneRecord#flags}
  */
  readonly flags: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/dns_zone_record#order DnsZoneRecord#order}
  */
  readonly order: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/dns_zone_record#preference DnsZoneRecord#preference}
  */
  readonly preference: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/dns_zone_record#regexp DnsZoneRecord#regexp}
  */
  readonly regexp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/dns_zone_record#replacement DnsZoneRecord#replacement}
  */
  readonly replacement?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/dns_zone_record#service DnsZoneRecord#service}
  */
  readonly service?: string;
}

export function dnsZoneRecordRrsetNaptrRecordValuesToTerraform(struct?: DnsZoneRecordRrsetNaptrRecordValues | cdktf.IResolvable): any {
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


export function dnsZoneRecordRrsetNaptrRecordValuesToHclTerraform(struct?: DnsZoneRecordRrsetNaptrRecordValues | cdktf.IResolvable): any {
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

export class DnsZoneRecordRrsetNaptrRecordValuesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DnsZoneRecordRrsetNaptrRecordValues | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DnsZoneRecordRrsetNaptrRecordValues | cdktf.IResolvable | undefined) {
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

export class DnsZoneRecordRrsetNaptrRecordValuesList extends cdktf.ComplexList {
  public internalValue? : DnsZoneRecordRrsetNaptrRecordValues[] | cdktf.IResolvable

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
  public get(index: number): DnsZoneRecordRrsetNaptrRecordValuesOutputReference {
    return new DnsZoneRecordRrsetNaptrRecordValuesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DnsZoneRecordRrsetNaptrRecord {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/dns_zone_record#name DnsZoneRecord#name}
  */
  readonly name?: string;
  /**
  * values block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/dns_zone_record#values DnsZoneRecord#values}
  */
  readonly values: DnsZoneRecordRrsetNaptrRecordValues[] | cdktf.IResolvable;
}

export function dnsZoneRecordRrsetNaptrRecordToTerraform(struct?: DnsZoneRecordRrsetNaptrRecord | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    values: cdktf.listMapper(dnsZoneRecordRrsetNaptrRecordValuesToTerraform, true)(struct!.values),
  }
}


export function dnsZoneRecordRrsetNaptrRecordToHclTerraform(struct?: DnsZoneRecordRrsetNaptrRecord | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(dnsZoneRecordRrsetNaptrRecordValuesToHclTerraform, true)(struct!.values),
      isBlock: true,
      type: "list",
      storageClassType: "DnsZoneRecordRrsetNaptrRecordValuesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DnsZoneRecordRrsetNaptrRecordOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DnsZoneRecordRrsetNaptrRecord | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
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

  public set internalValue(value: DnsZoneRecordRrsetNaptrRecord | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._values.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
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
  private _values = new DnsZoneRecordRrsetNaptrRecordValuesList(this, "values", false);
  public get values() {
    return this._values;
  }
  public putValues(value: DnsZoneRecordRrsetNaptrRecordValues[] | cdktf.IResolvable) {
    this._values.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values.internalValue;
  }
}

export class DnsZoneRecordRrsetNaptrRecordList extends cdktf.ComplexList {
  public internalValue? : DnsZoneRecordRrsetNaptrRecord[] | cdktf.IResolvable

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
  public get(index: number): DnsZoneRecordRrsetNaptrRecordOutputReference {
    return new DnsZoneRecordRrsetNaptrRecordOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DnsZoneRecordRrsetNsRecord {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/dns_zone_record#name DnsZoneRecord#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/dns_zone_record#values DnsZoneRecord#values}
  */
  readonly values: string[];
}

export function dnsZoneRecordRrsetNsRecordToTerraform(struct?: DnsZoneRecordRrsetNsRecord | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function dnsZoneRecordRrsetNsRecordToHclTerraform(struct?: DnsZoneRecordRrsetNsRecord | cdktf.IResolvable): any {
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

export class DnsZoneRecordRrsetNsRecordOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DnsZoneRecordRrsetNsRecord | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
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

  public set internalValue(value: DnsZoneRecordRrsetNsRecord | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
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

export class DnsZoneRecordRrsetNsRecordList extends cdktf.ComplexList {
  public internalValue? : DnsZoneRecordRrsetNsRecord[] | cdktf.IResolvable

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
  public get(index: number): DnsZoneRecordRrsetNsRecordOutputReference {
    return new DnsZoneRecordRrsetNsRecordOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DnsZoneRecordRrsetPtrRecord {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/dns_zone_record#name DnsZoneRecord#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/dns_zone_record#values DnsZoneRecord#values}
  */
  readonly values: string[];
}

export function dnsZoneRecordRrsetPtrRecordToTerraform(struct?: DnsZoneRecordRrsetPtrRecord | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function dnsZoneRecordRrsetPtrRecordToHclTerraform(struct?: DnsZoneRecordRrsetPtrRecord | cdktf.IResolvable): any {
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

export class DnsZoneRecordRrsetPtrRecordOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DnsZoneRecordRrsetPtrRecord | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
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

  public set internalValue(value: DnsZoneRecordRrsetPtrRecord | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
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

export class DnsZoneRecordRrsetPtrRecordList extends cdktf.ComplexList {
  public internalValue? : DnsZoneRecordRrsetPtrRecord[] | cdktf.IResolvable

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
  public get(index: number): DnsZoneRecordRrsetPtrRecordOutputReference {
    return new DnsZoneRecordRrsetPtrRecordOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DnsZoneRecordRrsetSrvRecordValues {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/dns_zone_record#port DnsZoneRecord#port}
  */
  readonly port?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/dns_zone_record#priority DnsZoneRecord#priority}
  */
  readonly priority?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/dns_zone_record#target DnsZoneRecord#target}
  */
  readonly target?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/dns_zone_record#weight DnsZoneRecord#weight}
  */
  readonly weight?: number;
}

export function dnsZoneRecordRrsetSrvRecordValuesToTerraform(struct?: DnsZoneRecordRrsetSrvRecordValues | cdktf.IResolvable): any {
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


export function dnsZoneRecordRrsetSrvRecordValuesToHclTerraform(struct?: DnsZoneRecordRrsetSrvRecordValues | cdktf.IResolvable): any {
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

export class DnsZoneRecordRrsetSrvRecordValuesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DnsZoneRecordRrsetSrvRecordValues | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DnsZoneRecordRrsetSrvRecordValues | cdktf.IResolvable | undefined) {
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

export class DnsZoneRecordRrsetSrvRecordValuesList extends cdktf.ComplexList {
  public internalValue? : DnsZoneRecordRrsetSrvRecordValues[] | cdktf.IResolvable

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
  public get(index: number): DnsZoneRecordRrsetSrvRecordValuesOutputReference {
    return new DnsZoneRecordRrsetSrvRecordValuesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DnsZoneRecordRrsetSrvRecord {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/dns_zone_record#name DnsZoneRecord#name}
  */
  readonly name: string;
  /**
  * values block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/dns_zone_record#values DnsZoneRecord#values}
  */
  readonly values: DnsZoneRecordRrsetSrvRecordValues[] | cdktf.IResolvable;
}

export function dnsZoneRecordRrsetSrvRecordToTerraform(struct?: DnsZoneRecordRrsetSrvRecord | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    values: cdktf.listMapper(dnsZoneRecordRrsetSrvRecordValuesToTerraform, true)(struct!.values),
  }
}


export function dnsZoneRecordRrsetSrvRecordToHclTerraform(struct?: DnsZoneRecordRrsetSrvRecord | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(dnsZoneRecordRrsetSrvRecordValuesToHclTerraform, true)(struct!.values),
      isBlock: true,
      type: "list",
      storageClassType: "DnsZoneRecordRrsetSrvRecordValuesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DnsZoneRecordRrsetSrvRecordOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DnsZoneRecordRrsetSrvRecord | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
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

  public set internalValue(value: DnsZoneRecordRrsetSrvRecord | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._values.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
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
  private _values = new DnsZoneRecordRrsetSrvRecordValuesList(this, "values", false);
  public get values() {
    return this._values;
  }
  public putValues(value: DnsZoneRecordRrsetSrvRecordValues[] | cdktf.IResolvable) {
    this._values.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values.internalValue;
  }
}

export class DnsZoneRecordRrsetSrvRecordList extends cdktf.ComplexList {
  public internalValue? : DnsZoneRecordRrsetSrvRecord[] | cdktf.IResolvable

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
  public get(index: number): DnsZoneRecordRrsetSrvRecordOutputReference {
    return new DnsZoneRecordRrsetSrvRecordOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DnsZoneRecordRrsetSshfpRecordValuesSha1Fingerprint {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/dns_zone_record#fingerprint DnsZoneRecord#fingerprint}
  */
  readonly fingerprint: string;
}

export function dnsZoneRecordRrsetSshfpRecordValuesSha1FingerprintToTerraform(struct?: DnsZoneRecordRrsetSshfpRecordValuesSha1Fingerprint | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fingerprint: cdktf.stringToTerraform(struct!.fingerprint),
  }
}


export function dnsZoneRecordRrsetSshfpRecordValuesSha1FingerprintToHclTerraform(struct?: DnsZoneRecordRrsetSshfpRecordValuesSha1Fingerprint | cdktf.IResolvable): any {
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

export class DnsZoneRecordRrsetSshfpRecordValuesSha1FingerprintOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DnsZoneRecordRrsetSshfpRecordValuesSha1Fingerprint | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fingerprint !== undefined) {
      hasAnyValues = true;
      internalValueResult.fingerprint = this._fingerprint;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DnsZoneRecordRrsetSshfpRecordValuesSha1Fingerprint | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fingerprint = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
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

export class DnsZoneRecordRrsetSshfpRecordValuesSha1FingerprintList extends cdktf.ComplexList {
  public internalValue? : DnsZoneRecordRrsetSshfpRecordValuesSha1Fingerprint[] | cdktf.IResolvable

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
  public get(index: number): DnsZoneRecordRrsetSshfpRecordValuesSha1FingerprintOutputReference {
    return new DnsZoneRecordRrsetSshfpRecordValuesSha1FingerprintOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DnsZoneRecordRrsetSshfpRecordValuesSha256Fingerprint {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/dns_zone_record#fingerprint DnsZoneRecord#fingerprint}
  */
  readonly fingerprint: string;
}

export function dnsZoneRecordRrsetSshfpRecordValuesSha256FingerprintToTerraform(struct?: DnsZoneRecordRrsetSshfpRecordValuesSha256Fingerprint | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fingerprint: cdktf.stringToTerraform(struct!.fingerprint),
  }
}


export function dnsZoneRecordRrsetSshfpRecordValuesSha256FingerprintToHclTerraform(struct?: DnsZoneRecordRrsetSshfpRecordValuesSha256Fingerprint | cdktf.IResolvable): any {
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

export class DnsZoneRecordRrsetSshfpRecordValuesSha256FingerprintOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DnsZoneRecordRrsetSshfpRecordValuesSha256Fingerprint | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fingerprint !== undefined) {
      hasAnyValues = true;
      internalValueResult.fingerprint = this._fingerprint;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DnsZoneRecordRrsetSshfpRecordValuesSha256Fingerprint | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fingerprint = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
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

export class DnsZoneRecordRrsetSshfpRecordValuesSha256FingerprintList extends cdktf.ComplexList {
  public internalValue? : DnsZoneRecordRrsetSshfpRecordValuesSha256Fingerprint[] | cdktf.IResolvable

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
  public get(index: number): DnsZoneRecordRrsetSshfpRecordValuesSha256FingerprintOutputReference {
    return new DnsZoneRecordRrsetSshfpRecordValuesSha256FingerprintOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DnsZoneRecordRrsetSshfpRecordValues {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/dns_zone_record#algorithm DnsZoneRecord#algorithm}
  */
  readonly algorithm: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/dns_zone_record#fingerprint DnsZoneRecord#fingerprint}
  */
  readonly fingerprint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/dns_zone_record#fingerprinttype DnsZoneRecord#fingerprinttype}
  */
  readonly fingerprinttype: string;
  /**
  * sha1_fingerprint block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/dns_zone_record#sha1_fingerprint DnsZoneRecord#sha1_fingerprint}
  */
  readonly sha1Fingerprint?: DnsZoneRecordRrsetSshfpRecordValuesSha1Fingerprint[] | cdktf.IResolvable;
  /**
  * sha256_fingerprint block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/dns_zone_record#sha256_fingerprint DnsZoneRecord#sha256_fingerprint}
  */
  readonly sha256Fingerprint?: DnsZoneRecordRrsetSshfpRecordValuesSha256Fingerprint[] | cdktf.IResolvable;
}

export function dnsZoneRecordRrsetSshfpRecordValuesToTerraform(struct?: DnsZoneRecordRrsetSshfpRecordValues | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    algorithm: cdktf.stringToTerraform(struct!.algorithm),
    fingerprint: cdktf.stringToTerraform(struct!.fingerprint),
    fingerprinttype: cdktf.stringToTerraform(struct!.fingerprinttype),
    sha1_fingerprint: cdktf.listMapper(dnsZoneRecordRrsetSshfpRecordValuesSha1FingerprintToTerraform, true)(struct!.sha1Fingerprint),
    sha256_fingerprint: cdktf.listMapper(dnsZoneRecordRrsetSshfpRecordValuesSha256FingerprintToTerraform, true)(struct!.sha256Fingerprint),
  }
}


export function dnsZoneRecordRrsetSshfpRecordValuesToHclTerraform(struct?: DnsZoneRecordRrsetSshfpRecordValues | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(dnsZoneRecordRrsetSshfpRecordValuesSha1FingerprintToHclTerraform, true)(struct!.sha1Fingerprint),
      isBlock: true,
      type: "set",
      storageClassType: "DnsZoneRecordRrsetSshfpRecordValuesSha1FingerprintList",
    },
    sha256_fingerprint: {
      value: cdktf.listMapperHcl(dnsZoneRecordRrsetSshfpRecordValuesSha256FingerprintToHclTerraform, true)(struct!.sha256Fingerprint),
      isBlock: true,
      type: "set",
      storageClassType: "DnsZoneRecordRrsetSshfpRecordValuesSha256FingerprintList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DnsZoneRecordRrsetSshfpRecordValuesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DnsZoneRecordRrsetSshfpRecordValues | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DnsZoneRecordRrsetSshfpRecordValues | cdktf.IResolvable | undefined) {
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
  private _sha1Fingerprint = new DnsZoneRecordRrsetSshfpRecordValuesSha1FingerprintList(this, "sha1_fingerprint", true);
  public get sha1Fingerprint() {
    return this._sha1Fingerprint;
  }
  public putSha1Fingerprint(value: DnsZoneRecordRrsetSshfpRecordValuesSha1Fingerprint[] | cdktf.IResolvable) {
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
  private _sha256Fingerprint = new DnsZoneRecordRrsetSshfpRecordValuesSha256FingerprintList(this, "sha256_fingerprint", true);
  public get sha256Fingerprint() {
    return this._sha256Fingerprint;
  }
  public putSha256Fingerprint(value: DnsZoneRecordRrsetSshfpRecordValuesSha256Fingerprint[] | cdktf.IResolvable) {
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

export class DnsZoneRecordRrsetSshfpRecordValuesList extends cdktf.ComplexList {
  public internalValue? : DnsZoneRecordRrsetSshfpRecordValues[] | cdktf.IResolvable

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
  public get(index: number): DnsZoneRecordRrsetSshfpRecordValuesOutputReference {
    return new DnsZoneRecordRrsetSshfpRecordValuesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DnsZoneRecordRrsetSshfpRecord {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/dns_zone_record#name DnsZoneRecord#name}
  */
  readonly name?: string;
  /**
  * values block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/dns_zone_record#values DnsZoneRecord#values}
  */
  readonly values: DnsZoneRecordRrsetSshfpRecordValues[] | cdktf.IResolvable;
}

export function dnsZoneRecordRrsetSshfpRecordToTerraform(struct?: DnsZoneRecordRrsetSshfpRecord | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    values: cdktf.listMapper(dnsZoneRecordRrsetSshfpRecordValuesToTerraform, true)(struct!.values),
  }
}


export function dnsZoneRecordRrsetSshfpRecordToHclTerraform(struct?: DnsZoneRecordRrsetSshfpRecord | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(dnsZoneRecordRrsetSshfpRecordValuesToHclTerraform, true)(struct!.values),
      isBlock: true,
      type: "list",
      storageClassType: "DnsZoneRecordRrsetSshfpRecordValuesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DnsZoneRecordRrsetSshfpRecordOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DnsZoneRecordRrsetSshfpRecord | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
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

  public set internalValue(value: DnsZoneRecordRrsetSshfpRecord | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._values.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
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
  private _values = new DnsZoneRecordRrsetSshfpRecordValuesList(this, "values", false);
  public get values() {
    return this._values;
  }
  public putValues(value: DnsZoneRecordRrsetSshfpRecordValues[] | cdktf.IResolvable) {
    this._values.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values.internalValue;
  }
}

export class DnsZoneRecordRrsetSshfpRecordList extends cdktf.ComplexList {
  public internalValue? : DnsZoneRecordRrsetSshfpRecord[] | cdktf.IResolvable

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
  public get(index: number): DnsZoneRecordRrsetSshfpRecordOutputReference {
    return new DnsZoneRecordRrsetSshfpRecordOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DnsZoneRecordRrsetTlsaRecordValues {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/dns_zone_record#certificate_association_data DnsZoneRecord#certificate_association_data}
  */
  readonly certificateAssociationData: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/dns_zone_record#certificate_usage DnsZoneRecord#certificate_usage}
  */
  readonly certificateUsage: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/dns_zone_record#matching_type DnsZoneRecord#matching_type}
  */
  readonly matchingType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/dns_zone_record#selector DnsZoneRecord#selector}
  */
  readonly selector: string;
}

export function dnsZoneRecordRrsetTlsaRecordValuesToTerraform(struct?: DnsZoneRecordRrsetTlsaRecordValues | cdktf.IResolvable): any {
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


export function dnsZoneRecordRrsetTlsaRecordValuesToHclTerraform(struct?: DnsZoneRecordRrsetTlsaRecordValues | cdktf.IResolvable): any {
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

export class DnsZoneRecordRrsetTlsaRecordValuesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DnsZoneRecordRrsetTlsaRecordValues | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DnsZoneRecordRrsetTlsaRecordValues | cdktf.IResolvable | undefined) {
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

export class DnsZoneRecordRrsetTlsaRecordValuesList extends cdktf.ComplexList {
  public internalValue? : DnsZoneRecordRrsetTlsaRecordValues[] | cdktf.IResolvable

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
  public get(index: number): DnsZoneRecordRrsetTlsaRecordValuesOutputReference {
    return new DnsZoneRecordRrsetTlsaRecordValuesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DnsZoneRecordRrsetTlsaRecord {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/dns_zone_record#name DnsZoneRecord#name}
  */
  readonly name?: string;
  /**
  * values block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/dns_zone_record#values DnsZoneRecord#values}
  */
  readonly values: DnsZoneRecordRrsetTlsaRecordValues[] | cdktf.IResolvable;
}

export function dnsZoneRecordRrsetTlsaRecordToTerraform(struct?: DnsZoneRecordRrsetTlsaRecord | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    values: cdktf.listMapper(dnsZoneRecordRrsetTlsaRecordValuesToTerraform, true)(struct!.values),
  }
}


export function dnsZoneRecordRrsetTlsaRecordToHclTerraform(struct?: DnsZoneRecordRrsetTlsaRecord | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(dnsZoneRecordRrsetTlsaRecordValuesToHclTerraform, true)(struct!.values),
      isBlock: true,
      type: "list",
      storageClassType: "DnsZoneRecordRrsetTlsaRecordValuesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DnsZoneRecordRrsetTlsaRecordOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DnsZoneRecordRrsetTlsaRecord | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
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

  public set internalValue(value: DnsZoneRecordRrsetTlsaRecord | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._values.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
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
  private _values = new DnsZoneRecordRrsetTlsaRecordValuesList(this, "values", false);
  public get values() {
    return this._values;
  }
  public putValues(value: DnsZoneRecordRrsetTlsaRecordValues[] | cdktf.IResolvable) {
    this._values.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values.internalValue;
  }
}

export class DnsZoneRecordRrsetTlsaRecordList extends cdktf.ComplexList {
  public internalValue? : DnsZoneRecordRrsetTlsaRecord[] | cdktf.IResolvable

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
  public get(index: number): DnsZoneRecordRrsetTlsaRecordOutputReference {
    return new DnsZoneRecordRrsetTlsaRecordOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DnsZoneRecordRrsetTxtRecord {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/dns_zone_record#name DnsZoneRecord#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/dns_zone_record#values DnsZoneRecord#values}
  */
  readonly values: string[];
}

export function dnsZoneRecordRrsetTxtRecordToTerraform(struct?: DnsZoneRecordRrsetTxtRecord | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function dnsZoneRecordRrsetTxtRecordToHclTerraform(struct?: DnsZoneRecordRrsetTxtRecord | cdktf.IResolvable): any {
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

export class DnsZoneRecordRrsetTxtRecordOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DnsZoneRecordRrsetTxtRecord | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
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

  public set internalValue(value: DnsZoneRecordRrsetTxtRecord | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
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

export class DnsZoneRecordRrsetTxtRecordList extends cdktf.ComplexList {
  public internalValue? : DnsZoneRecordRrsetTxtRecord[] | cdktf.IResolvable

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
  public get(index: number): DnsZoneRecordRrsetTxtRecordOutputReference {
    return new DnsZoneRecordRrsetTxtRecordOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DnsZoneRecordRrset {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/dns_zone_record#description DnsZoneRecord#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/dns_zone_record#ttl DnsZoneRecord#ttl}
  */
  readonly ttl?: number;
  /**
  * a_record block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/dns_zone_record#a_record DnsZoneRecord#a_record}
  */
  readonly aRecord?: DnsZoneRecordRrsetARecord[] | cdktf.IResolvable;
  /**
  * aaaa_record block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/dns_zone_record#aaaa_record DnsZoneRecord#aaaa_record}
  */
  readonly aaaaRecord?: DnsZoneRecordRrsetAaaaRecord[] | cdktf.IResolvable;
  /**
  * afsdb_record block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/dns_zone_record#afsdb_record DnsZoneRecord#afsdb_record}
  */
  readonly afsdbRecord?: DnsZoneRecordRrsetAfsdbRecord[] | cdktf.IResolvable;
  /**
  * alias_record block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/dns_zone_record#alias_record DnsZoneRecord#alias_record}
  */
  readonly aliasRecord?: DnsZoneRecordRrsetAliasRecord[] | cdktf.IResolvable;
  /**
  * caa_record block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/dns_zone_record#caa_record DnsZoneRecord#caa_record}
  */
  readonly caaRecord?: DnsZoneRecordRrsetCaaRecord[] | cdktf.IResolvable;
  /**
  * cds_record block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/dns_zone_record#cds_record DnsZoneRecord#cds_record}
  */
  readonly cdsRecord?: DnsZoneRecordRrsetCdsRecord[] | cdktf.IResolvable;
  /**
  * cert_record block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/dns_zone_record#cert_record DnsZoneRecord#cert_record}
  */
  readonly certRecord?: DnsZoneRecordRrsetCertRecord[] | cdktf.IResolvable;
  /**
  * cname_record block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/dns_zone_record#cname_record DnsZoneRecord#cname_record}
  */
  readonly cnameRecord?: DnsZoneRecordRrsetCnameRecord[] | cdktf.IResolvable;
  /**
  * dlv_record block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/dns_zone_record#dlv_record DnsZoneRecord#dlv_record}
  */
  readonly dlvRecord?: DnsZoneRecordRrsetDlvRecord[] | cdktf.IResolvable;
  /**
  * ds_record block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/dns_zone_record#ds_record DnsZoneRecord#ds_record}
  */
  readonly dsRecord?: DnsZoneRecordRrsetDsRecord[] | cdktf.IResolvable;
  /**
  * eui48_record block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/dns_zone_record#eui48_record DnsZoneRecord#eui48_record}
  */
  readonly eui48Record?: DnsZoneRecordRrsetEui48Record[] | cdktf.IResolvable;
  /**
  * eui64_record block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/dns_zone_record#eui64_record DnsZoneRecord#eui64_record}
  */
  readonly eui64Record?: DnsZoneRecordRrsetEui64Record[] | cdktf.IResolvable;
  /**
  * lb_record block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/dns_zone_record#lb_record DnsZoneRecord#lb_record}
  */
  readonly lbRecord?: DnsZoneRecordRrsetLbRecord[] | cdktf.IResolvable;
  /**
  * loc_record block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/dns_zone_record#loc_record DnsZoneRecord#loc_record}
  */
  readonly locRecord?: DnsZoneRecordRrsetLocRecord[] | cdktf.IResolvable;
  /**
  * mx_record block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/dns_zone_record#mx_record DnsZoneRecord#mx_record}
  */
  readonly mxRecord?: DnsZoneRecordRrsetMxRecord[] | cdktf.IResolvable;
  /**
  * naptr_record block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/dns_zone_record#naptr_record DnsZoneRecord#naptr_record}
  */
  readonly naptrRecord?: DnsZoneRecordRrsetNaptrRecord[] | cdktf.IResolvable;
  /**
  * ns_record block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/dns_zone_record#ns_record DnsZoneRecord#ns_record}
  */
  readonly nsRecord?: DnsZoneRecordRrsetNsRecord[] | cdktf.IResolvable;
  /**
  * ptr_record block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/dns_zone_record#ptr_record DnsZoneRecord#ptr_record}
  */
  readonly ptrRecord?: DnsZoneRecordRrsetPtrRecord[] | cdktf.IResolvable;
  /**
  * srv_record block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/dns_zone_record#srv_record DnsZoneRecord#srv_record}
  */
  readonly srvRecord?: DnsZoneRecordRrsetSrvRecord[] | cdktf.IResolvable;
  /**
  * sshfp_record block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/dns_zone_record#sshfp_record DnsZoneRecord#sshfp_record}
  */
  readonly sshfpRecord?: DnsZoneRecordRrsetSshfpRecord[] | cdktf.IResolvable;
  /**
  * tlsa_record block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/dns_zone_record#tlsa_record DnsZoneRecord#tlsa_record}
  */
  readonly tlsaRecord?: DnsZoneRecordRrsetTlsaRecord[] | cdktf.IResolvable;
  /**
  * txt_record block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/dns_zone_record#txt_record DnsZoneRecord#txt_record}
  */
  readonly txtRecord?: DnsZoneRecordRrsetTxtRecord[] | cdktf.IResolvable;
}

export function dnsZoneRecordRrsetToTerraform(struct?: DnsZoneRecordRrset | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    ttl: cdktf.numberToTerraform(struct!.ttl),
    a_record: cdktf.listMapper(dnsZoneRecordRrsetARecordToTerraform, true)(struct!.aRecord),
    aaaa_record: cdktf.listMapper(dnsZoneRecordRrsetAaaaRecordToTerraform, true)(struct!.aaaaRecord),
    afsdb_record: cdktf.listMapper(dnsZoneRecordRrsetAfsdbRecordToTerraform, true)(struct!.afsdbRecord),
    alias_record: cdktf.listMapper(dnsZoneRecordRrsetAliasRecordToTerraform, true)(struct!.aliasRecord),
    caa_record: cdktf.listMapper(dnsZoneRecordRrsetCaaRecordToTerraform, true)(struct!.caaRecord),
    cds_record: cdktf.listMapper(dnsZoneRecordRrsetCdsRecordToTerraform, true)(struct!.cdsRecord),
    cert_record: cdktf.listMapper(dnsZoneRecordRrsetCertRecordToTerraform, true)(struct!.certRecord),
    cname_record: cdktf.listMapper(dnsZoneRecordRrsetCnameRecordToTerraform, true)(struct!.cnameRecord),
    dlv_record: cdktf.listMapper(dnsZoneRecordRrsetDlvRecordToTerraform, true)(struct!.dlvRecord),
    ds_record: cdktf.listMapper(dnsZoneRecordRrsetDsRecordToTerraform, true)(struct!.dsRecord),
    eui48_record: cdktf.listMapper(dnsZoneRecordRrsetEui48RecordToTerraform, true)(struct!.eui48Record),
    eui64_record: cdktf.listMapper(dnsZoneRecordRrsetEui64RecordToTerraform, true)(struct!.eui64Record),
    lb_record: cdktf.listMapper(dnsZoneRecordRrsetLbRecordToTerraform, true)(struct!.lbRecord),
    loc_record: cdktf.listMapper(dnsZoneRecordRrsetLocRecordToTerraform, true)(struct!.locRecord),
    mx_record: cdktf.listMapper(dnsZoneRecordRrsetMxRecordToTerraform, true)(struct!.mxRecord),
    naptr_record: cdktf.listMapper(dnsZoneRecordRrsetNaptrRecordToTerraform, true)(struct!.naptrRecord),
    ns_record: cdktf.listMapper(dnsZoneRecordRrsetNsRecordToTerraform, true)(struct!.nsRecord),
    ptr_record: cdktf.listMapper(dnsZoneRecordRrsetPtrRecordToTerraform, true)(struct!.ptrRecord),
    srv_record: cdktf.listMapper(dnsZoneRecordRrsetSrvRecordToTerraform, true)(struct!.srvRecord),
    sshfp_record: cdktf.listMapper(dnsZoneRecordRrsetSshfpRecordToTerraform, true)(struct!.sshfpRecord),
    tlsa_record: cdktf.listMapper(dnsZoneRecordRrsetTlsaRecordToTerraform, true)(struct!.tlsaRecord),
    txt_record: cdktf.listMapper(dnsZoneRecordRrsetTxtRecordToTerraform, true)(struct!.txtRecord),
  }
}


export function dnsZoneRecordRrsetToHclTerraform(struct?: DnsZoneRecordRrset | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(dnsZoneRecordRrsetARecordToHclTerraform, true)(struct!.aRecord),
      isBlock: true,
      type: "set",
      storageClassType: "DnsZoneRecordRrsetARecordList",
    },
    aaaa_record: {
      value: cdktf.listMapperHcl(dnsZoneRecordRrsetAaaaRecordToHclTerraform, true)(struct!.aaaaRecord),
      isBlock: true,
      type: "set",
      storageClassType: "DnsZoneRecordRrsetAaaaRecordList",
    },
    afsdb_record: {
      value: cdktf.listMapperHcl(dnsZoneRecordRrsetAfsdbRecordToHclTerraform, true)(struct!.afsdbRecord),
      isBlock: true,
      type: "set",
      storageClassType: "DnsZoneRecordRrsetAfsdbRecordList",
    },
    alias_record: {
      value: cdktf.listMapperHcl(dnsZoneRecordRrsetAliasRecordToHclTerraform, true)(struct!.aliasRecord),
      isBlock: true,
      type: "set",
      storageClassType: "DnsZoneRecordRrsetAliasRecordList",
    },
    caa_record: {
      value: cdktf.listMapperHcl(dnsZoneRecordRrsetCaaRecordToHclTerraform, true)(struct!.caaRecord),
      isBlock: true,
      type: "set",
      storageClassType: "DnsZoneRecordRrsetCaaRecordList",
    },
    cds_record: {
      value: cdktf.listMapperHcl(dnsZoneRecordRrsetCdsRecordToHclTerraform, true)(struct!.cdsRecord),
      isBlock: true,
      type: "set",
      storageClassType: "DnsZoneRecordRrsetCdsRecordList",
    },
    cert_record: {
      value: cdktf.listMapperHcl(dnsZoneRecordRrsetCertRecordToHclTerraform, true)(struct!.certRecord),
      isBlock: true,
      type: "set",
      storageClassType: "DnsZoneRecordRrsetCertRecordList",
    },
    cname_record: {
      value: cdktf.listMapperHcl(dnsZoneRecordRrsetCnameRecordToHclTerraform, true)(struct!.cnameRecord),
      isBlock: true,
      type: "set",
      storageClassType: "DnsZoneRecordRrsetCnameRecordList",
    },
    dlv_record: {
      value: cdktf.listMapperHcl(dnsZoneRecordRrsetDlvRecordToHclTerraform, true)(struct!.dlvRecord),
      isBlock: true,
      type: "set",
      storageClassType: "DnsZoneRecordRrsetDlvRecordList",
    },
    ds_record: {
      value: cdktf.listMapperHcl(dnsZoneRecordRrsetDsRecordToHclTerraform, true)(struct!.dsRecord),
      isBlock: true,
      type: "set",
      storageClassType: "DnsZoneRecordRrsetDsRecordList",
    },
    eui48_record: {
      value: cdktf.listMapperHcl(dnsZoneRecordRrsetEui48RecordToHclTerraform, true)(struct!.eui48Record),
      isBlock: true,
      type: "set",
      storageClassType: "DnsZoneRecordRrsetEui48RecordList",
    },
    eui64_record: {
      value: cdktf.listMapperHcl(dnsZoneRecordRrsetEui64RecordToHclTerraform, true)(struct!.eui64Record),
      isBlock: true,
      type: "set",
      storageClassType: "DnsZoneRecordRrsetEui64RecordList",
    },
    lb_record: {
      value: cdktf.listMapperHcl(dnsZoneRecordRrsetLbRecordToHclTerraform, true)(struct!.lbRecord),
      isBlock: true,
      type: "set",
      storageClassType: "DnsZoneRecordRrsetLbRecordList",
    },
    loc_record: {
      value: cdktf.listMapperHcl(dnsZoneRecordRrsetLocRecordToHclTerraform, true)(struct!.locRecord),
      isBlock: true,
      type: "set",
      storageClassType: "DnsZoneRecordRrsetLocRecordList",
    },
    mx_record: {
      value: cdktf.listMapperHcl(dnsZoneRecordRrsetMxRecordToHclTerraform, true)(struct!.mxRecord),
      isBlock: true,
      type: "set",
      storageClassType: "DnsZoneRecordRrsetMxRecordList",
    },
    naptr_record: {
      value: cdktf.listMapperHcl(dnsZoneRecordRrsetNaptrRecordToHclTerraform, true)(struct!.naptrRecord),
      isBlock: true,
      type: "set",
      storageClassType: "DnsZoneRecordRrsetNaptrRecordList",
    },
    ns_record: {
      value: cdktf.listMapperHcl(dnsZoneRecordRrsetNsRecordToHclTerraform, true)(struct!.nsRecord),
      isBlock: true,
      type: "set",
      storageClassType: "DnsZoneRecordRrsetNsRecordList",
    },
    ptr_record: {
      value: cdktf.listMapperHcl(dnsZoneRecordRrsetPtrRecordToHclTerraform, true)(struct!.ptrRecord),
      isBlock: true,
      type: "set",
      storageClassType: "DnsZoneRecordRrsetPtrRecordList",
    },
    srv_record: {
      value: cdktf.listMapperHcl(dnsZoneRecordRrsetSrvRecordToHclTerraform, true)(struct!.srvRecord),
      isBlock: true,
      type: "set",
      storageClassType: "DnsZoneRecordRrsetSrvRecordList",
    },
    sshfp_record: {
      value: cdktf.listMapperHcl(dnsZoneRecordRrsetSshfpRecordToHclTerraform, true)(struct!.sshfpRecord),
      isBlock: true,
      type: "set",
      storageClassType: "DnsZoneRecordRrsetSshfpRecordList",
    },
    tlsa_record: {
      value: cdktf.listMapperHcl(dnsZoneRecordRrsetTlsaRecordToHclTerraform, true)(struct!.tlsaRecord),
      isBlock: true,
      type: "set",
      storageClassType: "DnsZoneRecordRrsetTlsaRecordList",
    },
    txt_record: {
      value: cdktf.listMapperHcl(dnsZoneRecordRrsetTxtRecordToHclTerraform, true)(struct!.txtRecord),
      isBlock: true,
      type: "set",
      storageClassType: "DnsZoneRecordRrsetTxtRecordList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DnsZoneRecordRrsetOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DnsZoneRecordRrset | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DnsZoneRecordRrset | cdktf.IResolvable | undefined) {
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
  private _aRecord = new DnsZoneRecordRrsetARecordList(this, "a_record", true);
  public get aRecord() {
    return this._aRecord;
  }
  public putARecord(value: DnsZoneRecordRrsetARecord[] | cdktf.IResolvable) {
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
  private _aaaaRecord = new DnsZoneRecordRrsetAaaaRecordList(this, "aaaa_record", true);
  public get aaaaRecord() {
    return this._aaaaRecord;
  }
  public putAaaaRecord(value: DnsZoneRecordRrsetAaaaRecord[] | cdktf.IResolvable) {
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
  private _afsdbRecord = new DnsZoneRecordRrsetAfsdbRecordList(this, "afsdb_record", true);
  public get afsdbRecord() {
    return this._afsdbRecord;
  }
  public putAfsdbRecord(value: DnsZoneRecordRrsetAfsdbRecord[] | cdktf.IResolvable) {
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
  private _aliasRecord = new DnsZoneRecordRrsetAliasRecordList(this, "alias_record", true);
  public get aliasRecord() {
    return this._aliasRecord;
  }
  public putAliasRecord(value: DnsZoneRecordRrsetAliasRecord[] | cdktf.IResolvable) {
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
  private _caaRecord = new DnsZoneRecordRrsetCaaRecordList(this, "caa_record", true);
  public get caaRecord() {
    return this._caaRecord;
  }
  public putCaaRecord(value: DnsZoneRecordRrsetCaaRecord[] | cdktf.IResolvable) {
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
  private _cdsRecord = new DnsZoneRecordRrsetCdsRecordList(this, "cds_record", true);
  public get cdsRecord() {
    return this._cdsRecord;
  }
  public putCdsRecord(value: DnsZoneRecordRrsetCdsRecord[] | cdktf.IResolvable) {
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
  private _certRecord = new DnsZoneRecordRrsetCertRecordList(this, "cert_record", true);
  public get certRecord() {
    return this._certRecord;
  }
  public putCertRecord(value: DnsZoneRecordRrsetCertRecord[] | cdktf.IResolvable) {
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
  private _cnameRecord = new DnsZoneRecordRrsetCnameRecordList(this, "cname_record", true);
  public get cnameRecord() {
    return this._cnameRecord;
  }
  public putCnameRecord(value: DnsZoneRecordRrsetCnameRecord[] | cdktf.IResolvable) {
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
  private _dlvRecord = new DnsZoneRecordRrsetDlvRecordList(this, "dlv_record", true);
  public get dlvRecord() {
    return this._dlvRecord;
  }
  public putDlvRecord(value: DnsZoneRecordRrsetDlvRecord[] | cdktf.IResolvable) {
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
  private _dsRecord = new DnsZoneRecordRrsetDsRecordList(this, "ds_record", true);
  public get dsRecord() {
    return this._dsRecord;
  }
  public putDsRecord(value: DnsZoneRecordRrsetDsRecord[] | cdktf.IResolvable) {
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
  private _eui48Record = new DnsZoneRecordRrsetEui48RecordList(this, "eui48_record", true);
  public get eui48Record() {
    return this._eui48Record;
  }
  public putEui48Record(value: DnsZoneRecordRrsetEui48Record[] | cdktf.IResolvable) {
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
  private _eui64Record = new DnsZoneRecordRrsetEui64RecordList(this, "eui64_record", true);
  public get eui64Record() {
    return this._eui64Record;
  }
  public putEui64Record(value: DnsZoneRecordRrsetEui64Record[] | cdktf.IResolvable) {
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
  private _lbRecord = new DnsZoneRecordRrsetLbRecordList(this, "lb_record", true);
  public get lbRecord() {
    return this._lbRecord;
  }
  public putLbRecord(value: DnsZoneRecordRrsetLbRecord[] | cdktf.IResolvable) {
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
  private _locRecord = new DnsZoneRecordRrsetLocRecordList(this, "loc_record", true);
  public get locRecord() {
    return this._locRecord;
  }
  public putLocRecord(value: DnsZoneRecordRrsetLocRecord[] | cdktf.IResolvable) {
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
  private _mxRecord = new DnsZoneRecordRrsetMxRecordList(this, "mx_record", true);
  public get mxRecord() {
    return this._mxRecord;
  }
  public putMxRecord(value: DnsZoneRecordRrsetMxRecord[] | cdktf.IResolvable) {
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
  private _naptrRecord = new DnsZoneRecordRrsetNaptrRecordList(this, "naptr_record", true);
  public get naptrRecord() {
    return this._naptrRecord;
  }
  public putNaptrRecord(value: DnsZoneRecordRrsetNaptrRecord[] | cdktf.IResolvable) {
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
  private _nsRecord = new DnsZoneRecordRrsetNsRecordList(this, "ns_record", true);
  public get nsRecord() {
    return this._nsRecord;
  }
  public putNsRecord(value: DnsZoneRecordRrsetNsRecord[] | cdktf.IResolvable) {
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
  private _ptrRecord = new DnsZoneRecordRrsetPtrRecordList(this, "ptr_record", true);
  public get ptrRecord() {
    return this._ptrRecord;
  }
  public putPtrRecord(value: DnsZoneRecordRrsetPtrRecord[] | cdktf.IResolvable) {
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
  private _srvRecord = new DnsZoneRecordRrsetSrvRecordList(this, "srv_record", true);
  public get srvRecord() {
    return this._srvRecord;
  }
  public putSrvRecord(value: DnsZoneRecordRrsetSrvRecord[] | cdktf.IResolvable) {
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
  private _sshfpRecord = new DnsZoneRecordRrsetSshfpRecordList(this, "sshfp_record", true);
  public get sshfpRecord() {
    return this._sshfpRecord;
  }
  public putSshfpRecord(value: DnsZoneRecordRrsetSshfpRecord[] | cdktf.IResolvable) {
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
  private _tlsaRecord = new DnsZoneRecordRrsetTlsaRecordList(this, "tlsa_record", true);
  public get tlsaRecord() {
    return this._tlsaRecord;
  }
  public putTlsaRecord(value: DnsZoneRecordRrsetTlsaRecord[] | cdktf.IResolvable) {
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
  private _txtRecord = new DnsZoneRecordRrsetTxtRecordList(this, "txt_record", true);
  public get txtRecord() {
    return this._txtRecord;
  }
  public putTxtRecord(value: DnsZoneRecordRrsetTxtRecord[] | cdktf.IResolvable) {
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

export class DnsZoneRecordRrsetList extends cdktf.ComplexList {
  public internalValue? : DnsZoneRecordRrset[] | cdktf.IResolvable

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
  public get(index: number): DnsZoneRecordRrsetOutputReference {
    return new DnsZoneRecordRrsetOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/dns_zone_record volterra_dns_zone_record}
*/
export class DnsZoneRecord extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "volterra_dns_zone_record";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DnsZoneRecord resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DnsZoneRecord to import
  * @param importFromId The id of the existing DnsZoneRecord that should be imported. Refer to the {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/dns_zone_record#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DnsZoneRecord to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "volterra_dns_zone_record", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/dns_zone_record volterra_dns_zone_record} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DnsZoneRecordConfig
  */
  public constructor(scope: Construct, id: string, config: DnsZoneRecordConfig) {
    super(scope, id, {
      terraformResourceType: 'volterra_dns_zone_record',
      terraformGeneratorMetadata: {
        providerName: 'volterra',
        providerVersion: '0.11.45',
        providerVersionConstraint: '0.11.45'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._dnsZoneName = config.dnsZoneName;
    this._groupName = config.groupName;
    this._id = config.id;
    this._rrset.internalValue = config.rrset;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // dns_zone_name - computed: false, optional: false, required: true
  private _dnsZoneName?: string; 
  public get dnsZoneName() {
    return this.getStringAttribute('dns_zone_name');
  }
  public set dnsZoneName(value: string) {
    this._dnsZoneName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsZoneNameInput() {
    return this._dnsZoneName;
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

  // rrset - computed: false, optional: true, required: false
  private _rrset = new DnsZoneRecordRrsetList(this, "rrset", false);
  public get rrset() {
    return this._rrset;
  }
  public putRrset(value: DnsZoneRecordRrset[] | cdktf.IResolvable) {
    this._rrset.internalValue = value;
  }
  public resetRrset() {
    this._rrset.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rrsetInput() {
    return this._rrset.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      dns_zone_name: cdktf.stringToTerraform(this._dnsZoneName),
      group_name: cdktf.stringToTerraform(this._groupName),
      id: cdktf.stringToTerraform(this._id),
      rrset: cdktf.listMapper(dnsZoneRecordRrsetToTerraform, true)(this._rrset.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      dns_zone_name: {
        value: cdktf.stringToHclTerraform(this._dnsZoneName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      group_name: {
        value: cdktf.stringToHclTerraform(this._groupName),
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
      rrset: {
        value: cdktf.listMapperHcl(dnsZoneRecordRrsetToHclTerraform, true)(this._rrset.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DnsZoneRecordRrsetList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
