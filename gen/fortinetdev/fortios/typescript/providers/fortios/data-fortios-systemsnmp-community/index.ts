// https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/data-sources/systemsnmp_community
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataFortiosSystemsnmpCommunityConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/data-sources/systemsnmp_community#fosid DataFortiosSystemsnmpCommunity#fosid}
  */
  readonly fosid: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/data-sources/systemsnmp_community#id DataFortiosSystemsnmpCommunity#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/data-sources/systemsnmp_community#vdomparam DataFortiosSystemsnmpCommunity#vdomparam}
  */
  readonly vdomparam?: string;
}
export interface DataFortiosSystemsnmpCommunityHosts {
}

export function dataFortiosSystemsnmpCommunityHostsToTerraform(struct?: DataFortiosSystemsnmpCommunityHosts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataFortiosSystemsnmpCommunityHostsToHclTerraform(struct?: DataFortiosSystemsnmpCommunityHosts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataFortiosSystemsnmpCommunityHostsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataFortiosSystemsnmpCommunityHosts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFortiosSystemsnmpCommunityHosts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ha_direct - computed: true, optional: false, required: false
  public get haDirect() {
    return this.getStringAttribute('ha_direct');
  }

  // host_type - computed: true, optional: false, required: false
  public get hostType() {
    return this.getStringAttribute('host_type');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // interface - computed: true, optional: false, required: false
  public get interface() {
    return this.getStringAttribute('interface');
  }

  // interface_select_method - computed: true, optional: false, required: false
  public get interfaceSelectMethod() {
    return this.getStringAttribute('interface_select_method');
  }

  // ip - computed: true, optional: false, required: false
  public get ip() {
    return this.getStringAttribute('ip');
  }

  // source_ip - computed: true, optional: false, required: false
  public get sourceIp() {
    return this.getStringAttribute('source_ip');
  }

  // vrf_select - computed: true, optional: false, required: false
  public get vrfSelect() {
    return this.getNumberAttribute('vrf_select');
  }
}

export class DataFortiosSystemsnmpCommunityHostsList extends cdktf.ComplexList {

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
  public get(index: number): DataFortiosSystemsnmpCommunityHostsOutputReference {
    return new DataFortiosSystemsnmpCommunityHostsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataFortiosSystemsnmpCommunityHosts6 {
}

export function dataFortiosSystemsnmpCommunityHosts6ToTerraform(struct?: DataFortiosSystemsnmpCommunityHosts6): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataFortiosSystemsnmpCommunityHosts6ToHclTerraform(struct?: DataFortiosSystemsnmpCommunityHosts6): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataFortiosSystemsnmpCommunityHosts6OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataFortiosSystemsnmpCommunityHosts6 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFortiosSystemsnmpCommunityHosts6 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ha_direct - computed: true, optional: false, required: false
  public get haDirect() {
    return this.getStringAttribute('ha_direct');
  }

  // host_type - computed: true, optional: false, required: false
  public get hostType() {
    return this.getStringAttribute('host_type');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // interface - computed: true, optional: false, required: false
  public get interface() {
    return this.getStringAttribute('interface');
  }

  // interface_select_method - computed: true, optional: false, required: false
  public get interfaceSelectMethod() {
    return this.getStringAttribute('interface_select_method');
  }

  // ipv6 - computed: true, optional: false, required: false
  public get ipv6() {
    return this.getStringAttribute('ipv6');
  }

  // source_ipv6 - computed: true, optional: false, required: false
  public get sourceIpv6() {
    return this.getStringAttribute('source_ipv6');
  }

  // vrf_select - computed: true, optional: false, required: false
  public get vrfSelect() {
    return this.getNumberAttribute('vrf_select');
  }
}

export class DataFortiosSystemsnmpCommunityHosts6List extends cdktf.ComplexList {

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
  public get(index: number): DataFortiosSystemsnmpCommunityHosts6OutputReference {
    return new DataFortiosSystemsnmpCommunityHosts6OutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataFortiosSystemsnmpCommunityVdoms {
}

export function dataFortiosSystemsnmpCommunityVdomsToTerraform(struct?: DataFortiosSystemsnmpCommunityVdoms): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataFortiosSystemsnmpCommunityVdomsToHclTerraform(struct?: DataFortiosSystemsnmpCommunityVdoms): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataFortiosSystemsnmpCommunityVdomsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataFortiosSystemsnmpCommunityVdoms | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFortiosSystemsnmpCommunityVdoms | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

export class DataFortiosSystemsnmpCommunityVdomsList extends cdktf.ComplexList {

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
  public get(index: number): DataFortiosSystemsnmpCommunityVdomsOutputReference {
    return new DataFortiosSystemsnmpCommunityVdomsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/data-sources/systemsnmp_community fortios_systemsnmp_community}
*/
export class DataFortiosSystemsnmpCommunity extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortios_systemsnmp_community";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataFortiosSystemsnmpCommunity resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataFortiosSystemsnmpCommunity to import
  * @param importFromId The id of the existing DataFortiosSystemsnmpCommunity that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/data-sources/systemsnmp_community#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataFortiosSystemsnmpCommunity to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortios_systemsnmp_community", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/data-sources/systemsnmp_community fortios_systemsnmp_community} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataFortiosSystemsnmpCommunityConfig
  */
  public constructor(scope: Construct, id: string, config: DataFortiosSystemsnmpCommunityConfig) {
    super(scope, id, {
      terraformResourceType: 'fortios_systemsnmp_community',
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
    this._fosid = config.fosid;
    this._id = config.id;
    this._vdomparam = config.vdomparam;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // events - computed: true, optional: false, required: false
  public get events() {
    return this.getStringAttribute('events');
  }

  // fosid - computed: false, optional: false, required: true
  private _fosid?: number; 
  public get fosid() {
    return this.getNumberAttribute('fosid');
  }
  public set fosid(value: number) {
    this._fosid = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fosidInput() {
    return this._fosid;
  }

  // hosts - computed: true, optional: false, required: false
  private _hosts = new DataFortiosSystemsnmpCommunityHostsList(this, "hosts", false);
  public get hosts() {
    return this._hosts;
  }

  // hosts6 - computed: true, optional: false, required: false
  private _hosts6 = new DataFortiosSystemsnmpCommunityHosts6List(this, "hosts6", false);
  public get hosts6() {
    return this._hosts6;
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

  // mib_view - computed: true, optional: false, required: false
  public get mibView() {
    return this.getStringAttribute('mib_view');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // query_v1_port - computed: true, optional: false, required: false
  public get queryV1Port() {
    return this.getNumberAttribute('query_v1_port');
  }

  // query_v1_status - computed: true, optional: false, required: false
  public get queryV1Status() {
    return this.getStringAttribute('query_v1_status');
  }

  // query_v2c_port - computed: true, optional: false, required: false
  public get queryV2CPort() {
    return this.getNumberAttribute('query_v2c_port');
  }

  // query_v2c_status - computed: true, optional: false, required: false
  public get queryV2CStatus() {
    return this.getStringAttribute('query_v2c_status');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // trap_v1_lport - computed: true, optional: false, required: false
  public get trapV1Lport() {
    return this.getNumberAttribute('trap_v1_lport');
  }

  // trap_v1_rport - computed: true, optional: false, required: false
  public get trapV1Rport() {
    return this.getNumberAttribute('trap_v1_rport');
  }

  // trap_v1_status - computed: true, optional: false, required: false
  public get trapV1Status() {
    return this.getStringAttribute('trap_v1_status');
  }

  // trap_v2c_lport - computed: true, optional: false, required: false
  public get trapV2CLport() {
    return this.getNumberAttribute('trap_v2c_lport');
  }

  // trap_v2c_rport - computed: true, optional: false, required: false
  public get trapV2CRport() {
    return this.getNumberAttribute('trap_v2c_rport');
  }

  // trap_v2c_status - computed: true, optional: false, required: false
  public get trapV2CStatus() {
    return this.getStringAttribute('trap_v2c_status');
  }

  // vdomparam - computed: false, optional: true, required: false
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

  // vdoms - computed: true, optional: false, required: false
  private _vdoms = new DataFortiosSystemsnmpCommunityVdomsList(this, "vdoms", false);
  public get vdoms() {
    return this._vdoms;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      fosid: cdktf.numberToTerraform(this._fosid),
      id: cdktf.stringToTerraform(this._id),
      vdomparam: cdktf.stringToTerraform(this._vdomparam),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      fosid: {
        value: cdktf.numberToHclTerraform(this._fosid),
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
      vdomparam: {
        value: cdktf.stringToHclTerraform(this._vdomparam),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
