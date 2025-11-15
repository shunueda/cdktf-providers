// https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.2/docs/resources/line
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LineConfig extends cdktf.TerraformMetaArguments {
  /**
  * Auxiliary line
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.2/docs/resources/line#aux Line#aux}
  */
  readonly aux?: LineAux[] | cdktf.IResolvable;
  /**
  * Primary terminal line
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.2/docs/resources/line#console Line#console}
  */
  readonly console?: LineConsole[] | cdktf.IResolvable;
  /**
  * Configure behavior when deleting/destroying the resource. Either delete the entire object (YANG container) being managed, or only delete the individual resource attributes configured explicitly and leave everything else as-is. Default value is `all`.
  *   - Choices: `all`, `attributes`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.2/docs/resources/line#delete_mode Line#delete_mode}
  */
  readonly deleteMode?: string;
  /**
  * A device name from the provider configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.2/docs/resources/line#device Line#device}
  */
  readonly device?: string;
  /**
  * Virtual terminal
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.2/docs/resources/line#vty Line#vty}
  */
  readonly vty?: LineVty[] | cdktf.IResolvable;
}
export interface LineAux {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.2/docs/resources/line#escape_character Line#escape_character}
  */
  readonly escapeCharacter?: string;
  /**
  * <0-35791>;;Timeout in minutes
  *   - Range: `0`-`35791`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.2/docs/resources/line#exec_timeout_minutes Line#exec_timeout_minutes}
  */
  readonly execTimeoutMinutes?: number;
  /**
  * <0-2147483>;;Timeout in seconds
  *   - Range: `0`-`2147483`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.2/docs/resources/line#exec_timeout_seconds Line#exec_timeout_seconds}
  */
  readonly execTimeoutSeconds?: number;
  /**
  * Auxiliary line number
  *   - Choices: `0`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.2/docs/resources/line#first Line#first}
  */
  readonly first: string;
  /**
  * Synchronized message output
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.2/docs/resources/line#logging_synchronous Line#logging_synchronous}
  */
  readonly loggingSynchronous?: boolean | cdktf.IResolvable;
  /**
  * Copy debug output to the current terminal line
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.2/docs/resources/line#monitor Line#monitor}
  */
  readonly monitor?: boolean | cdktf.IResolvable;
  /**
  * Define no transport protocols for line
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.2/docs/resources/line#transport_output_none Line#transport_output_none}
  */
  readonly transportOutputNone?: boolean | cdktf.IResolvable;
}

export function lineAuxToTerraform(struct?: LineAux | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    escape_character: cdktf.stringToTerraform(struct!.escapeCharacter),
    exec_timeout_minutes: cdktf.numberToTerraform(struct!.execTimeoutMinutes),
    exec_timeout_seconds: cdktf.numberToTerraform(struct!.execTimeoutSeconds),
    first: cdktf.stringToTerraform(struct!.first),
    logging_synchronous: cdktf.booleanToTerraform(struct!.loggingSynchronous),
    monitor: cdktf.booleanToTerraform(struct!.monitor),
    transport_output_none: cdktf.booleanToTerraform(struct!.transportOutputNone),
  }
}


export function lineAuxToHclTerraform(struct?: LineAux | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    escape_character: {
      value: cdktf.stringToHclTerraform(struct!.escapeCharacter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    exec_timeout_minutes: {
      value: cdktf.numberToHclTerraform(struct!.execTimeoutMinutes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    exec_timeout_seconds: {
      value: cdktf.numberToHclTerraform(struct!.execTimeoutSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    first: {
      value: cdktf.stringToHclTerraform(struct!.first),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    logging_synchronous: {
      value: cdktf.booleanToHclTerraform(struct!.loggingSynchronous),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    monitor: {
      value: cdktf.booleanToHclTerraform(struct!.monitor),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    transport_output_none: {
      value: cdktf.booleanToHclTerraform(struct!.transportOutputNone),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LineAuxOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LineAux | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._escapeCharacter !== undefined) {
      hasAnyValues = true;
      internalValueResult.escapeCharacter = this._escapeCharacter;
    }
    if (this._execTimeoutMinutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.execTimeoutMinutes = this._execTimeoutMinutes;
    }
    if (this._execTimeoutSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.execTimeoutSeconds = this._execTimeoutSeconds;
    }
    if (this._first !== undefined) {
      hasAnyValues = true;
      internalValueResult.first = this._first;
    }
    if (this._loggingSynchronous !== undefined) {
      hasAnyValues = true;
      internalValueResult.loggingSynchronous = this._loggingSynchronous;
    }
    if (this._monitor !== undefined) {
      hasAnyValues = true;
      internalValueResult.monitor = this._monitor;
    }
    if (this._transportOutputNone !== undefined) {
      hasAnyValues = true;
      internalValueResult.transportOutputNone = this._transportOutputNone;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LineAux | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._escapeCharacter = undefined;
      this._execTimeoutMinutes = undefined;
      this._execTimeoutSeconds = undefined;
      this._first = undefined;
      this._loggingSynchronous = undefined;
      this._monitor = undefined;
      this._transportOutputNone = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._escapeCharacter = value.escapeCharacter;
      this._execTimeoutMinutes = value.execTimeoutMinutes;
      this._execTimeoutSeconds = value.execTimeoutSeconds;
      this._first = value.first;
      this._loggingSynchronous = value.loggingSynchronous;
      this._monitor = value.monitor;
      this._transportOutputNone = value.transportOutputNone;
    }
  }

  // escape_character - computed: false, optional: true, required: false
  private _escapeCharacter?: string; 
  public get escapeCharacter() {
    return this.getStringAttribute('escape_character');
  }
  public set escapeCharacter(value: string) {
    this._escapeCharacter = value;
  }
  public resetEscapeCharacter() {
    this._escapeCharacter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get escapeCharacterInput() {
    return this._escapeCharacter;
  }

  // exec_timeout_minutes - computed: false, optional: true, required: false
  private _execTimeoutMinutes?: number; 
  public get execTimeoutMinutes() {
    return this.getNumberAttribute('exec_timeout_minutes');
  }
  public set execTimeoutMinutes(value: number) {
    this._execTimeoutMinutes = value;
  }
  public resetExecTimeoutMinutes() {
    this._execTimeoutMinutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get execTimeoutMinutesInput() {
    return this._execTimeoutMinutes;
  }

  // exec_timeout_seconds - computed: false, optional: true, required: false
  private _execTimeoutSeconds?: number; 
  public get execTimeoutSeconds() {
    return this.getNumberAttribute('exec_timeout_seconds');
  }
  public set execTimeoutSeconds(value: number) {
    this._execTimeoutSeconds = value;
  }
  public resetExecTimeoutSeconds() {
    this._execTimeoutSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get execTimeoutSecondsInput() {
    return this._execTimeoutSeconds;
  }

  // first - computed: false, optional: false, required: true
  private _first?: string; 
  public get first() {
    return this.getStringAttribute('first');
  }
  public set first(value: string) {
    this._first = value;
  }
  // Temporarily expose input value. Use with caution.
  public get firstInput() {
    return this._first;
  }

  // logging_synchronous - computed: false, optional: true, required: false
  private _loggingSynchronous?: boolean | cdktf.IResolvable; 
  public get loggingSynchronous() {
    return this.getBooleanAttribute('logging_synchronous');
  }
  public set loggingSynchronous(value: boolean | cdktf.IResolvable) {
    this._loggingSynchronous = value;
  }
  public resetLoggingSynchronous() {
    this._loggingSynchronous = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loggingSynchronousInput() {
    return this._loggingSynchronous;
  }

  // monitor - computed: false, optional: true, required: false
  private _monitor?: boolean | cdktf.IResolvable; 
  public get monitor() {
    return this.getBooleanAttribute('monitor');
  }
  public set monitor(value: boolean | cdktf.IResolvable) {
    this._monitor = value;
  }
  public resetMonitor() {
    this._monitor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitorInput() {
    return this._monitor;
  }

  // transport_output_none - computed: false, optional: true, required: false
  private _transportOutputNone?: boolean | cdktf.IResolvable; 
  public get transportOutputNone() {
    return this.getBooleanAttribute('transport_output_none');
  }
  public set transportOutputNone(value: boolean | cdktf.IResolvable) {
    this._transportOutputNone = value;
  }
  public resetTransportOutputNone() {
    this._transportOutputNone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transportOutputNoneInput() {
    return this._transportOutputNone;
  }
}

export class LineAuxList extends cdktf.ComplexList {
  public internalValue? : LineAux[] | cdktf.IResolvable

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
  public get(index: number): LineAuxOutputReference {
    return new LineAuxOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LineConsole {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.2/docs/resources/line#escape_character Line#escape_character}
  */
  readonly escapeCharacter?: string;
  /**
  * <0-35791>;;Timeout in minutes
  *   - Range: `0`-`35791`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.2/docs/resources/line#exec_timeout_minutes Line#exec_timeout_minutes}
  */
  readonly execTimeoutMinutes?: number;
  /**
  * <0-2147483>;;Timeout in seconds
  *   - Range: `0`-`2147483`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.2/docs/resources/line#exec_timeout_seconds Line#exec_timeout_seconds}
  */
  readonly execTimeoutSeconds?: number;
  /**
  * Console line number
  *   - Choices: `0`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.2/docs/resources/line#first Line#first}
  */
  readonly first: string;
  /**
  * Synchronized message output
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.2/docs/resources/line#logging_synchronous Line#logging_synchronous}
  */
  readonly loggingSynchronous?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.2/docs/resources/line#login_authentication Line#login_authentication}
  */
  readonly loginAuthentication?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.2/docs/resources/line#login_local Line#login_local}
  */
  readonly loginLocal?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.2/docs/resources/line#password Line#password}
  */
  readonly password?: string;
  /**
  * Set exec level password
  *   - Range: `0`-`255`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.2/docs/resources/line#password_level Line#password_level}
  */
  readonly passwordLevel?: number;
  /**
  * 
  *   - Choices: `0`, `6`, `7`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.2/docs/resources/line#password_type Line#password_type}
  */
  readonly passwordType?: string;
  /**
  * 
  *   - Range: `0`-`15`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.2/docs/resources/line#privilege_level Line#privilege_level}
  */
  readonly privilegeLevel?: number;
  /**
  * Set async line stop bits
  *   - Choices: `1`, `1.5`, `2`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.2/docs/resources/line#stopbits Line#stopbits}
  */
  readonly stopbits?: string;
  /**
  * Define which protocols to use for outgoing connections
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.2/docs/resources/line#transport_output Line#transport_output}
  */
  readonly transportOutput?: string[];
  /**
  * All protocols
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.2/docs/resources/line#transport_output_all Line#transport_output_all}
  */
  readonly transportOutputAll?: boolean | cdktf.IResolvable;
  /**
  * Define no transport protocols for line
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.2/docs/resources/line#transport_output_none Line#transport_output_none}
  */
  readonly transportOutputNone?: boolean | cdktf.IResolvable;
}

export function lineConsoleToTerraform(struct?: LineConsole | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    escape_character: cdktf.stringToTerraform(struct!.escapeCharacter),
    exec_timeout_minutes: cdktf.numberToTerraform(struct!.execTimeoutMinutes),
    exec_timeout_seconds: cdktf.numberToTerraform(struct!.execTimeoutSeconds),
    first: cdktf.stringToTerraform(struct!.first),
    logging_synchronous: cdktf.booleanToTerraform(struct!.loggingSynchronous),
    login_authentication: cdktf.stringToTerraform(struct!.loginAuthentication),
    login_local: cdktf.booleanToTerraform(struct!.loginLocal),
    password: cdktf.stringToTerraform(struct!.password),
    password_level: cdktf.numberToTerraform(struct!.passwordLevel),
    password_type: cdktf.stringToTerraform(struct!.passwordType),
    privilege_level: cdktf.numberToTerraform(struct!.privilegeLevel),
    stopbits: cdktf.stringToTerraform(struct!.stopbits),
    transport_output: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.transportOutput),
    transport_output_all: cdktf.booleanToTerraform(struct!.transportOutputAll),
    transport_output_none: cdktf.booleanToTerraform(struct!.transportOutputNone),
  }
}


export function lineConsoleToHclTerraform(struct?: LineConsole | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    escape_character: {
      value: cdktf.stringToHclTerraform(struct!.escapeCharacter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    exec_timeout_minutes: {
      value: cdktf.numberToHclTerraform(struct!.execTimeoutMinutes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    exec_timeout_seconds: {
      value: cdktf.numberToHclTerraform(struct!.execTimeoutSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    first: {
      value: cdktf.stringToHclTerraform(struct!.first),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    logging_synchronous: {
      value: cdktf.booleanToHclTerraform(struct!.loggingSynchronous),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    login_authentication: {
      value: cdktf.stringToHclTerraform(struct!.loginAuthentication),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    login_local: {
      value: cdktf.booleanToHclTerraform(struct!.loginLocal),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    password_level: {
      value: cdktf.numberToHclTerraform(struct!.passwordLevel),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    password_type: {
      value: cdktf.stringToHclTerraform(struct!.passwordType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    privilege_level: {
      value: cdktf.numberToHclTerraform(struct!.privilegeLevel),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    stopbits: {
      value: cdktf.stringToHclTerraform(struct!.stopbits),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    transport_output: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.transportOutput),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    transport_output_all: {
      value: cdktf.booleanToHclTerraform(struct!.transportOutputAll),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    transport_output_none: {
      value: cdktf.booleanToHclTerraform(struct!.transportOutputNone),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LineConsoleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LineConsole | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._escapeCharacter !== undefined) {
      hasAnyValues = true;
      internalValueResult.escapeCharacter = this._escapeCharacter;
    }
    if (this._execTimeoutMinutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.execTimeoutMinutes = this._execTimeoutMinutes;
    }
    if (this._execTimeoutSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.execTimeoutSeconds = this._execTimeoutSeconds;
    }
    if (this._first !== undefined) {
      hasAnyValues = true;
      internalValueResult.first = this._first;
    }
    if (this._loggingSynchronous !== undefined) {
      hasAnyValues = true;
      internalValueResult.loggingSynchronous = this._loggingSynchronous;
    }
    if (this._loginAuthentication !== undefined) {
      hasAnyValues = true;
      internalValueResult.loginAuthentication = this._loginAuthentication;
    }
    if (this._loginLocal !== undefined) {
      hasAnyValues = true;
      internalValueResult.loginLocal = this._loginLocal;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._passwordLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.passwordLevel = this._passwordLevel;
    }
    if (this._passwordType !== undefined) {
      hasAnyValues = true;
      internalValueResult.passwordType = this._passwordType;
    }
    if (this._privilegeLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.privilegeLevel = this._privilegeLevel;
    }
    if (this._stopbits !== undefined) {
      hasAnyValues = true;
      internalValueResult.stopbits = this._stopbits;
    }
    if (this._transportOutput !== undefined) {
      hasAnyValues = true;
      internalValueResult.transportOutput = this._transportOutput;
    }
    if (this._transportOutputAll !== undefined) {
      hasAnyValues = true;
      internalValueResult.transportOutputAll = this._transportOutputAll;
    }
    if (this._transportOutputNone !== undefined) {
      hasAnyValues = true;
      internalValueResult.transportOutputNone = this._transportOutputNone;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LineConsole | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._escapeCharacter = undefined;
      this._execTimeoutMinutes = undefined;
      this._execTimeoutSeconds = undefined;
      this._first = undefined;
      this._loggingSynchronous = undefined;
      this._loginAuthentication = undefined;
      this._loginLocal = undefined;
      this._password = undefined;
      this._passwordLevel = undefined;
      this._passwordType = undefined;
      this._privilegeLevel = undefined;
      this._stopbits = undefined;
      this._transportOutput = undefined;
      this._transportOutputAll = undefined;
      this._transportOutputNone = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._escapeCharacter = value.escapeCharacter;
      this._execTimeoutMinutes = value.execTimeoutMinutes;
      this._execTimeoutSeconds = value.execTimeoutSeconds;
      this._first = value.first;
      this._loggingSynchronous = value.loggingSynchronous;
      this._loginAuthentication = value.loginAuthentication;
      this._loginLocal = value.loginLocal;
      this._password = value.password;
      this._passwordLevel = value.passwordLevel;
      this._passwordType = value.passwordType;
      this._privilegeLevel = value.privilegeLevel;
      this._stopbits = value.stopbits;
      this._transportOutput = value.transportOutput;
      this._transportOutputAll = value.transportOutputAll;
      this._transportOutputNone = value.transportOutputNone;
    }
  }

  // escape_character - computed: false, optional: true, required: false
  private _escapeCharacter?: string; 
  public get escapeCharacter() {
    return this.getStringAttribute('escape_character');
  }
  public set escapeCharacter(value: string) {
    this._escapeCharacter = value;
  }
  public resetEscapeCharacter() {
    this._escapeCharacter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get escapeCharacterInput() {
    return this._escapeCharacter;
  }

  // exec_timeout_minutes - computed: false, optional: true, required: false
  private _execTimeoutMinutes?: number; 
  public get execTimeoutMinutes() {
    return this.getNumberAttribute('exec_timeout_minutes');
  }
  public set execTimeoutMinutes(value: number) {
    this._execTimeoutMinutes = value;
  }
  public resetExecTimeoutMinutes() {
    this._execTimeoutMinutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get execTimeoutMinutesInput() {
    return this._execTimeoutMinutes;
  }

  // exec_timeout_seconds - computed: false, optional: true, required: false
  private _execTimeoutSeconds?: number; 
  public get execTimeoutSeconds() {
    return this.getNumberAttribute('exec_timeout_seconds');
  }
  public set execTimeoutSeconds(value: number) {
    this._execTimeoutSeconds = value;
  }
  public resetExecTimeoutSeconds() {
    this._execTimeoutSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get execTimeoutSecondsInput() {
    return this._execTimeoutSeconds;
  }

  // first - computed: false, optional: false, required: true
  private _first?: string; 
  public get first() {
    return this.getStringAttribute('first');
  }
  public set first(value: string) {
    this._first = value;
  }
  // Temporarily expose input value. Use with caution.
  public get firstInput() {
    return this._first;
  }

  // logging_synchronous - computed: false, optional: true, required: false
  private _loggingSynchronous?: boolean | cdktf.IResolvable; 
  public get loggingSynchronous() {
    return this.getBooleanAttribute('logging_synchronous');
  }
  public set loggingSynchronous(value: boolean | cdktf.IResolvable) {
    this._loggingSynchronous = value;
  }
  public resetLoggingSynchronous() {
    this._loggingSynchronous = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loggingSynchronousInput() {
    return this._loggingSynchronous;
  }

  // login_authentication - computed: false, optional: true, required: false
  private _loginAuthentication?: string; 
  public get loginAuthentication() {
    return this.getStringAttribute('login_authentication');
  }
  public set loginAuthentication(value: string) {
    this._loginAuthentication = value;
  }
  public resetLoginAuthentication() {
    this._loginAuthentication = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loginAuthenticationInput() {
    return this._loginAuthentication;
  }

  // login_local - computed: false, optional: true, required: false
  private _loginLocal?: boolean | cdktf.IResolvable; 
  public get loginLocal() {
    return this.getBooleanAttribute('login_local');
  }
  public set loginLocal(value: boolean | cdktf.IResolvable) {
    this._loginLocal = value;
  }
  public resetLoginLocal() {
    this._loginLocal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loginLocalInput() {
    return this._loginLocal;
  }

  // password - computed: false, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // password_level - computed: false, optional: true, required: false
  private _passwordLevel?: number; 
  public get passwordLevel() {
    return this.getNumberAttribute('password_level');
  }
  public set passwordLevel(value: number) {
    this._passwordLevel = value;
  }
  public resetPasswordLevel() {
    this._passwordLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordLevelInput() {
    return this._passwordLevel;
  }

  // password_type - computed: false, optional: true, required: false
  private _passwordType?: string; 
  public get passwordType() {
    return this.getStringAttribute('password_type');
  }
  public set passwordType(value: string) {
    this._passwordType = value;
  }
  public resetPasswordType() {
    this._passwordType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordTypeInput() {
    return this._passwordType;
  }

  // privilege_level - computed: false, optional: true, required: false
  private _privilegeLevel?: number; 
  public get privilegeLevel() {
    return this.getNumberAttribute('privilege_level');
  }
  public set privilegeLevel(value: number) {
    this._privilegeLevel = value;
  }
  public resetPrivilegeLevel() {
    this._privilegeLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privilegeLevelInput() {
    return this._privilegeLevel;
  }

  // stopbits - computed: false, optional: true, required: false
  private _stopbits?: string; 
  public get stopbits() {
    return this.getStringAttribute('stopbits');
  }
  public set stopbits(value: string) {
    this._stopbits = value;
  }
  public resetStopbits() {
    this._stopbits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stopbitsInput() {
    return this._stopbits;
  }

  // transport_output - computed: false, optional: true, required: false
  private _transportOutput?: string[]; 
  public get transportOutput() {
    return this.getListAttribute('transport_output');
  }
  public set transportOutput(value: string[]) {
    this._transportOutput = value;
  }
  public resetTransportOutput() {
    this._transportOutput = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transportOutputInput() {
    return this._transportOutput;
  }

  // transport_output_all - computed: false, optional: true, required: false
  private _transportOutputAll?: boolean | cdktf.IResolvable; 
  public get transportOutputAll() {
    return this.getBooleanAttribute('transport_output_all');
  }
  public set transportOutputAll(value: boolean | cdktf.IResolvable) {
    this._transportOutputAll = value;
  }
  public resetTransportOutputAll() {
    this._transportOutputAll = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transportOutputAllInput() {
    return this._transportOutputAll;
  }

  // transport_output_none - computed: false, optional: true, required: false
  private _transportOutputNone?: boolean | cdktf.IResolvable; 
  public get transportOutputNone() {
    return this.getBooleanAttribute('transport_output_none');
  }
  public set transportOutputNone(value: boolean | cdktf.IResolvable) {
    this._transportOutputNone = value;
  }
  public resetTransportOutputNone() {
    this._transportOutputNone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transportOutputNoneInput() {
    return this._transportOutputNone;
  }
}

export class LineConsoleList extends cdktf.ComplexList {
  public internalValue? : LineConsole[] | cdktf.IResolvable

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
  public get(index: number): LineConsoleOutputReference {
    return new LineConsoleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LineVtyAccessClasses {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.2/docs/resources/line#access_list Line#access_list}
  */
  readonly accessList: string;
  /**
  * Filter connections based on the incoming/outgoing direction
  *   - Choices: `in`, `out`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.2/docs/resources/line#direction Line#direction}
  */
  readonly direction: string;
  /**
  * Same access list is applied for all VRFs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.2/docs/resources/line#vrf_also Line#vrf_also}
  */
  readonly vrfAlso?: boolean | cdktf.IResolvable;
}

export function lineVtyAccessClassesToTerraform(struct?: LineVtyAccessClasses | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_list: cdktf.stringToTerraform(struct!.accessList),
    direction: cdktf.stringToTerraform(struct!.direction),
    vrf_also: cdktf.booleanToTerraform(struct!.vrfAlso),
  }
}


export function lineVtyAccessClassesToHclTerraform(struct?: LineVtyAccessClasses | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access_list: {
      value: cdktf.stringToHclTerraform(struct!.accessList),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    direction: {
      value: cdktf.stringToHclTerraform(struct!.direction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vrf_also: {
      value: cdktf.booleanToHclTerraform(struct!.vrfAlso),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LineVtyAccessClassesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LineVtyAccessClasses | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessList !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessList = this._accessList;
    }
    if (this._direction !== undefined) {
      hasAnyValues = true;
      internalValueResult.direction = this._direction;
    }
    if (this._vrfAlso !== undefined) {
      hasAnyValues = true;
      internalValueResult.vrfAlso = this._vrfAlso;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LineVtyAccessClasses | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accessList = undefined;
      this._direction = undefined;
      this._vrfAlso = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accessList = value.accessList;
      this._direction = value.direction;
      this._vrfAlso = value.vrfAlso;
    }
  }

  // access_list - computed: false, optional: false, required: true
  private _accessList?: string; 
  public get accessList() {
    return this.getStringAttribute('access_list');
  }
  public set accessList(value: string) {
    this._accessList = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accessListInput() {
    return this._accessList;
  }

  // direction - computed: false, optional: false, required: true
  private _direction?: string; 
  public get direction() {
    return this.getStringAttribute('direction');
  }
  public set direction(value: string) {
    this._direction = value;
  }
  // Temporarily expose input value. Use with caution.
  public get directionInput() {
    return this._direction;
  }

  // vrf_also - computed: false, optional: true, required: false
  private _vrfAlso?: boolean | cdktf.IResolvable; 
  public get vrfAlso() {
    return this.getBooleanAttribute('vrf_also');
  }
  public set vrfAlso(value: boolean | cdktf.IResolvable) {
    this._vrfAlso = value;
  }
  public resetVrfAlso() {
    this._vrfAlso = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vrfAlsoInput() {
    return this._vrfAlso;
  }
}

export class LineVtyAccessClassesList extends cdktf.ComplexList {
  public internalValue? : LineVtyAccessClasses[] | cdktf.IResolvable

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
  public get(index: number): LineVtyAccessClassesOutputReference {
    return new LineVtyAccessClassesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LineVty {
  /**
  * Choose direction of the access list
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.2/docs/resources/line#access_classes Line#access_classes}
  */
  readonly accessClasses?: LineVtyAccessClasses[] | cdktf.IResolvable;
  /**
  * Use an authorization list with this name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.2/docs/resources/line#authorization_exec Line#authorization_exec}
  */
  readonly authorizationExec?: string;
  /**
  * Use the default authorization list
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.2/docs/resources/line#authorization_exec_default Line#authorization_exec_default}
  */
  readonly authorizationExecDefault?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.2/docs/resources/line#escape_character Line#escape_character}
  */
  readonly escapeCharacter?: string;
  /**
  * <0-35791>;;Timeout in minutes
  *   - Range: `0`-`35791`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.2/docs/resources/line#exec_timeout_minutes Line#exec_timeout_minutes}
  */
  readonly execTimeoutMinutes?: number;
  /**
  * <0-2147483>;;Timeout in seconds
  *   - Range: `0`-`2147483`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.2/docs/resources/line#exec_timeout_seconds Line#exec_timeout_seconds}
  */
  readonly execTimeoutSeconds?: number;
  /**
  * Vty first line number
  *   - Range: `0`-`1869`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.2/docs/resources/line#first Line#first}
  */
  readonly first: number;
  /**
  * Vty last line number
  *   - Range: `1`-`1869`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.2/docs/resources/line#last Line#last}
  */
  readonly last?: number;
  /**
  * Synchronized message output
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.2/docs/resources/line#logging_synchronous Line#logging_synchronous}
  */
  readonly loggingSynchronous?: boolean | cdktf.IResolvable;
  /**
  * Authentication list
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.2/docs/resources/line#login_authentication Line#login_authentication}
  */
  readonly loginAuthentication?: string;
  /**
  * Copy debug output to the current terminal line
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.2/docs/resources/line#monitor Line#monitor}
  */
  readonly monitor?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.2/docs/resources/line#password Line#password}
  */
  readonly password?: string;
  /**
  * Set exec level password
  *   - Range: `0`-`255`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.2/docs/resources/line#password_level Line#password_level}
  */
  readonly passwordLevel?: number;
  /**
  * 
  *   - Choices: `0`, `6`, `7`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.2/docs/resources/line#password_type Line#password_type}
  */
  readonly passwordType?: string;
  /**
  * 
  *   - Range: `0`-`35791`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.2/docs/resources/line#session_timeout Line#session_timeout}
  */
  readonly sessionTimeout?: number;
  /**
  * Set async line stop bits
  *   - Choices: `1`, `1.5`, `2`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.2/docs/resources/line#stopbits Line#stopbits}
  */
  readonly stopbits?: string;
  /**
  * Define which protocols to use when connecting to the terminal server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.2/docs/resources/line#transport_input Line#transport_input}
  */
  readonly transportInput?: string[];
  /**
  * All protocols
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.2/docs/resources/line#transport_input_all Line#transport_input_all}
  */
  readonly transportInputAll?: boolean | cdktf.IResolvable;
  /**
  * Define no transport protocols for line
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.2/docs/resources/line#transport_input_none Line#transport_input_none}
  */
  readonly transportInputNone?: boolean | cdktf.IResolvable;
  /**
  * Define which protocols to use for outgoing connections
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.2/docs/resources/line#transport_output Line#transport_output}
  */
  readonly transportOutput?: string[];
  /**
  * All protocols
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.2/docs/resources/line#transport_output_all Line#transport_output_all}
  */
  readonly transportOutputAll?: boolean | cdktf.IResolvable;
  /**
  * Define no transport protocols for line
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.2/docs/resources/line#transport_output_none Line#transport_output_none}
  */
  readonly transportOutputNone?: boolean | cdktf.IResolvable;
  /**
  * 
  *   - Choices: `acercon`, `lat`, `mop`, `nasi`, `none`, `pad`, `rlogin`, `ssh`, `telnet`, `udptn`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.2/docs/resources/line#transport_preferred_protocol Line#transport_preferred_protocol}
  */
  readonly transportPreferredProtocol?: string;
}

export function lineVtyToTerraform(struct?: LineVty | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_classes: cdktf.listMapper(lineVtyAccessClassesToTerraform, false)(struct!.accessClasses),
    authorization_exec: cdktf.stringToTerraform(struct!.authorizationExec),
    authorization_exec_default: cdktf.booleanToTerraform(struct!.authorizationExecDefault),
    escape_character: cdktf.stringToTerraform(struct!.escapeCharacter),
    exec_timeout_minutes: cdktf.numberToTerraform(struct!.execTimeoutMinutes),
    exec_timeout_seconds: cdktf.numberToTerraform(struct!.execTimeoutSeconds),
    first: cdktf.numberToTerraform(struct!.first),
    last: cdktf.numberToTerraform(struct!.last),
    logging_synchronous: cdktf.booleanToTerraform(struct!.loggingSynchronous),
    login_authentication: cdktf.stringToTerraform(struct!.loginAuthentication),
    monitor: cdktf.booleanToTerraform(struct!.monitor),
    password: cdktf.stringToTerraform(struct!.password),
    password_level: cdktf.numberToTerraform(struct!.passwordLevel),
    password_type: cdktf.stringToTerraform(struct!.passwordType),
    session_timeout: cdktf.numberToTerraform(struct!.sessionTimeout),
    stopbits: cdktf.stringToTerraform(struct!.stopbits),
    transport_input: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.transportInput),
    transport_input_all: cdktf.booleanToTerraform(struct!.transportInputAll),
    transport_input_none: cdktf.booleanToTerraform(struct!.transportInputNone),
    transport_output: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.transportOutput),
    transport_output_all: cdktf.booleanToTerraform(struct!.transportOutputAll),
    transport_output_none: cdktf.booleanToTerraform(struct!.transportOutputNone),
    transport_preferred_protocol: cdktf.stringToTerraform(struct!.transportPreferredProtocol),
  }
}


export function lineVtyToHclTerraform(struct?: LineVty | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access_classes: {
      value: cdktf.listMapperHcl(lineVtyAccessClassesToHclTerraform, false)(struct!.accessClasses),
      isBlock: true,
      type: "list",
      storageClassType: "LineVtyAccessClassesList",
    },
    authorization_exec: {
      value: cdktf.stringToHclTerraform(struct!.authorizationExec),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    authorization_exec_default: {
      value: cdktf.booleanToHclTerraform(struct!.authorizationExecDefault),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    escape_character: {
      value: cdktf.stringToHclTerraform(struct!.escapeCharacter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    exec_timeout_minutes: {
      value: cdktf.numberToHclTerraform(struct!.execTimeoutMinutes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    exec_timeout_seconds: {
      value: cdktf.numberToHclTerraform(struct!.execTimeoutSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    first: {
      value: cdktf.numberToHclTerraform(struct!.first),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    last: {
      value: cdktf.numberToHclTerraform(struct!.last),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    logging_synchronous: {
      value: cdktf.booleanToHclTerraform(struct!.loggingSynchronous),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    login_authentication: {
      value: cdktf.stringToHclTerraform(struct!.loginAuthentication),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    monitor: {
      value: cdktf.booleanToHclTerraform(struct!.monitor),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    password_level: {
      value: cdktf.numberToHclTerraform(struct!.passwordLevel),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    password_type: {
      value: cdktf.stringToHclTerraform(struct!.passwordType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    session_timeout: {
      value: cdktf.numberToHclTerraform(struct!.sessionTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    stopbits: {
      value: cdktf.stringToHclTerraform(struct!.stopbits),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    transport_input: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.transportInput),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    transport_input_all: {
      value: cdktf.booleanToHclTerraform(struct!.transportInputAll),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    transport_input_none: {
      value: cdktf.booleanToHclTerraform(struct!.transportInputNone),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    transport_output: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.transportOutput),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    transport_output_all: {
      value: cdktf.booleanToHclTerraform(struct!.transportOutputAll),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    transport_output_none: {
      value: cdktf.booleanToHclTerraform(struct!.transportOutputNone),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    transport_preferred_protocol: {
      value: cdktf.stringToHclTerraform(struct!.transportPreferredProtocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LineVtyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LineVty | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessClasses?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessClasses = this._accessClasses?.internalValue;
    }
    if (this._authorizationExec !== undefined) {
      hasAnyValues = true;
      internalValueResult.authorizationExec = this._authorizationExec;
    }
    if (this._authorizationExecDefault !== undefined) {
      hasAnyValues = true;
      internalValueResult.authorizationExecDefault = this._authorizationExecDefault;
    }
    if (this._escapeCharacter !== undefined) {
      hasAnyValues = true;
      internalValueResult.escapeCharacter = this._escapeCharacter;
    }
    if (this._execTimeoutMinutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.execTimeoutMinutes = this._execTimeoutMinutes;
    }
    if (this._execTimeoutSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.execTimeoutSeconds = this._execTimeoutSeconds;
    }
    if (this._first !== undefined) {
      hasAnyValues = true;
      internalValueResult.first = this._first;
    }
    if (this._last !== undefined) {
      hasAnyValues = true;
      internalValueResult.last = this._last;
    }
    if (this._loggingSynchronous !== undefined) {
      hasAnyValues = true;
      internalValueResult.loggingSynchronous = this._loggingSynchronous;
    }
    if (this._loginAuthentication !== undefined) {
      hasAnyValues = true;
      internalValueResult.loginAuthentication = this._loginAuthentication;
    }
    if (this._monitor !== undefined) {
      hasAnyValues = true;
      internalValueResult.monitor = this._monitor;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._passwordLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.passwordLevel = this._passwordLevel;
    }
    if (this._passwordType !== undefined) {
      hasAnyValues = true;
      internalValueResult.passwordType = this._passwordType;
    }
    if (this._sessionTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.sessionTimeout = this._sessionTimeout;
    }
    if (this._stopbits !== undefined) {
      hasAnyValues = true;
      internalValueResult.stopbits = this._stopbits;
    }
    if (this._transportInput !== undefined) {
      hasAnyValues = true;
      internalValueResult.transportInput = this._transportInput;
    }
    if (this._transportInputAll !== undefined) {
      hasAnyValues = true;
      internalValueResult.transportInputAll = this._transportInputAll;
    }
    if (this._transportInputNone !== undefined) {
      hasAnyValues = true;
      internalValueResult.transportInputNone = this._transportInputNone;
    }
    if (this._transportOutput !== undefined) {
      hasAnyValues = true;
      internalValueResult.transportOutput = this._transportOutput;
    }
    if (this._transportOutputAll !== undefined) {
      hasAnyValues = true;
      internalValueResult.transportOutputAll = this._transportOutputAll;
    }
    if (this._transportOutputNone !== undefined) {
      hasAnyValues = true;
      internalValueResult.transportOutputNone = this._transportOutputNone;
    }
    if (this._transportPreferredProtocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.transportPreferredProtocol = this._transportPreferredProtocol;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LineVty | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accessClasses.internalValue = undefined;
      this._authorizationExec = undefined;
      this._authorizationExecDefault = undefined;
      this._escapeCharacter = undefined;
      this._execTimeoutMinutes = undefined;
      this._execTimeoutSeconds = undefined;
      this._first = undefined;
      this._last = undefined;
      this._loggingSynchronous = undefined;
      this._loginAuthentication = undefined;
      this._monitor = undefined;
      this._password = undefined;
      this._passwordLevel = undefined;
      this._passwordType = undefined;
      this._sessionTimeout = undefined;
      this._stopbits = undefined;
      this._transportInput = undefined;
      this._transportInputAll = undefined;
      this._transportInputNone = undefined;
      this._transportOutput = undefined;
      this._transportOutputAll = undefined;
      this._transportOutputNone = undefined;
      this._transportPreferredProtocol = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accessClasses.internalValue = value.accessClasses;
      this._authorizationExec = value.authorizationExec;
      this._authorizationExecDefault = value.authorizationExecDefault;
      this._escapeCharacter = value.escapeCharacter;
      this._execTimeoutMinutes = value.execTimeoutMinutes;
      this._execTimeoutSeconds = value.execTimeoutSeconds;
      this._first = value.first;
      this._last = value.last;
      this._loggingSynchronous = value.loggingSynchronous;
      this._loginAuthentication = value.loginAuthentication;
      this._monitor = value.monitor;
      this._password = value.password;
      this._passwordLevel = value.passwordLevel;
      this._passwordType = value.passwordType;
      this._sessionTimeout = value.sessionTimeout;
      this._stopbits = value.stopbits;
      this._transportInput = value.transportInput;
      this._transportInputAll = value.transportInputAll;
      this._transportInputNone = value.transportInputNone;
      this._transportOutput = value.transportOutput;
      this._transportOutputAll = value.transportOutputAll;
      this._transportOutputNone = value.transportOutputNone;
      this._transportPreferredProtocol = value.transportPreferredProtocol;
    }
  }

  // access_classes - computed: false, optional: true, required: false
  private _accessClasses = new LineVtyAccessClassesList(this, "access_classes", false);
  public get accessClasses() {
    return this._accessClasses;
  }
  public putAccessClasses(value: LineVtyAccessClasses[] | cdktf.IResolvable) {
    this._accessClasses.internalValue = value;
  }
  public resetAccessClasses() {
    this._accessClasses.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessClassesInput() {
    return this._accessClasses.internalValue;
  }

  // authorization_exec - computed: false, optional: true, required: false
  private _authorizationExec?: string; 
  public get authorizationExec() {
    return this.getStringAttribute('authorization_exec');
  }
  public set authorizationExec(value: string) {
    this._authorizationExec = value;
  }
  public resetAuthorizationExec() {
    this._authorizationExec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizationExecInput() {
    return this._authorizationExec;
  }

  // authorization_exec_default - computed: false, optional: true, required: false
  private _authorizationExecDefault?: boolean | cdktf.IResolvable; 
  public get authorizationExecDefault() {
    return this.getBooleanAttribute('authorization_exec_default');
  }
  public set authorizationExecDefault(value: boolean | cdktf.IResolvable) {
    this._authorizationExecDefault = value;
  }
  public resetAuthorizationExecDefault() {
    this._authorizationExecDefault = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizationExecDefaultInput() {
    return this._authorizationExecDefault;
  }

  // escape_character - computed: false, optional: true, required: false
  private _escapeCharacter?: string; 
  public get escapeCharacter() {
    return this.getStringAttribute('escape_character');
  }
  public set escapeCharacter(value: string) {
    this._escapeCharacter = value;
  }
  public resetEscapeCharacter() {
    this._escapeCharacter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get escapeCharacterInput() {
    return this._escapeCharacter;
  }

  // exec_timeout_minutes - computed: false, optional: true, required: false
  private _execTimeoutMinutes?: number; 
  public get execTimeoutMinutes() {
    return this.getNumberAttribute('exec_timeout_minutes');
  }
  public set execTimeoutMinutes(value: number) {
    this._execTimeoutMinutes = value;
  }
  public resetExecTimeoutMinutes() {
    this._execTimeoutMinutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get execTimeoutMinutesInput() {
    return this._execTimeoutMinutes;
  }

  // exec_timeout_seconds - computed: false, optional: true, required: false
  private _execTimeoutSeconds?: number; 
  public get execTimeoutSeconds() {
    return this.getNumberAttribute('exec_timeout_seconds');
  }
  public set execTimeoutSeconds(value: number) {
    this._execTimeoutSeconds = value;
  }
  public resetExecTimeoutSeconds() {
    this._execTimeoutSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get execTimeoutSecondsInput() {
    return this._execTimeoutSeconds;
  }

  // first - computed: false, optional: false, required: true
  private _first?: number; 
  public get first() {
    return this.getNumberAttribute('first');
  }
  public set first(value: number) {
    this._first = value;
  }
  // Temporarily expose input value. Use with caution.
  public get firstInput() {
    return this._first;
  }

  // last - computed: false, optional: true, required: false
  private _last?: number; 
  public get last() {
    return this.getNumberAttribute('last');
  }
  public set last(value: number) {
    this._last = value;
  }
  public resetLast() {
    this._last = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lastInput() {
    return this._last;
  }

  // logging_synchronous - computed: false, optional: true, required: false
  private _loggingSynchronous?: boolean | cdktf.IResolvable; 
  public get loggingSynchronous() {
    return this.getBooleanAttribute('logging_synchronous');
  }
  public set loggingSynchronous(value: boolean | cdktf.IResolvable) {
    this._loggingSynchronous = value;
  }
  public resetLoggingSynchronous() {
    this._loggingSynchronous = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loggingSynchronousInput() {
    return this._loggingSynchronous;
  }

  // login_authentication - computed: false, optional: true, required: false
  private _loginAuthentication?: string; 
  public get loginAuthentication() {
    return this.getStringAttribute('login_authentication');
  }
  public set loginAuthentication(value: string) {
    this._loginAuthentication = value;
  }
  public resetLoginAuthentication() {
    this._loginAuthentication = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loginAuthenticationInput() {
    return this._loginAuthentication;
  }

  // monitor - computed: false, optional: true, required: false
  private _monitor?: boolean | cdktf.IResolvable; 
  public get monitor() {
    return this.getBooleanAttribute('monitor');
  }
  public set monitor(value: boolean | cdktf.IResolvable) {
    this._monitor = value;
  }
  public resetMonitor() {
    this._monitor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitorInput() {
    return this._monitor;
  }

  // password - computed: false, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // password_level - computed: false, optional: true, required: false
  private _passwordLevel?: number; 
  public get passwordLevel() {
    return this.getNumberAttribute('password_level');
  }
  public set passwordLevel(value: number) {
    this._passwordLevel = value;
  }
  public resetPasswordLevel() {
    this._passwordLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordLevelInput() {
    return this._passwordLevel;
  }

  // password_type - computed: false, optional: true, required: false
  private _passwordType?: string; 
  public get passwordType() {
    return this.getStringAttribute('password_type');
  }
  public set passwordType(value: string) {
    this._passwordType = value;
  }
  public resetPasswordType() {
    this._passwordType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordTypeInput() {
    return this._passwordType;
  }

  // session_timeout - computed: false, optional: true, required: false
  private _sessionTimeout?: number; 
  public get sessionTimeout() {
    return this.getNumberAttribute('session_timeout');
  }
  public set sessionTimeout(value: number) {
    this._sessionTimeout = value;
  }
  public resetSessionTimeout() {
    this._sessionTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionTimeoutInput() {
    return this._sessionTimeout;
  }

  // stopbits - computed: false, optional: true, required: false
  private _stopbits?: string; 
  public get stopbits() {
    return this.getStringAttribute('stopbits');
  }
  public set stopbits(value: string) {
    this._stopbits = value;
  }
  public resetStopbits() {
    this._stopbits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stopbitsInput() {
    return this._stopbits;
  }

  // transport_input - computed: false, optional: true, required: false
  private _transportInput?: string[]; 
  public get transportInput() {
    return this.getListAttribute('transport_input');
  }
  public set transportInput(value: string[]) {
    this._transportInput = value;
  }
  public resetTransportInput() {
    this._transportInput = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transportInputInput() {
    return this._transportInput;
  }

  // transport_input_all - computed: false, optional: true, required: false
  private _transportInputAll?: boolean | cdktf.IResolvable; 
  public get transportInputAll() {
    return this.getBooleanAttribute('transport_input_all');
  }
  public set transportInputAll(value: boolean | cdktf.IResolvable) {
    this._transportInputAll = value;
  }
  public resetTransportInputAll() {
    this._transportInputAll = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transportInputAllInput() {
    return this._transportInputAll;
  }

  // transport_input_none - computed: false, optional: true, required: false
  private _transportInputNone?: boolean | cdktf.IResolvable; 
  public get transportInputNone() {
    return this.getBooleanAttribute('transport_input_none');
  }
  public set transportInputNone(value: boolean | cdktf.IResolvable) {
    this._transportInputNone = value;
  }
  public resetTransportInputNone() {
    this._transportInputNone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transportInputNoneInput() {
    return this._transportInputNone;
  }

  // transport_output - computed: false, optional: true, required: false
  private _transportOutput?: string[]; 
  public get transportOutput() {
    return this.getListAttribute('transport_output');
  }
  public set transportOutput(value: string[]) {
    this._transportOutput = value;
  }
  public resetTransportOutput() {
    this._transportOutput = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transportOutputInput() {
    return this._transportOutput;
  }

  // transport_output_all - computed: false, optional: true, required: false
  private _transportOutputAll?: boolean | cdktf.IResolvable; 
  public get transportOutputAll() {
    return this.getBooleanAttribute('transport_output_all');
  }
  public set transportOutputAll(value: boolean | cdktf.IResolvable) {
    this._transportOutputAll = value;
  }
  public resetTransportOutputAll() {
    this._transportOutputAll = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transportOutputAllInput() {
    return this._transportOutputAll;
  }

  // transport_output_none - computed: false, optional: true, required: false
  private _transportOutputNone?: boolean | cdktf.IResolvable; 
  public get transportOutputNone() {
    return this.getBooleanAttribute('transport_output_none');
  }
  public set transportOutputNone(value: boolean | cdktf.IResolvable) {
    this._transportOutputNone = value;
  }
  public resetTransportOutputNone() {
    this._transportOutputNone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transportOutputNoneInput() {
    return this._transportOutputNone;
  }

  // transport_preferred_protocol - computed: false, optional: true, required: false
  private _transportPreferredProtocol?: string; 
  public get transportPreferredProtocol() {
    return this.getStringAttribute('transport_preferred_protocol');
  }
  public set transportPreferredProtocol(value: string) {
    this._transportPreferredProtocol = value;
  }
  public resetTransportPreferredProtocol() {
    this._transportPreferredProtocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transportPreferredProtocolInput() {
    return this._transportPreferredProtocol;
  }
}

export class LineVtyList extends cdktf.ComplexList {
  public internalValue? : LineVty[] | cdktf.IResolvable

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
  public get(index: number): LineVtyOutputReference {
    return new LineVtyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.2/docs/resources/line iosxe_line}
*/
export class Line extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "iosxe_line";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Line resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Line to import
  * @param importFromId The id of the existing Line that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.2/docs/resources/line#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Line to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "iosxe_line", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.2/docs/resources/line iosxe_line} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LineConfig = {}
  */
  public constructor(scope: Construct, id: string, config: LineConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'iosxe_line',
      terraformGeneratorMetadata: {
        providerName: 'iosxe',
        providerVersion: '0.10.2',
        providerVersionConstraint: '0.10.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._aux.internalValue = config.aux;
    this._console.internalValue = config.console;
    this._deleteMode = config.deleteMode;
    this._device = config.device;
    this._vty.internalValue = config.vty;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // aux - computed: false, optional: true, required: false
  private _aux = new LineAuxList(this, "aux", false);
  public get aux() {
    return this._aux;
  }
  public putAux(value: LineAux[] | cdktf.IResolvable) {
    this._aux.internalValue = value;
  }
  public resetAux() {
    this._aux.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get auxInput() {
    return this._aux.internalValue;
  }

  // console - computed: false, optional: true, required: false
  private _console = new LineConsoleList(this, "console", false);
  public get console() {
    return this._console;
  }
  public putConsole(value: LineConsole[] | cdktf.IResolvable) {
    this._console.internalValue = value;
  }
  public resetConsole() {
    this._console.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get consoleInput() {
    return this._console.internalValue;
  }

  // delete_mode - computed: false, optional: true, required: false
  private _deleteMode?: string; 
  public get deleteMode() {
    return this.getStringAttribute('delete_mode');
  }
  public set deleteMode(value: string) {
    this._deleteMode = value;
  }
  public resetDeleteMode() {
    this._deleteMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteModeInput() {
    return this._deleteMode;
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

  // vty - computed: false, optional: true, required: false
  private _vty = new LineVtyList(this, "vty", false);
  public get vty() {
    return this._vty;
  }
  public putVty(value: LineVty[] | cdktf.IResolvable) {
    this._vty.internalValue = value;
  }
  public resetVty() {
    this._vty.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vtyInput() {
    return this._vty.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      aux: cdktf.listMapper(lineAuxToTerraform, false)(this._aux.internalValue),
      console: cdktf.listMapper(lineConsoleToTerraform, false)(this._console.internalValue),
      delete_mode: cdktf.stringToTerraform(this._deleteMode),
      device: cdktf.stringToTerraform(this._device),
      vty: cdktf.listMapper(lineVtyToTerraform, false)(this._vty.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      aux: {
        value: cdktf.listMapperHcl(lineAuxToHclTerraform, false)(this._aux.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "LineAuxList",
      },
      console: {
        value: cdktf.listMapperHcl(lineConsoleToHclTerraform, false)(this._console.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "LineConsoleList",
      },
      delete_mode: {
        value: cdktf.stringToHclTerraform(this._deleteMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      device: {
        value: cdktf.stringToHclTerraform(this._device),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vty: {
        value: cdktf.listMapperHcl(lineVtyToHclTerraform, false)(this._vty.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "LineVtyList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
