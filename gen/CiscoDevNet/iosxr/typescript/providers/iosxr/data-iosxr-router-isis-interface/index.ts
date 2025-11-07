// https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/data-sources/router_isis_interface
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataIosxrRouterIsisInterfaceConfig extends cdktf.TerraformMetaArguments {
  /**
  * A device name from the provider configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/data-sources/router_isis_interface#device DataIosxrRouterIsisInterface#device}
  */
  readonly device?: string;
  /**
  * Interface to configure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/data-sources/router_isis_interface#interface_name DataIosxrRouterIsisInterface#interface_name}
  */
  readonly interfaceName: string;
  /**
  * Process ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/data-sources/router_isis_interface#process_id DataIosxrRouterIsisInterface#process_id}
  */
  readonly processId: string;
}
export interface DataIosxrRouterIsisInterfaceHelloPaddingLevels {
}

export function dataIosxrRouterIsisInterfaceHelloPaddingLevelsToTerraform(struct?: DataIosxrRouterIsisInterfaceHelloPaddingLevels): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIosxrRouterIsisInterfaceHelloPaddingLevelsToHclTerraform(struct?: DataIosxrRouterIsisInterfaceHelloPaddingLevels): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIosxrRouterIsisInterfaceHelloPaddingLevelsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIosxrRouterIsisInterfaceHelloPaddingLevels | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIosxrRouterIsisInterfaceHelloPaddingLevels | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // hello_padding - computed: true, optional: false, required: false
  public get helloPadding() {
    return this.getStringAttribute('hello_padding');
  }

  // level_number - computed: true, optional: false, required: false
  public get levelNumber() {
    return this.getNumberAttribute('level_number');
  }
}

export class DataIosxrRouterIsisInterfaceHelloPaddingLevelsList extends cdktf.ComplexList {

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
  public get(index: number): DataIosxrRouterIsisInterfaceHelloPaddingLevelsOutputReference {
    return new DataIosxrRouterIsisInterfaceHelloPaddingLevelsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIosxrRouterIsisInterfaceHelloPasswordAcceptsLevels {
}

export function dataIosxrRouterIsisInterfaceHelloPasswordAcceptsLevelsToTerraform(struct?: DataIosxrRouterIsisInterfaceHelloPasswordAcceptsLevels): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIosxrRouterIsisInterfaceHelloPasswordAcceptsLevelsToHclTerraform(struct?: DataIosxrRouterIsisInterfaceHelloPasswordAcceptsLevels): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIosxrRouterIsisInterfaceHelloPasswordAcceptsLevelsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIosxrRouterIsisInterfaceHelloPasswordAcceptsLevels | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIosxrRouterIsisInterfaceHelloPasswordAcceptsLevels | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // encrypted - computed: true, optional: false, required: false
  public get encrypted() {
    return this.getStringAttribute('encrypted');
  }

  // level_number - computed: true, optional: false, required: false
  public get levelNumber() {
    return this.getNumberAttribute('level_number');
  }
}

export class DataIosxrRouterIsisInterfaceHelloPasswordAcceptsLevelsList extends cdktf.ComplexList {

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
  public get(index: number): DataIosxrRouterIsisInterfaceHelloPasswordAcceptsLevelsOutputReference {
    return new DataIosxrRouterIsisInterfaceHelloPasswordAcceptsLevelsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIosxrRouterIsisInterfaceHelloPasswordLevels {
}

export function dataIosxrRouterIsisInterfaceHelloPasswordLevelsToTerraform(struct?: DataIosxrRouterIsisInterfaceHelloPasswordLevels): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIosxrRouterIsisInterfaceHelloPasswordLevelsToHclTerraform(struct?: DataIosxrRouterIsisInterfaceHelloPasswordLevels): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIosxrRouterIsisInterfaceHelloPasswordLevelsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIosxrRouterIsisInterfaceHelloPasswordLevels | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIosxrRouterIsisInterfaceHelloPasswordLevels | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // hello_keychain_name - computed: true, optional: false, required: false
  public get helloKeychainName() {
    return this.getStringAttribute('hello_keychain_name');
  }

  // hello_keychain_send_only - computed: true, optional: false, required: false
  public get helloKeychainSendOnly() {
    return this.getBooleanAttribute('hello_keychain_send_only');
  }

  // hello_password_hmac_md5_encrypted - computed: true, optional: false, required: false
  public get helloPasswordHmacMd5Encrypted() {
    return this.getStringAttribute('hello_password_hmac_md5_encrypted');
  }

  // hello_password_hmac_md5_send_only - computed: true, optional: false, required: false
  public get helloPasswordHmacMd5SendOnly() {
    return this.getBooleanAttribute('hello_password_hmac_md5_send_only');
  }

  // hello_password_text_encrypted - computed: true, optional: false, required: false
  public get helloPasswordTextEncrypted() {
    return this.getStringAttribute('hello_password_text_encrypted');
  }

  // hello_password_text_send_only - computed: true, optional: false, required: false
  public get helloPasswordTextSendOnly() {
    return this.getBooleanAttribute('hello_password_text_send_only');
  }

  // level_number - computed: true, optional: false, required: false
  public get levelNumber() {
    return this.getNumberAttribute('level_number');
  }
}

export class DataIosxrRouterIsisInterfaceHelloPasswordLevelsList extends cdktf.ComplexList {

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
  public get(index: number): DataIosxrRouterIsisInterfaceHelloPasswordLevelsOutputReference {
    return new DataIosxrRouterIsisInterfaceHelloPasswordLevelsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIosxrRouterIsisInterfacePriorityLevels {
}

export function dataIosxrRouterIsisInterfacePriorityLevelsToTerraform(struct?: DataIosxrRouterIsisInterfacePriorityLevels): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIosxrRouterIsisInterfacePriorityLevelsToHclTerraform(struct?: DataIosxrRouterIsisInterfacePriorityLevels): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIosxrRouterIsisInterfacePriorityLevelsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIosxrRouterIsisInterfacePriorityLevels | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIosxrRouterIsisInterfacePriorityLevels | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // level_number - computed: true, optional: false, required: false
  public get levelNumber() {
    return this.getNumberAttribute('level_number');
  }

  // priority - computed: true, optional: false, required: false
  public get priority() {
    return this.getNumberAttribute('priority');
  }
}

export class DataIosxrRouterIsisInterfacePriorityLevelsList extends cdktf.ComplexList {

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
  public get(index: number): DataIosxrRouterIsisInterfacePriorityLevelsOutputReference {
    return new DataIosxrRouterIsisInterfacePriorityLevelsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/data-sources/router_isis_interface iosxr_router_isis_interface}
*/
export class DataIosxrRouterIsisInterface extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "iosxr_router_isis_interface";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataIosxrRouterIsisInterface resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataIosxrRouterIsisInterface to import
  * @param importFromId The id of the existing DataIosxrRouterIsisInterface that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/data-sources/router_isis_interface#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataIosxrRouterIsisInterface to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "iosxr_router_isis_interface", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/data-sources/router_isis_interface iosxr_router_isis_interface} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataIosxrRouterIsisInterfaceConfig
  */
  public constructor(scope: Construct, id: string, config: DataIosxrRouterIsisInterfaceConfig) {
    super(scope, id, {
      terraformResourceType: 'iosxr_router_isis_interface',
      terraformGeneratorMetadata: {
        providerName: 'iosxr',
        providerVersion: '0.6.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._device = config.device;
    this._interfaceName = config.interfaceName;
    this._processId = config.processId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // bfd_fast_detect_ipv4 - computed: true, optional: false, required: false
  public get bfdFastDetectIpv4() {
    return this.getBooleanAttribute('bfd_fast_detect_ipv4');
  }

  // bfd_fast_detect_ipv6 - computed: true, optional: false, required: false
  public get bfdFastDetectIpv6() {
    return this.getBooleanAttribute('bfd_fast_detect_ipv6');
  }

  // bfd_minimum_interval - computed: true, optional: false, required: false
  public get bfdMinimumInterval() {
    return this.getNumberAttribute('bfd_minimum_interval');
  }

  // bfd_multiplier - computed: true, optional: false, required: false
  public get bfdMultiplier() {
    return this.getNumberAttribute('bfd_multiplier');
  }

  // circuit_type - computed: true, optional: false, required: false
  public get circuitType() {
    return this.getStringAttribute('circuit_type');
  }

  // device - computed: false, optional: true, required: false
  private _device?: string; 
  public get device() {
    return this.getStringAttribute('device');
  }
  public set device(value: string) {
    this._device = value;
  }
  public resetDevice() {
    this._device = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceInput() {
    return this._device;
  }

  // hello_padding - computed: true, optional: false, required: false
  public get helloPadding() {
    return this.getStringAttribute('hello_padding');
  }

  // hello_padding_levels - computed: true, optional: false, required: false
  private _helloPaddingLevels = new DataIosxrRouterIsisInterfaceHelloPaddingLevelsList(this, "hello_padding_levels", false);
  public get helloPaddingLevels() {
    return this._helloPaddingLevels;
  }

  // hello_password_accept_encrypted - computed: true, optional: false, required: false
  public get helloPasswordAcceptEncrypted() {
    return this.getStringAttribute('hello_password_accept_encrypted');
  }

  // hello_password_accepts_levels - computed: true, optional: false, required: false
  private _helloPasswordAcceptsLevels = new DataIosxrRouterIsisInterfaceHelloPasswordAcceptsLevelsList(this, "hello_password_accepts_levels", false);
  public get helloPasswordAcceptsLevels() {
    return this._helloPasswordAcceptsLevels;
  }

  // hello_password_hmac_md5_encrypted - computed: true, optional: false, required: false
  public get helloPasswordHmacMd5Encrypted() {
    return this.getStringAttribute('hello_password_hmac_md5_encrypted');
  }

  // hello_password_hmac_md5_send_only - computed: true, optional: false, required: false
  public get helloPasswordHmacMd5SendOnly() {
    return this.getBooleanAttribute('hello_password_hmac_md5_send_only');
  }

  // hello_password_keychain_name - computed: true, optional: false, required: false
  public get helloPasswordKeychainName() {
    return this.getStringAttribute('hello_password_keychain_name');
  }

  // hello_password_keychain_send_only - computed: true, optional: false, required: false
  public get helloPasswordKeychainSendOnly() {
    return this.getBooleanAttribute('hello_password_keychain_send_only');
  }

  // hello_password_levels - computed: true, optional: false, required: false
  private _helloPasswordLevels = new DataIosxrRouterIsisInterfaceHelloPasswordLevelsList(this, "hello_password_levels", false);
  public get helloPasswordLevels() {
    return this._helloPasswordLevels;
  }

  // hello_password_text_encrypted - computed: true, optional: false, required: false
  public get helloPasswordTextEncrypted() {
    return this.getStringAttribute('hello_password_text_encrypted');
  }

  // hello_password_text_send_only - computed: true, optional: false, required: false
  public get helloPasswordTextSendOnly() {
    return this.getBooleanAttribute('hello_password_text_send_only');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // interface_name - computed: false, optional: false, required: true
  private _interfaceName?: string; 
  public get interfaceName() {
    return this.getStringAttribute('interface_name');
  }
  public set interfaceName(value: string) {
    this._interfaceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceNameInput() {
    return this._interfaceName;
  }

  // point_to_point - computed: true, optional: false, required: false
  public get pointToPoint() {
    return this.getBooleanAttribute('point_to_point');
  }

  // priority - computed: true, optional: false, required: false
  public get priority() {
    return this.getNumberAttribute('priority');
  }

  // priority_levels - computed: true, optional: false, required: false
  private _priorityLevels = new DataIosxrRouterIsisInterfacePriorityLevelsList(this, "priority_levels", false);
  public get priorityLevels() {
    return this._priorityLevels;
  }

  // process_id - computed: false, optional: false, required: true
  private _processId?: string; 
  public get processId() {
    return this.getStringAttribute('process_id');
  }
  public set processId(value: string) {
    this._processId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get processIdInput() {
    return this._processId;
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      device: cdktf.stringToTerraform(this._device),
      interface_name: cdktf.stringToTerraform(this._interfaceName),
      process_id: cdktf.stringToTerraform(this._processId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      device: {
        value: cdktf.stringToHclTerraform(this._device),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      interface_name: {
        value: cdktf.stringToHclTerraform(this._interfaceName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      process_id: {
        value: cdktf.stringToHclTerraform(this._processId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
