// https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_acme
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SystemAcmeConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_acme#device_name SystemAcme#device_name}
  */
  readonly deviceName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_acme#dynamic_sort_subtable SystemAcme#dynamic_sort_subtable}
  */
  readonly dynamicSortSubtable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_acme#id SystemAcme#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_acme#interface SystemAcme#interface}
  */
  readonly interface?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_acme#source_ip SystemAcme#source_ip}
  */
  readonly sourceIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_acme#source_ip6 SystemAcme#source_ip6}
  */
  readonly sourceIp6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_acme#store_passphrase SystemAcme#store_passphrase}
  */
  readonly storePassphrase?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_acme#use_ha_direct SystemAcme#use_ha_direct}
  */
  readonly useHaDirect?: string;
  /**
  * accounts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_acme#accounts SystemAcme#accounts}
  */
  readonly accounts?: SystemAcmeAccounts[] | cdktf.IResolvable;
}
export interface SystemAcmeAccounts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_acme#ca_url SystemAcme#ca_url}
  */
  readonly caUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_acme#email SystemAcme#email}
  */
  readonly email?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_acme#id SystemAcme#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_acme#privatekey SystemAcme#privatekey}
  */
  readonly privatekey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_acme#status SystemAcme#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_acme#url SystemAcme#url}
  */
  readonly url?: string;
}

export function systemAcmeAccountsToTerraform(struct?: SystemAcmeAccounts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ca_url: cdktf.stringToTerraform(struct!.caUrl),
    email: cdktf.stringToTerraform(struct!.email),
    id: cdktf.stringToTerraform(struct!.id),
    privatekey: cdktf.stringToTerraform(struct!.privatekey),
    status: cdktf.stringToTerraform(struct!.status),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function systemAcmeAccountsToHclTerraform(struct?: SystemAcmeAccounts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ca_url: {
      value: cdktf.stringToHclTerraform(struct!.caUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    email: {
      value: cdktf.stringToHclTerraform(struct!.email),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    privatekey: {
      value: cdktf.stringToHclTerraform(struct!.privatekey),
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

export class SystemAcmeAccountsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SystemAcmeAccounts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._caUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.caUrl = this._caUrl;
    }
    if (this._email !== undefined) {
      hasAnyValues = true;
      internalValueResult.email = this._email;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._privatekey !== undefined) {
      hasAnyValues = true;
      internalValueResult.privatekey = this._privatekey;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemAcmeAccounts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._caUrl = undefined;
      this._email = undefined;
      this._id = undefined;
      this._privatekey = undefined;
      this._status = undefined;
      this._url = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._caUrl = value.caUrl;
      this._email = value.email;
      this._id = value.id;
      this._privatekey = value.privatekey;
      this._status = value.status;
      this._url = value.url;
    }
  }

  // ca_url - computed: false, optional: true, required: false
  private _caUrl?: string; 
  public get caUrl() {
    return this.getStringAttribute('ca_url');
  }
  public set caUrl(value: string) {
    this._caUrl = value;
  }
  public resetCaUrl() {
    this._caUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caUrlInput() {
    return this._caUrl;
  }

  // email - computed: false, optional: true, required: false
  private _email?: string; 
  public get email() {
    return this.getStringAttribute('email');
  }
  public set email(value: string) {
    this._email = value;
  }
  public resetEmail() {
    this._email = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailInput() {
    return this._email;
  }

  // id - computed: false, optional: true, required: false
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

  // privatekey - computed: false, optional: true, required: false
  private _privatekey?: string; 
  public get privatekey() {
    return this.getStringAttribute('privatekey');
  }
  public set privatekey(value: string) {
    this._privatekey = value;
  }
  public resetPrivatekey() {
    this._privatekey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privatekeyInput() {
    return this._privatekey;
  }

  // status - computed: false, optional: true, required: false
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

  // url - computed: false, optional: true, required: false
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  public resetUrl() {
    this._url = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }
}

export class SystemAcmeAccountsList extends cdktf.ComplexList {
  public internalValue? : SystemAcmeAccounts[] | cdktf.IResolvable

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
  public get(index: number): SystemAcmeAccountsOutputReference {
    return new SystemAcmeAccountsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_acme fmgdevice_system_acme}
*/
export class SystemAcme extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fmgdevice_system_acme";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SystemAcme resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SystemAcme to import
  * @param importFromId The id of the existing SystemAcme that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_acme#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SystemAcme to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fmgdevice_system_acme", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_acme fmgdevice_system_acme} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SystemAcmeConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SystemAcmeConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fmgdevice_system_acme',
      terraformGeneratorMetadata: {
        providerName: 'fmgdevice',
        providerVersion: '1.2.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._deviceName = config.deviceName;
    this._dynamicSortSubtable = config.dynamicSortSubtable;
    this._id = config.id;
    this._interface = config.interface;
    this._sourceIp = config.sourceIp;
    this._sourceIp6 = config.sourceIp6;
    this._storePassphrase = config.storePassphrase;
    this._useHaDirect = config.useHaDirect;
    this._accounts.internalValue = config.accounts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // device_name - computed: true, optional: true, required: false
  private _deviceName?: string; 
  public get deviceName() {
    return this.getStringAttribute('device_name');
  }
  public set deviceName(value: string) {
    this._deviceName = value;
  }
  public resetDeviceName() {
    this._deviceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceNameInput() {
    return this._deviceName;
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

  // interface - computed: true, optional: true, required: false
  private _interface?: string[]; 
  public get interface() {
    return cdktf.Fn.tolist(this.getListAttribute('interface'));
  }
  public set interface(value: string[]) {
    this._interface = value;
  }
  public resetInterface() {
    this._interface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceInput() {
    return this._interface;
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

  // source_ip6 - computed: true, optional: true, required: false
  private _sourceIp6?: string; 
  public get sourceIp6() {
    return this.getStringAttribute('source_ip6');
  }
  public set sourceIp6(value: string) {
    this._sourceIp6 = value;
  }
  public resetSourceIp6() {
    this._sourceIp6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceIp6Input() {
    return this._sourceIp6;
  }

  // store_passphrase - computed: true, optional: true, required: false
  private _storePassphrase?: string[]; 
  public get storePassphrase() {
    return cdktf.Fn.tolist(this.getListAttribute('store_passphrase'));
  }
  public set storePassphrase(value: string[]) {
    this._storePassphrase = value;
  }
  public resetStorePassphrase() {
    this._storePassphrase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storePassphraseInput() {
    return this._storePassphrase;
  }

  // use_ha_direct - computed: true, optional: true, required: false
  private _useHaDirect?: string; 
  public get useHaDirect() {
    return this.getStringAttribute('use_ha_direct');
  }
  public set useHaDirect(value: string) {
    this._useHaDirect = value;
  }
  public resetUseHaDirect() {
    this._useHaDirect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useHaDirectInput() {
    return this._useHaDirect;
  }

  // accounts - computed: false, optional: true, required: false
  private _accounts = new SystemAcmeAccountsList(this, "accounts", false);
  public get accounts() {
    return this._accounts;
  }
  public putAccounts(value: SystemAcmeAccounts[] | cdktf.IResolvable) {
    this._accounts.internalValue = value;
  }
  public resetAccounts() {
    this._accounts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountsInput() {
    return this._accounts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      device_name: cdktf.stringToTerraform(this._deviceName),
      dynamic_sort_subtable: cdktf.stringToTerraform(this._dynamicSortSubtable),
      id: cdktf.stringToTerraform(this._id),
      interface: cdktf.listMapper(cdktf.stringToTerraform, false)(this._interface),
      source_ip: cdktf.stringToTerraform(this._sourceIp),
      source_ip6: cdktf.stringToTerraform(this._sourceIp6),
      store_passphrase: cdktf.listMapper(cdktf.stringToTerraform, false)(this._storePassphrase),
      use_ha_direct: cdktf.stringToTerraform(this._useHaDirect),
      accounts: cdktf.listMapper(systemAcmeAccountsToTerraform, true)(this._accounts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      device_name: {
        value: cdktf.stringToHclTerraform(this._deviceName),
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
      interface: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._interface),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      source_ip: {
        value: cdktf.stringToHclTerraform(this._sourceIp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source_ip6: {
        value: cdktf.stringToHclTerraform(this._sourceIp6),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      store_passphrase: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._storePassphrase),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      use_ha_direct: {
        value: cdktf.stringToHclTerraform(this._useHaDirect),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      accounts: {
        value: cdktf.listMapperHcl(systemAcmeAccountsToHclTerraform, true)(this._accounts.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SystemAcmeAccountsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
