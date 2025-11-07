// https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/systemp_system_centralmanagement
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SystempSystemCentralmanagementConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/systemp_system_centralmanagement#adom SystempSystemCentralmanagement#adom}
  */
  readonly adom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/systemp_system_centralmanagement#devprof SystempSystemCentralmanagement#devprof}
  */
  readonly devprof: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/systemp_system_centralmanagement#dynamic_sort_subtable SystempSystemCentralmanagement#dynamic_sort_subtable}
  */
  readonly dynamicSortSubtable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/systemp_system_centralmanagement#id SystempSystemCentralmanagement#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/systemp_system_centralmanagement#include_default_servers SystempSystemCentralmanagement#include_default_servers}
  */
  readonly includeDefaultServers?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/systemp_system_centralmanagement#scopetype SystempSystemCentralmanagement#scopetype}
  */
  readonly scopetype?: string;
  /**
  * server_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/systemp_system_centralmanagement#server_list SystempSystemCentralmanagement#server_list}
  */
  readonly serverList?: SystempSystemCentralmanagementServerListStruct[] | cdktf.IResolvable;
}
export interface SystempSystemCentralmanagementServerListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/systemp_system_centralmanagement#addr_type SystempSystemCentralmanagement#addr_type}
  */
  readonly addrType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/systemp_system_centralmanagement#fqdn SystempSystemCentralmanagement#fqdn}
  */
  readonly fqdn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/systemp_system_centralmanagement#id SystempSystemCentralmanagement#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/systemp_system_centralmanagement#server_address SystempSystemCentralmanagement#server_address}
  */
  readonly serverAddress?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/systemp_system_centralmanagement#server_address6 SystempSystemCentralmanagement#server_address6}
  */
  readonly serverAddress6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/systemp_system_centralmanagement#server_type SystempSystemCentralmanagement#server_type}
  */
  readonly serverType?: string[];
}

export function systempSystemCentralmanagementServerListStructToTerraform(struct?: SystempSystemCentralmanagementServerListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    addr_type: cdktf.stringToTerraform(struct!.addrType),
    fqdn: cdktf.stringToTerraform(struct!.fqdn),
    id: cdktf.numberToTerraform(struct!.id),
    server_address: cdktf.stringToTerraform(struct!.serverAddress),
    server_address6: cdktf.stringToTerraform(struct!.serverAddress6),
    server_type: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.serverType),
  }
}


export function systempSystemCentralmanagementServerListStructToHclTerraform(struct?: SystempSystemCentralmanagementServerListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    addr_type: {
      value: cdktf.stringToHclTerraform(struct!.addrType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fqdn: {
      value: cdktf.stringToHclTerraform(struct!.fqdn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktf.numberToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    server_address: {
      value: cdktf.stringToHclTerraform(struct!.serverAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    server_address6: {
      value: cdktf.stringToHclTerraform(struct!.serverAddress6),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    server_type: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.serverType),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystempSystemCentralmanagementServerListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SystempSystemCentralmanagementServerListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addrType !== undefined) {
      hasAnyValues = true;
      internalValueResult.addrType = this._addrType;
    }
    if (this._fqdn !== undefined) {
      hasAnyValues = true;
      internalValueResult.fqdn = this._fqdn;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._serverAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverAddress = this._serverAddress;
    }
    if (this._serverAddress6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverAddress6 = this._serverAddress6;
    }
    if (this._serverType !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverType = this._serverType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystempSystemCentralmanagementServerListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._addrType = undefined;
      this._fqdn = undefined;
      this._id = undefined;
      this._serverAddress = undefined;
      this._serverAddress6 = undefined;
      this._serverType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._addrType = value.addrType;
      this._fqdn = value.fqdn;
      this._id = value.id;
      this._serverAddress = value.serverAddress;
      this._serverAddress6 = value.serverAddress6;
      this._serverType = value.serverType;
    }
  }

  // addr_type - computed: true, optional: true, required: false
  private _addrType?: string; 
  public get addrType() {
    return this.getStringAttribute('addr_type');
  }
  public set addrType(value: string) {
    this._addrType = value;
  }
  public resetAddrType() {
    this._addrType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addrTypeInput() {
    return this._addrType;
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

  // server_address - computed: true, optional: true, required: false
  private _serverAddress?: string; 
  public get serverAddress() {
    return this.getStringAttribute('server_address');
  }
  public set serverAddress(value: string) {
    this._serverAddress = value;
  }
  public resetServerAddress() {
    this._serverAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverAddressInput() {
    return this._serverAddress;
  }

  // server_address6 - computed: true, optional: true, required: false
  private _serverAddress6?: string; 
  public get serverAddress6() {
    return this.getStringAttribute('server_address6');
  }
  public set serverAddress6(value: string) {
    this._serverAddress6 = value;
  }
  public resetServerAddress6() {
    this._serverAddress6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverAddress6Input() {
    return this._serverAddress6;
  }

  // server_type - computed: true, optional: true, required: false
  private _serverType?: string[]; 
  public get serverType() {
    return cdktf.Fn.tolist(this.getListAttribute('server_type'));
  }
  public set serverType(value: string[]) {
    this._serverType = value;
  }
  public resetServerType() {
    this._serverType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverTypeInput() {
    return this._serverType;
  }
}

export class SystempSystemCentralmanagementServerListStructList extends cdktf.ComplexList {
  public internalValue? : SystempSystemCentralmanagementServerListStruct[] | cdktf.IResolvable

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
  public get(index: number): SystempSystemCentralmanagementServerListStructOutputReference {
    return new SystempSystemCentralmanagementServerListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/systemp_system_centralmanagement fortimanager_systemp_system_centralmanagement}
*/
export class SystempSystemCentralmanagement extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortimanager_systemp_system_centralmanagement";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SystempSystemCentralmanagement resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SystempSystemCentralmanagement to import
  * @param importFromId The id of the existing SystempSystemCentralmanagement that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/systemp_system_centralmanagement#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SystempSystemCentralmanagement to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortimanager_systemp_system_centralmanagement", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/systemp_system_centralmanagement fortimanager_systemp_system_centralmanagement} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SystempSystemCentralmanagementConfig
  */
  public constructor(scope: Construct, id: string, config: SystempSystemCentralmanagementConfig) {
    super(scope, id, {
      terraformResourceType: 'fortimanager_systemp_system_centralmanagement',
      terraformGeneratorMetadata: {
        providerName: 'fortimanager',
        providerVersion: '1.14.0'
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
    this._devprof = config.devprof;
    this._dynamicSortSubtable = config.dynamicSortSubtable;
    this._id = config.id;
    this._includeDefaultServers = config.includeDefaultServers;
    this._scopetype = config.scopetype;
    this._serverList.internalValue = config.serverList;
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

  // devprof - computed: false, optional: false, required: true
  private _devprof?: string; 
  public get devprof() {
    return this.getStringAttribute('devprof');
  }
  public set devprof(value: string) {
    this._devprof = value;
  }
  // Temporarily expose input value. Use with caution.
  public get devprofInput() {
    return this._devprof;
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

  // include_default_servers - computed: true, optional: true, required: false
  private _includeDefaultServers?: string; 
  public get includeDefaultServers() {
    return this.getStringAttribute('include_default_servers');
  }
  public set includeDefaultServers(value: string) {
    this._includeDefaultServers = value;
  }
  public resetIncludeDefaultServers() {
    this._includeDefaultServers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeDefaultServersInput() {
    return this._includeDefaultServers;
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

  // server_list - computed: false, optional: true, required: false
  private _serverList = new SystempSystemCentralmanagementServerListStructList(this, "server_list", false);
  public get serverList() {
    return this._serverList;
  }
  public putServerList(value: SystempSystemCentralmanagementServerListStruct[] | cdktf.IResolvable) {
    this._serverList.internalValue = value;
  }
  public resetServerList() {
    this._serverList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverListInput() {
    return this._serverList.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      adom: cdktf.stringToTerraform(this._adom),
      devprof: cdktf.stringToTerraform(this._devprof),
      dynamic_sort_subtable: cdktf.stringToTerraform(this._dynamicSortSubtable),
      id: cdktf.stringToTerraform(this._id),
      include_default_servers: cdktf.stringToTerraform(this._includeDefaultServers),
      scopetype: cdktf.stringToTerraform(this._scopetype),
      server_list: cdktf.listMapper(systempSystemCentralmanagementServerListStructToTerraform, true)(this._serverList.internalValue),
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
      devprof: {
        value: cdktf.stringToHclTerraform(this._devprof),
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
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      include_default_servers: {
        value: cdktf.stringToHclTerraform(this._includeDefaultServers),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scopetype: {
        value: cdktf.stringToHclTerraform(this._scopetype),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      server_list: {
        value: cdktf.listMapperHcl(systempSystemCentralmanagementServerListStructToHclTerraform, true)(this._serverList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SystempSystemCentralmanagementServerListStructList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
