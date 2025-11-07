// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/authentication
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AuthenticationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/authentication#id Authentication#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Multiple same user login reject
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/authentication#multiple_auth_reject Authentication#multiple_auth_reject}
  */
  readonly multipleAuthReject?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/authentication#uuid Authentication#uuid}
  */
  readonly uuid?: string;
  /**
  * console block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/authentication#console Authentication#console}
  */
  readonly console?: AuthenticationConsole;
  /**
  * enable_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/authentication#enable_cfg Authentication#enable_cfg}
  */
  readonly enableCfg?: AuthenticationEnableCfg;
  /**
  * login_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/authentication#login_cfg Authentication#login_cfg}
  */
  readonly loginCfg?: AuthenticationLoginCfg;
  /**
  * mode_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/authentication#mode_cfg Authentication#mode_cfg}
  */
  readonly modeCfg?: AuthenticationModeCfg;
  /**
  * type_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/authentication#type_cfg Authentication#type_cfg}
  */
  readonly typeCfg?: AuthenticationTypeCfg;
}
export interface AuthenticationConsoleTypeCfg {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/authentication#console_type Authentication#console_type}
  */
  readonly consoleType?: string;
  /**
  * The login authentication type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/authentication#type Authentication#type}
  */
  readonly type?: number;
}

export function authenticationConsoleTypeCfgToTerraform(struct?: AuthenticationConsoleTypeCfgOutputReference | AuthenticationConsoleTypeCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    console_type: cdktf.stringToTerraform(struct!.consoleType),
    type: cdktf.numberToTerraform(struct!.type),
  }
}


export function authenticationConsoleTypeCfgToHclTerraform(struct?: AuthenticationConsoleTypeCfgOutputReference | AuthenticationConsoleTypeCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    console_type: {
      value: cdktf.stringToHclTerraform(struct!.consoleType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.numberToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AuthenticationConsoleTypeCfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AuthenticationConsoleTypeCfg | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._consoleType !== undefined) {
      hasAnyValues = true;
      internalValueResult.consoleType = this._consoleType;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AuthenticationConsoleTypeCfg | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._consoleType = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._consoleType = value.consoleType;
      this._type = value.type;
    }
  }

  // console_type - computed: false, optional: true, required: false
  private _consoleType?: string; 
  public get consoleType() {
    return this.getStringAttribute('console_type');
  }
  public set consoleType(value: string) {
    this._consoleType = value;
  }
  public resetConsoleType() {
    this._consoleType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get consoleTypeInput() {
    return this._consoleType;
  }

  // type - computed: false, optional: true, required: false
  private _type?: number; 
  public get type() {
    return this.getNumberAttribute('type');
  }
  public set type(value: number) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}
export interface AuthenticationConsole {
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/authentication#uuid Authentication#uuid}
  */
  readonly uuid?: string;
  /**
  * type_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/authentication#type_cfg Authentication#type_cfg}
  */
  readonly typeCfg?: AuthenticationConsoleTypeCfg;
}

export function authenticationConsoleToTerraform(struct?: AuthenticationConsoleOutputReference | AuthenticationConsole): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    uuid: cdktf.stringToTerraform(struct!.uuid),
    type_cfg: authenticationConsoleTypeCfgToTerraform(struct!.typeCfg),
  }
}


export function authenticationConsoleToHclTerraform(struct?: AuthenticationConsoleOutputReference | AuthenticationConsole): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type_cfg: {
      value: authenticationConsoleTypeCfgToHclTerraform(struct!.typeCfg),
      isBlock: true,
      type: "list",
      storageClassType: "AuthenticationConsoleTypeCfgList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AuthenticationConsoleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AuthenticationConsole | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._typeCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.typeCfg = this._typeCfg?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AuthenticationConsole | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._uuid = undefined;
      this._typeCfg.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._uuid = value.uuid;
      this._typeCfg.internalValue = value.typeCfg;
    }
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }

  // type_cfg - computed: false, optional: true, required: false
  private _typeCfg = new AuthenticationConsoleTypeCfgOutputReference(this, "type_cfg");
  public get typeCfg() {
    return this._typeCfg;
  }
  public putTypeCfg(value: AuthenticationConsoleTypeCfg) {
    this._typeCfg.internalValue = value;
  }
  public resetTypeCfg() {
    this._typeCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeCfgInput() {
    return this._typeCfg.internalValue;
  }
}
export interface AuthenticationEnableCfg {
  /**
  * The enable-password authentication type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/authentication#enable_auth_type Authentication#enable_auth_type}
  */
  readonly enableAuthType?: string;
}

export function authenticationEnableCfgToTerraform(struct?: AuthenticationEnableCfgOutputReference | AuthenticationEnableCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable_auth_type: cdktf.stringToTerraform(struct!.enableAuthType),
  }
}


export function authenticationEnableCfgToHclTerraform(struct?: AuthenticationEnableCfgOutputReference | AuthenticationEnableCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable_auth_type: {
      value: cdktf.stringToHclTerraform(struct!.enableAuthType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AuthenticationEnableCfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AuthenticationEnableCfg | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enableAuthType !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableAuthType = this._enableAuthType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AuthenticationEnableCfg | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enableAuthType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enableAuthType = value.enableAuthType;
    }
  }

  // enable_auth_type - computed: false, optional: true, required: false
  private _enableAuthType?: string; 
  public get enableAuthType() {
    return this.getStringAttribute('enable_auth_type');
  }
  public set enableAuthType(value: string) {
    this._enableAuthType = value;
  }
  public resetEnableAuthType() {
    this._enableAuthType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableAuthTypeInput() {
    return this._enableAuthType;
  }
}
export interface AuthenticationLoginCfg {
  /**
  * Configure local user to enter privilege-mode
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/authentication#local Authentication#local}
  */
  readonly local?: number;
  /**
  * Configure to enter privilege-mode
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/authentication#privilege_mode Authentication#privilege_mode}
  */
  readonly privilegeMode?: number;
}

export function authenticationLoginCfgToTerraform(struct?: AuthenticationLoginCfgOutputReference | AuthenticationLoginCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    local: cdktf.numberToTerraform(struct!.local),
    privilege_mode: cdktf.numberToTerraform(struct!.privilegeMode),
  }
}


export function authenticationLoginCfgToHclTerraform(struct?: AuthenticationLoginCfgOutputReference | AuthenticationLoginCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    local: {
      value: cdktf.numberToHclTerraform(struct!.local),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    privilege_mode: {
      value: cdktf.numberToHclTerraform(struct!.privilegeMode),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AuthenticationLoginCfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AuthenticationLoginCfg | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._local !== undefined) {
      hasAnyValues = true;
      internalValueResult.local = this._local;
    }
    if (this._privilegeMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.privilegeMode = this._privilegeMode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AuthenticationLoginCfg | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._local = undefined;
      this._privilegeMode = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._local = value.local;
      this._privilegeMode = value.privilegeMode;
    }
  }

  // local - computed: false, optional: true, required: false
  private _local?: number; 
  public get local() {
    return this.getNumberAttribute('local');
  }
  public set local(value: number) {
    this._local = value;
  }
  public resetLocal() {
    this._local = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localInput() {
    return this._local;
  }

  // privilege_mode - computed: false, optional: true, required: false
  private _privilegeMode?: number; 
  public get privilegeMode() {
    return this.getNumberAttribute('privilege_mode');
  }
  public set privilegeMode(value: number) {
    this._privilegeMode = value;
  }
  public resetPrivilegeMode() {
    this._privilegeMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privilegeModeInput() {
    return this._privilegeMode;
  }
}
export interface AuthenticationModeCfg {
  /**
  * 'multiple': Multiple authentication mode. If an authentication method rejected, try next one; 'single': Single authentication mode. If an authentication method rejected, don't try next one;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/authentication#mode Authentication#mode}
  */
  readonly mode?: string;
}

export function authenticationModeCfgToTerraform(struct?: AuthenticationModeCfgOutputReference | AuthenticationModeCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mode: cdktf.stringToTerraform(struct!.mode),
  }
}


export function authenticationModeCfgToHclTerraform(struct?: AuthenticationModeCfgOutputReference | AuthenticationModeCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    mode: {
      value: cdktf.stringToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AuthenticationModeCfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AuthenticationModeCfg | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AuthenticationModeCfg | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._mode = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._mode = value.mode;
    }
  }

  // mode - computed: false, optional: true, required: false
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
}
export interface AuthenticationTypeCfg {
  /**
  * The login authentication type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/authentication#type Authentication#type}
  */
  readonly type?: string;
}

export function authenticationTypeCfgToTerraform(struct?: AuthenticationTypeCfgOutputReference | AuthenticationTypeCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function authenticationTypeCfgToHclTerraform(struct?: AuthenticationTypeCfgOutputReference | AuthenticationTypeCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AuthenticationTypeCfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AuthenticationTypeCfg | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AuthenticationTypeCfg | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._type = value.type;
    }
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/authentication thunder_authentication}
*/
export class Authentication extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_authentication";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Authentication resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Authentication to import
  * @param importFromId The id of the existing Authentication that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/authentication#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Authentication to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_authentication", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/authentication thunder_authentication} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AuthenticationConfig = {}
  */
  public constructor(scope: Construct, id: string, config: AuthenticationConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_authentication',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.4.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._multipleAuthReject = config.multipleAuthReject;
    this._uuid = config.uuid;
    this._console.internalValue = config.console;
    this._enableCfg.internalValue = config.enableCfg;
    this._loginCfg.internalValue = config.loginCfg;
    this._modeCfg.internalValue = config.modeCfg;
    this._typeCfg.internalValue = config.typeCfg;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // multiple_auth_reject - computed: false, optional: true, required: false
  private _multipleAuthReject?: number; 
  public get multipleAuthReject() {
    return this.getNumberAttribute('multiple_auth_reject');
  }
  public set multipleAuthReject(value: number) {
    this._multipleAuthReject = value;
  }
  public resetMultipleAuthReject() {
    this._multipleAuthReject = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multipleAuthRejectInput() {
    return this._multipleAuthReject;
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }

  // console - computed: false, optional: true, required: false
  private _console = new AuthenticationConsoleOutputReference(this, "console");
  public get console() {
    return this._console;
  }
  public putConsole(value: AuthenticationConsole) {
    this._console.internalValue = value;
  }
  public resetConsole() {
    this._console.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get consoleInput() {
    return this._console.internalValue;
  }

  // enable_cfg - computed: false, optional: true, required: false
  private _enableCfg = new AuthenticationEnableCfgOutputReference(this, "enable_cfg");
  public get enableCfg() {
    return this._enableCfg;
  }
  public putEnableCfg(value: AuthenticationEnableCfg) {
    this._enableCfg.internalValue = value;
  }
  public resetEnableCfg() {
    this._enableCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableCfgInput() {
    return this._enableCfg.internalValue;
  }

  // login_cfg - computed: false, optional: true, required: false
  private _loginCfg = new AuthenticationLoginCfgOutputReference(this, "login_cfg");
  public get loginCfg() {
    return this._loginCfg;
  }
  public putLoginCfg(value: AuthenticationLoginCfg) {
    this._loginCfg.internalValue = value;
  }
  public resetLoginCfg() {
    this._loginCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loginCfgInput() {
    return this._loginCfg.internalValue;
  }

  // mode_cfg - computed: false, optional: true, required: false
  private _modeCfg = new AuthenticationModeCfgOutputReference(this, "mode_cfg");
  public get modeCfg() {
    return this._modeCfg;
  }
  public putModeCfg(value: AuthenticationModeCfg) {
    this._modeCfg.internalValue = value;
  }
  public resetModeCfg() {
    this._modeCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeCfgInput() {
    return this._modeCfg.internalValue;
  }

  // type_cfg - computed: false, optional: true, required: false
  private _typeCfg = new AuthenticationTypeCfgOutputReference(this, "type_cfg");
  public get typeCfg() {
    return this._typeCfg;
  }
  public putTypeCfg(value: AuthenticationTypeCfg) {
    this._typeCfg.internalValue = value;
  }
  public resetTypeCfg() {
    this._typeCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeCfgInput() {
    return this._typeCfg.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      multiple_auth_reject: cdktf.numberToTerraform(this._multipleAuthReject),
      uuid: cdktf.stringToTerraform(this._uuid),
      console: authenticationConsoleToTerraform(this._console.internalValue),
      enable_cfg: authenticationEnableCfgToTerraform(this._enableCfg.internalValue),
      login_cfg: authenticationLoginCfgToTerraform(this._loginCfg.internalValue),
      mode_cfg: authenticationModeCfgToTerraform(this._modeCfg.internalValue),
      type_cfg: authenticationTypeCfgToTerraform(this._typeCfg.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      multiple_auth_reject: {
        value: cdktf.numberToHclTerraform(this._multipleAuthReject),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      uuid: {
        value: cdktf.stringToHclTerraform(this._uuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      console: {
        value: authenticationConsoleToHclTerraform(this._console.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AuthenticationConsoleList",
      },
      enable_cfg: {
        value: authenticationEnableCfgToHclTerraform(this._enableCfg.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AuthenticationEnableCfgList",
      },
      login_cfg: {
        value: authenticationLoginCfgToHclTerraform(this._loginCfg.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AuthenticationLoginCfgList",
      },
      mode_cfg: {
        value: authenticationModeCfgToHclTerraform(this._modeCfg.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AuthenticationModeCfgList",
      },
      type_cfg: {
        value: authenticationTypeCfgToHclTerraform(this._typeCfg.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AuthenticationTypeCfgList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
