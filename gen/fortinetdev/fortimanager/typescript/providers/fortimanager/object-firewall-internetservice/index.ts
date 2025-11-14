// https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_internetservice
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ObjectFirewallInternetserviceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_internetservice#adom ObjectFirewallInternetservice#adom}
  */
  readonly adom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_internetservice#city ObjectFirewallInternetservice#city}
  */
  readonly city?: number[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_internetservice#city6 ObjectFirewallInternetservice#city6}
  */
  readonly city6?: number[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_internetservice#country ObjectFirewallInternetservice#country}
  */
  readonly country?: number[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_internetservice#country6 ObjectFirewallInternetservice#country6}
  */
  readonly country6?: number[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_internetservice#database ObjectFirewallInternetservice#database}
  */
  readonly database?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_internetservice#direction ObjectFirewallInternetservice#direction}
  */
  readonly direction?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_internetservice#dynamic_sort_subtable ObjectFirewallInternetservice#dynamic_sort_subtable}
  */
  readonly dynamicSortSubtable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_internetservice#extra_ip6_range_number ObjectFirewallInternetservice#extra_ip6_range_number}
  */
  readonly extraIp6RangeNumber?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_internetservice#extra_ip_range_number ObjectFirewallInternetservice#extra_ip_range_number}
  */
  readonly extraIpRangeNumber?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_internetservice#fosid ObjectFirewallInternetservice#fosid}
  */
  readonly fosid?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_internetservice#icon_id ObjectFirewallInternetservice#icon_id}
  */
  readonly iconId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_internetservice#id ObjectFirewallInternetservice#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_internetservice#ip6_range_number ObjectFirewallInternetservice#ip6_range_number}
  */
  readonly ip6RangeNumber?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_internetservice#ip_number ObjectFirewallInternetservice#ip_number}
  */
  readonly ipNumber?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_internetservice#ip_range_number ObjectFirewallInternetservice#ip_range_number}
  */
  readonly ipRangeNumber?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_internetservice#jitter_threshold ObjectFirewallInternetservice#jitter_threshold}
  */
  readonly jitterThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_internetservice#latency_threshold ObjectFirewallInternetservice#latency_threshold}
  */
  readonly latencyThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_internetservice#name ObjectFirewallInternetservice#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_internetservice#obsolete ObjectFirewallInternetservice#obsolete}
  */
  readonly obsolete?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_internetservice#offset ObjectFirewallInternetservice#offset}
  */
  readonly offset?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_internetservice#packetloss_threshold ObjectFirewallInternetservice#packetloss_threshold}
  */
  readonly packetlossThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_internetservice#region ObjectFirewallInternetservice#region}
  */
  readonly region?: number[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_internetservice#region6 ObjectFirewallInternetservice#region6}
  */
  readonly region6?: number[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_internetservice#reputation ObjectFirewallInternetservice#reputation}
  */
  readonly reputation?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_internetservice#scopetype ObjectFirewallInternetservice#scopetype}
  */
  readonly scopetype?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_internetservice#singularity ObjectFirewallInternetservice#singularity}
  */
  readonly singularity?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_internetservice#sld_id ObjectFirewallInternetservice#sld_id}
  */
  readonly sldId?: number;
  /**
  * entry block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_internetservice#entry ObjectFirewallInternetservice#entry}
  */
  readonly entry?: ObjectFirewallInternetserviceEntry[] | cdktf.IResolvable;
}
export interface ObjectFirewallInternetserviceEntry {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_internetservice#id ObjectFirewallInternetservice#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_internetservice#ip_number ObjectFirewallInternetservice#ip_number}
  */
  readonly ipNumber?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_internetservice#ip_range_number ObjectFirewallInternetservice#ip_range_number}
  */
  readonly ipRangeNumber?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_internetservice#port ObjectFirewallInternetservice#port}
  */
  readonly port?: number[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_internetservice#protocol ObjectFirewallInternetservice#protocol}
  */
  readonly protocol?: number;
}

export function objectFirewallInternetserviceEntryToTerraform(struct?: ObjectFirewallInternetserviceEntry | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.numberToTerraform(struct!.id),
    ip_number: cdktf.numberToTerraform(struct!.ipNumber),
    ip_range_number: cdktf.numberToTerraform(struct!.ipRangeNumber),
    port: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.port),
    protocol: cdktf.numberToTerraform(struct!.protocol),
  }
}


export function objectFirewallInternetserviceEntryToHclTerraform(struct?: ObjectFirewallInternetserviceEntry | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.numberToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ip_number: {
      value: cdktf.numberToHclTerraform(struct!.ipNumber),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ip_range_number: {
      value: cdktf.numberToHclTerraform(struct!.ipRangeNumber),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    port: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.port),
      isBlock: false,
      type: "set",
      storageClassType: "numberList",
    },
    protocol: {
      value: cdktf.numberToHclTerraform(struct!.protocol),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObjectFirewallInternetserviceEntryOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ObjectFirewallInternetserviceEntry | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._ipNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipNumber = this._ipNumber;
    }
    if (this._ipRangeNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipRangeNumber = this._ipRangeNumber;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObjectFirewallInternetserviceEntry | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._ipNumber = undefined;
      this._ipRangeNumber = undefined;
      this._port = undefined;
      this._protocol = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._ipNumber = value.ipNumber;
      this._ipRangeNumber = value.ipRangeNumber;
      this._port = value.port;
      this._protocol = value.protocol;
    }
  }

  // id - computed: false, optional: true, required: false
  private _id?: number; 
  public get id() {
    return this.getNumberAttribute('id');
  }
  public set id(value: number) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // ip_number - computed: false, optional: true, required: false
  private _ipNumber?: number; 
  public get ipNumber() {
    return this.getNumberAttribute('ip_number');
  }
  public set ipNumber(value: number) {
    this._ipNumber = value;
  }
  public resetIpNumber() {
    this._ipNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipNumberInput() {
    return this._ipNumber;
  }

  // ip_range_number - computed: false, optional: true, required: false
  private _ipRangeNumber?: number; 
  public get ipRangeNumber() {
    return this.getNumberAttribute('ip_range_number');
  }
  public set ipRangeNumber(value: number) {
    this._ipRangeNumber = value;
  }
  public resetIpRangeNumber() {
    this._ipRangeNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipRangeNumberInput() {
    return this._ipRangeNumber;
  }

  // port - computed: true, optional: true, required: false
  private _port?: number[]; 
  public get port() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('port')));
  }
  public set port(value: number[]) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // protocol - computed: false, optional: true, required: false
  private _protocol?: number; 
  public get protocol() {
    return this.getNumberAttribute('protocol');
  }
  public set protocol(value: number) {
    this._protocol = value;
  }
  public resetProtocol() {
    this._protocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }
}

export class ObjectFirewallInternetserviceEntryList extends cdktf.ComplexList {
  public internalValue? : ObjectFirewallInternetserviceEntry[] | cdktf.IResolvable

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
  public get(index: number): ObjectFirewallInternetserviceEntryOutputReference {
    return new ObjectFirewallInternetserviceEntryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_internetservice fortimanager_object_firewall_internetservice}
*/
export class ObjectFirewallInternetservice extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortimanager_object_firewall_internetservice";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ObjectFirewallInternetservice resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ObjectFirewallInternetservice to import
  * @param importFromId The id of the existing ObjectFirewallInternetservice that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_internetservice#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ObjectFirewallInternetservice to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortimanager_object_firewall_internetservice", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_internetservice fortimanager_object_firewall_internetservice} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ObjectFirewallInternetserviceConfig = {}
  */
  public constructor(scope: Construct, id: string, config: ObjectFirewallInternetserviceConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fortimanager_object_firewall_internetservice',
      terraformGeneratorMetadata: {
        providerName: 'fortimanager',
        providerVersion: '1.15.0',
        providerVersionConstraint: '1.15.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._adom = config.adom;
    this._city = config.city;
    this._city6 = config.city6;
    this._country = config.country;
    this._country6 = config.country6;
    this._database = config.database;
    this._direction = config.direction;
    this._dynamicSortSubtable = config.dynamicSortSubtable;
    this._extraIp6RangeNumber = config.extraIp6RangeNumber;
    this._extraIpRangeNumber = config.extraIpRangeNumber;
    this._fosid = config.fosid;
    this._iconId = config.iconId;
    this._id = config.id;
    this._ip6RangeNumber = config.ip6RangeNumber;
    this._ipNumber = config.ipNumber;
    this._ipRangeNumber = config.ipRangeNumber;
    this._jitterThreshold = config.jitterThreshold;
    this._latencyThreshold = config.latencyThreshold;
    this._name = config.name;
    this._obsolete = config.obsolete;
    this._offset = config.offset;
    this._packetlossThreshold = config.packetlossThreshold;
    this._region = config.region;
    this._region6 = config.region6;
    this._reputation = config.reputation;
    this._scopetype = config.scopetype;
    this._singularity = config.singularity;
    this._sldId = config.sldId;
    this._entry.internalValue = config.entry;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // adom - computed: false, optional: true, required: false
  private _adom?: string; 
  public get adom() {
    return this.getStringAttribute('adom');
  }
  public set adom(value: string) {
    this._adom = value;
  }
  public resetAdom() {
    this._adom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adomInput() {
    return this._adom;
  }

  // city - computed: true, optional: true, required: false
  private _city?: number[]; 
  public get city() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('city')));
  }
  public set city(value: number[]) {
    this._city = value;
  }
  public resetCity() {
    this._city = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cityInput() {
    return this._city;
  }

  // city6 - computed: true, optional: true, required: false
  private _city6?: number[]; 
  public get city6() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('city6')));
  }
  public set city6(value: number[]) {
    this._city6 = value;
  }
  public resetCity6() {
    this._city6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get city6Input() {
    return this._city6;
  }

  // country - computed: true, optional: true, required: false
  private _country?: number[]; 
  public get country() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('country')));
  }
  public set country(value: number[]) {
    this._country = value;
  }
  public resetCountry() {
    this._country = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get countryInput() {
    return this._country;
  }

  // country6 - computed: true, optional: true, required: false
  private _country6?: number[]; 
  public get country6() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('country6')));
  }
  public set country6(value: number[]) {
    this._country6 = value;
  }
  public resetCountry6() {
    this._country6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get country6Input() {
    return this._country6;
  }

  // database - computed: true, optional: true, required: false
  private _database?: string; 
  public get database() {
    return this.getStringAttribute('database');
  }
  public set database(value: string) {
    this._database = value;
  }
  public resetDatabase() {
    this._database = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseInput() {
    return this._database;
  }

  // direction - computed: true, optional: true, required: false
  private _direction?: string; 
  public get direction() {
    return this.getStringAttribute('direction');
  }
  public set direction(value: string) {
    this._direction = value;
  }
  public resetDirection() {
    this._direction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get directionInput() {
    return this._direction;
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

  // extra_ip6_range_number - computed: false, optional: true, required: false
  private _extraIp6RangeNumber?: number; 
  public get extraIp6RangeNumber() {
    return this.getNumberAttribute('extra_ip6_range_number');
  }
  public set extraIp6RangeNumber(value: number) {
    this._extraIp6RangeNumber = value;
  }
  public resetExtraIp6RangeNumber() {
    this._extraIp6RangeNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extraIp6RangeNumberInput() {
    return this._extraIp6RangeNumber;
  }

  // extra_ip_range_number - computed: false, optional: true, required: false
  private _extraIpRangeNumber?: number; 
  public get extraIpRangeNumber() {
    return this.getNumberAttribute('extra_ip_range_number');
  }
  public set extraIpRangeNumber(value: number) {
    this._extraIpRangeNumber = value;
  }
  public resetExtraIpRangeNumber() {
    this._extraIpRangeNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extraIpRangeNumberInput() {
    return this._extraIpRangeNumber;
  }

  // fosid - computed: false, optional: true, required: false
  private _fosid?: number; 
  public get fosid() {
    return this.getNumberAttribute('fosid');
  }
  public set fosid(value: number) {
    this._fosid = value;
  }
  public resetFosid() {
    this._fosid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fosidInput() {
    return this._fosid;
  }

  // icon_id - computed: false, optional: true, required: false
  private _iconId?: number; 
  public get iconId() {
    return this.getNumberAttribute('icon_id');
  }
  public set iconId(value: number) {
    this._iconId = value;
  }
  public resetIconId() {
    this._iconId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iconIdInput() {
    return this._iconId;
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

  // ip6_range_number - computed: false, optional: true, required: false
  private _ip6RangeNumber?: number; 
  public get ip6RangeNumber() {
    return this.getNumberAttribute('ip6_range_number');
  }
  public set ip6RangeNumber(value: number) {
    this._ip6RangeNumber = value;
  }
  public resetIp6RangeNumber() {
    this._ip6RangeNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ip6RangeNumberInput() {
    return this._ip6RangeNumber;
  }

  // ip_number - computed: false, optional: true, required: false
  private _ipNumber?: number; 
  public get ipNumber() {
    return this.getNumberAttribute('ip_number');
  }
  public set ipNumber(value: number) {
    this._ipNumber = value;
  }
  public resetIpNumber() {
    this._ipNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipNumberInput() {
    return this._ipNumber;
  }

  // ip_range_number - computed: false, optional: true, required: false
  private _ipRangeNumber?: number; 
  public get ipRangeNumber() {
    return this.getNumberAttribute('ip_range_number');
  }
  public set ipRangeNumber(value: number) {
    this._ipRangeNumber = value;
  }
  public resetIpRangeNumber() {
    this._ipRangeNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipRangeNumberInput() {
    return this._ipRangeNumber;
  }

  // jitter_threshold - computed: false, optional: true, required: false
  private _jitterThreshold?: number; 
  public get jitterThreshold() {
    return this.getNumberAttribute('jitter_threshold');
  }
  public set jitterThreshold(value: number) {
    this._jitterThreshold = value;
  }
  public resetJitterThreshold() {
    this._jitterThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jitterThresholdInput() {
    return this._jitterThreshold;
  }

  // latency_threshold - computed: false, optional: true, required: false
  private _latencyThreshold?: number; 
  public get latencyThreshold() {
    return this.getNumberAttribute('latency_threshold');
  }
  public set latencyThreshold(value: number) {
    this._latencyThreshold = value;
  }
  public resetLatencyThreshold() {
    this._latencyThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get latencyThresholdInput() {
    return this._latencyThreshold;
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

  // obsolete - computed: false, optional: true, required: false
  private _obsolete?: number; 
  public get obsolete() {
    return this.getNumberAttribute('obsolete');
  }
  public set obsolete(value: number) {
    this._obsolete = value;
  }
  public resetObsolete() {
    this._obsolete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get obsoleteInput() {
    return this._obsolete;
  }

  // offset - computed: false, optional: true, required: false
  private _offset?: number; 
  public get offset() {
    return this.getNumberAttribute('offset');
  }
  public set offset(value: number) {
    this._offset = value;
  }
  public resetOffset() {
    this._offset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get offsetInput() {
    return this._offset;
  }

  // packetloss_threshold - computed: false, optional: true, required: false
  private _packetlossThreshold?: number; 
  public get packetlossThreshold() {
    return this.getNumberAttribute('packetloss_threshold');
  }
  public set packetlossThreshold(value: number) {
    this._packetlossThreshold = value;
  }
  public resetPacketlossThreshold() {
    this._packetlossThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packetlossThresholdInput() {
    return this._packetlossThreshold;
  }

  // region - computed: true, optional: true, required: false
  private _region?: number[]; 
  public get region() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('region')));
  }
  public set region(value: number[]) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // region6 - computed: true, optional: true, required: false
  private _region6?: number[]; 
  public get region6() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('region6')));
  }
  public set region6(value: number[]) {
    this._region6 = value;
  }
  public resetRegion6() {
    this._region6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get region6Input() {
    return this._region6;
  }

  // reputation - computed: false, optional: true, required: false
  private _reputation?: number; 
  public get reputation() {
    return this.getNumberAttribute('reputation');
  }
  public set reputation(value: number) {
    this._reputation = value;
  }
  public resetReputation() {
    this._reputation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reputationInput() {
    return this._reputation;
  }

  // scopetype - computed: false, optional: true, required: false
  private _scopetype?: string; 
  public get scopetype() {
    return this.getStringAttribute('scopetype');
  }
  public set scopetype(value: string) {
    this._scopetype = value;
  }
  public resetScopetype() {
    this._scopetype = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopetypeInput() {
    return this._scopetype;
  }

  // singularity - computed: false, optional: true, required: false
  private _singularity?: number; 
  public get singularity() {
    return this.getNumberAttribute('singularity');
  }
  public set singularity(value: number) {
    this._singularity = value;
  }
  public resetSingularity() {
    this._singularity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get singularityInput() {
    return this._singularity;
  }

  // sld_id - computed: false, optional: true, required: false
  private _sldId?: number; 
  public get sldId() {
    return this.getNumberAttribute('sld_id');
  }
  public set sldId(value: number) {
    this._sldId = value;
  }
  public resetSldId() {
    this._sldId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sldIdInput() {
    return this._sldId;
  }

  // entry - computed: false, optional: true, required: false
  private _entry = new ObjectFirewallInternetserviceEntryList(this, "entry", false);
  public get entry() {
    return this._entry;
  }
  public putEntry(value: ObjectFirewallInternetserviceEntry[] | cdktf.IResolvable) {
    this._entry.internalValue = value;
  }
  public resetEntry() {
    this._entry.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entryInput() {
    return this._entry.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      adom: cdktf.stringToTerraform(this._adom),
      city: cdktf.listMapper(cdktf.numberToTerraform, false)(this._city),
      city6: cdktf.listMapper(cdktf.numberToTerraform, false)(this._city6),
      country: cdktf.listMapper(cdktf.numberToTerraform, false)(this._country),
      country6: cdktf.listMapper(cdktf.numberToTerraform, false)(this._country6),
      database: cdktf.stringToTerraform(this._database),
      direction: cdktf.stringToTerraform(this._direction),
      dynamic_sort_subtable: cdktf.stringToTerraform(this._dynamicSortSubtable),
      extra_ip6_range_number: cdktf.numberToTerraform(this._extraIp6RangeNumber),
      extra_ip_range_number: cdktf.numberToTerraform(this._extraIpRangeNumber),
      fosid: cdktf.numberToTerraform(this._fosid),
      icon_id: cdktf.numberToTerraform(this._iconId),
      id: cdktf.stringToTerraform(this._id),
      ip6_range_number: cdktf.numberToTerraform(this._ip6RangeNumber),
      ip_number: cdktf.numberToTerraform(this._ipNumber),
      ip_range_number: cdktf.numberToTerraform(this._ipRangeNumber),
      jitter_threshold: cdktf.numberToTerraform(this._jitterThreshold),
      latency_threshold: cdktf.numberToTerraform(this._latencyThreshold),
      name: cdktf.stringToTerraform(this._name),
      obsolete: cdktf.numberToTerraform(this._obsolete),
      offset: cdktf.numberToTerraform(this._offset),
      packetloss_threshold: cdktf.numberToTerraform(this._packetlossThreshold),
      region: cdktf.listMapper(cdktf.numberToTerraform, false)(this._region),
      region6: cdktf.listMapper(cdktf.numberToTerraform, false)(this._region6),
      reputation: cdktf.numberToTerraform(this._reputation),
      scopetype: cdktf.stringToTerraform(this._scopetype),
      singularity: cdktf.numberToTerraform(this._singularity),
      sld_id: cdktf.numberToTerraform(this._sldId),
      entry: cdktf.listMapper(objectFirewallInternetserviceEntryToTerraform, true)(this._entry.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      adom: {
        value: cdktf.stringToHclTerraform(this._adom),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      city: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._city),
        isBlock: false,
        type: "set",
        storageClassType: "numberList",
      },
      city6: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._city6),
        isBlock: false,
        type: "set",
        storageClassType: "numberList",
      },
      country: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._country),
        isBlock: false,
        type: "set",
        storageClassType: "numberList",
      },
      country6: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._country6),
        isBlock: false,
        type: "set",
        storageClassType: "numberList",
      },
      database: {
        value: cdktf.stringToHclTerraform(this._database),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      direction: {
        value: cdktf.stringToHclTerraform(this._direction),
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
      extra_ip6_range_number: {
        value: cdktf.numberToHclTerraform(this._extraIp6RangeNumber),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      extra_ip_range_number: {
        value: cdktf.numberToHclTerraform(this._extraIpRangeNumber),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      fosid: {
        value: cdktf.numberToHclTerraform(this._fosid),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      icon_id: {
        value: cdktf.numberToHclTerraform(this._iconId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ip6_range_number: {
        value: cdktf.numberToHclTerraform(this._ip6RangeNumber),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ip_number: {
        value: cdktf.numberToHclTerraform(this._ipNumber),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ip_range_number: {
        value: cdktf.numberToHclTerraform(this._ipRangeNumber),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      jitter_threshold: {
        value: cdktf.numberToHclTerraform(this._jitterThreshold),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      latency_threshold: {
        value: cdktf.numberToHclTerraform(this._latencyThreshold),
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
      obsolete: {
        value: cdktf.numberToHclTerraform(this._obsolete),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      offset: {
        value: cdktf.numberToHclTerraform(this._offset),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      packetloss_threshold: {
        value: cdktf.numberToHclTerraform(this._packetlossThreshold),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      region: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._region),
        isBlock: false,
        type: "set",
        storageClassType: "numberList",
      },
      region6: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._region6),
        isBlock: false,
        type: "set",
        storageClassType: "numberList",
      },
      reputation: {
        value: cdktf.numberToHclTerraform(this._reputation),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      scopetype: {
        value: cdktf.stringToHclTerraform(this._scopetype),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      singularity: {
        value: cdktf.numberToHclTerraform(this._singularity),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      sld_id: {
        value: cdktf.numberToHclTerraform(this._sldId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      entry: {
        value: cdktf.listMapperHcl(objectFirewallInternetserviceEntryToHclTerraform, true)(this._entry.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ObjectFirewallInternetserviceEntryList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
