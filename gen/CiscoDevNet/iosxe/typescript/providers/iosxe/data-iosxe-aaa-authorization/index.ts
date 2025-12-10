// https://registry.terraform.io/providers/ciscodevnet/iosxe/0.12.0/docs/data-sources/aaa_authorization
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataIosxeAaaAuthorizationConfig extends cdktf.TerraformMetaArguments {
  /**
  * A device name from the provider configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.12.0/docs/data-sources/aaa_authorization#device DataIosxeAaaAuthorization#device}
  */
  readonly device?: string;
}
export interface DataIosxeAaaAuthorizationCommands {
}

export function dataIosxeAaaAuthorizationCommandsToTerraform(struct?: DataIosxeAaaAuthorizationCommands): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIosxeAaaAuthorizationCommandsToHclTerraform(struct?: DataIosxeAaaAuthorizationCommands): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIosxeAaaAuthorizationCommandsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIosxeAaaAuthorizationCommands | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIosxeAaaAuthorizationCommands | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // a1_group - computed: true, optional: false, required: false
  public get a1Group() {
    return this.getStringAttribute('a1_group');
  }

  // a1_if_authenticated - computed: true, optional: false, required: false
  public get a1IfAuthenticated() {
    return this.getBooleanAttribute('a1_if_authenticated');
  }

  // a1_local - computed: true, optional: false, required: false
  public get a1Local() {
    return this.getBooleanAttribute('a1_local');
  }

  // a1_none - computed: true, optional: false, required: false
  public get a1None() {
    return this.getBooleanAttribute('a1_none');
  }

  // a1_radius - computed: true, optional: false, required: false
  public get a1Radius() {
    return this.getBooleanAttribute('a1_radius');
  }

  // a1_tacacs - computed: true, optional: false, required: false
  public get a1Tacacs() {
    return this.getBooleanAttribute('a1_tacacs');
  }

  // a2_group - computed: true, optional: false, required: false
  public get a2Group() {
    return this.getStringAttribute('a2_group');
  }

  // a2_if_authenticated - computed: true, optional: false, required: false
  public get a2IfAuthenticated() {
    return this.getBooleanAttribute('a2_if_authenticated');
  }

  // a2_local - computed: true, optional: false, required: false
  public get a2Local() {
    return this.getBooleanAttribute('a2_local');
  }

  // a2_none - computed: true, optional: false, required: false
  public get a2None() {
    return this.getBooleanAttribute('a2_none');
  }

  // a2_radius - computed: true, optional: false, required: false
  public get a2Radius() {
    return this.getBooleanAttribute('a2_radius');
  }

  // a2_tacacs - computed: true, optional: false, required: false
  public get a2Tacacs() {
    return this.getBooleanAttribute('a2_tacacs');
  }

  // a3_group - computed: true, optional: false, required: false
  public get a3Group() {
    return this.getStringAttribute('a3_group');
  }

  // a3_if_authenticated - computed: true, optional: false, required: false
  public get a3IfAuthenticated() {
    return this.getBooleanAttribute('a3_if_authenticated');
  }

  // a3_local - computed: true, optional: false, required: false
  public get a3Local() {
    return this.getBooleanAttribute('a3_local');
  }

  // a3_none - computed: true, optional: false, required: false
  public get a3None() {
    return this.getBooleanAttribute('a3_none');
  }

  // a3_radius - computed: true, optional: false, required: false
  public get a3Radius() {
    return this.getBooleanAttribute('a3_radius');
  }

  // a3_tacacs - computed: true, optional: false, required: false
  public get a3Tacacs() {
    return this.getBooleanAttribute('a3_tacacs');
  }

  // a4_group - computed: true, optional: false, required: false
  public get a4Group() {
    return this.getStringAttribute('a4_group');
  }

  // a4_if_authenticated - computed: true, optional: false, required: false
  public get a4IfAuthenticated() {
    return this.getBooleanAttribute('a4_if_authenticated');
  }

  // a4_local - computed: true, optional: false, required: false
  public get a4Local() {
    return this.getBooleanAttribute('a4_local');
  }

  // a4_none - computed: true, optional: false, required: false
  public get a4None() {
    return this.getBooleanAttribute('a4_none');
  }

  // a4_radius - computed: true, optional: false, required: false
  public get a4Radius() {
    return this.getBooleanAttribute('a4_radius');
  }

  // a4_tacacs - computed: true, optional: false, required: false
  public get a4Tacacs() {
    return this.getBooleanAttribute('a4_tacacs');
  }

  // level - computed: true, optional: false, required: false
  public get level() {
    return this.getNumberAttribute('level');
  }

  // list_name - computed: true, optional: false, required: false
  public get listName() {
    return this.getStringAttribute('list_name');
  }
}

export class DataIosxeAaaAuthorizationCommandsList extends cdktf.ComplexList {

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
  public get(index: number): DataIosxeAaaAuthorizationCommandsOutputReference {
    return new DataIosxeAaaAuthorizationCommandsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIosxeAaaAuthorizationConfigLists {
}

export function dataIosxeAaaAuthorizationConfigListsToTerraform(struct?: DataIosxeAaaAuthorizationConfigLists): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIosxeAaaAuthorizationConfigListsToHclTerraform(struct?: DataIosxeAaaAuthorizationConfigLists): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIosxeAaaAuthorizationConfigListsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIosxeAaaAuthorizationConfigLists | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIosxeAaaAuthorizationConfigLists | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // group1_cache - computed: true, optional: false, required: false
  public get group1Cache() {
    return this.getStringAttribute('group1_cache');
  }

  // group1_group - computed: true, optional: false, required: false
  public get group1Group() {
    return this.getStringAttribute('group1_group');
  }

  // group1_radius - computed: true, optional: false, required: false
  public get group1Radius() {
    return this.getBooleanAttribute('group1_radius');
  }

  // group1_tacacs - computed: true, optional: false, required: false
  public get group1Tacacs() {
    return this.getBooleanAttribute('group1_tacacs');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

export class DataIosxeAaaAuthorizationConfigListsList extends cdktf.ComplexList {

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
  public get(index: number): DataIosxeAaaAuthorizationConfigListsOutputReference {
    return new DataIosxeAaaAuthorizationConfigListsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIosxeAaaAuthorizationExecs {
}

export function dataIosxeAaaAuthorizationExecsToTerraform(struct?: DataIosxeAaaAuthorizationExecs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIosxeAaaAuthorizationExecsToHclTerraform(struct?: DataIosxeAaaAuthorizationExecs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIosxeAaaAuthorizationExecsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIosxeAaaAuthorizationExecs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIosxeAaaAuthorizationExecs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // a1_group - computed: true, optional: false, required: false
  public get a1Group() {
    return this.getStringAttribute('a1_group');
  }

  // a1_if_authenticated - computed: true, optional: false, required: false
  public get a1IfAuthenticated() {
    return this.getBooleanAttribute('a1_if_authenticated');
  }

  // a1_local - computed: true, optional: false, required: false
  public get a1Local() {
    return this.getBooleanAttribute('a1_local');
  }

  // a1_radius - computed: true, optional: false, required: false
  public get a1Radius() {
    return this.getBooleanAttribute('a1_radius');
  }

  // a1_tacacs - computed: true, optional: false, required: false
  public get a1Tacacs() {
    return this.getBooleanAttribute('a1_tacacs');
  }

  // a2_group - computed: true, optional: false, required: false
  public get a2Group() {
    return this.getStringAttribute('a2_group');
  }

  // a2_if_authenticated - computed: true, optional: false, required: false
  public get a2IfAuthenticated() {
    return this.getBooleanAttribute('a2_if_authenticated');
  }

  // a2_local - computed: true, optional: false, required: false
  public get a2Local() {
    return this.getBooleanAttribute('a2_local');
  }

  // a2_radius - computed: true, optional: false, required: false
  public get a2Radius() {
    return this.getBooleanAttribute('a2_radius');
  }

  // a2_tacacs - computed: true, optional: false, required: false
  public get a2Tacacs() {
    return this.getBooleanAttribute('a2_tacacs');
  }

  // a3_group - computed: true, optional: false, required: false
  public get a3Group() {
    return this.getStringAttribute('a3_group');
  }

  // a3_if_authenticated - computed: true, optional: false, required: false
  public get a3IfAuthenticated() {
    return this.getBooleanAttribute('a3_if_authenticated');
  }

  // a3_local - computed: true, optional: false, required: false
  public get a3Local() {
    return this.getBooleanAttribute('a3_local');
  }

  // a3_radius - computed: true, optional: false, required: false
  public get a3Radius() {
    return this.getBooleanAttribute('a3_radius');
  }

  // a3_tacacs - computed: true, optional: false, required: false
  public get a3Tacacs() {
    return this.getBooleanAttribute('a3_tacacs');
  }

  // a4_group - computed: true, optional: false, required: false
  public get a4Group() {
    return this.getStringAttribute('a4_group');
  }

  // a4_if_authenticated - computed: true, optional: false, required: false
  public get a4IfAuthenticated() {
    return this.getBooleanAttribute('a4_if_authenticated');
  }

  // a4_local - computed: true, optional: false, required: false
  public get a4Local() {
    return this.getBooleanAttribute('a4_local');
  }

  // a4_radius - computed: true, optional: false, required: false
  public get a4Radius() {
    return this.getBooleanAttribute('a4_radius');
  }

  // a4_tacacs - computed: true, optional: false, required: false
  public get a4Tacacs() {
    return this.getBooleanAttribute('a4_tacacs');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

export class DataIosxeAaaAuthorizationExecsList extends cdktf.ComplexList {

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
  public get(index: number): DataIosxeAaaAuthorizationExecsOutputReference {
    return new DataIosxeAaaAuthorizationExecsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIosxeAaaAuthorizationNetworks {
}

export function dataIosxeAaaAuthorizationNetworksToTerraform(struct?: DataIosxeAaaAuthorizationNetworks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIosxeAaaAuthorizationNetworksToHclTerraform(struct?: DataIosxeAaaAuthorizationNetworks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIosxeAaaAuthorizationNetworksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIosxeAaaAuthorizationNetworks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIosxeAaaAuthorizationNetworks | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // a1_group - computed: true, optional: false, required: false
  public get a1Group() {
    return this.getStringAttribute('a1_group');
  }

  // a1_local - computed: true, optional: false, required: false
  public get a1Local() {
    return this.getBooleanAttribute('a1_local');
  }

  // a2_group - computed: true, optional: false, required: false
  public get a2Group() {
    return this.getStringAttribute('a2_group');
  }

  // a2_local - computed: true, optional: false, required: false
  public get a2Local() {
    return this.getBooleanAttribute('a2_local');
  }

  // a3_group - computed: true, optional: false, required: false
  public get a3Group() {
    return this.getStringAttribute('a3_group');
  }

  // a3_local - computed: true, optional: false, required: false
  public get a3Local() {
    return this.getBooleanAttribute('a3_local');
  }

  // a4_group - computed: true, optional: false, required: false
  public get a4Group() {
    return this.getStringAttribute('a4_group');
  }

  // a4_local - computed: true, optional: false, required: false
  public get a4Local() {
    return this.getBooleanAttribute('a4_local');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }
}

export class DataIosxeAaaAuthorizationNetworksList extends cdktf.ComplexList {

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
  public get(index: number): DataIosxeAaaAuthorizationNetworksOutputReference {
    return new DataIosxeAaaAuthorizationNetworksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.12.0/docs/data-sources/aaa_authorization iosxe_aaa_authorization}
*/
export class DataIosxeAaaAuthorization extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "iosxe_aaa_authorization";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataIosxeAaaAuthorization resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataIosxeAaaAuthorization to import
  * @param importFromId The id of the existing DataIosxeAaaAuthorization that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.12.0/docs/data-sources/aaa_authorization#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataIosxeAaaAuthorization to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "iosxe_aaa_authorization", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.12.0/docs/data-sources/aaa_authorization iosxe_aaa_authorization} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataIosxeAaaAuthorizationConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataIosxeAaaAuthorizationConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'iosxe_aaa_authorization',
      terraformGeneratorMetadata: {
        providerName: 'iosxe',
        providerVersion: '0.12.0',
        providerVersionConstraint: '0.12.0'
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
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // commands - computed: true, optional: false, required: false
  private _commands = new DataIosxeAaaAuthorizationCommandsList(this, "commands", false);
  public get commands() {
    return this._commands;
  }

  // config_commands - computed: true, optional: false, required: false
  public get configCommands() {
    return this.getBooleanAttribute('config_commands');
  }

  // config_lists - computed: true, optional: false, required: false
  private _configLists = new DataIosxeAaaAuthorizationConfigListsList(this, "config_lists", false);
  public get configLists() {
    return this._configLists;
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

  // execs - computed: true, optional: false, required: false
  private _execs = new DataIosxeAaaAuthorizationExecsList(this, "execs", false);
  public get execs() {
    return this._execs;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // networks - computed: true, optional: false, required: false
  private _networks = new DataIosxeAaaAuthorizationNetworksList(this, "networks", false);
  public get networks() {
    return this._networks;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      device: cdktf.stringToTerraform(this._device),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
