// https://registry.terraform.io/providers/ciscodevnet/iosxe/0.12.0/docs/data-sources/line
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataIosxeLineConfig extends cdktf.TerraformMetaArguments {
  /**
  * A device name from the provider configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.12.0/docs/data-sources/line#device DataIosxeLine#device}
  */
  readonly device?: string;
}
export interface DataIosxeLineAux {
}

export function dataIosxeLineAuxToTerraform(struct?: DataIosxeLineAux): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIosxeLineAuxToHclTerraform(struct?: DataIosxeLineAux): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIosxeLineAuxOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIosxeLineAux | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIosxeLineAux | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // escape_character - computed: true, optional: false, required: false
  public get escapeCharacter() {
    return this.getStringAttribute('escape_character');
  }

  // exec_timeout_minutes - computed: true, optional: false, required: false
  public get execTimeoutMinutes() {
    return this.getNumberAttribute('exec_timeout_minutes');
  }

  // exec_timeout_seconds - computed: true, optional: false, required: false
  public get execTimeoutSeconds() {
    return this.getNumberAttribute('exec_timeout_seconds');
  }

  // first - computed: true, optional: false, required: false
  public get first() {
    return this.getStringAttribute('first');
  }

  // logging_synchronous - computed: true, optional: false, required: false
  public get loggingSynchronous() {
    return this.getBooleanAttribute('logging_synchronous');
  }

  // monitor - computed: true, optional: false, required: false
  public get monitor() {
    return this.getBooleanAttribute('monitor');
  }

  // transport_output_none - computed: true, optional: false, required: false
  public get transportOutputNone() {
    return this.getBooleanAttribute('transport_output_none');
  }
}

export class DataIosxeLineAuxList extends cdktf.ComplexList {

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
  public get(index: number): DataIosxeLineAuxOutputReference {
    return new DataIosxeLineAuxOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIosxeLineConsole {
}

export function dataIosxeLineConsoleToTerraform(struct?: DataIosxeLineConsole): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIosxeLineConsoleToHclTerraform(struct?: DataIosxeLineConsole): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIosxeLineConsoleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIosxeLineConsole | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIosxeLineConsole | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // escape_character - computed: true, optional: false, required: false
  public get escapeCharacter() {
    return this.getStringAttribute('escape_character');
  }

  // exec_timeout_minutes - computed: true, optional: false, required: false
  public get execTimeoutMinutes() {
    return this.getNumberAttribute('exec_timeout_minutes');
  }

  // exec_timeout_seconds - computed: true, optional: false, required: false
  public get execTimeoutSeconds() {
    return this.getNumberAttribute('exec_timeout_seconds');
  }

  // first - computed: true, optional: false, required: false
  public get first() {
    return this.getStringAttribute('first');
  }

  // logging_synchronous - computed: true, optional: false, required: false
  public get loggingSynchronous() {
    return this.getBooleanAttribute('logging_synchronous');
  }

  // login_authentication - computed: true, optional: false, required: false
  public get loginAuthentication() {
    return this.getStringAttribute('login_authentication');
  }

  // login_local - computed: true, optional: false, required: false
  public get loginLocal() {
    return this.getBooleanAttribute('login_local');
  }

  // password - computed: true, optional: false, required: false
  public get password() {
    return this.getStringAttribute('password');
  }

  // password_level - computed: true, optional: false, required: false
  public get passwordLevel() {
    return this.getNumberAttribute('password_level');
  }

  // password_type - computed: true, optional: false, required: false
  public get passwordType() {
    return this.getStringAttribute('password_type');
  }

  // privilege_level - computed: true, optional: false, required: false
  public get privilegeLevel() {
    return this.getNumberAttribute('privilege_level');
  }

  // stopbits - computed: true, optional: false, required: false
  public get stopbits() {
    return this.getStringAttribute('stopbits');
  }

  // transport_output - computed: true, optional: false, required: false
  public get transportOutput() {
    return this.getListAttribute('transport_output');
  }

  // transport_output_all - computed: true, optional: false, required: false
  public get transportOutputAll() {
    return this.getBooleanAttribute('transport_output_all');
  }

  // transport_output_none - computed: true, optional: false, required: false
  public get transportOutputNone() {
    return this.getBooleanAttribute('transport_output_none');
  }
}

export class DataIosxeLineConsoleList extends cdktf.ComplexList {

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
  public get(index: number): DataIosxeLineConsoleOutputReference {
    return new DataIosxeLineConsoleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIosxeLineVtyAccessClasses {
}

export function dataIosxeLineVtyAccessClassesToTerraform(struct?: DataIosxeLineVtyAccessClasses): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIosxeLineVtyAccessClassesToHclTerraform(struct?: DataIosxeLineVtyAccessClasses): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIosxeLineVtyAccessClassesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIosxeLineVtyAccessClasses | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIosxeLineVtyAccessClasses | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // access_list - computed: true, optional: false, required: false
  public get accessList() {
    return this.getStringAttribute('access_list');
  }

  // direction - computed: true, optional: false, required: false
  public get direction() {
    return this.getStringAttribute('direction');
  }

  // vrf_also - computed: true, optional: false, required: false
  public get vrfAlso() {
    return this.getBooleanAttribute('vrf_also');
  }
}

export class DataIosxeLineVtyAccessClassesList extends cdktf.ComplexList {

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
  public get(index: number): DataIosxeLineVtyAccessClassesOutputReference {
    return new DataIosxeLineVtyAccessClassesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIosxeLineVty {
}

export function dataIosxeLineVtyToTerraform(struct?: DataIosxeLineVty): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIosxeLineVtyToHclTerraform(struct?: DataIosxeLineVty): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIosxeLineVtyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIosxeLineVty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIosxeLineVty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // access_classes - computed: true, optional: false, required: false
  private _accessClasses = new DataIosxeLineVtyAccessClassesList(this, "access_classes", false);
  public get accessClasses() {
    return this._accessClasses;
  }

  // authorization_exec - computed: true, optional: false, required: false
  public get authorizationExec() {
    return this.getStringAttribute('authorization_exec');
  }

  // authorization_exec_default - computed: true, optional: false, required: false
  public get authorizationExecDefault() {
    return this.getBooleanAttribute('authorization_exec_default');
  }

  // escape_character - computed: true, optional: false, required: false
  public get escapeCharacter() {
    return this.getStringAttribute('escape_character');
  }

  // exec_timeout_minutes - computed: true, optional: false, required: false
  public get execTimeoutMinutes() {
    return this.getNumberAttribute('exec_timeout_minutes');
  }

  // exec_timeout_seconds - computed: true, optional: false, required: false
  public get execTimeoutSeconds() {
    return this.getNumberAttribute('exec_timeout_seconds');
  }

  // first - computed: true, optional: false, required: false
  public get first() {
    return this.getNumberAttribute('first');
  }

  // last - computed: true, optional: false, required: false
  public get last() {
    return this.getNumberAttribute('last');
  }

  // logging_synchronous - computed: true, optional: false, required: false
  public get loggingSynchronous() {
    return this.getBooleanAttribute('logging_synchronous');
  }

  // login_authentication - computed: true, optional: false, required: false
  public get loginAuthentication() {
    return this.getStringAttribute('login_authentication');
  }

  // monitor - computed: true, optional: false, required: false
  public get monitor() {
    return this.getBooleanAttribute('monitor');
  }

  // password - computed: true, optional: false, required: false
  public get password() {
    return this.getStringAttribute('password');
  }

  // password_level - computed: true, optional: false, required: false
  public get passwordLevel() {
    return this.getNumberAttribute('password_level');
  }

  // password_type - computed: true, optional: false, required: false
  public get passwordType() {
    return this.getStringAttribute('password_type');
  }

  // session_timeout - computed: true, optional: false, required: false
  public get sessionTimeout() {
    return this.getNumberAttribute('session_timeout');
  }

  // stopbits - computed: true, optional: false, required: false
  public get stopbits() {
    return this.getStringAttribute('stopbits');
  }

  // transport_input - computed: true, optional: false, required: false
  public get transportInput() {
    return this.getListAttribute('transport_input');
  }

  // transport_input_all - computed: true, optional: false, required: false
  public get transportInputAll() {
    return this.getBooleanAttribute('transport_input_all');
  }

  // transport_input_none - computed: true, optional: false, required: false
  public get transportInputNone() {
    return this.getBooleanAttribute('transport_input_none');
  }

  // transport_output - computed: true, optional: false, required: false
  public get transportOutput() {
    return this.getListAttribute('transport_output');
  }

  // transport_output_all - computed: true, optional: false, required: false
  public get transportOutputAll() {
    return this.getBooleanAttribute('transport_output_all');
  }

  // transport_output_none - computed: true, optional: false, required: false
  public get transportOutputNone() {
    return this.getBooleanAttribute('transport_output_none');
  }

  // transport_preferred_protocol - computed: true, optional: false, required: false
  public get transportPreferredProtocol() {
    return this.getStringAttribute('transport_preferred_protocol');
  }
}

export class DataIosxeLineVtyList extends cdktf.ComplexList {

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
  public get(index: number): DataIosxeLineVtyOutputReference {
    return new DataIosxeLineVtyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.12.0/docs/data-sources/line iosxe_line}
*/
export class DataIosxeLine extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "iosxe_line";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataIosxeLine resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataIosxeLine to import
  * @param importFromId The id of the existing DataIosxeLine that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.12.0/docs/data-sources/line#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataIosxeLine to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "iosxe_line", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.12.0/docs/data-sources/line iosxe_line} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataIosxeLineConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataIosxeLineConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'iosxe_line',
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

  // aux - computed: true, optional: false, required: false
  private _aux = new DataIosxeLineAuxList(this, "aux", false);
  public get aux() {
    return this._aux;
  }

  // console - computed: true, optional: false, required: false
  private _console = new DataIosxeLineConsoleList(this, "console", false);
  public get console() {
    return this._console;
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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // vty - computed: true, optional: false, required: false
  private _vty = new DataIosxeLineVtyList(this, "vty", false);
  public get vty() {
    return this._vty;
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
