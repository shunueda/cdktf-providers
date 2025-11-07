// https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/data-sources/system_ddns
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataFortiosSystemDdnsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/data-sources/system_ddns#ddnsid DataFortiosSystemDdns#ddnsid}
  */
  readonly ddnsid: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/data-sources/system_ddns#id DataFortiosSystemDdns#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/data-sources/system_ddns#vdomparam DataFortiosSystemDdns#vdomparam}
  */
  readonly vdomparam?: string;
}
export interface DataFortiosSystemDdnsDdnsServerAddr {
}

export function dataFortiosSystemDdnsDdnsServerAddrToTerraform(struct?: DataFortiosSystemDdnsDdnsServerAddr): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataFortiosSystemDdnsDdnsServerAddrToHclTerraform(struct?: DataFortiosSystemDdnsDdnsServerAddr): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataFortiosSystemDdnsDdnsServerAddrOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataFortiosSystemDdnsDdnsServerAddr | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFortiosSystemDdnsDdnsServerAddr | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // addr - computed: true, optional: false, required: false
  public get addr() {
    return this.getStringAttribute('addr');
  }
}

export class DataFortiosSystemDdnsDdnsServerAddrList extends cdktf.ComplexList {

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
  public get(index: number): DataFortiosSystemDdnsDdnsServerAddrOutputReference {
    return new DataFortiosSystemDdnsDdnsServerAddrOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataFortiosSystemDdnsMonitorInterface {
}

export function dataFortiosSystemDdnsMonitorInterfaceToTerraform(struct?: DataFortiosSystemDdnsMonitorInterface): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataFortiosSystemDdnsMonitorInterfaceToHclTerraform(struct?: DataFortiosSystemDdnsMonitorInterface): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataFortiosSystemDdnsMonitorInterfaceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataFortiosSystemDdnsMonitorInterface | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFortiosSystemDdnsMonitorInterface | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // interface_name - computed: true, optional: false, required: false
  public get interfaceName() {
    return this.getStringAttribute('interface_name');
  }
}

export class DataFortiosSystemDdnsMonitorInterfaceList extends cdktf.ComplexList {

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
  public get(index: number): DataFortiosSystemDdnsMonitorInterfaceOutputReference {
    return new DataFortiosSystemDdnsMonitorInterfaceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/data-sources/system_ddns fortios_system_ddns}
*/
export class DataFortiosSystemDdns extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortios_system_ddns";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataFortiosSystemDdns resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataFortiosSystemDdns to import
  * @param importFromId The id of the existing DataFortiosSystemDdns that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/data-sources/system_ddns#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataFortiosSystemDdns to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortios_system_ddns", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/data-sources/system_ddns fortios_system_ddns} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataFortiosSystemDdnsConfig
  */
  public constructor(scope: Construct, id: string, config: DataFortiosSystemDdnsConfig) {
    super(scope, id, {
      terraformResourceType: 'fortios_system_ddns',
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
    this._ddnsid = config.ddnsid;
    this._id = config.id;
    this._vdomparam = config.vdomparam;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // addr_type - computed: true, optional: false, required: false
  public get addrType() {
    return this.getStringAttribute('addr_type');
  }

  // bound_ip - computed: true, optional: false, required: false
  public get boundIp() {
    return this.getStringAttribute('bound_ip');
  }

  // clear_text - computed: true, optional: false, required: false
  public get clearText() {
    return this.getStringAttribute('clear_text');
  }

  // ddns_auth - computed: true, optional: false, required: false
  public get ddnsAuth() {
    return this.getStringAttribute('ddns_auth');
  }

  // ddns_domain - computed: true, optional: false, required: false
  public get ddnsDomain() {
    return this.getStringAttribute('ddns_domain');
  }

  // ddns_key - computed: true, optional: false, required: false
  public get ddnsKey() {
    return this.getStringAttribute('ddns_key');
  }

  // ddns_keyname - computed: true, optional: false, required: false
  public get ddnsKeyname() {
    return this.getStringAttribute('ddns_keyname');
  }

  // ddns_password - computed: true, optional: false, required: false
  public get ddnsPassword() {
    return this.getStringAttribute('ddns_password');
  }

  // ddns_server - computed: true, optional: false, required: false
  public get ddnsServer() {
    return this.getStringAttribute('ddns_server');
  }

  // ddns_server_addr - computed: true, optional: false, required: false
  private _ddnsServerAddr = new DataFortiosSystemDdnsDdnsServerAddrList(this, "ddns_server_addr", false);
  public get ddnsServerAddr() {
    return this._ddnsServerAddr;
  }

  // ddns_server_ip - computed: true, optional: false, required: false
  public get ddnsServerIp() {
    return this.getStringAttribute('ddns_server_ip');
  }

  // ddns_sn - computed: true, optional: false, required: false
  public get ddnsSn() {
    return this.getStringAttribute('ddns_sn');
  }

  // ddns_ttl - computed: true, optional: false, required: false
  public get ddnsTtl() {
    return this.getNumberAttribute('ddns_ttl');
  }

  // ddns_username - computed: true, optional: false, required: false
  public get ddnsUsername() {
    return this.getStringAttribute('ddns_username');
  }

  // ddns_zone - computed: true, optional: false, required: false
  public get ddnsZone() {
    return this.getStringAttribute('ddns_zone');
  }

  // ddnsid - computed: false, optional: false, required: true
  private _ddnsid?: number; 
  public get ddnsid() {
    return this.getNumberAttribute('ddnsid');
  }
  public set ddnsid(value: number) {
    this._ddnsid = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ddnsidInput() {
    return this._ddnsid;
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

  // monitor_interface - computed: true, optional: false, required: false
  private _monitorInterface = new DataFortiosSystemDdnsMonitorInterfaceList(this, "monitor_interface", false);
  public get monitorInterface() {
    return this._monitorInterface;
  }

  // server_type - computed: true, optional: false, required: false
  public get serverType() {
    return this.getStringAttribute('server_type');
  }

  // ssl_certificate - computed: true, optional: false, required: false
  public get sslCertificate() {
    return this.getStringAttribute('ssl_certificate');
  }

  // update_interval - computed: true, optional: false, required: false
  public get updateInterval() {
    return this.getNumberAttribute('update_interval');
  }

  // use_public_ip - computed: true, optional: false, required: false
  public get usePublicIp() {
    return this.getStringAttribute('use_public_ip');
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      ddnsid: cdktf.numberToTerraform(this._ddnsid),
      id: cdktf.stringToTerraform(this._id),
      vdomparam: cdktf.stringToTerraform(this._vdomparam),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      ddnsid: {
        value: cdktf.numberToHclTerraform(this._ddnsid),
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
