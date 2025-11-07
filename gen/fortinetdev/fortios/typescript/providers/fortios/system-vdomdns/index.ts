// https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_vdomdns
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SystemVdomdnsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_vdomdns#alt_primary SystemVdomdns#alt_primary}
  */
  readonly altPrimary?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_vdomdns#alt_secondary SystemVdomdns#alt_secondary}
  */
  readonly altSecondary?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_vdomdns#dns_over_tls SystemVdomdns#dns_over_tls}
  */
  readonly dnsOverTls?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_vdomdns#dynamic_sort_subtable SystemVdomdns#dynamic_sort_subtable}
  */
  readonly dynamicSortSubtable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_vdomdns#get_all_tables SystemVdomdns#get_all_tables}
  */
  readonly fetchAllTables?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_vdomdns#id SystemVdomdns#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_vdomdns#interface SystemVdomdns#interface}
  */
  readonly interface?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_vdomdns#interface_select_method SystemVdomdns#interface_select_method}
  */
  readonly interfaceSelectMethod?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_vdomdns#ip6_primary SystemVdomdns#ip6_primary}
  */
  readonly ip6Primary?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_vdomdns#ip6_secondary SystemVdomdns#ip6_secondary}
  */
  readonly ip6Secondary?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_vdomdns#primary SystemVdomdns#primary}
  */
  readonly primary?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_vdomdns#protocol SystemVdomdns#protocol}
  */
  readonly protocol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_vdomdns#secondary SystemVdomdns#secondary}
  */
  readonly secondary?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_vdomdns#server_select_method SystemVdomdns#server_select_method}
  */
  readonly serverSelectMethod?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_vdomdns#source_ip SystemVdomdns#source_ip}
  */
  readonly sourceIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_vdomdns#source_ip_interface SystemVdomdns#source_ip_interface}
  */
  readonly sourceIpInterface?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_vdomdns#ssl_certificate SystemVdomdns#ssl_certificate}
  */
  readonly sslCertificate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_vdomdns#vdom_dns SystemVdomdns#vdom_dns}
  */
  readonly vdomDns?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_vdomdns#vdomparam SystemVdomdns#vdomparam}
  */
  readonly vdomparam?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_vdomdns#vrf_select SystemVdomdns#vrf_select}
  */
  readonly vrfSelect?: number;
  /**
  * server_hostname block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_vdomdns#server_hostname SystemVdomdns#server_hostname}
  */
  readonly serverHostname?: SystemVdomdnsServerHostname[] | cdktf.IResolvable;
}
export interface SystemVdomdnsServerHostname {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_vdomdns#hostname SystemVdomdns#hostname}
  */
  readonly hostname?: string;
}

export function systemVdomdnsServerHostnameToTerraform(struct?: SystemVdomdnsServerHostname | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hostname: cdktf.stringToTerraform(struct!.hostname),
  }
}


export function systemVdomdnsServerHostnameToHclTerraform(struct?: SystemVdomdnsServerHostname | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemVdomdnsServerHostnameOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SystemVdomdnsServerHostname | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hostname !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostname = this._hostname;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemVdomdnsServerHostname | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._hostname = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._hostname = value.hostname;
    }
  }

  // hostname - computed: false, optional: true, required: false
  private _hostname?: string; 
  public get hostname() {
    return this.getStringAttribute('hostname');
  }
  public set hostname(value: string) {
    this._hostname = value;
  }
  public resetHostname() {
    this._hostname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnameInput() {
    return this._hostname;
  }
}

export class SystemVdomdnsServerHostnameList extends cdktf.ComplexList {
  public internalValue? : SystemVdomdnsServerHostname[] | cdktf.IResolvable

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
  public get(index: number): SystemVdomdnsServerHostnameOutputReference {
    return new SystemVdomdnsServerHostnameOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_vdomdns fortios_system_vdomdns}
*/
export class SystemVdomdns extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortios_system_vdomdns";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SystemVdomdns resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SystemVdomdns to import
  * @param importFromId The id of the existing SystemVdomdns that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_vdomdns#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SystemVdomdns to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortios_system_vdomdns", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_vdomdns fortios_system_vdomdns} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SystemVdomdnsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SystemVdomdnsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fortios_system_vdomdns',
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
    this._altPrimary = config.altPrimary;
    this._altSecondary = config.altSecondary;
    this._dnsOverTls = config.dnsOverTls;
    this._dynamicSortSubtable = config.dynamicSortSubtable;
    this._getAllTables = config.fetchAllTables;
    this._id = config.id;
    this._interface = config.interface;
    this._interfaceSelectMethod = config.interfaceSelectMethod;
    this._ip6Primary = config.ip6Primary;
    this._ip6Secondary = config.ip6Secondary;
    this._primary = config.primary;
    this._protocol = config.protocol;
    this._secondary = config.secondary;
    this._serverSelectMethod = config.serverSelectMethod;
    this._sourceIp = config.sourceIp;
    this._sourceIpInterface = config.sourceIpInterface;
    this._sslCertificate = config.sslCertificate;
    this._vdomDns = config.vdomDns;
    this._vdomparam = config.vdomparam;
    this._vrfSelect = config.vrfSelect;
    this._serverHostname.internalValue = config.serverHostname;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // alt_primary - computed: true, optional: true, required: false
  private _altPrimary?: string; 
  public get altPrimary() {
    return this.getStringAttribute('alt_primary');
  }
  public set altPrimary(value: string) {
    this._altPrimary = value;
  }
  public resetAltPrimary() {
    this._altPrimary = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get altPrimaryInput() {
    return this._altPrimary;
  }

  // alt_secondary - computed: true, optional: true, required: false
  private _altSecondary?: string; 
  public get altSecondary() {
    return this.getStringAttribute('alt_secondary');
  }
  public set altSecondary(value: string) {
    this._altSecondary = value;
  }
  public resetAltSecondary() {
    this._altSecondary = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get altSecondaryInput() {
    return this._altSecondary;
  }

  // dns_over_tls - computed: true, optional: true, required: false
  private _dnsOverTls?: string; 
  public get dnsOverTls() {
    return this.getStringAttribute('dns_over_tls');
  }
  public set dnsOverTls(value: string) {
    this._dnsOverTls = value;
  }
  public resetDnsOverTls() {
    this._dnsOverTls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsOverTlsInput() {
    return this._dnsOverTls;
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

  // interface - computed: false, optional: true, required: false
  private _interface?: string; 
  public get interface() {
    return this.getStringAttribute('interface');
  }
  public set interface(value: string) {
    this._interface = value;
  }
  public resetInterface() {
    this._interface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceInput() {
    return this._interface;
  }

  // interface_select_method - computed: true, optional: true, required: false
  private _interfaceSelectMethod?: string; 
  public get interfaceSelectMethod() {
    return this.getStringAttribute('interface_select_method');
  }
  public set interfaceSelectMethod(value: string) {
    this._interfaceSelectMethod = value;
  }
  public resetInterfaceSelectMethod() {
    this._interfaceSelectMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceSelectMethodInput() {
    return this._interfaceSelectMethod;
  }

  // ip6_primary - computed: true, optional: true, required: false
  private _ip6Primary?: string; 
  public get ip6Primary() {
    return this.getStringAttribute('ip6_primary');
  }
  public set ip6Primary(value: string) {
    this._ip6Primary = value;
  }
  public resetIp6Primary() {
    this._ip6Primary = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ip6PrimaryInput() {
    return this._ip6Primary;
  }

  // ip6_secondary - computed: true, optional: true, required: false
  private _ip6Secondary?: string; 
  public get ip6Secondary() {
    return this.getStringAttribute('ip6_secondary');
  }
  public set ip6Secondary(value: string) {
    this._ip6Secondary = value;
  }
  public resetIp6Secondary() {
    this._ip6Secondary = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ip6SecondaryInput() {
    return this._ip6Secondary;
  }

  // primary - computed: true, optional: true, required: false
  private _primary?: string; 
  public get primary() {
    return this.getStringAttribute('primary');
  }
  public set primary(value: string) {
    this._primary = value;
  }
  public resetPrimary() {
    this._primary = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryInput() {
    return this._primary;
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

  // secondary - computed: true, optional: true, required: false
  private _secondary?: string; 
  public get secondary() {
    return this.getStringAttribute('secondary');
  }
  public set secondary(value: string) {
    this._secondary = value;
  }
  public resetSecondary() {
    this._secondary = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secondaryInput() {
    return this._secondary;
  }

  // server_select_method - computed: true, optional: true, required: false
  private _serverSelectMethod?: string; 
  public get serverSelectMethod() {
    return this.getStringAttribute('server_select_method');
  }
  public set serverSelectMethod(value: string) {
    this._serverSelectMethod = value;
  }
  public resetServerSelectMethod() {
    this._serverSelectMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverSelectMethodInput() {
    return this._serverSelectMethod;
  }

  // source_ip - computed: true, optional: true, required: false
  private _sourceIp?: string; 
  public get sourceIp() {
    return this.getStringAttribute('source_ip');
  }
  public set sourceIp(value: string) {
    this._sourceIp = value;
  }
  public resetSourceIp() {
    this._sourceIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceIpInput() {
    return this._sourceIp;
  }

  // source_ip_interface - computed: false, optional: true, required: false
  private _sourceIpInterface?: string; 
  public get sourceIpInterface() {
    return this.getStringAttribute('source_ip_interface');
  }
  public set sourceIpInterface(value: string) {
    this._sourceIpInterface = value;
  }
  public resetSourceIpInterface() {
    this._sourceIpInterface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceIpInterfaceInput() {
    return this._sourceIpInterface;
  }

  // ssl_certificate - computed: true, optional: true, required: false
  private _sslCertificate?: string; 
  public get sslCertificate() {
    return this.getStringAttribute('ssl_certificate');
  }
  public set sslCertificate(value: string) {
    this._sslCertificate = value;
  }
  public resetSslCertificate() {
    this._sslCertificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslCertificateInput() {
    return this._sslCertificate;
  }

  // vdom_dns - computed: true, optional: true, required: false
  private _vdomDns?: string; 
  public get vdomDns() {
    return this.getStringAttribute('vdom_dns');
  }
  public set vdomDns(value: string) {
    this._vdomDns = value;
  }
  public resetVdomDns() {
    this._vdomDns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vdomDnsInput() {
    return this._vdomDns;
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

  // vrf_select - computed: false, optional: true, required: false
  private _vrfSelect?: number; 
  public get vrfSelect() {
    return this.getNumberAttribute('vrf_select');
  }
  public set vrfSelect(value: number) {
    this._vrfSelect = value;
  }
  public resetVrfSelect() {
    this._vrfSelect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vrfSelectInput() {
    return this._vrfSelect;
  }

  // server_hostname - computed: false, optional: true, required: false
  private _serverHostname = new SystemVdomdnsServerHostnameList(this, "server_hostname", true);
  public get serverHostname() {
    return this._serverHostname;
  }
  public putServerHostname(value: SystemVdomdnsServerHostname[] | cdktf.IResolvable) {
    this._serverHostname.internalValue = value;
  }
  public resetServerHostname() {
    this._serverHostname.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverHostnameInput() {
    return this._serverHostname.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      alt_primary: cdktf.stringToTerraform(this._altPrimary),
      alt_secondary: cdktf.stringToTerraform(this._altSecondary),
      dns_over_tls: cdktf.stringToTerraform(this._dnsOverTls),
      dynamic_sort_subtable: cdktf.stringToTerraform(this._dynamicSortSubtable),
      get_all_tables: cdktf.stringToTerraform(this._getAllTables),
      id: cdktf.stringToTerraform(this._id),
      interface: cdktf.stringToTerraform(this._interface),
      interface_select_method: cdktf.stringToTerraform(this._interfaceSelectMethod),
      ip6_primary: cdktf.stringToTerraform(this._ip6Primary),
      ip6_secondary: cdktf.stringToTerraform(this._ip6Secondary),
      primary: cdktf.stringToTerraform(this._primary),
      protocol: cdktf.stringToTerraform(this._protocol),
      secondary: cdktf.stringToTerraform(this._secondary),
      server_select_method: cdktf.stringToTerraform(this._serverSelectMethod),
      source_ip: cdktf.stringToTerraform(this._sourceIp),
      source_ip_interface: cdktf.stringToTerraform(this._sourceIpInterface),
      ssl_certificate: cdktf.stringToTerraform(this._sslCertificate),
      vdom_dns: cdktf.stringToTerraform(this._vdomDns),
      vdomparam: cdktf.stringToTerraform(this._vdomparam),
      vrf_select: cdktf.numberToTerraform(this._vrfSelect),
      server_hostname: cdktf.listMapper(systemVdomdnsServerHostnameToTerraform, true)(this._serverHostname.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      alt_primary: {
        value: cdktf.stringToHclTerraform(this._altPrimary),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      alt_secondary: {
        value: cdktf.stringToHclTerraform(this._altSecondary),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dns_over_tls: {
        value: cdktf.stringToHclTerraform(this._dnsOverTls),
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
      interface_select_method: {
        value: cdktf.stringToHclTerraform(this._interfaceSelectMethod),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ip6_primary: {
        value: cdktf.stringToHclTerraform(this._ip6Primary),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ip6_secondary: {
        value: cdktf.stringToHclTerraform(this._ip6Secondary),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      primary: {
        value: cdktf.stringToHclTerraform(this._primary),
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
      secondary: {
        value: cdktf.stringToHclTerraform(this._secondary),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      server_select_method: {
        value: cdktf.stringToHclTerraform(this._serverSelectMethod),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source_ip: {
        value: cdktf.stringToHclTerraform(this._sourceIp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source_ip_interface: {
        value: cdktf.stringToHclTerraform(this._sourceIpInterface),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ssl_certificate: {
        value: cdktf.stringToHclTerraform(this._sslCertificate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vdom_dns: {
        value: cdktf.stringToHclTerraform(this._vdomDns),
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
      vrf_select: {
        value: cdktf.numberToHclTerraform(this._vrfSelect),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      server_hostname: {
        value: cdktf.listMapperHcl(systemVdomdnsServerHostnameToHclTerraform, true)(this._serverHostname.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "SystemVdomdnsServerHostnameList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
