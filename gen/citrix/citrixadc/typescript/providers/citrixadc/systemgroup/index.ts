// https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/systemgroup
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SystemgroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/systemgroup#allowedmanagementinterface Systemgroup#allowedmanagementinterface}
  */
  readonly allowedmanagementinterface?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/systemgroup#groupname Systemgroup#groupname}
  */
  readonly groupname: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/systemgroup#id Systemgroup#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/systemgroup#promptstring Systemgroup#promptstring}
  */
  readonly promptstring?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/systemgroup#systemusers Systemgroup#systemusers}
  */
  readonly systemusers?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/systemgroup#timeout Systemgroup#timeout}
  */
  readonly timeout?: number;
  /**
  * cmdpolicybinding block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/systemgroup#cmdpolicybinding Systemgroup#cmdpolicybinding}
  */
  readonly cmdpolicybinding?: SystemgroupCmdpolicybinding[] | cdktf.IResolvable;
}
export interface SystemgroupCmdpolicybinding {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/systemgroup#policyname Systemgroup#policyname}
  */
  readonly policyname?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/systemgroup#priority Systemgroup#priority}
  */
  readonly priority?: number;
}

export function systemgroupCmdpolicybindingToTerraform(struct?: SystemgroupCmdpolicybinding | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    policyname: cdktf.stringToTerraform(struct!.policyname),
    priority: cdktf.numberToTerraform(struct!.priority),
  }
}


export function systemgroupCmdpolicybindingToHclTerraform(struct?: SystemgroupCmdpolicybinding | cdktf.IResolvable): any {
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

export class SystemgroupCmdpolicybindingOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SystemgroupCmdpolicybinding | cdktf.IResolvable | undefined {
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

  public set internalValue(value: SystemgroupCmdpolicybinding | cdktf.IResolvable | undefined) {
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

export class SystemgroupCmdpolicybindingList extends cdktf.ComplexList {
  public internalValue? : SystemgroupCmdpolicybinding[] | cdktf.IResolvable

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
  public get(index: number): SystemgroupCmdpolicybindingOutputReference {
    return new SystemgroupCmdpolicybindingOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/systemgroup citrixadc_systemgroup}
*/
export class Systemgroup extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "citrixadc_systemgroup";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Systemgroup resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Systemgroup to import
  * @param importFromId The id of the existing Systemgroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/systemgroup#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Systemgroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "citrixadc_systemgroup", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/systemgroup citrixadc_systemgroup} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SystemgroupConfig
  */
  public constructor(scope: Construct, id: string, config: SystemgroupConfig) {
    super(scope, id, {
      terraformResourceType: 'citrixadc_systemgroup',
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
    this._groupname = config.groupname;
    this._id = config.id;
    this._promptstring = config.promptstring;
    this._systemusers = config.systemusers;
    this._timeout = config.timeout;
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

  // groupname - computed: false, optional: false, required: true
  private _groupname?: string; 
  public get groupname() {
    return this.getStringAttribute('groupname');
  }
  public set groupname(value: string) {
    this._groupname = value;
  }
  // Temporarily expose input value. Use with caution.
  public get groupnameInput() {
    return this._groupname;
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

  // systemusers - computed: false, optional: true, required: false
  private _systemusers?: string[]; 
  public get systemusers() {
    return cdktf.Fn.tolist(this.getListAttribute('systemusers'));
  }
  public set systemusers(value: string[]) {
    this._systemusers = value;
  }
  public resetSystemusers() {
    this._systemusers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get systemusersInput() {
    return this._systemusers;
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

  // cmdpolicybinding - computed: false, optional: true, required: false
  private _cmdpolicybinding = new SystemgroupCmdpolicybindingList(this, "cmdpolicybinding", true);
  public get cmdpolicybinding() {
    return this._cmdpolicybinding;
  }
  public putCmdpolicybinding(value: SystemgroupCmdpolicybinding[] | cdktf.IResolvable) {
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
      groupname: cdktf.stringToTerraform(this._groupname),
      id: cdktf.stringToTerraform(this._id),
      promptstring: cdktf.stringToTerraform(this._promptstring),
      systemusers: cdktf.listMapper(cdktf.stringToTerraform, false)(this._systemusers),
      timeout: cdktf.numberToTerraform(this._timeout),
      cmdpolicybinding: cdktf.listMapper(systemgroupCmdpolicybindingToTerraform, true)(this._cmdpolicybinding.internalValue),
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
      groupname: {
        value: cdktf.stringToHclTerraform(this._groupname),
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
      promptstring: {
        value: cdktf.stringToHclTerraform(this._promptstring),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      systemusers: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._systemusers),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      timeout: {
        value: cdktf.numberToHclTerraform(this._timeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      cmdpolicybinding: {
        value: cdktf.listMapperHcl(systemgroupCmdpolicybindingToHclTerraform, true)(this._cmdpolicybinding.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "SystemgroupCmdpolicybindingList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
