// https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewallservice_custom
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface FirewallserviceCustomConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewallservice_custom#app_service_type FirewallserviceCustom#app_service_type}
  */
  readonly appServiceType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewallservice_custom#category FirewallserviceCustom#category}
  */
  readonly category?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewallservice_custom#check_reset_range FirewallserviceCustom#check_reset_range}
  */
  readonly checkResetRange?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewallservice_custom#color FirewallserviceCustom#color}
  */
  readonly color?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewallservice_custom#comment FirewallserviceCustom#comment}
  */
  readonly comment?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewallservice_custom#dynamic_sort_subtable FirewallserviceCustom#dynamic_sort_subtable}
  */
  readonly dynamicSortSubtable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewallservice_custom#fabric_object FirewallserviceCustom#fabric_object}
  */
  readonly fabricObject?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewallservice_custom#fqdn FirewallserviceCustom#fqdn}
  */
  readonly fqdn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewallservice_custom#get_all_tables FirewallserviceCustom#get_all_tables}
  */
  readonly fetchAllTables?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewallservice_custom#helper FirewallserviceCustom#helper}
  */
  readonly helper?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewallservice_custom#icmpcode FirewallserviceCustom#icmpcode}
  */
  readonly icmpcode?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewallservice_custom#icmptype FirewallserviceCustom#icmptype}
  */
  readonly icmptype?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewallservice_custom#id FirewallserviceCustom#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewallservice_custom#iprange FirewallserviceCustom#iprange}
  */
  readonly iprange?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewallservice_custom#name FirewallserviceCustom#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewallservice_custom#protocol FirewallserviceCustom#protocol}
  */
  readonly protocol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewallservice_custom#protocol_number FirewallserviceCustom#protocol_number}
  */
  readonly protocolNumber?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewallservice_custom#proxy FirewallserviceCustom#proxy}
  */
  readonly proxy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewallservice_custom#sctp_portrange FirewallserviceCustom#sctp_portrange}
  */
  readonly sctpPortrange?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewallservice_custom#session_ttl FirewallserviceCustom#session_ttl}
  */
  readonly sessionTtl?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewallservice_custom#tcp_halfclose_timer FirewallserviceCustom#tcp_halfclose_timer}
  */
  readonly tcpHalfcloseTimer?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewallservice_custom#tcp_halfopen_timer FirewallserviceCustom#tcp_halfopen_timer}
  */
  readonly tcpHalfopenTimer?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewallservice_custom#tcp_portrange FirewallserviceCustom#tcp_portrange}
  */
  readonly tcpPortrange?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewallservice_custom#tcp_rst_timer FirewallserviceCustom#tcp_rst_timer}
  */
  readonly tcpRstTimer?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewallservice_custom#tcp_timewait_timer FirewallserviceCustom#tcp_timewait_timer}
  */
  readonly tcpTimewaitTimer?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewallservice_custom#udp_idle_timer FirewallserviceCustom#udp_idle_timer}
  */
  readonly udpIdleTimer?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewallservice_custom#udp_portrange FirewallserviceCustom#udp_portrange}
  */
  readonly udpPortrange?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewallservice_custom#udplite_portrange FirewallserviceCustom#udplite_portrange}
  */
  readonly udplitePortrange?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewallservice_custom#uuid FirewallserviceCustom#uuid}
  */
  readonly uuid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewallservice_custom#vdomparam FirewallserviceCustom#vdomparam}
  */
  readonly vdomparam?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewallservice_custom#visibility FirewallserviceCustom#visibility}
  */
  readonly visibility?: string;
  /**
  * app_category block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewallservice_custom#app_category FirewallserviceCustom#app_category}
  */
  readonly appCategory?: FirewallserviceCustomAppCategory[] | cdktf.IResolvable;
  /**
  * application block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewallservice_custom#application FirewallserviceCustom#application}
  */
  readonly application?: FirewallserviceCustomApplication[] | cdktf.IResolvable;
}
export interface FirewallserviceCustomAppCategory {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewallservice_custom#id FirewallserviceCustom#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
}

export function firewallserviceCustomAppCategoryToTerraform(struct?: FirewallserviceCustomAppCategory | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.numberToTerraform(struct!.id),
  }
}


export function firewallserviceCustomAppCategoryToHclTerraform(struct?: FirewallserviceCustomAppCategory | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FirewallserviceCustomAppCategoryOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FirewallserviceCustomAppCategory | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FirewallserviceCustomAppCategory | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
    }
  }

  // id - computed: true, optional: true, required: false
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
}

export class FirewallserviceCustomAppCategoryList extends cdktf.ComplexList {
  public internalValue? : FirewallserviceCustomAppCategory[] | cdktf.IResolvable

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
  public get(index: number): FirewallserviceCustomAppCategoryOutputReference {
    return new FirewallserviceCustomAppCategoryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FirewallserviceCustomApplication {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewallservice_custom#id FirewallserviceCustom#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
}

export function firewallserviceCustomApplicationToTerraform(struct?: FirewallserviceCustomApplication | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.numberToTerraform(struct!.id),
  }
}


export function firewallserviceCustomApplicationToHclTerraform(struct?: FirewallserviceCustomApplication | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FirewallserviceCustomApplicationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FirewallserviceCustomApplication | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FirewallserviceCustomApplication | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
    }
  }

  // id - computed: true, optional: true, required: false
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
}

export class FirewallserviceCustomApplicationList extends cdktf.ComplexList {
  public internalValue? : FirewallserviceCustomApplication[] | cdktf.IResolvable

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
  public get(index: number): FirewallserviceCustomApplicationOutputReference {
    return new FirewallserviceCustomApplicationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewallservice_custom fortios_firewallservice_custom}
*/
export class FirewallserviceCustom extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortios_firewallservice_custom";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a FirewallserviceCustom resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the FirewallserviceCustom to import
  * @param importFromId The id of the existing FirewallserviceCustom that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewallservice_custom#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the FirewallserviceCustom to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortios_firewallservice_custom", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewallservice_custom fortios_firewallservice_custom} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FirewallserviceCustomConfig = {}
  */
  public constructor(scope: Construct, id: string, config: FirewallserviceCustomConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fortios_firewallservice_custom',
      terraformGeneratorMetadata: {
        providerName: 'fortios',
        providerVersion: '1.23.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._appServiceType = config.appServiceType;
    this._category = config.category;
    this._checkResetRange = config.checkResetRange;
    this._color = config.color;
    this._comment = config.comment;
    this._dynamicSortSubtable = config.dynamicSortSubtable;
    this._fabricObject = config.fabricObject;
    this._fqdn = config.fqdn;
    this._getAllTables = config.fetchAllTables;
    this._helper = config.helper;
    this._icmpcode = config.icmpcode;
    this._icmptype = config.icmptype;
    this._id = config.id;
    this._iprange = config.iprange;
    this._name = config.name;
    this._protocol = config.protocol;
    this._protocolNumber = config.protocolNumber;
    this._proxy = config.proxy;
    this._sctpPortrange = config.sctpPortrange;
    this._sessionTtl = config.sessionTtl;
    this._tcpHalfcloseTimer = config.tcpHalfcloseTimer;
    this._tcpHalfopenTimer = config.tcpHalfopenTimer;
    this._tcpPortrange = config.tcpPortrange;
    this._tcpRstTimer = config.tcpRstTimer;
    this._tcpTimewaitTimer = config.tcpTimewaitTimer;
    this._udpIdleTimer = config.udpIdleTimer;
    this._udpPortrange = config.udpPortrange;
    this._udplitePortrange = config.udplitePortrange;
    this._uuid = config.uuid;
    this._vdomparam = config.vdomparam;
    this._visibility = config.visibility;
    this._appCategory.internalValue = config.appCategory;
    this._application.internalValue = config.application;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // app_service_type - computed: true, optional: true, required: false
  private _appServiceType?: string; 
  public get appServiceType() {
    return this.getStringAttribute('app_service_type');
  }
  public set appServiceType(value: string) {
    this._appServiceType = value;
  }
  public resetAppServiceType() {
    this._appServiceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appServiceTypeInput() {
    return this._appServiceType;
  }

  // category - computed: false, optional: true, required: false
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

  // check_reset_range - computed: true, optional: true, required: false
  private _checkResetRange?: string; 
  public get checkResetRange() {
    return this.getStringAttribute('check_reset_range');
  }
  public set checkResetRange(value: string) {
    this._checkResetRange = value;
  }
  public resetCheckResetRange() {
    this._checkResetRange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get checkResetRangeInput() {
    return this._checkResetRange;
  }

  // color - computed: false, optional: true, required: false
  private _color?: number; 
  public get color() {
    return this.getNumberAttribute('color');
  }
  public set color(value: number) {
    this._color = value;
  }
  public resetColor() {
    this._color = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get colorInput() {
    return this._color;
  }

  // comment - computed: false, optional: true, required: false
  private _comment?: string; 
  public get comment() {
    return this.getStringAttribute('comment');
  }
  public set comment(value: string) {
    this._comment = value;
  }
  public resetComment() {
    this._comment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commentInput() {
    return this._comment;
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

  // fabric_object - computed: true, optional: true, required: false
  private _fabricObject?: string; 
  public get fabricObject() {
    return this.getStringAttribute('fabric_object');
  }
  public set fabricObject(value: string) {
    this._fabricObject = value;
  }
  public resetFabricObject() {
    this._fabricObject = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fabricObjectInput() {
    return this._fabricObject;
  }

  // fqdn - computed: false, optional: true, required: false
  private _fqdn?: string; 
  public get fqdn() {
    return this.getStringAttribute('fqdn');
  }
  public set fqdn(value: string) {
    this._fqdn = value;
  }
  public resetFqdn() {
    this._fqdn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fqdnInput() {
    return this._fqdn;
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

  // helper - computed: true, optional: true, required: false
  private _helper?: string; 
  public get helper() {
    return this.getStringAttribute('helper');
  }
  public set helper(value: string) {
    this._helper = value;
  }
  public resetHelper() {
    this._helper = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get helperInput() {
    return this._helper;
  }

  // icmpcode - computed: false, optional: true, required: false
  private _icmpcode?: number; 
  public get icmpcode() {
    return this.getNumberAttribute('icmpcode');
  }
  public set icmpcode(value: number) {
    this._icmpcode = value;
  }
  public resetIcmpcode() {
    this._icmpcode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icmpcodeInput() {
    return this._icmpcode;
  }

  // icmptype - computed: false, optional: true, required: false
  private _icmptype?: number; 
  public get icmptype() {
    return this.getNumberAttribute('icmptype');
  }
  public set icmptype(value: number) {
    this._icmptype = value;
  }
  public resetIcmptype() {
    this._icmptype = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icmptypeInput() {
    return this._icmptype;
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

  // iprange - computed: true, optional: true, required: false
  private _iprange?: string; 
  public get iprange() {
    return this.getStringAttribute('iprange');
  }
  public set iprange(value: string) {
    this._iprange = value;
  }
  public resetIprange() {
    this._iprange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iprangeInput() {
    return this._iprange;
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

  // protocol - computed: true, optional: true, required: false
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  public resetProtocol() {
    this._protocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }

  // protocol_number - computed: true, optional: true, required: false
  private _protocolNumber?: number; 
  public get protocolNumber() {
    return this.getNumberAttribute('protocol_number');
  }
  public set protocolNumber(value: number) {
    this._protocolNumber = value;
  }
  public resetProtocolNumber() {
    this._protocolNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolNumberInput() {
    return this._protocolNumber;
  }

  // proxy - computed: true, optional: true, required: false
  private _proxy?: string; 
  public get proxy() {
    return this.getStringAttribute('proxy');
  }
  public set proxy(value: string) {
    this._proxy = value;
  }
  public resetProxy() {
    this._proxy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyInput() {
    return this._proxy;
  }

  // sctp_portrange - computed: false, optional: true, required: false
  private _sctpPortrange?: string; 
  public get sctpPortrange() {
    return this.getStringAttribute('sctp_portrange');
  }
  public set sctpPortrange(value: string) {
    this._sctpPortrange = value;
  }
  public resetSctpPortrange() {
    this._sctpPortrange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sctpPortrangeInput() {
    return this._sctpPortrange;
  }

  // session_ttl - computed: false, optional: true, required: false
  private _sessionTtl?: number; 
  public get sessionTtl() {
    return this.getNumberAttribute('session_ttl');
  }
  public set sessionTtl(value: number) {
    this._sessionTtl = value;
  }
  public resetSessionTtl() {
    this._sessionTtl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionTtlInput() {
    return this._sessionTtl;
  }

  // tcp_halfclose_timer - computed: false, optional: true, required: false
  private _tcpHalfcloseTimer?: number; 
  public get tcpHalfcloseTimer() {
    return this.getNumberAttribute('tcp_halfclose_timer');
  }
  public set tcpHalfcloseTimer(value: number) {
    this._tcpHalfcloseTimer = value;
  }
  public resetTcpHalfcloseTimer() {
    this._tcpHalfcloseTimer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpHalfcloseTimerInput() {
    return this._tcpHalfcloseTimer;
  }

  // tcp_halfopen_timer - computed: false, optional: true, required: false
  private _tcpHalfopenTimer?: number; 
  public get tcpHalfopenTimer() {
    return this.getNumberAttribute('tcp_halfopen_timer');
  }
  public set tcpHalfopenTimer(value: number) {
    this._tcpHalfopenTimer = value;
  }
  public resetTcpHalfopenTimer() {
    this._tcpHalfopenTimer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpHalfopenTimerInput() {
    return this._tcpHalfopenTimer;
  }

  // tcp_portrange - computed: false, optional: true, required: false
  private _tcpPortrange?: string; 
  public get tcpPortrange() {
    return this.getStringAttribute('tcp_portrange');
  }
  public set tcpPortrange(value: string) {
    this._tcpPortrange = value;
  }
  public resetTcpPortrange() {
    this._tcpPortrange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpPortrangeInput() {
    return this._tcpPortrange;
  }

  // tcp_rst_timer - computed: false, optional: true, required: false
  private _tcpRstTimer?: number; 
  public get tcpRstTimer() {
    return this.getNumberAttribute('tcp_rst_timer');
  }
  public set tcpRstTimer(value: number) {
    this._tcpRstTimer = value;
  }
  public resetTcpRstTimer() {
    this._tcpRstTimer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpRstTimerInput() {
    return this._tcpRstTimer;
  }

  // tcp_timewait_timer - computed: false, optional: true, required: false
  private _tcpTimewaitTimer?: number; 
  public get tcpTimewaitTimer() {
    return this.getNumberAttribute('tcp_timewait_timer');
  }
  public set tcpTimewaitTimer(value: number) {
    this._tcpTimewaitTimer = value;
  }
  public resetTcpTimewaitTimer() {
    this._tcpTimewaitTimer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpTimewaitTimerInput() {
    return this._tcpTimewaitTimer;
  }

  // udp_idle_timer - computed: false, optional: true, required: false
  private _udpIdleTimer?: number; 
  public get udpIdleTimer() {
    return this.getNumberAttribute('udp_idle_timer');
  }
  public set udpIdleTimer(value: number) {
    this._udpIdleTimer = value;
  }
  public resetUdpIdleTimer() {
    this._udpIdleTimer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get udpIdleTimerInput() {
    return this._udpIdleTimer;
  }

  // udp_portrange - computed: false, optional: true, required: false
  private _udpPortrange?: string; 
  public get udpPortrange() {
    return this.getStringAttribute('udp_portrange');
  }
  public set udpPortrange(value: string) {
    this._udpPortrange = value;
  }
  public resetUdpPortrange() {
    this._udpPortrange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get udpPortrangeInput() {
    return this._udpPortrange;
  }

  // udplite_portrange - computed: false, optional: true, required: false
  private _udplitePortrange?: string; 
  public get udplitePortrange() {
    return this.getStringAttribute('udplite_portrange');
  }
  public set udplitePortrange(value: string) {
    this._udplitePortrange = value;
  }
  public resetUdplitePortrange() {
    this._udplitePortrange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get udplitePortrangeInput() {
    return this._udplitePortrange;
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

  // visibility - computed: true, optional: true, required: false
  private _visibility?: string; 
  public get visibility() {
    return this.getStringAttribute('visibility');
  }
  public set visibility(value: string) {
    this._visibility = value;
  }
  public resetVisibility() {
    this._visibility = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get visibilityInput() {
    return this._visibility;
  }

  // app_category - computed: false, optional: true, required: false
  private _appCategory = new FirewallserviceCustomAppCategoryList(this, "app_category", true);
  public get appCategory() {
    return this._appCategory;
  }
  public putAppCategory(value: FirewallserviceCustomAppCategory[] | cdktf.IResolvable) {
    this._appCategory.internalValue = value;
  }
  public resetAppCategory() {
    this._appCategory.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appCategoryInput() {
    return this._appCategory.internalValue;
  }

  // application - computed: false, optional: true, required: false
  private _application = new FirewallserviceCustomApplicationList(this, "application", true);
  public get application() {
    return this._application;
  }
  public putApplication(value: FirewallserviceCustomApplication[] | cdktf.IResolvable) {
    this._application.internalValue = value;
  }
  public resetApplication() {
    this._application.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationInput() {
    return this._application.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      app_service_type: cdktf.stringToTerraform(this._appServiceType),
      category: cdktf.stringToTerraform(this._category),
      check_reset_range: cdktf.stringToTerraform(this._checkResetRange),
      color: cdktf.numberToTerraform(this._color),
      comment: cdktf.stringToTerraform(this._comment),
      dynamic_sort_subtable: cdktf.stringToTerraform(this._dynamicSortSubtable),
      fabric_object: cdktf.stringToTerraform(this._fabricObject),
      fqdn: cdktf.stringToTerraform(this._fqdn),
      get_all_tables: cdktf.stringToTerraform(this._getAllTables),
      helper: cdktf.stringToTerraform(this._helper),
      icmpcode: cdktf.numberToTerraform(this._icmpcode),
      icmptype: cdktf.numberToTerraform(this._icmptype),
      id: cdktf.stringToTerraform(this._id),
      iprange: cdktf.stringToTerraform(this._iprange),
      name: cdktf.stringToTerraform(this._name),
      protocol: cdktf.stringToTerraform(this._protocol),
      protocol_number: cdktf.numberToTerraform(this._protocolNumber),
      proxy: cdktf.stringToTerraform(this._proxy),
      sctp_portrange: cdktf.stringToTerraform(this._sctpPortrange),
      session_ttl: cdktf.numberToTerraform(this._sessionTtl),
      tcp_halfclose_timer: cdktf.numberToTerraform(this._tcpHalfcloseTimer),
      tcp_halfopen_timer: cdktf.numberToTerraform(this._tcpHalfopenTimer),
      tcp_portrange: cdktf.stringToTerraform(this._tcpPortrange),
      tcp_rst_timer: cdktf.numberToTerraform(this._tcpRstTimer),
      tcp_timewait_timer: cdktf.numberToTerraform(this._tcpTimewaitTimer),
      udp_idle_timer: cdktf.numberToTerraform(this._udpIdleTimer),
      udp_portrange: cdktf.stringToTerraform(this._udpPortrange),
      udplite_portrange: cdktf.stringToTerraform(this._udplitePortrange),
      uuid: cdktf.stringToTerraform(this._uuid),
      vdomparam: cdktf.stringToTerraform(this._vdomparam),
      visibility: cdktf.stringToTerraform(this._visibility),
      app_category: cdktf.listMapper(firewallserviceCustomAppCategoryToTerraform, true)(this._appCategory.internalValue),
      application: cdktf.listMapper(firewallserviceCustomApplicationToTerraform, true)(this._application.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      app_service_type: {
        value: cdktf.stringToHclTerraform(this._appServiceType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      category: {
        value: cdktf.stringToHclTerraform(this._category),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      check_reset_range: {
        value: cdktf.stringToHclTerraform(this._checkResetRange),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      color: {
        value: cdktf.numberToHclTerraform(this._color),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      comment: {
        value: cdktf.stringToHclTerraform(this._comment),
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
      fabric_object: {
        value: cdktf.stringToHclTerraform(this._fabricObject),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fqdn: {
        value: cdktf.stringToHclTerraform(this._fqdn),
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
      helper: {
        value: cdktf.stringToHclTerraform(this._helper),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      icmpcode: {
        value: cdktf.numberToHclTerraform(this._icmpcode),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      icmptype: {
        value: cdktf.numberToHclTerraform(this._icmptype),
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
      iprange: {
        value: cdktf.stringToHclTerraform(this._iprange),
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
      protocol: {
        value: cdktf.stringToHclTerraform(this._protocol),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      protocol_number: {
        value: cdktf.numberToHclTerraform(this._protocolNumber),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      proxy: {
        value: cdktf.stringToHclTerraform(this._proxy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sctp_portrange: {
        value: cdktf.stringToHclTerraform(this._sctpPortrange),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      session_ttl: {
        value: cdktf.numberToHclTerraform(this._sessionTtl),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      tcp_halfclose_timer: {
        value: cdktf.numberToHclTerraform(this._tcpHalfcloseTimer),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      tcp_halfopen_timer: {
        value: cdktf.numberToHclTerraform(this._tcpHalfopenTimer),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      tcp_portrange: {
        value: cdktf.stringToHclTerraform(this._tcpPortrange),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tcp_rst_timer: {
        value: cdktf.numberToHclTerraform(this._tcpRstTimer),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      tcp_timewait_timer: {
        value: cdktf.numberToHclTerraform(this._tcpTimewaitTimer),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      udp_idle_timer: {
        value: cdktf.numberToHclTerraform(this._udpIdleTimer),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      udp_portrange: {
        value: cdktf.stringToHclTerraform(this._udpPortrange),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      udplite_portrange: {
        value: cdktf.stringToHclTerraform(this._udplitePortrange),
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
      visibility: {
        value: cdktf.stringToHclTerraform(this._visibility),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      app_category: {
        value: cdktf.listMapperHcl(firewallserviceCustomAppCategoryToHclTerraform, true)(this._appCategory.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "FirewallserviceCustomAppCategoryList",
      },
      application: {
        value: cdktf.listMapperHcl(firewallserviceCustomApplicationToHclTerraform, true)(this._application.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "FirewallserviceCustomApplicationList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
