// https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_accprofile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SystemAccprofileConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_accprofile#admingrp SystemAccprofile#admingrp}
  */
  readonly admingrp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_accprofile#dynamic_sort_subtable SystemAccprofile#dynamic_sort_subtable}
  */
  readonly dynamicSortSubtable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_accprofile#exec_alias_grp SystemAccprofile#exec_alias_grp}
  */
  readonly execAliasGrp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_accprofile#id SystemAccprofile#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_accprofile#loggrp SystemAccprofile#loggrp}
  */
  readonly loggrp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_accprofile#mntgrp SystemAccprofile#mntgrp}
  */
  readonly mntgrp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_accprofile#name SystemAccprofile#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_accprofile#netgrp SystemAccprofile#netgrp}
  */
  readonly netgrp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_accprofile#pktmongrp SystemAccprofile#pktmongrp}
  */
  readonly pktmongrp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_accprofile#routegrp SystemAccprofile#routegrp}
  */
  readonly routegrp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_accprofile#swcoregrp SystemAccprofile#swcoregrp}
  */
  readonly swcoregrp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_accprofile#swmonguardgrp SystemAccprofile#swmonguardgrp}
  */
  readonly swmonguardgrp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_accprofile#sysgrp SystemAccprofile#sysgrp}
  */
  readonly sysgrp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_accprofile#utilgrp SystemAccprofile#utilgrp}
  */
  readonly utilgrp?: string;
  /**
  * alias_commands block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_accprofile#alias_commands SystemAccprofile#alias_commands}
  */
  readonly aliasCommands?: SystemAccprofileAliasCommands[] | cdktf.IResolvable;
}
export interface SystemAccprofileAliasCommands {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_accprofile#command_name SystemAccprofile#command_name}
  */
  readonly commandName?: string;
}

export function systemAccprofileAliasCommandsToTerraform(struct?: SystemAccprofileAliasCommands | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    command_name: cdktf.stringToTerraform(struct!.commandName),
  }
}


export function systemAccprofileAliasCommandsToHclTerraform(struct?: SystemAccprofileAliasCommands | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    command_name: {
      value: cdktf.stringToHclTerraform(struct!.commandName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemAccprofileAliasCommandsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SystemAccprofileAliasCommands | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._commandName !== undefined) {
      hasAnyValues = true;
      internalValueResult.commandName = this._commandName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemAccprofileAliasCommands | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._commandName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._commandName = value.commandName;
    }
  }

  // command_name - computed: true, optional: true, required: false
  private _commandName?: string; 
  public get commandName() {
    return this.getStringAttribute('command_name');
  }
  public set commandName(value: string) {
    this._commandName = value;
  }
  public resetCommandName() {
    this._commandName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commandNameInput() {
    return this._commandName;
  }
}

export class SystemAccprofileAliasCommandsList extends cdktf.ComplexList {
  public internalValue? : SystemAccprofileAliasCommands[] | cdktf.IResolvable

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
  public get(index: number): SystemAccprofileAliasCommandsOutputReference {
    return new SystemAccprofileAliasCommandsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_accprofile fortiswitch_system_accprofile}
*/
export class SystemAccprofile extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortiswitch_system_accprofile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SystemAccprofile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SystemAccprofile to import
  * @param importFromId The id of the existing SystemAccprofile that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_accprofile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SystemAccprofile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortiswitch_system_accprofile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_accprofile fortiswitch_system_accprofile} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SystemAccprofileConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SystemAccprofileConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fortiswitch_system_accprofile',
      terraformGeneratorMetadata: {
        providerName: 'fortiswitch',
        providerVersion: '1.1.6'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._admingrp = config.admingrp;
    this._dynamicSortSubtable = config.dynamicSortSubtable;
    this._execAliasGrp = config.execAliasGrp;
    this._id = config.id;
    this._loggrp = config.loggrp;
    this._mntgrp = config.mntgrp;
    this._name = config.name;
    this._netgrp = config.netgrp;
    this._pktmongrp = config.pktmongrp;
    this._routegrp = config.routegrp;
    this._swcoregrp = config.swcoregrp;
    this._swmonguardgrp = config.swmonguardgrp;
    this._sysgrp = config.sysgrp;
    this._utilgrp = config.utilgrp;
    this._aliasCommands.internalValue = config.aliasCommands;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // admingrp - computed: true, optional: true, required: false
  private _admingrp?: string; 
  public get admingrp() {
    return this.getStringAttribute('admingrp');
  }
  public set admingrp(value: string) {
    this._admingrp = value;
  }
  public resetAdmingrp() {
    this._admingrp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get admingrpInput() {
    return this._admingrp;
  }

  // dynamic_sort_subtable - computed: false, optional: true, required: false
  private _dynamicSortSubtable?: string; 
  public get dynamicSortSubtable() {
    return this.getStringAttribute('dynamic_sort_subtable');
  }
  public set dynamicSortSubtable(value: string) {
    this._dynamicSortSubtable = value;
  }
  public resetDynamicSortSubtable() {
    this._dynamicSortSubtable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamicSortSubtableInput() {
    return this._dynamicSortSubtable;
  }

  // exec_alias_grp - computed: true, optional: true, required: false
  private _execAliasGrp?: string; 
  public get execAliasGrp() {
    return this.getStringAttribute('exec_alias_grp');
  }
  public set execAliasGrp(value: string) {
    this._execAliasGrp = value;
  }
  public resetExecAliasGrp() {
    this._execAliasGrp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get execAliasGrpInput() {
    return this._execAliasGrp;
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

  // loggrp - computed: true, optional: true, required: false
  private _loggrp?: string; 
  public get loggrp() {
    return this.getStringAttribute('loggrp');
  }
  public set loggrp(value: string) {
    this._loggrp = value;
  }
  public resetLoggrp() {
    this._loggrp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loggrpInput() {
    return this._loggrp;
  }

  // mntgrp - computed: true, optional: true, required: false
  private _mntgrp?: string; 
  public get mntgrp() {
    return this.getStringAttribute('mntgrp');
  }
  public set mntgrp(value: string) {
    this._mntgrp = value;
  }
  public resetMntgrp() {
    this._mntgrp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mntgrpInput() {
    return this._mntgrp;
  }

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // netgrp - computed: true, optional: true, required: false
  private _netgrp?: string; 
  public get netgrp() {
    return this.getStringAttribute('netgrp');
  }
  public set netgrp(value: string) {
    this._netgrp = value;
  }
  public resetNetgrp() {
    this._netgrp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get netgrpInput() {
    return this._netgrp;
  }

  // pktmongrp - computed: true, optional: true, required: false
  private _pktmongrp?: string; 
  public get pktmongrp() {
    return this.getStringAttribute('pktmongrp');
  }
  public set pktmongrp(value: string) {
    this._pktmongrp = value;
  }
  public resetPktmongrp() {
    this._pktmongrp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pktmongrpInput() {
    return this._pktmongrp;
  }

  // routegrp - computed: true, optional: true, required: false
  private _routegrp?: string; 
  public get routegrp() {
    return this.getStringAttribute('routegrp');
  }
  public set routegrp(value: string) {
    this._routegrp = value;
  }
  public resetRoutegrp() {
    this._routegrp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routegrpInput() {
    return this._routegrp;
  }

  // swcoregrp - computed: true, optional: true, required: false
  private _swcoregrp?: string; 
  public get swcoregrp() {
    return this.getStringAttribute('swcoregrp');
  }
  public set swcoregrp(value: string) {
    this._swcoregrp = value;
  }
  public resetSwcoregrp() {
    this._swcoregrp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get swcoregrpInput() {
    return this._swcoregrp;
  }

  // swmonguardgrp - computed: true, optional: true, required: false
  private _swmonguardgrp?: string; 
  public get swmonguardgrp() {
    return this.getStringAttribute('swmonguardgrp');
  }
  public set swmonguardgrp(value: string) {
    this._swmonguardgrp = value;
  }
  public resetSwmonguardgrp() {
    this._swmonguardgrp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get swmonguardgrpInput() {
    return this._swmonguardgrp;
  }

  // sysgrp - computed: true, optional: true, required: false
  private _sysgrp?: string; 
  public get sysgrp() {
    return this.getStringAttribute('sysgrp');
  }
  public set sysgrp(value: string) {
    this._sysgrp = value;
  }
  public resetSysgrp() {
    this._sysgrp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sysgrpInput() {
    return this._sysgrp;
  }

  // utilgrp - computed: true, optional: true, required: false
  private _utilgrp?: string; 
  public get utilgrp() {
    return this.getStringAttribute('utilgrp');
  }
  public set utilgrp(value: string) {
    this._utilgrp = value;
  }
  public resetUtilgrp() {
    this._utilgrp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get utilgrpInput() {
    return this._utilgrp;
  }

  // alias_commands - computed: false, optional: true, required: false
  private _aliasCommands = new SystemAccprofileAliasCommandsList(this, "alias_commands", false);
  public get aliasCommands() {
    return this._aliasCommands;
  }
  public putAliasCommands(value: SystemAccprofileAliasCommands[] | cdktf.IResolvable) {
    this._aliasCommands.internalValue = value;
  }
  public resetAliasCommands() {
    this._aliasCommands.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aliasCommandsInput() {
    return this._aliasCommands.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      admingrp: cdktf.stringToTerraform(this._admingrp),
      dynamic_sort_subtable: cdktf.stringToTerraform(this._dynamicSortSubtable),
      exec_alias_grp: cdktf.stringToTerraform(this._execAliasGrp),
      id: cdktf.stringToTerraform(this._id),
      loggrp: cdktf.stringToTerraform(this._loggrp),
      mntgrp: cdktf.stringToTerraform(this._mntgrp),
      name: cdktf.stringToTerraform(this._name),
      netgrp: cdktf.stringToTerraform(this._netgrp),
      pktmongrp: cdktf.stringToTerraform(this._pktmongrp),
      routegrp: cdktf.stringToTerraform(this._routegrp),
      swcoregrp: cdktf.stringToTerraform(this._swcoregrp),
      swmonguardgrp: cdktf.stringToTerraform(this._swmonguardgrp),
      sysgrp: cdktf.stringToTerraform(this._sysgrp),
      utilgrp: cdktf.stringToTerraform(this._utilgrp),
      alias_commands: cdktf.listMapper(systemAccprofileAliasCommandsToTerraform, true)(this._aliasCommands.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      admingrp: {
        value: cdktf.stringToHclTerraform(this._admingrp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dynamic_sort_subtable: {
        value: cdktf.stringToHclTerraform(this._dynamicSortSubtable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      exec_alias_grp: {
        value: cdktf.stringToHclTerraform(this._execAliasGrp),
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
      loggrp: {
        value: cdktf.stringToHclTerraform(this._loggrp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mntgrp: {
        value: cdktf.stringToHclTerraform(this._mntgrp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      netgrp: {
        value: cdktf.stringToHclTerraform(this._netgrp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pktmongrp: {
        value: cdktf.stringToHclTerraform(this._pktmongrp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      routegrp: {
        value: cdktf.stringToHclTerraform(this._routegrp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      swcoregrp: {
        value: cdktf.stringToHclTerraform(this._swcoregrp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      swmonguardgrp: {
        value: cdktf.stringToHclTerraform(this._swmonguardgrp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sysgrp: {
        value: cdktf.stringToHclTerraform(this._sysgrp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      utilgrp: {
        value: cdktf.stringToHclTerraform(this._utilgrp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      alias_commands: {
        value: cdktf.listMapperHcl(systemAccprofileAliasCommandsToHclTerraform, true)(this._aliasCommands.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SystemAccprofileAliasCommandsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
