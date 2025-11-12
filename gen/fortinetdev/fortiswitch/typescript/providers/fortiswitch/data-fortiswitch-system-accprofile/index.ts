// https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/data-sources/system_accprofile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataFortiswitchSystemAccprofileConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/data-sources/system_accprofile#id DataFortiswitchSystemAccprofile#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/data-sources/system_accprofile#name DataFortiswitchSystemAccprofile#name}
  */
  readonly name: string;
}
export interface DataFortiswitchSystemAccprofileAliasCommands {
}

export function dataFortiswitchSystemAccprofileAliasCommandsToTerraform(struct?: DataFortiswitchSystemAccprofileAliasCommands): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataFortiswitchSystemAccprofileAliasCommandsToHclTerraform(struct?: DataFortiswitchSystemAccprofileAliasCommands): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataFortiswitchSystemAccprofileAliasCommandsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataFortiswitchSystemAccprofileAliasCommands | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFortiswitchSystemAccprofileAliasCommands | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // command_name - computed: true, optional: false, required: false
  public get commandName() {
    return this.getStringAttribute('command_name');
  }
}

export class DataFortiswitchSystemAccprofileAliasCommandsList extends cdktf.ComplexList {

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
  public get(index: number): DataFortiswitchSystemAccprofileAliasCommandsOutputReference {
    return new DataFortiswitchSystemAccprofileAliasCommandsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/data-sources/system_accprofile fortiswitch_system_accprofile}
*/
export class DataFortiswitchSystemAccprofile extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortiswitch_system_accprofile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataFortiswitchSystemAccprofile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataFortiswitchSystemAccprofile to import
  * @param importFromId The id of the existing DataFortiswitchSystemAccprofile that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/data-sources/system_accprofile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataFortiswitchSystemAccprofile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortiswitch_system_accprofile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/data-sources/system_accprofile fortiswitch_system_accprofile} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataFortiswitchSystemAccprofileConfig
  */
  public constructor(scope: Construct, id: string, config: DataFortiswitchSystemAccprofileConfig) {
    super(scope, id, {
      terraformResourceType: 'fortiswitch_system_accprofile',
      terraformGeneratorMetadata: {
        providerName: 'fortiswitch',
        providerVersion: '1.1.6',
        providerVersionConstraint: '1.1.6'
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
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // admingrp - computed: true, optional: false, required: false
  public get admingrp() {
    return this.getStringAttribute('admingrp');
  }

  // alias_commands - computed: true, optional: false, required: false
  private _aliasCommands = new DataFortiswitchSystemAccprofileAliasCommandsList(this, "alias_commands", false);
  public get aliasCommands() {
    return this._aliasCommands;
  }

  // exec_alias_grp - computed: true, optional: false, required: false
  public get execAliasGrp() {
    return this.getStringAttribute('exec_alias_grp');
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

  // loggrp - computed: true, optional: false, required: false
  public get loggrp() {
    return this.getStringAttribute('loggrp');
  }

  // mntgrp - computed: true, optional: false, required: false
  public get mntgrp() {
    return this.getStringAttribute('mntgrp');
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // netgrp - computed: true, optional: false, required: false
  public get netgrp() {
    return this.getStringAttribute('netgrp');
  }

  // pktmongrp - computed: true, optional: false, required: false
  public get pktmongrp() {
    return this.getStringAttribute('pktmongrp');
  }

  // routegrp - computed: true, optional: false, required: false
  public get routegrp() {
    return this.getStringAttribute('routegrp');
  }

  // swcoregrp - computed: true, optional: false, required: false
  public get swcoregrp() {
    return this.getStringAttribute('swcoregrp');
  }

  // swmonguardgrp - computed: true, optional: false, required: false
  public get swmonguardgrp() {
    return this.getStringAttribute('swmonguardgrp');
  }

  // sysgrp - computed: true, optional: false, required: false
  public get sysgrp() {
    return this.getStringAttribute('sysgrp');
  }

  // utilgrp - computed: true, optional: false, required: false
  public get utilgrp() {
    return this.getStringAttribute('utilgrp');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
