// https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_apiuser_setting
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SystemApiuserSettingConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_apiuser_setting#accprofile SystemApiuserSetting#accprofile}
  */
  readonly accprofile: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_apiuser_setting#comments SystemApiuserSetting#comments}
  */
  readonly comments?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_apiuser_setting#id SystemApiuserSetting#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_apiuser_setting#name SystemApiuserSetting#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_apiuser_setting#vdom SystemApiuserSetting#vdom}
  */
  readonly vdom: string[];
  /**
  * trusthost block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_apiuser_setting#trusthost SystemApiuserSetting#trusthost}
  */
  readonly trusthost: SystemApiuserSettingTrusthost[] | cdktf.IResolvable;
}
export interface SystemApiuserSettingTrusthost {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_apiuser_setting#ipv4_trusthost SystemApiuserSetting#ipv4_trusthost}
  */
  readonly ipv4Trusthost: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_apiuser_setting#type SystemApiuserSetting#type}
  */
  readonly type: string;
}

export function systemApiuserSettingTrusthostToTerraform(struct?: SystemApiuserSettingTrusthost | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ipv4_trusthost: cdktf.stringToTerraform(struct!.ipv4Trusthost),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function systemApiuserSettingTrusthostToHclTerraform(struct?: SystemApiuserSettingTrusthost | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ipv4_trusthost: {
      value: cdktf.stringToHclTerraform(struct!.ipv4Trusthost),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
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

export class SystemApiuserSettingTrusthostOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SystemApiuserSettingTrusthost | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipv4Trusthost !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4Trusthost = this._ipv4Trusthost;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemApiuserSettingTrusthost | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ipv4Trusthost = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ipv4Trusthost = value.ipv4Trusthost;
      this._type = value.type;
    }
  }

  // ipv4_trusthost - computed: false, optional: false, required: true
  private _ipv4Trusthost?: string; 
  public get ipv4Trusthost() {
    return this.getStringAttribute('ipv4_trusthost');
  }
  public set ipv4Trusthost(value: string) {
    this._ipv4Trusthost = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4TrusthostInput() {
    return this._ipv4Trusthost;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

export class SystemApiuserSettingTrusthostList extends cdktf.ComplexList {
  public internalValue? : SystemApiuserSettingTrusthost[] | cdktf.IResolvable

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
  public get(index: number): SystemApiuserSettingTrusthostOutputReference {
    return new SystemApiuserSettingTrusthostOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_apiuser_setting fortios_system_apiuser_setting}
*/
export class SystemApiuserSetting extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortios_system_apiuser_setting";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SystemApiuserSetting resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SystemApiuserSetting to import
  * @param importFromId The id of the existing SystemApiuserSetting that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_apiuser_setting#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SystemApiuserSetting to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortios_system_apiuser_setting", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_apiuser_setting fortios_system_apiuser_setting} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SystemApiuserSettingConfig
  */
  public constructor(scope: Construct, id: string, config: SystemApiuserSettingConfig) {
    super(scope, id, {
      terraformResourceType: 'fortios_system_apiuser_setting',
      terraformGeneratorMetadata: {
        providerName: 'fortios',
        providerVersion: '1.23.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accprofile = config.accprofile;
    this._comments = config.comments;
    this._id = config.id;
    this._name = config.name;
    this._vdom = config.vdom;
    this._trusthost.internalValue = config.trusthost;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // accprofile - computed: false, optional: false, required: true
  private _accprofile?: string; 
  public get accprofile() {
    return this.getStringAttribute('accprofile');
  }
  public set accprofile(value: string) {
    this._accprofile = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accprofileInput() {
    return this._accprofile;
  }

  // comments - computed: false, optional: true, required: false
  private _comments?: string; 
  public get comments() {
    return this.getStringAttribute('comments');
  }
  public set comments(value: string) {
    this._comments = value;
  }
  public resetComments() {
    this._comments = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commentsInput() {
    return this._comments;
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

  // vdom - computed: false, optional: false, required: true
  private _vdom?: string[]; 
  public get vdom() {
    return this.getListAttribute('vdom');
  }
  public set vdom(value: string[]) {
    this._vdom = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vdomInput() {
    return this._vdom;
  }

  // trusthost - computed: false, optional: false, required: true
  private _trusthost = new SystemApiuserSettingTrusthostList(this, "trusthost", false);
  public get trusthost() {
    return this._trusthost;
  }
  public putTrusthost(value: SystemApiuserSettingTrusthost[] | cdktf.IResolvable) {
    this._trusthost.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get trusthostInput() {
    return this._trusthost.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      accprofile: cdktf.stringToTerraform(this._accprofile),
      comments: cdktf.stringToTerraform(this._comments),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      vdom: cdktf.listMapper(cdktf.stringToTerraform, false)(this._vdom),
      trusthost: cdktf.listMapper(systemApiuserSettingTrusthostToTerraform, true)(this._trusthost.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      accprofile: {
        value: cdktf.stringToHclTerraform(this._accprofile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      comments: {
        value: cdktf.stringToHclTerraform(this._comments),
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
      vdom: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._vdom),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      trusthost: {
        value: cdktf.listMapperHcl(systemApiuserSettingTrusthostToHclTerraform, true)(this._trusthost.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SystemApiuserSettingTrusthostList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
