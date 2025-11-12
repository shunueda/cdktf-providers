// https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_interfacepolicy6
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface FirewallInterfacepolicy6Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_interfacepolicy6#address_type FirewallInterfacepolicy6#address_type}
  */
  readonly addressType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_interfacepolicy6#application_list FirewallInterfacepolicy6#application_list}
  */
  readonly applicationList?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_interfacepolicy6#application_list_status FirewallInterfacepolicy6#application_list_status}
  */
  readonly applicationListStatus?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_interfacepolicy6#av_profile FirewallInterfacepolicy6#av_profile}
  */
  readonly avProfile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_interfacepolicy6#av_profile_status FirewallInterfacepolicy6#av_profile_status}
  */
  readonly avProfileStatus?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_interfacepolicy6#casb_profile FirewallInterfacepolicy6#casb_profile}
  */
  readonly casbProfile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_interfacepolicy6#casb_profile_status FirewallInterfacepolicy6#casb_profile_status}
  */
  readonly casbProfileStatus?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_interfacepolicy6#comments FirewallInterfacepolicy6#comments}
  */
  readonly comments?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_interfacepolicy6#dlp_profile FirewallInterfacepolicy6#dlp_profile}
  */
  readonly dlpProfile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_interfacepolicy6#dlp_profile_status FirewallInterfacepolicy6#dlp_profile_status}
  */
  readonly dlpProfileStatus?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_interfacepolicy6#dlp_sensor FirewallInterfacepolicy6#dlp_sensor}
  */
  readonly dlpSensor?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_interfacepolicy6#dlp_sensor_status FirewallInterfacepolicy6#dlp_sensor_status}
  */
  readonly dlpSensorStatus?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_interfacepolicy6#dsri FirewallInterfacepolicy6#dsri}
  */
  readonly dsri?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_interfacepolicy6#dynamic_sort_subtable FirewallInterfacepolicy6#dynamic_sort_subtable}
  */
  readonly dynamicSortSubtable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_interfacepolicy6#emailfilter_profile FirewallInterfacepolicy6#emailfilter_profile}
  */
  readonly emailfilterProfile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_interfacepolicy6#emailfilter_profile_status FirewallInterfacepolicy6#emailfilter_profile_status}
  */
  readonly emailfilterProfileStatus?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_interfacepolicy6#get_all_tables FirewallInterfacepolicy6#get_all_tables}
  */
  readonly fetchAllTables?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_interfacepolicy6#id FirewallInterfacepolicy6#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_interfacepolicy6#interface FirewallInterfacepolicy6#interface}
  */
  readonly interface: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_interfacepolicy6#ips_sensor FirewallInterfacepolicy6#ips_sensor}
  */
  readonly ipsSensor?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_interfacepolicy6#ips_sensor_status FirewallInterfacepolicy6#ips_sensor_status}
  */
  readonly ipsSensorStatus?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_interfacepolicy6#label FirewallInterfacepolicy6#label}
  */
  readonly label?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_interfacepolicy6#logtraffic FirewallInterfacepolicy6#logtraffic}
  */
  readonly logtraffic?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_interfacepolicy6#policyid FirewallInterfacepolicy6#policyid}
  */
  readonly policyid?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_interfacepolicy6#scan_botnet_connections FirewallInterfacepolicy6#scan_botnet_connections}
  */
  readonly scanBotnetConnections?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_interfacepolicy6#spamfilter_profile FirewallInterfacepolicy6#spamfilter_profile}
  */
  readonly spamfilterProfile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_interfacepolicy6#spamfilter_profile_status FirewallInterfacepolicy6#spamfilter_profile_status}
  */
  readonly spamfilterProfileStatus?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_interfacepolicy6#status FirewallInterfacepolicy6#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_interfacepolicy6#uuid FirewallInterfacepolicy6#uuid}
  */
  readonly uuid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_interfacepolicy6#vdomparam FirewallInterfacepolicy6#vdomparam}
  */
  readonly vdomparam?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_interfacepolicy6#webfilter_profile FirewallInterfacepolicy6#webfilter_profile}
  */
  readonly webfilterProfile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_interfacepolicy6#webfilter_profile_status FirewallInterfacepolicy6#webfilter_profile_status}
  */
  readonly webfilterProfileStatus?: string;
  /**
  * dstaddr6 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_interfacepolicy6#dstaddr6 FirewallInterfacepolicy6#dstaddr6}
  */
  readonly dstaddr6: FirewallInterfacepolicy6Dstaddr6[] | cdktf.IResolvable;
  /**
  * service6 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_interfacepolicy6#service6 FirewallInterfacepolicy6#service6}
  */
  readonly service6?: FirewallInterfacepolicy6Service6[] | cdktf.IResolvable;
  /**
  * srcaddr6 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_interfacepolicy6#srcaddr6 FirewallInterfacepolicy6#srcaddr6}
  */
  readonly srcaddr6: FirewallInterfacepolicy6Srcaddr6[] | cdktf.IResolvable;
}
export interface FirewallInterfacepolicy6Dstaddr6 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_interfacepolicy6#name FirewallInterfacepolicy6#name}
  */
  readonly name?: string;
}

export function firewallInterfacepolicy6Dstaddr6ToTerraform(struct?: FirewallInterfacepolicy6Dstaddr6 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function firewallInterfacepolicy6Dstaddr6ToHclTerraform(struct?: FirewallInterfacepolicy6Dstaddr6 | cdktf.IResolvable): any {
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

export class FirewallInterfacepolicy6Dstaddr6OutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FirewallInterfacepolicy6Dstaddr6 | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FirewallInterfacepolicy6Dstaddr6 | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
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
}

export class FirewallInterfacepolicy6Dstaddr6List extends cdktf.ComplexList {
  public internalValue? : FirewallInterfacepolicy6Dstaddr6[] | cdktf.IResolvable

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
  public get(index: number): FirewallInterfacepolicy6Dstaddr6OutputReference {
    return new FirewallInterfacepolicy6Dstaddr6OutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FirewallInterfacepolicy6Service6 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_interfacepolicy6#name FirewallInterfacepolicy6#name}
  */
  readonly name?: string;
}

export function firewallInterfacepolicy6Service6ToTerraform(struct?: FirewallInterfacepolicy6Service6 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function firewallInterfacepolicy6Service6ToHclTerraform(struct?: FirewallInterfacepolicy6Service6 | cdktf.IResolvable): any {
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

export class FirewallInterfacepolicy6Service6OutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FirewallInterfacepolicy6Service6 | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FirewallInterfacepolicy6Service6 | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
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
}

export class FirewallInterfacepolicy6Service6List extends cdktf.ComplexList {
  public internalValue? : FirewallInterfacepolicy6Service6[] | cdktf.IResolvable

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
  public get(index: number): FirewallInterfacepolicy6Service6OutputReference {
    return new FirewallInterfacepolicy6Service6OutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FirewallInterfacepolicy6Srcaddr6 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_interfacepolicy6#name FirewallInterfacepolicy6#name}
  */
  readonly name?: string;
}

export function firewallInterfacepolicy6Srcaddr6ToTerraform(struct?: FirewallInterfacepolicy6Srcaddr6 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function firewallInterfacepolicy6Srcaddr6ToHclTerraform(struct?: FirewallInterfacepolicy6Srcaddr6 | cdktf.IResolvable): any {
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

export class FirewallInterfacepolicy6Srcaddr6OutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FirewallInterfacepolicy6Srcaddr6 | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FirewallInterfacepolicy6Srcaddr6 | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
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
}

export class FirewallInterfacepolicy6Srcaddr6List extends cdktf.ComplexList {
  public internalValue? : FirewallInterfacepolicy6Srcaddr6[] | cdktf.IResolvable

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
  public get(index: number): FirewallInterfacepolicy6Srcaddr6OutputReference {
    return new FirewallInterfacepolicy6Srcaddr6OutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_interfacepolicy6 fortios_firewall_interfacepolicy6}
*/
export class FirewallInterfacepolicy6 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortios_firewall_interfacepolicy6";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a FirewallInterfacepolicy6 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the FirewallInterfacepolicy6 to import
  * @param importFromId The id of the existing FirewallInterfacepolicy6 that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_interfacepolicy6#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the FirewallInterfacepolicy6 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortios_firewall_interfacepolicy6", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_interfacepolicy6 fortios_firewall_interfacepolicy6} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FirewallInterfacepolicy6Config
  */
  public constructor(scope: Construct, id: string, config: FirewallInterfacepolicy6Config) {
    super(scope, id, {
      terraformResourceType: 'fortios_firewall_interfacepolicy6',
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
    this._addressType = config.addressType;
    this._applicationList = config.applicationList;
    this._applicationListStatus = config.applicationListStatus;
    this._avProfile = config.avProfile;
    this._avProfileStatus = config.avProfileStatus;
    this._casbProfile = config.casbProfile;
    this._casbProfileStatus = config.casbProfileStatus;
    this._comments = config.comments;
    this._dlpProfile = config.dlpProfile;
    this._dlpProfileStatus = config.dlpProfileStatus;
    this._dlpSensor = config.dlpSensor;
    this._dlpSensorStatus = config.dlpSensorStatus;
    this._dsri = config.dsri;
    this._dynamicSortSubtable = config.dynamicSortSubtable;
    this._emailfilterProfile = config.emailfilterProfile;
    this._emailfilterProfileStatus = config.emailfilterProfileStatus;
    this._getAllTables = config.fetchAllTables;
    this._id = config.id;
    this._interface = config.interface;
    this._ipsSensor = config.ipsSensor;
    this._ipsSensorStatus = config.ipsSensorStatus;
    this._label = config.label;
    this._logtraffic = config.logtraffic;
    this._policyid = config.policyid;
    this._scanBotnetConnections = config.scanBotnetConnections;
    this._spamfilterProfile = config.spamfilterProfile;
    this._spamfilterProfileStatus = config.spamfilterProfileStatus;
    this._status = config.status;
    this._uuid = config.uuid;
    this._vdomparam = config.vdomparam;
    this._webfilterProfile = config.webfilterProfile;
    this._webfilterProfileStatus = config.webfilterProfileStatus;
    this._dstaddr6.internalValue = config.dstaddr6;
    this._service6.internalValue = config.service6;
    this._srcaddr6.internalValue = config.srcaddr6;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // address_type - computed: true, optional: true, required: false
  private _addressType?: string; 
  public get addressType() {
    return this.getStringAttribute('address_type');
  }
  public set addressType(value: string) {
    this._addressType = value;
  }
  public resetAddressType() {
    this._addressType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressTypeInput() {
    return this._addressType;
  }

  // application_list - computed: false, optional: true, required: false
  private _applicationList?: string; 
  public get applicationList() {
    return this.getStringAttribute('application_list');
  }
  public set applicationList(value: string) {
    this._applicationList = value;
  }
  public resetApplicationList() {
    this._applicationList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationListInput() {
    return this._applicationList;
  }

  // application_list_status - computed: true, optional: true, required: false
  private _applicationListStatus?: string; 
  public get applicationListStatus() {
    return this.getStringAttribute('application_list_status');
  }
  public set applicationListStatus(value: string) {
    this._applicationListStatus = value;
  }
  public resetApplicationListStatus() {
    this._applicationListStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationListStatusInput() {
    return this._applicationListStatus;
  }

  // av_profile - computed: false, optional: true, required: false
  private _avProfile?: string; 
  public get avProfile() {
    return this.getStringAttribute('av_profile');
  }
  public set avProfile(value: string) {
    this._avProfile = value;
  }
  public resetAvProfile() {
    this._avProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get avProfileInput() {
    return this._avProfile;
  }

  // av_profile_status - computed: true, optional: true, required: false
  private _avProfileStatus?: string; 
  public get avProfileStatus() {
    return this.getStringAttribute('av_profile_status');
  }
  public set avProfileStatus(value: string) {
    this._avProfileStatus = value;
  }
  public resetAvProfileStatus() {
    this._avProfileStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get avProfileStatusInput() {
    return this._avProfileStatus;
  }

  // casb_profile - computed: false, optional: true, required: false
  private _casbProfile?: string; 
  public get casbProfile() {
    return this.getStringAttribute('casb_profile');
  }
  public set casbProfile(value: string) {
    this._casbProfile = value;
  }
  public resetCasbProfile() {
    this._casbProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get casbProfileInput() {
    return this._casbProfile;
  }

  // casb_profile_status - computed: true, optional: true, required: false
  private _casbProfileStatus?: string; 
  public get casbProfileStatus() {
    return this.getStringAttribute('casb_profile_status');
  }
  public set casbProfileStatus(value: string) {
    this._casbProfileStatus = value;
  }
  public resetCasbProfileStatus() {
    this._casbProfileStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get casbProfileStatusInput() {
    return this._casbProfileStatus;
  }

  // comments - computed: false, optional: true, required: false
  private _comments?: string; 
  public get comments() {
    return this.getStringAttribute('comments');
  }
  public set comments(value: string) {
    this._comments = value;
  }
  public resetComments() {
    this._comments = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commentsInput() {
    return this._comments;
  }

  // dlp_profile - computed: false, optional: true, required: false
  private _dlpProfile?: string; 
  public get dlpProfile() {
    return this.getStringAttribute('dlp_profile');
  }
  public set dlpProfile(value: string) {
    this._dlpProfile = value;
  }
  public resetDlpProfile() {
    this._dlpProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dlpProfileInput() {
    return this._dlpProfile;
  }

  // dlp_profile_status - computed: true, optional: true, required: false
  private _dlpProfileStatus?: string; 
  public get dlpProfileStatus() {
    return this.getStringAttribute('dlp_profile_status');
  }
  public set dlpProfileStatus(value: string) {
    this._dlpProfileStatus = value;
  }
  public resetDlpProfileStatus() {
    this._dlpProfileStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dlpProfileStatusInput() {
    return this._dlpProfileStatus;
  }

  // dlp_sensor - computed: false, optional: true, required: false
  private _dlpSensor?: string; 
  public get dlpSensor() {
    return this.getStringAttribute('dlp_sensor');
  }
  public set dlpSensor(value: string) {
    this._dlpSensor = value;
  }
  public resetDlpSensor() {
    this._dlpSensor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dlpSensorInput() {
    return this._dlpSensor;
  }

  // dlp_sensor_status - computed: true, optional: true, required: false
  private _dlpSensorStatus?: string; 
  public get dlpSensorStatus() {
    return this.getStringAttribute('dlp_sensor_status');
  }
  public set dlpSensorStatus(value: string) {
    this._dlpSensorStatus = value;
  }
  public resetDlpSensorStatus() {
    this._dlpSensorStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dlpSensorStatusInput() {
    return this._dlpSensorStatus;
  }

  // dsri - computed: true, optional: true, required: false
  private _dsri?: string; 
  public get dsri() {
    return this.getStringAttribute('dsri');
  }
  public set dsri(value: string) {
    this._dsri = value;
  }
  public resetDsri() {
    this._dsri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dsriInput() {
    return this._dsri;
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

  // emailfilter_profile - computed: false, optional: true, required: false
  private _emailfilterProfile?: string; 
  public get emailfilterProfile() {
    return this.getStringAttribute('emailfilter_profile');
  }
  public set emailfilterProfile(value: string) {
    this._emailfilterProfile = value;
  }
  public resetEmailfilterProfile() {
    this._emailfilterProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailfilterProfileInput() {
    return this._emailfilterProfile;
  }

  // emailfilter_profile_status - computed: true, optional: true, required: false
  private _emailfilterProfileStatus?: string; 
  public get emailfilterProfileStatus() {
    return this.getStringAttribute('emailfilter_profile_status');
  }
  public set emailfilterProfileStatus(value: string) {
    this._emailfilterProfileStatus = value;
  }
  public resetEmailfilterProfileStatus() {
    this._emailfilterProfileStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailfilterProfileStatusInput() {
    return this._emailfilterProfileStatus;
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

  // interface - computed: false, optional: false, required: true
  private _interface?: string; 
  public get interface() {
    return this.getStringAttribute('interface');
  }
  public set interface(value: string) {
    this._interface = value;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceInput() {
    return this._interface;
  }

  // ips_sensor - computed: false, optional: true, required: false
  private _ipsSensor?: string; 
  public get ipsSensor() {
    return this.getStringAttribute('ips_sensor');
  }
  public set ipsSensor(value: string) {
    this._ipsSensor = value;
  }
  public resetIpsSensor() {
    this._ipsSensor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipsSensorInput() {
    return this._ipsSensor;
  }

  // ips_sensor_status - computed: true, optional: true, required: false
  private _ipsSensorStatus?: string; 
  public get ipsSensorStatus() {
    return this.getStringAttribute('ips_sensor_status');
  }
  public set ipsSensorStatus(value: string) {
    this._ipsSensorStatus = value;
  }
  public resetIpsSensorStatus() {
    this._ipsSensorStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipsSensorStatusInput() {
    return this._ipsSensorStatus;
  }

  // label - computed: false, optional: true, required: false
  private _label?: string; 
  public get label() {
    return this.getStringAttribute('label');
  }
  public set label(value: string) {
    this._label = value;
  }
  public resetLabel() {
    this._label = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelInput() {
    return this._label;
  }

  // logtraffic - computed: true, optional: true, required: false
  private _logtraffic?: string; 
  public get logtraffic() {
    return this.getStringAttribute('logtraffic');
  }
  public set logtraffic(value: string) {
    this._logtraffic = value;
  }
  public resetLogtraffic() {
    this._logtraffic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logtrafficInput() {
    return this._logtraffic;
  }

  // policyid - computed: true, optional: true, required: false
  private _policyid?: number; 
  public get policyid() {
    return this.getNumberAttribute('policyid');
  }
  public set policyid(value: number) {
    this._policyid = value;
  }
  public resetPolicyid() {
    this._policyid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyidInput() {
    return this._policyid;
  }

  // scan_botnet_connections - computed: false, optional: true, required: false
  private _scanBotnetConnections?: string; 
  public get scanBotnetConnections() {
    return this.getStringAttribute('scan_botnet_connections');
  }
  public set scanBotnetConnections(value: string) {
    this._scanBotnetConnections = value;
  }
  public resetScanBotnetConnections() {
    this._scanBotnetConnections = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scanBotnetConnectionsInput() {
    return this._scanBotnetConnections;
  }

  // spamfilter_profile - computed: false, optional: true, required: false
  private _spamfilterProfile?: string; 
  public get spamfilterProfile() {
    return this.getStringAttribute('spamfilter_profile');
  }
  public set spamfilterProfile(value: string) {
    this._spamfilterProfile = value;
  }
  public resetSpamfilterProfile() {
    this._spamfilterProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spamfilterProfileInput() {
    return this._spamfilterProfile;
  }

  // spamfilter_profile_status - computed: false, optional: true, required: false
  private _spamfilterProfileStatus?: string; 
  public get spamfilterProfileStatus() {
    return this.getStringAttribute('spamfilter_profile_status');
  }
  public set spamfilterProfileStatus(value: string) {
    this._spamfilterProfileStatus = value;
  }
  public resetSpamfilterProfileStatus() {
    this._spamfilterProfileStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spamfilterProfileStatusInput() {
    return this._spamfilterProfileStatus;
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

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
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

  // webfilter_profile - computed: false, optional: true, required: false
  private _webfilterProfile?: string; 
  public get webfilterProfile() {
    return this.getStringAttribute('webfilter_profile');
  }
  public set webfilterProfile(value: string) {
    this._webfilterProfile = value;
  }
  public resetWebfilterProfile() {
    this._webfilterProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webfilterProfileInput() {
    return this._webfilterProfile;
  }

  // webfilter_profile_status - computed: true, optional: true, required: false
  private _webfilterProfileStatus?: string; 
  public get webfilterProfileStatus() {
    return this.getStringAttribute('webfilter_profile_status');
  }
  public set webfilterProfileStatus(value: string) {
    this._webfilterProfileStatus = value;
  }
  public resetWebfilterProfileStatus() {
    this._webfilterProfileStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webfilterProfileStatusInput() {
    return this._webfilterProfileStatus;
  }

  // dstaddr6 - computed: false, optional: false, required: true
  private _dstaddr6 = new FirewallInterfacepolicy6Dstaddr6List(this, "dstaddr6", true);
  public get dstaddr6() {
    return this._dstaddr6;
  }
  public putDstaddr6(value: FirewallInterfacepolicy6Dstaddr6[] | cdktf.IResolvable) {
    this._dstaddr6.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dstaddr6Input() {
    return this._dstaddr6.internalValue;
  }

  // service6 - computed: false, optional: true, required: false
  private _service6 = new FirewallInterfacepolicy6Service6List(this, "service6", true);
  public get service6() {
    return this._service6;
  }
  public putService6(value: FirewallInterfacepolicy6Service6[] | cdktf.IResolvable) {
    this._service6.internalValue = value;
  }
  public resetService6() {
    this._service6.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get service6Input() {
    return this._service6.internalValue;
  }

  // srcaddr6 - computed: false, optional: false, required: true
  private _srcaddr6 = new FirewallInterfacepolicy6Srcaddr6List(this, "srcaddr6", true);
  public get srcaddr6() {
    return this._srcaddr6;
  }
  public putSrcaddr6(value: FirewallInterfacepolicy6Srcaddr6[] | cdktf.IResolvable) {
    this._srcaddr6.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get srcaddr6Input() {
    return this._srcaddr6.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      address_type: cdktf.stringToTerraform(this._addressType),
      application_list: cdktf.stringToTerraform(this._applicationList),
      application_list_status: cdktf.stringToTerraform(this._applicationListStatus),
      av_profile: cdktf.stringToTerraform(this._avProfile),
      av_profile_status: cdktf.stringToTerraform(this._avProfileStatus),
      casb_profile: cdktf.stringToTerraform(this._casbProfile),
      casb_profile_status: cdktf.stringToTerraform(this._casbProfileStatus),
      comments: cdktf.stringToTerraform(this._comments),
      dlp_profile: cdktf.stringToTerraform(this._dlpProfile),
      dlp_profile_status: cdktf.stringToTerraform(this._dlpProfileStatus),
      dlp_sensor: cdktf.stringToTerraform(this._dlpSensor),
      dlp_sensor_status: cdktf.stringToTerraform(this._dlpSensorStatus),
      dsri: cdktf.stringToTerraform(this._dsri),
      dynamic_sort_subtable: cdktf.stringToTerraform(this._dynamicSortSubtable),
      emailfilter_profile: cdktf.stringToTerraform(this._emailfilterProfile),
      emailfilter_profile_status: cdktf.stringToTerraform(this._emailfilterProfileStatus),
      get_all_tables: cdktf.stringToTerraform(this._getAllTables),
      id: cdktf.stringToTerraform(this._id),
      interface: cdktf.stringToTerraform(this._interface),
      ips_sensor: cdktf.stringToTerraform(this._ipsSensor),
      ips_sensor_status: cdktf.stringToTerraform(this._ipsSensorStatus),
      label: cdktf.stringToTerraform(this._label),
      logtraffic: cdktf.stringToTerraform(this._logtraffic),
      policyid: cdktf.numberToTerraform(this._policyid),
      scan_botnet_connections: cdktf.stringToTerraform(this._scanBotnetConnections),
      spamfilter_profile: cdktf.stringToTerraform(this._spamfilterProfile),
      spamfilter_profile_status: cdktf.stringToTerraform(this._spamfilterProfileStatus),
      status: cdktf.stringToTerraform(this._status),
      uuid: cdktf.stringToTerraform(this._uuid),
      vdomparam: cdktf.stringToTerraform(this._vdomparam),
      webfilter_profile: cdktf.stringToTerraform(this._webfilterProfile),
      webfilter_profile_status: cdktf.stringToTerraform(this._webfilterProfileStatus),
      dstaddr6: cdktf.listMapper(firewallInterfacepolicy6Dstaddr6ToTerraform, true)(this._dstaddr6.internalValue),
      service6: cdktf.listMapper(firewallInterfacepolicy6Service6ToTerraform, true)(this._service6.internalValue),
      srcaddr6: cdktf.listMapper(firewallInterfacepolicy6Srcaddr6ToTerraform, true)(this._srcaddr6.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      address_type: {
        value: cdktf.stringToHclTerraform(this._addressType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      application_list: {
        value: cdktf.stringToHclTerraform(this._applicationList),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      application_list_status: {
        value: cdktf.stringToHclTerraform(this._applicationListStatus),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      av_profile: {
        value: cdktf.stringToHclTerraform(this._avProfile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      av_profile_status: {
        value: cdktf.stringToHclTerraform(this._avProfileStatus),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      casb_profile: {
        value: cdktf.stringToHclTerraform(this._casbProfile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      casb_profile_status: {
        value: cdktf.stringToHclTerraform(this._casbProfileStatus),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      comments: {
        value: cdktf.stringToHclTerraform(this._comments),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dlp_profile: {
        value: cdktf.stringToHclTerraform(this._dlpProfile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dlp_profile_status: {
        value: cdktf.stringToHclTerraform(this._dlpProfileStatus),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dlp_sensor: {
        value: cdktf.stringToHclTerraform(this._dlpSensor),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dlp_sensor_status: {
        value: cdktf.stringToHclTerraform(this._dlpSensorStatus),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dsri: {
        value: cdktf.stringToHclTerraform(this._dsri),
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
      emailfilter_profile: {
        value: cdktf.stringToHclTerraform(this._emailfilterProfile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      emailfilter_profile_status: {
        value: cdktf.stringToHclTerraform(this._emailfilterProfileStatus),
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
      interface: {
        value: cdktf.stringToHclTerraform(this._interface),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ips_sensor: {
        value: cdktf.stringToHclTerraform(this._ipsSensor),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ips_sensor_status: {
        value: cdktf.stringToHclTerraform(this._ipsSensorStatus),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      label: {
        value: cdktf.stringToHclTerraform(this._label),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      logtraffic: {
        value: cdktf.stringToHclTerraform(this._logtraffic),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      policyid: {
        value: cdktf.numberToHclTerraform(this._policyid),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      scan_botnet_connections: {
        value: cdktf.stringToHclTerraform(this._scanBotnetConnections),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      spamfilter_profile: {
        value: cdktf.stringToHclTerraform(this._spamfilterProfile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      spamfilter_profile_status: {
        value: cdktf.stringToHclTerraform(this._spamfilterProfileStatus),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      status: {
        value: cdktf.stringToHclTerraform(this._status),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      uuid: {
        value: cdktf.stringToHclTerraform(this._uuid),
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
      webfilter_profile: {
        value: cdktf.stringToHclTerraform(this._webfilterProfile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      webfilter_profile_status: {
        value: cdktf.stringToHclTerraform(this._webfilterProfileStatus),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dstaddr6: {
        value: cdktf.listMapperHcl(firewallInterfacepolicy6Dstaddr6ToHclTerraform, true)(this._dstaddr6.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "FirewallInterfacepolicy6Dstaddr6List",
      },
      service6: {
        value: cdktf.listMapperHcl(firewallInterfacepolicy6Service6ToHclTerraform, true)(this._service6.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "FirewallInterfacepolicy6Service6List",
      },
      srcaddr6: {
        value: cdktf.listMapperHcl(firewallInterfacepolicy6Srcaddr6ToHclTerraform, true)(this._srcaddr6.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "FirewallInterfacepolicy6Srcaddr6List",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
