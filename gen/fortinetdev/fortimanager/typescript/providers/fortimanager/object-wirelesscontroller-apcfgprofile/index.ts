// https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_apcfgprofile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ObjectWirelesscontrollerApcfgprofileConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_apcfgprofile#ac_ip ObjectWirelesscontrollerApcfgprofile#ac_ip}
  */
  readonly acIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_apcfgprofile#ac_port ObjectWirelesscontrollerApcfgprofile#ac_port}
  */
  readonly acPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_apcfgprofile#ac_timer ObjectWirelesscontrollerApcfgprofile#ac_timer}
  */
  readonly acTimer?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_apcfgprofile#ac_type ObjectWirelesscontrollerApcfgprofile#ac_type}
  */
  readonly acType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_apcfgprofile#adom ObjectWirelesscontrollerApcfgprofile#adom}
  */
  readonly adom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_apcfgprofile#ap_family ObjectWirelesscontrollerApcfgprofile#ap_family}
  */
  readonly apFamily?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_apcfgprofile#comment ObjectWirelesscontrollerApcfgprofile#comment}
  */
  readonly comment?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_apcfgprofile#dynamic_sort_subtable ObjectWirelesscontrollerApcfgprofile#dynamic_sort_subtable}
  */
  readonly dynamicSortSubtable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_apcfgprofile#id ObjectWirelesscontrollerApcfgprofile#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_apcfgprofile#name ObjectWirelesscontrollerApcfgprofile#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_apcfgprofile#scopetype ObjectWirelesscontrollerApcfgprofile#scopetype}
  */
  readonly scopetype?: string;
  /**
  * command_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_apcfgprofile#command_list ObjectWirelesscontrollerApcfgprofile#command_list}
  */
  readonly commandList?: ObjectWirelesscontrollerApcfgprofileCommandListStruct[] | cdktf.IResolvable;
}
export interface ObjectWirelesscontrollerApcfgprofileCommandListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_apcfgprofile#id ObjectWirelesscontrollerApcfgprofile#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_apcfgprofile#name ObjectWirelesscontrollerApcfgprofile#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_apcfgprofile#passwd_value ObjectWirelesscontrollerApcfgprofile#passwd_value}
  */
  readonly passwdValue?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_apcfgprofile#type ObjectWirelesscontrollerApcfgprofile#type}
  */
  readonly type?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_apcfgprofile#value ObjectWirelesscontrollerApcfgprofile#value}
  */
  readonly value?: string;
}

export function objectWirelesscontrollerApcfgprofileCommandListStructToTerraform(struct?: ObjectWirelesscontrollerApcfgprofileCommandListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.numberToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
    passwd_value: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.passwdValue),
    type: cdktf.stringToTerraform(struct!.type),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function objectWirelesscontrollerApcfgprofileCommandListStructToHclTerraform(struct?: ObjectWirelesscontrollerApcfgprofileCommandListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.numberToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    passwd_value: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.passwdValue),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObjectWirelesscontrollerApcfgprofileCommandListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ObjectWirelesscontrollerApcfgprofileCommandListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._passwdValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.passwdValue = this._passwdValue;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObjectWirelesscontrollerApcfgprofileCommandListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._name = undefined;
      this._passwdValue = undefined;
      this._type = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._name = value.name;
      this._passwdValue = value.passwdValue;
      this._type = value.type;
      this._value = value.value;
    }
  }

  // id - computed: false, optional: true, required: false
  private _id?: number; 
  public get id() {
    return this.getNumberAttribute('id');
  }
  public set id(value: number) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // name - computed: false, optional: true, required: false
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

  // passwd_value - computed: true, optional: true, required: false
  private _passwdValue?: string[]; 
  public get passwdValue() {
    return cdktf.Fn.tolist(this.getListAttribute('passwd_value'));
  }
  public set passwdValue(value: string[]) {
    this._passwdValue = value;
  }
  public resetPasswdValue() {
    this._passwdValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwdValueInput() {
    return this._passwdValue;
  }

  // type - computed: true, optional: true, required: false
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

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class ObjectWirelesscontrollerApcfgprofileCommandListStructList extends cdktf.ComplexList {
  public internalValue? : ObjectWirelesscontrollerApcfgprofileCommandListStruct[] | cdktf.IResolvable

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
  public get(index: number): ObjectWirelesscontrollerApcfgprofileCommandListStructOutputReference {
    return new ObjectWirelesscontrollerApcfgprofileCommandListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_apcfgprofile fortimanager_object_wirelesscontroller_apcfgprofile}
*/
export class ObjectWirelesscontrollerApcfgprofile extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortimanager_object_wirelesscontroller_apcfgprofile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ObjectWirelesscontrollerApcfgprofile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ObjectWirelesscontrollerApcfgprofile to import
  * @param importFromId The id of the existing ObjectWirelesscontrollerApcfgprofile that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_apcfgprofile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ObjectWirelesscontrollerApcfgprofile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortimanager_object_wirelesscontroller_apcfgprofile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_apcfgprofile fortimanager_object_wirelesscontroller_apcfgprofile} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ObjectWirelesscontrollerApcfgprofileConfig = {}
  */
  public constructor(scope: Construct, id: string, config: ObjectWirelesscontrollerApcfgprofileConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fortimanager_object_wirelesscontroller_apcfgprofile',
      terraformGeneratorMetadata: {
        providerName: 'fortimanager',
        providerVersion: '1.14.0',
        providerVersionConstraint: '1.14.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._acIp = config.acIp;
    this._acPort = config.acPort;
    this._acTimer = config.acTimer;
    this._acType = config.acType;
    this._adom = config.adom;
    this._apFamily = config.apFamily;
    this._comment = config.comment;
    this._dynamicSortSubtable = config.dynamicSortSubtable;
    this._id = config.id;
    this._name = config.name;
    this._scopetype = config.scopetype;
    this._commandList.internalValue = config.commandList;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // ac_ip - computed: true, optional: true, required: false
  private _acIp?: string; 
  public get acIp() {
    return this.getStringAttribute('ac_ip');
  }
  public set acIp(value: string) {
    this._acIp = value;
  }
  public resetAcIp() {
    this._acIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acIpInput() {
    return this._acIp;
  }

  // ac_port - computed: true, optional: true, required: false
  private _acPort?: number; 
  public get acPort() {
    return this.getNumberAttribute('ac_port');
  }
  public set acPort(value: number) {
    this._acPort = value;
  }
  public resetAcPort() {
    this._acPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acPortInput() {
    return this._acPort;
  }

  // ac_timer - computed: true, optional: true, required: false
  private _acTimer?: number; 
  public get acTimer() {
    return this.getNumberAttribute('ac_timer');
  }
  public set acTimer(value: number) {
    this._acTimer = value;
  }
  public resetAcTimer() {
    this._acTimer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acTimerInput() {
    return this._acTimer;
  }

  // ac_type - computed: true, optional: true, required: false
  private _acType?: string; 
  public get acType() {
    return this.getStringAttribute('ac_type');
  }
  public set acType(value: string) {
    this._acType = value;
  }
  public resetAcType() {
    this._acType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acTypeInput() {
    return this._acType;
  }

  // adom - computed: false, optional: true, required: false
  private _adom?: string; 
  public get adom() {
    return this.getStringAttribute('adom');
  }
  public set adom(value: string) {
    this._adom = value;
  }
  public resetAdom() {
    this._adom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adomInput() {
    return this._adom;
  }

  // ap_family - computed: true, optional: true, required: false
  private _apFamily?: string; 
  public get apFamily() {
    return this.getStringAttribute('ap_family');
  }
  public set apFamily(value: string) {
    this._apFamily = value;
  }
  public resetApFamily() {
    this._apFamily = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apFamilyInput() {
    return this._apFamily;
  }

  // comment - computed: false, optional: true, required: false
  private _comment?: string; 
  public get comment() {
    return this.getStringAttribute('comment');
  }
  public set comment(value: string) {
    this._comment = value;
  }
  public resetComment() {
    this._comment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commentInput() {
    return this._comment;
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

  // name - computed: false, optional: true, required: false
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

  // scopetype - computed: false, optional: true, required: false
  private _scopetype?: string; 
  public get scopetype() {
    return this.getStringAttribute('scopetype');
  }
  public set scopetype(value: string) {
    this._scopetype = value;
  }
  public resetScopetype() {
    this._scopetype = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopetypeInput() {
    return this._scopetype;
  }

  // command_list - computed: false, optional: true, required: false
  private _commandList = new ObjectWirelesscontrollerApcfgprofileCommandListStructList(this, "command_list", false);
  public get commandList() {
    return this._commandList;
  }
  public putCommandList(value: ObjectWirelesscontrollerApcfgprofileCommandListStruct[] | cdktf.IResolvable) {
    this._commandList.internalValue = value;
  }
  public resetCommandList() {
    this._commandList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commandListInput() {
    return this._commandList.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      ac_ip: cdktf.stringToTerraform(this._acIp),
      ac_port: cdktf.numberToTerraform(this._acPort),
      ac_timer: cdktf.numberToTerraform(this._acTimer),
      ac_type: cdktf.stringToTerraform(this._acType),
      adom: cdktf.stringToTerraform(this._adom),
      ap_family: cdktf.stringToTerraform(this._apFamily),
      comment: cdktf.stringToTerraform(this._comment),
      dynamic_sort_subtable: cdktf.stringToTerraform(this._dynamicSortSubtable),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      scopetype: cdktf.stringToTerraform(this._scopetype),
      command_list: cdktf.listMapper(objectWirelesscontrollerApcfgprofileCommandListStructToTerraform, true)(this._commandList.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      ac_ip: {
        value: cdktf.stringToHclTerraform(this._acIp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ac_port: {
        value: cdktf.numberToHclTerraform(this._acPort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ac_timer: {
        value: cdktf.numberToHclTerraform(this._acTimer),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ac_type: {
        value: cdktf.stringToHclTerraform(this._acType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      adom: {
        value: cdktf.stringToHclTerraform(this._adom),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ap_family: {
        value: cdktf.stringToHclTerraform(this._apFamily),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      comment: {
        value: cdktf.stringToHclTerraform(this._comment),
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
      scopetype: {
        value: cdktf.stringToHclTerraform(this._scopetype),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      command_list: {
        value: cdktf.listMapperHcl(objectWirelesscontrollerApcfgprofileCommandListStructToHclTerraform, true)(this._commandList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ObjectWirelesscontrollerApcfgprofileCommandListStructList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
