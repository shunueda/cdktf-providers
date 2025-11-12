// https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/ztna_trafficforwardproxyreverseservice
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ZtnaTrafficforwardproxyreverseserviceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/ztna_trafficforwardproxyreverseservice#dynamic_sort_subtable ZtnaTrafficforwardproxyreverseservice#dynamic_sort_subtable}
  */
  readonly dynamicSortSubtable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/ztna_trafficforwardproxyreverseservice#get_all_tables ZtnaTrafficforwardproxyreverseservice#get_all_tables}
  */
  readonly fetchAllTables?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/ztna_trafficforwardproxyreverseservice#id ZtnaTrafficforwardproxyreverseservice#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/ztna_trafficforwardproxyreverseservice#vdomparam ZtnaTrafficforwardproxyreverseservice#vdomparam}
  */
  readonly vdomparam?: string;
  /**
  * remote_servers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/ztna_trafficforwardproxyreverseservice#remote_servers ZtnaTrafficforwardproxyreverseservice#remote_servers}
  */
  readonly remoteServers?: ZtnaTrafficforwardproxyreverseserviceRemoteServers[] | cdktf.IResolvable;
}
export interface ZtnaTrafficforwardproxyreverseserviceRemoteServers {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/ztna_trafficforwardproxyreverseservice#address ZtnaTrafficforwardproxyreverseservice#address}
  */
  readonly address?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/ztna_trafficforwardproxyreverseservice#certificate ZtnaTrafficforwardproxyreverseservice#certificate}
  */
  readonly certificate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/ztna_trafficforwardproxyreverseservice#health_check_interval ZtnaTrafficforwardproxyreverseservice#health_check_interval}
  */
  readonly healthCheckInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/ztna_trafficforwardproxyreverseservice#name ZtnaTrafficforwardproxyreverseservice#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/ztna_trafficforwardproxyreverseservice#port ZtnaTrafficforwardproxyreverseservice#port}
  */
  readonly port?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/ztna_trafficforwardproxyreverseservice#ssl_max_version ZtnaTrafficforwardproxyreverseservice#ssl_max_version}
  */
  readonly sslMaxVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/ztna_trafficforwardproxyreverseservice#status ZtnaTrafficforwardproxyreverseservice#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/ztna_trafficforwardproxyreverseservice#trusted_server_ca ZtnaTrafficforwardproxyreverseservice#trusted_server_ca}
  */
  readonly trustedServerCa?: string;
}

export function ztnaTrafficforwardproxyreverseserviceRemoteServersToTerraform(struct?: ZtnaTrafficforwardproxyreverseserviceRemoteServers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address: cdktf.stringToTerraform(struct!.address),
    certificate: cdktf.stringToTerraform(struct!.certificate),
    health_check_interval: cdktf.numberToTerraform(struct!.healthCheckInterval),
    name: cdktf.stringToTerraform(struct!.name),
    port: cdktf.numberToTerraform(struct!.port),
    ssl_max_version: cdktf.stringToTerraform(struct!.sslMaxVersion),
    status: cdktf.stringToTerraform(struct!.status),
    trusted_server_ca: cdktf.stringToTerraform(struct!.trustedServerCa),
  }
}


export function ztnaTrafficforwardproxyreverseserviceRemoteServersToHclTerraform(struct?: ZtnaTrafficforwardproxyreverseserviceRemoteServers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    address: {
      value: cdktf.stringToHclTerraform(struct!.address),
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
    health_check_interval: {
      value: cdktf.numberToHclTerraform(struct!.healthCheckInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ssl_max_version: {
      value: cdktf.stringToHclTerraform(struct!.sslMaxVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    status: {
      value: cdktf.stringToHclTerraform(struct!.status),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    trusted_server_ca: {
      value: cdktf.stringToHclTerraform(struct!.trustedServerCa),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ZtnaTrafficforwardproxyreverseserviceRemoteServersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ZtnaTrafficforwardproxyreverseserviceRemoteServers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._address !== undefined) {
      hasAnyValues = true;
      internalValueResult.address = this._address;
    }
    if (this._certificate !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificate = this._certificate;
    }
    if (this._healthCheckInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.healthCheckInterval = this._healthCheckInterval;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._sslMaxVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslMaxVersion = this._sslMaxVersion;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    if (this._trustedServerCa !== undefined) {
      hasAnyValues = true;
      internalValueResult.trustedServerCa = this._trustedServerCa;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ZtnaTrafficforwardproxyreverseserviceRemoteServers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._address = undefined;
      this._certificate = undefined;
      this._healthCheckInterval = undefined;
      this._name = undefined;
      this._port = undefined;
      this._sslMaxVersion = undefined;
      this._status = undefined;
      this._trustedServerCa = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._address = value.address;
      this._certificate = value.certificate;
      this._healthCheckInterval = value.healthCheckInterval;
      this._name = value.name;
      this._port = value.port;
      this._sslMaxVersion = value.sslMaxVersion;
      this._status = value.status;
      this._trustedServerCa = value.trustedServerCa;
    }
  }

  // address - computed: false, optional: true, required: false
  private _address?: string; 
  public get address() {
    return this.getStringAttribute('address');
  }
  public set address(value: string) {
    this._address = value;
  }
  public resetAddress() {
    this._address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressInput() {
    return this._address;
  }

  // certificate - computed: false, optional: true, required: false
  private _certificate?: string; 
  public get certificate() {
    return this.getStringAttribute('certificate');
  }
  public set certificate(value: string) {
    this._certificate = value;
  }
  public resetCertificate() {
    this._certificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateInput() {
    return this._certificate;
  }

  // health_check_interval - computed: true, optional: true, required: false
  private _healthCheckInterval?: number; 
  public get healthCheckInterval() {
    return this.getNumberAttribute('health_check_interval');
  }
  public set healthCheckInterval(value: number) {
    this._healthCheckInterval = value;
  }
  public resetHealthCheckInterval() {
    this._healthCheckInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthCheckIntervalInput() {
    return this._healthCheckInterval;
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

  // ssl_max_version - computed: true, optional: true, required: false
  private _sslMaxVersion?: string; 
  public get sslMaxVersion() {
    return this.getStringAttribute('ssl_max_version');
  }
  public set sslMaxVersion(value: string) {
    this._sslMaxVersion = value;
  }
  public resetSslMaxVersion() {
    this._sslMaxVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslMaxVersionInput() {
    return this._sslMaxVersion;
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

  // trusted_server_ca - computed: false, optional: true, required: false
  private _trustedServerCa?: string; 
  public get trustedServerCa() {
    return this.getStringAttribute('trusted_server_ca');
  }
  public set trustedServerCa(value: string) {
    this._trustedServerCa = value;
  }
  public resetTrustedServerCa() {
    this._trustedServerCa = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trustedServerCaInput() {
    return this._trustedServerCa;
  }
}

export class ZtnaTrafficforwardproxyreverseserviceRemoteServersList extends cdktf.ComplexList {
  public internalValue? : ZtnaTrafficforwardproxyreverseserviceRemoteServers[] | cdktf.IResolvable

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
  public get(index: number): ZtnaTrafficforwardproxyreverseserviceRemoteServersOutputReference {
    return new ZtnaTrafficforwardproxyreverseserviceRemoteServersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/ztna_trafficforwardproxyreverseservice fortios_ztna_trafficforwardproxyreverseservice}
*/
export class ZtnaTrafficforwardproxyreverseservice extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortios_ztna_trafficforwardproxyreverseservice";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ZtnaTrafficforwardproxyreverseservice resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ZtnaTrafficforwardproxyreverseservice to import
  * @param importFromId The id of the existing ZtnaTrafficforwardproxyreverseservice that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/ztna_trafficforwardproxyreverseservice#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ZtnaTrafficforwardproxyreverseservice to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortios_ztna_trafficforwardproxyreverseservice", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/ztna_trafficforwardproxyreverseservice fortios_ztna_trafficforwardproxyreverseservice} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ZtnaTrafficforwardproxyreverseserviceConfig = {}
  */
  public constructor(scope: Construct, id: string, config: ZtnaTrafficforwardproxyreverseserviceConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fortios_ztna_trafficforwardproxyreverseservice',
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
    this._dynamicSortSubtable = config.dynamicSortSubtable;
    this._getAllTables = config.fetchAllTables;
    this._id = config.id;
    this._vdomparam = config.vdomparam;
    this._remoteServers.internalValue = config.remoteServers;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // remote_servers - computed: false, optional: true, required: false
  private _remoteServers = new ZtnaTrafficforwardproxyreverseserviceRemoteServersList(this, "remote_servers", false);
  public get remoteServers() {
    return this._remoteServers;
  }
  public putRemoteServers(value: ZtnaTrafficforwardproxyreverseserviceRemoteServers[] | cdktf.IResolvable) {
    this._remoteServers.internalValue = value;
  }
  public resetRemoteServers() {
    this._remoteServers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteServersInput() {
    return this._remoteServers.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      dynamic_sort_subtable: cdktf.stringToTerraform(this._dynamicSortSubtable),
      get_all_tables: cdktf.stringToTerraform(this._getAllTables),
      id: cdktf.stringToTerraform(this._id),
      vdomparam: cdktf.stringToTerraform(this._vdomparam),
      remote_servers: cdktf.listMapper(ztnaTrafficforwardproxyreverseserviceRemoteServersToTerraform, true)(this._remoteServers.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
      vdomparam: {
        value: cdktf.stringToHclTerraform(this._vdomparam),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      remote_servers: {
        value: cdktf.listMapperHcl(ztnaTrafficforwardproxyreverseserviceRemoteServersToHclTerraform, true)(this._remoteServers.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ZtnaTrafficforwardproxyreverseserviceRemoteServersList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
