// https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/systemuser
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SystemuserConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/systemuser#allowedmanagementinterface Systemuser#allowedmanagementinterface}
  */
  readonly allowedmanagementinterface?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/systemuser#externalauth Systemuser#externalauth}
  */
  readonly externalauth?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/systemuser#hashedpassword Systemuser#hashedpassword}
  */
  readonly hashedpassword?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/systemuser#id Systemuser#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/systemuser#logging Systemuser#logging}
  */
  readonly logging?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/systemuser#maxsession Systemuser#maxsession}
  */
  readonly maxsession?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/systemuser#password Systemuser#password}
  */
  readonly password?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/systemuser#promptstring Systemuser#promptstring}
  */
  readonly promptstring?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/systemuser#timeout Systemuser#timeout}
  */
  readonly timeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/systemuser#username Systemuser#username}
  */
  readonly username: string;
  /**
  * cmdpolicybinding block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/systemuser#cmdpolicybinding Systemuser#cmdpolicybinding}
  */
  readonly cmdpolicybinding?: SystemuserCmdpolicybinding[] | cdktf.IResolvable;
}
export interface SystemuserCmdpolicybinding {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/systemuser#policyname Systemuser#policyname}
  */
  readonly policyname?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/systemuser#priority Systemuser#priority}
  */
  readonly priority?: number;
}

export function systemuserCmdpolicybindingToTerraform(struct?: SystemuserCmdpolicybinding | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    policyname: cdktf.stringToTerraform(struct!.policyname),
    priority: cdktf.numberToTerraform(struct!.priority),
  }
}


export function systemuserCmdpolicybindingToHclTerraform(struct?: SystemuserCmdpolicybinding | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    policyname: {
      value: cdktf.stringToHclTerraform(struct!.policyname),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    priority: {
      value: cdktf.numberToHclTerraform(struct!.priority),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemuserCmdpolicybindingOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SystemuserCmdpolicybinding | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._policyname !== undefined) {
      hasAnyValues = true;
      internalValueResult.policyname = this._policyname;
    }
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemuserCmdpolicybinding | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._policyname = undefined;
      this._priority = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._policyname = value.policyname;
      this._priority = value.priority;
    }
  }

  // policyname - computed: true, optional: true, required: false
  private _policyname?: string; 
  public get policyname() {
    return this.getStringAttribute('policyname');
  }
  public set policyname(value: string) {
    this._policyname = value;
  }
  public resetPolicyname() {
    this._policyname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policynameInput() {
    return this._policyname;
  }

  // priority - computed: true, optional: true, required: false
  private _priority?: number; 
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number) {
    this._priority = value;
  }
  public resetPriority() {
    this._priority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }
}

export class SystemuserCmdpolicybindingList extends cdktf.ComplexList {
  public internalValue? : SystemuserCmdpolicybinding[] | cdktf.IResolvable

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
  public get(index: number): SystemuserCmdpolicybindingOutputReference {
    return new SystemuserCmdpolicybindingOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/systemuser citrixadc_systemuser}
*/
export class Systemuser extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "citrixadc_systemuser";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Systemuser resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Systemuser to import
  * @param importFromId The id of the existing Systemuser that should be imported. Refer to the {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/systemuser#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Systemuser to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "citrixadc_systemuser", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/systemuser citrixadc_systemuser} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SystemuserConfig
  */
  public constructor(scope: Construct, id: string, config: SystemuserConfig) {
    super(scope, id, {
      terraformResourceType: 'citrixadc_systemuser',
      terraformGeneratorMetadata: {
        providerName: 'citrixadc',
        providerVersion: '1.45.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._allowedmanagementinterface = config.allowedmanagementinterface;
    this._externalauth = config.externalauth;
    this._hashedpassword = config.hashedpassword;
    this._id = config.id;
    this._logging = config.logging;
    this._maxsession = config.maxsession;
    this._password = config.password;
    this._promptstring = config.promptstring;
    this._timeout = config.timeout;
    this._username = config.username;
    this._cmdpolicybinding.internalValue = config.cmdpolicybinding;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allowedmanagementinterface - computed: true, optional: true, required: false
  private _allowedmanagementinterface?: string[]; 
  public get allowedmanagementinterface() {
    return this.getListAttribute('allowedmanagementinterface');
  }
  public set allowedmanagementinterface(value: string[]) {
    this._allowedmanagementinterface = value;
  }
  public resetAllowedmanagementinterface() {
    this._allowedmanagementinterface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedmanagementinterfaceInput() {
    return this._allowedmanagementinterface;
  }

  // externalauth - computed: true, optional: true, required: false
  private _externalauth?: string; 
  public get externalauth() {
    return this.getStringAttribute('externalauth');
  }
  public set externalauth(value: string) {
    this._externalauth = value;
  }
  public resetExternalauth() {
    this._externalauth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalauthInput() {
    return this._externalauth;
  }

  // hashedpassword - computed: true, optional: true, required: false
  private _hashedpassword?: string; 
  public get hashedpassword() {
    return this.getStringAttribute('hashedpassword');
  }
  public set hashedpassword(value: string) {
    this._hashedpassword = value;
  }
  public resetHashedpassword() {
    this._hashedpassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hashedpasswordInput() {
    return this._hashedpassword;
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

  // logging - computed: true, optional: true, required: false
  private _logging?: string; 
  public get logging() {
    return this.getStringAttribute('logging');
  }
  public set logging(value: string) {
    this._logging = value;
  }
  public resetLogging() {
    this._logging = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loggingInput() {
    return this._logging;
  }

  // maxsession - computed: true, optional: true, required: false
  private _maxsession?: number; 
  public get maxsession() {
    return this.getNumberAttribute('maxsession');
  }
  public set maxsession(value: number) {
    this._maxsession = value;
  }
  public resetMaxsession() {
    this._maxsession = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxsessionInput() {
    return this._maxsession;
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

  // promptstring - computed: true, optional: true, required: false
  private _promptstring?: string; 
  public get promptstring() {
    return this.getStringAttribute('promptstring');
  }
  public set promptstring(value: string) {
    this._promptstring = value;
  }
  public resetPromptstring() {
    this._promptstring = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get promptstringInput() {
    return this._promptstring;
  }

  // timeout - computed: true, optional: true, required: false
  private _timeout?: number; 
  public get timeout() {
    return this.getNumberAttribute('timeout');
  }
  public set timeout(value: number) {
    this._timeout = value;
  }
  public resetTimeout() {
    this._timeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout;
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

  // cmdpolicybinding - computed: false, optional: true, required: false
  private _cmdpolicybinding = new SystemuserCmdpolicybindingList(this, "cmdpolicybinding", true);
  public get cmdpolicybinding() {
    return this._cmdpolicybinding;
  }
  public putCmdpolicybinding(value: SystemuserCmdpolicybinding[] | cdktf.IResolvable) {
    this._cmdpolicybinding.internalValue = value;
  }
  public resetCmdpolicybinding() {
    this._cmdpolicybinding.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cmdpolicybindingInput() {
    return this._cmdpolicybinding.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      allowedmanagementinterface: cdktf.listMapper(cdktf.stringToTerraform, false)(this._allowedmanagementinterface),
      externalauth: cdktf.stringToTerraform(this._externalauth),
      hashedpassword: cdktf.stringToTerraform(this._hashedpassword),
      id: cdktf.stringToTerraform(this._id),
      logging: cdktf.stringToTerraform(this._logging),
      maxsession: cdktf.numberToTerraform(this._maxsession),
      password: cdktf.stringToTerraform(this._password),
      promptstring: cdktf.stringToTerraform(this._promptstring),
      timeout: cdktf.numberToTerraform(this._timeout),
      username: cdktf.stringToTerraform(this._username),
      cmdpolicybinding: cdktf.listMapper(systemuserCmdpolicybindingToTerraform, true)(this._cmdpolicybinding.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      allowedmanagementinterface: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._allowedmanagementinterface),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      externalauth: {
        value: cdktf.stringToHclTerraform(this._externalauth),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hashedpassword: {
        value: cdktf.stringToHclTerraform(this._hashedpassword),
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
      logging: {
        value: cdktf.stringToHclTerraform(this._logging),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      maxsession: {
        value: cdktf.numberToHclTerraform(this._maxsession),
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
      promptstring: {
        value: cdktf.stringToHclTerraform(this._promptstring),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeout: {
        value: cdktf.numberToHclTerraform(this._timeout),
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
      cmdpolicybinding: {
        value: cdktf.listMapperHcl(systemuserCmdpolicybindingToHclTerraform, true)(this._cmdpolicybinding.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "SystemuserCmdpolicybindingList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
