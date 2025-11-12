// https://registry.terraform.io/providers/ciscodevnet/dcnm/1.2.7/docs/resources/inventory
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface InventoryConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/dcnm/1.2.7/docs/resources/inventory#auth_protocol Inventory#auth_protocol}
  */
  readonly authProtocol?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/dcnm/1.2.7/docs/resources/inventory#config_timeout Inventory#config_timeout}
  */
  readonly configTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/dcnm/1.2.7/docs/resources/inventory#deploy Inventory#deploy}
  */
  readonly deploy?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/dcnm/1.2.7/docs/resources/inventory#fabric_name Inventory#fabric_name}
  */
  readonly fabricName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/dcnm/1.2.7/docs/resources/inventory#id Inventory#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/dcnm/1.2.7/docs/resources/inventory#ips Inventory#ips}
  */
  readonly ips?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/dcnm/1.2.7/docs/resources/inventory#max_hops Inventory#max_hops}
  */
  readonly maxHops?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/dcnm/1.2.7/docs/resources/inventory#password Inventory#password}
  */
  readonly password: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/dcnm/1.2.7/docs/resources/inventory#platform Inventory#platform}
  */
  readonly platform?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/dcnm/1.2.7/docs/resources/inventory#preserve_config Inventory#preserve_config}
  */
  readonly preserveConfig?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/dcnm/1.2.7/docs/resources/inventory#second_timeout Inventory#second_timeout}
  */
  readonly secondTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/dcnm/1.2.7/docs/resources/inventory#username Inventory#username}
  */
  readonly username: string;
  /**
  * switch_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/dcnm/1.2.7/docs/resources/inventory#switch_config Inventory#switch_config}
  */
  readonly switchConfig: InventorySwitchConfig[] | cdktf.IResolvable;
}
export interface InventorySwitchConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/dcnm/1.2.7/docs/resources/inventory#ip Inventory#ip}
  */
  readonly ip: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/dcnm/1.2.7/docs/resources/inventory#mode Inventory#mode}
  */
  readonly mode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/dcnm/1.2.7/docs/resources/inventory#model Inventory#model}
  */
  readonly model?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/dcnm/1.2.7/docs/resources/inventory#role Inventory#role}
  */
  readonly role?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/dcnm/1.2.7/docs/resources/inventory#serial_number Inventory#serial_number}
  */
  readonly serialNumber?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/dcnm/1.2.7/docs/resources/inventory#switch_db_id Inventory#switch_db_id}
  */
  readonly switchDbId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/dcnm/1.2.7/docs/resources/inventory#switch_name Inventory#switch_name}
  */
  readonly switchName?: string;
}

export function inventorySwitchConfigToTerraform(struct?: InventorySwitchConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip: cdktf.stringToTerraform(struct!.ip),
    mode: cdktf.stringToTerraform(struct!.mode),
    model: cdktf.stringToTerraform(struct!.model),
    role: cdktf.stringToTerraform(struct!.role),
    serial_number: cdktf.stringToTerraform(struct!.serialNumber),
    switch_db_id: cdktf.stringToTerraform(struct!.switchDbId),
    switch_name: cdktf.stringToTerraform(struct!.switchName),
  }
}


export function inventorySwitchConfigToHclTerraform(struct?: InventorySwitchConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ip: {
      value: cdktf.stringToHclTerraform(struct!.ip),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mode: {
      value: cdktf.stringToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    model: {
      value: cdktf.stringToHclTerraform(struct!.model),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    role: {
      value: cdktf.stringToHclTerraform(struct!.role),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    serial_number: {
      value: cdktf.stringToHclTerraform(struct!.serialNumber),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    switch_db_id: {
      value: cdktf.stringToHclTerraform(struct!.switchDbId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    switch_name: {
      value: cdktf.stringToHclTerraform(struct!.switchName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InventorySwitchConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): InventorySwitchConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ip !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip = this._ip;
    }
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._model !== undefined) {
      hasAnyValues = true;
      internalValueResult.model = this._model;
    }
    if (this._role !== undefined) {
      hasAnyValues = true;
      internalValueResult.role = this._role;
    }
    if (this._serialNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.serialNumber = this._serialNumber;
    }
    if (this._switchDbId !== undefined) {
      hasAnyValues = true;
      internalValueResult.switchDbId = this._switchDbId;
    }
    if (this._switchName !== undefined) {
      hasAnyValues = true;
      internalValueResult.switchName = this._switchName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InventorySwitchConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ip = undefined;
      this._mode = undefined;
      this._model = undefined;
      this._role = undefined;
      this._serialNumber = undefined;
      this._switchDbId = undefined;
      this._switchName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ip = value.ip;
      this._mode = value.mode;
      this._model = value.model;
      this._role = value.role;
      this._serialNumber = value.serialNumber;
      this._switchDbId = value.switchDbId;
      this._switchName = value.switchName;
    }
  }

  // ip - computed: false, optional: false, required: true
  private _ip?: string; 
  public get ip() {
    return this.getStringAttribute('ip');
  }
  public set ip(value: string) {
    this._ip = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipInput() {
    return this._ip;
  }

  // mode - computed: true, optional: true, required: false
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }

  // model - computed: true, optional: true, required: false
  private _model?: string; 
  public get model() {
    return this.getStringAttribute('model');
  }
  public set model(value: string) {
    this._model = value;
  }
  public resetModel() {
    this._model = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modelInput() {
    return this._model;
  }

  // role - computed: true, optional: true, required: false
  private _role?: string; 
  public get role() {
    return this.getStringAttribute('role');
  }
  public set role(value: string) {
    this._role = value;
  }
  public resetRole() {
    this._role = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleInput() {
    return this._role;
  }

  // serial_number - computed: true, optional: true, required: false
  private _serialNumber?: string; 
  public get serialNumber() {
    return this.getStringAttribute('serial_number');
  }
  public set serialNumber(value: string) {
    this._serialNumber = value;
  }
  public resetSerialNumber() {
    this._serialNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serialNumberInput() {
    return this._serialNumber;
  }

  // switch_db_id - computed: true, optional: true, required: false
  private _switchDbId?: string; 
  public get switchDbId() {
    return this.getStringAttribute('switch_db_id');
  }
  public set switchDbId(value: string) {
    this._switchDbId = value;
  }
  public resetSwitchDbId() {
    this._switchDbId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get switchDbIdInput() {
    return this._switchDbId;
  }

  // switch_name - computed: true, optional: true, required: false
  private _switchName?: string; 
  public get switchName() {
    return this.getStringAttribute('switch_name');
  }
  public set switchName(value: string) {
    this._switchName = value;
  }
  public resetSwitchName() {
    this._switchName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get switchNameInput() {
    return this._switchName;
  }
}

export class InventorySwitchConfigList extends cdktf.ComplexList {
  public internalValue? : InventorySwitchConfig[] | cdktf.IResolvable

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
  public get(index: number): InventorySwitchConfigOutputReference {
    return new InventorySwitchConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/dcnm/1.2.7/docs/resources/inventory dcnm_inventory}
*/
export class Inventory extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dcnm_inventory";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Inventory resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Inventory to import
  * @param importFromId The id of the existing Inventory that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/dcnm/1.2.7/docs/resources/inventory#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Inventory to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dcnm_inventory", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/dcnm/1.2.7/docs/resources/inventory dcnm_inventory} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options InventoryConfig
  */
  public constructor(scope: Construct, id: string, config: InventoryConfig) {
    super(scope, id, {
      terraformResourceType: 'dcnm_inventory',
      terraformGeneratorMetadata: {
        providerName: 'dcnm',
        providerVersion: '1.2.7',
        providerVersionConstraint: '1.2.7'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._authProtocol = config.authProtocol;
    this._configTimeout = config.configTimeout;
    this._deploy = config.deploy;
    this._fabricName = config.fabricName;
    this._id = config.id;
    this._ips = config.ips;
    this._maxHops = config.maxHops;
    this._password = config.password;
    this._platform = config.platform;
    this._preserveConfig = config.preserveConfig;
    this._secondTimeout = config.secondTimeout;
    this._username = config.username;
    this._switchConfig.internalValue = config.switchConfig;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auth_protocol - computed: false, optional: true, required: false
  private _authProtocol?: number; 
  public get authProtocol() {
    return this.getNumberAttribute('auth_protocol');
  }
  public set authProtocol(value: number) {
    this._authProtocol = value;
  }
  public resetAuthProtocol() {
    this._authProtocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authProtocolInput() {
    return this._authProtocol;
  }

  // config_timeout - computed: false, optional: true, required: false
  private _configTimeout?: number; 
  public get configTimeout() {
    return this.getNumberAttribute('config_timeout');
  }
  public set configTimeout(value: number) {
    this._configTimeout = value;
  }
  public resetConfigTimeout() {
    this._configTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configTimeoutInput() {
    return this._configTimeout;
  }

  // deploy - computed: false, optional: true, required: false
  private _deploy?: boolean | cdktf.IResolvable; 
  public get deploy() {
    return this.getBooleanAttribute('deploy');
  }
  public set deploy(value: boolean | cdktf.IResolvable) {
    this._deploy = value;
  }
  public resetDeploy() {
    this._deploy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deployInput() {
    return this._deploy;
  }

  // fabric_name - computed: false, optional: false, required: true
  private _fabricName?: string; 
  public get fabricName() {
    return this.getStringAttribute('fabric_name');
  }
  public set fabricName(value: string) {
    this._fabricName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fabricNameInput() {
    return this._fabricName;
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

  // ips - computed: true, optional: true, required: false
  private _ips?: string[]; 
  public get ips() {
    return this.getListAttribute('ips');
  }
  public set ips(value: string[]) {
    this._ips = value;
  }
  public resetIps() {
    this._ips = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipsInput() {
    return this._ips;
  }

  // max_hops - computed: true, optional: true, required: false
  private _maxHops?: number; 
  public get maxHops() {
    return this.getNumberAttribute('max_hops');
  }
  public set maxHops(value: number) {
    this._maxHops = value;
  }
  public resetMaxHops() {
    this._maxHops = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxHopsInput() {
    return this._maxHops;
  }

  // password - computed: false, optional: false, required: true
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // platform - computed: true, optional: true, required: false
  private _platform?: string; 
  public get platform() {
    return this.getStringAttribute('platform');
  }
  public set platform(value: string) {
    this._platform = value;
  }
  public resetPlatform() {
    this._platform = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get platformInput() {
    return this._platform;
  }

  // preserve_config - computed: false, optional: true, required: false
  private _preserveConfig?: string; 
  public get preserveConfig() {
    return this.getStringAttribute('preserve_config');
  }
  public set preserveConfig(value: string) {
    this._preserveConfig = value;
  }
  public resetPreserveConfig() {
    this._preserveConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preserveConfigInput() {
    return this._preserveConfig;
  }

  // second_timeout - computed: true, optional: true, required: false
  private _secondTimeout?: number; 
  public get secondTimeout() {
    return this.getNumberAttribute('second_timeout');
  }
  public set secondTimeout(value: number) {
    this._secondTimeout = value;
  }
  public resetSecondTimeout() {
    this._secondTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secondTimeoutInput() {
    return this._secondTimeout;
  }

  // username - computed: false, optional: false, required: true
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }

  // switch_config - computed: false, optional: false, required: true
  private _switchConfig = new InventorySwitchConfigList(this, "switch_config", true);
  public get switchConfig() {
    return this._switchConfig;
  }
  public putSwitchConfig(value: InventorySwitchConfig[] | cdktf.IResolvable) {
    this._switchConfig.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get switchConfigInput() {
    return this._switchConfig.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      auth_protocol: cdktf.numberToTerraform(this._authProtocol),
      config_timeout: cdktf.numberToTerraform(this._configTimeout),
      deploy: cdktf.booleanToTerraform(this._deploy),
      fabric_name: cdktf.stringToTerraform(this._fabricName),
      id: cdktf.stringToTerraform(this._id),
      ips: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ips),
      max_hops: cdktf.numberToTerraform(this._maxHops),
      password: cdktf.stringToTerraform(this._password),
      platform: cdktf.stringToTerraform(this._platform),
      preserve_config: cdktf.stringToTerraform(this._preserveConfig),
      second_timeout: cdktf.numberToTerraform(this._secondTimeout),
      username: cdktf.stringToTerraform(this._username),
      switch_config: cdktf.listMapper(inventorySwitchConfigToTerraform, true)(this._switchConfig.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      auth_protocol: {
        value: cdktf.numberToHclTerraform(this._authProtocol),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      config_timeout: {
        value: cdktf.numberToHclTerraform(this._configTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      deploy: {
        value: cdktf.booleanToHclTerraform(this._deploy),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      fabric_name: {
        value: cdktf.stringToHclTerraform(this._fabricName),
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
      ips: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._ips),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      max_hops: {
        value: cdktf.numberToHclTerraform(this._maxHops),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      password: {
        value: cdktf.stringToHclTerraform(this._password),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      platform: {
        value: cdktf.stringToHclTerraform(this._platform),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      preserve_config: {
        value: cdktf.stringToHclTerraform(this._preserveConfig),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      second_timeout: {
        value: cdktf.numberToHclTerraform(this._secondTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      username: {
        value: cdktf.stringToHclTerraform(this._username),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      switch_config: {
        value: cdktf.listMapperHcl(inventorySwitchConfigToHclTerraform, true)(this._switchConfig.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "InventorySwitchConfigList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
