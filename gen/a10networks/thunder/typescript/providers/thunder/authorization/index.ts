// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/authorization
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AuthorizationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Commands level for authorization
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/authorization#commands Authorization#commands}
  */
  readonly commands?: number;
  /**
  * Specify the debug level for authorization (Debug level for command authorization. bitwise OR of the following: 1(common), 2(packet),4(packet detail), 8(md5))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/authorization#debug Authorization#debug}
  */
  readonly debug?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/authorization#id Authorization#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/authorization#uuid Authorization#uuid}
  */
  readonly uuid?: string;
  /**
  * method block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/authorization#method Authorization#method}
  */
  readonly method?: AuthorizationMethod;
}
export interface AuthorizationMethod {
  /**
  * No command authorization
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/authorization#none Authorization#none}
  */
  readonly none?: number;
  /**
  * Using TACACS+ protocol
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/authorization#tacplus Authorization#tacplus}
  */
  readonly tacplus?: number;
}

export function authorizationMethodToTerraform(struct?: AuthorizationMethodOutputReference | AuthorizationMethod): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    none: cdktf.numberToTerraform(struct!.none),
    tacplus: cdktf.numberToTerraform(struct!.tacplus),
  }
}


export function authorizationMethodToHclTerraform(struct?: AuthorizationMethodOutputReference | AuthorizationMethod): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    none: {
      value: cdktf.numberToHclTerraform(struct!.none),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tacplus: {
      value: cdktf.numberToHclTerraform(struct!.tacplus),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AuthorizationMethodOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AuthorizationMethod | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._none !== undefined) {
      hasAnyValues = true;
      internalValueResult.none = this._none;
    }
    if (this._tacplus !== undefined) {
      hasAnyValues = true;
      internalValueResult.tacplus = this._tacplus;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AuthorizationMethod | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._none = undefined;
      this._tacplus = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._none = value.none;
      this._tacplus = value.tacplus;
    }
  }

  // none - computed: false, optional: true, required: false
  private _none?: number; 
  public get none() {
    return this.getNumberAttribute('none');
  }
  public set none(value: number) {
    this._none = value;
  }
  public resetNone() {
    this._none = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noneInput() {
    return this._none;
  }

  // tacplus - computed: false, optional: true, required: false
  private _tacplus?: number; 
  public get tacplus() {
    return this.getNumberAttribute('tacplus');
  }
  public set tacplus(value: number) {
    this._tacplus = value;
  }
  public resetTacplus() {
    this._tacplus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tacplusInput() {
    return this._tacplus;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/authorization thunder_authorization}
*/
export class Authorization extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_authorization";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Authorization resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Authorization to import
  * @param importFromId The id of the existing Authorization that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/authorization#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Authorization to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_authorization", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/authorization thunder_authorization} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AuthorizationConfig = {}
  */
  public constructor(scope: Construct, id: string, config: AuthorizationConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_authorization',
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
    this._commands = config.commands;
    this._debug = config.debug;
    this._id = config.id;
    this._uuid = config.uuid;
    this._method.internalValue = config.method;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // commands - computed: false, optional: true, required: false
  private _commands?: number; 
  public get commands() {
    return this.getNumberAttribute('commands');
  }
  public set commands(value: number) {
    this._commands = value;
  }
  public resetCommands() {
    this._commands = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commandsInput() {
    return this._commands;
  }

  // debug - computed: false, optional: true, required: false
  private _debug?: number; 
  public get debug() {
    return this.getNumberAttribute('debug');
  }
  public set debug(value: number) {
    this._debug = value;
  }
  public resetDebug() {
    this._debug = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get debugInput() {
    return this._debug;
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

  // method - computed: false, optional: true, required: false
  private _method = new AuthorizationMethodOutputReference(this, "method");
  public get method() {
    return this._method;
  }
  public putMethod(value: AuthorizationMethod) {
    this._method.internalValue = value;
  }
  public resetMethod() {
    this._method.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get methodInput() {
    return this._method.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      commands: cdktf.numberToTerraform(this._commands),
      debug: cdktf.numberToTerraform(this._debug),
      id: cdktf.stringToTerraform(this._id),
      uuid: cdktf.stringToTerraform(this._uuid),
      method: authorizationMethodToTerraform(this._method.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      commands: {
        value: cdktf.numberToHclTerraform(this._commands),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      debug: {
        value: cdktf.numberToHclTerraform(this._debug),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      uuid: {
        value: cdktf.stringToHclTerraform(this._uuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      method: {
        value: authorizationMethodToHclTerraform(this._method.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AuthorizationMethodList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
