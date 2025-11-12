// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/authentication_console
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AuthenticationConsoleAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/authentication_console#id AuthenticationConsoleA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/authentication_console#uuid AuthenticationConsoleA#uuid}
  */
  readonly uuid?: string;
  /**
  * type_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/authentication_console#type_cfg AuthenticationConsoleA#type_cfg}
  */
  readonly typeCfg?: AuthenticationConsoleTypeCfgA;
}
export interface AuthenticationConsoleTypeCfgA {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/authentication_console#console_type AuthenticationConsoleA#console_type}
  */
  readonly consoleType?: string;
  /**
  * The login authentication type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/authentication_console#type AuthenticationConsoleA#type}
  */
  readonly type?: number;
}

export function authenticationConsoleTypeCfgAToTerraform(struct?: AuthenticationConsoleTypeCfgAOutputReference | AuthenticationConsoleTypeCfgA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    console_type: cdktf.stringToTerraform(struct!.consoleType),
    type: cdktf.numberToTerraform(struct!.type),
  }
}


export function authenticationConsoleTypeCfgAToHclTerraform(struct?: AuthenticationConsoleTypeCfgAOutputReference | AuthenticationConsoleTypeCfgA): any {
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

export class AuthenticationConsoleTypeCfgAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AuthenticationConsoleTypeCfgA | undefined {
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

  public set internalValue(value: AuthenticationConsoleTypeCfgA | undefined) {
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

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/authentication_console thunder_authentication_console}
*/
export class AuthenticationConsoleA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_authentication_console";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AuthenticationConsoleA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AuthenticationConsoleA to import
  * @param importFromId The id of the existing AuthenticationConsoleA that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/authentication_console#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AuthenticationConsoleA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_authentication_console", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/authentication_console thunder_authentication_console} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AuthenticationConsoleAConfig = {}
  */
  public constructor(scope: Construct, id: string, config: AuthenticationConsoleAConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_authentication_console',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.4.2',
        providerVersionConstraint: '1.4.2'
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
    this._uuid = config.uuid;
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
  private _typeCfg = new AuthenticationConsoleTypeCfgAOutputReference(this, "type_cfg");
  public get typeCfg() {
    return this._typeCfg;
  }
  public putTypeCfg(value: AuthenticationConsoleTypeCfgA) {
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
      uuid: cdktf.stringToTerraform(this._uuid),
      type_cfg: authenticationConsoleTypeCfgAToTerraform(this._typeCfg.internalValue),
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
      uuid: {
        value: cdktf.stringToHclTerraform(this._uuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      type_cfg: {
        value: authenticationConsoleTypeCfgAToHclTerraform(this._typeCfg.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AuthenticationConsoleTypeCfgAList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
